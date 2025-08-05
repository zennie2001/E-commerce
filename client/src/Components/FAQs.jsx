

import { twMerge } from "tailwind-merge";
import React, { useState } from 'react'
import { FaPlus} from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export default function FAQContact() {
     const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
    const faqs = [
        {
            question: 'What types of projects does RG Creations specialize in?',
            answer: ' We handle residential, commercial, hospitality, and entertainment spaces. This includes hotels, villas, banquet halls, nightclubs, offices, restaurants, retail outlets, and more.'
        },
        {
            question: 'Do you work only in Kathmandu or across Nepal?',
            answer: ' We serve clients all over Nepal including Pokhara, Butwal, Chitwan, Dharan, Biratnagar, and even abroad for virtual design consulting.'
        },
        {
            question: 'Can I bring my own layout or concept?',
            answer: ' Yes, we encourage client involvement. Whether you have reference images or hand-drawn sketches, our team will work closely with you to refine and bring your ideas to life.'
        },
        {
            question: 'Do you offer 3D walkthroughs before construction begins?',
            answer: ' Yes. All major projects include 3D renderings, floor plans, and immersive walkthroughs to help you visualize your space before committing to construction.'
        },
         {
            question: 'Do you also help with permits and government approvals?',
            answer: ' Absolutely. We handle municipal drawing sets, permit applications, and compliance documentation required for construction in Nepal.'
        },
        {
            question: 'Are your designs Vastu-compliant?',
            answer: '  Yes, upon request we integrate Vastu Shastra principles while ensuring the design remains practical and modern.'
        },
        {
            question: 'What is your typical project duration?',
            answer: ' Design-only projects usually take 3 to 6 weeks. Design and build projects range from 3 months to over a year depending on the scale.'

        },
        {
            question: 'Is RG Creations affordable for small businesses?',
            answer: ' We offer scalable packages and flexible pricing tailored to your budget, ensuring high-quality service for startups and SMEs as well.'
        },
        {
            question: 'How do I start working with you?',
            answer: '  Contact us via our website or call us to schedule a design consultation. We will guide you through the process and provide a project estimate after understanding your needs.'
        }
    ]
  return (
    <section className="w-full  flex-col lg:px-24 px-4 lg:py-16 py-10 gap-12">
    <div className={twMerge("section-header  flex-col pb-6 ") }>
      <p className="text-base font-bold text-[#333d49] lg:text-start text-left">
        FAQS
      </p>
      <p className="md:text-[30px] text-[1.5rem]  font-semibold  text-left ">
        Got Questions? We’ve Got the<br/> Edge on Answers
      </p>
    </div>
    <div className="flex_center lg:w-[70%] w-full">
        <div className="flex flex-col w-full gap-6">
            {faqs.map((item, index) => (
        <div
          key={index}
          className=" py-4"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex items-center justify-between text-left"
          >
            <div className="flex items-center gap-4">
              {openIndex === index ? (
                <div className='rounded-full p-3 bg-[#980000]'>
                <RxCross2  className=" text-white" />
                </div>
              ) : (
                <div className='rounded-full p-3 bg-[#333d49]'>
                <FaPlus className="  text-white" />
                </div>
              )}
              <span className={`text-[20px]  font-medium text-gray-800`}>
                {item.question}
              </span>
            </div>
          </button>

          {/* Answer */}
          {openIndex === index && (
            <div className="mt-3 pl-[58px] text-gray-500">
              {item.answer}
            </div>
          )}
        </div>
      ))}
        </div>
    </div>
</section>
  )
}
