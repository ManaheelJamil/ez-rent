/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useState } from 'react';
import { BsPersonCircle } from "react-icons/bs"
import { GrLocation } from "react-icons/gr"
import { BsPostcard } from "react-icons/bs"
import { TiTick } from "react-icons/ti"
import Image from 'next/image';
const CheckoutAccordian = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(1);

    const handleOpen = (index: any) => {
        setOpen(index === open ? 0 : index);
    };
    const [istoOpen, setIstoOpen] = useState(false);

    const toggleToOpen = () => {
        console.log("hello")
        setIstoOpen(true);
    };
    const [isOpen, setIsOpen] = useState(false);

    const toggleToOpen1 = () => {
        console.log("hello")
        setIstoOpen(false);
        setIsOpen(true);
    };
    const [isOpen2, setIsOpen2] = useState(false);

    const toggleToOpen2 = () => {
        console.log("hello")
        setIsOpen2(true);
    };
    const [isOpen3, setIsOpen3] = useState(false);

    const toggleToOpen3 = () => {
        console.log("hello")
        setIsOpen3(true);
    };
    return (
        <div>
            <div className=" 2xl:w-[816px] xl:w-[600px] lg:w-[500px] w-[350px]  mx-auto">
                <div id="accordion-collapse" data-accordion="collapse">
                    <div className="space-y-8">
                        <div className='rounded-2xl'>
                            <h2
                                id="accordion-collapse-heading-1"
                                className="mb-2"
                            >
                                <button
                                    type="button"
                                    onClick={() => handleOpen(1)}
                                    className={`2xl:w-[816px] xl:w-[600px] text lg:w-[500px] w-[350px] py-5 px-7 font-medium  rounded-t-2xl text-left text-gray-500 border ${open === 1 ? '' : 'rounded-t-xl'
                                        }  border-[#CACACAB2] `}
                                    data-accordion-target="#accordion-collapse-body-1"
                                    aria-expanded={open === 1}
                                    aria-controls="accordion-collapse-body-1"
                                >

                                    <div className='flex justify-between items-center'>
                                        <div className='flex  gap-7'>
                                            <BsPersonCircle className="text-2xl mt-2" />
                                            <div>
                                                <h1 className='flex items-center gap-2 2xl:text-sm text-xs'>CONTACT INFO <TiTick className="text-3xl" /></h1>
                                                <h1 className='font-bold text-black 2xl:text-sm text-xs'>Yishun +65   55 789 00</h1>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='text-center py-3 w-24 text-xs rounded-xl bg-[#F1F5F9]'>Change</button>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div

                                id="accordion-collapse-body-1"
                                className={`py-5 px-7 -mt-2 border border- rounded-b-2xl 2xl:w-[816px] xl:w-[600px] lg:w-[500px] w-[350px] border-[#CACACAB2] ${open === 1 ? '' : 'hidden'
                                    }`}
                                aria-labelledby="accordion-collapse-heading-1"
                            >
                                <div className='flex justify-between items-center w-full'>
                                    <div className='flex gap-6 items-center'>

                                        <input type="radio" className='w-6 h-6' />
                                        <h1 className='font-bold 2xl:text-md text-xs'>Yishun  |  +65 55 789 00 </h1>
                                    </div>
                                    {isOpen && (
                                        <>
                                            <div>
                                                <button className='text-center py-3 md:w-24 w-20 2xl:text-sm text-xs rounded-xl text-[#D60000] bg-[#f1c0c0]'>Delete</button>
                                            </div>
                                        </>
                                    )}
                                </div>
                                {isOpen && (
                                    <>
                                        <div className='flex gap-6 items-center'>
                                            <input type="radio" className='w-6 h-6' />
                                            <h1 className='font-bold 2xl:text-md text-xs'>Albert  |  +65 34 564 00 </h1>
                                        </div>
                                    </>
                                )}
                                {istoOpen
                                    && (
                                        <>
                                            <div className='flex md:flex-row flex-col gap-5 md:items-center mt-12'>
                                                <input type="text" placeholder='Name' className='2xl:w-72 w-40 2xl:rounded-xl rounded-lg outine-none border-2 focus:border-[#404EED] pl-7 py-3 2xl:h-12 h-10 text-xs ' />
                                                <input type="text" placeholder='Phone Number' className='2xl:w-72 w-40 2xl:rounded-xl rounded-lg outine-none border-2 focus:border-[#404EED] pl-7 py-3 2xl:h-12 h-10 text-xs ' />
                                                <button className='text-center 2xl:py-4 py-3 w-24 2xl:text-sm text-xs text-[#404EED] rounded-full bg-[#F1F5F9] ' onClick={toggleToOpen1}>Save</button><br />
                                            </div>
                                        </>
                                    )}
                                <button className='text-center 2xl:py-3 py-2 2xl:w-24 w-20 2xl:text-sm text-[12px] text-[#404EED] rounded-md bg-[#F1F5F9] 2xl:my-12 my-8' onClick={toggleToOpen}>+ Add new</button><br />
                                <button className='2xl:py-4 py-3 rounded-full text-center text-white 2xl:w-[276px] w-64 text-xs  bg-[#404EED]' onClick={() => handleOpen(2)}>Save and next to shipping</button>
                                <button className='text-center 2xl:py-4 md:mt-0 mt-5 py-3 2xl:w-28 w-24 2xl:text-sm text-xs  rounded-full bg-[#F1F5F9] ml-4'>Cancel</button>

                            </div>
                        </div>
                        {/* Repeat the above structure for the other accordion items (headings and bodies) */}
                        <div>
                            <h2
                                id="accordion-collapse-heading-1"
                                className="mb-2"
                            >
                                <button
                                    type="button"
                                    onClick={() => handleOpen(2)}
                                    className={`2xl:w-[816px] xl:w-[600px] lg:w-[500px] w-[350px] py-5 px-7 font-medium rounded-t-2xl text-left text-gray-500 border ${open === 2 ? '' : 'rounded-t-xl'
                                        }  border-[#CACACAB2] `}
                                    data-accordion-target="#accordion-collapse-body-1"
                                    aria-expanded={open === 2}
                                    aria-controls="accordion-collapse-body-1"
                                >

                                    <div className='flex justify-between items-center'>
                                        <div className='flex  gap-7'>
                                            <GrLocation className="text-2xl mt-2" />
                                            <div>
                                                <h1 className='flex items-center gap-2 2xl:text-sm text-xs '>SHIPPING ADDRESS <TiTick className="text-3xl" /></h1>
                                                <h1 className='font-bold text-black md:text-sm text-xs'>Anson, Tanjong Pagar07, 08, Singapore</h1>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='text-center py-3 w-24 text-xs rounded-md bg-[#F1F5F9]'>Change</button>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div

                                id="accordion-collapse-body-1"
                                className={`py-5 px-7 rounded-b-2xl -mt-2  border 2xl:w-[816px] xl:w-[600px] lg:w-[500px] w-[350px] border-[#CACACAB2] ${open === 2 ? '' : 'hidden'
                                    }`}
                                aria-labelledby="accordion-collapse-heading-1"
                            >
                                <div className='flex gap-6 items-center'>

                                    <input type="radio" className='w-6 h-6' />
                                    <h1 className='font-bold 2xl:text-md text-xs'>Anson, Tanjong Pagar07, 08, Singapore</h1>
                                </div>
                                {isOpen2 && (
                                    <>
                                        <div className='flex gap-5 items-center mt-12'>
                                            <input type="text" placeholder='Enter Another Adddress' className='text-xs w-72 rounded-xl outine-none border-2 focus:border-[#404EED] 2xl:pl-7 pl-3 py-3 2xl:h-12 h-10 ' />
                                            <button className='text-center 2xl:py-4 py-3 w-24 2xl:text-sm text-xs text-[#404EED] rounded-full bg-[#F1F5F9] ' onClick={toggleToOpen1}>Save</button><br />
                                        </div>
                                    </>
                                )}


                                <button className='text-center py-3 2xl:w-24 w-20 2xl:text-sm text-xs text-[#404EED] rounded-md bg-[#F1F5F9] 2xl:my-12 my-8' onClick={toggleToOpen2}>+ Add new</button><br />
                                <button className='2xl:py-4 py-3 rounded-full text-xs text-center text-white 2xl:w-[276px] w-60 bg-[#404EED]' onClick={() => handleOpen(3)}>Save and next to payment</button>
                                <button className='text-center 2xl:py-4 py-3 w-28 2xl:text-sm text-xs  rounded-full bg-[#F1F5F9] ml-4 md:mt-0 mt-5'>Cancel</button>

                            </div>
                        </div>
                        <div>
                            <h2
                                id="accordion-collapse-heading-1"
                                className="mb-2"
                            >
                                <button
                                    type="button"
                                    onClick={() => handleOpen(3)}
                                    className={`2xl:w-[816px] xl:w-[600px] lg:w-[500px] w-[350px] py-5 px-7 font-medium rounded-t-2xl text-left text-gray-500 border ${open === 3 ? '' : 'rounded-t-xl'
                                        } border-[#CACACAB2] `}
                                    data-accordion-target="#accordion-collapse-body-1"
                                    aria-expanded={open === 3}
                                    aria-controls="accordion-collapse-body-1"
                                >

                                    <div className='flex justify-between items-center'>
                                        <div className='flex  gap-7'>
                                            <BsPostcard className="text-2xl mt-2" />
                                            <div>
                                                <h1 className='flex items-center gap-2 md:text-sm text-xs'>PAYMENT METHOD <TiTick className="text-3xl" /></h1>
                                                <h1 className='font-bold text-black md:text-sm text-xs'>Stripe</h1>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='text-center py-3 w-24 text-xs rounded-md bg-[#F1F5F9]'>Change</button>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div

                                id="accordion-collapse-body-1"
                                className={`py-5 px-7 -mt-2 border rounded-b-2xl  2xl:w-[816px] xl:w-[600px] lg:w-[500px] w-[350px] border-[#CACACAB2] dark:border-gray-700 ${open === 3 ? '' : 'hidden'
                                    }`}
                                aria-labelledby="accordion-collapse-heading-1"
                            >

                                <Image src="/stripe.png" alt="stripe" width={80} height={40} />
                                    <>
                                        <div className='md:flex gap-5 md:space-y-0 space-y-5 items-center mt-10'>
                                            <div className='flex flex-col gap-3'>
                                                <label className='text-sm '>Card Number</label>
                                                <input type="text" className='2xl:w-60 w-48 h-10 text-xs rounded-xl outline-none border-2 focus:border-[#404EED]' />
                                            </div>
                                            <div className='flex flex-col gap-3'>
                                                <label className='text-sm '>Expiration</label>
                                                <input type="text" className='2xl:w-40 w-32 h-10 text-xs rounded-xl outline-none border-2 focus:border-[#404EED]' />
                                            </div>
                                            <div className='flex flex-col gap-3'>
                                                <label className='text-sm '> CVC</label>
                                                <input type="text" className='2xl:w-32 w-28 h-10 text-xs rounded-xl outline-none border-2 focus:border-[#404EED]' />
                                            </div>
                                        </div>
                                    </>

                                {/* <button className='text-center py-3 w-24 2xl:text-sm text-xs text-[#404EED] rounded-md bg-[#F1F5F9] 2xl:my-12 my-8'onClick={toggleToOpen3}>+ Add new</button><br /> */}
                                <button className='2xl:py-4 py-3 rounded-full text-center text-white 2xl:w-[276px] w-60 text-xs bg-[#404EED]  2xl:my-12 my-8' onClick={toggleToOpen3}>Save</button>
                                <button className='text-center 2xl:py-4 py-3 w-28 2xl:text-sm text-xs md:mt-0 mt-5 rounded-full bg-[#F1F5F9] ml-4'>Cancel</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutAccordian