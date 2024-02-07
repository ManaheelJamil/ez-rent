"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import EmblaCarousel from '../Carousel/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel-react'
import { BiMessageAltDots } from "react-icons/bi"
import { AiOutlineMinus } from "react-icons/ai"
import '../../css/base.css'
import '../../css/sandbox.css'
import { AiOutlineInfoCircle } from "react-icons/ai"
import { RxCross1 } from "react-icons/rx"
import '../../css/embla.css'
import { BiCube } from "react-icons/bi"
import { AiFillStar } from "react-icons/ai"

const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
import Link from 'next/link'
const ProductDetail = () => {
 
    const [isOpen, setIsOpen] = useState(false);

    const toggleToOpen = () => {
        console.log("hello")
        setIsOpen(true);
    };


    const toggleToClose = () => {
        setIsOpen(false);
    };
    return (
        <div>
            {/* <Navbar /> */}
            <div className='2xl:mt-44 xl:mt-64 mt-52 md:flex 2xl:w-[1000px] xl:w-[1000px] lg:w-[800px] gap-10 md:mx-auto mx-3'>
                <div>
                    <main className="w-[100%]  ">
                        <section className="sandbox__carousel">
                            <EmblaCarousel slides={SLIDES} options={OPTIONS} images={undefined} />
                        </section>
                    </main>
                </div>
                <div className='md:mt-0 mt-20  mx-6 md:w-[50%]'>
                    <div className='flex justify-between '>
                        <div>
                            <h1 className='text-[#111827] 2xl:text-[30px] text-[20px] font-bold flex items-center gap-2'>Sony Play Station 5<AiOutlineInfoCircle className="text-4xl text-[#787878]" onClick={toggleToOpen} /></h1>
                            <p className='text-[#787878] xl:text-xl text-xl'>Gaming</p>
                        </div>

                        <Image src="/icon.png" alt="icon" width={54} height={37} className='md:hidden block' />


                        <div className='2xl:w-[300px] xl:w-[250px] rounded-[25px] md:block hidden bg-[#F1F5F9]'>
                            <Link href="/account-detail">
                                <div className='flex justify-between px-2 2xl:w-[300px] xl:w-[250px] rounded-full bg-[#E5F2FF] 2xl:py-3 xl:py-2'>
                                    <div className='flex text-xl items-center gap-3'>
                                        <Image src="/icon.png" alt="icon" width={37} height={37} />
                                        <h1>Devis Miller</h1>
                                    </div>
                                    <div className='flex space-x-2 text-xl items-center'>
                                        <AiFillStar className="text-[#FFC107]" />
                                        <p className='text-[#22C55E]'>4.97</p>
                                        <p>(128)</p>
                                    </div>
                                </div>
                            </Link>

                            <div className='flex 2xl:text-xl text-lg justify-center items-center gap-6 2xl:my-5 my-3'>
                                <BiCube className="text-[#404EED]" />
                                <p className='text-[#404EED]'>View more products</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center md:mt-0 mt-4'>
                        <div className='w-28 py-2 rounded-xl text-center border-[#404EED] border-2'>$10/d</div>
                        <hr className='w-12 border-2 rotate-90 ' />
                        <p className='flex text-[#404EED] gap-2 '>Left: <p className='text-[#787878]'>2</p></p>
                    </div>
                    <div className='md:flex gap-7 mt-9 mb-16'>
                        <Link href="/checkout">
                            <button className='bg-[#111827] 2xl:text-2xl text-lg text-white black-button text-center 2xl:w-[400px] md:w-[300px] w-[200px] rounded-full 2xl:py-7 py-4'>Rent Now</button>
                        </Link>
                        <button className='flex items-center 2xl:text-2xl text-lg but-shade justify-center rounded-full gap-4 w-[200px] bg-[#404EED] text-white 2xl:py-7 py-4' ><BiMessageAltDots className="text-4xl" />Chat</button>
                    </div>
                    <div className='bg-[#F1F5F9] text-xl w-full 2xl:h-20 h-16 flex justify-between items-center 2xl:px-10 px-6 rounded-2xl'>
                        <p>Description</p>
                        <AiOutlineMinus />
                    </div>
                    <div>
                        <p className='2xl:px-10 px-6 mt-10 2xl:text-xl xl:text-[12px] text-[10px]'>
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
                    <div className='bg-[#F1F5F9] text-xl w-full 2xl:h-20 h-16 mt-5 flex justify-between items-center 2xl:px-10 px-6 rounded-2xl'>
                        <p>FAQ</p>
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
            {isOpen && (
                <div className='fixed inset-0 bg-gray-500 bg-opacity-75 '>
                    <div className=' absolute top-32 right-0 left-0 '>
                        <div className='md:w-[550px] md:h-[300px] md:mx-auto mx-5 bg-white  rounded-3xl mt-32 p-5 text-center border'>
                            <div className='flex justify-end'><RxCross1 className="text-[#CACACA] cursor-pointer" onClick={toggleToClose} /></div>
                            <div className='flex justify-center items-center gap-5'>
                                <Image src="/info-circle.png" alt="error" width={56} height={56} />
                                <h1 className='text-2xl font-bold'>Report This User</h1>
                            </div>
                            <textarea placeholder='Please Share the reason for reporting this lessor...' className='p-3 my-5 text-xs border mx-auto rounded-lg md:w-[409px] w-[200px] md:h-[112px] h-[100px]'>

                            </textarea><br />
                            <button className='text-white text-center py-2 w-44 mx-auto rounded-full bg-red-700'>Report</button>

                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductDetail