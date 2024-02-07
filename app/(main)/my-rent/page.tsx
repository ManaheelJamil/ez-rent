
"use client"
import React from 'react'
import { Navbar } from '../../component/ProductPage/navbar'
import Footer from '../../component/ProductPage/footer'
import Image from 'next/image'
import { RiArrowDropDownLine } from "react-icons/ri"
import { useState } from "react";
import { BiMessageAltDots } from "react-icons/bi"
import { RxCross1 } from "react-icons/rx"
import Link from 'next/link'
const Rent = () => {
    const [open, setOpen] = useState(false);

    const toggleToOpen = () => {
        console.log("hello")
        setOpen(true);
    };


    const toggleToClose = () => {
        setOpen(false);
    };
    const [toOpen, setToopen] = useState(false);

    const toggleToOpen1 = () => {
        console.log("hello")
        setToopen(true);
    };


    const toggleToClose1 = () => {
        setToopen(false);
    };
    const [activeTab, setActiveTab] = useState("a");
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };


    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        closeDropdown()
    };
    return (
        <div>

<head>
        <title>Ez-Rent |  My-Rent </title>
      </head>
            <Navbar />

            <div className="2xl:w-[1000px] xl:w-[800px] lg:w-[700px] md:w-[600px] w-full md:mx-auto  2xl:my-44 xl:my-32  md:my-44 my-24 xl:text-sm text-[11px] font-bold md:font-medium  text-gray-500 ">
                <h1 className='xl:text-3xl lg:text-2xl mx-5 font-bold text-black'>My Rent</h1>
                <hr className="2xl:my-10 my-5 2xl:border-2 mx-5 border" />
                <div className="flex  gap-5 mx-5">
                    <button
                        className={`className=" md:block hidden  2xl:text-md text-xs text-white rounded-full 2xl:py-4 py-3 mt-5 md:w-48 w-full border-b-2 bg-[#404EED] border-blue-600 active  aria-current="page"
          `}
                        onClick={() => handleTabClick("a")}
                    >
                        All orders

                    </button>
                    <div className="relative md:hidden block  text-left">
                        <div>
                            <button
                                onClick={toggleDropdown}
                                type="button"
                                className="inline-flex   rounded-full items-center justify-between w-[280px]  border border-gray-300 shadow-sm 2xl:px-4 px-3 2xl:py-1 bg-white text-sm font-medium text-gray-700 "
                            >
                                All Orders
                                <RiArrowDropDownLine className="text-4xl" />
                            </button>
                        </div>

                        {isOpen && (
                            <div className="origin-top-right z-10 absolute text-center mt-2 w-[280px] rounded-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <a href="#" className="block px-4 pt-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleTabClick("a")} role="menuitem">
                                        All Orders
                                        <hr className='my-2' />
                                    </a>
                                    <a href="#" className="block px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" onClick={() => handleTabClick("b")}>
                                        Pending Orders
                                        <hr className='my-2' />
                                    </a>
                                    <a href="#" className="block px-4  text-sm text-gray-700 hover:bg-gray-100" role="menuitem" onClick={() => handleTabClick("c")}>
                                        Ongoing Orders
                                        <hr className='my-2' />
                                    </a>
                                    <a href="#" className="block px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" onClick={() => handleTabClick("d")}>
                                        Completed Orders
                                        <hr className='my-2' />
                                    </a>
                                    <a href="#" className="block px-4  text-sm text-gray-700 hover:bg-gray-100" role="menuitem" onClick={() => handleTabClick("e")}>
                                        Cancelled Orders
                                        <hr className='my-2' />
                                    </a>

                                </div>
                            </div>
                        )}
                    </div>
                    <button
                        className={`className="inline-block 2xl:text-md lg:text-xs text-[10px] md:block hidden text-black rounded-full 2xl:py-4 lg:py-3 py-2 mt-5 w-48 bg-[#E3F1FF]  border-b-2 background border-blue-600" `}
                        onClick={() => handleTabClick("b")}
                    >
                        Pending orders                   </button>
                    <button
                        className={`className="inline-block 2xl:text-md lg:text-xs text-[10px] md:block hidden text-black rounded-full 2xl:py-4 lg:py-3 py-2 mt-5 w-48 border-b-2 bg-[#E3F1FF] border-blue-600" `}
                        onClick={() => handleTabClick("c")}
                    >
                        Ongoing orders                </button>
                    <button
                        className={`className="inline-block 2xl:text-md lg:text-xs text-[10px] md:block hidden text-black rounded-full 2xl:py-4 lg:py-3 py-2 mt-5 w-48 bg-[#E3F1FF]  border-b-2 background border-blue-600" `}
                        onClick={() => handleTabClick("d")}
                    >
                        Completed orders                   </button>
                    <button
                        className={`className="inline-block 2xl:text-md lg:text-xs text-[10px] md:block hidden text-black rounded-full 2xl:py-4 lg:py-3 py-2 mt-5 w-48 border-b-2 bg-[#E3F1FF] border-blue-600" `}
                        onClick={() => handleTabClick("e")}
                    >
                        Cancelled orders                </button>
                </div>
                <hr className='mx-4 my-6 md:hidden block' />
                <div className="bg-white rounded-b-lg">
                    {activeTab === "a" &&

                        // account info
                        <p>
                            <div id="account" className='2xl:w-[1000px] 2xl:h-[408px] md:h-[350px] h-[300px] rounded-3xl border-2 xl:w-[800px] lg:w-[710px] md:w-[600px] md:mx-auto md:mt-14 mx-5  font-bold'>
                                <div className='flex bg-[#E3F1FF] justify-between items-center 2xl:h-[160px] h-[120px] rounded-3xl border 2xl:px-10 px-5'>
                                    <div>
                                        <h1 className='2xl:text-xl text-md  font-bold text-black'>#WU3746HGG12</h1>
                                        <h1 className='text-[#787878] 2xl:text-md md:text-sm text-xs'>March 10, 2023</h1>
                                    </div>
                                    <div>
                                        <button className='2xl:py-3 py-2 rounded-full 2xl:w-52 md:w-44 w-32 2xl:text-lg text-xs bg-white text-center border' onClick={toggleToOpen} >View Order</button><br />
                                        <button className='2xl:py-3 py-2 rounded-full 2xl:w-52 md:w-44 w-32 2xl:text-lg text-xs bg-[#4CAF50] text-white text-center mt-2 border'>Completed </button>
                                    </div>
                                </div>
                                <div className='md:flex justify-between 2xl:px-10 px-5 my-5 items-end'>
                                    <div className='xl:w-[570px] lg:w-[350px] 2xl:h-[200px] xl:h-[170px] h-[110px]  rounded-2xl gap-5 flex  2xl:p-3 p-2 '>
                                        <Image src="/Mask.png" alt="image" width={144} height={187} className='2xl:w-[144px] xl:w-[130px] lg:w-[110px] w-[90px]' />
                                        <div className=''>
                                            <h1 className='2xl:text-2xl   text-black lg:text-lg text-sm font-bold'>Sony Play Station 5</h1>
                                            <p className='text-[#787878] font-medium  2xl:text-lg md:text-xs text-[8px] mt-3 flex items-center gap-3'>Category: <h1 className='text-[#404EED] 2xl:text-lg md:text-xs font-medium text-[8px]'>Gaming</h1></p>
                                            <h1 className='text-[#404EED]  font-medium 2xl:text-lg md:text-xs text-[8px]'>10-03-2003 - 20-03-2023</h1>
                                            <p className='text-[#787878] font-medium  mt-2 2xl:text-lg md:text-xs text-[8px]'>Qty 1</p>
                                        </div>
                                    </div>
                                    <p className='text-[#404EED] flex justify-end 2xl:text-lg md:text-sm text-[10px] md:mt-0 mt-5  cursor-pointer' onClick={toggleToOpen1} >Leave review</p>
                                </div>
                            </div>
                            {open && (
                                <div className='fixed inset-0 bg-gray-500 bg-opacity-75 '>
                                    <div className='2xl:w-[570px] md:w-[450px] w-full rounded-xl 2xl:p-10 p-5 space-y-3 bg-white border absolute 2xl:top-44 top-16 md:mx-auto  right-0 left-0 '>
                                        <RxCross1 className="2xl:ml-[474px] xl:ml-96 text-xl" onClick={toggleToClose} />
                                        <h1 className='2xl:text-3xl text-xl font-bold text-black'>Order Details</h1>
                                        <p className='2xl:text-lg text-xs text-[#313131]  flex items-center gap-2'>Order Id:<p className='text-[#787878]'>22</p></p>
                                        <p className='2xl:text-lg text-xs  text-[#313131] flex items-center gap-2'>Lessee Name:<p className='text-[#787878]'> Albert</p></p>
                                        <p className='2xl:text-lg text-xs text-[#313131]  flex items-center gap-2'>Lessee Email:<p className='text-[#787878]'>albert@gmail.com </p></p>
                                        <p className='2xl:text-lg text-xs text-[#313131]  flex items-center gap-2'>Lessee Phone:<p className='text-[#787878]'>+65 123 456</p></p>
                                        <p className='2xl:text-lg text-[10px] text-[#313131]  flex md:gap-2 '>Lessee Shipping Address:<p className='text-[#787878]'> Anson, Tanjong Pagar07, 08,
                                            Singapore</p></p>
                                        <h1 className='2xl:text-3xl text-xl font-bold 2xl:mt-10 mt-5 text-black'>Item Description</h1>
                                        <div className='2xl:w-[570px] lg:w-[350px] 2xl:h-[110px] xl:h-[90px] h-[110px]  rounded-2xl gap-5 flex  2xl:p-3 p-2 '>
                                            <Image src="/Mask.png" alt="image" width={90} height={90} className='2xl:w-[90px] xl:w-[80px] lg:w-[110px] w-[90px]' />
                                            <div className=''>
                                                <h1 className='2xl:text-xl   text-black text-sm font-bold'>Sony Play Station 5</h1>
                                                <h1 className='text-[#787878]  font-medium 2xl:text-lg text-[8px]'>Lorem ipsum</h1>
                                                <p className='text-[#787878] font-medium  mt-2 2xl:text-lg  text-[8px]'>Quantity: 1</p>
                                            </div>
                                        </div>
                                        <p className="text-[#787878] 2xl:my-6 mt-3 flex justify-between 2xl:text-sm text-[10px]">Renting Duration<h1 className="text-black font-bold">10-03-2023 -To-  20-03-2023</h1></p>
                                        <hr className="border-2 2xl:my-2 " />
                                        <p className="text-[#787878] flex justify-between 2xl:text-sm text-[10px]">Total Price<h1 className="text-black font-bold">$40</h1></p>
                                        <hr className="border 2xl:my-2 " />
                                        <p className="text-[#787878] flex justify-between 2xl:text-sm text-[10px]">Delivery/ Collection fee<h1 className="text-black font-bold">$5</h1></p>
                                        <hr className="border 2xl:my-2 " />
                                        <p className="text-[#787878] flex justify-between 2xl:text-sm text-[10px]">Refundable deposit<h1 className="text-black font-bold">$5</h1></p>
                                        <hr className="border 2xl:my-2 " />
                                        <p className="text-black 2xl:text-sm text-[10px] font-bold flex justify-between">Order Total<h1 className="text-black font-bold">$50</h1></p>
                                    </div>
                                </div>

                            )}
                            {toOpen && (
                                <div className='fixed inset-0 bg-gray-500 bg-opacity-75 '>
                                    <div className=' absolute 2xl:top-1/4 top-10 right-0 left-0 '>
                                        <div className='md:w-[550px] md:h-[350px] md:mx-auto mx-5 bg-white  rounded-3xl mt-32 p-5 text-center border'>
                                            <div className='flex justify-end'><RxCross1 className="text-[#CACACA] cursor-pointer" onClick={toggleToClose1} /></div>
                                            <h1 className='text-xl text-center font-bold'>Rate Lessor</h1>
                                            <Image src="/5stars.png" alt="error" width={231.12} height={45.18} className='mx-auto md:w-[231px] md:h-[45] w-[170px] h-[45px]' />
                                            <hr className='border my-5' />
                                            <h1 className='text-black text-xs text-start md:ml-14 ml-5'>Leave comment</h1>
                                            <textarea className='p-3 mb-5 text-xs border mt-4 mx-auto rounded-3xl md:w-[409px] w-[226px] md:h-[80px] h-[100px]'>

                                            </textarea><br />
                                            <button className='text-white text-center py-2 w-36 mx-auto rounded-full bg-[#404EED]'>Submit</button>

                                        </div>
                                    </div>
                                </div>
                            )}

                        </p>
                    }
                    {activeTab === "b" &&
                        // my reviews
                        <p>
                            <div id="account" className='2xl:w-[1000px] 2xl:h-[408px] md:h-[350px] h-[350px] rounded-3xl border-2 xl:w-[800px] lg:w-[710px] md:w-[600px] md:mx-auto md:mt-14 mx-5  font-bold'>
                                <div className='flex  bg-[#E3F1FF] justify-between items-center 2xl:h-[160px] h-[120px] rounded-3xl border 2xl:px-10 px-5'>
                                    <div>
                                        <h1 className='2xl:text-xl text-md  font-bold text-black'>#WU3746HGG12</h1>
                                        <h1 className='text-[#787878] 2xl:text-md md:text-sm text-xs'>March 10, 2023</h1>
                                    </div>
                                    <div>
                                        <button className='2xl:py-3 py-2 rounded-full 2xl:w-52 md:w-44 w-32 2xl:text-lg text-xs bg-white text-center border' onClick={toggleToOpen}>View Order</button><br />
                                        <button className='2xl:py-3 py-2 rounded-full 2xl:w-52 md:w-44 w-32 2xl:text-lg text-xs bg-[#D60000] text-white text-center mt-2 border'>Cancel Order </button>
                                    </div>
                                </div>
                                <div className='md:flex justify-between 2xl:px-10 px-5 my-5 items-end'>
                                    <div className='xl:w-[570px] lg:w-[350px] 2xl:h-[200px] xl:h-[170px] h-[110px]  rounded-2xl gap-5 flex  2xl:p-3 p-2 '>
                                        <Image src="/Mask.png" alt="image" width={144} height={187} className='2xl:w-[144px] xl:w-[130px] lg:w-[110px] w-[90px]' />
                                        <div className=''>
                                            <h1 className='2xl:text-2xl   text-black lg:text-lg text-sm font-bold'>Sony Play Station 5</h1>
                                            <p className='text-[#787878] font-medium  2xl:text-lg md:text-xs text-[8px] mt-3 flex items-center gap-3'>Category: <h1 className='text-[#404EED] 2xl:text-lg md:text-xs font-medium text-[8px]'>Gaming</h1></p>
                                            <h1 className='text-[#404EED]  font-medium 2xl:text-lg md:text-xs text-[8px]'>10-03-2003 - 20-03-2023</h1>
                                            <p className='text-[#787878] font-medium  mt-2 2xl:text-lg md:text-xs text-[8px]'>Qty 1</p>
                                        </div>
                                    </div>
                                    <div className='flex md:flex-col flex-row md:mt-0 my-5 gap-5'>
                                        <button className='2xl:py-3 py-2 rounded-full 2xl:w-52 md:w-44 w-32 2xl:text-lg text-white text-xs bg-[#404EED] text-center border'>Item Delivered</button>
                                        <Link href="//chat">
                                            <button className='2xl:py-3 py-2 rounded-full 2xl:w-52 md:w-44 w-32 2xl:text-lg md:text-xs text-[10px] font-medium  text-[#404EED] text-center justify-center gap-1 items-center flex mt-2 border'><BiMessageAltDots className="md:text-3xl text-xl" />Chat with lessee </button>

                                        </Link>
                                    </div>

                                </div>
                            </div>
                            {open && (
                               <div className='fixed inset-0 bg-gray-500 bg-opacity-75 '>
                               <div className='2xl:w-[570px] md:w-[450px] w-full rounded-xl 2xl:p-10 p-5 space-y-3 bg-white border absolute 2xl:top-44 top-16 md:mx-auto  right-0 left-0 '>
                                   <RxCross1 className="2xl:ml-[474px] xl:ml-96 text-xl" onClick={toggleToClose} />
                                   <h1 className='2xl:text-3xl text-xl font-bold text-black'>Order Details</h1>
                                   <p className='2xl:text-lg text-xs text-[#313131]  flex items-center gap-2'>Order Id:<p className='text-[#787878]'>22</p></p>
                                   <p className='2xl:text-lg text-xs  text-[#313131] flex items-center gap-2'>Lessee Name:<p className='text-[#787878]'> Albert</p></p>
                                   <p className='2xl:text-lg text-xs text-[#313131]  flex items-center gap-2'>Lessee Email:<p className='text-[#787878]'>albert@gmail.com </p></p>
                                   <p className='2xl:text-lg text-xs text-[#313131]  flex items-center gap-2'>Lessee Phone:<p className='text-[#787878]'>+65 123 456</p></p>
                                   <p className='2xl:text-lg text-[10px] text-[#313131]  flex md:gap-2 '>Lessee Shipping Address:<p className='text-[#787878]'> Anson, Tanjong Pagar07, 08,
                                       Singapore</p></p>
                                   <h1 className='2xl:text-3xl text-xl font-bold 2xl:mt-10 mt-5 text-black'>Item Description</h1>
                                   <div className='2xl:w-[570px] lg:w-[350px] 2xl:h-[110px] xl:h-[90px] h-[110px]  rounded-2xl gap-5 flex  2xl:p-3 p-2 '>
                                       <Image src="/Mask.png" alt="image" width={90} height={90} className='2xl:w-[90px] xl:w-[80px] lg:w-[110px] w-[90px]' />
                                       <div className=''>
                                           <h1 className='2xl:text-xl   text-black text-sm font-bold'>Sony Play Station 5</h1>
                                           <h1 className='text-[#787878]  font-medium 2xl:text-lg text-[8px]'>Lorem ipsum</h1>
                                           <p className='text-[#787878] font-medium  mt-2 2xl:text-lg  text-[8px]'>Quantity: 1</p>
                                       </div>
                                   </div>
                                   <p className="text-[#787878] 2xl:my-6 mt-3 flex justify-between 2xl:text-sm text-[10px]">Renting Duration<h1 className="text-black font-bold">10-03-2023 -To-  20-03-2023</h1></p>
                                   <hr className="border-2 2xl:my-2 " />
                                   <p className="text-[#787878] flex justify-between 2xl:text-sm text-[10px]">Total Price<h1 className="text-black font-bold">$40</h1></p>
                                   <hr className="border 2xl:my-2 " />
                                   <p className="text-[#787878] flex justify-between 2xl:text-sm text-[10px]">Delivery/ Collection fee<h1 className="text-black font-bold">$5</h1></p>
                                   <hr className="border 2xl:my-2 " />
                                   <p className="text-[#787878] flex justify-between 2xl:text-sm text-[10px]">Refundable deposit<h1 className="text-black font-bold">$5</h1></p>
                                   <hr className="border 2xl:my-2 " />
                                   <p className="text-black 2xl:text-sm text-[10px] font-bold flex justify-between">Order Total<h1 className="text-black font-bold">$50</h1></p>
                               </div>
                           </div>


                            )}
                        </p>
                    }
                    {activeTab === "c" &&
                        // change password
                        <p>
                            <div id="account" className='2xl:w-[1000px] 2xl:h-[408px] md:h-[350px] h-[350px] rounded-3xl border-2 xl:w-[800px] lg:w-[710px] md:w-[600px] md:mx-auto md:mt-14 mx-5  font-bold'>
                                <div className='flex bg-[#E3F1FF] justify-between items-center 2xl:h-[160px] h-[120px] rounded-3xl border 2xl:px-10 px-5'>
                                    <div>
                                        <h1 className='2xl:text-xl text-md  font-bold text-black'>#WU3746HGG12</h1>
                                        <h1 className='text-[#787878] 2xl:text-md md:text-sm text-xs'>March 10, 2023</h1>
                                    </div>
                                    <div>
                                        <button className='2xl:py-3 py-2 rounded-full 2xl:w-52 md:w-44 w-32 2xl:text-lg text-xs bg-white text-center border' onClick={toggleToOpen}>View Order</button><br />
                                        <button className='2xl:py-3 py-2 rounded-full 2xl:w-52 md:w-44 w-32 2xl:text-lg text-xs bg-[#D60000] text-white text-center mt-2 border'>5 days remaining </button>
                                    </div>
                                </div>
                                <div className='md:flex justify-between 2xl:px-10 px-5 my-5 items-end'>
                                    <div className='xl:w-[570px] lg:w-[350px] 2xl:h-[200px] xl:h-[170px] h-[110px]  rounded-2xl gap-5 flex  2xl:p-3 p-2 '>
                                        <Image src="/Mask.png" alt="image" width={144} height={187} className='2xl:w-[144px] xl:w-[130px] lg:w-[110px] w-[90px]' />
                                        <div className=''>
                                            <h1 className='2xl:text-2xl   text-black lg:text-lg text-sm font-bold'>Sony Play Station 5</h1>
                                            <p className='text-[#787878] font-medium  2xl:text-lg md:text-xs text-[8px] mt-3 flex items-center gap-3'>Category: <h1 className='text-[#404EED] 2xl:text-lg md:text-xs font-medium text-[8px]'>Gaming</h1></p>
                                            <h1 className='text-[#404EED]  font-medium 2xl:text-lg md:text-xs text-[8px]'>10-03-2003 - 20-03-2023</h1>
                                            <p className='text-[#787878] font-medium  mt-2 2xl:text-lg md:text-xs text-[8px]'>Qty 1</p>
                                        </div>
                                    </div>
                                    <div className='flex md:flex-col flex-row md:mt-0 my-5 gap-5'>
                                        <button className='2xl:py-3 py-2 rounded-full 2xl:w-52 md:w-44 w-32 2xl:text-lg text-white text-xs bg-[#404EED] text-center border'>Item Collected</button>
                                        <Link href="/chat">
                                            <button className='2xl:py-3 py-2 rounded-full 2xl:w-52 md:w-44 w-32 2xl:text-lg md:text-xs text-[10px] font-medium  text-[#404EED] text-center justify-center gap-1 items-center flex mt-2 border'><BiMessageAltDots className="md:text-3xl text-xl" />Chat with lessee </button>

                                        </Link>
                                    </div>                            </div>
                            </div>
                            {open && (
                               <div className='fixed inset-0 bg-gray-500 bg-opacity-75 '>
                               <div className='2xl:w-[570px] md:w-[450px] w-full rounded-xl 2xl:p-10 p-5 space-y-3 bg-white border absolute 2xl:top-44 top-16 md:mx-auto  right-0 left-0 '>
                                   <RxCross1 className="2xl:ml-[474px] xl:ml-96 text-xl" onClick={toggleToClose} />
                                   <h1 className='2xl:text-3xl text-xl font-bold text-black'>Order Details</h1>
                                   <p className='2xl:text-lg text-xs text-[#313131]  flex items-center gap-2'>Order Id:<p className='text-[#787878]'>22</p></p>
                                   <p className='2xl:text-lg text-xs  text-[#313131] flex items-center gap-2'>Lessee Name:<p className='text-[#787878]'> Albert</p></p>
                                   <p className='2xl:text-lg text-xs text-[#313131]  flex items-center gap-2'>Lessee Email:<p className='text-[#787878]'>albert@gmail.com </p></p>
                                   <p className='2xl:text-lg text-xs text-[#313131]  flex items-center gap-2'>Lessee Phone:<p className='text-[#787878]'>+65 123 456</p></p>
                                   <p className='2xl:text-lg text-[10px] text-[#313131]  flex md:gap-2 '>Lessee Shipping Address:<p className='text-[#787878]'> Anson, Tanjong Pagar07, 08,
                                       Singapore</p></p>
                                   <h1 className='2xl:text-3xl text-xl font-bold 2xl:mt-10 mt-5 text-black'>Item Description</h1>
                                   <div className='2xl:w-[570px] lg:w-[350px] 2xl:h-[110px] xl:h-[90px] h-[110px]  rounded-2xl gap-5 flex  2xl:p-3 p-2 '>
                                       <Image src="/Mask.png" alt="image" width={90} height={90} className='2xl:w-[90px] xl:w-[80px] lg:w-[110px] w-[90px]' />
                                       <div className=''>
                                           <h1 className='2xl:text-xl   text-black text-sm font-bold'>Sony Play Station 5</h1>
                                           <h1 className='text-[#787878]  font-medium 2xl:text-lg text-[8px]'>Lorem ipsum</h1>
                                           <p className='text-[#787878] font-medium  mt-2 2xl:text-lg  text-[8px]'>Quantity: 1</p>
                                       </div>
                                   </div>
                                   <p className="text-[#787878] 2xl:my-6 mt-3 flex justify-between 2xl:text-sm text-[10px]">Renting Duration<h1 className="text-black font-bold">10-03-2023 -To-  20-03-2023</h1></p>
                                   <hr className="border-2 2xl:my-2 " />
                                   <p className="text-[#787878] flex justify-between 2xl:text-sm text-[10px]">Total Price<h1 className="text-black font-bold">$40</h1></p>
                                   <hr className="border 2xl:my-2 " />
                                   <p className="text-[#787878] flex justify-between 2xl:text-sm text-[10px]">Delivery/ Collection fee<h1 className="text-black font-bold">$5</h1></p>
                                   <hr className="border 2xl:my-2 " />
                                   <p className="text-[#787878] flex justify-between 2xl:text-sm text-[10px]">Refundable deposit<h1 className="text-black font-bold">$5</h1></p>
                                   <hr className="border 2xl:my-2 " />
                                   <p className="text-black 2xl:text-sm text-[10px] font-bold flex justify-between">Order Total<h1 className="text-black font-bold">$50</h1></p>
                               </div>
                           </div>


                            )}
                        </p>
                    }
                    {activeTab === "d" &&

                        // account info
                        <p>
                            <div id="account" className='2xl:w-[1000px] 2xl:h-[408px] md:h-[350px] h-[300px] rounded-3xl border-2 xl:w-[800px] lg:w-[710px] md:w-[600px] md:mx-auto md:mt-14 mx-5  font-bold'>
                                <div className='flex  bg-[#E3F1FF] justify-between items-center 2xl:h-[160px] h-[120px] rounded-3xl border 2xl:px-10 px-5'>
                                    <div>
                                        <h1 className='2xl:text-xl text-md  font-bold text-black'>#WU3746HGG12</h1>
                                        <h1 className='text-[#787878] 2xl:text-md md:text-sm text-xs'>March 10, 2023</h1>
                                    </div>
                                    <div>
                                        <button className='2xl:py-3 py-2 rounded-full 2xl:w-52 md:w-44 w-32 2xl:text-lg text-xs bg-white text-center border' onClick={toggleToOpen}>View Order</button><br />
                                        <button className='2xl:py-3 py-2 rounded-full 2xl:w-52 md:w-44 w-32 2xl:text-lg text-xs bg-[#4CAF50] text-white text-center mt-2 border'>Completed </button>
                                    </div>
                                </div>
                                <div className='md:flex justify-between 2xl:px-10 px-5 my-5 items-end'>
                                    <div className='xl:w-[570px] lg:w-[350px] 2xl:h-[200px] xl:h-[170px] h-[110px]  rounded-2xl gap-5 flex  2xl:p-3 p-2 '>
                                        <Image src="/Mask.png" alt="image" width={144} height={187} className='2xl:w-[144px] xl:w-[130px] lg:w-[110px] w-[90px]' />
                                        <div className=''>
                                            <h1 className='2xl:text-2xl   text-black lg:text-lg text-sm font-bold'>Sony Play Station 5</h1>
                                            <p className='text-[#787878] font-medium  2xl:text-lg md:text-xs text-[8px] mt-3 flex items-center gap-3'>Category: <h1 className='text-[#404EED] 2xl:text-lg md:text-xs font-medium text-[8px]'>Gaming</h1></p>
                                            <h1 className='text-[#404EED]  font-medium 2xl:text-lg md:text-xs text-[8px]'>10-03-2003 - 20-03-2023</h1>
                                            <p className='text-[#787878] font-medium  mt-2 2xl:text-lg md:text-xs text-[8px]'>Qty 1</p>
                                        </div>
                                    </div>
                                    <p className='text-[#404EED] flex justify-end 2xl:text-lg md:text-sm text-[10px] md:mt-0 mt-5 ' onClick={toggleToOpen1}>Leave review</p>
                                </div>
                            </div>
                            {open && (
                                <div className='fixed inset-0 bg-gray-500 bg-opacity-75 '>
                                <div className='2xl:w-[570px] md:w-[450px] w-full rounded-xl 2xl:p-10 p-5 space-y-3 bg-white border absolute 2xl:top-44 top-16 md:mx-auto  right-0 left-0 '>
                                    <RxCross1 className="2xl:ml-[474px] xl:ml-96 text-xl" onClick={toggleToClose} />
                                    <h1 className='2xl:text-3xl text-xl font-bold text-black'>Order Details</h1>
                                    <p className='2xl:text-lg text-xs text-[#313131]  flex items-center gap-2'>Order Id:<p className='text-[#787878]'>22</p></p>
                                    <p className='2xl:text-lg text-xs  text-[#313131] flex items-center gap-2'>Lessee Name:<p className='text-[#787878]'> Albert</p></p>
                                    <p className='2xl:text-lg text-xs text-[#313131]  flex items-center gap-2'>Lessee Email:<p className='text-[#787878]'>albert@gmail.com </p></p>
                                    <p className='2xl:text-lg text-xs text-[#313131]  flex items-center gap-2'>Lessee Phone:<p className='text-[#787878]'>+65 123 456</p></p>
                                    <p className='2xl:text-lg text-[10px] text-[#313131]  flex md:gap-2 '>Lessee Shipping Address:<p className='text-[#787878]'> Anson, Tanjong Pagar07, 08,
                                        Singapore</p></p>
                                    <h1 className='2xl:text-3xl text-xl font-bold 2xl:mt-10 mt-5 text-black'>Item Description</h1>
                                    <div className='2xl:w-[570px] lg:w-[350px] 2xl:h-[110px] xl:h-[90px] h-[110px]  rounded-2xl gap-5 flex  2xl:p-3 p-2 '>
                                        <Image src="/Mask.png" alt="image" width={90} height={90} className='2xl:w-[90px] xl:w-[80px] lg:w-[110px] w-[90px]' />
                                        <div className=''>
                                            <h1 className='2xl:text-xl   text-black text-sm font-bold'>Sony Play Station 5</h1>
                                            <h1 className='text-[#787878]  font-medium 2xl:text-lg text-[8px]'>Lorem ipsum</h1>
                                            <p className='text-[#787878] font-medium  mt-2 2xl:text-lg  text-[8px]'>Quantity: 1</p>
                                        </div>
                                    </div>
                                    <p className="text-[#787878] 2xl:my-6 mt-3 flex justify-between 2xl:text-sm text-[10px]">Renting Duration<h1 className="text-black font-bold">10-03-2023 -To-  20-03-2023</h1></p>
                                    <hr className="border-2 2xl:my-2 " />
                                    <p className="text-[#787878] flex justify-between 2xl:text-sm text-[10px]">Total Price<h1 className="text-black font-bold">$40</h1></p>
                                    <hr className="border 2xl:my-2 " />
                                    <p className="text-[#787878] flex justify-between 2xl:text-sm text-[10px]">Delivery/ Collection fee<h1 className="text-black font-bold">$5</h1></p>
                                    <hr className="border 2xl:my-2 " />
                                    <p className="text-[#787878] flex justify-between 2xl:text-sm text-[10px]">Refundable deposit<h1 className="text-black font-bold">$5</h1></p>
                                    <hr className="border 2xl:my-2 " />
                                    <p className="text-black 2xl:text-sm text-[10px] font-bold flex justify-between">Order Total<h1 className="text-black font-bold">$50</h1></p>
                                </div>
                            </div>

                            )}
                            {toOpen && (
                                <div className='fixed inset-0 bg-gray-500 bg-opacity-75 '>
                                    <div className=' absolute top-32 right-0 left-0 '>
                                        <div className='md:w-[550px] md:h-[350px] md:mx-auto mx-5 bg-white  rounded-3xl mt-32 p-5 text-center border'>
                                            <div className='flex justify-end'><RxCross1 className="text-[#CACACA] cursor-pointer" onClick={toggleToClose1} /></div>
                                            <h1 className='text-xl text-center font-bold'>Rate Lessor</h1>
                                            <Image src="/5 stars.png" alt="error" width={231.12} height={45.18} className='mx-auto md:w-[231px] md:h-[45] w-[170px] h-[45px]' />
                                            <hr className='border my-5' />
                                            <h1 className='text-black text-xs text-start md:ml-14 ml-5'>Leave comment</h1>
                                            <textarea className='p-3 mb-5 text-xs border mt-4 mx-auto rounded-3xl md:w-[409px] w-[226px] md:h-[80px] h-[100px]'>

                                            </textarea><br />
                                            <button className='text-white text-center py-2 w-36 mx-auto rounded-full bg-[#404EED]'>Submit</button>

                                        </div>
                                    </div>
                                </div>
                            )}
                        </p>
                    }
                    {activeTab === "e" &&
                        // change password
                        <p>
                            <div id="account" className='2xl:w-[1000px] 2xl:h-[408px] md:h-[350px] h-[350px] rounded-3xl border-2 xl:w-[800px] lg:w-[710px] md:w-[600px] md:mx-auto md:mt-14 mx-5  font-bold'>
                                <div className='flex bg-[#E3F1FF] justify-between items-center 2xl:h-[160px] h-[120px] rounded-3xl border 2xl:px-10 px-5'>
                                    <div>
                                        <h1 className='2xl:text-xl text-md  font-bold text-black'>#WU3746HGG12</h1>
                                        <h1 className='text-[#787878] 2xl:text-md md:text-sm text-xs'>March 10, 2023</h1>
                                    </div>
                                    <div>
                                        <button className='2xl:py-3 py-2 rounded-full 2xl:w-52 md:w-44 w-32 2xl:text-lg text-xs bg-white text-center border' onClick={toggleToOpen}>View Order</button><br />
                                        <button className='2xl:py-3 py-2 rounded-full 2xl:w-52 md:w-44 w-32 2xl:text-lg text-xs bg-[#D60000] text-white text-center mt-2 border'>Cancelled </button>
                                    </div>
                                </div>
                                <div className='md:flex justify-between 2xl:px-10 px-5 my-5 items-end'>
                                    <div className='xl:w-[570px] lg:w-[350px] 2xl:h-[200px] xl:h-[170px] h-[110px]  rounded-2xl gap-5 flex  2xl:p-3 p-2 '>
                                        <Image src="/Mask.png" alt="image" width={144} height={187} className='2xl:w-[144px] xl:w-[130px] lg:w-[110px] w-[90px]' />
                                        <div className=''>
                                            <h1 className='2xl:text-2xl   text-black lg:text-lg text-sm font-bold'>Sony Play Station 5</h1>
                                            <p className='text-[#787878] font-medium  2xl:text-lg md:text-xs text-[8px] mt-3 flex items-center gap-3'>Category: <h1 className='text-[#404EED] 2xl:text-lg md:text-xs font-medium text-[8px]'>Gaming</h1></p>
                                            <h1 className='text-[#404EED]  font-medium 2xl:text-lg md:text-xs text-[8px]'>10-03-2003 - 20-03-2023</h1>
                                            <p className='text-[#787878] font-medium  mt-2 2xl:text-lg md:text-xs text-[8px]'>Qty 1</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-end md:mt-0 my-5 gap-5'>
                                        <Link href="/chat">
                                            <button className='2xl:py-3 py-2 rounded-full 2xl:w-52 md:w-44 w-32 2xl:text-lg md:text-xs text-[10px] font-medium  text-[#404EED] text-center justify-center gap-1 flex mt-2 border items-center'><BiMessageAltDots className="md:text-3xl text-xl" />Chat with lessee </button>

                                        </Link>
                                    </div>                            </div>
                            </div>
                            {open && (
                                <div className='fixed inset-0 bg-gray-500 bg-opacity-75 '>
                                <div className='2xl:w-[570px] md:w-[450px] w-full rounded-xl 2xl:p-10 p-5 space-y-3 bg-white border absolute 2xl:top-44 top-16 md:mx-auto  right-0 left-0 '>
                                    <RxCross1 className="2xl:ml-[474px] xl:ml-96 text-xl" onClick={toggleToClose} />
                                    <h1 className='2xl:text-3xl text-xl font-bold text-black'>Order Details</h1>
                                    <p className='2xl:text-lg text-xs text-[#313131]  flex items-center gap-2'>Order Id:<p className='text-[#787878]'>22</p></p>
                                    <p className='2xl:text-lg text-xs  text-[#313131] flex items-center gap-2'>Lessee Name:<p className='text-[#787878]'> Albert</p></p>
                                    <p className='2xl:text-lg text-xs text-[#313131]  flex items-center gap-2'>Lessee Email:<p className='text-[#787878]'>albert@gmail.com </p></p>
                                    <p className='2xl:text-lg text-xs text-[#313131]  flex items-center gap-2'>Lessee Phone:<p className='text-[#787878]'>+65 123 456</p></p>
                                    <p className='2xl:text-lg text-[10px] text-[#313131]  flex md:gap-2 '>Lessee Shipping Address:<p className='text-[#787878]'> Anson, Tanjong Pagar07, 08,
                                        Singapore</p></p>
                                    <h1 className='2xl:text-3xl text-xl font-bold 2xl:mt-10 mt-5 text-black'>Item Description</h1>
                                    <div className='2xl:w-[570px] lg:w-[350px] 2xl:h-[110px] xl:h-[90px] h-[110px]  rounded-2xl gap-5 flex  2xl:p-3 p-2 '>
                                        <Image src="/Mask.png" alt="image" width={90} height={90} className='2xl:w-[90px] xl:w-[80px] lg:w-[110px] w-[90px]' />
                                        <div className=''>
                                            <h1 className='2xl:text-xl   text-black text-sm font-bold'>Sony Play Station 5</h1>
                                            <h1 className='text-[#787878]  font-medium 2xl:text-lg text-[8px]'>Lorem ipsum</h1>
                                            <p className='text-[#787878] font-medium  mt-2 2xl:text-lg  text-[8px]'>Quantity: 1</p>
                                        </div>
                                    </div>
                                    <p className="text-[#787878] 2xl:my-6 mt-3 flex justify-between 2xl:text-sm text-[10px]">Renting Duration<h1 className="text-black font-bold">10-03-2023 -To-  20-03-2023</h1></p>
                                    <hr className="border-2 2xl:my-2 " />
                                    <p className="text-[#787878] flex justify-between 2xl:text-sm text-[10px]">Total Price<h1 className="text-black font-bold">$40</h1></p>
                                    <hr className="border 2xl:my-2 " />
                                    <p className="text-[#787878] flex justify-between 2xl:text-sm text-[10px]">Delivery/ Collection fee<h1 className="text-black font-bold">$5</h1></p>
                                    <hr className="border 2xl:my-2 " />
                                    <p className="text-[#787878] flex justify-between 2xl:text-sm text-[10px]">Refundable deposit<h1 className="text-black font-bold">$5</h1></p>
                                    <hr className="border 2xl:my-2 " />
                                    <p className="text-black 2xl:text-sm text-[10px] font-bold flex justify-between">Order Total<h1 className="text-black font-bold">$50</h1></p>
                                </div>
                            </div>

                            )}
                        </p>
                    }
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Rent
