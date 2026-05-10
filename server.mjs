import { createServer } from 'node:http'
import { readFileSync, existsSync, statSync } from 'node:fs'
import { resolve, dirname, join, extname } from 'node:path'
import { fileURLToPath } from 'node:url'
import Stripe from 'stripe'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = join(__dirname, 'dist')

// Read env: process.env first, fallback to .env file
let envVars = {}
if (existsSync(join(__dirname, '.env'))) {
  envVars = Object.fromEntries(
    readFileSync(join(__dirname, '.env'), 'utf8')
      .split('\n')
      .filter(l => l && !l.startsWith('#'))
      .map(l => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()] })
  )
}

const env = (key) => process.env[key] || envVars[key] || ''

const API_KEY = env('LAOZHANG_API_KEY')
const BASE_URL = (env('LAOZHANG_BASE_URL') || 'https://api.laozhang.ai/v1').replace(/\/+$/, '')
const STRIPE_SECRET_KEY = env('STRIPE_SECRET_KEY')
const STRIPE_WEBHOOK_SECRET = env('STRIPE_WEBHOOK_SECRET') // optional for now

const stripe = STRIPE_SECRET_KEY ? new Stripe(STRIPE_SECRET_KEY) : null

// Points packages
const PACKAGES = {
  trial:    { points: 50,  price: 600,  name: '体验包 · 50点' },
  standard: { points: 150, price: 1500, name: '标准包 · 150点' },
  premium:  { points: 400, price: 3000, name: '超值包 · 400点' },
}

const MIME = {
  '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css',
  '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.webp': 'image/webp',
  '.woff2': 'font/woff2',
}

function serveStatic(res, urlPath) {
  let filePath = join(DIST, urlPath)
  if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
    filePath = join(DIST, 'index.html')
  }
  if (!existsSync(filePath)) { res.writeHead(404); res.end('Not Found'); return }
  const ext = extname(filePath)
  const content = readFileSync(filePath)
  res.writeHead(200, {
    'Content-Type': MIME[ext] || 'application/octet-stream',
    'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000',
  })
  res.end(content)
}

async function readBody(req) {
  let body = ''
  for await (const chunk of req) body += chunk
  return body
}

async function readBodyRaw(req) {
  const chunks = []
  for await (const chunk of req) chunks.push(chunk)
  return Buffer.concat(chunks)
}

const server = createServer(async (req, res) => {
  // --- CORS for API routes ---
  if (req.url?.startsWith('/api/')) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return }
  }

  // --- Image generation ---
  if (req.url === '/api/generate' && req.method === 'POST') {
    const body = await readBody(req)
    try {
      const { prompt, size } = JSON.parse(body)
      const apiResp = await fetch(`${BASE_URL}/images/generations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${API_KEY}` },
        body: JSON.stringify({ model: 'gpt-image-2-vip', prompt: prompt || '', size: size || '1024x1024' }),
      })
      const data = await apiResp.json()
      if (!apiResp.ok) {
        res.writeHead(apiResp.status, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ success: false, error: JSON.stringify(data).slice(0, 500) }))
        return
      }
      const item = data?.data?.[0]
      let imageUrl = item?.url || ''
      if (!imageUrl && item?.b64_json) imageUrl = `data:image/png;base64,${item.b64_json}`
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ success: true, imageUrl }))
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ success: false, error: String(err) }))
    }
    return
  }

  // --- Stripe: create checkout session ---
  if (req.url === '/api/checkout' && req.method === 'POST') {
    if (!stripe) {
      res.writeHead(500, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ error: 'Stripe not configured' }))
      return
    }
    const body = await readBody(req)
    try {
      const { packageId, userId } = JSON.parse(body)
      const pkg = PACKAGES[packageId]
      if (!pkg) {
        res.writeHead(400, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: 'Invalid package' }))
        return
      }

      const origin = req.headers.origin || req.headers.referer?.replace(/\/$/, '') || 'https://alyes-haibao-daquan.hf.space'

      const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        line_items: [{
          price_data: {
            currency: 'cny',
            product_data: { name: pkg.name },
            unit_amount: pkg.price, // in cents (分)
          },
          quantity: 1,
        }],
        metadata: {
          userId: userId || '',
          packageId,
          points: String(pkg.points),
        },
        success_url: `${origin}/points?payment=success`,
        cancel_url: `${origin}/points?payment=cancel`,
      })

      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ url: session.url }))
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ error: err.message || String(err) }))
    }
    return
  }

  // --- Stripe webhook: payment completed ---
  if (req.url === '/api/stripe-webhook' && req.method === 'POST') {
    const rawBody = await readBodyRaw(req)
    try {
      let event
      if (STRIPE_WEBHOOK_SECRET) {
        const sig = req.headers['stripe-signature']
        event = stripe.webhooks.constructEvent(rawBody, sig, STRIPE_WEBHOOK_SECRET)
      } else {
        event = JSON.parse(rawBody.toString())
      }

      if (event.type === 'checkout.session.completed') {
        const session = event.data.object
        const { userId, points } = session.metadata || {}
        console.log(`[PAYMENT] userId=${userId} points=${points} amount=${session.amount_total}`)

        // Add points via Supabase
        if (userId && points) {
          const supabaseUrl = env('VITE_SUPABASE_URL') || 'https://iobcaqjogyihwxbxtkxk.supabase.co'
          const supabaseKey = env('SUPABASE_SERVICE_KEY') || env('VITE_SUPABASE_ANON_KEY') || 'sb_publishable_HRYey6HsV9X0wepGoz1ITQ_bZbcpkq6'

          const resp = await fetch(`${supabaseUrl}/rest/v1/rpc/add_points`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'apikey': supabaseKey,
              'Authorization': `Bearer ${supabaseKey}`,
            },
            body: JSON.stringify({ p_user_id: userId, p_amount: parseInt(points) }),
          })

          if (!resp.ok) {
            console.error('[PAYMENT] Failed to add points:', await resp.text())
          } else {
            console.log(`[PAYMENT] Added ${points} points to user ${userId}`)
          }
        }
      }

      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ received: true }))
    } catch (err) {
      console.error('[WEBHOOK ERROR]', err.message)
      res.writeHead(400, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ error: err.message }))
    }
    return
  }

  // --- Health check ---
  if (req.url === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ status: 'ok', stripe: !!stripe }))
    return
  }

  // --- Static files ---
  serveStatic(res, req.url)
})

const PORT = process.env.PORT || 3088
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`)
})
