import { useNavigate } from 'react-router-dom'
import type { FunctionConfig } from '../types'
import { cardVisuals } from '../data/functions'

export default function FunctionCard({ fn, size = 'normal' }: { fn: FunctionConfig; size?: 'featured' | 'normal' }) {
  const navigate = useNavigate()
  const visual = cardVisuals[fn.id] || { gradient: 'from-zinc-500/20 to-zinc-600/10', emoji: '●', accent: '#a1a1aa' }

  if (size === 'featured') {
    return (
      <button
        onClick={() => navigate(`/function/${fn.id}`)}
        className="group relative overflow-hidden rounded-3xl text-left w-full active:scale-[0.98] transition-transform duration-300"
      >
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${visual.gradient} opacity-60`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="relative p-6 lg:p-8 min-h-[220px] lg:min-h-[260px] flex flex-col justify-between">
          {/* Emoji */}
          <div className="text-5xl lg:text-6xl mb-auto" style={{ animation: 'float 4s ease-in-out infinite' }}>
            {visual.emoji}
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-1 tracking-tight">
              {fn.name}
            </h3>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              {fn.description}
            </p>
            <div className="flex items-center gap-2 mt-3">
              <span
                className="text-xs px-2.5 py-1 rounded-full font-medium"
                style={{ background: `${visual.accent}20`, color: visual.accent }}
              >
                {fn.requiresImage ? '上传照片' : '输入文字'}
              </span>
              <span className="text-xs text-white/30">~{fn.estimatedSeconds}s</span>
            </div>
          </div>
        </div>

        {/* Hover arrow */}
        <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-sm">→</span>
        </div>
      </button>
    )
  }

  return (
    <button
      onClick={() => navigate(`/function/${fn.id}`)}
      className="group relative overflow-hidden rounded-2xl text-left w-full active:scale-[0.98] transition-transform duration-300"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${visual.gradient} opacity-40`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      <div className="relative p-5 min-h-[160px] flex flex-col justify-between">
        <div className="text-3xl mb-auto" style={{ animation: 'float 4s ease-in-out infinite' }}>
          {visual.emoji}
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-0.5 tracking-tight">{fn.name}</h3>
          <p className="text-xs text-white/50 leading-relaxed line-clamp-2">{fn.description}</p>
        </div>
      </div>
    </button>
  )
}
