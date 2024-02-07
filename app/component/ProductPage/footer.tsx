import Link from 'next/link'
import React from 'react'
import {MdOutlineMailOutline} from "react-icons/md"
import {PiPhoneCallBold} from "react-icons/pi"
const Footer = () => {
    return (
        <div className='border-t-[#787878] border w-full'>

            <div className=' w-[80%] md:mx-auto mx-10 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 md:gap-20 gap-2 mt-20'>
                <div className='col-span-2'>
                    <h1 className='text-[35px] font-bold'>Ez Rent</h1>
                    <p className='md:w-96 text-[14px] md:mt-5 mt-3'>Yorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Etiam eu turpis
                        consectetur adipiscing.</p>
                </div>
                <div>
                    <h1 className=' mt-3 font-semibold text-[16px]'>Products</h1>
                    <ul className='space-y-2 mt-4 text-[14px]'>
                        <li><Link href="/product">All products</Link></li>
                        <li><Link href="/category">All categories</Link></li>
                        <li><Link href="/home#trending">Trending products</Link></li>
                        <li><Link href="/home#additem">New arrivals</Link></li>
                    </ul>
                </div>
                <div>
                <h1 className='mt-3 font-semibold text-[16px]'>Important links </h1>
                    <ul className='space-y-2 mt-4 text-[14px]'>
                        <li><Link href="/about-us">About us</Link></li>
                        <li><Link href="/contactus">Contact us</Link></li>
                        <li><Link href="/termsCondition">Terms & Conditions</Link></li>
                        <li><Link href="/privacy">Privacy policy</Link></li>
                    </ul>
                </div>
                <div>
                    <h1 className=' font-bold text-[25px]'>Contact</h1>
                    <div className='flex items-center gap-2 '>
                        <MdOutlineMailOutline className="text-3xl"/>
                        <p className='text-[12px]'>ezRent@gmail.com</p>
                    </div>
                    <div className='flex gap-2 mt-2 items-center'>
                        <PiPhoneCallBold className="text-3xl"/>
                        <p className='text-[12px]'>123 - 456 - 789 -0</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#404EED] text-[15px] text-center py-2 text-white mt-20'>Developed by <a href='https://mayonity.com/'>Mayonity</a></div>
        </div>
    )
}

export default Footer