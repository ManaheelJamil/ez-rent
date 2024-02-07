import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '../../component/ProductPage/navbar'
import Footer from '../../component/ProductPage/footer'
const OrderConfirm = () => {
    return (
        <div>
            <head>
        <title>Ez-Rent |  Order-Confirmed </title>
      </head>
            <Navbar />
            <div className='2xl:w-[485px] md:w-[350px] py-10  space-y-6 2xl:my-52 my-32 border-[#CACACA] border 2xl:p-10 p-5 rounded-2xl text-center md:mx-auto mx-5 '>
                <Image src="/tick-circle.png" alt="tick" width={ 132} height={132 } className='mx-auto 2xl:w-[132px] 2xl:h-[132px] w-[100px] h-[100px]'/>
                <h1 className='text-extrabold 2xl:text-xl text-xl text-[#4CAF50]'>Order Confirmed!</h1>
                <p className='2xl:text-md text-sm text-[#787878]'>Order Number: #WU3746HGG12</p>
                <p className='2xl:w-72 w-64  mx-auto text-[#313131] 2xl:text-sm text-xs'>Thank you for your order! We'll send you
                    a confirmation email with all the details</p>
               <Link href="/product">
               <button className='text-white mt-7 text-center 2xl:w-72 but-shade md:w-64 w-56 mx-auto rounded-full md:py-4 py-3 md:text-md text-xs bg-[#404EED]'>Continue shopping</button>

               </Link>
            </div>
            <Footer/>
        </div>
    )
}

export default OrderConfirm
