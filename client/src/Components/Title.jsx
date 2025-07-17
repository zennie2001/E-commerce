import React from 'react'

function Title({text1, text2}) {
  return (
    <div className='flex flex-col gap-2 items-center mb-3'>
      <p className='text-gray-600 font-medium '>{text1} <span className="font-medium bg-gradient-to-r from-[#cdffd8] to-[#94b9ff] bg-clip-text text-transparent">{text2}</span></p>  
      <p className='w-16 sm:w-16 h-[1px] sm:h-[2px] bg-gradient-to-r from-[#cdffd8] to-[#94b9ff] '></p>

    </div>
  )
}

export default Title