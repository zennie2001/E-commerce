import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../Components/RelatedProducts';
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet';

function Product() {

  const {productId} = useParams();
  const {products, currency, addToCart, token } = useContext(ShopContext)
  const [productData , setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [size, setSize]= useState('')

  const navigate = useNavigate()

  const fetchProductData = async () => {

    products.map((item)=>{
      if(item._id === productId){
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })

  }

  useEffect(()=>{
    fetchProductData()
  },[productId, products])

  return productData ? (
    <>
     <Helmet>
        <title>{productData.name} | Forever Choice</title>
        <meta 
        name="description" 
        content="Discover the latest trends in clothing, shoes, and accessories at Forever Choice. Shop quality fashion products online with fast delivery and secure checkout." />
      </Helmet>

      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* product images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row '>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:w-full sm:mb-3 flex-shrink-0' />
              ))
            }

          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} />

          </div>

        </div>

        {/* Product Info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img className='w-3 5' src={assets.star_icon}/>
            <img className='w-3 5' src={assets.star_icon}/>
            <img className='w-3 5' src={assets.star_icon}/>
            <img className='w-3 5' src={assets.star_icon}/>
            <img className='w-3 5' src={assets.star_dull_icon}/>
            <p className='pl-2' >(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2 '>
              {productData.sizes.map((item, index)=>(
                <button key={index} onClick={()=>setSize(item)} className={`border py-2 px-4 hover:bg-gray-200 bg-gray-100 ${item === size ? 'border-[#94b9ff]' : ''}`}>{item}</button>
              ))}

            </div>


          </div>
          <button  onClick={()=> token ? addToCart(productData._id,size) : navigate('/login')} className='bg-[#94b9ff] hover:bg-blue-400 text-black px-8 py-3 text-sm active:bg-blue-400'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5  ' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original Product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>

          </div>

        </div>

      </div>


      {/* Description and review section */}
      <div className='my-20'>
        <div className='flex'>
         <b className='border px-5 py-3 text-sm'>DESCRIPTION</b>
         <p className='border px-5 py-3 text-sm'>Reviews ({ Math.floor(1000 * Math.random())})</p>

        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>This e-commerce platform, based in Nepal, focuses on providing a wide selection of health, baby, and beauty products at accessible prices. It aims to make quality healthcare more accessible to consumers.</p>
          <p>We have a dedicated team who ensures the quality and authenticity of the products before sourcing them in our store from brands and authorized distributors.</p>
        </div>

      </div>

      {/* Display related products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

    </div>
    </div>
    </>
    
  ) : <div className='opacity-0'></div>
}

export default Product