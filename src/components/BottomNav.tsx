import { useLocation, useNavigate } from 'react-router-dom'

const tabs = [
  { path: '/', label: '发现', icon: '✨' },
  { path: '/my', label: '我的', icon: '👤' },
]

export default function BottomNav() {
  const location = useLocation()
  const navigate = useNavigate()

  // Hide on function/result pages
  if (location.pathname.startsWith('/function/') || location.pathname.startsWith('/result/')) {
    return null
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-surface border-t border-border flex z-50"
         style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
      {tabs.map(tab => {
        const active = tab.path === '/' ? location.pathname === '/' : location.pathname.startsWith(tab.path)
        return (
          <button
            key={tab.path}
            onClick={() => navigate(tab.path)}
            className={`flex-1 flex flex-col items-center py-2 ${active ? 'text-accent' : 'text-secondary'}`}
          >
            <span className="text-xl">{tab.icon}</span>
            <span className="text-xs mt-0.5">{tab.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
