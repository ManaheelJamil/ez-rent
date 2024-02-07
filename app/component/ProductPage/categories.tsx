import React from 'react'
import { AppDispatch, RootState } from '@/app/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { showCategories } from '@/app/redux/Category/categoryAction';
const Categories = () => {
    const dispatch: AppDispatch = useDispatch();
    const categories = useSelector((state: RootState) => state.category.categories);
    const filteredCategories = categories.filter(category => category.status === true);

    useEffect(() => {
        dispatch(showCategories())
    }, [])
    return (
        <div>
            <div className='space-y-4 my-7 '>
                <h1 className='text-[16px] font-semibold '>Categories</h1>
                <div className='flex gap-3'>
                    <input type='checkbox' className='rounded-[5px] border-[#CACACA] border-1 w-[22px] h-[22px]' />
                    <h1 className='text-[16px]'>All</h1>
                </div>
                {filteredCategories ? filteredCategories.map((item) => {
              return  <div className='flex gap-3' key={item.id}>
                    <input type='checkbox' className='rounded-[5px] border-[#CACACA] border-1 w-[22px] h-[22px]' />
                    <h1 className='text-[16px]'>{item.name}</h1>
                </div>
                }) : "loading"}
            </div>
        </div>
    )
}

export default Categories