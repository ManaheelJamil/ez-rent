"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/redux/store';
import { sendOpt } from '@/app/redux/Auth/authAction';


const Verification = () => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState('+65');
    const [phoneNumberError, setPhoneNumberError] = useState('');

    const router = useRouter();
    const dispatch: AppDispatch = useDispatch();
    let user = useSelector((state: RootState) => state.auth.user);
    let success = useSelector((state: RootState) => state.auth.success);
    const email = (user as any)?.email
    // const email = 'nay@gmail.com'
    const fullPhoneNumber = `${countryCode}${phoneNumber}`;

    const validatePhoneNumber = (fullNumber: any) => {
        const fullPhoneNumberPattern = /^\+65\d{8}$/;
        return fullPhoneNumberPattern.test(fullNumber);
    }


    const sendVerificationCode = () => {
        if (!validatePhoneNumber(fullPhoneNumber)) {
            setPhoneNumberError('Your phone number is invalid');
            return;
        }
        setPhoneNumberError('');
        const userData = {
            email: email,
            number: fullPhoneNumber
        };


        dispatch(sendOpt(userData));
    };

    useEffect(() => {
        if (success) {
            router.push('/generateOtp')
        }
    }, [success, router]);
    return (
        <>
            <head>
                <title>Ez-Rent | Phone Verification</title>
            </head>
            <div className='flex flex-col lg:justify-center md:items-center  justify-between h-screen '>
                <Image src="/logo-1.png" alt="logo" width={122} height={122} className='lg:hidden block' />
                <div className='2xl:w-[590px] lg:w-[500px] md:w-[500px] lg:h-[400px] font-semibold  text-center'>
                    <h1 className='2xl:text-[45px] xl:text-[32px] lg:text-[31px] md:text-[28px] text-[20px]'>Verify your Phone Number</h1>
                    <p className='2xl:w-96 xl:w-56 lg:w-56 md:w-52 w-44 mx-auto 2xl:text-[19px] xl:text-[12px] md:text-[11px] text-[10px] mt-2 lg:text-[12.5px]'>A 4 digit OTP will be sent via SMS to
                        verify your mobile number!
                    </p>
                    <div>
                        <div className='flex  justify-center 2xl:gap-5 gap-3  2xl:mt-16 md:mt-9 xl:mt-10 lg:mt-10 mt-7'>
                            <Image src="/Singapore.png" alt="singapore-image" width={58} height={44} className='2xl:w-24 2xl:h-20 xl:h-16 xl:w-20 h-12 md:rounded-2xl rounded-xl border-2' />
                            <div className='flex items-center 2xl:h-20 md:h-16 h-12   md:rounded-2xl rounded-xl  focus:border-[#404EED] 2xl:w-[430px] md:w-64 xl:w-72 lg:w-72 w-44 border-2 md:px-5 px-2'>
                                <p className='text-xs md:text-xl '>+65</p>
                                <hr className='md:w-10 w-6 rotate-90 border-1 border-[#404EED] ' />
                                <input value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)} type='text' placeholder='Enter your phone number'
                                    className={`${phoneNumberError ? "border-red-500" : ""}  text-[10px] xl:text-xl xl:w-44 2xl:w-72 md:w-64 lg:w-60 text-[8px]  outline-none`} />
                            </div>
                        </div>
                        {phoneNumberError && <p className='text-red-500 mt-2 font-bold text-xs'>*{phoneNumberError}</p>}
                        <button onClick={sendVerificationCode} className='lg:w-[350px] md:w-[320px] xl:w-[380px] w-[230px] 2xl:w-[545px] button-shadow 2xl:mt-12 xl:mt-5 lg:mt-8 md:mt-7 mt-4 2xl:h-[70px] xl:h-[50px] lg:h-[45px] md:h-[43px] h-[40px]  rounded-full text-center text-white 2xl:text-[24px] xl:text-[16px] lg:text-[14px] text-[12px] md:text-[13px] bg-[#0F172A]'>
                            {/* <Link href={"/generateOtp"}>Generate OTP</Link></button> */}
                            Generate OTP</button>
                        <p className='2xl:text-[16px] text-[12px] mt-5 text-[#404EED]'><Link href="/">Skip For Now</Link></p>
                        <div></div>
                    </div>
                </div>
                <div className='bottom-bar'>Developed by
                    <a href='https://mayonity.com/'>Mayonity</a>
                    <hr className='w-36 border mx-auto' />
                </div>
            </div>
        </>

    )
}

export default Verification
