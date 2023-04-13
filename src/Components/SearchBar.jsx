import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SearchBar ({ placeholder, uniqueGenres, allGenres, movies }) {
  const [filteredMovies, setFilteredMovies] = useState([])
  const [searchWord, setSearchWord] = useState('')
  const navigate = useNavigate()

  const handleFilter = (event) => {
    setSearchWord(event.target.value)
    const newFilter = movies.filter((movie) => {
      return movie.name.toLowerCase().includes(searchWord.toLowerCase())
    })

    if (searchWord === '') {
      setFilteredMovies([])
    } else {
      setFilteredMovies(newFilter)
    }
    console.log(searchWord)
  }

  const handleMovieSelect = (movies) => {
    setSearchWord(movies.name)
  }

  const handleSearch = () => {
    const selectedMovie = movies.find(movie => movie.name === searchWord)

    if (selectedMovie) {
      navigate(`/movie/${selectedMovie.id}`)
    }
  }

  useEffect(() => {
    const handleOutsideClick = () => {
      setFilteredMovies([])
    }
    window.addEventListener('click', handleOutsideClick)
  }, [])

  return (
    <div className='w-full'>
      <div className='flex relative '>
        <input
          type='text'
          placeholder={placeholder}
          onChange={handleFilter}
          value={searchWord}
          className='border border-solid border-r-0 align-center bg-#f2f2f2 flex-1 h-auto'
        />
        {filteredMovies.length !== 0 && (
          <div className='absolute w-full  top-10 h-[200px] bg-white shadow-xl  overflow-y-auto'>
            {filteredMovies.slice(0, 15).map((movie, key) => {
              return (
                <button
                  key={key}
                  onClick={() => {
                    handleMovieSelect(movie)
                  }}
                  className=' flex w-full h-auto align-center text-color-black p-2 hover:bg-gray-200'
                >
                  {movie.name}
                </button>
              )
            })}
          </div>
        )}
        <button onClick={handleSearch} className='border-none p-2 bg-lime-600 text-white font-bold cursor-pointer h-auto'>Buscar</button>
      </div>
    </div>
  )
}

export default SearchBar
