
"use client"
import React, { useState } from 'react'
import { Navbar } from '../../component/ProductPage/navbar'
import Footer from '../../component/ProductPage/footer'
import Additem from '../../component/Homepage/additem'
import HomeCategories from '../../component/Category/homeCategories'
import Trendingitem from '../../component/Homepage/trendingitem'
import Image from 'next/image'
import ProductDetailPopup from '../../component/product-detail/product-detail-popup';

import Link from 'next/link'
import { CiSearch } from "react-icons/ci"
import { useRouter } from 'next/navigation';
import QuickviewContext from "../../context/QuickviewContext"
const Home = () => {
  const [quickView, setQuickView] = useState(false)
  const router = useRouter();

  const handleExploreClick = () => {
    router.push('/product');
  };

  const contextValue = {
    quickView,
    setQuickView,
  };


  return (
    <div >
      <QuickviewContext.Provider value={contextValue}>

        <head>
          <title>Ez-Rent | Home </title>
        </head>
        <Navbar />

        {/* Header */}
        <Image src="/shade-1 (2).png" alt='home-page' width={804} height={804} className='absolute 2xl:top-[-220px] 2xl:left-[-290px] lg:top-[-240px] md:top-[-220px] top-[-50px] left-[-120px] lg:left-[-350px]  md:left-[-320px]  ' />
        <div className='md:mt-14 mt-24 md:mx-auto  flex flex-col-reverse md:flex-row z-1 justify-between 2xl:pl-28 bg-[#F9F9F9] lg:px-20 md:px-10  home-page-shadow md:items-center '>
          <div className='px-5 z-20'>
            <h1 className='2xl:text-[20px] text-[10px]'>Rent Anything You Need, Anytime</h1>
            <h1 className='2xl:text-[48px]  xl:text-[35px] lg:text-[25px] text-[20px] font-bold'>Your One-Stop Shop for<br />
              Rentals!</h1>
            <button
              onClick={handleExploreClick}
              className='cursor-pointer 2xl:w-60 z-20 xl:w-48 w-40 2xl:py-5 mb-10 explore-button xl:py-4 py-3 md:mt-4 mt-2 text-center 2xl:text-xl md:text-sm text-xs flex items-center justify-center bg-[#404EED] rounded-full xl:gap-5 gap-3 text-white'
            >
              Explore Now <CiSearch className="xl:text-3xl md:text-lg text-sm" />
            </button>
          </div>
          <Image src="/Ellipse 114.png" alt="image" width={900} height={900} className='right-0 absolute left-0 inset-0 block md:hidden' />
          <Image src="/Ellipse 114.png" alt='home-page' width={900} height={900} className=' mx-auto absolute 2xl:bottom-[-200px]  2xl:left-64 xl:left-32 md:left-[-150px] md:bottom-[-100px] md:block hidden xl:bottom-[-420px]' />
          <div>
            <Image src="/home.png" alt='home-page' width={900} height={800} className=' 2xl:mt-10 lg:w-[404px] 2xl:w-[804px]  xl:w-[604px]  md:w-[700px] ' />
          </div>
        </div>

        {/* Add-Item */}
        <div id="additem">
          <Additem />
        </div>
        {/* Trendingitem   */}
        <div id="trending">
          <Trendingitem />
        </div>
        <HomeCategories />
        <Footer />
          {quickView && (
          <>
            <div className=' '>
              <ProductDetailPopup />
            </div>
          </>
        )}  
      </QuickviewContext.Provider>

    </div>
  )
}

export default Home