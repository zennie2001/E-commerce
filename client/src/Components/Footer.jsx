import React from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

function Footer() {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
      };
    
  return (
    <div className="bg-gray-100 pt-1 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <div className='flex flex-col sm:grid grid-cols-[1.5fr_1fr_1fr] gap-14 my-10 mt-10 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32 ' />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Foerver Choice Pvt.Ltd.
                </p>
                <p className='w-full md:w-2/3 text-gray-600'>Baneshwor, Kathmandu, Nepal</p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <Link to='/' onClick={scrollToTop}><li>Home</li></Link>
                    <Link to='/about' onClick={scrollToTop}><li>About us</li></Link>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>CONNECT WITH US</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+977-984567892</li>
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