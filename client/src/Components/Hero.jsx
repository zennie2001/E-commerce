import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='relative border  border-gray-400 rounded-md shadow-sm shadow-slate-300'>
        {/*Hero Left side*/}
        

        {/* Hero Right Side */}
        <img className='w-full lg:h-[450px] h-[300px] rounded-md object-cover' src={assets.banner_img} />
        <Link to='/collection'><button  className='absolute bottom-8 left-1/2 transform -translate-x-1/2  px-4 py-2 border border-gray-400 rounded hover:bg-gray-400 hover:text-white'>Shop Now</button></Link>


    </div>
  )
}

export default Hero