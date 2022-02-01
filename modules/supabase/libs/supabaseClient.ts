import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || typeof supabaseUrl !== 'string') {
  throw new Error(
    'You must set the VITE_SUPABASE_API_URL environment variable',
  );
}

if (!supabaseAnonKey || typeof supabaseAnonKey !== 'string') {
  throw new Error(
    'You must set the VITE_SUPABASE_ANON_KEY environment variable',
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
