/* eslint-disable react/jsx-closing-tag-location */
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'

function MobileHeader ({ movies, user, isOpen }) {
  return isOpen
    ? <div className='w-full flex flex-col gap-4 left-0 border-t py-4 flex md:hidden'>
      <div className='flex w-full'>
        <SearchBar movies={movies} />
      </div>
      <div className='flex flex-col'>
        {user
          ? <Link to='/account' className='flex gap-2 items-center py-4 border-b'>
            <AiOutlineUser /> Account
          </Link>
          : <Link to='/login'>Sign up</Link>}
        <Link to='/favourites' className='flex gap-2 items-center py-4 border-b'>
          <AiOutlineHeart /> Favourites
        </Link>
      </div>
    </div>
    : null
}

export default MobileHeader
