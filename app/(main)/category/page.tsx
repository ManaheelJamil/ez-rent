/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { RxCross1 } from "react-icons/rx"
import CategoryDeatil from '../../component/Category/categoryDeatil'
import Categories from '../../component/Category/productCategories'
import Pricerange from '../../component/ProductPage/pricerange'
import SortOrder from '../../component/ProductPage/sortorder'
import { Navbar } from '../../component/ProductPage/navbar'
import Footer from '../../component/ProductPage/footer'
const Category = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleToOpen1 = () => {
        console.log("hello")
        setIsOpen(true);
    };


    const toggleToClose1 = () => {
        setIsOpen(false);
    };
    const [open, setOpen] = useState(false);

    const toggleToOpen2 = () => {
        console.log("hello")
        setOpen(true);
    };


    const toggleToClose2 = () => {
        setOpen(false);
    };
    const [istoOpen, setIstoOpen] = useState(false);
    const toggleToOpen3 = () => {
        console.log("hello")
        setIstoOpen(true);
    };


    const toggleToClose3 = () => {
        setIstoOpen(false);
    };
    return (
        <>
            <head>
                <title>Ez-Rent |  Category </title>
            </head>
            <Navbar />
            {/* This code is for product or search input field  */}

            <div className='md:mt-44 mt-28 md:mx-auto mx-5 w-[85%]'>
                <h1 className=' xl:text-[40px] md:text-[20px] font-bold text-[25px] product-heading text-start text-[#313131]'>Backpack</h1>
                <p className='text-[#787878] md:text-sm text-[10px] md:w-[650px] w-full'>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                    ac aliquet odio mattis. Class aptent taciti sociosqu ad </p>
            </div>
            <hr className=' w-[85%] mx-auto md:block hidden  mt-8 ' />

            {/* only for mobile screen */}

            <div className='flex mt-10 md:hidden block w-[290px] text-[#313131] mx-auto gap-1'>
                <div className='w-[100px] px-2  h-[31px] rounded-full  gap-2 flex items-center bg-[#F1F5F9]' onClick={toggleToOpen1}>
                    <h1 className='text-[10px] font-[400px]'>Categories</h1>
                    <Image src="/arrange-circle.png" alt="icon" width={20} height={20} />
                </div>
                <div className='w-[100px]  px-2 h-[31px] rounded-full  gap-1 flex items-center bg-[#F1F5F9]' onClick={toggleToOpen2}>
                    <h1 className='text-[9px] font-[400px]'>Price Range</h1>
                    <Image src="/arrange-circle.png" alt="icon" width={20} height={20} />
                </div>
                <div className='w-[100px]  px-2 h-[31px] rounded-full  gap-2 flex items-center bg-[#F1F5F9]' onClick={toggleToOpen3}>
                    <h1 className='text-[9px] font-[400px]'>Sort Order</h1>
                    <Image src="/arrange-circle.png" alt="icon" width={20} height={20} />
                </div>
            </div>
            {isOpen && (
                <>
                    <div className='fixed inset-0 bg-gray-500 bg-opacity-75 z-10 '>
                        <div className='space-y-2 my-7 p-5 border rounded-2xl mx-5 bg-white absolute top-[30%] left-0 right-0 z-10'>

                            <div className='flex justify-between'>
                                <h1 className='text-[12px] font-semibold '>Categories</h1>
                                <RxCross1 className=" text-sm  cursor-pointer " onClick={toggleToClose1} />
                            </div>

                            <div className='flex gap-2'>
                                <input type='checkbox' className='rounded-[3px] border-[#CACACA] border-1 w-[14px] h-[14px]' />
                                <h1 className='text-[10px]'>All</h1>
                            </div>
                            <div className='flex gap-2'>
                                <input type='checkbox' className='rounded-[3px] border-[#CACACA] border-1 w-[14px] h-[14px]' />
                                <h1 className='text-[10px]'>Category 01</h1>
                            </div>
                            <div className='flex gap-2'>
                                <input type='checkbox' className='rounded-[3px] border-[#CACACA] border-1 w-[14px] h-[14px]' />
                                <h1 className='text-[10px]'>Category 02</h1>
                            </div>
                            <div className='flex gap-2'>
                                <input type='checkbox' className='rounded-[3px] border-[#CACACA] border-1 w-[14px] h-[14px]' />
                                <h1 className='text-[10px]'>Category 03</h1>
                            </div>
                            <div className='flex gap-2'>
                                <input type='checkbox' className='rounded-[3px] border-[#CACACA] border-1 w-[14px] h-[14px]' />
                                <h1 className='text-[10px]'>Category 04</h1>
                            </div>
                            <div className='flex gap-2'>
                                <input type='checkbox' className='rounded-[3px] border-[#CACACA] border-1 w-[14px] h-[14px]' />
                                <h1 className='text-[10px]'>Category 05</h1>
                            </div>
                            <div className='flex gap-2'>
                                <input type='checkbox' className='rounded-[3px] border-[#CACACA] border-1 w-[14px] h-[14px]' />
                                <h1 className='text-[10px]'>Category 06</h1>
                            </div>
                            <div className='flex gap-2'>
                                <input type='checkbox' className='rounded-[3px] border-[#CACACA] border-1 w-[14px] h-[14px]' />
                                <h1 className='text-[10px]'>Category 07</h1>
                            </div>
                        </div>
                    </div>
                </>
            )}
            {open && (
                <div className='fixed inset-0 bg-gray-500 bg-opacity-75 z-10 '>
                    <div className='bg-white p-5 border rounded-2xl mx-5 absolute top-[20%] w-[90%]'>
                        <RxCross1 className=" text-sm float-right cursor-pointer " onClick={toggleToClose2} />

                        <h1 className="mb-7 ">Price Range</h1>
                        <Pricerange />
                    </div>
                </div>
            )}
            {istoOpen && (
                <div className='fixed inset-0 bg-gray-500 bg-opacity-75 z-10 '>
                    <div className='bg-white p-5 border rounded-2xl mx-5 absolute top-[20%] w-[90%]'>
                        <RxCross1 className=" text-sm float-right cursor-pointer " onClick={toggleToClose3} />
                        <div className='mt-[-38px]'>
                            <SortOrder />
                        </div>
                    </div>
                </div>
            )}
            {/* Hero Section */}

            <div className='w-[85%] mt-2 md:mx-auto mx-5 gap-10 md:flex md:mb-44 mb-28'>

                {/* Left-Side */}
                <div className='md:block hidden 2xl:w-[25%] text-[#313131] xl:w-[20%]'>
                    <Categories />
                    <hr className='my-12 border' />
                    {/* Price range */}
                    <Pricerange />

                    <hr className='my-12 border' />
                    {/* Sort Order  */}
                    <SortOrder />
                </div>

                {/* Right-Side */}
                <CategoryDeatil />
            </div>
            <Footer />
        </>

    )
}

export default Category