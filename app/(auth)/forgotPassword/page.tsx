"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiHide } from "react-icons/bi"
import { FcGoogle } from "react-icons/fc"
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/redux/store';
import { forgotPassword } from '@/app/redux/Auth/authAction'

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const router = useRouter();
    const dispatch: AppDispatch = useDispatch();
    let user = useSelector((state: RootState) => state.auth.user);
    let isMailSend = useSelector((state: RootState) => state.auth.isMailSend);
    const sendEmailForReset = () => {
        const mailData = {
            email: email
        }
        dispatch(forgotPassword(mailData))
    }
    const forgotErrors = useSelector((state: RootState) => state.auth.forgotErrors);

    return (
        <>
<head>
    <title>
    Ez-Rent | ForgotPassword
    </title>
</head>
        <div className=' lg:flex 2xl:gap-60 xl:gap-32   h-screen '>

            {/* left side */}
            <div className='left-side '>
                <Image src="/ez-rent-logo.png" alt="login-image" width={387} height={211} className='ez-rent-logo' />
                <Image src="/forgot-password.png" alt="login-image" width={527.04} height={498.58} className='ez-rent-image' />
            </div>

            {/* right side  */}
            <div className='right-side-main-box'>
                <div className='right-side-sub-box '>
                    <Image src="/logo-1.png" alt="logo" width={122} height={122} className='lg:hidden block' />
                    <div className='mx-7 '>
                        <h1 className='2xl:text-[55px] xl:text-[40px] md:text-[42px] text-[9.9vw] font-bold text-center'>Forgot Password</h1>
                        <h1 className='2xl:text-[18px] xl:text-[13px] md:text-[10px] text-[10px] font-[400px] text-center md:mb-12 mb-8 2xl:mb-16 mt-2'>Enter Your email to reset your password</h1>
                        {
                                    isMailSend && 
                        <div className='bg-[#ECFBED] 2xl:w-[450px] md:w-[350px] mx-auto rounded-xl border-none 2xl:p-5 p-2 2xl:mb-14 mb-8'>
                           <div className='flex items-center 2xl:gap-5 gap-5'>
                           <Image src="/tick-circle.png" alt="image" width={66} height={66} />
                            <div>
                                 <p className='2xl:text-xs text-[10px] text-[#787878]'>
                                    `We have sent an email to {email} &nbsp;
                                    Click the link in the email to reset your password.`
                                </p>
                               
                              
                            </div>
                           </div>
                        </div>
                         }
                        <label className='text-start  2xl:text-[20px] md:text-[16px] text-[13px] '>Email address</label>
                        <div className='2xl:mt-3 mt-1  2xl:rounded-3xl rounded-[17px] flex items-center'>
                            <input type='text' onChange={(e) => setEmail(e.target.value)} placeholder='example@example.com'
                             className={` ${forgotErrors.email ? "border-red-500":" "} 2xl:text-[18px] text-[14px] 2xl:h-[65px] h-[46px] px-5 focus:border-[#404EED] border  2xl:rounded-3xl rounded-[17px]  w-[100%] outline-none`} />
                        </div>
                        {forgotErrors.email && <p className='text-red-500 font-bold float-right mt-2 text-xs'>*{forgotErrors.email}</p>}

                        <button onClick={sendEmailForReset} className='w-full  2xl:mt-10 button-shadow mt-7 2xl:h-[65px] md:h-[45px] h-[40px] rounded-full text-center text-white 2xl:text-[20px] text-[14px] bg-[#0F172A]'>Continue</button>
                        <p className='2xl:text-[20px] text-[14px] text-center 2xl:mt-6 mt-6'>Go back for
                            <Link href={"/"} className='text-[#404EED] 2xl:text-[20px] text-[14px] mx-2'>Login /</Link>
                            <Link href={"./signup"} className='text-[#404EED] 2xl:text-[20px] text-[14px] '>Signup</Link>
                        </p>
                    </div>
                    <div className='bottom-bar'>Developed by
                        <a href='https://mayonity.com/'>Mayonity</a>
                        <hr className='w-36 border mx-auto' />
                    </div>
                </div>
            </div>
        </div>

</>
    )
}

export default ForgotPassword
