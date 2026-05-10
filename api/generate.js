export const config = { maxDuration: 120 }

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(204).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const API_KEY = process.env.LAOZHANG_API_KEY
  const BASE_URL = (process.env.LAOZHANG_BASE_URL || 'https://api.laozhang.ai/v1').replace(/\/+$/, '')

  if (!API_KEY) return res.status(500).json({ success: false, error: 'API key not configured' })

  try {
    const { prompt, size } = req.body

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
      return res.status(apiResp.status).json({ success: false, error: JSON.stringify(data) })
    }

    const item = data?.data?.[0]
    let imageUrl = item?.url || ''

    if (!imageUrl && item?.b64_json) {
      imageUrl = `data:image/png;base64,${item.b64_json}`
    }

    return res.status(200).json({ success: true, imageUrl })
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message || String(err) })
  }
}
