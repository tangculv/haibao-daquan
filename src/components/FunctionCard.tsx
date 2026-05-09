import { useNavigate } from 'react-router-dom'
import type { FunctionConfig } from '../types'

export default function FunctionCard({ fn }: { fn: FunctionConfig }) {
  const navigate = useNavigate()

  const categoryLabel = fn.category === 'text' ? '文字' : fn.category === 'photo' ? '照片' : '专业'

  return (
    <button
      onClick={() => navigate(`/function/${fn.id}`)}
      className="bg-surface rounded-2xl p-4 text-left w-full shadow-sm active:scale-[0.98] transition-transform"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-base font-semibold text-primary">{fn.name}</h3>
          <p className="text-xs text-secondary mt-1 leading-relaxed">{fn.description}</p>
        </div>
        <span className="text-xs px-2 py-0.5 rounded-md bg-accent-soft text-accent shrink-0 ml-2">
          {categoryLabel}
        </span>
      </div>
      <div className="flex items-center gap-2 mt-3 text-xs text-secondary">
        {fn.requiresImage && <span>📸 需上传照片</span>}
        {!fn.requiresImage && <span>✏️ 填文字即可</span>}
        <span>· 约{fn.estimatedSeconds}秒</span>
      </div>
    </button>
  )
}
