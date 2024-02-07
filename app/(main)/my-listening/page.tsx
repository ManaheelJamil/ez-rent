/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useState } from 'react'
import { BsPlusCircleFill } from "react-icons/bs"
import { Navbar } from '../../component/ProductPage/navbar'
import Footer from '../../component/ProductPage/footer'
import Filters from "../../component/my-listening/filters"
import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RxBorderDotted } from "react-icons/rx";
import Link from 'next/link'
const Listing = () => {
    return (
        <div>
            <head>
        <title>Ez-Rent |  My-Listening </title>
      </head>
            <Navbar />
            <div className='2xl:w-[1200px] xl:w-[900px] lg:w-[700px] md:w-[500px] md:mx-auto mx-5 2xl:my-44 xl:my-32 my-24'>
                <div className='flex justify-between'>
                    <h1 className='flex items-center md:gap-2 gap-0 md:text-3xl  text-lg font-extrabold'>My Listing<h1 className='text-[#404EED] md:text-3xl text-lg '>(2)</h1></h1>
                    <div className='md:hidden block'>
                        <Link href="/edit-product" >
                            <button className='bg-[#F1F5F9] flex   rounded-full items-center py-1 xl:pl-7 px-3 xl:text-md text-[10px]  pb-1 pr-2 border font-bold lg:gap-10 gap-1'>Add new product <BsPlusCircleFill className="2xl:w-14 2xl:h-14 lg:w-10 lg:h-10 w-5 h-5  text-[#404EED]" /></button>
                        </Link>

                    </div>
                </div>
                <hr className='border my-10' />
                <div className='md:flex justify-between items-center'>
                    <Filters />
                    <div className='md:block hidden '>
                        <Link href="/product-info" >
                            <button className='bg-[#F1F5F9] flex  rounded-full items-center py-1 xl:pl-7 lg:pl-3 xl:text-md text-sm pb-1 pr-2 border font-bold gap-10'>Add new product <BsPlusCircleFill className="2xl:w-14 2xl:h-14 lg:w-10 lg:h-10 w-5 h-5 text-[#404EED]" /></button>

                        </Link>

                    </div>
                </div>
                <div className='md:flex 2xl:gap-10 md:gap-3 mt-10'>
                    <Link href="/listing-details">
                        <div className='2xl:w-[570px] xl:w-[450px] lg:w-[350px] 2xl:h-[168px] xl:h-[130px] h-[110px]  rounded-2xl gap-5 flex border 2xl:p-3 p-2 border-[#787878]'>
                            <Image src="/Mask.png" alt="image" width={144} height={40} className='2xl:w-[144px] xl:w-[130px] lg:w-[110px] w-[90px]' />
                            <div className='w-full'>
                                <h1 className='2xl:text-xl lg:text-lg text-sm font-bold'>PlayStation 5</h1>
                                <p className='text-[#787878] 2xl:text-lg md:text-xs text-[8px]'>Lorem ipsum dolor sit amet</p>
                                <div className='flex justify-between items-center w-full mt-7'>
                                    <div className='md:p-2 p-1 text-center md:text-xs text-[10px] rounded-lg  border-[#404EED] border md:w-16 w-12'>$40/d</div>
                                    <Link href="/listing-details"> <button className='py-1 w-24 rounded-full flex items-center justify-center bg-[#F1F5F9] text-xs gap-3 px-1'> Active <Image src="/active.png" alt="image" width={32} height={18} />
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link href="/listing-details">
                        <div className='2xl:w-[570px] xl:w-[450px] md:mt-0 mt-5 lg:w-[350px] 2xl:h-[168px] xl:h-[130px] h-[110px]  rounded-2xl gap-5 flex border 2xl:p-3 p-2 border-[#787878]'>
                            <Image src="/Mask.png" alt="image" width={144} height={40} className='2xl:w-[144px] xl:w-[130px] lg:w-[110px] w-[90px]' />
                            <div className='w-full'>
                                <h1 className='2xl:text-xl lg:text-lg text-sm font-bold'>PlayStation 5</h1>
                                <p className='text-[#787878] 2xl:text-lg md:text-xs text-[8px]'>Lorem ipsum dolor sit amet</p>
                                <div className='flex justify-between items-center w-full mt-7'>
                                    <div className='md:p-2 p-1 text-center md:text-xs text-[10px] rounded-lg  border-[#404EED] border md:w-16 w-12'>$40/d</div>
                                    <Link href="/listing-details">  <button className='py-1 w-28 rounded-full flex items-center justify-center bg-[#F1F5F9] text-xs gap-3 px-1'> Inactive <Image src="/inactive.png" alt="image" width={32} height={18} />
                                    </button></Link>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='flex justify-between   items-center md:w-[400px] md:mx-auto mx-5 mt-20  '>
                <div className='md:w-10 text-sm w-7 md:h-10 h-7 rounded-full flex flex-col justify-center items-center bg-[#F1F5F9] text-[#787878]'>
                    <FaArrowLeftLong />
                </div>
                <div className='md:w-10 w-7 md:h-10 h-7 rounded-full flex flex-col justify-center items-center bg-[#404EED] text-white text-xs '>1</div>
                <div className='md:w-10 w-7 md:h-10 h-7 rounded-full flex flex-col justify-center items-center border border-[#CACACA] text-xs'>2</div>
                <div className='md:w-10 w-7 md:h-10 h-7 rounded-full flex flex-col justify-center items-center border border-[#CACACA] text-xs'>3</div>
                <div className='md:w-10 w-7 md:h-10 h-7 rounded-full flex flex-col justify-center items-center border border-[#CACACA] text-xs'>4</div>
                <div className=' rounded-full flex flex-col justify-center items-center '><RxBorderDotted /></div>
                <div className='md:w-10 w-7 md:h-10 h-7 rounded-full flex flex-col justify-center items-center border border-[#CACACA] text-xs'>20</div>
                <div className='md:w-10 w-7 md:h-10 h-7 rounded-full flex flex-col text-sm justify-center items-center bg-[#F1F5F9] text-[#787878]'><FaArrowRightLong />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Listing
 