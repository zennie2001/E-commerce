import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'

function About() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
         
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Initially established in 2019 with the aim of digitizing the fashion sector, ForeverChoice moved towards setting up as an online hub not just for adults but baby and beauty products as well.</p>
        <p>Undeniably, bringing affordable, quality products to the masses with just one tap is what primarily ForeverChoice aims at.</p>
        <p>Alongside, ForeverChoice slowly stretched its wings to an online marketplace platform and aimed to personify itself as Nepal’s largest e-commerce in health, Baby, and beauty categories.</p>
        
        <b className='text-gray-800'>Our Mission</b>
        <p>This tech company was solidified to cater to customer needs and provide them with the best shopping experience and thrived to provide quality, authentic and reliable products at an affordable price with innovative technology.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p>We have a dedicated team who ensures the quality and authenticity of the products before sourcing them in our store from brands and authorized distributors.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p>We provide the best shopping experience and thrived to provide quality, authentic and reliable products at an affordable price with innovative technology.</p>

        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer service:</b>
          <p>Additionally, prompt nationwide delivery, standardized shipping rates, certain ease in communication, and booking orders also come aligned while meeting customer satisfaction.</p>
        </div>


        
      </div>
    </div>
  )
}

export default About