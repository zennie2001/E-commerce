import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom'

function ProductItems({id, image, name, price}) {
    const {currency} = useContext(ShopContext)
  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className='border rounded-md shadow-lg'>
        <div className='overflow-hidden'>
            <img className= 'h-[300px] w-full object-cover  hover:scale-110  transition ease-in-out ' src={image[0]} />

        </div>
        <div className='p-2 pb-4'>
        <p className='pt-3 pb-1 text-gray-600 text-md truncate overflow-hidden whitespace-nowrap'>{name}</p>
        <p className='text-lg font-medium'>{currency}{price}</p>
        </div>
        </div>
    </Link>
  )
}

export default ProductItems