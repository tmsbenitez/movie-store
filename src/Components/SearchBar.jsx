/* eslint-disable react/jsx-closing-tag-location */
import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router'

function SearchBar ({ movies }) {
  const [isSelected, setIsSelected] = useState(false)
  const [search, setSearch] = useState('')
  const [filteredMovies, setFilteredMovies] = useState([])
  const wrapperRef = useRef(false)
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    if (search !== '') {
      const { id } = movies.find(({ name }) => name === search)
      navigate(`/movies/${id}`)
    }
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
    const filter = movies.filter(({ name }) => {
      return name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    })
    setFilteredMovies(filter)
  }

  const mapCondition = (condition = filteredMovies.length !== 0) => {
    return condition ? filteredMovies : movies
  }

  const clickAwayListener = (ref) => {
    const handleClickAway = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsSelected(false)
      }
    }
    document.addEventListener('mouseup', handleClickAway)
  }

  clickAwayListener(wrapperRef)

  return (
    <div className='flex w-full z-20' ref={wrapperRef}>
      <div className='relative flex w-full'>
        <input
          type='text'
          placeholder='Enter a movie name'
          className='border p-2 rounded-l align-center flex-1 h-auto focus:outline-0 focus:border-black duration-200'
          value={search}
          onChange={handleChange}
          onSelect={() => setIsSelected(true)}
        />
        {isSelected
          ? <div className='absolute w-full  top-10 h-fit max-h-72 bg-white border rounded-b overflow-y-auto'>
            {mapCondition().map((movie, index) =>
              (
                <button
                  key={index}
                  className='flex w-full h-auto p-2 align-center text-color-black hover:bg-black/10'
                  onClick={() => {
                    setSearch(movie.name)
                    setIsSelected(false)
                  }}
                >
                  {movie.name}
                </button>
              )
            )}
          </div>
          : null}
      </div>
      <button
        type='submit'
        className='px-4 py-2 font-medium text-white duration-200 bg-black rounded-r cursor-pointer hover:bg-black/80'
        onClick={handleSubmit}
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar
