import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useAuth } from './stores/auth'
import BottomNav from './components/BottomNav'
import HomePage from './pages/HomePage'
import FunctionPage from './pages/FunctionPage'
import ResultPage from './pages/ResultPage'
import MyPage from './pages/MyPage'
import AuthPage from './pages/AuthPage'
import PointsPage from './pages/PointsPage'

function AppContent() {
  const init = useAuth(s => s.init)

  useEffect(() => {
    init()
  }, [init])

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/function/:id" element={<FunctionPage />} />
        <Route path="/result/:id" element={<ResultPage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/points" element={<PointsPage />} />
      </Routes>
      <BottomNav />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg relative">
        <AppContent />
      </div>
    </BrowserRouter>
  )
}
