import { useState, useEffect } from 'react'

interface Props {
  estimatedSeconds: number
}

const tips = [
  'AI 正在理解你的意图…',
  '正在构建视觉语言…',
  '色彩与构图推敲中…',
  '细节打磨中…',
  '即将完成…',
]

export default function LoadingOverlay({ estimatedSeconds }: Props) {
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setElapsed(e => e + 1), 1000)
    return () => clearInterval(timer)
  }, [])

  const progress = Math.min(95, (elapsed / estimatedSeconds) * 100)
  const tipIndex = Math.min(Math.floor(elapsed / (estimatedSeconds / tips.length)), tips.length - 1)

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-surface border border-border-subtle rounded-2xl p-8 mx-6 w-full max-w-sm text-center fade-up"
           style={{ animation: 'pulseGlow 3s ease-in-out infinite' }}>
        {/* Animated dots */}
        <div className="flex justify-center gap-1.5 mb-6">
          {[0, 1, 2].map(i => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-accent"
              style={{
                animation: `bounce 1.4s ease-in-out ${i * 0.16}s infinite`,
              }}
            />
          ))}
        </div>

        <p className="text-base font-semibold text-primary mb-1">
          {tips[tipIndex]}
        </p>
        <p className="text-xs text-secondary/60 mb-5 tabular-nums tracking-wide">
          {elapsed}s / ~{estimatedSeconds}s
        </p>

        {/* Progress bar */}
        <div className="w-full bg-border rounded-full h-1 overflow-hidden">
          <div
            className="bg-gradient-to-r from-accent to-amber-400 h-full rounded-full transition-all duration-1000"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}
