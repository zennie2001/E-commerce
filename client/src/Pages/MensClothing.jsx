import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../Components/Title'
import ProductItems from '../Components/ProductItems'
import { Helmet } from 'react-helmet';

function MensClothing() {
  const { products, search, showSearch } = useContext(ShopContext)

  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState("relevant") // NEW

//   const toggleCategory = (e) => {
//     const value = e.target.value
//     if (category.includes(value)) {
//       setCategory(prev => prev.filter(item => item !== value))
//     } else {
//       setCategory(prev => [...prev, value])
//     }
//   }

  const toggleSubCategory = (e) => {
    const value = e.target.value
    if (subCategory.includes(value)) {
      setSubCategory(prev => prev.filter(item => item !== value))
    } else {
      setSubCategory(prev => [...prev, value])
    }
  }

  const applyFilter = () => {
        let productsCopy = products.filter(
    (item) => item.category.toLowerCase() === 'men'
    ).reverse();
 // default: newest first

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    // Sorting logic
    if (sortType === "low-high") {
      productsCopy.sort((a, b) => a.price - b.price)
    } else if (sortType === "high-low") {
      productsCopy.sort((a, b) => b.price - a.price)
    } else {
      productsCopy
    }

    setFilterProducts(productsCopy)
  }

  useEffect(() => {
    applyFilter()
  }, [ subCategory, search, showSearch, products, sortType]) // ADD sortType

  return (
    <>
    <Helmet>
        <title>Shop Men’s Clothing & Accessories | Forever Choice</title>
        <meta
            name="description"
            content="Explore the latest styles in men’s clothing, shoes, and accessories at Forever Choice. Quality fashion for men with fast delivery and secure checkout."
        />
        </Helmet>


      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] pb-12">
      <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

        {/* filter options */}
        <div className='min-w-60'>
          <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
            FILTERS
            <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} />
          </p>

          {/* category filter */}
          {/* <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              {["Men", "Women", "Kids"].map((label) => (
                <label key={label} className='flex gap-2'>
                  <input className='w-3' type='checkbox' value={label} onChange={toggleCategory} />
                  {label}
                </label>
              ))}
            </div>
          </div> */}

          {/* subcategory filter */}
          <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>TYPE</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              {["Topwear", "Bottomwear", "Winterwear"].map((label) => (
                <label key={label} className='flex gap-2'>
                  <input className='w-3' type='checkbox' value={label} onChange={toggleSubCategory} />
                  {label}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* product section */}
        <div className='flex-1 '>
          <div className='flex justify-between text-base sm:text-2xl mb-2'>
            <Title text1={'MEN’S'} text2={'CLOTHING'} />
            <select 
  className="border-2 border-gray-300 text-sm ] text-black"
  value={sortType}
  onChange={(e) => setSortType(e.target.value)}
>
  <option className="" value="relevant">Sort by: Relevant</option>
  <option className="" value="low-high">Sort by: Low to High</option>
  <option className="" value="high-low">Sort by: High to Low</option>
</select>

          </div>

          <div className='grid grid-cols-2 mt-4 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {filterProducts.map((item, index) => (
              <ProductItems
                key={index}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default MensClothing
