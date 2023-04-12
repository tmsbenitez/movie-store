import { supabase } from '../database/client'
import { useEffect, useState } from 'react'

function useGetMovies () {
  const [result, setResult] = useState([])

  useEffect(() => {
    async function getMovies () {
      try {
        const { data } = await supabase.from('movies').select('*')

        setResult(data)
      } catch (error) {
        console.error(error)
      }
    }

    getMovies()
  }, [])

  return result
}

export default useGetMovies
