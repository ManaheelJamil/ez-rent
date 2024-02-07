import React from 'react'
// import ProductDetail from "../ProductPage/product-detail"
import Product from "./carousel/Products"
const Additem = () => {
    return (
        <div className=' md:mt-32 mt-20  2xl:w-[1500px] xl:w-[1100px] lg:w-[900px] md:w-[700px] mx-auto'>
            <h1 className='2xl:text-[40px] xl:text-[30px] md:text-[30] text-[20px] md:mx-0 mx-5 flex font-bold'>New Items
            <p className='text-[#787878] 2xl:text-[40px] xl:text-[30px] md:text-[30] text-[20px]'>&nbsp;Added</p></h1>
            <Product />
        </div>
    )
}

export default Additem