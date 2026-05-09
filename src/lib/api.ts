interface GenerateRequest {
  functionId: string
  prompt: string
  size: string
  image?: string // base64
}

interface GenerateResponse {
  success: boolean
  imageUrl?: string
  error?: string
}

export async function generateImage(req: GenerateRequest): Promise<GenerateResponse> {
  const resp = await fetch('/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req),
  })

  if (!resp.ok) {
    const text = await resp.text()
    return { success: false, error: `HTTP ${resp.status}: ${text}` }
  }

  return resp.json()
}

export function imageToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result as string
      // Strip data URL prefix
      const base64 = result.split(',')[1]
      resolve(base64)
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}
