import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../stores/auth'

export default function AuthPage() {
  const navigate = useNavigate()
  const { signIn, signUp, loading } = useAuth()
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!email || !password) {
      setError('请填写邮箱和密码')
      return
    }

    if (password.length < 6) {
      setError('密码至少 6 位')
      return
    }

    if (isSignUp) {
      const err = await signUp(email, password)
      if (err) {
        setError(err)
      } else {
        setSuccess('注册成功！请查看邮箱确认链接，然后登录')
        setIsSignUp(false)
      }
    } else {
      const err = await signIn(email, password)
      if (err) {
        setError(err)
      } else {
        navigate('/')
      }
    }
  }

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-5">
      <div className="w-full max-w-sm fade-up">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-primary tracking-tight">海报大全</h1>
          <p className="text-secondary mt-2 text-sm">
            {isSignUp ? '创建账号，开始创作' : '登录你的账号'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="邮箱"
              className="w-full px-4 py-3.5 rounded-xl border border-border-subtle bg-surface text-primary text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all placeholder:text-secondary/40"
            />
          </div>

          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="密码（至少 6 位）"
              className="w-full px-4 py-3.5 rounded-xl border border-border-subtle bg-surface text-primary text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all placeholder:text-secondary/40"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">{error}</p>
          )}

          {success && (
            <p className="text-emerald-400 text-sm bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3">{success}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-accent text-white font-semibold text-sm shadow-lg shadow-accent/25 hover:shadow-accent/40 active:scale-[0.98] transition-all duration-300 disabled:opacity-50"
          >
            {loading ? '处理中…' : isSignUp ? '注册' : '登录'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => { setIsSignUp(!isSignUp); setError(''); setSuccess('') }}
            className="text-sm text-secondary hover:text-accent transition-colors"
          >
            {isSignUp ? '已有账号？去登录' : '没有账号？去注册'}
          </button>
        </div>

        {/* Guest mode */}
        <div className="mt-8 pt-6 border-t border-border-subtle text-center">
          <button
            onClick={() => navigate('/')}
            className="text-sm text-secondary/50 hover:text-secondary transition-colors"
          >
            先看看 →
          </button>
        </div>
      </div>
    </div>
  )
}
