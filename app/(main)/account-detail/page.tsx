"use client"
import React, { useState } from 'react'
import { Navbar } from '../../component/ProductPage/navbar'
import Image from 'next/image'
import Footer from '../../component/ProductPage/footer'
import { AiFillStar } from "react-icons/ai"
import { MdVerified } from "react-icons/md"
import { AiTwotoneStar } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import { AiOutlineInfoCircle } from "react-icons/ai"
import Reviews2 from '@/app/component/account-detail/review2'
import Products from '../../component/ProductPage/product-detail/product-detail'
import { RxCross1 } from "react-icons/rx"
import Link from 'next/link'
import ReviewData from "../../../data/review.json"
const AccountDetail = () => {
    const [open, setOpen] = useState(false);

    const toggleDropdown = () => {
        setOpen(!open);
    };
    const [isOpen, setIsOpen] = useState(false);

    const toggleToOpen = () => {
        console.log("hello")
        setIsOpen(true);
    };


    const toggleToClose = () => {
        setIsOpen(false);
    };
    const [istoOpen, setIstoOpen] = useState(false);

    const toggleToOpen1 = () => {
        console.log("hello")
        setIstoOpen(true);
    };


    const toggleToClose1 = () => {
        setIstoOpen(false);
    };
    return (
        <>
            <div className=''>
                <head>
                    <title>Ez-Rent |  Account-detail </title>
                </head>

                <Navbar />
                <div className='2xl:w-[1550px] xl:w-[1100px] md:w-[900px] mx-auto 2xl:mb-44 mb-32'>
                    {/* header */}

                    <div className='flex md:gap-5 gap-3  2xl:mt-44 my-32 items-center md:mx-0 mx-5'>
                        <Image src="/icon.png " alt="user" width={200} height={200} className='2xl:w-[200px] 2xl:h-[200px] md:w-[150px] w-[100px] h-[100px] md:h-[150px]' />
                        <div>
                            <h1 className='flex items-center gap-2 text-[#111827] 2xl:text-5xl xl:text-3xl lg:text-2xl text-lg font-bold'>Devis Miller<AiOutlineInfoCircle className="text-xl text-[#787878] cursor-pointer" onClick={toggleToOpen} /></h1>
                            <p className='text-[#313131] 2xl:text-xl lg:text-sm text-xs'>8 Products</p>
                            <hr className='2xl:my-4 md:my-2 my-1' />

                            <div className='flex items-center 2xl:text-xl lg:text-md text-[10px] 2xl:space-x-2 space-x-1'>
                                <p className='text-[#22C55E]'>4.97</p>
                                <AiFillStar className="text-[#FFC107]" />
                                <AiFillStar className="text-[#FFC107]" />
                                <AiFillStar className="text-[#FFC107]" />
                                <AiFillStar className="text-[#FFC107]" />
                                <AiFillStar className="text-[#FFC107]" />
                                <p className='text-[#313131]'>(128 Reviews)</p>
                            </div>
                            <p className='2xl:text-md 2xl:text-xl lg:text-sm text-[10px] flex items-center 2xl:gap-3 gap-1 md:mt-2 mt-1'>Verified<MdVerified className="text-[#404EED]" /></p>

                        </div>
                    </div>
                    <hr className='my-12 border-2 md:mx-0 mx-5 z-10' />

                    {/* reviews */}

                    <div className='bg-[#F1F5F9] text-center 2xl:py-6 py-3 rounded-full 2xl:w-52 w-32 2xl:text-2xl text-xs font-bold mx-auto mt-10'> All Reviews</div>
                    <div className='md:flex md:justify-between justify-center md:mt-0 mt-10'>

                        {/* left side review */}

                        <div >
                            <div>
                                {ReviewData ? ReviewData.map((item) => {
                                    return (<>
                                        <div className='2xl:w-[714px] xl:w-[500px] md:w-[400px] w-[90%]  flex justify-between md:mt-20 mt-0 items-center lg:mx-auto mx-5'>
                                            <div className='flex items-center gap-3'>
                                                <Image alt="icon-image" src="/icon.png" width={45} height={45} />
                                                <div>
                                                    <h1 className='flex font-bold 2xl:text-[14px] text-black gap-2 text-[12px]' >JohnDoe<h1 className='font-normal text-[10px] text-[#8B8B8B]'>(As Lessor)</h1></h1>
                                                    <p className='text-[10px] text-[#8B8B8B]'>May 20, 2021</p>
                                                </div>
                                            </div>
                                            <div className='flex space-x-1'>
                                                <AiTwotoneStar className="text-[#FFC107] text-[10px]" />
                                                <AiTwotoneStar className="text-[#FFC107] text-[10px]" />
                                                <AiTwotoneStar className="text-[#FFC107] text-[10px]" />
                                                <AiTwotoneStar className="text-[#FFC107] text-[10px]" />
                                                <AiTwotoneStar className="text-[#FFC107] text-[10px]" />
                                            </div>
                                        </div>
                                        <div className='mt-6 2xl:w-[714px] xl:w-[500px] md:w-[400px] w-[90%] lg:mx-auto mx-5 2xl:text-xl xl:text-xs text-[8px] text-[#475569]'>{item.review}</div>
                                        <div className='2xl:w-[714px] xl:w-[500px] md:w-[400px] w-[90%] lg:mx-auto mx-5 items-center mt-10 rounded-2xl border-2 h-[68px] flex justify-between lg:px-4 px-2 bg-[#F1F5F9]'>
                                            <div className='flex items-center gap-3 '>
                                                <Image src="/Mask group.png" alt="image" width={39.82} height={48.67} />
                                                <h1 className='2xl:text-lg xl:text-sm lg:text-xs text-[7px] text-black font-extrabold'>Sony Play Station 5</h1>
                                            </div>
                                            <p className='2xl:text-lg xl:text-[12px] text-[8px]'>10-10-2023 -To- 20-10-2023</p>
                                        </div>
                                        <hr className='mx-4 my-10 md:hidden block' />

                                    </>)
                                }) : "loading...."}
                                <div className="2xl:w-[712px] xl:w-[500px] lg:mx-auto mx-5">
                                    <button className='w-72 text-[13px] rounded-full h-[56px] md:mt-10 mt-5 border-2 text-center' onClick={toggleToOpen1}><Link href="#">Show me all 13 reviews</Link></button>
                                </div>
                            </div>
                        </div>

                        {/* right side review */}

                        <div className='md:block hidden'>
                            <Reviews2 />
                        </div>
                    </div>
                    <hr className='mt-32' />

                    {/* products */}
                    <div className='bg-[#F1F5F9] text-center 2xl:py-6 py-3 rounded-full 2xl:w-52 w-32 2xl:text-2xl text-xs font-bold mx-auto mt-10'> All Products</div>
                    <div className='2xl:w-[1200px] md:w-[800px] mx-auto mt-20'>
                        <Products />
                    </div>
                </div>
                {/* error message */}
                {isOpen && (
                    <div className='fixed inset-0 bg-gray-500 bg-opacity-75 '>
                        <div className=' absolute left-0 right-0 2xl:top-1/4 top-20'>
                            <div className='md:w-[550px] md:h-[320px] md:mx-auto mx-5 bg-white  rounded-3xl mt-32 p-5 text-center border'>
                                <div className='flex justify-end'>
                                    <RxCross1 className="text-[#CACACA] cursor-pointer" onClick={toggleToClose} />
                                </div>
                                <div className='flex justify-center items-center md:gap-5 gap-3'>
                                    <Image src="/info-circle.png" alt="error" width={56} height={56} />
                                    <h1 className='md:text-2xl font-bold'>Report This User</h1>
                                </div>
                                <textarea placeholder='Please Share the reason for reporting this lessor...' className='p-3 my-5 text-xs border mx-auto rounded-lg md:w-[409px] w-[200px] md:h-[112px] h-[100px]'>

                                </textarea><br />
                                <button className='text-white text-center mb-10 py-2 w-44 mx-auto rounded-full bg-red-700'>Report</button>

                            </div></div>
                    </div>
                )}
                {/* </div>  */}
                {istoOpen && (
                    <>
                        <div className='fixed inset-0 bg-gray-500 bg-opacity-75 z-20 '>
                            <div className=' absolute 2xl:top-20 xl:top-10 lg:top-10 grid place-items-center top-1/4 right-0 left-0'>
                                <div className='2xl:w-[1000px] xl:w-[700px] md:w-[700px] mx-auto bg-white border-2 rounded-xl 2xl:p-5 md:p-3 p-5'>
                                    <RxCross1 className="text-[#CACACA] cursor-pointer float-left " onClick={toggleToClose1} />
                                    <h1 className='2xl:text-xl text-sm font-bold text-center'>All Reviews</h1>
                                    <hr className='2xl:mt-5 mt-2' />
                                    {/* filters */}
                                    <p>
                                        <div className='md:flex justify-between  2xl:mt-10 mt-2 mb-2  full md:mx-auto '>
                                            <div className='flex items-center lg:space-x-1 md:mt-0 mt-4'>
                                                <h1 className='2xl:text-[14px] text-[10px] text-[#22C55E]'>4.97</h1>
                                                <AiTwotoneStar className="text-[#FFC107] text-[12px]" />
                                                <AiTwotoneStar className="text-[#FFC107] text-[12px]" />
                                                <AiTwotoneStar className="text-[#FFC107] text-[12px]" />
                                                <AiTwotoneStar className="text-[#FFC107] text-[12px]" />
                                                <AiTwotoneStar className="text-[#FFC107] text-[12px]" />

                                                <h1 className='2xl:text-[14px] text-[10px] text-[#787878]'>(128 Reviews)</h1>
                                            </div>
                                            <div className='2xl:w-40 w-28 flex justify-evenly items-center py-2 md:mt-0 my-4 rounded-full border-2 cursor-pointer' onClick={toggleToOpen}>
                                                <Image src="/filter.png" alt="image" width="16" height="16" />
                                                <p className='text-xs'>Sort by</p>
                                                <BsChevronDown className="text-sm" />
                                            </div>
                                            {isOpen && (
                                                <div className=" absolute 2xl:right-[520px] xl:right-96 lg:right-44 md:right-32 right-0 mt-10   w-36 text-center rounded-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                        <a href="#" className="block px-4 pt-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                            As Lesse
                                                            <hr className='my-2' />
                                                        </a>
                                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                            As Lessor
                                                        </a>


                                                    </div>
                                                </div>
                                            )}

                                        </div>
                                        <hr className='2xl:mt-10 mt-2' />

                                    </p>
                                    {/* reviews */}
                                    <div className='md:flex 2xl:gap-20 gap-10 justify-center  md:mt-0 mt-5 overflow-x-hidden overflow-y-scroll 2xl:h-[600px] md:h-[400px] h-[250px]'>
                                        <div >
                                            {ReviewData ? ReviewData.map((item) => {
                                                return (<>
                                                    <div className='2xl:w-[414px] xl:w-[300px] md:w-[280px] w-[100%]  flex justify-between 2xl:mt-10 mt-5 items-center lg:mx-auto '>
                                                        <div className='flex items-center gap-3'>
                                                            <Image alt="icon-image" src="/orange-icon.png" width={45} height={45} className='2xl:w-[45px] 2xl:h-[45px] w-[30px] h-[30px]' />
                                                            <div>
                                                                <h1 className='flex font-bold 2xl:text-[14px] text-black gap-2 text-[10px]' >JohnDoe<h1 className='font-normal 2xl:text-[10px] text-[8px] text-[#8B8B8B]'>(As Lessor)</h1></h1>
                                                                <p className='2xl:text-[10px] text-[8px] text-[#8B8B8B]'>May 20, 2021</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex space-x-1'>
                                                            <AiTwotoneStar className="text-[#FFC107] 2xl:text-[10px] text-[8px]" />
                                                            <AiTwotoneStar className="text-[#FFC107] 2xl:text-[10px] text-[8px]" />
                                                            <AiTwotoneStar className="text-[#FFC107] 2xl:text-[10px] text-[8px]" />
                                                            <AiTwotoneStar className="text-[#FFC107] 2xl:text-[10px] text-[8px]" />
                                                            <AiTwotoneStar className="text-[#FFC107] 2xl:text-[10px] text-[8px]" />
                                                        </div>
                                                    </div>
                                                    <div className='mt-6 2xl:w-[414px] xl:w-[300px] md:w-[280px] w-[100%] lg:mx-auto  2xl:text-xs text-[10px] text-[#475569]'>{item.review}</div>
                                                    <div className='2xl:w-[414px] xl:w-[300px] md:w-[280px] w-[90%] lg:mx-auto  items-center 2xl:mt-10 mt-5 rounded-2xl border-2 2xl:h-[68px] h-[45px] flex justify-between 2xl:px-4 px-2 bg-[#F1F5F9]'>
                                                        <div className='flex items-center md:gap-3 gap-1 '>
                                                            <Image src="/Mask group.png" alt="image" width={39.82} height={48.67} className='2xl:w-[39px] 2xl:h-[48px] w-[30px] h-[30px]' />
                                                            <h1 className='2xl:text-sm  md:text-[9px] text-[7px] text-black font-extrabold'>Sony Play Station 5</h1>
                                                        </div>
                                                        <p className='2xl:text-[12px] md:text-[8px] text-[6px]'>10-10-2023 -To- 20-10-2023</p>
                                                    </div>
                                                    <hr className='mx-4 my-10 md:hidden block' />

                                                </>)
                                            }) : "loading...."}
                                        </div>
                                        <div className='md:block hidden'>
                                            {ReviewData ? ReviewData.map((item) => {
                                                return (<>
                                                    <div className='2xl:w-[414px] xl:w-[300px] md:w-[280px] w-[100%]  flex justify-between 2xl:mt-10 mt-5 items-center lg:mx-auto '>
                                                        <div className='flex items-center gap-3'>
                                                            <Image alt="icon-image" src="/orange-icon.png" width={45} height={45} className='2xl:w-[45px] 2xl:h-[45px] w-[30px] h-[30px]' />
                                                            <div>
                                                                <h1 className='flex font-bold 2xl:text-[14px] text-black gap-2 text-[10px]' >JohnDoe<h1 className='font-normal 2xl:text-[10px] text-[8px] text-[#8B8B8B]'>(As Lessor)</h1></h1>
                                                                <p className='2xl:text-[10px] text-[8px] text-[#8B8B8B]'>May 20, 2021</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex space-x-1'>
                                                            <AiTwotoneStar className="text-[#FFC107] 2xl:text-[10px] text-[8px]" />
                                                            <AiTwotoneStar className="text-[#FFC107] 2xl:text-[10px] text-[8px]" />
                                                            <AiTwotoneStar className="text-[#FFC107] 2xl:text-[10px] text-[8px]" />
                                                            <AiTwotoneStar className="text-[#FFC107] 2xl:text-[10px] text-[8px]" />
                                                            <AiTwotoneStar className="text-[#FFC107] 2xl:text-[10px] text-[8px]" />
                                                        </div>
                                                    </div>
                                                    <div className='mt-6 2xl:w-[414px] xl:w-[300px] md:w-[280px] w-[90%] lg:mx-auto mx-5 2xl:text-xs text-[10px] text-[#475569]'>{item.review}</div>
                                                    <div className='2xl:w-[414px] xl:w-[300px] md:w-[280px] w-[90%] lg:mx-auto mx-5 items-center 2xl:mt-10 mt-5 rounded-2xl border-2 2xl:h-[68px] h-[45px] flex justify-between 2xl:px-4 px-2 bg-[#F1F5F9]'>
                                                        <div className='flex items-center gap-3 '>
                                                            <Image src="/Mask group.png" alt="image" width={39.82} height={48.67} className='2xl:w-[39px] 2xl:h-[48px] w-[30px] h-[30px]' />
                                                            <h1 className='2xl:text-sm  text-[9px] text-black font-extrabold'>Sony Play Station 5</h1>
                                                        </div>
                                                        <p className='2xl:text-[12px] text-[8px]'>10-10-2023 -To- 20-10-2023</p>
                                                    </div>
                                                    <hr className='mx-4 my-10 md:hidden block' />

                                                </>)
                                            }) : "loading...."}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </>
    )
}

export default AccountDetail