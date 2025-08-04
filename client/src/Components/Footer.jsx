import React from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

function Footer() {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
      };
    
  return (
    <div className="bg-[#94b9ff] pt-1 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <div className='flex flex-col sm:grid grid-cols-[1.5fr_1fr_1fr] gap-14 my-10 mt-10 text-sm'>
            <div className='flex flex-col justify-start'>
                <img src={assets.logo} className='mb-5 w-40 h-28 ' />
                <p className='w-full md:w-2/3 text-gray-900 text-xl'>
                    Foerver Choice Pvt.Ltd.
                </p>
                <p className='w-full md:w-2/3 text-gray-900 text-xl'>Kathmandu, Nepal</p>
            </div>

            <div className='lg:pt-12'>
                <p className='text-2xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-900 text-lg '>
                    <Link to='/' onClick={scrollToTop}><li className='hover:text-white'>Home</li></Link>
                    <Link to='/about' onClick={scrollToTop}><li className='hover:text-white '>About Us</li></Link>
                    <Link to='/contact'><li className='hover:text-white'>Contact Us</li></Link>
                    <li className='hover:text-white '>Privacy Policy</li>
                </ul>
            </div>

            <div className='pt-12'>
                <p className='text-2xl font-medium mb-5'>CONNECT WITH US</p>
                <ul className='flex flex-col gap-1 text-gray-900 text-lg'>
                    <li>+977-9800000000</li>
                    <li>contact@foreverchoice.com</li>
                   
                </ul>
            </div>
        </div>

        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2025@ foreverchoice.com - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer