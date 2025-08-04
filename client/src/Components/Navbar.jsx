import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import { useNavigate } from 'react-router-dom'
import { GrCart } from "react-icons/gr";
import { FaChevronDown } from "react-icons/fa";
import { useLocation } from 'react-router-dom';




function Navbar() {
    const [visible , setVisible]= useState(false)
    const navigate = useNavigate()

    const location = useLocation();


    const {setShowSearch, getCartCount, token ,setToken, setCartItems } = useContext(ShopContext)

    const logout = () =>{
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
        
        
    }



  return (
    <div className=" px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
    <div className='flex item-centre justify-between py-5 font-medium'>
        <Link to={'/'}><img src={assets.logo} className='w-36' alt='' /></Link>

        <ul className='hidden sm:flex gap-8 text-lg text-gray-700 mt-5'>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer">
                <div className="flex items-center gap-1 text-gray-700">
                <p>COLLECTION</p>
                <FaChevronDown className="text-sm mt-[2px]" />
                </div>
            </div>

            {/* Dropdown menu */}
            <div className="absolute left-0 mt-2 hidden group-hover:flex flex-col text-lg bg-white shadow-lg rounded  z-20 min-w-[170px]">
                  <NavLink
                to="/collection/accessories"
                className="px-4 py-2 text-md hover:bg-gray-100 text-gray-600"
                >
                Accessories
                </NavLink>
                <NavLink
                to="/collection/women-clothing"
                className="px-4 py-2 text-md hover:bg-gray-100 text-gray-600"
                >
                Women’s Clothing
                </NavLink>
                <NavLink
                to="/collection/men-clothing"
                className="px-4 py-2 text-md hover:bg-gray-100 text-gray-600"
                >
                Men’s Clothing
                </NavLink>
                <NavLink
                to="/collection/kid-clothing"
                className="px-4 py-2 text-md hover:bg-gray-100 text-gray-600"
                >
                Kid’s Clothing
                </NavLink>
              
            </div>
            </div>


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
        <img
        onClick={() => {
            setShowSearch(true);
            if (location.pathname === '/') {
            navigate('/collection');
            }
        }}
        src={assets.search_icon}
        className='w-5 cursor-pointer'
        alt='search'
        />


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
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all z-50 ${visible ? 'w-full' : 'w-0'}`}>
            <div className="flex flex-col text-gray-600 h-full">
                <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer border-b">
                <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="back" />
                <p>Back</p>
                </div>

                <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/">
                HOME
                </NavLink>

                {/* COLLECTION with always visible subcategories */}
                <div className="border-t border-b">
                <div className="w-full py-2 pl-6 font-medium">
                    COLLECTION
                </div>

                <div className="flex flex-col pl-10 border-t border-gray-200">
                    <NavLink onClick={() => setVisible(false)} className="py-2" to="/collection/accessories">
                    Accessories
                    </NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2" to="/collection/women-clothing">
                    Women’s Clothing
                    </NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2" to="/collection/men-clothing">
                    Men’s Clothing
                    </NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2" to="/collection/kid-clothing">
                    Kids Clothing
                    </NavLink>
                </div>
                </div>

                <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/about">
                ABOUT
                </NavLink>
                <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/contact">
                CONTACT
                </NavLink>
            </div>
            </div>







    </div>
    </div>
  )
}

export default Navbar