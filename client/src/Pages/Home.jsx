import React from 'react'
import Hero from '../Components/Hero'
import LatestCollections from '../Components/LatestCollections'
import BestSellers from '../Components/BestSellers'
import OurPolicy from '../Components/OurPolicy'
import NewsletterBox from '../Components/NewsletterBox'
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <>
    <Helmet>
        <title>Online Fashion E-Commerce Store | Forever Choice</title>
        <meta 
        name="description" 
        content="Discover the latest trends in clothing, shoes, and accessories at Forever Choice. Shop quality fashion products online with fast delivery and secure checkout." />
      </Helmet>

       <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[6vw]">
        <Hero />
        <LatestCollections />
       <BestSellers/>
       <OurPolicy/>
       
    </div>
    </>
   
  )
}

export default Home