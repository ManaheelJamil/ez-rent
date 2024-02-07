"use client"
import { useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import EmblaCarousel from '../../../component/Carousel/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel-react'
import { BiMessageAltDots } from "react-icons/bi"
import { AiOutlineMinus } from "react-icons/ai"
import '../../../css/base.css'
import { AiOutlinePlus } from "react-icons/ai";
import '../../../css/sandbox.css'
import { AiOutlineInfoCircle } from "react-icons/ai"
import { RxCross1 } from "react-icons/rx"
import '../../../css/embla.css'
import { BiCube } from "react-icons/bi"
import { AiFillStar } from "react-icons/ai"
const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
import { Navbar } from '../../../component/ProductPage/navbar'
import Footer from '@/app/component/ProductPage/footer'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/redux/store';
import { showProducts } from '@/app/redux/Product/productAction';
const ProductDetail = ({ params }: { params: { id: string } }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [productFaq, setProductFaq] = useState([]);
    const [productImages, setProductImages] = useState([])
    const dispatch: AppDispatch = useDispatch();
    const slug = params.id
    const products = useSelector((state: RootState) => state.product.products);
    const product = products.find(prod => prod.id === parseInt(slug, 10));
    const [desOpen, setDesOpen] = useState(true)
    const [visible, setVisible] = useState(false)

    const togglePasswordVisiblity = () => {
        setVisible(!visible)
    }
    const [visible1, setVisible1] = useState(false)

    const togglePasswordVisiblity1 = () => {
        setVisible1(!visible1)
    }
    const desToggle = () => {
        // console.log("hello")
        setDesOpen(!desOpen);
    };

    const [faqOpen, setFaqOpen] = useState(true)
    const faqToggle = () => {
        // console.log("hello")
        setFaqOpen(!faqOpen);
    };

    useEffect(() => {
        dispatch(showProducts())
        if (product) {
            const faqs = product.faqs && JSON.parse(product.faqs)
            setProductImages(product.images)
            setProductFaq(faqs)
        }
    }, [products])
    const toggleToOpen = () => {
        console.log("hello")
        setIsOpen(true);
    };


    const toggleToClose = () => {
        setIsOpen(false);
    };
    return (
        <div>
            <head>
                <title>Ez-Rent |  Product-Detail </title>
            </head>
            <Navbar />
            <div className='2xl:my-52 xl:my-32 my-32 md:flex 2xl:w-[1300px] xl:w-[1000px] lg:w-[800px] 2xl:gap-10 md:mx-auto mx-3'>
                <div>
                    <main className="w-[100%]  ">
                        <section className="sandbox__carousel">
                            <EmblaCarousel slides={SLIDES} images={productImages} options={OPTIONS} />
                        </section>
                    </main>
                </div>
                <div className='md:mt-0 mt-20  md:mx-6 mx-2 md:w-[50%]'>
                    <div className='flex justify-between '>
                        <div>
                            <h1 className='text-[#111827] 2xl:text-[24px] xl:text-[20px] text-[17px] font-bold flex items-center gap-2'>{product?.title}<AiOutlineInfoCircle className="xl:text-2xl text-xl text-[#787878] cursor-pointer" onClick={toggleToOpen} /></h1>
                            <p className='text-[#787878]  text-sm'>{product?.category?.name}</p>
                        </div>
                        <Link href="/account-detail">
                            <Image src="/icon.png" alt="icon" width={54} height={37} className='md:hidden block' />

                        </Link>


                        <div className='2xl:w-[300px] xl:w-[230px] rounded-[25px] md:block hidden bg-[#F1F5F9]'>
                            <Link href="/account-detail">
                                <div className='flex justify-between px-2 2xl:w-[300px] xl:w-[230px] rounded-full bg-[#E5F2FF] 2xl:py-3 xl:py-2'>
                                    <div className='flex text-xl items-center xl:gap-3 gap-1'>
                                        <Image src="/icon.png" alt="icon" width={37} height={37} />
                                        <h1 className='2xl:text-sm text-xs'>{product?.user?.name}</h1>
                                    </div>
                                    <div className='flex space-x-2 text-xl items-center'>
                                        <AiFillStar className="text-[#FFC107]" />
                                        <p className='text-[#171817] 2xl:text-sm text-xs'>4.97</p>
                                        <p className='2xl:text-sm text-xs'>(128)</p>
                                    </div>
                                </div>
                            </Link>

                            <div className='flex 2xl:text-xl text-lg justify-center items-center gap-6 2xl:my-5 my-3'>
                                <BiCube className="text-[#404EED]" />
                                <Link href="/account-detail">
                                    <p className='text-[#404EED] 2xl:text-sm text-xs'>View more products</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center md:mt-0 mt-4'>
                        <div className='2xl:w-28 w-16 py-2 rounded-xl text-xs text-center border-[#404EED] border-2'>${product?.price}/d</div>
                        <hr className='w-12 border-2 rotate-90 ' />
                        {
                            product?.total_quantity <= 2 && (
                                <p className='flex text-[#404EED]  text-sm gap-2 '>Left: <p className='text-[#787878]'>{product?.total_quantity}</p></p>
                            )
                        }

                    </div>
                    <div className='flex xl:gap-7 gap-3 22xl:mt-9 mt-6 2xl:mb-12 mb-8 items-center'>
                        <Link href="/checkout">
                            <button className='bg-[#111827] 2xl:text-xl md:text-sm text-white black-button text-center 2xl:w-[350px] xl:w-[270px] md:w-[250px] w-[160px] rounded-full 2xl:py-4 py-3 text-xs'>Rent Now</button>
                        </Link>
                        <Link href="/lessor-Chat">

                            <button className='flex items-center 2xl:text-xl md:text-sm text-xs but-shade justify-center  mt-1 rounded-full gap-4 xl:w-[180px] md:w-[140px] w-[100px] bg-[#404EED] text-white 2xl:py-4 py-2' ><BiMessageAltDots className="md:text-2xl text-2xl" />Chat</button>

                        </Link>
                    </div>
                    <div onClick={desToggle} className='cursor-pointer bg-[#F1F5F9] text-xl w-full 2xl:h-16 h-12 flex justify-between items-center 2xl:px-10 px-6 rounded-2xl'>
                        <p className='xl:text-sm text-xs'>Description</p>
                        <p onClick={togglePasswordVisiblity}>
                            {visible ? (
                                <AiOutlinePlus className="cursor-pointer"
                                // onClick={handleClick}
                                />
                            ) : (
                                <AiOutlineMinus className="cursor-pointer"
                                // onClick={handleClick}
                                />
                            )}
                        </p>
                        {/* <AiOutlineMinus onClick={desToggle} className="cursor-pointer" /> */}
                    </div>
                    {desOpen && (
                        <>
                            <div>
                                <p className='2xl:px-10 px-6 2xl:mt-10 mt-5 2xl:text-sm xl:text-[12px] text-[10px]'>
                                    {product?.description}
                                </p>
                            </div>
                        </>
                    )}

                    <div onClick={faqToggle} className='cursor-pointer bg-[#F1F5F9] text-xl w-full 2xl:h-16 h-12  mt-5 flex justify-between items-center 2xl:px-10 px-6 rounded-2xl'>
                        <p className='xl:text-sm text-xs'>FAQ</p>
                        <p onClick={togglePasswordVisiblity1}>
                            {visible1 ? (
                                <AiOutlinePlus className="cursor-pointer"
                                // onClick={handleClick}
                                />
                            ) : (
                                <AiOutlineMinus className="cursor-pointer"
                                // onClick={handleClick}
                                />
                            )}
                        </p>
                        {/* <AiOutlineMinus onClick={faqToggle} className="cursor-pointer" /> */}
                    </div>
                    {faqOpen && (
                        <>
                            {
                                productFaq.map((item: any, index) => {
                                    return <div key={index} className='2xl:px-10 px-6 shadow-none  text-[12px] border-b-gray-400 border-t-transparent border-r-transparent border-l-transparent border-gray-300 border '>
                                        <p className='2xl:my-5 mt-3 mb-2'>
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
            <Footer />
            {isOpen && (
                <div className='fixed inset-0 bg-gray-500 bg-opacity-75 '>
                    <div className=' absolute 2xl:top-1/4 top-20 left-0 right-0 '>
                        <div className='md:w-[550px] md:h-[320px] md:mx-auto mx-3 bg-white  rounded-3xl mt-32 p-5 text-center border'>
                            <div className='flex justify-end'><RxCross1 className="text-[#CACACA] cursor-pointer" onClick={toggleToClose} /></div>
                            <div className='flex justify-center items-center md:gap-5 gap-0'>
                                <Image src="/info-circle.png" alt="error" width={56} height={56} />
                                <h1 className='md:text-2xl text-sm font-bold'>Report This Product</h1>
                            </div>
                            <textarea placeholder='Please Share the reason for reporting this product...' className='p-3 md:mt-5 mt-3 text-xs border mx-auto rounded-lg md:w-[409px] w-[220px] md:h-[112px] h-[100px]'>

                            </textarea><br />
                            <button className='text-white text-center md:mb-10 mb-5 py-2 text-xs md:w-44 w-28 mx-auto rounded-full bg-red-700'>Report</button>

                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default ProductDetail
