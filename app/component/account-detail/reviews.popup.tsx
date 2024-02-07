/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Image from 'next/image';
import { useState } from "react";
import { AiTwotoneStar } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import { RxCross1 } from "react-icons/rx"
import Reviews from '../../component/account-detail/review2';
import ReviewData from "../../../data/review.json"
const ReviewsPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='w-[1000px] mx-auto bg-white border-2 rounded-xl p-5'>
            <RxCross1 className="text-[#CACACA] cursor-pointer float-left" />
            <h1 className='text-xl font-bold text-center'>All Reviews</h1>
            <hr className='mt-5' />
            {/* filters */}
            <p>
                <div className='flex justify-between  md:mt-10 mt-0 mb-5  full mx-auto'>
                    <div className='flex items-center lg:space-x-1'>
                        <h1 className='2xl:text-[14px] text-[10px] text-[#22C55E]'>4.97</h1>
                        <AiTwotoneStar className="text-[#FFC107] text-[12px]" />
                        <AiTwotoneStar className="text-[#FFC107] text-[12px]" />
                        <AiTwotoneStar className="text-[#FFC107] text-[12px]" />
                        <AiTwotoneStar className="text-[#FFC107] text-[12px]" />
                        <AiTwotoneStar className="text-[#FFC107] text-[12px]" />

                        <h1 className='2xl:text-[14px] text-[10px] text-[#787878]'>(128 Reviews)</h1>
                    </div>
                    <div className='lg:w-40 w-24 flex justify-evenly items-center py-2 rounded-full border-2 cursor-pointer' onClick={toggleDropdown}>
                        <Image src="/filter.png" alt="image" width="16" height="16" />
                        <p>Sort by</p>
                        <BsChevronDown />
                    </div>
                    {isOpen && (
                        <div className=" absolute 2xl:right-[520px] xl:right-64 lg:right-44 md:right-32 right-0 mt-12   w-36 text-center rounded-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                <hr className='mt-10' />

            </p>
            {/* reviews */}
            <div className='md:flex gap-20 justify-center md:mt-0 mt-5 overflow-x-hidden overflow-y-scroll h-[600px]'>
                <div >
                    {ReviewData ? ReviewData.map((item) => {
                        return (<>
                            <div className='2xl:w-[414px] xl:w-[500px] md:w-[400px] w-[90%]  flex justify-between md:mt-10 mt-0 items-center lg:mx-auto mx-5'>
                                <div className='flex items-center gap-3'>
                                    <Image alt="icon-image" src="/orange-icon.png" width={45} height={45} />
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
                            <div className='mt-6 2xl:w-[414px] xl:w-[500px] md:w-[400px] w-[90%] lg:mx-auto mx-5  md:text-xs text-[8px] text-[#475569]'>{item.review}</div>
                            <div className='2xl:w-[414px] xl:w-[500px] md:w-[400px] w-[90%] lg:mx-auto mx-5 items-center mt-10 rounded-2xl border-2 h-[68px] flex justify-between lg:px-4 px-2 bg-[#F1F5F9]'>
                                <div className='flex items-center gap-3 '>
                                    <Image src="/Mask group.png" alt="image" width={39.82} height={48.67} />
                                    <h1 className='2xl:text-sm lg:text-xs text-[7px] text-black font-extrabold'>Sony Play Station 5</h1>
                                </div>
                                <p className='2xl:text-[12px] text-[8px]'>10-10-2023 -To- 20-10-2023</p>
                            </div>
                            <hr className='mx-4 my-10 md:hidden block' />

                        </>)
                    }) : "loading...."}
                </div>
                <div className='md:block hidden'>
                    {ReviewData ? ReviewData.map((item) => {
                        return (<>
                            <div className='2xl:w-[414px] xl:w-[500px] md:w-[400px] w-[90%]  flex justify-between md:mt-10 mt-0 items-center lg:mx-auto mx-5'>
                                <div className='flex items-center gap-3'>
                                    <Image alt="icon-image" src="/orange-icon.png" width={45} height={45} />
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
                            <div className='mt-6 2xl:w-[414px] xl:w-[500px] md:w-[400px] w-[90%] lg:mx-auto mx-5  md:text-xs text-[8px] text-[#475569]'>{item.review}</div>
                            <div className='2xl:w-[414px] xl:w-[500px] md:w-[400px] w-[90%] lg:mx-auto mx-5 items-center mt-10 rounded-2xl border-2 h-[68px] flex justify-between lg:px-4 px-2 bg-[#F1F5F9]'>
                                <div className='flex items-center gap-3 '>
                                    <Image src="/Mask group.png" alt="image" width={39.82} height={48.67} />
                                    <h1 className='2xl:text-sm lg:text-xs text-[7px] text-black font-extrabold'>Sony Play Station 5</h1>
                                </div>
                                <p className='2xl:text-[12px] text-[8px]'>10-10-2023 -To- 20-10-2023</p>
                            </div>
                            <hr className='mx-4 my-10 md:hidden block' />

                        </>)
                    }) : "loading...."}
                </div>
            </div>
        </div>
    )
}

export default ReviewsPopup