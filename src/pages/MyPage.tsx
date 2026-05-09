import { useNavigate } from 'react-router-dom'
import { useHistory } from '../stores/history'

export default function MyPage() {
  const navigate = useNavigate()
  const items = useHistory(s => s.items)

  return (
    <div className="pb-20 px-4">
      <header className="pt-12 pb-4">
        <h1 className="text-2xl font-bold text-primary">我的作品</h1>
        <p className="text-sm text-secondary mt-1">共 {items.length} 张</p>
      </header>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-secondary">
          <span className="text-5xl mb-4">🎨</span>
          <p className="text-base">还没有作品</p>
          <p className="text-sm mt-1">去「发现」页面试试吧</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {items.map(item => (
            <button
              key={item.id}
              onClick={() => navigate(`/result/${item.id}`)}
              className="bg-surface rounded-2xl overflow-hidden shadow-sm text-left active:scale-[0.98] transition-transform"
            >
              <img
                src={item.imageUrl}
                alt={item.functionName}
                className="w-full aspect-square object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect fill="%23F7F6F3" width="200" height="200"/><text x="50%" y="50%" text-anchor="middle" fill="%236B6B6B" font-size="14">已过期</text></svg>'
                }}
              />
              <div className="p-2">
                <p className="text-xs font-medium text-primary truncate">{item.functionName}</p>
                <p className="text-xs text-secondary mt-0.5">
                  {new Date(item.createdAt).toLocaleDateString('zh-CN')}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
