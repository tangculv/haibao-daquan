import { useLocation, useNavigate } from 'react-router-dom'

const tabs = [
  { path: '/', label: '发现', icon: '✦' },
  { path: '/my', label: '作品', icon: '◐' },
]

export default function BottomNav() {
  const location = useLocation()
  const navigate = useNavigate()

  if (location.pathname.startsWith('/function/') || location.pathname.startsWith('/result/')) {
    return null
  }

  return (
    <>
      {/* Mobile bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 lg:hidden z-50"
           style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
        <div className="mx-auto max-w-6xl bg-glass backdrop-blur-xl border-t border-border-subtle">
          <div className="flex">
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
                  <span className={`text-lg transition-transform duration-300 ${active ? 'scale-110' : ''}`}>
                    {tab.icon}
                  </span>
                  <span className="text-[10px] mt-1 tracking-wider uppercase font-medium">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Desktop side nav */}
      <nav className="hidden lg:flex fixed left-0 top-0 bottom-0 w-16 flex-col items-center py-8 z-50 border-r border-border-subtle bg-bg">
        <div className="text-accent text-xl font-black mb-12">H</div>
        {tabs.map(tab => {
          const active = tab.path === '/' ? location.pathname === '/' : location.pathname.startsWith(tab.path)
          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 transition-all duration-300 ${
                active
                  ? 'bg-accent/10 text-accent'
                  : 'text-secondary hover:text-primary hover:bg-surface'
              }`}
              title={tab.label}
            >
              <span className="text-base">{tab.icon}</span>
            </button>
          )
        })}
      </nav>
    </>
  )
}
