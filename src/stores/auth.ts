import { create } from 'zustand'
import { supabase } from '../lib/supabase'
import type { User } from '@supabase/supabase-js'

interface AuthStore {
  user: User | null
  points: number
  loading: boolean
  initialized: boolean

  init: () => Promise<void>
  signUp: (email: string, password: string) => Promise<string | null>
  signIn: (email: string, password: string) => Promise<string | null>
  signOut: () => Promise<void>
  refreshPoints: () => Promise<void>
  consumePoints: (amount: number) => Promise<boolean>
  claimDailyBonus: () => Promise<boolean>
}

export const useAuth = create<AuthStore>((set, get) => ({
  user: null,
  points: 0,
  loading: false,
  initialized: false,

  init: async () => {
    const { data: { session } } = await supabase.auth.getSession()
    if (session?.user) {
      set({ user: session.user, initialized: true })
      await get().refreshPoints()
    } else {
      set({ initialized: true })
    }

    // Listen for auth changes
    supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        set({ user: session.user })
        await get().refreshPoints()
      } else {
        set({ user: null, points: 0 })
      }
    })
  },

  signUp: async (email, password) => {
    set({ loading: true })
    const { error } = await supabase.auth.signUp({ email, password })
    set({ loading: false })
    if (error) return error.message

    // Insert initial points record
    const { data: { session } } = await supabase.auth.getSession()
    if (session?.user) {
      await supabase.from('user_points').insert({
        user_id: session.user.id,
        points: 20, // signup bonus
        total_earned: 20,
        total_spent: 0,
      })
    }

    return null
  },

  signIn: async (email, password) => {
    set({ loading: true })
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    set({ loading: false })
    return error ? error.message : null
  },

  signOut: async () => {
    await supabase.auth.signOut()
    set({ user: null, points: 0 })
  },

  refreshPoints: async () => {
    const user = get().user
    if (!user) return

    const { data } = await supabase
      .from('user_points')
      .select('points')
      .eq('user_id', user.id)
      .single()

    if (data) {
      set({ points: data.points })
    }
  },

  consumePoints: async (amount: number) => {
    const user = get().user
    if (!user) return false

    const current = get().points
    if (current < amount) return false

    const { error } = await supabase.rpc('consume_points', {
      p_user_id: user.id,
      p_amount: amount,
    })

    if (error) return false

    set({ points: current - amount })
    return true
  },

  claimDailyBonus: async () => {
    const user = get().user
    if (!user) return false

    const { error } = await supabase.rpc('claim_daily_bonus', {
      p_user_id: user.id,
    })

    if (error) return false

    await get().refreshPoints()
    return true
  },
}))
