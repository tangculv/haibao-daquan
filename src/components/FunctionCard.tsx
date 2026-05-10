import { useNavigate } from 'react-router-dom'
import type { FunctionConfig } from '../types'

const categoryIcons: Record<string, string> = {
  text: '✎',
  photo: '◎',
  pro: '⬡',
}

const categoryColors: Record<string, string> = {
  text: 'text-emerald-400 bg-emerald-400/10',
  photo: 'text-violet-400 bg-violet-400/10',
  pro: 'text-amber-400 bg-amber-400/10',
}

export default function FunctionCard({ fn }: { fn: FunctionConfig }) {
  const navigate = useNavigate()

  const icon = categoryIcons[fn.category] || '●'
  const colorClass = categoryColors[fn.category] || 'text-secondary bg-surface'

  return (
    <button
      onClick={() => navigate(`/function/${fn.id}`)}
      className="card-glow group bg-surface hover:bg-surface-hover border border-border-subtle rounded-2xl p-5 text-left w-full transition-all duration-300 active:scale-[0.98]"
    >
      <div className="flex items-start gap-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-base ${colorClass}`}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-primary group-hover:text-accent transition-colors duration-300">
            {fn.name}
          </h3>
          <p className="text-sm text-secondary mt-1 leading-relaxed line-clamp-2">
            {fn.description}
          </p>
          <div className="flex items-center gap-3 mt-3">
            {fn.requiresImage ? (
              <span className="text-xs text-secondary/70 flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-violet-400 inline-block" />
                上传照片
              </span>
            ) : (
              <span className="text-xs text-secondary/70 flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-emerald-400 inline-block" />
                输入文字
              </span>
            )}
            <span className="text-xs text-secondary/50">~{fn.estimatedSeconds}s</span>
          </div>
        </div>
        <span className="text-secondary/30 group-hover:text-accent/50 transition-colors duration-300 text-lg mt-1">→</span>
      </div>
    </button>
  )
}
