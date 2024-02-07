"use client"
import Image from 'next/image'
import { BsArrowRight } from "react-icons/bs"
import Data from "../../../data/category.json"
import Link from 'next/link'
import { AppDispatch, RootState } from '@/app/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { showCategories } from '@/app/redux/Category/categoryAction';
const HomeCategories = () => {
    const dispatch: AppDispatch = useDispatch();
    const categories = useSelector((state: RootState) => state.category.categories);
    const filteredCategories = categories.filter(category => category.status === true);

    useEffect(() => {
        dispatch(showCategories())
    }, [])
    return (
        <div>
            <div className=' md:mt-32 mt-28  2xl:w-[1500px] xl:w-[1100px] lg:w-[900px] md:w-[700px] mx-auto'>
                <h1 className='2xl:text-[40px] xl:text-[30px] md:text-[30] text-[20px] md:mx-0 mx-5 flex font-bold'>Categories</h1>
            </div>
            <div className='lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-9 mx-auto md:mt-10 mt-8 2xl:w-[1450px] xl:w-[1100px] lg:w-[900px] md:w-[700px] '>
                {filteredCategories ? filteredCategories.slice(0, 6).map((item) => {
                    return (<>
                        <Link href="#">
                            <div className='bg-[#F9F9F9] card-shadow flex md:mx-0 mx-5 justify-around py-6 xl:rounded-[30px] rounded-[25px] 2xl:w-[470px] xl:w-[350px] xl:h-[200px] h-[180px]'>
                                <div>
                                    <Image src={item?.image_path} alt="icon1" width={80} height={80} className='xl:w-[60px] rounded-xl xl:h-[60px] w-[60px] h-[60px]' />
                                    <h1 className='2xl:text-[25px] xl:text-[20px] text-[16px] font-bold lg:mt-6 mt-3'>{item?.name}</h1>
                                    <p className='flex gap-2 text-sm items-center'>View all <BsArrowRight /></p>
                                </div>
                                <div>
                                    <p className='xl:mt-8 mt-7 text-sm'>{item?.products ? item.products.length : 0} products</p>
                                </div>
                            </div>
                        </Link>
                    </>)
                }) : "loading"}
            </div>
            <Link href="/categories">
                <button className='2xl:w-72 xl:w-64 md:w-44 w-64 2xl:py-8 explore-button xl:py-4 py-4  md:mb-72 mb-52 text-center md:text-lg text-[13px] flex items-center justify-center bg-[#111827] mx-auto mt-20 rounded-full xl:gap-5 gap-3 text-white'>All Categories <BsArrowRight className="xl:text-2xl md:text-xl text-md" /></button>
            </Link>
        </div>
    )
}

export default HomeCategories