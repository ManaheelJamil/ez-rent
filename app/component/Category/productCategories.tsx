"use client"
import React from 'react'
const ProductCategories = () => {
    return (
        <div>
            <div className='space-y-4 my-7 '>
                <h1 className='text-[16px] font-semibold '>Categories</h1>
                <div className='flex gap-3'>
                    <input type='checkbox' className='rounded-[5px] border-[#CACACA] border-1 w-[22px] h-[22px]' />
                    <h1 className='text-[16px]'>Backpack</h1>
                </div>
                <div className='flex gap-3'>
                    <input type='checkbox' className='rounded-[5px] border-[#CACACA] border-1 w-[22px] h-[22px]' />
                    <h1 className='text-[16px]'>Shoes</h1>
                </div>
                <div className='flex gap-3'>
                    <input type='checkbox' className='rounded-[5px] border-[#CACACA] border-1 w-[22px] h-[22px]' />
                    <h1 className='text-[16px]'>Cars</h1>
                </div>
                <div className='flex gap-3'>
                    <input type='checkbox' className='rounded-[5px] border-[#CACACA] border-1 w-[22px] h-[22px]' />
                    <h1 className='text-[16px]'>Category 04</h1>
                </div>
                <div className='flex gap-3'>
                    <input type='checkbox' className='rounded-[5px] border-[#CACACA] border-1 w-[22px] h-[22px]' />
                    <h1 className='text-[16px]'>Category 05</h1>
                </div>
                <div className='flex gap-3'>
                    <input type='checkbox' className='rounded-[5px] border-[#CACACA] border-1 w-[22px] h-[22px]' />
                    <h1 className='text-[16px]'>Category 06</h1>
                </div>
                <div className='flex gap-3'>
                    <input type='checkbox' className='rounded-[5px] border-[#CACACA] border-1 w-[22px] h-[22px]' />
                    <h1 className='text-[16px]'>Category 07</h1>
                </div>
               
            </div>
        </div>
    )
}

export default ProductCategories