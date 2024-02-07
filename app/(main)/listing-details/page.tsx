"use client"
import React from 'react'
import Image from 'next/image'
import EmblaCarousel from '../../component/Carousel/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel-react'
import Link from 'next/link'
import { BiMessageAltDots } from "react-icons/bi"
import { AiOutlineMinus } from "react-icons/ai"
import '../../css/base.css'
import '../../css/sandbox.css'
import '../../css/embla.css'
import { RxCross1 } from "react-icons/rx"
import { useState } from 'react'
import { GoTrash } from "react-icons/go"
const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
import Footer from "../../component/ProductPage/footer"
import { Navbar } from '../../component/ProductPage/navbar'
const ListingDetail = () => {
    const [open, setOpen] = useState(false);

    const toggleToOpen = () => {
        console.log("hello")
        setOpen(true);
    };


    const toggleToClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <head>
                <title>Ez-Rent |  Listening-detail </title>
            </head>
            <Navbar />
            <div className='2xl:my-52 my-32 md:flex 2xl:w-[1300px] xl:w-[1000px] lg:w-[800px] 2xl:gap-10  md:mx-auto mx-3'>
                <div>
                    <main className="w-[100%]  ">
                        <section className="sandbox__carousel">
                            <EmblaCarousel slides={SLIDES} options={OPTIONS} images={undefined} />
                        </section>
                    </main>
                </div>
                <div className='md:mt-0 mt-20  md:mx-6 mx-2'>
                    <div className='md:flex xl:justify-between '>
                        <h1 className='text-[#111827] 2xl:text-[36px] text-[20px] font-bold'>Sony Play Station 5</h1>
                        <div className='flex xl:gap-6 gap-3 items-center md:mt-0 mt-5'>
                            <Link href="/edit-product">
                                <div className='2xl:w-32 xl:w-28 md:w-24 w-16 px-2 2xl:h-20 h-15 py-3 rounded-2xl flex items-center justify-center 2xl:gap-8 xl:gap-3 bg-[#F1F5F9]'>
                                    <Image src="/edit-2.png" alt="pencil" width={24} height={24} className='2xl:w-[24px] 2xl:h-[24px] w-[20px] h-[20px]' />
                                    <p className='2xl:text-2xl text-sm'>Edit</p>
                                </div>
                            </Link>

                            <div onClick={toggleToOpen} className='2xl:w-40 xl:w-28 md:w-28 w-32 p-3 2xl:h-20 h-15  rounded-2xl flex items-center justify-center 2xl:gap-5 xl:gap-2 bg-[#F1F5F9]'>
                                <Image src="/trash.png" alt="pencil" width={30} height={30} className='2xl:w-[30px] 2xl:h-[30px] w-[18px] h-[18px]' />
                                <p className='2xl:text-2xl text-sm cursor-pointer'>Delete</p>
                            </div>
                            <div className='md:hidden block '>
                                < button className='bg-[#404EED] w-36 py-3 flex items-center justify-center but-shade gap-2 rounded-full text-xs text-white'><BiMessageAltDots className="2xl:text-5xl text-xl" />View 10 chats</button>

                            </div>
                        </div>
                    </div>
                    <div className='flex 2xl:my-14 xl:my-10 my-10 flex-wrap 2xl:space-x-5 xl:space-x-5 md:space-x-3 space-x-3 items-center'>
                        <p className='text-[#787878] 2xl:text-xl xl:text-sm text-sm'>Category:</p>
                        <button className='bg-[#404EED] 2xl:w-32 w-24 text-sm h-8 md:py-2 py-1 text-[11px] rounded-full text-white text-center'>Gaming</button>
                        <div className='md:p-2 p-1 text-center md:text-xs text-[10px] rounded-lg  border-[#404EED] border md:w-16 w-14'>$10/d</div>
                        <p className='flex gap-2 2xl:text-xl text-sm'>Left: <p className='text-[#4CAF50] 2xl:text-xl text-sm'>03</p></p>
                        <p className='flex gap-2 2xl:text-xl text-sm md:mt-3'>Added on:<p className='text-[#404EED] 2xl:text-xl text-sm md:mt-0 '>01-03-23</p></p>
                        <div className='md:block hidden  mt-3'>
                            < button className='bg-[#404EED] 2xl:w-60  2xl:py-3 xl:w-40 lg:w-44 w-72 py-3 text-sm flex items-center justify-center but-shade gap-2 rounded-full 2xl:text-lg  text-white'><BiMessageAltDots className="2xl:text-3xl text-xl" />View 10 chats</button>

                        </div>
                    </div>
                    <div className='bg-[#F1F5F9] text-xl w-full 2xl:h-16 h-12 flex justify-between items-center 2xl:px-10 px-6 rounded-2xl'>
                        <p className='xl:text-sm text-xs'>Description</p>
                        <AiOutlineMinus />
                    </div>
                    <div>
                        <p className='2xl:px-10 px-6 2xl:mt-10 mt-5 2xl:text-sm xl:text-[12px] text-[10px]'>
                            The PlayStation 5 is the ultimate gaming console that delivers unparalleled performance and
                            breathtaking experiences. Immerse yourself in stunning 4K graphics, ultra-fast loading times,
                            responsive gameplay thanks to its advanced hardware and innovative features. With the PS5,
                            gaming reaches new heights of real ism and excitement. Experience lifelike graphics, enhanc
                            tracing technology, and feel the power of the custom AMD Zen 2 processor and RDNA 2-base
                            ultra-high-speed SSD allows for lightning-fast loading, enabling you to dive into your favorite
                            instantly. Enjoy immersive gameplay with the DualSense wireless controller haptic feedback
                            triggers, which provide a new level of sensory immersion. The PlayStation 5 redefines gaming
                            unparalleled gaming experience that you won want to miss.
                        </p>
                    </div>
                    <div className='bg-[#F1F5F9] text-xl w-full 2xl:h-16 h-12  mt-5 flex justify-between items-center 2xl:px-10 px-6 rounded-2xl'>
                        <p className='xl:text-sm text-xs'>FAQ</p>
                        <AiOutlineMinus />
                    </div>
                    <div className='2xl:px-10 px-6 text-[12px] '>
                        <p className='2xl:my-10 my-5'>
                            <b>1. Question:</b> We offer flexible rental durations ranging from a minimum of 3 days up to several weeks or months, depending on your preference and availability?
                        </p>
                        <p className='ml-6'>
                            <b>Answer:</b> We offer flexible rental durations ranging from a minimum of 3 days up to several weeks or months, depending on your preference and availability.
                        </p>
                    </div>
                </div>
            </div>
            {open && (
                <div className='fixed inset-0 bg-gray-500 bg-opacity-75 '>
                    <div className='md:w-[400px] mx-5 bg-white absolute top-[30%] md:mx-auto  right-0 left-0 rounded-3xl text-center  md:p-10 p-5 border border-[#CACACA]'>
                        <RxCross1 className=" text-xl float-right  cursor-pointer" onClick={toggleToClose} />

                        <Image src="/trash.png" alt="pencil" width={82} height={82} className='2xl:w-[82px]  mx-auto 2xl:h-[82px] w-[70px] h-[70px]' />
                        <h1 className='2xl:text-2xl md:text-xl text-sm font-bold mt-5 2xl:px-5 px-5'>Are You Sure You Want To Delete this project</h1>
                        <div className='flex justify-center md:gap-10 gap-5 2xl:px-5 px-5 mt-10'>
                            <button className='w-40 md:text-md text-xs md:py-4 py-3 text-center rounded-full text-black bg-[#F1F5F9] cursor-pointer' onClick={toggleToClose}>Cancel</button>
                            <button className='w-40 md:text-md text-xs md:py-4 py-3 text-center rounded-full text-white bg-[#D60000] cursor-pointer' >Delete</button>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>

    )
}

export default ListingDetail
