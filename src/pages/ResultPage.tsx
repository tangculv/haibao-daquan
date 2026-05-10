import { useParams, useNavigate } from 'react-router-dom'
import { useHistory } from '../stores/history'

export default function ResultPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const items = useHistory(s => s.items)

  const item = items.find(i => i.id === id)

  if (!item) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-secondary">找不到这张图片</p>
      </div>
    )
  }

  const handleSave = () => {
    const a = document.createElement('a')
    a.href = item.imageUrl
    a.download = `haibao-${item.functionName}-${item.id}.png`
    a.target = '_blank'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <div className="min-h-screen bg-bg pb-28 lg:pb-8 lg:px-12">
      {/* Header */}
      <header className="sticky top-0 bg-bg/70 backdrop-blur-xl z-10 px-4 lg:px-0 py-4 flex items-center gap-4 border-b border-border-subtle">
        <button
          onClick={() => navigate('/')}
          className="w-8 h-8 rounded-lg bg-surface border border-border-subtle flex items-center justify-center text-secondary hover:text-primary hover:border-border transition-all duration-300"
        >
          ←
        </button>
        <div>
          <h1 className="text-lg font-bold text-primary">生成完成</h1>
          <p className="text-xs text-secondary">{item.functionName}</p>
        </div>
      </header>

      <div className="px-4 lg:px-0 mt-6 max-w-3xl fade-up">
        {/* Image */}
        <div className="bg-surface rounded-2xl overflow-hidden border border-border-subtle">
          <img
            src={item.imageUrl}
            alt={item.functionName}
            className="w-full"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect fill="%2318181b" width="400" height="300"/><text x="50%" y="50%" text-anchor="middle" fill="%2371717a" font-size="14">加载失败</text></svg>'
            }}
          />
        </div>

        {/* Tip */}
        <p className="text-xs text-secondary/50 mt-4 text-center tracking-wide">
          长按图片可直接保存到手机
        </p>
      </div>

      {/* Fixed bottom actions */}
      <div className="fixed bottom-0 left-0 right-0 lg:left-0 z-40">
        <div className="max-w-6xl mx-auto bg-bg/80 backdrop-blur-xl border-t border-border-subtle p-4 lg:px-8"
             style={{ paddingBottom: 'calc(16px + env(safe-area-inset-bottom, 0px))' }}>
          <div className="max-w-3xl flex gap-3">
            <button
              onClick={handleSave}
              className="flex-1 py-3.5 rounded-xl bg-accent text-white font-semibold text-sm shadow-lg shadow-accent/25 hover:shadow-accent/40 active:scale-[0.98] transition-all duration-300"
            >
              保存图片
            </button>
            <button
              onClick={() => navigate(`/function/${item.functionId}`)}
              className="flex-1 py-3.5 rounded-xl bg-surface text-primary font-semibold text-sm border border-border-subtle hover:border-border active:scale-[0.98] transition-all duration-300"
            >
              再做一张
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
