import React from 'react'
import Hero from '../Components/Hero'
import LatestCollections from '../Components/LatestCollections'
import BestSellers from '../Components/BestSellers'
import OurPolicy from '../Components/OurPolicy'
import NewsletterBox from '../Components/NewsletterBox'

function Home() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Hero />
        <LatestCollections />
       <BestSellers/>
       <OurPolicy/>
       
    </div>
  )
}

export default Home