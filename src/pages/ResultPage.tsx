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
    // For mobile: create a link and trigger download
    const a = document.createElement('a')
    a.href = item.imageUrl
    a.download = `haibao-${item.functionName}-${item.id}.png`
    a.target = '_blank'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <div className="min-h-screen bg-bg pb-24">
      {/* Header */}
      <header className="sticky top-0 bg-bg/80 backdrop-blur-sm z-10 px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate('/')} className="text-primary text-lg">←</button>
        <h1 className="text-lg font-semibold text-primary">生成结果</h1>
      </header>

      <div className="px-4">
        {/* Function name */}
        <p className="text-sm text-secondary mb-3">
          {item.functionName}
        </p>

        {/* Image */}
        <div className="bg-surface rounded-2xl overflow-hidden shadow-sm">
          <img
            src={item.imageUrl}
            alt={item.functionName}
            className="w-full"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><text x="50%" y="50%" text-anchor="middle" fill="%236B6B6B">加载失败</text></svg>'
            }}
          />
        </div>

        {/* Tip */}
        <p className="text-xs text-secondary mt-3 text-center">
          长按图片可直接保存到手机
        </p>
      </div>

      {/* Fixed bottom actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-surface border-t border-border p-4 flex gap-3"
           style={{ paddingBottom: 'calc(16px + env(safe-area-inset-bottom, 0px))' }}>
        <button
          onClick={handleSave}
          className="flex-1 py-3 rounded-full bg-accent text-white font-semibold text-base active:bg-accent/90"
        >
          保存图片
        </button>
        <button
          onClick={() => navigate(`/function/${item.functionId}`)}
          className="flex-1 py-3 rounded-full bg-surface text-primary font-semibold text-base border border-border active:bg-bg"
        >
          再做一张
        </button>
      </div>
    </div>
  )
}
