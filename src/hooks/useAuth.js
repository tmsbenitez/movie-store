import { supabase } from '../database/client'

export async function useSignIn (email) {
  try {
    return await supabase.auth.signInWithOtp({
      email
    })
  } catch (error) {
    console.error(error)
  }
}

export async function useSignOut () {
  try {
    return await supabase.auth.signOut()
  } catch (error) {
    console.error(error)
  }
}
