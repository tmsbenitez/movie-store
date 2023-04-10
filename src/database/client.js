import { createClient } from '@supabase/supabase-js'

// Imports Url and Key from .env file
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

// Creates the client to use the API
export const supabase = createClient(supabaseUrl, supabaseKey)

// GET: all columns from movies table
export async function getAllMovies () {
  return await supabase.from('movies').select('*')
}
