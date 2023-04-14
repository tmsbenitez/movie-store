import React from 'react'

export default function CarouselItem ({ movieOverwiew, movieImage }) {
  return (
    <div className='bg-white m-[10px] p-[10px] w-[400px] rounded-lg flex-none group overflow-hidden'>
      <div className='relative'>
        <img className='w-full h-full object-cover ' src={movieImage} alt='' />
        <div className=' flex flex-col justify-between invisible group-hover:visible '>
          <span className='flex text-center color-black p-[5px] rounded-lg absolute top-[70%] text-white bg-black opacity-90'>{movieOverwiew}</span>
        </div>
      </div>
    </div>
  )
}
