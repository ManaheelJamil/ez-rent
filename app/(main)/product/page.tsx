"use client";
import { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci'
import Image from 'next/image'
import Products from '../../component/ProductPage/product-detail/product-detail'
import Categories from '../../component/ProductPage/categories'
import Pricerange from '../../component/ProductPage/pricerange'
import SortOrder from '../../component/ProductPage/sortorder'
import { Navbar } from '../../component/ProductPage/navbar'
import { RxCross1 } from "react-icons/rx"
import Footer from '../../component/ProductPage/footer'
import { AppDispatch, RootState } from '@/app/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { showCategories } from '@/app/redux/Category/categoryAction';
const ProductPage = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleToOpen1 = () => {
        console.log("hello")
        setIsOpen(true);
    };


    const toggleToClose1 = () => {
        setIsOpen(false);
    };
    const [open, setOpen] = useState(false);

    const toggleToOpen2 = () => {
        console.log("hello")
        setOpen(true);
    };


    const toggleToClose2 = () => {
        setOpen(false);
    };
    const [istoOpen, setIstoOpen] = useState(false);
    const toggleToOpen3 = () => {
        console.log("hello")
        setIstoOpen(true);
    };


    const toggleToClose3 = () => {
        setIstoOpen(false);
    };
    const dispatch: AppDispatch = useDispatch();
    const categories = useSelector((state: RootState) => state.category.categories);
    const filteredCategories = categories.filter(category => category.status === true);

    useEffect(() => {
        dispatch(showCategories())
    }, [])
    return (
        <>
            <head>
                <title>Ez-Rent |  Product </title>
            </head>
            <Navbar />
            {/* This code is for product or search input field  */}

            <div className='product w-[85%]'>
                <h1 className=' xl:text-[40px] md:text-[20px] font-bold text-[25px] product-heading text-[#313131]'>All Products</h1>
                <div className='flex  2xl:w-[449px] 2xl:h-[73px] xl:w-[400px] mx-auto lg:w-[300px] lg:h-[50px] md:w-[250px]  md:h-[40px] w-[270px]   h-[45px] shadow items-center  border-2 rounded-full  mt-5 md:mt-0 '>
                    <CiSearch className="search-icon" />
                    <input type='text' placeholder='Search' className='text-[14px] outline-none md:w-72 w-44 ' />
                </div>
            </div>
            <hr className=' w-[85%] mx-auto md:block hidden  mt-16 ' />

            {/* only for mobile screen */}

            <div className='flex mt-10 md:hidden block w-[290px] text-[#313131] mx-auto gap-1'>
                <div onClick={toggleToOpen1} className='w-[100px] px-2  h-[31px] rounded-full  gap-2 flex items-center bg-[#F1F5F9]'>
                    <h1 className='text-[10px] font-[400px]'>Categories</h1>
                    <Image src="/arrange-circle.png" alt="icon" width={20} height={20} />
                </div>
                <div onClick={toggleToOpen2} className='w-[100px]  px-2 h-[31px] rounded-full  gap-1 flex items-center bg-[#F1F5F9]'>
                    <h1 className='text-[9px] font-[400px]'>Price Range</h1>
                    <Image src="/arrange-circle.png" alt="icon" width={20} height={20} />
                </div>
                <div onClick={toggleToOpen3} className='w-[100px]  px-2 h-[31px] rounded-full  gap-2 flex items-center bg-[#F1F5F9]'>
                    <h1 className='text-[9px] font-[400px]'>Sort Order</h1>
                    <Image src="/arrange-circle.png" alt="icon" width={20} height={20} />
                </div>
            </div>
            {isOpen && (
                <>
                    <div className='fixed inset-0 bg-gray-500 bg-opacity-75 z-10 '>
                        <div className='space-y-2 my-7 p-5 border rounded-2xl mx-5 bg-white absolute top-[30%] left-0 right-0 z-10'>
                            <div className='flex justify-between'>
                                <h1 className='text-[12px] font-semibold '>Categories</h1>
                                <RxCross1 className=" text-sm  cursor-pointer " onClick={toggleToClose1} />
                            </div>
                            {filteredCategories ? filteredCategories.map((item) => {
                                return <div className='flex gap-2' key={item.id}>
                                    <input type='checkbox' className='rounded-[3px] border-[#CACACA] border-1 w-[14px] h-[14px]' />
                                    <h1 className='text-[10px]'>{item.name}</h1>
                                </div>
                            }) : "loading"}
                        </div>
                    </div>
                </>
            )}
            {open && (
                <div className='fixed inset-0 bg-gray-500 bg-opacity-75 z-10 '>
                    <div className='bg-white p-5 border rounded-2xl mx-5 absolute top-[20%] w-[90%]'>
                        <RxCross1 className=" text-sm float-right cursor-pointer " onClick={toggleToClose2} />

                        <h1 className="mb-7 ">Price Range</h1>
                        <Pricerange />
                    </div>
                </div>
            )}
            {istoOpen && (
                <div className='fixed inset-0 bg-gray-500 bg-opacity-75 z-10 '>
                    <div className='bg-white p-5 border rounded-2xl mx-5 absolute top-[20%] w-[90%]'>
                        <RxCross1 className=" text-sm float-right cursor-pointer " onClick={toggleToClose3} />
                        <div className='mt-[-38px]'>
                            <SortOrder />
                        </div>
                    </div>
                </div>
            )}
            {/* Hero Section */}

            <div className='md:w-[85%] mt-2 md:mx-auto mx-5 gap-10 md:flex mb-44'>

                {/* Left-Side */}
                <div className='md:block hidden 2xl:w-[25%] text-[#313131] xl:w-[20%]'>
                    <Categories />
                    <hr />
                    {/* Price range */}

                    <Pricerange />

                    <hr />
                    {/* Sort Order  */}
                    <SortOrder />
                </div>

                {/* Right-Side */}
                <Products />
            </div>
            <Footer />
        </>

    )

}
export default ProductPage;


