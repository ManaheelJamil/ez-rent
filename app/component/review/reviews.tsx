/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import Image from 'next/image'
import { AiTwotoneStar } from "react-icons/ai"
import Link from 'next/link'
import ReviewData from "../../../data/review.json"
import { BsChevronDown } from 'react-icons/bs'
import { RxCross1 } from 'react-icons/rx'
const Reviews = () => {
    const [open, setOpen] = useState(false);

    const toggleDropdown = () => {
        setOpen(!open);
    };
    const [istoOpen, setIstoOpen] = useState(false);

    const toggleToOpen1 = () => {
        console.log("hello")
        setIstoOpen(true);
    };

    const [isOpen1, setIsOpen1] = useState(false);

    const toggleToOpen2 = () => {
        console.log("hello")
        setIsOpen1(true);
    };
    const toggleToClose1 = () => {
        setIstoOpen(false);
    };
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
            {ReviewData ? ReviewData.map((item) => {
                return (<>
                    <div className='lg:w-[714px] flex justify-between md:mt-20 mt-0 items-center lg:mx-auto mx-5'>
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
                    <div className='mt-6 lg:w-[714px] lg:mx-auto mx-5 text-sm'>{item.review}</div>
                    <div className='lg:w-[712px] lg:mx-auto mx-5 items-center mt-10 rounded-2xl border-2 h-[68px] flex justify-between lg:px-4 px-2 bg-[#F1F5F9]'>
                        <div className='flex items-center gap-3'>
                            <Image src="/Mask group.png" alt="image" width={39.82} height={48.67} />
                            <h1 className='2xl:text-lg md:text-sm text-[8px] text-black font-extrabold'>Sony Play Station 5</h1>
                        </div>
                        <p className='2xl:text-lg md:text-sm text-[8px]'>10-10-2023 -To- 20-10-2023</p>
                    </div>
                    <hr className='mx-4 my-10 md:hidden block' />

                </>)
            }) : "loading...."}
            <div className="lg:w-[712px] lg:mx-auto mx-5">
                <button className='w-52 text-[13px] rounded-full h-[56px] md:mt-10 mt-5 border-2 text-center' onClick={toggleToOpen1}><Link href="#">Show me all 13 reviews</Link></button>
            </div>

            {/* review popup */}
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
                                    <div className='md:flex justify-between  2xl:mt-10 mt-5 mb-2  full md:mx-auto '>
                                        <div className='flex items-center lg:space-x-1 md:mt-0 mt-4'>
                                            <h1 className='2xl:text-[14px] text-[10px] text-[#22C55E]'>4.97</h1>
                                            <AiTwotoneStar className="text-[#FFC107] text-[12px]" />
                                            <AiTwotoneStar className="text-[#FFC107] text-[12px]" />
                                            <AiTwotoneStar className="text-[#FFC107] text-[12px]" />
                                            <AiTwotoneStar className="text-[#FFC107] text-[12px]" />
                                            <AiTwotoneStar className="text-[#FFC107] text-[12px]" />

                                            <h1 className='2xl:text-[14px] text-[10px] text-[#787878]'>(128 Reviews)</h1>
                                        </div>
                                        <div className='2xl:w-40 w-28 flex justify-evenly items-center py-2 md:mt-0 my-4 rounded-full border-2 cursor-pointer' onClick={toggleToOpen2}>
                                            <Image src="/filter.png" alt="image" width="16" height="16" />
                                            <p className='text-xs'>Sort by</p>
                                            <BsChevronDown className="text-sm" />
                                        </div>
                                        {isOpen1 && (
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
    )
}

export default Reviews