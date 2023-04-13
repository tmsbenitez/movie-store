import { Suspense, useEffect } from 'react'
import { Header } from '../Components/Header'
import LoginForm from '../Components/LoginForm'
import useGetMovies from '../hooks/useGetMovies'
import { supabase } from '../database/client'
import { useNavigate } from 'react-router'

function Login () {
  const movies = useGetMovies()
  const navigate = useNavigate()

  useEffect(() => {
    // Protect login route
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate('/')
      }
    })
  }, [])

  return (
    <Suspense fallback={null}>
      <Header movies={movies} />
      <LoginForm />
    </Suspense>
  )
}

export default Login
