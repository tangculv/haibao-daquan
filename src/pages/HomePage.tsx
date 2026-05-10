import { useState } from 'react'
import { functions, categories } from '../data/functions'
import FunctionCard from '../components/FunctionCard'

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filtered = activeCategory === 'all'
    ? functions
    : functions.filter(f => f.category === activeCategory)

  return (
    <div className="pb-24 lg:pb-8 px-4 lg:pl-24 lg:pr-8">
      {/* Header */}
      <header className="pt-14 lg:pt-16 pb-8 fade-up">
        <div className="flex items-end gap-3">
          <h1 className="text-4xl lg:text-5xl font-black text-primary tracking-tight">
            海报大全
          </h1>
          <span className="text-accent text-sm font-medium mb-1.5 tracking-wider">BETA</span>
        </div>
        <p className="text-secondary mt-3 text-base lg:text-lg max-w-xl">
          选一个功能，输入内容，AI 为你生成高质量视觉作品
        </p>
      </header>

      {/* Category tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-1 fade-up" style={{ animationDelay: '0.1s' }}>
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 rounded-xl text-sm whitespace-nowrap transition-all duration-300 font-medium ${
            activeCategory === 'all'
              ? 'bg-accent text-white shadow-lg shadow-accent/20'
              : 'bg-surface text-secondary border border-border-subtle hover:border-border hover:text-primary'
          }`}
        >
          全部
        </button>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-sm whitespace-nowrap transition-all duration-300 font-medium ${
              activeCategory === cat.id
                ? 'bg-accent text-white shadow-lg shadow-accent/20'
                : 'bg-surface text-secondary border border-border-subtle hover:border-border hover:text-primary'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Function grid — 1 col mobile, 2 col tablet, 3 col desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 stagger">
        {filtered.map(fn => (
          <FunctionCard key={fn.id} fn={fn} />
        ))}
      </div>
    </div>
  )
}
