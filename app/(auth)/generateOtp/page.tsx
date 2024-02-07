"use client"
import React, { useState, useRef, useMemo, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AppDispatch, RootState } from '@/app/redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { sendOpt, verifyOpt } from '@/app/redux/Auth/authAction'


const GenerateOtp = () => {
  const [firstDigit, setFirstDigit] = useState('')
  const [secondDigit, setSecondDigit] = useState('')
  const [thirdDigit, setThirdDigit] = useState('')
  const [fourthDigit, setFourthDigit] = useState('')

  // useMemo will recalculate the code only when one of the digits changes
  // const code = useMemo(() => {
  //   return firstDigit + secondDigit + thirdDigit + fourthDigit;
  // }, [firstDigit, secondDigit, thirdDigit, fourthDigit]);

  let code: number  = 0;
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  let user = useSelector((state: RootState) => state.auth.user);
  let verified = useSelector((state: RootState) => state.auth.isVerified);
  const email = (user as any)?.email
  const phone = (user as any)?.phone
  // const email = "mg@gmail.com"
  // const phone = "+444444444"
  const resendVerificationCode = () => {
    const userData = {
      email: email,
      number: phone
    };
    dispatch(sendOpt(userData));
  };

  const verifyCode = () => {
    const verifyData = {
      email: email,
      code: code
    }
    dispatch(verifyOpt(verifyData))
  }
  const verifyErrors = useSelector((state: RootState) => state.auth.verifyErrors);

  useEffect(() => {
    if (verified) {
      router.push('/')
    }
  }, [verified, router]);
  const inputRefs: React.MutableRefObject<any>[] = [useRef(), useRef(), useRef(), useRef()];
  const pin = Array(4).fill("");

  const handleInputChange = (e: any, index: any) => {
    const value = e.target.value;
    if (value && value.length === e.target.maxLength) {
      if (index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
        pin[index] = value;
      } else if (inputRefs.length - 1 === index) {
        pin[index] = value;

        const concatenatedString = pin.join('');
        code =  parseInt(concatenatedString, 10);
        console.log("code", code)
          ;
      }
    }
    else {
      pin[index] = ''
    }
  };

  const handleBackspace = (e: any, index: any) => {
    if (e.keyCode === 8 && index > 0 && e.target.value === "") {
      inputRefs[index - 1].current.focus();
    }
  };
  return (

    <>
      <head>
        <title>Ez-Rent | OTP Verification</title>
      </head>
      <div className='flex flex-col lg:justify-center md:items-center  justify-between h-screen '>
        <Image src="/logo-1.png" alt="logo" width={122} height={122} className='lg:hidden block' />
        <div className='  xl:w-[360px] mx-auto md:w-[320px] w-[300px] lg:h-[400px] font-semibold  text-center'>
          <h1 className='2xl:text-[45px] xl:text-[40px] text-[33px]'>OTP Verification</h1>
          <p className=' 2xl:text-[20px]  mt-3 text-[15px]'>Enter OTP sent to number {phone}  </p>
          <div>
            <div className='flex  justify-center gap-3 mt-12'>
              {inputRefs.map((ref, index) => (
                <input
                  key={index}
                  required
                  type="number"
                  className={`focus:border-[#404EED] ${verifyErrors.code ? "border-red-500 border" : "border  "} outline-none  remove-arrow text-center 2xl:rounded-3xl rounded-2xl border-2 md:text-[32px] 2xl:w-[80px] 2xl:h-[117px] xl:w-[75px] xl:h-[105px] md:w-[67px] md:h-[100px] w-[58px] h-[88px] text-[24px] mx-auto  `} maxLength={1}
                  ref={ref}
                  onInput={(e) => handleInputChange(e, index)}
                  onKeyDown={(e) => handleBackspace(e, index)}
                  inputMode="numeric"
                />
              ))}
            </div>
            {verifyErrors.code && <p className='text-red-500 text-end font-bold mt-2 text-xs'>*{verifyErrors.code}</p>}
            <button onClick={verifyCode} className='w-full button-shadow mt-10 mx-auto xl:h-[62px] lg:h-[60px] h-[44px]  rounded-full text-center text-white lg:text-[20px] text-[14px] bg-[#0F172A]'>Verify</button>
            <p className='xl:text-[16px] text-[12px] md:mt-10 mt-5  mr-4'>Didn’t receive the OTP ? <button onClick={resendVerificationCode} className='text-[#404EED] ml-3'>Resend OTP</button> </p>
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

export default GenerateOtp
