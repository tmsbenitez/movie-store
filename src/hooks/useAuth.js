import { supabase } from '../database/client'
import { useState, useEffect } from 'react'

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

export function useGetUser () {
  const [result, setResult] = useState()

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await supabase.auth.getUser()
        setResult(data.user)
      } catch (error) {
        console.error(error)
      }
    }

    getUser()
  }, [])

  return result
}
