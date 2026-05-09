import { createServer } from 'node:http'
import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const env = Object.fromEntries(
  readFileSync(resolve(__dirname, '.env'), 'utf8')
    .split('\n')
    .filter(l => l && !l.startsWith('#'))
    .map(l => l.split('=').map(s => s.trim()))
)

const API_KEY = env.LAOZHANG_API_KEY
const BASE_URL = (env.LAOZHANG_BASE_URL || 'https://api.laozhang.ai/v1').replace(/\/+$/, '')

const server = createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.writeHead(204)
    res.end()
    return
  }

  if (req.method === 'POST' && req.url === '/api/generate') {
    let body = ''
    for await (const chunk of req) body += chunk

    try {
      const { prompt, size, image } = JSON.parse(body)

      // Build messages for chat/completions style, or use images/generations
      const apiResp = await fetch(`${BASE_URL}/images/generations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-image-2-vip',
          prompt: image
            ? `[User uploaded an image (base64 provided separately)]\n\n${prompt}`
            : prompt,
          size: size || '1024x1024',
        }),
      })

      const data = await apiResp.json()

      if (!apiResp.ok) {
        res.writeHead(apiResp.status, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ success: false, error: JSON.stringify(data) }))
        return
      }

      const item = data?.data?.[0]
      let imageUrl = item?.url || ''

      // If b64_json is returned, convert to data URL
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

  res.writeHead(404)
  res.end('Not Found')
})

const PORT = process.env.API_PORT || 3088
server.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`)
})
