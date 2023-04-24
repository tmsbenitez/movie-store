/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react'
import { AiOutlineHeart, AiOutlineUser, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { FcFilm } from 'react-icons/fc'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import { useGetUser } from '../hooks/useAuth'
import MobileHeader from './MobileHeader'

export const Header = ({ movies }) => {
  const allGenres = movies.flatMap(movie => movie.genre)
  const uniqueGenres = Array.from(new Set(allGenres))
  const user = useGetUser()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  return (
    <header className='flex flex-col relative items-center justify-between px-6 md:px-24 z-10'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex items-center justify-center gap-6'>
          <Link to='/' className='flex items-center gap-2 font-bold duration-200 hover:opacity-70'>
            <FcFilm className='w-6 h-6' />
            <p>MovieStore</p>
          </Link>
          <nav className='relative flex group h-16 items-center group z-20'>
            <a href='/movies' className='text-black '>
              Movies
            </a>
            <div className='absolute hidden md:flex flex-col invisible w-48 top-14 bg-white border rounded group-hover:visible'>
              {uniqueGenres.map(genre => (
                <a key={genre} href={`/movies/${genre.toLowerCase()}`} className='w-full py-2 pl-2 pr-16 text-sm hover:bg-black/10'>
                  {genre}
                </a>
              ))}
            </div>
          </nav>
        </div>
        <div className='flex items-center w-2/5 h-full hidden md:flex'>
          <SearchBar movies={movies} />
        </div>
        <div className='flex items-center gap-4 hidden md:flex'>
          {user
            ? <Link to='/account' className='hover:bg-black/10 rounded-full duration-300 p-2'>
              <AiOutlineUser className='w-6 h-6' />
            </Link>
            : <Link to='/login'>Sign up</Link>}
          <Link to='/favourites' className='hover:bg-black/10 rounded-full duration-300 p-2'>
            <AiOutlineHeart className='w-6 h-6' />
          </Link>
        </div>
        <button onClick={toggleMenu} className='flex md:hidden'>{isOpen ? <AiOutlineClose className='w-6 h-6' /> : <AiOutlineMenu className='w-6 h-6' />}</button>
      </div>
      <MobileHeader movies={movies} user={user} isOpen={isOpen} />
    </header>
  )
}
