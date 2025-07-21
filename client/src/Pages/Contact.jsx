import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import { Helmet } from 'react-helmet';

function Contact() {
  return (

    <>
      <Helmet>
        <title>Contact Us | Forever Choice</title>
        <meta 
        name="description" 
        content="Discover the latest trends in clothing, shoes, and accessories at Forever Choice. Shop quality fashion products online with fast delivery and secure checkout." />
      </Helmet>

      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />

      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-2xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>Baneshwor, Kathmandu, Nepal</p>
          <p className='text-gray-500'>Phone: 9877777777 <br/> Email: admin@foreverchoice.com</p>
          <p className='font-semibold text-xl text-gray-600' >Careers at Forever</p>
          <p className='text-gray-500'>Learn more about our teams and job openings</p>
          <button className='border border-black rounded-md px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500' >Explore Jobs</button>
        </div>

      </div>

    </div>
    </>


    
  )
}

export default Contact