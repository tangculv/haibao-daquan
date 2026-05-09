import { useState } from 'react'
import { functions, categories } from '../data/functions'
import FunctionCard from '../components/FunctionCard'

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filtered = activeCategory === 'all'
    ? functions
    : functions.filter(f => f.category === activeCategory)

  return (
    <div className="pb-20 px-4">
      {/* Header */}
      <header className="pt-12 pb-4">
        <h1 className="text-2xl font-bold text-primary">海报大全</h1>
        <p className="text-sm text-secondary mt-1">选一个功能，AI 帮你生成</p>
      </header>

      {/* Category tabs */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${
            activeCategory === 'all'
              ? 'bg-accent text-white'
              : 'bg-surface text-secondary border border-border'
          }`}
        >
          全部
        </button>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${
              activeCategory === cat.id
                ? 'bg-accent text-white'
                : 'bg-surface text-secondary border border-border'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Function list */}
      <div className="flex flex-col gap-3">
        {filtered.map(fn => (
          <FunctionCard key={fn.id} fn={fn} />
        ))}
      </div>
    </div>
  )
}
