"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiHide } from "react-icons/bi"
import { FcGoogle } from "react-icons/fc"
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './redux/store';
import { login } from './redux/Auth/authAction';
import PasswordToggle from "../app/component/authentication/PasswordToggle"


const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false)

    const togglePasswordVisiblity = () => {
        setPasswordVisible(!passwordVisible)
    }
    const router = useRouter();
    const dispatch: AppDispatch = useDispatch();
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handlers for input changes
    const handleEmailChange = (e: any) => setEmail(e.target.value);
    const handlePasswordChange = (e: any) => setPassword(e.target.value);

    const handleLogin = () => {
        dispatch(login({ email, password })) // for dispatch  

    };
    const loginErrors = useSelector((state: RootState) => state.auth.loginErrors);
    useEffect(() => {
        if (isLoggedIn) {
            router.push('/home');
        }
    }, [isLoggedIn, router]);
    return (
        <div className=' lg:flex 2xl:gap-44 xl:gap-32   h-screen '>
            <div className='left-side '>
                <Image src="/ez-rent-logo.png" alt="login-image" width={387} height={200} className='ez-rent-logo' />
                <Image src="/login-image.png" alt="login-image" width={527.04} height={498.58} className='ez-rent-image' />
                <p className='left-side-bottom-text'>“Rent with Ease, Anytime, Anywhere”</p>
            </div>
            <div className='right-side-main-box'>
                <Image src="/logo-1.png" alt="logo" width={122} height={122} className='lg:hidden block' />
                <div className='right-side-sub-box '>
                    <div className='mx-7 '>
                        <h1 className='2xl:text-[48px] text-[40px] font-semibold text-center'>Login</h1>

                        <div className=' flex items-center justify-center w-[100%]  relative 2xl:mt-10 mt-5 bg-[#F0F9FF]  2xl:h-[66px]  h-[50px] px-5 rounded-2xl'>
                                <h1 className=''><FcGoogle className="2xl:text-3xl text-2xl absolute left-3 2xl:top-4 top-3" /></h1>
                                <h1 className=' 2xl:text-[17px] text-[14px] text-center '>Continue with Google</h1>
                            </div>

                        <div className='flex  items-center 2xl:my-10 my-5'>
                            <hr className='text-[#DCDCDC] border border-1 w-[259px]' />
                            <h1 className='2xl:text-[20px] text-[16px] px-5'>OR</h1>
                            <hr className='text-[#DCDCDC] border border-1 w-[259px]' />
                        </div>
                        <label className='text-start 2xl:text-[20px] text-[16px]'>Email address</label>
                        <div className='2xl:mt-5 mt-3  2xl:rounded-3xl rounded-[17px] flex items-center '>
                            <input type='text' value={email} onChange={handleEmailChange} placeholder='Enter Your Email '
                                className={`${loginErrors.email ? "border-red-500" : " "} 2xl:text-[18px] text-[14px] 2xl:h-[65px] h-[48px] px-5 focus:border-[#404EED] border-2  2xl:rounded-3xl rounded-[17px]  w-[100%] outline-none`} />
                        </div>
                        {loginErrors.email && <p className='text-red-500 float-right font-bold mt-2 text-xs'>*{loginErrors.email}</p>}
                        <div className='flex justify-between  2xl:mt-8 mt-8' >
                            <label className=' 2xl:text-[20px] text-[16px]'>Password</label>
                            <label className=' 2xl:text-[18px] text-[14px] bg-white text-[#404EED]'>
                                <Link href="/forgotPassword">Forgot password?</Link>
                            </label>
                        </div>
                        <div className=' relative 2xl:mt-5 mt-3   flex justify-between  items-center'>
                            <input type={passwordVisible ? "text" : "password"} value={password}
                                onChange={handlePasswordChange}
                                placeholder='Enter Your Password'
                                className={`${loginErrors.password ? "border-red-500" : " "} 2xl:h-[66px] h-[46px] focus:border-[#404EED] 2xl:rounded-3xl rounded-[17px] border-2 px-5 outline-none w 2xl:text-[18px] w-[100%] text-[14px]`} />
                            <PasswordToggle handleClick={togglePasswordVisiblity} passwordVisible={passwordVisible} /></div>
                        {loginErrors.password && <p className='text-red-500   float-right font-bold mt-2 text-xs'>*{loginErrors.password}</p>}
                        <button onClick={handleLogin} className='w-full 2xl:mt-6 mt-5 2xl:h-[65px] h-[45px] rounded-full text-center text-white 2xl:text-[20px] text-[14px] bg-[#0F172A]'>Login</button>
                        <p className='2xl:text-[20px] text-[12px] text-center 2xl:mt-10 mt-3'>New User?
                            <Link href={"./signup"} className='text-[#404EED] 2xl:text-[20px] text-[12px] ml-3'>Create an account</Link></p>
                    </div>
                    <div className='bottom-bar'>Developed by
                        <a href='https://mayonity.com/'>Mayonity</a>
                        <hr className='w-36 border mx-auto' />
                    </div>
                </div>
            </div>
        </div >


    )
}

export default Login

