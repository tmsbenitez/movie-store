
import React from 'react'
import movieLogo from '../assets/movie-logo.avif'
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import SearchBar from './SearchBar'

export const Header = ({ movies }) => {
  const allGenres = movies.flatMap(movie => movie.genre)
  const uniqueGenres = Array.from(new Set(allGenres))
  return (
    <header className='flex justify-between align-center h-[60px] px-[6rem] z-10 text-center'>
      <div className='flex align-center gap-x-20 gap-y-20 text-center'>
        <img src={movieLogo} alt='logo' className='h-[90px] mx-10' />
        <a href='#' className='relative p-[10] no-underline text-black hover:block'>
          Peliculas
          <div className='invisible absolute inset-x-0 top-0 bg-white border border-solid p-[10px] z-1 hover:block'>
            <option value='all' defaultValue>All Categories</option>
            {uniqueGenres.map(genre => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}

          </div>
        </a>
      </div>

      <div className='flex align-center w-2/5 h-full'>
        <SearchBar movies={movies} placeholder='Enter a movie name' uniqueGenres={uniqueGenres} allGenres={allGenres} />
      </div>

      <div className='flex align-center mr-10'>
        <AiOutlineUser style={{ width: '25px', height: '25px' }} />
        <div className='flex flex-col align-center mr-[40px] text-xs'>
          <span>Sign up</span>
          <span>Account</span>
        </div>
        <AiOutlineHeart style={{ width: '25px', height: '25px' }} />
      </div>
    </header>
  )
}
