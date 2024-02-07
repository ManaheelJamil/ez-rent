"use client"
import React, { useState, useContext, useEffect } from 'react'
import Image from 'next/image'
import EmblaCarousel from '../../component/Carousel/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel-react'
import { BiMessageAltDots } from "react-icons/bi"
import { AiOutlineMinus } from "react-icons/ai"
import '../../css/base.css'
import '../../css/sandbox.css'
import { AiOutlineInfoCircle } from "react-icons/ai"
import '../../css/embla.css'
import { BiCube } from "react-icons/bi"
import QuickviewContext from '../../context/QuickviewContext';
import { RxCross1 } from "react-icons/rx";

import { AiFillStar } from "react-icons/ai"
const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
import Link from 'next/link'
const ProductDetailPopup = (props: any) => {
    const { product } = props
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false);
    const [productFaq, setProductFaq] = useState([]);
    const toggleToOpen = () => {
        console.log("hello")
        setIsOpen(true);
    };

    useEffect(() => {
        if (product) {
            const faqs = product.faqs && JSON.parse(product.faqs)
            setProductFaq(faqs)
        }
    }, [])
    const toggleToClose = () => {
        setIsOpen(false);
    };
    const [desOpen, setDesOpen] = useState(false)
    const handleDes = () => {
        setDesOpen(!desOpen)
    }
    const [faqOpen, setFaqOpen] = useState(true)
    const handleFaq = () => {
        setFaqOpen(!faqOpen)
    }
    const actionQuickView = useContext(QuickviewContext);


    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-50  bg-gray-2 z-50">
                <div className="relative w-[80%] bg-white rounded-xl ">
                    <div className="relative  rounded-lg  ">
                        <div className=''>
                            <div className=''>

                                <RxCross1 onClick={() => actionQuickView.setQuickView(false)} className=" float-right m-5 text-xl cursor-pointer" />

                                <div className='  md:flex  md:pt-10 pt-0  2xl:h-[80vh] xl:h-[90vh] h-[80vh] gap-10 md:mx-auto md:mx-3'>                <div>
                                    <main className="w-[100%]  ">
                                        <section className="sandbox__carousel">
                                            <EmblaCarousel slides={SLIDES} options={OPTIONS} images={product?.images} />
                                        </section>
                                    </main>
                                </div>
                                    <div className='mx-6 md:w-[50%]'>
                                        <div className='flex justify-between '>
                                            <div>
                                                <h1 className='text-[#111827] 2xl:text-[20px] text-[15px] font-bold flex items-center gap-2'>{product?.title}<AiOutlineInfoCircle className="md:text-2xl text-md text-[#787878]" onClick={toggleToOpen} /></h1>
                                                <p className='text-[#787878] text-sm    '>Gaming</p>
                                            </div>

                                            <Image src="/icon.png" alt="icon" width={54} height={37} className='md:hidden block' />


                                            <div className='2xl:w-[300px] xl:w-[250px] rounded-[25px] md:block hidden bg-[#F1F5F9]'>
                                                <Link href="/account-detail">
                                                    <div className='flex justify-between px-2 2xl:w-[300px] xl:w-[250px] rounded-full bg-[#E5F2FF] 2xl:py-3 xl:py-2'>
                                                        <div className='flex text-xs items-center gap-3'>
                                                            <Image src="/icon.png" alt="icon" width={27} height={27} />
                                                            {/* <h1>{product.user && product.user.name}</h1> */}
                                                        </div>
                                                        <div className='flex space-x-2 text-xs items-center'>
                                                            <AiFillStar className="text-[#FFC107]" />
                                                            <p className='text-[#22C55E]'>0.0</p>
                                                            <p>(0)</p>
                                                        </div>
                                                    </div>
                                                </Link>

                                                <div className='flex  text-xs justify-center items-center gap-3 2xl:my-5 my-3'>
                                                    <BiCube className="text-[#404EED]" />
                                                    <p className='text-[#404EED]'>View more products</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex items-center md:mt-0 mt-4'>
                                            <div className='w-14 py-1 rounded-xl text-sm text-center border-[#404EED] border-2'>${product?.price}/d</div>
                                            <hr className='w-8 border-2 rotate-90 ' />
                                            {
                                                product?.total_quantity <= 2 && (
                                                    <p className='flex text-[#404EED]  text-sm gap-2 '>Left: <p className='text-[#787878]'>{product?.total_quantity}</p></p>
                                                )
                                            }
                                        </div>
                                        <div className='flex md:gap-7 gap-3 mt-6 mb-5'>
                                            <Link href="/checkout">
                                                <button className='bg-[#111827]  text-xs text-white black-button text-center 2xl:w-[400px] md:w-[300px] w-[120px] rounded-full md:py-3 py-2'>Rent Now</button>
                                            </Link>
                                            <button className='flex items-center   text-xs but-shade justify-center rounded-full gap-2 md:w-[200px] w-32     bg-[#404EED] text-white ' ><BiMessageAltDots className="text-xl" />Chat</button>
                                        </div>
                                        <div onClick={handleDes} className='cursor-pointer bg-[#F1F5F9] text-xs font-bold w-full  h-10 flex justify-between items-center 2xl:px-10 px-6 rounded-xl'>
                                            <p>Description</p>
                                            <AiOutlineMinus />
                                        </div>

                                        {desOpen && (
                                            <>
                                                <div>
                                                    <p className='2xl:px-10 md:px-6 px-3 mt-5 2xl:text-xl xl:text-[12px] text-[10px]'>
                                                        {product?.description}
                                                    </p>
                                                </div>
                                            </>
                                        )}

                                        <div onClick={handleFaq} className='bg-[#F1F5F9] cursor-pointer font-bold text-xs w-full h-10 mt-3 flex justify-between items-center 2xl:px-10 px-6 rounded-xl'>
                                            <p>FAQ</p>
                                            <AiOutlineMinus />
                                        </div>

                                        {faqOpen && (
                                            <>
                                                {
                                                    productFaq.map((item: any, index) => {
                                                        return <div key={index} className='2xl:px-10 px-6 shadow-none  text-[12px] border-b-gray-400 border-t-transparent border-r-transparent border-l-transparent border-gray-300 border '>
                                                            <p className='2xl:my-10 my-5'>
                                                                <b>{index + 1} Question:</b> {item.question}
                                                            </p>
                                                            <p className='ml-1 mb-6'>
                                                                <b>Answer:</b> {item.answer}
                                                            </p>
                                                        </div>
                                                    })
                                                }

                                            </>
                                        )}

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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetailPopup