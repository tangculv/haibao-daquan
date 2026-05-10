import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getFunctionById } from '../data/functions'
import { buildPrompt, ratioToSize } from '../lib/prompt-builder'
import { generateImage, imageToBase64 } from '../lib/api'
import { useHistory } from '../stores/history'
import { useAuth } from '../stores/auth'
import TagSelector from '../components/TagSelector'
import RatioSelector from '../components/RatioSelector'
import PhotoUpload from '../components/PhotoUpload'
import LoadingOverlay from '../components/LoadingOverlay'

const COST_PER_GENERATION = 10

export default function FunctionPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const addHistory = useHistory(s => s.add)
  const { user, points, consumePoints } = useAuth()

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

  const needsLogin = user === null
  const notEnoughPoints = user !== null && points < COST_PER_GENERATION

  const handleGenerate = async () => {
    if (!canSubmit || loading) return

    // Check login
    if (needsLogin) {
      navigate('/auth')
      return
    }

    // Check points
    if (notEnoughPoints) {
      navigate('/points')
      return
    }

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

      // Deduct points after successful generation
      await consumePoints(COST_PER_GENERATION)

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
    <div className="min-h-screen bg-bg pb-28 lg:pb-8 lg:px-12">
      {loading && <LoadingOverlay estimatedSeconds={fn.estimatedSeconds} />}

      {/* Header */}
      <header className="sticky top-0 bg-bg/70 backdrop-blur-xl z-10 px-4 lg:px-0 py-4 flex items-center gap-4 border-b border-border-subtle">
        <button
          onClick={() => navigate(-1)}
          className="w-8 h-8 rounded-lg bg-surface border border-border-subtle flex items-center justify-center text-secondary hover:text-primary hover:border-border transition-all duration-300"
        >
          ←
        </button>
        <div>
          <h1 className="text-lg font-bold text-primary">{fn.name}</h1>
          <p className="text-xs text-secondary">{fn.description}</p>
        </div>
      </header>

      <div className="px-4 lg:px-0 mt-6 max-w-2xl">
        {/* Dynamic inputs */}
        <div className="space-y-5 fade-up">
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
                <div key={input.key}>
                  <label className="block text-sm font-medium text-primary mb-2">
                    {input.label}
                    {input.required && <span className="text-accent ml-1">*</span>}
                  </label>
                  <textarea
                    value={inputs[input.key] || ''}
                    onChange={(e) => updateInput(input.key, e.target.value)}
                    placeholder={input.placeholder}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border-subtle bg-surface text-primary text-sm resize-none focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300 placeholder:text-secondary/40"
                  />
                </div>
              )
            }

            return (
              <div key={input.key}>
                <label className="block text-sm font-medium text-primary mb-2">
                  {input.label}
                  {input.required && <span className="text-accent ml-1">*</span>}
                </label>
                <input
                  type="text"
                  value={inputs[input.key] || ''}
                  onChange={(e) => updateInput(input.key, e.target.value)}
                  placeholder={input.placeholder}
                  className="w-full px-4 py-3 rounded-xl border border-border-subtle bg-surface text-primary text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300 placeholder:text-secondary/40"
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
        </div>

        {/* Error */}
        {error && (
          <div className="mt-5 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
            {error}
          </div>
        )}
      </div>

      {/* Fixed bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 lg:left-0 z-40">
        <div className="max-w-6xl mx-auto bg-bg/80 backdrop-blur-xl border-t border-border-subtle p-4 lg:px-8"
             style={{ paddingBottom: 'calc(16px + env(safe-area-inset-bottom, 0px))' }}>
          <div className="max-w-2xl">
            <button
              onClick={handleGenerate}
              disabled={(!canSubmit || loading) && !needsLogin && !notEnoughPoints}
              className={`w-full py-3.5 rounded-xl text-base font-semibold transition-all duration-300 ${
                needsLogin
                  ? 'bg-accent text-white shadow-lg shadow-accent/25 active:scale-[0.98]'
                  : notEnoughPoints
                    ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/25 active:scale-[0.98]'
                    : canSubmit && !loading
                      ? 'bg-accent text-white shadow-lg shadow-accent/25 hover:shadow-accent/40 active:scale-[0.98]'
                      : 'bg-disabled text-secondary cursor-not-allowed'
              }`}
            >
              {loading
                ? '生成中…'
                : needsLogin
                  ? '登录后使用'
                  : notEnoughPoints
                    ? '点数不足，去充值'
                    : `开始生成 · ${COST_PER_GENERATION}点 · ~${fn.estimatedSeconds}s`}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
