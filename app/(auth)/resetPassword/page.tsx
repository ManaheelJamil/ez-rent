"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiHide } from "react-icons/bi"
import { FcGoogle } from "react-icons/fc"
import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/redux/store';
import { resetPassword } from '@/app/redux/Auth/authAction';

const ResetPassword = () => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const searchParams = useSearchParams();
    const user_id = searchParams.get('user_id')
    const token = searchParams.get('token')
    const router = useRouter();
    const dispatch: AppDispatch = useDispatch();
    let success = useSelector((state: RootState) => state.auth.success);
    const updatePassword = () => {
        const updatePasswordData = {
            user_id: user_id,
            token: token,
            password: password,
            confirm_password: confirmPassword
        }
        dispatch(resetPassword(updatePasswordData))
    }
    const resetErrors = useSelector((state: RootState) => state.auth.resetErrors);


    useEffect(() => {
        if (success) {
            router.push('/')
        }
    }, [success, router]);
    return (
<>
<head>
    <title>
    Ez-Rent | ResetPassword
    </title>
</head>
        <div className=' lg:flex 2xl:gap-60 xl:gap-32   h-screen '>
            <div className='left-side '>
                <Image src="/ez-rent-logo.png" alt="login-image" width={387} height={211} className='ez-rent-logo' />
                <Image src="/resetPassword.png" alt="login-image" width={527.04} height={498.58} className='ez-rent-image' />
            </div>
            <div className='right-side-main-box'>
                <div className='right-side-sub-box '>
                    <Image src="/logo-1.png" alt="logo" width={122} height={122} className='lg:hidden block' />
                    <div className='mx-10 '>
                        <h1 className=' xl:text-[2.7vw] lg:text-[3.3vw] text-[7.5vw]  lg:mb-10  mb-9 font-bold text-center'>Reset Your Password</h1>
                        <label className='text-start 2xl:text-[20px] text-[16px]'>Create Password</label>
                        <div className='2xl:mt-3 mt-2 mb-5 flex justify-between relative items-center'>
                            <input type='password' onChange={(e) => setPassword(e.target.value)}
                                className={`${resetErrors.password ? "border-red-500" : ""}2xl:h-[66px] h-[46px] focus:border-[#404EED] 2xl:rounded-3xl rounded-[17px] border-2 px-5 outline-none w 2xl:text-[18px] w-[100%] text-[14px]`} />
                            <BiHide className="2xl:text-[30px] text-[#404EED] lg:text-[18px] text-[14px] absolute right-5   " />
                        </div>
                        {resetErrors.password && <p className='text-red-500 float-right mt-2 font-bold text-xs'>*{resetErrors.password}</p>}

                        <label className='text-start 2xl:text-[20px] text-[16px]'>Confirm Password</label>
                        <div className='2xl:mt-3 mt-2  flex justify-between relative items-center'>
                            <input type='password' onChange={(e) => setConfirmPassword(e.target.value)}
                                className={`${resetErrors.confirmPassword ? "border-red-500" : ""}2xl:h-[66px] h-[46px] focus:border-[#404EED] 2xl:rounded-3xl rounded-[17px] border-2 px-5 outline-none w 2xl:text-[18px] w-[100%] text-[14px]`} />
                            <BiHide className="2xl:text-[30px]  text-[#404EED] lg:text-[18px] absolute right-5 text-[14px] " />
                        </div>
                        {resetErrors.confirmPassword && <p className='text-red-500 float-right mt-2 font-bold  text-xs'>*{resetErrors.confirmPassword}</p>}

                        <button onClick={updatePassword} className='w-full 2xl:mt-9 mt-8 2xl:h-[65px] h-[40px] rounded-full text-center text-white 2xl:text-[20px] text-[14px] bg-[#0F172A]'>Update</button>

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

export default ResetPassword