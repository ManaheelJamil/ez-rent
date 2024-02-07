"use client"
import React, { useState } from "react";
import { Navbar } from '../../component/ProductPage/navbar'
import Footer from '../../component/ProductPage/footer'
import { AiOutlinePlusCircle } from "react-icons/ai"
import { AiOutlineMinusCircle } from "react-icons/ai"
import CheckoutAccordian from '../../component/checkout/checkoutAccordian'
import Image from 'next/image'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
const Checkout = () => {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return (
        <div>
            <head>
        <title>Ez-Rent |  Checkout </title>
      </head>
            <Navbar />
            <div className='2xl:my-52 my-32 2xl:w-[1400px] xl:w-[1100px] lg:w-[900px]  md:mx-auto mx-5 '>
                <h1 className='mb-5  2xl:text-3xl text-2xl font-bold'>Checkout</h1>
                <div className="md:flex gap-20 ">
                    <div><CheckoutAccordian /></div>
                    <div className="2xl:w-[700px] md:mt-0 mt-20 mx-6 md:w-[600px] ">
                        <h1 className="text-xl font-bold mb-10">Order Summary</h1>
                        <div className="flex justify-between  ">
                            <div className="flex gap-3 ">
                                <Image src="/Mask group.png" alt="image" width={96.36} height={117.78} />
                                <div>
                                    <h1 className="text-lg mt-3 font-bold text-[#111827]">Play Station 5</h1>
                                    <p className="text-xs text-[#787878]">Lorem ipsum</p>
                                    <div>
                                        <div className="my-4 flex items-center">
                                            <button
                                                className=" py-2 mx-2  text-2xl rounded-md"
                                                onClick={decrement}
                                            >
                                                <AiOutlineMinusCircle />
                                            </button>
                                            <span className="text-2xl ">{count}</span>
                                            <button
                                                className=" py-2 mx-2  text-2xl rounded-md"
                                                onClick={increment}
                                            >
                                                <AiOutlinePlusCircle />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className="w-14 text-xs mt-5 py-1 rounded-md border-[#404EED] border-2 text-[#404EED] text-center">$40/d</button>
                            </div>
                        </div>
                        <hr className="border-2 my-6" />
                        <h1 className="text-lg font-bold">Rent Period</h1>
                        <div className="flex items-end mt-5 justify-around">
                            <div>
                                <p className="font-bold text-sm">Start Date</p>
                                <DatePicker selected={startDate} onChange={(date: any) => setStartDate(date)} className='md:w-20 w-10 md:text-[10px] text-[6px] text-center  rounded-md py-1 outline-none border-2 focus:border-[#404EED]' />
                            </div>
                            <p>-TO-</p>
                            <div>
                                <p className="font-bold text-sm">End Date</p>
                                <DatePicker selected={endDate} onChange={(date: any) => setEndDate(date)} className='md:w-20 w-10 md:text-[10px] text-[6px] text-center  rounded-md py-1 outline-none border-2 focus:border-[#404EED]' />
                            </div>
                        </div>
                        <hr className="border-2 my-6" />
                        <p className="text-[#787878] flex justify-between text-sm">Subtotal<h1 className="text-black font-bold">$40</h1></p>
                        <hr className="border my-2" />
                        <p className="text-[#787878] flex justify-between text-sm">Delivery/ Collection fee<h1 className="text-black font-bold">$5</h1></p>
                        <hr className="border my-2" />
                        <p className="text-[#787878] flex justify-between text-sm">Refundable deposit<h1 className="text-black font-bold">$5</h1></p>
                        <hr className="border my-2" />
                        <p className="text-black text-sm font-bold flex justify-between">Order Total<h1 className="text-black font-bold">$50</h1></p>
                        <Link href="/order-confirm">
                            <button className="bg-[#404EED] text-white text-sm text-center py-4 rounded-full mt-5 w-full">Pay Now</button>

                        </Link>
                        <Link href="/lessor-Chat" className="text-center font-bold mt-3 text-xs text-[#D60000] flex justify-center">Negotiate price </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Checkout
