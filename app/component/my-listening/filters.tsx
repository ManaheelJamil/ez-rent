/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useState } from 'react'
import { BsBoxes } from "react-icons/bs"
import { RiArrowDropDownLine } from "react-icons/ri"
import {BiFilterAlt} from "react-icons/bi"


const Filters = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false)
    const [toggle , setToggle] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const toggleDropdown2 = () => {
        setOpen(!open);
    };
    const toggleDropdown3 = () => {
        setToggle(!toggle);
    };
  return (
    <div>
         <div className='flex flex-wrap md:gap-6 gap-3'>
                    <div className="relative inline-block text-left">
                        <div>
                            <button
                                onClick={toggleDropdown}
                                type="button"
                                className="inline-flex  2xl:gap-2 gap-1 rounded-full items-center justify-center w-full  border border-gray-300 shadow-sm 2xl:px-4 px-3 2xl:py-1 bg-white text-sm font-medium text-gray-700 "
                            >
                                <BsBoxes className="text-xl" />
                                Categories
                                <RiArrowDropDownLine className="text-4xl" />
                            </button>
                        </div>

                        {isOpen && (
                            <div className="origin-top-right z-10 absolute right-0 mt-2 w-44 text-center rounded-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <a href="#" className="block px-4 pt-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                        Gaming
                                        <hr className='my-2' />
                                    </a>
                                    <a href="#" className="block px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                        Backpack
                                        <hr className='my-2' />
                                    </a>
                                    <a href="#" className="block px-4  text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                        Clothes
                                        <hr className='my-2' />
                                    </a>
                                    <a href="#" className="block px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                        Vehicles
                                        <hr className='my-2' />
                                    </a>
                                    <a href="#" className="block px-4  text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                        Accessories
                                        <hr className='my-2' />
                                    </a>
                                    <a href="#" className="block px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                        Cosmetics
                                        <hr className='my-2' />
                                    </a>
                                    <a href="#" className="block px-4  text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                        Books
                                        <hr className='my-2' />
                                    </a>
                                    <a href="#" className="block px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                        Radios
                                        <hr className='my-2' />
                                    </a>
                                    <a href="#" className="block px-4  text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                        Furniture
                                        <hr className='my-2' />
                                    </a>
                                    <a href="#" className="block px-4 pb-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                        Travel
                                        <hr className='my-2' />
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="relative inline-block text-left">
                        <div>
                            <button
                                onClick={toggleDropdown2}
                                type="button"
                                className="inline-flex  2xl:gap-2 gap-1 rounded-full items-center justify-center w-full  border border-gray-300 shadow-sm 2xl:px-4 px-2  2xl:py-1 bg-white text-sm font-medium text-gray-700 "
                            >
                                <BiFilterAlt className="text-xl" />
                                Status
                                <RiArrowDropDownLine className="text-4xl" />
                            </button>
                        </div>

                        {open && (
                            <div className="origin-top-right z-10 absolute left-0 mt-2 w-36 mx-auto rounded-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1 text-center" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <a href="#" className="block px-4 pt-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                        Active
                                        <hr className='my-2' />
                                    </a>
                                    <a href="#" className="block px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                        Inactive
                                        <hr className='my-2' />
                                    </a>
                                    
                                
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="relative inline-block text-left">
                        <div>
                            <button
                                onClick={toggleDropdown3}
                                type="button"
                                className="inline-flex  2xl:gap-2 gap-1 rounded-full items-center justify-center w-full  border border-gray-300 shadow-sm 2xl:px-4 px-2  2xl:py-1 bg-white text-sm font-medium text-gray-700 "
                            >
                                <BiFilterAlt className="text-xl" />
                                Sort by
                                <RiArrowDropDownLine className="text-4xl" />
                            </button>
                        </div>

                        {toggle && (
                            <div className="origin-top-right absolute z-10  left-0 mt-2 w-36  rounded-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1 text-center" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <a href="#" className="block px-4 pt-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                    Price
                                        <hr className='my-2' />
                                    </a>
                                    <a href="#" className="block px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                    Alphabetically
                                        <hr className='my-2' />
                                    </a>
                                   
                                </div>
                            </div>
                        )}
                    </div>
                </div>
    </div>
  )
}

export default Filters