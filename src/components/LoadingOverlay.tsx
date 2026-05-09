import { useState, useEffect } from 'react'

interface Props {
  estimatedSeconds: number
}

export default function LoadingOverlay({ estimatedSeconds }: Props) {
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setElapsed(e => e + 1), 1000)
    return () => clearInterval(timer)
  }, [])

  const progress = Math.min(95, (elapsed / estimatedSeconds) * 100)

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
      <div className="bg-surface rounded-2xl p-6 mx-8 w-full max-w-xs text-center">
        <div className="text-4xl mb-4 animate-bounce">🎨</div>
        <p className="text-base font-semibold text-primary mb-2">AI 正在创作…</p>
        <p className="text-sm text-secondary mb-4">
          预计 {estimatedSeconds} 秒，已等待 {elapsed} 秒
        </p>
        <div className="w-full bg-border rounded-full h-2">
          <div
            className="bg-accent h-2 rounded-full transition-all duration-1000"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}
