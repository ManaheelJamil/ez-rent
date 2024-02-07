"use client"
import React from 'react'
import { Navbar } from '../../component/ProductPage/navbar'
import Footer from '../../component/ProductPage/footer'
import Category from "../../component/Category/allCategory"
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RxBorderDotted } from "react-icons/rx";
const Categories = () => {
    return (
        <div>
            <head>
                <title>Ez-Rent |  Category </title>
            </head>
            <Navbar />
            <div className=' md:my-44 my-32  2xl:w-[1500px] xl:w-[1100px] lg:w-[900px] md:w-[700px] mx-auto'>
                <div >
                    <h1 className='lg:text-[30px] md:text-[30] text-[20px] text-center  font-bold'>All Categories</h1>
                </div>
                <Category />
            </div>

            <div className='flex justify-between   items-center md:w-[400px] md:mx-auto mx-5 mt-20  '>
                <div className='md:w-10 w-7 md:h-10 h-7 text-sm rounded-full flex flex-col justify-center items-center bg-[#F1F5F9] text-[#787878]'>
                    <FaArrowLeftLong />
                </div>
                <div className='md:w-10 w-7 md:h-10 h-7 rounded-full flex flex-col justify-center items-center bg-[#404EED] text-white text-xs '>1</div>
                <div className='md:w-10 w-7 md:h-10 h-7 rounded-full flex flex-col justify-center items-center border border-[#CACACA] text-xs'>2</div>
                <div className='md:w-10 w-7 md:h-10 h-7 rounded-full flex flex-col justify-center items-center border border-[#CACACA] text-xs'>3</div>
                <div className='md:w-10 w-7 md:h-10 h-7 rounded-full flex flex-col justify-center items-center border border-[#CACACA] text-xs'>4</div>
                <div className=' rounded-full flex flex-col justify-center items-center '><RxBorderDotted /></div>
                <div className='md:w-10 w-7 md:h-10 h-7 rounded-full flex flex-col justify-center items-center border border-[#CACACA] text-xs'>20</div>
                <div className='md:w-10 w-7 md:h-10 h-7 rounded-full flex flex-col justify-center items-center bg-[#F1F5F9] text-[#787878] text-sm'><FaArrowRightLong />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Categories