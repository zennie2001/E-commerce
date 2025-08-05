

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
            question: 'What is Forever Choice Pvt. Ltd.?',
            answer: ' Forever Choice is a Kathmandu-based eCommerce company dedicated to offering quality products at competitive prices. We aim to deliver exceptional value and service to our customers across Nepal.'
        },
        {
            question: 'How can I place an order?',
            answer: ' You can place an order by browsing products on our website, adding them to your cart, and proceeding to checkout. Once your order is confirmed, you’ll receive an email with your order details.'
        },
        {
            question: 'Do you deliver all over Nepal?',
            answer: 'Yes, we offer delivery services across major cities and towns in Nepal. Some remote areas may have limited service – please contact us to confirm delivery availability for your location.'
        },
        {
            question: 'What are your delivery charges?',
            answer: 'Delivery charges may vary depending on your location and order amount. We offer free delivery for orders above a certain threshold. You’ll see applicable charges at checkout.'
        },
         {
            question: 'Can I return or exchange a product?',
            answer: 'Yes, we have a return/exchange policy for defective, damaged, or incorrect items. Please contact us within 3 days of delivery with relevant photos and your order ID.'
        },
        
        
       
    ]
  return (
    <section className="w-full  flex-col lg:px-24 px-4 lg:py-16 py-10 gap-12">
    <div className={twMerge("section-header  flex-col pb-6 ") }>
      <p className="text-base font-bold text-[#94b9ff] lg:text-start text-left">
        FAQS
      </p>
      <p className="md:text-[30px] text-[1.5rem]  font-semibold  text-left ">
        Common Questions, Quick Answers
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
                <div className='rounded-full p-3 bg-green-800'>
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
