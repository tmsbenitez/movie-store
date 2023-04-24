import { Suspense } from 'react'
import useGetMovies from '../hooks/useGetMovies'
import { Header } from '../Components/Header'
import MovieCarousel from '../Components/Carousel'

function Home () {
  const movies = useGetMovies()

  return (
    <Suspense fallback={null}>
      <Header movies={movies} />
      <MovieCarousel movies={movies} />
    </Suspense>
  )
}

export default Home
