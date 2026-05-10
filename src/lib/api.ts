interface GenerateRequest {
  functionId: string
  prompt: string
  size: string
  image?: string
}

interface GenerateResponse {
  success: boolean
  imageUrl?: string
  error?: string
}

export async function generateImage(req: GenerateRequest): Promise<GenerateResponse> {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 180_000) // 3 min timeout

  try {
    const resp = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req),
      signal: controller.signal,
    })

    clearTimeout(timeout)

    if (!resp.ok) {
      const text = await resp.text()
      return { success: false, error: `HTTP ${resp.status}: ${text.slice(0, 200)}` }
    }

    return resp.json()
  } catch (err: any) {
    clearTimeout(timeout)
    if (err.name === 'AbortError') {
      return { success: false, error: '生成超时（超过3分钟），请重试。如果持续超时，换一个更短的描述试试。' }
    }
    return { success: false, error: err.message || String(err) }
  }
}

export function imageToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result as string
      const base64 = result.split(',')[1]
      resolve(base64)
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}
