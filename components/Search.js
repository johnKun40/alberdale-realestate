import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

function Search() {
  return (
    <div>
    <form className='px-[30px] py-6 max-w-[1100px]  mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-[-60px] lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg '>
        
        <div className='flex flex-col'>
            <label className='text-lg text-white'>Where in Lagos</label>
            <select className='border-2 rounded-lg px-20 p-3 !border-[#9C7821] active:border-slate-900'>
                <option>Ikeja</option>
                <option>Ikoyi</option>
                <option>Lekki</option>
                <option>Epe</option>
            </select>
        </div>

        <div className='flex flex-col'>
            <label className='text-lg text-white'>Type of Property</label>
            <select className='border-2 rounded-lg p-3 px-20 border-[#9C7821] active:border-slate-900'>
                <option>Land</option>
                <option>Apartment</option>
                <option>Duplex</option>
                <option>Office</option>
            </select>
        </div>

        <div className='flex flex-col'>
            <label className='text-lg text-white'>Price Range</label>
            <select className='border-2 rounded-lg p-3 pl-14 border-[#9C7821] active:border-slate-900'>
                <option>less than 1,000,000</option>
                <option>1,000,000 to 10,000,000</option>
                <option>10,000,000 to 50,000,000</option>
                <option>50,000,000 and above</option>
            </select>
        </div>


        <button className='bg-[#9C7821] mt-4 hover:bg-slate-200 transition w-full lg:max-w-[162px] h-12 rounded-lg flex justify-center items-center text-white text-lg lg:mt-[30px]'>
            <AiOutlineSearch />
        </button>
    </form>
    </div>
  )
}

export default Search