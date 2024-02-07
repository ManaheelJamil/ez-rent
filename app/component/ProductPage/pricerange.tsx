/* eslint-disable react-hooks/rules-of-hooks */
import { Slider } from "@nextui-org/react";
import React, { useState } from 'react'
import { LuDollarSign } from "react-icons/lu"

const Pricerange= () => {
  const [value, setValue] = useState<any>([100, 500]);

  return (
    <>
      <h1 className="2xl:text-md text-sm 2xl:mt-10 mt-7 2xl:mb-7 mb-5 font-bold md:block hidden">Price Range</h1>
      <Slider
        formatOptions={{ style: "currency", currency: "USD" }}
        step={10}
        maxValue={1000}
        minValue={0}
        value={value}
        onChange={setValue}
        className="max-w-md"
        size="sm"
      />
      <div className="flex justify-between items-center 2xl:mt-10 mt-5 mb-10">
        <div>
          <h1 className="2xl:text-sm text-xs font-bold my-4">Min Price</h1>
          <div className="relative 2xl:w-28 xl:w-20 w-16">
            <input type="number" placeholder={value[0]} min="100" className=" 2xl:py-2 py-1 rounded-full 2xl:text-sm  text-xs  2xl:w-28 xl:w-20 w-16 border text-start 2xl:px-5 px-3 flex"/>
            <LuDollarSign className="absolute right-2 2xl:top-3 top-2 text-sm"/></div>
        </div>
        <div>
          <h1 className="2xl:text-sm text-xs font-bold my-4">Max Price</h1>
          <div className="relative 2xl:w-28 xl:w-20 w-16">
            <input type="number" placeholder={value[1]} max="500" className=" 2xl:py-2 py-1 rounded-full 2xl:text-sm  text-xs  2xl:w-28 xl:w-20 w-16 border text-start 2xl:px-5 px-3 flex"/>
            <LuDollarSign className="absolute right-2 2xl:top-3 top-2 text-sm"/></div>
        </div>        
      </div>

    </>
  )
}

export default Pricerange



