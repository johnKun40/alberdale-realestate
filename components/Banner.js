import Image from 'next/image';
import banner from '../public/img/banner1.jpg'
import React from 'react';
import Search from './Search';

function Banner() {
  return (
    <div className='text-center'>
        <div className='absolute top-0 left-0 h-[75vh] -z-10 w-screen'>
        <div className='absolute top-0 left-0 w-full h-[75vh] lg:h-[75vh] bg-black/50 z-10' />
            <Image src={banner} alt='banner' layout='fill' objectFit='cover' />
        </div>

        <p className='uppercase text-sm tracking-widest text-white my-10'>Looking to invest, a home or a place to stay?</p>

        <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl font-serif'>
            <span className='text-white'>Explore. </span><span className='text-[#9C7821]'>Find. </span><span className='text-white'>Acquire</span>
        </h1>

        <Search />
        


    </div>
  )
}

export default Banner