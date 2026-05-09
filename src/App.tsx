import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import HomePage from './pages/HomePage'
import FunctionPage from './pages/FunctionPage'
import ResultPage from './pages/ResultPage'
import MyPage from './pages/MyPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="max-w-lg mx-auto min-h-screen bg-bg relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/function/:id" element={<FunctionPage />} />
          <Route path="/result/:id" element={<ResultPage />} />
          <Route path="/my" element={<MyPage />} />
        </Routes>
        <BottomNav />
      </div>
    </BrowserRouter>
  )
}
