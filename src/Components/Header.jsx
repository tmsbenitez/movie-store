
import React from 'react'
import movieLogo from '../assets/movie-logo.avif'
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import SearchBar from './SearchBar'

export const Header = ({ movies }) => {
  const allGenres = movies.flatMap(movie => movie.genre)
  const uniqueGenres = Array.from(new Set(allGenres))
  return (
    <header className='flex justify-between align-center h-[60px] px-[6rem] z-10 text-center items-center'>
      <div className='flex align-center gap-x-20 gap-y-20 text-center '>
        <img src={movieLogo} alt='logo' className='h-[90px]' />

        <div className='flex relative group cursor-pointer items-center w-[150px] justify-center'>
          <p>Peliculas</p>
          <div className='invisible flex flex-col absolute inset-x-0 top-[85%] w-full bg-white border border-solid  z-10 group-hover:visible overfloe-auto flex-wrap '>
            {uniqueGenres.map(genre => (
              <option key={genre} value={genre} className='hover:bg-slate-400'>
                {genre}
              </option>
            ))}
          </div>
        </div>

      </div>

      <div className='flex align-center w-2/5 h-full items-center'>
        <SearchBar movies={movies} placeholder='Enter a movie name' uniqueGenres={uniqueGenres} allGenres={allGenres} />
      </div>

      <div className='flex align-center mr-10 text-center '>
        <AiOutlineUser style={{ width: '25px', height: '25px' }} />
        <div className='flex flex-col align-center mr-[40px] text-xs items-center'>
          <span>Sign up</span>
          <span>Account</span>
        </div>
        <AiOutlineHeart style={{ width: '25px', height: '25px' }} />
      </div>
    </header>
  )
}
