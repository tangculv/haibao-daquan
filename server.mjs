import { createServer } from 'node:http'
import { readFileSync, existsSync, statSync } from 'node:fs'
import { resolve, dirname, join, extname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = join(__dirname, 'dist')

// Read env from process.env (Render injects these), fallback to .env file
let API_KEY = process.env.LAOZHANG_API_KEY
let BASE_URL = process.env.LAOZHANG_BASE_URL

if (!API_KEY && existsSync(join(__dirname, '.env'))) {
  const env = Object.fromEntries(
    readFileSync(join(__dirname, '.env'), 'utf8')
      .split('\n')
      .filter(l => l && !l.startsWith('#'))
      .map(l => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()] })
  )
  API_KEY = env.LAOZHANG_API_KEY
  BASE_URL = env.LAOZHANG_BASE_URL
}

BASE_URL = (BASE_URL || 'https://api.laozhang.ai/v1').replace(/\/+$/, '')

const MIME = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
}

function serveStatic(res, urlPath) {
  let filePath = join(DIST, urlPath)

  // SPA fallback: if file doesn't exist, serve index.html
  if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
    filePath = join(DIST, 'index.html')
  }

  if (!existsSync(filePath)) {
    res.writeHead(404)
    res.end('Not Found')
    return
  }

  const ext = extname(filePath)
  const mime = MIME[ext] || 'application/octet-stream'
  const content = readFileSync(filePath)

  res.writeHead(200, {
    'Content-Type': mime,
    'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000',
  })
  res.end(content)
}

const server = createServer(async (req, res) => {
  // --- API routes ---
  if (req.url === '/api/generate' && req.method === 'POST') {
    let body = ''
    for await (const chunk of req) body += chunk

    try {
      const { prompt, size } = JSON.parse(body)

      const apiResp = await fetch(`${BASE_URL}/images/generations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-image-2-vip',
          prompt: prompt || '',
          size: size || '1024x1024',
        }),
      })

      const data = await apiResp.json()

      if (!apiResp.ok) {
        res.writeHead(apiResp.status, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ success: false, error: JSON.stringify(data).slice(0, 500) }))
        return
      }

      const item = data?.data?.[0]
      let imageUrl = item?.url || ''
      if (!imageUrl && item?.b64_json) {
        imageUrl = `data:image/png;base64,${item.b64_json}`
      }

      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ success: true, imageUrl }))
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ success: false, error: String(err) }))
    }
    return
  }

  // --- Health check ---
  if (req.url === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ status: 'ok' }))
    return
  }

  // --- Static files (frontend) ---
  serveStatic(res, req.url)
})

const PORT = process.env.PORT || 3088
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`)
})
