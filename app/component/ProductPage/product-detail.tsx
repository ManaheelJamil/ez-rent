"use client"
import React, { useState } from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import ProductData from '../../../data/product.json';
import Image from 'next/image';
import Link from 'next/link';

const ProductDetail = () => {

    const [productStates, setProductStates] = useState(
        ProductData.map(() => false)
    );

    const colorChange = (index: number) => {
        const newProductStates = [...productStates];
        newProductStates[index] = !newProductStates[index];
        setProductStates(newProductStates);
        setIsFilled(!isFilled);
    };

    const [isFilled, setIsFilled] = useState(false);

    return (
        <div className="">
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-12'>
                {ProductData ? (
                    ProductData.map((item, index) => (
                        <div key={index} className=''>
                            <div className='relative lg:w-auto w-72 mx-auto '>
                                <Link href='/product-detail'>
                                    <Image
                                        src={item.image}
                                        alt='image'
                                        width={400}
                                        height={400}
                                        className='md:w-[400px] mx-auto w-[330px]'
                                    />
                                </Link>

                                <div>
                                    <div onClick={() => colorChange(index)} className='w-[32px] h-[32px] bg-white rounded-full flex items-center absolute top-0 right-0  m-3'>
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
                                    <h1 className='2xl:text-[20px] lg:text-[16px]   font-semibold'>{item.heading}</h1>
                                    <p className='2xl:text-[16px] text-[10px] text-[#787878]'>Lorem ipsum dolor sit amet</p>
                                </div>
                                <div>
                                    <button className='text-[12px]  border-1 rounded-lg ml-3 border-[#404EED] p-1'>$40/d</button>
                                </div>
                            </div>
                            <div className='flex justify-between m-2 lg:w-auto  w-64 mx-auto'>
                                <div className='flex items-center gap-3'>
                                    <Image alt="icon-image" src="/icon.png" width={37} height={37} />
                                    <h1 className='2xl:text-[14px] text-[12px]' >Devis Miller</h1>
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
        </div>
    );
};

export default ProductDetail;

