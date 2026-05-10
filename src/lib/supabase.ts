import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://iobcaqjogyihwxbxtkxk.supabase.co'
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_HRYey6HsV9X0wepGoz1ITQ_bZbcpkq6'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
