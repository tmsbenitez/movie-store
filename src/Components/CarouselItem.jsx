import React from 'react'

export default function CarouselItem ({ movieOverwiew, movieImage }) {
  return (
    <div className='carousel-item'>
      <div />
      <img className='carousel-img' src={movieImage} alt='' />
      <div className='carousel-item-text'>{movieOverwiew}</div>
    </div>
  )
}
