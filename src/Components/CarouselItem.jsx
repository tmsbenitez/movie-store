import React from 'react'

export default function CarouselItem ({ movieOverwiew, movieImage }) {
  return (
    <div className='relative flex-0 justify-center align-center'>
      <div />
      <img className='w-full h-auto relative' src={movieImage} alt='' />
      <div className='absolute bg-slate-950/500 text-color-white p-10 text-center h-2/5'>{movieOverwiew}</div>
    </div>
  )
}
