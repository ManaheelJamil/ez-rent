"use client"
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { Navbar } from '../../component/ProductPage/navbar'
import Link from 'next/link'
import { RiArrowDropDownLine } from "react-icons/ri"
import { BsSearch } from "react-icons/bs"
import { ImAttachment } from "react-icons/im"
import Image from 'next/image'
import { BiSend } from "react-icons/bi"
import { CiMenuKebab } from "react-icons/ci"
import { FaCircle } from "react-icons/fa"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RxCross1 } from "react-icons/rx"
import { GoDash } from "react-icons/go"
const LessorChat = () => {
    const [istoOpen, setIstoOpen] = useState(false);

    const toggleToOpen = () => {
        console.log("hello")
        setIstoOpen(true);
        setOpen(false);
    };


    const toggleToClose = () => {
        setIstoOpen(false);
    };
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const [open, setOpen] = useState(false);
    const toggleDropdown2 = () => {
        setOpen(!open);
    };

    return (
        <div>
            <head>
                <title>Ez-Rent |  Chat </title>
            </head>
            <Navbar />
            <div className='flex  h-[90vh]'>
                {/* left side */}
                <div className='2xl:w-[470px] lg:block hidden w-[370px] 2xl:pt-32 pt-20   md:mx-10 mx-5'>
                    <div className='h-[40%]'>
                        <div className='2xl:w-[470px] w-[370px] flex justify-between items-center'>
                            <h1 className='2xl:text-3xl text-lg font-bold'>Chats (All)</h1>
                            <div className="relative  text-left">
                                <div>
                                    <button
                                        onClick={toggleDropdown}
                                        type="button"
                                        className="inline-flex   rounded-full items-center      2xl:px-4 px-3 2xl:py-1  2xl:text-2xl text-lg font-medium text-gray-700 "
                                    >
                                        All
                                        <RiArrowDropDownLine className="text-4xl" />
                                    </button>
                                </div>

                                {isOpen && (
                                    <div className="origin-top-right z-10 absolute text-center mt-2 w-[170px] rounded-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <a href="#" className="block px-4 pt-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                All
                                                <hr className='my-2' />
                                            </a>
                                            <a href="#" className="block px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" >
                                                Borrowing
                                                <hr className='my-2' />
                                            </a>
                                            <a href="#" className="block px-4  text-sm text-gray-700 hover:bg-gray-100" role="menuitem" >
                                                Renting
                                                <hr className='my-2' />
                                            </a>
                                            <a href="#" className="block px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" >
                                                Archived
                                                <hr className='my-2' />
                                            </a>
                                            <a href="#" className="block px-4  text-sm text-gray-700 hover:bg-gray-100" role="menuitem" >
                                                Cancelled Orders
                                                <hr className='my-2' />
                                            </a>

                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <hr className='2xl:border-2 border 2xl:my-5 my-3' />
                        <div className='relative'>
                            <input type="text" placeholder='Search' className='w-full 2xl:mt-10 mt-5 outline-none border-2 focus:border-[#404EED] 2xl:pl-14 pl-10 2xl:text-xl text-sm 2xl:py-3 py-2 rounded-full bg-[#E5F2FF]' />

                            <BsSearch className="text-[#CACACA] 2xl:text-xl text-sm absolute 2xl:top-14 top-8 left-5  " />
                        </div>
                        <div className='flex gap-10 items-center mt-10 2xl:my-10 my-5'>
                            <h1 className='2xl:text-3xl text-lg font-bold '>Inbox</h1>
                            {/* <Link href="/chat">
                                <button className='bg-[#404EED] py-2 w-28 text-xs rounded-full text-white'>Lesse Chat</button>
                            </Link>
                            <Link href="/lessor-Chat">
                                <button className='bg-[#404EED] py-2 w-28 text-xs rounded-full text-white'>Lessor Chat</button>

                            </Link> */}
                        </div>
                    </div>
                    <div className='h-[70%] overflow-x-hidden  overflow-y-scroll'>
                        <div className='flex 2xl:gap-5 gap-3 bg-[#E3F1FF] border mt-5 2xl:p-3 p-2 rounded-xl w-full'>
                            <Image src="/icon.png" alt="icon" width={70} height={70} className='2xl:w-[70px] 2xl:h-[70px] w-[40px] h-[40px]' />
                            <div >
                                <h1 className=' text-black flex justify-between  2xl:w-[340px] w-[280px] items-center 2xl:text-lg text-sm'>Devis Miller<h1 className='text-xs  text-[#787878] '>10:10 PM</h1></h1>
                                <h1 className='text-[#787878] 2xl:text-xl text-xs'>Okay👍</h1>
                                <p className='text-[#787878] 2xl:text-md text-xs'> Offered you $xx” or “You offered $xx</p>
                            </div>
                        </div>
                        <div className='flex 2xl:gap-5 gap-3  mt-5 2xl:p-3 p-2  w-full'>
                            <Image src="/icon.png" alt="icon" width={70} height={70} className='2xl:w-[70px] 2xl:h-[70px] w-[40px] h-[40px]' />
                            <div >
                                <h1 className=' text-black flex justify-between  2xl:w-[340px] w-[280px] items-center 2xl:text-lg text-sm'>Devis Miller<h1 className='text-xs  text-[#787878] '>10:10 PM</h1></h1>
                                <h1 className='text-[#787878] 2xl:text-xl text-xs'>Okay👍</h1>
                                <p className='text-[#787878] 2xl:text-md text-xs'> Offered you $xx” or “You offered $xx</p>
                            </div>
                        </div>
                        <div className='flex 2xl:gap-5 gap-3   mt-5 2xl:p-3 p-2 w-full'>
                            <Image src="/icon.png" alt="icon" width={70} height={70} className='2xl:w-[70px] 2xl:h-[70px] w-[40px] h-[40px]' />
                            <div >
                                <h1 className=' text-black flex justify-between  2xl:w-[340px] w-[280px] items-center 2xl:text-lg text-sm'>Devis Miller<h1 className='text-xs text-[#787878]  '>10:10 PM</h1></h1>
                                <h1 className='text-[#787878] 2xl:text-xl text-xs'>Okay👍</h1>
                                <p className='text-[#787878] 2xl:text-md text-xs'> Offered you $xx” or “You offered $xx</p>
                            </div>
                        </div>
                        <div className='flex 2xl:gap-5 gap-3   mt-5 2xl:p-3 p-2 w-full'>
                            <Image src="/icon.png" alt="icon" width={70} height={70} className='2xl:w-[70px] 2xl:h-[70px] w-[40px] h-[40px]' />
                            <div >
                                <h1 className='font-bold text-black flex justify-between  w-[340px] items-center 2xl:text-lg text-sm'>Devis Miller<h1 className='text-xs  text-[#787878] '>10:10 PM</h1></h1>
                                <h1 className='text-[#787878] 2xl:text-xl text-xs'>Okay👍</h1>
                            </div>
                        </div>
                        <div className='flex 2xl:gap-5 gap-3   mt-5 2xl:p-3 p-2  w-full'>
                            <Image src="/icon.png" alt="icon" width={70} height={70} className='2xl:w-[70px] 2xl:h-[70px] w-[40px] h-[40px]' />
                            <div >
                                <h1 className='font-bold text-black flex justify-between  w-[340px] items-center 2xl:text-lg text-sm'>Devis Miller<h1 className='text-xs text-[#787878] '>10:10 PM</h1></h1>
                                <h1 className='text-[#787878] 2xl:text-xl text-xs'>Okay👍</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right side */}
                <div className='w-full bg-[#E3F1FF] 2xl:pt-16 pt-12 md:px-10 px-5 md:h-screen'>
                    <div className='2xl:h-[35%] h-[45%] bg-[#E3F1FF] '>
                        <div className='flex  items-center justify-between pt-10'>
                            <div className='flex gap-3'>
                                <Image src="/icon.png" alt="icon" width={53} height={53} className='2xl:w-[53px] 2xl:h-[53px] w-[40px] h-[40px]' />
                                <div>
                                    <h1 className='text-[#787878] flex justify-between items-center 2xl:text-lg text-sm'>Devis Miller</h1>
                                    <p className='text-[#787878] 2xl:text-md text-xs flex gap-1 items-center'><FaCircle className="text-[10px] text-[#404EED]" /> Online</p>
                                </div>
                            </div>
                            <div onClick={toggleDropdown2} >
                                <CiMenuKebab className='cursor-pointer' />
                            </div>

                            {open && (
                                <div className="right-10 top-36 z-10 absolute text-center mt-2 w-[170px] rounded-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <a href="#" onClick={toggleToOpen} className="block px-4 pt-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                            Report user
                                            <hr className='my-2' />
                                        </a>
                                        <a href="#" className="block px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" >
                                            Archive chat
                                            <hr className='my-2' />
                                        </a>
                                        <a href="#" className="block px-4  text-sm text-gray-700 hover:bg-gray-100" role="menuitem" >
                                            Delete chat
                                            <hr className='my-2' />
                                        </a>


                                    </div>
                                </div>
                            )}

                        </div>
                        <hr className='2xl:border-2 border 2xl:my-5 my-3' />
                        <div className='w-full lg:flex 2xl:gap-10 gap-5 justify-between'>
                            <div className='lg:flex bg-[#E5F2FF] 2xl:w-[564px] lg:w-[250px] justify-between items-center'>
                                <div className=' 2xl:h-[168px] xl:h-[100px] lg:h-[110px] h-[80px]  rounded-2xl 2xl:gap-5 gap-3 flex  2xl:p-3 p-2 '>
                                    <Link href="/product-detail">
                                        <Image src="/Mask.png" alt="image" width={144} height={40} className='2xl:w-[144px] xl:w-[70px] lg:w-[90px] w-[60px]' />

                                    </Link>
                                    <div className=''>
                                        <h1 className='2xl:text-xl lg:text-md text-xs font-bold'>PlayStation 5</h1>
                                        <p className='text-[#787878] 2xl:text-lg  text-[10px]'>Lorem ipsum </p>
                                        <div className='md:p-2 p-1 text-center md:text-xs text-[10px] rounded-lg 2xl:mt-7 mt-3 border-[#404EED] border md:w-14 w-12'>$40/d</div>
                                    </div>
                                </div>

                            </div>
                            <div className='2xl:w-[593px] flex items-center justify-between 2xl:gap-10 lg:gap-5  gap-5  md:w-[470px] 2xl:h-[150px] h-[120px] lg:mt-0 mt-5  md:px-5 px-2 rounded-2xl bg-white border'>
                                <div className='md:py-10 py-5 '>
                                    <h1 className='text-[#404EED] 2xl:text-lg md:text-xs text-[10px] flex gap-2 font-bold items-center'>Quantity :  <input type="number" id="points" name="points" step="3" className='outline-none focus:border-[#404EED] border-2 rounded-md w-14' />
                                    </h1>
                                    <h1 className='text-[#404EED] 2xl:text-lg md:text-xs text-[10px] flex gap-1 md:mt-4 mt-1 font-bold items-center'>Duration:
                                        <DatePicker selected={startDate} onChange={(date: any) => setStartDate(date)} className='md:w-20 w-10 md:text-[10px] text-[6px] text-center  rounded-md py-1 outline-none border-2 focus:border-[#404EED]' />
                                        <GoDash className=" font-bold" />
                                        <DatePicker selected={endDate} onChange={(date: any) => setEndDate(date)} className='md:w-20 w-10 md:text-[10px] text-[6px] text-center  rounded-md py-1 outline-none border-2 focus:border-[#404EED]' />
                                    </h1>
                                </div>

                                <div className='py-3 flex flex-col'>
                                    <h1 className='text-[#313131] 2xl:text-xs text-[9px]'> Enter negotiated price </h1>
                                    <input type='text ' className='md:w-44 outline-none border-2 focus:border-[#404EED] w-24 px-3 md:py-2 py-0 2xl:my-3 my-2 text-xs   rounded-full' />
                                    <button className='bg-[#404EED] explore-button 2xl:py-3 md:py-2 py-1 text-[10px] text-white text-center xl:w-44 md:w-32 w-24 rounded-full'>Make offer</button>
                                </div>
                            </div>
                        </div>
                        <hr className='border-2 mt-5 ' />
                    </div>
                    <div className=' overflow-x-hidden overflow-y-scroll grid gap-10 grid-col-1 2xl:h-[59%] h-[50%]'>
                        <div className='2xl:p-5 p-3 rounded-2xl 2xl:mt-20 mt-5 2xl:w-[326px] 2xl:text-lg text-xs md:w-[280px] w-[200px] bg-[#404EED] text-white'><p>
                            Hello! I'm interested in renting a PS5.
                            Can you provide me with some
                            information? <h1 className='text-[#CACACA] text-xs mt-3 float-right'>10:10</h1>
                        </p>
                        </div>
                        <div className='place-content-end justify-end grid'>
                            <div className='2xl:w-[509px] md:w-[400px] w-[200px] rounded-2xl 2xl:p-5 p-3  bg-white border 2xl:text-lg text-xs '>
                                <p>
                                    Hi there! Absolutely, I'd be  happy  to  assist  you. The
                                    PS5 is a powerful gaming console  known for its high
                                    quality graphics and immersive gaming experience.
                                    It comes with a controller, necessary  cables,  and  a
                                    selection of popular games. How long would you like
                                    to rent it for? <h1 className='text-[#CACACA] mt-3 text-xs float-right'>10:10</h1>
                                </p>
                            </div>
                        </div>
                        <div className='2xl:p-5 rounded-2xl  2xl:w-[326px] mb-32 p-3 md:w-[280px] w-[200px] bg-[#404EED] text-white 2xl:text-lg text-xs '><p>
                            I'm looking to rent it for a week. Can you
                            confirm its availability for the upcoming
                            week? <h1 className='text-[#CACACA] text-xs  mt-3 float-right'>10:10</h1>
                        </p>
                        </div>

                    </div>

                    <div className="flex items-center bg-white p-2 rounded-full -mt-10 relative">

                        {/* Left side: Document upload field */}
                        <div className="flex-shrink-0 mr-2">
                            <label className="cursor-pointer">
                                <div className="w-10 h-10 bg-[#404EED] rounded-full flex items-center justify-center">
                                    <ImAttachment className="text-white text-xl" />
                                </div>
                                <input id="document-upload" type="file" className="hidden" />
                            </label>
                        </div>

                        {/* Center: Search bar input field */}
                        <div className="flex-grow">
                            <input type="text" placeholder="Search..." className="w-full px-1 py-2 md:text-lg text-sm outline-none" />
                        </div>

                        {/* Right side: Send icon */}
                        <div className="flex-shrink-0 ml-2">
                            <button type="button" className="py-1 px-4 rounded">
                                <div className="w-10 h-10 bg-[#404EED] rounded-full flex items-center justify-center">
                                    <BiSend className="text-white text-xl" />
                                </div>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            {istoOpen && (
                <div className='fixed inset-0 bg-gray-500 bg-opacity-75 '>
                    <div className=' absolute top-20 right-0 left-0 '>
                        <div className='md:w-[550px] md:h-[320px] md:mx-auto mx-5 bg-white  rounded-3xl mt-32 p-5 text-center border'>
                            <div className='flex justify-end'><RxCross1 className="text-[#CACACA] cursor-pointer" onClick={toggleToClose} /></div>
                            <div className='flex justify-center items-center gap-5'>
                                <Image src="/info-circle.png" alt="error" width={56} height={56} />
                                <h1 className='text-2xl font-bold'>Report This User</h1>
                            </div>
                            <textarea placeholder='Please Share the reason for reporting this lessor...' className='p-3 my-5 text-xs border mx-auto rounded-lg md:w-[409px] w-[200px] md:h-[112px] h-[100px]'>

                            </textarea><br />
                            <button className='text-white text-center mb-10 py-2 w-44 mx-auto rounded-full bg-red-700'>Report</button>

                        </div></div>
                </div>)}
            {/* <Footer/> */}
        </div>
    )
}

export default LessorChat
