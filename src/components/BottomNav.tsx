import { useLocation, useNavigate } from 'react-router-dom'

const tabs = [
  { path: '/', label: '发现', icon: '✦' },
  { path: '/my', label: '作品', icon: '◑' },
]

export default function BottomNav() {
  const location = useLocation()
  const navigate = useNavigate()

  if (location.pathname.startsWith('/function/') || location.pathname.startsWith('/result/')) {
    return null
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50"
         style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
      <div className="bg-glass backdrop-blur-2xl border-t border-border-subtle">
        <div className="max-w-6xl mx-auto flex">
          {tabs.map(tab => {
            const active = tab.path === '/' ? location.pathname === '/' : location.pathname.startsWith(tab.path)
            return (
              <button
                key={tab.path}
                onClick={() => navigate(tab.path)}
                className={`flex-1 flex flex-col items-center py-3 transition-all duration-300 ${
                  active ? 'text-accent' : 'text-secondary hover:text-primary'
                }`}
              >
                <span className={`text-base transition-transform duration-300 ${active ? 'scale-125' : ''}`}>
                  {tab.icon}
                </span>
                <span className="text-[10px] mt-1 tracking-widest uppercase font-medium">{tab.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
