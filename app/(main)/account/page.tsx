"use client"
import React from 'react'
import { Navbar } from '../../component/ProductPage/navbar'
import Footer from '../../component/ProductPage/footer'
import Image from 'next/image'
import { useEffect } from 'react';
import { MdVerified } from "react-icons/md"
import { useState } from "react";
import { AiTwotoneStar } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import Review from "../../component/review/reviews"
import { updateProfile, userProfile, updatePassword } from '../../redux/Auth/authAction';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/redux/store';
import { forgotPassword, } from '@/app/redux/Auth/authAction'
const Account = () => {
    const dispatch: AppDispatch = useDispatch();
    const user: any = useSelector((state: RootState) => state.auth.userProfileData)
    // console.log(user, 'user')
    const [activeTab, setActiveTab] = useState("a");
    const [isOpen, setIsOpen] = useState(false);
    const [userName, setUserName] = useState(user?.name || '')
    const [email, setEmail] = useState(user?.email || '')
    const [phone, setPhone] = useState(user?.phone || '')
    const [address, setAddress] = useState(user?.address || '')
    const [about, setAbout] = useState(user?.about || '')
    const [gender, setGender] = useState(user?.gender || 'male')
    const [file, setFile] = useState<any | null>(null)
    const [birth, setBirth] = useState<any>(user?.date_of_birth ? new Date(user.date_of_birth) : null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(user?.user_image_path || null);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    useEffect(() => {
        dispatch(userProfile())

    }, [dispatch])
    useEffect(() => {
        if (user) {
            // Update state variables when user data changes
            setUserName(user.name || '');
            setEmail(user.email || "")
            setGender(user?.gender || "male")
            setBirth(user?.date_of_birth ? new Date(user.date_of_birth) : null)
            setAddress(user?.address || '')
            setPhone(user?.phone || '')
            setAbout(user?.about || '')
            setPreviewUrl(user?.user_image_path || null)
            // Update other state variables similarly...
        }
    }, [user]);


    const handleFileChange = (event: any) => {
        const selectedFile = event.target.files?.[0];
        setFile(selectedFile);

        if (selectedFile) {
            setFile(selectedFile);
            const filePreviewUrl = URL.createObjectURL(selectedFile);
            setPreviewUrl(filePreviewUrl);
        } else {
            setFile(null);
            setPreviewUrl(null);

        }
    };
    const handleDateChange = (event: any) => {
        const value = event.target.value; // Get the value from the input field
        // Convert the input value to a Date object
        const date = new Date(value);
        setBirth(date);
    };
    const handleGenderChange = (event: any) => {
        setGender(event.target.value);
    };

    const handleProfileSubmit = () => {
        const formData = new FormData();
        formData.append('name', userName);
        formData.append('phone', phone);
        formData.append('address', address);
        formData.append('gender', gender);
        formData.append('about', about);
        formData.append('date_of_birth', birth);
        formData.append('image', file);

        dispatch(updateProfile(formData))
    }

    const [currentPassword, setCurrentPassword] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const handleChangePassword = () => {
        const data = {
            current_password: currentPassword,
            password: password,
            confirm_password: confirmPassword
        }
        dispatch(updatePassword(data))
    }
    return (
        <div>
            <head>
                <title>Ez-Rent |  Account </title>
            </head>
            <Navbar />

            <div className="2xl:w-[1000px] xl:w-[800px] lg:w-[700px] md:w-[600px] w-full mx-auto md:my-44 my-24 xl:text-sm text-[11px] font-bold md:font-medium  text-gray-500 ">
                <div className="flex  md:justify-between justify-around -mb-px">
                    <button
                        className={`className="inline-block text-blue-600 border-b-2 border-blue-600 rounded-t-xl active dark:text-blue-500 dark:border-blue-500" aria-current="page"
          `}
                        onClick={() => handleTabClick("a")}
                    >
                        Account info
                    </button>
                    <button
                        className={`className="inline-block  border-b-2 border-transparent rounded-t-xl hover:text-[#404EED] hover:border-[#404EED] " `}
                        onClick={() => handleTabClick("b")}
                    >
                        My reviews                    </button>
                    <button
                        className={`className="inline-block  border-b-2 border-transparent rounded-t-xl hover:text-[#404EED] hover:border-[#404EED] dark:hover:text-gray-300" `}
                        onClick={() => handleTabClick("c")}
                    >
                        Change password                    </button>
                </div>
                <hr className='md:mx-0 mx-4 my-6 ' />
                <div className="bg-white rounded-b-lg">
                    {activeTab === "a" &&

                        // account info
                        <p>
                            <div id="account" className='2xl:w-[1000px]  xl:w-[800px] lg:w-[710px] md:w-[600px] md:mx-auto mx-6 mt-14  font-bold'>
                                <h1 className='2xl:text-[36px] xl:text-[25px] text-[20px] text-black my-5'>Account information</h1>
                                <div className='md:flex 2xl:gap-20 gap-10 md:mt-10 mt-3'>
                                    <div className='2xl:w-36 md:w-28 w-28'>
                                        <label className="btn btn-default" htmlFor="inputFile">
                                            <input
                                                id="inputFile"
                                                type="file"
                                                onChange={handleFileChange}
                                                accept="image/*"
                                                style={{ display: 'none' }}
                                            />
                                            {
                                                previewUrl ? <img src={previewUrl} alt="Profile" className='2xl:w-[150px] 2xl:h-[150px] xl:w-[100px] xl:h-[100px] lg:w-[80px] lg:h-[80px] md:w-[80px] md:h-[80px] h-[100px] w-[100px] ' /> :
                                                    <Image src="/profile.png" alt="icon" width={150} height={150} className='2xl:w-[150px] 2xl:h-[150px] xl:w-[100px] xl:h-[100px] lg:w-[80px] lg:h-[80px] md:w-[80px] md:h-[80px] h-[100px] w-[100px] ' />

                                            }
                                        </label>
                                        <p className='flex items-center gap-2 justify-center text-[#787878] mt-2'>Verified<MdVerified className="text-[#404EED]" /></p>
                                    </div>

                                    <div className='xl:w-[650px] lg:w-[600px] md:w-[550px] md:mt-0 mt-10  text-[#313131]'>
                                        <div>
                                            <label className='2xl:text-[20px] md:font-normal xl:text-[16px] text-[14px]'>Full name</label>
                                            <div className=' items-center mt-3  2xl:h-[66px] h-[40px] xl:h-[57px]'>
                                                <div className='2xl:w-[75px] xl:w-[65px] absolute w-[55px]   2xl:h-[60px] xl:h-[45px] m-[2px] h-[30px] 2xl:rounded-l-[25px] md:rounded-l-[20px] rounded-l-[13px] flex items-center justify-center bg-[#F8F8F8]'>
                                                    <Image src="/user.png" alt='user' width={30} height={30} className='xl:w-[25px] xl:h-[25px] w-[25px] h-[25px]' />
                                                </div>
                                                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='your name' className=' outline-none border-2 pl-20 border-[#DEDEDE] focus:border-blue-600 font-light  2xl:h-[63px] xl:h-[50px] h-[35px] w-full 2xl:px-28 px-5 2xl:text-[18px] xl:text-[14px]  2xl:rounded-[25px]  md:rounded-[20px] rounded-[10px]' />

                                            </div>
                                        </div>
                                        <div className='2xl:mt-10 mt-6'>
                                            <label className='2xl:text-[20px] md:font-normal xl:text-[16px] text-[14px]'>Email</label>
                                            <div className=' items-center mt-3 2xl:h-[66px] h-[40px] xl:h-[57px]'>
                                                <div className='2xl:w-[75px] xl:w-[65px] w-[55px] absolute 2xl:h-[60px] xl:h-[45px] m-[2px] h-[30px] 2xl:rounded-l-[25px] md:rounded-l-[20px] rounded-l-[13px] flex items-center justify-center bg-[#F8F8F8]'>
                                                    <Image src="/sms.png" alt='user' width={30} height={30} className='xl:w-[25px] xl:h-[25px] w-[20px] h-[20px]' />
                                                </div>
                                                <input type="email" disabled value={email} placeholder='example@example.com' className=' outline-none border-2 pl-20 border-[#DEDEDE] focus:border-blue-600 font-light  2xl:h-[64px] xl:h-[50px] h-[35px] w-full 2xl:px-28 px-5 2xl:text-[18px] xl:text-[14px]  2xl:rounded-[25px]  md:rounded-[20px] rounded-[10px]' />

                                            </div>
                                        </div>
                                        <div className='2xl:mt-10 mt-6'>
                                            <label className='2xl:text-[20px] md:font-normal xl:text-[16px] text-[14px]'>Date of birth</label>
                                            <div className=' items-center mt-3 2xl:h-[66px] h-[40px] xl:h-[57px]'>
                                                <div className='2xl:w-[75px] xl:w-[65px] w-[55px] absolute 2xl:h-[60px] xl:h-[45px] m-[2px] h-[30px] 2xl:rounded-l-[25px] md:rounded-l-[20px] rounded-l-[13px] flex items-center justify-center bg-[#F8F8F8]'>
                                                    <Image src="/calendar.png" alt='user' width={30} height={30} className='xl:w-[25px] xl:h-[25px] w-[20px] h-[20px]' />
                                                </div>
                                                <input value={birth ? birth.toISOString().slice(0, 16) : ''} onChange={handleDateChange} type="datetime-local" className=' outline-none border-2 pl-20 border-[#DEDEDE] focus:border-blue-600  font-light 2xl:h-[64px] xl:h-[50px] h-[35px] w-full 2xl:pl-28 px-5 2xl:text-[18px] xl:text-[14px]  2xl:rounded-[25px]  md:rounded-[20px] rounded-[10px]' />

                                            </div>
                                        </div>
                                        <div className='2xl:mt-10 mt-6'>
                                            <label className='2xl:text-[20px] md:font-normal xl:text-[16px] text-[14px]'>Address</label>
                                            <div className=' items-center mt-3 2xl:h-[66px] h-[40px] xl:h-[57px]'>
                                                <div className='2xl:w-[75px] xl:w-[65px] w-[55px] absolute 2xl:h-[60px] xl:h-[45px] m-[2px] h-[30px] 2xl:rounded-l-[25px] md:rounded-l-[20px] rounded-l-[13px] flex items-center justify-center bg-[#F8F8F8]'>
                                                    <Image src="/location.png" alt='user' width={30} height={30} className='xl:w-[25px] xl:h-[25px] w-[20px] h-[20px]' />
                                                </div>
                                                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder='address.....' className=' outline-none border-2 pl-20 border-[#DEDEDE] focus:border-blue-600 font-light  2xl:h-[64px] xl:h-[50px] h-[35px] w-full 2xl:px-28 px-5 2xl:text-[18px] xl:text-[14px]  2xl:rounded-[25px]  md:rounded-[20px] rounded-[10px]' />

                                            </div>
                                        </div>
                                        <div className='2xl:mt-10 mt-6'>
                                            <label className='2xl:text-[20px] md:font-normal xl:text-[16px] text-[14px]'>Gender</label>
                                            <div className='items-center flex gap-16 h-[66px]'>
                                                <label className='flex items-center gap-2'>
                                                    <input
                                                        type="radio"
                                                        value="male"
                                                        checked={gender === 'male'}
                                                        onChange={handleGenderChange}
                                                        className='2xl:h-[30px] 2xl:w-[30px] xl:w-[20px] xl:h-[20px] px-7 text-[18px] rounded-r-[25px]'
                                                    />
                                                    Male
                                                </label>
                                                <label className='flex items-center gap-2'>
                                                    <input
                                                        type="radio"
                                                        value="female"
                                                        checked={gender === 'female'}
                                                        onChange={handleGenderChange}
                                                        className='2xl:h-[30px] 2xl:w-[30px] xl:w-[20px] xl:h-[20px] px-7 text-[18px] rounded-r-[25px]'
                                                    />
                                                    Female
                                                </label>
                                            </div>
                                        </div>
                                        <div className='2xl:mt-10 xl:mt-6 lg:mt-6 mt-2'>
                                            <label className='2xl:text-[20px] md:font-normal xl:text-[16px] text-[14px]'>Phone number</label>
                                            <div className=' items-center mt-3 2xl:h-[66px]  h-[30px] xl:h-[57px]'>
                                                <div className='2xl:w-[75px] xl:w-[65px] w-[55px] absolute 2xl:h-[60px] xl:h-[45px] m-[2px] h-[30px] 2xl:rounded-l-[25px] md:rounded-l-[20px] rounded-l-[13px] flex items-center justify-center bg-[#F8F8F8]'>
                                                    <Image src="/call-calling.png" alt='user' width={25} height={25} className='xl:w-[25px] xl:h-[25px] w-[20px] h-[20px]' />
                                                </div>
                                                <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+65 123 456 78" className=' outline-none border-2 pl-20 border-[#DEDEDE] focus:border-blue-600 font-light  2xl:h-[64px] xl:h-[50px] h-[35px] w-full 2xl:px-28 px-5 2xl:text-[18px] xl:text-[14px]  2xl:rounded-[25px]  md:rounded-[20px] rounded-[10px]' />

                                            </div>
                                        </div>
                                        <div className='2xl:mt-10 mt-6'>
                                            <label className='2xl:text-[20px] md:font-normal xl:text-[16px] text-[14px]'>About you</label>
                                            <div className=' w-full md:h-[175px] h-[100px] mt-3  text-[18px]  '>
                                                <textarea value={about} onChange={(e) => setAbout(e.target.value)} placeholder="...." className='w-full md:h-[170px] h-[95px]  outline-none border-2 pl-10 border-[#DEDEDE] focus:border-blue-600 px-7 rounded-[25px]  text-[18px] ' />
                                            </div>
                                        </div>
                                        <button onClick={handleProfileSubmit} className='md:w-52 w-32 2xl:h-16 h-12 2xl:mt-16 mt-12 md:text-[14px] text-[11px] rounded-full text-center bg-[#111827] text-white'>Update account</button>
                                    </div>
                                </div>
                            </div>
                        </p>}
                    {activeTab === "b" &&
                        // my reviews
                        <p>
                            <div className='flex justify-between  md:mt-10 mt-0 mb-5  full md:mx-auto mx-5'>
                                <div className='flex items-center lg:space-x-1'>
                                    <h1 className='2xl:text-[12px] text-[10px] text-[#22C55E]'>4.97</h1>
                                    <AiTwotoneStar className="text-[#FFC107] text-[10px]" />
                                    <AiTwotoneStar className="text-[#FFC107] text-[10px]" />
                                    <AiTwotoneStar className="text-[#FFC107] text-[10px]" />
                                    <AiTwotoneStar className="text-[#FFC107] text-[10px]" />
                                    <AiTwotoneStar className="text-[#FFC107] text-[10px]" />

                                    <h1 className='2xl:text-[12px] text-[10px] text-[#787878]'>(128 Reviews)</h1>
                                </div>
                                <div className='lg:w-32 w-24 flex justify-evenly items-center py-2 rounded-full border-2 cursor-pointer' onClick={toggleDropdown}>
                                    <Image src="/filter.png" alt="image" width="16" height="16" />
                                    <p>Sort by</p>
                                    <BsChevronDown />
                                </div>
                                {isOpen && (
                                    <div className=" absolute 2xl:right-[420px] xl:right-64 lg:right-44 md:right-32 right-0 mt-12   w-36 text-center rounded-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <a href="#" className="block px-4 pt-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                As Lesse
                                                <hr className='my-2' />
                                            </a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                As Lessor
                                            </a>


                                        </div>
                                    </div>
                                )}

                            </div>

                            <hr className='mb-20' />
                            <Review />
                        </p>
                    }
                    {activeTab === "c" &&
                        // change password
                        <p>
                            <div className='md:w-[600px] md:mx-0 mx-5 '>
                                <h1 className='2xl:text-[32px] xl:text-[25px] font-extrabold text-[20px] text-black my-5 mt-16 mb-20'>Update your password</h1>
                                <div>
                                    <label className='2xl:text-[20px] md:font-normal text-black xl:text-[16px] text-[14px]'>Current password</label>
                                    <div className='2xl:mt-5 mt-3  xl:rounded-[25px] md:rounded-[20px] rounded-[13px] flex items-center '>
                                        <input type='password' value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)}
                                            className={` 2xl:text-[18px] text-[14px] 2xl:h-[54px] h-[40px] xl:h-[55px] px-5 focus:border-[#404EED] border-2  2xl:rounded-3xl rounded-[17px]  w-[100%] outline-none`} />
                                    </div>
                                </div>
                                <div className='2xl:mt-10 mt-6'>
                                    <label className='2xl:text-[20px] md:font-normal text-black xl:text-[16px] text-[14px]'>New password</label>
                                    <div className='2xl:mt-5 mt-3  xl:rounded-[25px] md:rounded-[20px] rounded-[13px] flex items-center '>
                                        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}
                                            className={` 2xl:text-[18px] text-[14px] 2xl:h-[54px] h-[40px] xl:h-[55px] px-5 focus:border-[#404EED] border-2  2xl:rounded-3xl rounded-[17px]  w-[100%] outline-none`} />
                                    </div>
                                   
                                </div>
                                <div className='2xl:mt-10 mt-6'>
                                    <label className='2xl:text-[20px] md:font-normal text-black xl:text-[16px] text-[14px]'>Confirm password</label>
                                    <div className='2xl:mt-5 mt-3  xl:rounded-[25px] md:rounded-[20px] rounded-[13px] flex items-center '>
                                        <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} 
                                            className={` 2xl:text-[18px] text-[14px] 2xl:h-[54px] h-[40px] xl:h-[55px] px-5 focus:border-[#404EED] border-2  2xl:rounded-3xl rounded-[17px]  w-[100%] outline-none`} />
                                    </div>
                                </div>
                                <button onClick={handleChangePassword} className='md:w-52 w-32 2xl:h-16 h-12 2xl:mt-16 mt-12 md:text-[14px] text-[11px] rounded-full text-center bg-[#111827] text-white'>Update password</button>
                            </div>
                        </p>}
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Account