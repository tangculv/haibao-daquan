import { useNavigate } from 'react-router-dom'
import { useHistory } from '../stores/history'
import { useAuth } from '../stores/auth'

export default function MyPage() {
  const navigate = useNavigate()
  const items = useHistory(s => s.items)
  const { user, points, signOut } = useAuth()

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  return (
    <div className="pb-24 lg:pb-8 px-4 lg:px-12">
      <header className="pt-14 lg:pt-16 pb-8 fade-up">
        <h1 className="text-4xl lg:text-5xl font-black text-primary tracking-tight">我的作品</h1>
        <p className="text-secondary mt-3 text-base">
          {items.length > 0 ? `共 ${items.length} 张作品` : '还没有作品'}
        </p>
      </header>

      {/* Account section */}
      <div className="mb-8 bg-surface border border-border-subtle rounded-2xl p-4 fade-up" style={{ animationDelay: '0.05s' }}>
        {user ? (
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-primary">{user.email}</p>
              <p className="text-xs text-secondary mt-0.5">
                当前 <span className="text-accent font-medium">{points}</span> 点
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => navigate('/points')}
                className="px-3 py-1.5 rounded-xl text-xs font-medium bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-all"
              >
                充值
              </button>
              <button
                onClick={handleSignOut}
                className="px-3 py-1.5 rounded-xl text-xs font-medium text-secondary border border-border-subtle hover:text-primary hover:border-border transition-all"
              >
                退出登录
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <p className="text-sm text-secondary">登录后可同步作品和点数</p>
            <button
              onClick={() => navigate('/auth')}
              className="px-4 py-1.5 rounded-xl text-xs font-medium bg-accent text-white active:scale-[0.98] transition-all"
            >
              登录
            </button>
          </div>
        )}
      </div>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="w-20 h-20 rounded-2xl bg-surface border border-border-subtle flex items-center justify-center mb-6">
            <span className="text-3xl text-secondary/50">◐</span>
          </div>
          <p className="text-base text-secondary">还没有作品</p>
          <p className="text-sm text-secondary/50 mt-2">去「发现」页面创作一张吧</p>
          <button
            onClick={() => navigate('/')}
            className="mt-6 px-6 py-2.5 rounded-xl bg-accent text-white text-sm font-medium shadow-lg shadow-accent/25 hover:shadow-accent/40 active:scale-[0.98] transition-all duration-300"
          >
            开始创作
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 stagger">
          {items.map(item => (
            <button
              key={item.id}
              onClick={() => navigate(`/result/${item.id}`)}
              className="group bg-surface border border-border-subtle rounded-2xl overflow-hidden text-left active:scale-[0.98] transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.functionName}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect fill="%2318181b" width="200" height="200"/><text x="50%" y="50%" text-anchor="middle" fill="%2371717a" font-size="12">已过期</text></svg>'
                  }}
                />
              </div>
              <div className="p-3">
                <p className="text-xs font-medium text-primary truncate">{item.functionName}</p>
                <p className="text-[10px] text-secondary/50 mt-1 tracking-wide">
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
