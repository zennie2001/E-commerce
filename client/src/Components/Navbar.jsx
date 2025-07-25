import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import { useNavigate } from 'react-router-dom'
import { GrCart } from "react-icons/gr";


function Navbar() {
    const [visible , setVisible]= useState(false)
    const navigate = useNavigate()

    const {setShowSearch, getCartCount, token ,setToken, setCartItems } = useContext(ShopContext)

    const logout = () =>{
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
        
        
    }



  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
    <div className='flex item-centre justify-between py-5 font-medium'>
        <Link to={'/'}><img src={assets.logo} className='w-36' alt='' /></Link>

        <ul className='hidden sm:flex gap-8 text-lg text-gray-700 mt-5'>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1 '>
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>ABOUT US</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <a href='https://e-commerce-admin-umber-ten.vercel.app'  target="_blank" rel="noopener noreferrer" className='flex items-center border border-gray-500 h-8 px-4 text-xs   -mt-1 rounded-full hover:bg-slate-700 hover:text-white '> 
                <p className=''>Admin Panel</p>
            </a>


        </ul>

        <div className='flex items-center gap-6'>
            <Link to='/collection' >
            <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer ' alt='' />
            </Link>

            <div className='group relative'>
                <img onClick={() => token ? null : navigate('/login')} src={assets.profile_icon} className='w-5 cursor-pointer ' alt=''/> 
                    {/* dropdon menu */}
                {token &&
                 <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-30'>
                 <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                     <p className='cursor-pointer hover:text-black'>My Profile</p>
                     <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                     <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                 </div>
                 

                </div>
                }

            </div>

            <Link to='/cart' className='relative'>
                <GrCart className='w-6 h-6 text-gray-700'/>
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'> {getCartCount()}</p>
            </Link>
            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden ' />

        </div>

        {/* sidebar menu for small screens */}
        <div className={`absolute top-0 right-0 buttom-0 overflow-hidden bg-white transition-all z-50 ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                    <img className='h-4 rotate-180' src={assets.dropdown_icon} alt='' />
                    <p>Back</p>

                </div>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>

            </div>

        </div>






    </div>
    </div>
  )
}

export default Navbar