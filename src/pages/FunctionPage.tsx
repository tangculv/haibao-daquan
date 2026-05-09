import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getFunctionById } from '../data/functions'
import { buildPrompt, ratioToSize } from '../lib/prompt-builder'
import { generateImage, imageToBase64 } from '../lib/api'
import { useHistory } from '../stores/history'
import TagSelector from '../components/TagSelector'
import RatioSelector from '../components/RatioSelector'
import PhotoUpload from '../components/PhotoUpload'
import LoadingOverlay from '../components/LoadingOverlay'

export default function FunctionPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const addHistory = useHistory(s => s.add)

  const fn = getFunctionById(id || '')
  const [inputs, setInputs] = useState<Record<string, string>>({})
  const [photoFile, setPhotoFile] = useState<File | null>(null)
  const [ratio, setRatio] = useState(fn?.defaultRatio || '3:4')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  if (!fn) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-secondary">功能不存在</p>
      </div>
    )
  }

  const updateInput = (key: string, value: string) => {
    setInputs(prev => ({ ...prev, [key]: value }))
  }

  const canSubmit = fn.inputs
    .filter(i => i.required)
    .every(i => i.type === 'photo' ? photoFile : inputs[i.key]?.trim())

  const handleGenerate = async () => {
    if (!canSubmit || loading) return
    setLoading(true)
    setError('')

    try {
      const prompt = buildPrompt(fn, inputs, ratio)
      const size = ratioToSize(ratio)

      let image: string | undefined
      if (photoFile) {
        image = await imageToBase64(photoFile)
      }

      const result = await generateImage({
        functionId: fn.id,
        prompt,
        size,
        image,
      })

      if (!result.success || !result.imageUrl) {
        setError(result.error || '生成失败，请重试')
        return
      }

      const historyItem = {
        id: Date.now().toString(),
        functionId: fn.id,
        functionName: fn.name,
        imageUrl: result.imageUrl,
        inputs: { ...inputs },
        createdAt: Date.now(),
      }
      addHistory(historyItem)
      navigate(`/result/${historyItem.id}`)
    } catch (err) {
      setError(String(err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-bg pb-24">
      {loading && <LoadingOverlay estimatedSeconds={fn.estimatedSeconds} />}

      {/* Header */}
      <header className="sticky top-0 bg-bg/80 backdrop-blur-sm z-10 px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="text-primary text-lg">←</button>
        <h1 className="text-lg font-semibold text-primary">{fn.name}</h1>
      </header>

      <div className="px-4">
        {/* Description */}
        <p className="text-sm text-secondary mb-6">{fn.description}</p>

        {/* Dynamic inputs */}
        {fn.inputs.map(input => {
          if (input.type === 'photo') {
            return (
              <PhotoUpload
                key={input.key}
                label={input.label}
                placeholder={input.placeholder}
                value={photoFile}
                onChange={setPhotoFile}
              />
            )
          }

          if (input.type === 'select' && input.options) {
            return (
              <TagSelector
                key={input.key}
                label={input.label}
                options={input.options}
                value={inputs[input.key] || input.options[0]?.value || ''}
                onChange={(v) => updateInput(input.key, v)}
              />
            )
          }

          if (input.type === 'textarea') {
            return (
              <div key={input.key} className="mb-4">
                <label className="block text-sm font-medium text-primary mb-2">
                  {input.label}
                  {input.required && <span className="text-accent ml-1">*</span>}
                </label>
                <textarea
                  value={inputs[input.key] || ''}
                  onChange={(e) => updateInput(input.key, e.target.value)}
                  placeholder={input.placeholder}
                  rows={3}
                  className="w-full px-3 py-2.5 rounded-xl border border-border bg-surface text-primary text-sm resize-none focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            )
          }

          return (
            <div key={input.key} className="mb-4">
              <label className="block text-sm font-medium text-primary mb-2">
                {input.label}
                {input.required && <span className="text-accent ml-1">*</span>}
              </label>
              <input
                type="text"
                value={inputs[input.key] || ''}
                onChange={(e) => updateInput(input.key, e.target.value)}
                placeholder={input.placeholder}
                className="w-full px-3 py-2.5 rounded-xl border border-border bg-surface text-primary text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          )
        })}

        {/* Ratio selector */}
        {fn.canCustomizeRatio && fn.ratioOptions && (
          <RatioSelector
            options={fn.ratioOptions}
            value={ratio}
            onChange={setRatio}
          />
        )}

        {/* Error */}
        {error && (
          <div className="mb-4 p-3 bg-red-600/10 rounded-xl text-red-400 text-sm">{error}</div>
        )}
      </div>

      {/* Fixed bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-surface border-t border-border p-4"
           style={{ paddingBottom: 'calc(16px + env(safe-area-inset-bottom, 0px))' }}>
        <button
          onClick={handleGenerate}
          disabled={!canSubmit || loading}
          className={`w-full py-3.5 rounded-full text-base font-semibold transition-colors ${
            canSubmit && !loading
              ? 'bg-accent text-white active:bg-accent/90'
              : 'bg-disabled text-white cursor-not-allowed'
          }`}
        >
          {loading ? '生成中…' : `开始生成（约${fn.estimatedSeconds}秒）`}
        </button>
      </div>
    </div>
  )
}
