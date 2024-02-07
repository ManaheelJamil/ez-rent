"use client"
import Image from 'next/image'
import { BsArrowRight } from "react-icons/bs"
import Data from "../../../data/category.json"
import Link from 'next/link'
import { AppDispatch, RootState } from '@/app/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { showCategories } from '@/app/redux/Category/categoryAction';
const AllCategory = () => {
    const dispatch: AppDispatch = useDispatch();
    const categories = useSelector((state: RootState) => state.category.categories);
    const filteredCategories = categories.filter(category => category.status === true);
    console.log(filteredCategories,categories,'filteredCategories')

    useEffect(() => {
        dispatch(showCategories())
      },[])
    return (
        <div>
            <div className='lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-9 mx-auto md:mt-10 mt-8 2xl:w-[1450px] xl:w-[1100px] lg:w-[900px] md:w-[700px] '>
                {filteredCategories ? filteredCategories.map((item) => {
                    return (<>
                      <Link href="/category">
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
        </div>
    )
}

export default AllCategory