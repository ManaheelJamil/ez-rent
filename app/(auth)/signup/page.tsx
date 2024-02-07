"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiHide } from "react-icons/bi"
import { FcGoogle } from "react-icons/fc"
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { register } from '../../redux/Auth/authAction';
import { toast } from 'react-toastify';
import TogglePassword from "../../component/authentication/PasswordToggle"


const Signup = () => {
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false)

    const togglePasswordVisiblity = () => {
        setPasswordVisible(!passwordVisible)
    }
    const ConfirmPasswordVisiblity = () => {
        setToggleConfirmPassword(!toggleConfirmPassword)
    }
    const router = useRouter()
    const dispatch: AppDispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleSignup = () => {
        const userData = { email, name, password, confirm_password: confirmPassword, role: 'lessor' };
        dispatch(register(userData));
    };
    const registrationErrors = useSelector((state: RootState) => state.auth.registrationErrors);
    const isRegistered = useSelector((state: RootState) => state.auth.isRegistered);

    console.log(registrationErrors, 'we are here')
    useEffect(() => {
        if (isRegistered) {
            // Redirect to verification page upon successful registration
            router.push('/verification');
        }
    }, [isRegistered, router]);
    return (
        <>
            <head>
                <title>Ez-Rent | Signup</title>
            </head>
            <div className=' lg:flex 2xl:gap-52 xl:gap-32   h-screen '>

                {/* left side */}
                <div className='left-side '>
                    <Image src="/ez-rent-logo.png" alt="login-image" width={387} height={211} className='ez-rent-logo' />
                    <Image src="/login-image.png" alt="login-image" width={527.04} height={498.58} className='ez-rent-image' />
                    <p className='left-side-bottom-text'>“Rent with Ease, Anytime, Anywhere”</p>
                </div>

                {/* right side */}


                <div className='right-side-main-box'>
                    <Image src="/logo-1.png" alt="logo" width={122} height={122} className='lg:hidden block' />

                    <div className='  right-side-sub-box'>
                        <div className='mx-10'>
                            <h1 className='2xl:text-[48px] text-[36px] font-semibold text-center 2xl:-mt-5 xl:mt-0'>Signup</h1>

                            <div className=' flex items-center justify-center w-[100%]  relative 2xl:mt-10 mt-5 bg-[#F0F9FF]  2xl:h-[66px]  h-[50px] px-5 rounded-2xl'>
                                <h1 className=''><FcGoogle className="2xl:text-3xl text-2xl absolute left-3 2xl:top-4 top-3" /></h1>
                                <h1 className=' 2xl:text-[17px] text-[14px] text-center '>Continue with Google</h1>
                            </div>
                            <div className='flex  items-center 2xl:my-5 my-2'>
                                <hr className='text-[#DCDCDC]  border-1 w-[259px]' />
                                <h1 className='2xl:text-[20px] text-[16px] px-5'>OR</h1>
                                <hr className='text-[#DCDCDC]  border-1 w-[259px]' />
                            </div>
                            <label className='text-start 2xl:text-[17px] text-[14px]'>Email address</label>
                            <div className='2xl:mt-3 2xl:mb-2 mb-2 mt-1 2xl:rounded-3xl rounded-[17px] flex items-center  '>
                                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email address'
                                    className={`${registrationErrors.email ? "border-red-500" : ""} 2xl:text-[18px] text-[14px] 2xl:h-[65px] h-[44px] px-5 focus:border-[#404EED] border-2  2xl:rounded-3xl rounded-[17px]  w-[100%] outline-none`} />
                            </div>
                            {registrationErrors.email && <p className='text-red-500  float-right font-bold  text-xs'>*{registrationErrors.email}</p>}
                            <label className='text-start 2xl:text-[17px] text-[14px]'>User Name</label>
                            <div className='2xl:mt-3 mb-2 mt-1 2xl:rounded-3xl rounded-[17px] flex items-center '>
                                <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Create username'
                                    className={`${registrationErrors.username ? "border-red-500" : ""} 2xl:text-[18px] text-[14px] 2xl:h-[65px] h-[44px] px-5 focus:border-[#404EED] border-2  2xl:rounded-3xl rounded-[17px]  w-[100%] outline-none`} />
                            </div>
                            {registrationErrors.username && <p className=' text-red-500 float-right mt-[-7px] font-bold text-xs'>*{registrationErrors.username}</p>}
                            <label className='text-start 2xl:text-[17px] text-[14px] '>Create Password</label>
                            <div className=' 2xl:mt-3 mb-2 mt-1 flex justify-between relative items-center'>
                                <input type={passwordVisible ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)}
                                    className={`${registrationErrors.password ? "border-red-500" : ""} 2xl:h-[66px] h-[44px] focus:border-[#404EED] 2xl:rounded-3xl rounded-[17px] border-2 px-5 outline-none w 2xl:text-[18px] w-[100%] text-[14px]`} />
                                <TogglePassword handleClick={togglePasswordVisiblity} passwordVisible={passwordVisible} />
                            </div>
                            {registrationErrors.password && <p className='text-red-500 mt-[-7px] float-right font-bold mt-2 text-xs'>*{registrationErrors.password}</p>}

                            <label className='text-start 2xl:text-[17px] text-[14px]'>Confirm Password</label>
                            <div className=' 2xl:mt-3 mt-1 relative flex justify-between  items-center'>
                                <input type={toggleConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                                    className={`${registrationErrors.confirmPassword ? "border-red-500" : ""} 2xl:h-[66px] h-[44px] focus:border-[#404EED] 2xl:rounded-3xl rounded-[17px] border-2 px-5 outline-none w 2xl:text-[18px] w-[100%] text-[14px]`} />
                                <TogglePassword handleClick={ConfirmPasswordVisiblity} passwordVisible={toggleConfirmPassword} />
                            </div>
                            {registrationErrors.confirmPassword && <p className='text-red-500  float-right font-bold mt-2 text-xs'>*{registrationErrors.confirmPassword}</p>}

                            <button onClick={handleSignup} className='w-full 2xl:mt-8 mt-5 2xl:h-[65px] h-[45px] rounded-full text-center text-white 2xl:text-[20px] text-[14px] bg-[#0F172A]'>Signup</button>
                            <p className='2xl:text-[20px] text-[12px] text-center 2xl:mt-8 mt-2'>Already have an account?
                                <Link href="/" className='text-[#404EED] 2xl:text-[20px] text-[12px] ml-3'>Login</Link></p>
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

export default Signup