import { useState } from 'react'
import { functions, categories } from '../data/functions'
import FunctionCard from '../components/FunctionCard'

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filtered = activeCategory === 'all'
    ? functions
    : functions.filter(f => f.category === activeCategory)

  // First 4 functions as featured (large cards)
  const featured = filtered.slice(0, 4)
  const rest = filtered.slice(4)

  return (
    <div className="pb-24 lg:pb-8">
      {/* Hero header */}
      <header className="px-5 lg:px-12 pt-14 lg:pt-20 pb-8 fade-up">
        <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3">AI Poster Studio</p>
        <h1 className="text-4xl lg:text-6xl font-black text-primary tracking-tight leading-[1.1]">
          海报大全
        </h1>
        <p className="text-secondary mt-3 text-base lg:text-lg max-w-lg leading-relaxed">
          选一个功能，输入你的想法，AI 为你生成作品
        </p>
      </header>

      {/* Category filter */}
      <div className="px-5 lg:px-12 mb-6 fade-up" style={{ animationDelay: '0.08s' }}>
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-300 font-medium border ${
              activeCategory === 'all'
                ? 'bg-primary text-bg border-primary'
                : 'bg-transparent text-secondary border-border hover:border-secondary hover:text-primary'
            }`}
          >
            全部
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-300 font-medium border ${
                activeCategory === cat.id
                  ? 'bg-primary text-bg border-primary'
                  : 'bg-transparent text-secondary border-border hover:border-secondary hover:text-primary'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Featured grid — 2 cols, first item spans full width on mobile */}
      <div className="px-4 lg:px-11">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 stagger">
          {featured.map((fn, i) => (
            <div key={fn.id} className={i === 0 ? 'col-span-2' : ''}>
              <FunctionCard fn={fn} size={i === 0 ? 'featured' : 'normal'} />
            </div>
          ))}
        </div>

        {/* Rest grid */}
        {rest.length > 0 && (
          <>
            <div className="my-8 flex items-center gap-4 px-1">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs text-secondary/50 tracking-widest uppercase">更多功能</span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 stagger">
              {rest.map(fn => (
                <FunctionCard key={fn.id} fn={fn} />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-16 mb-8 text-center">
        <p className="text-xs text-secondary/30 tracking-wider">Powered by GPT Image</p>
      </footer>
    </div>
  )
}
