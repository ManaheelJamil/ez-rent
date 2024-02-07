import React from 'react'
import { Navbar } from '../../component/ProductPage/navbar'
import { BiPhoneCall } from "react-icons/bi"
import { HiOutlineMail } from "react-icons/hi"
import Footer from '../../component/ProductPage/footer'
import { BiSolidBuildings } from "react-icons/bi"
const Contact = () => {
    return (

        <>
        <head>
        <title>Ez-Rent |  Contact-us </title>
      </head>
            <Navbar />
            <div className='2xl:mt-20 mt-10'>
                <div className='md:w-[900px] md:mx-auto mx-5  py-20'>
                    <h1 className='2xl:text-4xl text-3xl font-bold text-center'>Contact Us</h1>
                    <div className='md:flex gap-10 mt-20'>
                        <div className='2xl:mt-20 md:block hidden space-y-10 '>
                            <div className='2xl:w-[450px] w-[400px] 2xl:h-20 h-12  gap-10  p-5'>
                                <div className='flex items-center gap-2'>
                                    <BiPhoneCall className="2xl:text-xl text-lg mt-2" />
                                    <h1 className='font-bold 2xl:text-md text-sm mt-2'>PHONE</h1>
                                </div>
                                <p className='text-xs mt-2 text-[#787878]'>000-123-456-7890</p>
                            </div>
                            <div className='2xl:w-[450px] w-[400px] 2xl:h-20 h-12 gap-10  p-5'>
                                <div className='flex items-center gap-2'>
                                    <HiOutlineMail className="text-xl mt-2" />
                                    <h1 className='font-bold 2xl:text-md text-sm mt-2'>EMAIL</h1>
                                </div>
                                <p className='2xl:text-sm text-xs mt-2 text-[#787878]'>ezrent@gmail.com</p>
                            </div>
                            <div className='2xl:w-[450px] w-[380px] 2xl:h-20 h-12 gap-10  p-5'>
                                <div className='flex items-center gap-2'>
                                    <BiSolidBuildings className="text-xl mt-2" />
                                    <h1 className='font-bold 2xl:text-md text-sm mt-2'>Address</h1>
                                </div>
                                <p className='2xl:text-sm text-xs mt-2 text-[#787878]'>Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry.</p>
                            </div>
                        </div>
                        <form className='flex flex-col md:mt-0 -mt-10 '>
                            <label htmlFor="firstname" className='text-xs font-bold'>Full name*</label>
                            <div className='mt-2'>
                                <input aria-label="firstname" type='text' placeholder="john" className='2xl:rounded-2xl xl:rounded-xl rounded-lg  py-2 border-2 focus:border-[#404EED] outline-none  text-sm md:w-[400px]   2xl:p-3 px-4 my-1  shades' />
                            </div>
                            <label htmlFor="last name" className='mt-6 text-xs font-bold' >Email address*</label>

                            <div className='mt-2'>
                                <input aria-label="last name" type='text' placeholder="john@gmail.com" className='2xl:rounded-2xl xl:rounded-xl rounded-lg  py-2 border-2 focus:border-[#404EED] outline-none  text-sm md:w-[400px]   2xl:p-3 px-4 my-1  shades' />
                            </div>
                            <label htmlFor="email" className='mt-6 text-xs font-bold'>Phone Number*</label>
                            <div className='mt-2'>
                                <input aria-label="email" type='text' placeholder="12345678" className='2xl:rounded-2xl xl:rounded-xl rounded-lg  py-2 border-2 focus:border-[#404EED] outline-none  text-sm md:w-[400px]   2xl:p-3 px-4 my-1  shades' />
                            </div>

                            <label htmlFor="text" className='mt-6 text-xs font-bold'>Message*</label>
                            <div className=' mt-2'>
                                <textarea aria-label="text" placeholder='Hello,How are you?' className='text-sm  h-44 rounded-2xl  p-4  shades w-full outline-none border-2 focus:border-[#404EED] ' ></textarea>
                            </div>
                            <button className='bg-[#111827] rounded-full mt-5 2xl:w-52 w-44 2xl:text-xl text-xs  text-white 2xl:py-4 md:py-3 py-4'>Send message</button>
                        </form>
                    </div>
                </div>
            </div>
            <hr className='md:hidden block border-2' />
            <Footer />
        </>
    )
}

export default Contact
export function generateMetadata() {
    return {
        title: "Ez-Rent | Contact-us "
    };
  }