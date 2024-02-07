"use client"
import React from 'react'
import Footer from '../../component/ProductPage/footer'
import { Navbar } from '../../component/ProductPage/navbar'
import Image from 'next/image'
import { RxCross1 } from "react-icons/rx"
import { useState } from 'react'
const Earning = () => {
  const [open, setOpen] = useState(false);

  const toggleToOpen = () => {
    console.log("hello")
    setOpen(true);
  };


  const toggleToClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <head>
        <title>Ez-Rent |  My-Earning </title>
      </head>
      <Navbar />
      <div className='2xl:w-[1300px] xl:w-[1000px] lg:w-[800px] md:mx-auto mx-5 mb-44'>
        <div className='2xl:mt-44 mt-32  lg:flex 2xl:gap-28 gap-10'>
          <div>
            <h1 className='2xl:text-3xl text-xl font-extrabold text-black'>Total Earnings</h1>
            <div className='2xl:w-[640px] xl:w-[500px] md:w-[400px] w-[350px] 2xl:p-5 p-3 mt-5 rounded-3xl border-[#CACACA] border flex justify-between items-center'>
              <div className='flex 2xl:gap-5 gap-2 items-center'>
                <Image src="/wallet.png" alt="image" width={122} height={122} className='2xl:w-[122px] 2xl:h-[122px] w-[90px] h-[90px]' />
                <div>
                  <p className='2xl:text-sm text-xs'>Total balance</p>
                  <h1 className='text-[#404EED] 2xl:text-3xl text-2xl font-bold'>$500.21</h1>
                </div>
              </div>
              <button onClick={toggleToOpen} className='2xl:w-36 w-24 2xl:py-3 py-2 2xl:text-lg text-xs text-center text-white rounded-full bg-[#404EED]'>Withdraw</button>
            </div>
          </div>
          <div>
            <h1 className='2xl:text-3xl text-xl font-extrabold lg:mt-0 mt-10 text-black'>Total Pending</h1>
            <div className='2xl:w-[549px]  xl:w-[450px] w-[350px] 2xl:p-5 p-3 mt-5 rounded-3xl border-[#CACACA] border  flex justify-between items-center'>
              <div className='flex gap-5 items-center'>
                <Image src="/wallet.png" alt="image" width={122} height={122} className='2xl:w-[122px] 2xl:h-[122px] w-[90px] h-[90px]' />
                <div>
                  <p className='2xl:text-sm text-xs'>Pending balance</p>
                  <h1 className='text-[#404EED] 2xl:text-3xl text-2xl  font-bold'>$100</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className='2xl:text-4xl text-2xl font-extrabold text-black 2xl:mt-28 mt-16'>Pending Earnings</h1>
        <div className="relative overflow-x-auto mt-10">
          <table className="w-full text-sm  bg-[#F1F5F9] border-2 text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs  text-gray-700 uppercase bg-[#F1F5F9] ">
              <tr>
                <th scope="col" className="md:pr-12 px-28 py-5">
                  Product
                </th>
                <th scope="col" className="md:px-2 pl-16 py-5">
                  Total  price
                </th>
                <th scope="col" className="md:px-16 px-16 py-5">
                  Duration
                </th>
                <th scope="col" className="md:px-2 px-28 py-5">
                  Total days
                </th>
                <th scope="col" className="md:px-10 px-28 py-5">
                  Commission
                </th>
                <th scope="col" className="md:px-6 px-28 py-5">
                  Earnings
                </th>

              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border ">
                <th scope="row" className="md:px-8 px-20 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  <div className='flex items-center  2xl:gap-5 gap-2'>
                    <Image src="/game.png" alt="image" width={50} height={50} />
                    <p className='2xl:text-md xl:text-xs text-[10px]'>Play Station 5</p>
                  </div>
                </th>
                <td className="md:px-6 px-24 py-4">
                  $10
                </td>
                <td className="md:px-4  pl-1 md:text-xs text-[12px] py-4">
                  10-10-2023 -To- 20-10-2023
                </td>
                <td className="md:px-6 pl-28 py-4">
                  4
                </td>
                <td className="md:px-16 pl-32 py-4">
                  $10
                </td>
                <td className="md:px-12 pl-32 py-4">
                  $50
                </td>
              </tr>

            </tbody>
          </table>
        </div>
        <h1 className='2xl:text-4xl text-2xl font-extrabold text-black 2xl:mt-28 mt-16'>Earning History</h1>
        <div className="relative overflow-x-auto mt-10">
          <table className="w-full text-sm  bg-[#F1F5F9] border-2 text-left rtl:text-right text-gray-500">
            <thead className="text-xs  text-gray-700 uppercase bg-[#F1F5F9] ">
              <tr>
                <th scope="col" className="md:pr-12 px-28 py-5">
                  Product
                </th>
                <th scope="col" className="md:px-2 pl-16 py-5">
                  Total  price
                </th>
                <th scope="col" className="md:px-16 px-16 py-5">
                  Duration
                </th>
                <th scope="col" className="md:px-2 px-28 py-5">
                  Total days
                </th>
                <th scope="col" className="md:px-10 px-28 py-5">
                  Commission
                </th>
                <th scope="col" className="md:px-6 px-28 py-5">
                  Earnings
                </th>

              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border ">
                <th scope="row" className="md:px-8 px-20 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  <div className='flex items-center  2xl:gap-5 gap-2'>
                    <Image src="/game.png" alt="image" width={50} height={50} />
                    <p className='2xl:text-md xl:text-xs text-[10px]'>Play Station 5</p>
                  </div>
                </th>
                <td className="md:px-6 px-24 py-4">
                  $10
                </td>
                <td className="md:px-4  pl-1 md:text-xs text-[12px] py-4">
                  10-10-2023 -To- 20-10-2023
                </td>
                <td className="md:px-6 pl-28 py-4">
                  4
                </td>
                <td className="md:px-16 pl-32 py-4">
                  $10
                </td>
                <td className="md:px-12 pl-32 py-4">
                  $50
                </td>
              </tr>

            </tbody>
          </table>
        </div>
        <h1 className='2xl:text-4xl text-2xl font-extrabold text-black 2xl:mt-28 mt-16'>Withdrawal History</h1>
        <div className="relative overflow-x-auto mt-10">
          <table className="w-full text-sm  bg-[#F1F5F9] border-2 text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs  text-gray-700 uppercase bg-[#F1F5F9] ">
              <tr>
                <th scope="col" className="md:px-6 px-28 py-5">
                  Amount
                </th>
                <th scope="col" className="md:px-6 px-28 py-5">
                  Request on
                </th>
                <th scope="col" className="md:px-10 px-28 py-5">
                  Status
                </th>
                <th scope="col" className="md:px-6 px-28 py-5">
                  Remarks
                </th>

              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border ">
                <th scope="row" className="md:px-8 px-32 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  $100
                </th>
                <td className="md:px-6 px-24 py-4">
                  23-03-2023
                </td>
                <td className="md:px-4 px-20 py-4">
                  <button className='w-28 text-xs font-bold text-center bg-[#e1e3f5]  py-2 rounded-full '><p className='text-[#404EED]'>Pending</p></button>

                </td>
                <td className="px-6 py-4">

                </td>
              </tr>
              <tr className="bg-white border ">
                <th scope="row" className="md:px-8 px-32 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  $100
                </th>
                <td className="md:px-6 px-24 py-4">
                  02-05-2023
                </td>
                <td className="md:px-4 px-20 py-4">
                  <button className='w-28 text-xs font-bold text-center text-[#D49F00] bg-[#ede6d1]   py-2 rounded-full'>In progress</button>

                </td>
                <td className="px-6 py-4">

                </td>
              </tr>
              <tr className="bg-white border ">
                <th scope="row" className="md:px-8 px-32 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  $100
                </th>
                <td className="md:px-6 px-24 py-4">
                  07-12-2023
                </td>
                <td className="md:px-4 px-20 py-4">
                  <button className='w-28 text-xs font-bold text-center  bg-[#daf5db] text-[#00B907] py-2 rounded-full'>Successful</button>

                </td>
                <td className="px-6 py-4">

                </td>
              </tr>
              <tr className="bg-white border ">
                <th scope="row" className="md:px-8 px-32 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  $100
                </th>
                <td className="md:px-6 px-24 py-4">
                  16-08-2023
                </td>
                <td className="md:px-4 px-20 py-4">
                  <button className='w-28 text-xs font-bold text-center bg-[#fae3e3] text-[#D60000] py-2 rounded-full'>Failed</button>

                </td>
                <td className="md:px-6 px-20 py-4">
                  Lorem Ipsum
                </td>
              </tr>
            </tbody>
          </table>
        </div>


      </div>
      {open && (
        <div className='fixed inset-0 bg-gray-500 bg-opacity-75 '>
          <div className='md:w-[400px] mx-10 bg-white absolute  top-[30%] md:mx-auto  right-0 left-0 rounded-3xl text-center  p-10 border border-[#CACACA]'>
            <RxCross1 className=" text-xl float-right cursor-pointer " onClick={toggleToClose} />

            <h1 className='md:text-2xl text-xl text-center font-bold mt-1 '>Withdraw</h1>
            <div className='my-5 flex justify-center gap-4 items-center'>
              <input type='text' placeholder='Enter amount you want to withdraw' className='py-3 md:w-72 w-52 md:text-sm text-[10px] rounded-xl border border-[#DEDEDE] px-2' />
              <h1 className='text-xl font-bold underline text-[#404EED] '>All</h1>
            </div>
           <button className='bg-[#404EED] py-3 text-center rounded-full text-white px-20'>Submit</button>
          </div>
        </div>)}
      <Footer />

    </div>
  )
}

export default Earning
