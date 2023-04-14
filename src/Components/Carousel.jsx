import React, { useRef } from 'react'
import CarouselItem from './CarouselItem'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'

export default function Carousel ({ movies }) {
  const carousel = useRef(null)

  const handleLeftClick = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  const handleRightClick = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  return (
    <div className='m-w-[75vw] '>
      <div className='flex overflow-x-auto scroll-smooth -webkit-scrollbar-none' ref={carousel}>
        {movies.map((movies) => {
          const movieOverwiew = movies.overview
          const movieImage = movies.images
          return (
            <CarouselItem key={movies.id} movieOverwiew={movieOverwiew} movieImage={movieImage} />
          )
        })}
      </div>
      <div className='bg-transparent border-none cursor-pointer w-full text-center'>
        <button onClick={handleLeftClick}>
          <MdArrowBackIosNew />
        </button>
        <button onClick={handleRightClick}>
          <MdArrowForwardIos />
        </button>
      </div>
    </div>
  )
}
