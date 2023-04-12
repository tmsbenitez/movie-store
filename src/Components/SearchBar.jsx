import React, { useEffect, useState } from 'react'
import '../css/searchBar.css'
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
    <div className='search'>
      <div className='searchInputs'>
        <input
          type='text'
          placeholder={placeholder}
          onChange={handleFilter}
          value={searchWord}
        />
        {filteredMovies.length !== 0 && (
          <div className='dataResults'>
            {filteredMovies.slice(0, 15).map((movie, key) => {
              return (
                <button
                  className=''
                  key={key}
                  onClick={() => {
                    handleMovieSelect(movie)
                  }}
                >
                  {movie.name}
                </button>
              )
            })}
          </div>
        )}
        <button onClick={handleSearch}>Buscar</button>
      </div>
    </div>
  )
}

export default SearchBar
