/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri"
import { Navbar } from '../../component/ProductPage/navbar'
import UploadImage from "../../component/my-listening/uploader"
import Footer from '../../component/ProductPage/footer'
const ProductInfo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <head>
        <title>Ez-Rent |  Product-info </title>
      </head>
            <Navbar />
            <div className='2xl:w-[1500px] xl:w-[1200px] lg:w-[900px] md:w-[900px] w-full md:mx-auto  mt-36'>
                <h1 className='2xl:text-2xl text-xl md:block hidden font-bold text-[#404EED]'>Add new product</h1>
                <hr className='2xl:my-7 my-5 md:block hidden' />
                <div className='lg:flex gap-10'>
                    <div className='2xl:w-[600px] xl:w-[500px] md:w-full '>
                        <h1 className='text-[#111827] text-xl md:text-start text-center font-bold md:mb-10 mb-5'>Add images</h1>
                        <UploadImage />
                    </div>
                  <div className='border bg-gray-300 lg:block hidden w-[1px] mt-16 2xl:mr-10 xl:mr-2 h-[700px]'>

                  </div>
                  <hr className='border mx-5 lg:hidden block my-10'/>
                    <div className='mx-5'>
                        <h1 className='text-[#111827] 2xl:text-xl text-lg md:text-start text-center font-bold'>Product information</h1>
                        <div className='md:flex xl:gap-10 gap-6 mt-7'>
                            <div>
                                <label className='2xl:text-lg text-xs'>Product Name*</label>
                                <div className=' w-full  mt-2  rounded-[15px]'>
                                    <input type="text" className='cursor-pointer 2xl:w-[500px] px-3 xl:w-[450px] md:w-[330px] w-[95%]  outline-none focus:border-[#404EED] border-2 rounded-[15px] 2xl:py-3 py-2' />
                                </div>
                            </div>
                            <div className='flex xl:gap-10 gap-6 md:mt-0 mt-5 '>
                                <div>
                                    <label className='2xl:text-lg text-xs'>Price (per day)*</label>
                                    <div className='mt-2 rounded-[15px]'>
                                        <input type="text" className='cursor-pointer 2xl:w-[220px] px-3 xl:w-[180px] w-[130px] outline-none focus:border-[#404EED] border-2 rounded-[15px] 2xl:py-3 py-2' />
                                    </div>
                                </div>
                                <div>
                                    <label className='2xl:text-lg text-xs'>Quantity*</label>
                                    <div className='mt-2 rounded-[15px]'>
                                        <input type="text" className='cursor-pointer 2xl:w-[220px]  px-3 xl:w-[180px] w-[130px] outline-none focus:border-[#404EED] border-2  rounded-[15px] 2xl:py-3 py-2' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='md:flex xl:gap-10 gap-6 mt-7'>
                            <div>
                                <label className='2xl:text-lg text-xs'>Tagline*</label>
                                <div className=' w-full mt-2   rounded-[15px]'>
                                    <input type="text" className='cursor-pointer 2xl:w-[520px] px-3 xl:w-[450px] md:w-[350px] w-[95%] outline-none focus:border-[#404EED] border-2   rounded-[15px] 2xl:py-3 py-2' />
                                </div>
                            </div>
                            <div className='flex xl:gap-10 gap-6 md:mt-0 mt-5'>
                                <div>
                                    <label className='2xl:text-lg xl:text-xs text-[10px]'>Delivery/ collection fee*</label>
                                    <div className='mt-2  rounded-[15px]'>
                                        <input type="text" className='cursor-pointer 2xl:w-[220px] px-3 xl:w-[180px] w-[130px] outline-none focus:border-[#404EED] border-2 rounded-[15px] 2xl:py-3 py-2' />
                                    </div>
                                </div>
                                <div>
                                    <label className='2xl:text-lg text-xs'>Refundable deposit*</label>
                                    <div className='mt-2 rounded-[15px]'>
                                        <input type="text" className='cursor-pointer 2xl:w-[220px] px-3 xl:w-[180px] w-[130px]  outline-none focus:border-[#404EED] border-2 rounded-[15px] 2xl:py-3 py-2' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='md:flex xl:gap-10 gap-6 mt-7'>
                            <div>
                                <label className='2xl:text-lg text-xs'>Description*</label>
                                <div>
                                    <input type="text" className='cursor-pointer  border-2 mt-2 rounded-[15px] px-3 2xl:h-[91px] 2xl:w-[780px] xl:w-[680px] md:w-[500px] outline-none focus:border-[#404EED] border-2 w-full h-[80px]' />
                                </div>
                            </div>
                            <div className="relative inline-block text-left">
                                <div>
                                    <label className='2xl:text-lg text-xs'>Category*</label><br />
                                    <button
                                        onClick={toggleDropdown}
                                        type="button"
                                        className="inline-flex   items-center justify-center  w-full   text-sm font-medium text-gray-700 "
                                    >
                                        <label></label>
                                        <div className='2xl:w-[220px] xl:w-[180px] md:w-[130px] w-screen  mt-2  flex  items-center justify-end border-2 2xl:h-[91px] h-[80px] rounded-[15px]'>
                                            <RiArrowDropDownLine className="2xl:text-6xl text-4xl right-0 flex items-center" />

                                        </div>
                                    </button>
                                </div>

                                {isOpen && (
                                    <div className="origin-top-right z-10 absolute 2xl:left-10 left-1  mt-2 2xl:w-48 w-40 rounded-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <a href="#" className="block px-4 pt-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                Gaming
                                                <hr className='my-2' />
                                            </a>
                                            <a href="#" className="block px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                Backpack
                                                <hr className='my-2' />
                                            </a>
                                            <a href="#" className="block px-4  text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                Clothes
                                                <hr className='my-2' />
                                            </a>
                                            <a href="#" className="block px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                Vehicles
                                                <hr className='my-2' />
                                            </a>
                                            <a href="#" className="block px-4  text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                Accessories
                                                <hr className='my-2' />
                                            </a>
                                            <a href="#" className="block px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                Cosmetics
                                                <hr className='my-2' />
                                            </a>
                                            <a href="#" className="block px-4  text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                Books
                                                <hr className='my-2' />
                                            </a>
                                            <a href="#" className="block px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                Radios
                                                <hr className='my-2' />
                                            </a>
                                            <a href="#" className="block px-4  text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                Furniture
                                                <hr className='my-2' />
                                            </a>
                                            <a href="#" className="block px-4 pb-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                Travel
                                                <hr className='my-2' />
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className=' gap-10 mt-7'>
                            <div>
                                <label className='2xl:text-xl text-xs'>FAQ</label>
                                <div className='w-full  mt-2 rounded-[15px]'>
                                    <input type="text" className='cursor-pointer w-[95%] px-5 outline-none focus:border-[#404EED] border-2 rounded-[15px] 2xl:py-3 py-2' placeholder='Question' />

                                </div>
                                <div className='w-full  mt-5 prounded-[15px]'>
                                    <input type="text" className='cursor-pointer w-[95%] px-5 outline-none focus:border-[#404EED] border-2 rounded-[15px] 2xl:py-3 py-2' placeholder='Answer' />

                                </div>
                            </div>
                        </div>
                        <div className=' md:flex justify-between w-full md:mt-20 mt-5'>
                            <button className='text-[#404EED] bg-[#F1F5F9] 2xl:py-3 py-2 2xl:text-xl text-xs 2xl:h-14 h-12 rounded-lg w-20 2xl:w-28'>+ Add FAQ</button>
                            <button className='bg-[#404EED] 2xl:py-3 py-2 rounded-full 2xl:w-80 w-52 mt-3 2xl:text-xl text-xs text-center 2xl:h-14 h-12  flex md:mt-14 items-center justify-center  right-0 text-white'>Publish product</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ProductInfo
