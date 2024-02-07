import React from 'react'
import { Navbar } from '../../component/ProductPage/navbar'
import Footer from '../../component/ProductPage/footer'
import Image from 'next/image'
const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className='md:mx-20 mx-5 md:my-44 my-28 lg:flex 2xl:gap-10 gap-6 items-center '>
        <div className='2xl:w-[550px] md:w-[350px] w-[270px] text-center mx-auto '>
          <Image src="/Group 240.png" alt="image" width={900} height={767} className='absolute inset-0 2xl:top-20 md:top-0 top-52 right-0 2xl:-left-20 md:-left-44' />

          <div > <div className='flex items-center md:gap-5 gap-2 md:justify-start justify-center '>
            <Image src="/hand-wave-icon.png" alt="image" width={60} height={60} className='2xl:w-[60px] 2xl:h-[60px] w-[40px] h-[40px]' />
            <h1 className='2xl:text-5xl md:text-3xl  text-2xl font-bold'>About Us.</h1>
          </div>
            <p className='2xl:text-lg text-sm text-[#313131] md:text-start text-center 2xl:font-semibold  2xl:mt-8 md:mt-5 mt-3'>Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type.</p></div>
        </div>
        <div className='flex 2xl:gap-5 gap-1 md:mt-0 mt-10 items-center justify-center'>
          <Image src="/about-image-1.png" alt="image1" width={171} height={351} className='2xl:w-[171px] 2xl:h-[351px] md:w-[130px]  w-[40px] ' />
          <Image src="/about-image-2.png" alt="image1" width={214} height={439} className='2xl:w-[214px] 2xl:h-[439px] md:w-[170px]  w-[60px]' />
          <Image src="/about-image-3.png" alt="image1" width={272} height={553} className='2xl:w-[272px] 2xl:h-[553px] md:w-[200px]  w-[70px]' />
          <Image src="/about-image-4.png" alt="image1" width={214} height={439} className='2xl:w-[214px] 2xl:h-[439px] md:w-[170px]  w-[60px]' />
          <Image src="/about-image-5.png" alt="image1" width={171} height={351} className='2xl:w-[171px] 2xl:h-[351px] md:w-[130px]  w-[40px]' />
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default AboutUs
export function generateMetadata() {
  return {
      title: "Ez-Rent | About-us "
  };
}