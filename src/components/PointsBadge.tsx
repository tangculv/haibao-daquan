import { useAuth } from '../stores/auth'
import { useNavigate } from 'react-router-dom'

export default function PointsBadge() {
  const { user, points } = useAuth()
  const navigate = useNavigate()

  if (!user) {
    return (
      <button
        onClick={() => navigate('/auth')}
        className="px-3 py-1.5 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-all"
      >
        登录
      </button>
    )
  }

  return (
    <button
      onClick={() => navigate('/points')}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-all"
    >
      <span className="text-[10px]">✦</span>
      <span className="tabular-nums">{points}</span>
    </button>
  )
}
