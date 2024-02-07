"use client"
import React, { useEffect, useState } from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import ProductData from '../../../../data/product.json';
import Image from 'next/image';
import Link from 'next/link';
import { RxBorderDotted } from "react-icons/rx";
import { FaArrowRightLong } from "react-icons/fa6";
import { AppDispatch, RootState } from '@/app/redux/store';
import { FaArrowLeftLong } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { showProducts, updateWishlistProduct } from '@/app/redux/Product/productAction';

const Products = () => {
    const dispatch: AppDispatch = useDispatch();
    const products = useSelector((state: RootState) => state.product.products);
    const [productStates, setProductStates] = useState(
        products.map(() => false)
    );

    const colorChange = (index: number) => {
        const newProductStates = [...productStates];
        newProductStates[index] = !newProductStates[index];
        setProductStates(newProductStates);
        setIsFilled(!isFilled);
    };

    const [isFilled, setIsFilled] = useState(false);
    const handleClick = (id: any) => {
        setIsFilled(!isFilled)
        const data = {
            product_id: id
        }
        dispatch(updateWishlistProduct(data))
    };
    useEffect(() => {
        dispatch(showProducts())

    }, [products])
    return (
        <div className="">
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-12'>
                {products ? (
                    products.map((item, index) => (
                        <div key={index} className=''>
                            <div className='relative lg:w-auto w-72 mx-auto md:w-[400px] mx-auto w-[330px] h-56'>
                                <Link href='/product-detail'>
                                    <Image
                                        src={item?.featuredImagePath && item?.featuredImagePath}
                                        alt='image'
                                        width={400}
                                        height={400}
                                        className='md:w-[400px] rounded-md mx-auto h-56 w-[330px]'
                                    />
                                </Link>

                                <div>
                                    <div onClick={() => handleClick(item.id)} className='w-[32px] h-[32px] bg-white rounded-full flex items-center absolute top-0 right-0  m-3'>
                                        {productStates[index] ? (
                                            <AiFillHeart className={`text-[#EC4F9A] cursor-pointer w-[18.2px] h-[16.41px] mx-auto`} />
                                        ) : (
                                            <AiOutlineHeart className={`text-[#404EED]  cursor-pointer w-[18.2px] h-[16.41px] mx-auto`} />
                                        )}
                                    </div>

                                </div>
                            </div>
                            <div className='flex justify-between lg:w-auto w-64 mx-auto md:mx-2 mt-5' >
                                <div >
                                    <h1 className='2xl:text-[20px] lg:text-[16px]   font-semibold'>{item?.title}</h1>
                                    <p className='2xl:text-[16px] text-[10px] text-[#787878]'>{item?.tagLine}</p>
                                </div>
                                <div>
                                    <button className='text-[12px]  border-1 rounded-lg ml-3 border-[#404EED] p-1'>${item.price}/d</button>
                                </div>
                            </div>
                            <div className='flex justify-between m-2 lg:w-auto  w-64 mx-auto'>
                                <div className='flex items-center gap-3'>
                                    <Image alt="icon-image" src="/icon.png" width={37} height={37} />
                                    <h1 className='2xl:text-[14px] text-[12px]' >{item.user && item.user.name}</h1>
                                </div>
                                <div className='flex items-center'>
                                    <AiTwotoneStar className="text-[#FFC107]" />
                                    <h1 className='2xl:text-[12px] text-[10px] text-[#787878]'>4.97 (80 reviews)</h1>
                                </div>
                            </div>            </div>
                    ))
                ) : (
                    'loading....'
                )}
            </div>
            <div className='flex justify-between   items-center md:w-[400px] md:mx-auto mx-5 mt-20  '>
                <div className='md:w-10 text-sm w-7 md:h-10 h-7 rounded-full flex flex-col justify-center items-center bg-[#F1F5F9] text-[#787878]'>
                    <FaArrowLeftLong />
                </div>
                <div className='md:w-10 w-7 md:h-10 h-7 rounded-full flex flex-col justify-center items-center bg-[#404EED] text-white text-xs '>1</div>
                <div className='md:w-10 w-7 md:h-10 h-7 rounded-full flex flex-col justify-center items-center border border-[#CACACA] text-xs'>2</div>
                <div className='md:w-10 w-7 md:h-10 h-7 rounded-full flex flex-col justify-center items-center border border-[#CACACA] text-xs'>3</div>
                <div className='md:w-10 w-7 md:h-10 h-7 rounded-full flex flex-col justify-center items-center border border-[#CACACA] text-xs'>4</div>
                <div className=' rounded-full flex flex-col justify-center items-center '><RxBorderDotted /></div>
                <div className='md:w-10 w-7 md:h-10 h-7 rounded-full flex flex-col justify-center items-center border border-[#CACACA] text-xs'>20</div>
                <div className='md:w-10 w-7 md:h-10 h-7 rounded-full flex flex-col text-sm justify-center items-center bg-[#F1F5F9] text-[#787878]'><FaArrowRightLong />
                </div>
            </div>
        </div>
    );
};

export default Products;

