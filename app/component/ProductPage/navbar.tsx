"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react';
import { AiOutlineHeart } from "react-icons/ai"
import { FiMessageSquare } from "react-icons/fi"
import { BsPersonSquare } from "react-icons/bs"
import { AiOutlineMenu } from "react-icons/ai"
import { RxCross2 } from "react-icons/rx"
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { logout } from '../../redux/Auth/authReducer';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'

export const Navbar = () => {
  const navlinks = [
    {
      name: "Home",
      link: "/home"
    },
    {
      name: "About Us",
      link: "/about-us"
    },
    {
      name: "Products",
      link: "/product"
    },
    {
      name: "Contact us",
      link: "/contactus"
    },
    {
      name: "FAQ",
      link: "/faq"
    }
  ]
  const icon = [
    {
      name: "My-borrow",
      link: "/my-bookmark",
      src: "/heart.png"
    },
    {
      name: "Chat",
      link: "/chat",
      src: "/message-2.png"
    }
  ]
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState<any>('')
  const toggleDropdown = () => {
    setOpen(!open);
  };
  const toggleToOpen = () => {
    setIsOpen(true);
  };

  const toggleToClose = () => {
    setIsOpen(false);
  };
  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logout());
    router.push('/');
  };

  const pathname = usePathname()
  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      const decodeUser = JSON.parse(user)
      setLoggedInUser(decodeUser)
    }
  }, [])
  return (
    <>

      <div className='navbar text-[#313131]  z-40   border-y-[#CACACA] 2xl:h-[88px] h-[66px]'>

        {/* menu bar icon */}


        <div className="lg:hidden block" onClick={toggleToOpen}>
          <AiOutlineMenu className="w-[28px] h-[40px]  " />
        </div>


        {/* desktop-navbar */}


        <Link href="/home">
          <div>
            <Image src="/logo-1.png" width={154} height={154} alt="image-logo" priority className='w-[102px] md:ml-0 ml-10 h-[102px] 2xl:w-[143px] 2xl:h-[154px] ' />
          </div>
        </Link>

        <div className='flex items-center list-none space-x-10 text-[14px] xl:text-[14px] 2xl:text-[16px]'>
          {navlinks.map(({ link, name }) => (
            <Link
              key={name}
              href={link} className={`${pathname === link ? "underline underline-offset-8 font-extrabold text-[#404EED]" : ""} lg:block hidden `}>{name}</Link>
          ))}
        </div>
        <div className='flex items-center  2xl:space-x-10 md:space-x-12 space-x-5'>
          {icon.map(({ link, name, src }) => (
            <>
              <Link
                key={name}
                href={link}
              >
                <Image src={src} alt="image" width={24} height={24}
                  className={`${pathname === link ? " border-t-transparent border-x-transparent  border-2 border-b-[#404EED]  " : ""} font-medium cursor-pointer 2xl:text-2xl xl:w-[23px] xl:h-[23px] text-lg`}
                />

              </Link>

            </>
          ))}
          <Image src="/user-square.png" alt="image" width={24} height={24} onClick={toggleDropdown}
            className={`${open ? " border-t-transparent border-x-transparent  border-2 border-b-[#404EED]  " : ""}font-medium cursor-pointer 2xl:text-2xl xl:w-[23px] xl:h-[26px] text-lg`}
          />

        </div>
        {open && (
          <div className=' md:w-[190px] w-[150px] px-6 2xl:py-5 py-5 rounded-[24px] absolute   right-0 top-0 2xl:mr-44 2xl:mt-24 xl:m-20 md:m-24 mt-16 mr-5 bg-white box-shadow'>
            <Link href="/account"><div className='flex items-center md:gap-4 gap-2 '>
              <Image src="/icon.png" alt="icon" width={50} height={50} />
              <div>
                <h1 title={loggedInUser?.name} className='font-bold text-[14px]'>{loggedInUser?.name.substring(0, 8).split(' ')
                  .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ')}</h1>
                <p className='text-[10px]'>{loggedInUser?.address}</p>
              </div>

            </div>
            </Link>
            <hr className='border border-[rgb(139,139,139)] 2xl:mt-5 mt-5 ' />
            <div className='flex  md:gap-5 gap-3 items-center mt-5'>
              <Image src="/icon-1.png" alt="icon" width={20} height={20} />
              <p className='2xl:text-[14px] text-[12px]'><Link href="/my-listening">My Listing</Link></p>
            </div>
            <div className='flex   md:gap-5 gap-3 items-center mt-5'>
              <Image src="/dollar-circle.png" alt="icon" width={20} height={20} />
              <p className='2xl:text-[14px] text-[12px]'><Link href="/my-earning">My Earnings</Link></p>
            </div>
            <div className='flex  md:gap-5 gap-3 items-center mt-5'>
              <Image src="/receipt-item.png" alt="icon" width={20} height={20} />
              <p className='2xl:text-[14px] text-[12px]'><Link href="/my-rent">My Rent</Link></p>
            </div>
            <div className='flex md:gap-5 gap-3 items-center mt-5'>
              <Image src="/repeat-circle.png" alt="icon" width={20} height={20} />
              <p className='2xl:text-[14px] text-[12px]'><Link href="/my-borrow">My Borrow</Link></p>
            </div>
            <hr className='border border-[rgb(139,139,139)]  my-4 ' />
            <div onClick={handleLogout} className='flex  md:gap-5 gap-3 items-center cursor-pointer'>
              <Image src="/export.png" alt="icon" width={20} height={20} />
              <p className='2xl:text-[14px] text-[12px]'>Log out</p>
            </div>
          </div>)}
        {/* mobile navbar */}


        {isOpen && (
          <div className='mobile-navbar h-screen top-[1px] w-[100%] bg-gray-300 '>
            <div>
              <div className='w-full px-[20px] flex justify-end' onClick={toggleToClose}>
                <RxCross2 className="text-2xl mt-10" />
              </div>

              <h1 className='font-semibold text-[40px] px-[20px]'>Ez Rent</h1>
              <p className='text-[12px] px-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis consectetur adipiscing.</p>
              <hr className='px-20 my-7 mx-[20px]' />
              <div className='text-black px-[20px] flex text-[16px] space-y-3 flex-col'>
                <Link href="/home" >Home</Link>
                <Link href="/about-us" >About Us </Link>
                <Link href="/product" >Product</Link>
                <Link href="/contactus" >Contact Us</Link>
                <Link href="/faq" >FAQ</Link>
              </div>
              <hr className='mt-10 mx-[20px]' />
            </div>
            <div className='bg-[#404EED] text-center py-4 text-white  text-sm '>Developed by
              <a href='https://mayonity.com/'>Mayonity</a>
              <hr className='w-44 border-2 mx-auto' />
            </div>

          </div>
        )}

      </div>


    </>
  )
}
