import React from 'react';

const SortOrder = () => {
  return (
    <div>
      <h1 className='text-[16px] font-semibold mt-10 mb-5 text-[#313131]'>
        Sort Order
      </h1>
      <div className='space-y-6'>
        <div className='flex items-center'>
          <input
            id='most-popular-radio'
            type='radio'
            name='sortOrder'
            value=''
            className='w-5 h-5 text-blue-600 bg-gray-100 border-gray-300'
          />
          <label className='ml-2 text-[14px] font-medium text-gray-900 dark:text-gray-300'>
            Most Popular.
          </label>
        </div>
        <div className='flex items-center'>
          <input
            id='newest-radio'
            type='radio'
            name='sortOrder'
            value=''
            className='w-5 h-5 text-blue-600 bg-gray-100 border-gray-300'
          />
          <label className='ml-2 text-[14px] font-medium text-gray-900 dark:text-gray-300'>
            Newest.
          </label>
        </div>
        <div className='flex items-center'>
          <input
            id='low-to-high-radio'
            type='radio'
            name='sortOrder'
            value=''
            className='w-5 h-5 text-blue-600 bg-gray-100 border-gray-300'
          />
          <label className='ml-2 text-[14px] font-medium text-gray-900 dark:text-gray-300'>
            Price Low - High.
          </label>
        </div>
        <div className='flex items-center'>
          <input
            id='high-to-low-radio'
            type='radio'
            name='sortOrder'
            value=''
            className='w-5 h-5 text-blue-600 bg-gray-100 border-gray-300'
          />
          <label className='ml-2 text-[14px] font-medium text-gray-900 dark:text-gray-300'>
            Price High - Low.
          </label>
        </div>
      </div>
    </div>
  );
};

export default SortOrder;
