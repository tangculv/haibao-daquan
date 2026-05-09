import { create } from 'zustand'
import type { GenerationResult } from '../types'

const STORAGE_KEY = 'haibao-history'

function loadHistory(): GenerationResult[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveHistory(items: GenerationResult[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items.slice(0, 100)))
}

interface HistoryStore {
  items: GenerationResult[]
  add: (item: GenerationResult) => void
  remove: (id: string) => void
}

export const useHistory = create<HistoryStore>((set, get) => ({
  items: loadHistory(),
  add: (item) => {
    const next = [item, ...get().items]
    saveHistory(next)
    set({ items: next })
  },
  remove: (id) => {
    const next = get().items.filter((i) => i.id !== id)
    saveHistory(next)
    set({ items: next })
  },
}))
