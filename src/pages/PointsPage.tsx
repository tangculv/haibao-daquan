import { useNavigate } from 'react-router-dom'
import { useAuth } from '../stores/auth'

const packages = [
  { id: 'trial', name: '体验包', points: 50, price: 6, tag: '' },
  { id: 'standard', name: '标准包', points: 150, price: 15, tag: '最受欢迎' },
  { id: 'premium', name: '超值包', points: 400, price: 30, tag: '最划算' },
]

const rules = [
  { action: '注册', change: '+20' },
  { action: '每日首次登录', change: '+5' },
  { action: '分享给好友（好友首次打开）', change: '+10' },
  { action: '生成并下载海报', change: '-10' },
  { action: '高级功能（发型分析等）', change: '-20' },
]

export default function PointsPage() {
  const navigate = useNavigate()
  const { user, points, claimDailyBonus } = useAuth()

  const handleClaim = async () => {
    const ok = await claimDailyBonus()
    if (!ok) {
      alert('今日已领取过了')
    }
  }

  return (
    <div className="min-h-screen bg-bg pb-24">
      {/* Header */}
      <header className="sticky top-0 bg-bg/70 backdrop-blur-xl z-10 px-5 py-4 flex items-center gap-4 border-b border-border-subtle">
        <button
          onClick={() => navigate(-1)}
          className="w-8 h-8 rounded-lg bg-surface border border-border-subtle flex items-center justify-center text-secondary hover:text-primary transition-all"
        >
          ←
        </button>
        <h1 className="text-lg font-bold text-primary">我的点数</h1>
      </header>

      <div className="px-5 mt-6 max-w-lg mx-auto">
        {/* Current points */}
        <div className="bg-gradient-to-br from-accent/20 to-amber-500/10 rounded-2xl p-6 text-center mb-8 fade-up">
          <p className="text-secondary text-sm mb-1">当前点数</p>
          <p className="text-5xl font-black text-primary tabular-nums">{user ? points : 0}</p>
          {user && (
            <button
              onClick={handleClaim}
              className="mt-4 px-5 py-2 rounded-full text-sm font-medium bg-accent text-white shadow-lg shadow-accent/25 active:scale-[0.98] transition-all"
            >
              领取每日 +5 点
            </button>
          )}
          {!user && (
            <button
              onClick={() => navigate('/auth')}
              className="mt-4 px-5 py-2 rounded-full text-sm font-medium bg-accent text-white shadow-lg shadow-accent/25 active:scale-[0.98] transition-all"
            >
              登录领取 20 点
            </button>
          )}
        </div>

        {/* Packages */}
        <div className="mb-8 fade-up" style={{ animationDelay: '0.08s' }}>
          <h2 className="text-base font-bold text-primary mb-4">充值套餐</h2>
          <div className="space-y-3">
            {packages.map(pkg => (
              <button
                key={pkg.id}
                className="w-full bg-surface border border-border-subtle rounded-2xl p-4 flex items-center justify-between hover:border-border active:scale-[0.98] transition-all"
                onClick={() => alert('支付功能即将上线')}
              >
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-primary">{pkg.name}</span>
                    {pkg.tag && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">
                        {pkg.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-secondary mt-0.5">{pkg.points} 点</p>
                </div>
                <span className="text-lg font-bold text-accent">¥{pkg.price}</span>
              </button>
            ))}
          </div>
          <p className="text-xs text-secondary/40 mt-3 text-center">点数不过期</p>
        </div>

        {/* Rules */}
        <div className="fade-up" style={{ animationDelay: '0.16s' }}>
          <h2 className="text-base font-bold text-primary mb-4">点数规则</h2>
          <div className="bg-surface border border-border-subtle rounded-2xl overflow-hidden">
            {rules.map((rule, i) => (
              <div
                key={rule.action}
                className={`flex justify-between items-center px-4 py-3 ${
                  i < rules.length - 1 ? 'border-b border-border-subtle' : ''
                }`}
              >
                <span className="text-sm text-secondary">{rule.action}</span>
                <span className={`text-sm font-medium tabular-nums ${
                  rule.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'
                }`}>
                  {rule.change} 点
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
