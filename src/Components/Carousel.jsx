import React, { useState } from 'react'
import CarouselItem from './CarouselItem'
import '../css/Carousel.css'

function Carousel ({ movies }) {
  const [activeIndex, setActiveIndex] = useState(0)
  console.log(movies)
  return (
    <div className='carousel'>
      <div className='inner' style={{ transform: `translate:(-${activeIndex * 100})` }}>
        {movies.map((movie, key) => {
          return (
            <CarouselItem key={key} movieOverwiew={movie.overview} movieImage={movie.images} />
          )
        })}
      </div>
    </div>
  )
}

export default Carousel
