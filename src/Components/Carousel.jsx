import React, { useState } from 'react'
import CarouselItem from './CarouselItem'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { FaDotCircle } from 'react-icons/fa'

function MovieCarousel ({ movies }) {
  const [index, setIndex] = useState(0)

  const updateIndex = (index) => {
    if (index < 0) {
      index = 0
    } else if (index >= movies.length) {
      index = movies.length - 1
    }
    setIndex(index)
  }

  return (
    <div className='relative h-[700px] overflow-hiden '>
      <div className='absolute flex h-full delay-300 ' style={{ transform: `translate(-${index}%)` }}>
        {movies.map((movies, i) => {
          const movieOverwiew = movies.overview
          const movieImage = movies.images
          return <CarouselItem movieOverwiew={movieOverwiew} movieImage={movieImage} />
        })}
      </div>
      <div className='carousel-buttons'>
        <button className='button-arrow' onClick={() => { updateIndex(index - 10) }}>
          <MdArrowBackIosNew />
        </button>

        {movies.map((movies, index) => {
          return (
            <button onClick={() => { updateIndex(index) }} className='indicator-buttons'>
              <FaDotCircle />
            </button>
          )
        })}

        <button className='button-arrow' onClick={() => { updateIndex(index + 10) }}>
          <MdArrowForwardIos />
        </button>
      </div>
    </div>
  )
}

export default MovieCarousel
