import React from 'react'

function Title({text1, text2}) {
  return (
    <div className='flex flex-col gap-2 items-center mb-3'>
      <p className='text-gray-500 '>{text1} <span className='text-gray-700 font-medium '>{text2}</span></p>  
      <p className='w-16 sm:w-16 h-[1px] sm:h-[2px] bg-gray-700'></p>

    </div>
  )
}

export default Title