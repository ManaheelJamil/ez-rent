"use client"
import React from "react";

import { useState } from "react";
import { Navbar } from '../../component/ProductPage/navbar'
import Footer from '../../component/ProductPage/footer'
const Faq = () => {
    const [open, setOpen] = useState();

    const handleOpen = (index: any) => {
        setOpen(index === open ? 0 : index);
    };
    return (
        <div>
            <head>
                <title>Ez-Rent | Faq</title>
            </head>
            <Navbar />
            <div>
                <div className='gradient-shade w-full  2xl:h-[350px] h-[270px] relative mb-[700px]'>
                    <div className='bg-white back-shadow rounded-2xl h-[700px] 2xl:w-[1150px] xl:w-[1000px] lg:w-[600px] absolute mx-7 right-0 left-0 xl:mt-36 mt-32 md:mx-auto'>
                        <h1 className='2xl:text-4xl text-3xl pt-5 text-[#404EED] font-bold text-center'>FAQ</h1>
                        <hr className='border border-[#CACACA] md:mx-14  mx-5 2xl:my-5 my-3' />

                        <div className="w-full ">
                            <div id="accordion-collapse" data-accordion="collapse">
                                <div className="space-y-0 h-[600px] overflow-y-auto">
                                    <div className="2xl:mt-5 mt-3">
                                        <h2
                                            id="accordion-collapse-heading-1"
                                            className="mb-2"
                                        >
                                            <button
                                                type="button"
                                                onClick={() => handleOpen(1)}
                                                className={`w-[90%] mx-auto test p-5 font-medium flex items-center justify-between text-left text-gray-500 border ${open === 1 ? '' : 'rounded-xl'
                                                    } border-b-0 border-gray-200  bg-[#F1F5F9] rounded-t-2xl`}
                                                data-accordion-target="#accordion-collapse-body-1"
                                                aria-expanded={open === 1}
                                                aria-controls="accordion-collapse-body-1"
                                            >
                                                <span><b>Question:</b> What is Lorem ipsum?</span>
                                                <svg
                                                    data-accordion-icon
                                                    className={`w-3 h-3 rotate-180 shrink-0 ${open === 1 ? '' : 'transform rotate-0'
                                                        }`}
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 10 6"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M9 5 5 1 1 5"
                                                    />
                                                </svg>
                                            </button>
                                        </h2>
                                        <div
                                            id="accordion-collapse-body-1"
                                            className={`pb-3 px-5 border mx-auto w-[90%] border-b-0  border-gray-200 mt-[-9px]  bg-[#F1F5F9] rounded-b-2xl ${open === 1 ? '' : 'hidden'
                                                }`}
                                            aria-labelledby="accordion-collapse-heading-1"
                                        >
                                            <p className="mb-2 test text-gray-500 ">
                                                <b> Answer:</b> Lorem ipsum is a commonly used placeholder text in the design and publishing industry. It has no real meaning
                                                and is used for its similarity to Latin, making it suitable for filling in content when the actual text is not available yet.                                            </p>

                                        </div>
                                    </div>
                                    {/* Repeat the above structure for the other accordion items (headings and bodies) */}
                                    <div>
                                        <h2
                                            id="accordion-collapse-heading-1"
                                            className="mb-2"
                                        >
                                            <button
                                                type="button"
                                                onClick={() => handleOpen(2)}
                                                className={`w-[90%] test mx-auto p-5 font-medium flex items-center justify-between text-left text-gray-500 border ${open === 2 ? '' : 'rounded-xl'
                                                    } border-b-0 border-gray-200  bg-[#F1F5F9] rounded-t-2xl`}
                                                data-accordion-target="#accordion-collapse-body-1"
                                                aria-expanded={open === 2}
                                                aria-controls="accordion-collapse-body-1"
                                            >
                                                <span><b>Question:</b> What is Lorem ipsum?</span>
                                                <svg
                                                    data-accordion-icon
                                                    className={`w-3 h-3 rotate-180 shrink-0 ${open === 2 ? '' : 'transform rotate-0'
                                                        }`}
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 10 6"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M9 5 5 1 1 5"
                                                    />
                                                </svg>
                                            </button>
                                        </h2>
                                        <div
                                            id="accordion-collapse-body-1"
                                            className={`pb-3 px-5 border border-b-0 mx-auto w-[90%] border-gray-200 mt-[-9px]  bg-[#F1F5F9] rounded-b-2xl ${open === 2 ? '' : 'hidden'
                                                }`}
                                            aria-labelledby="accordion-collapse-heading-1"
                                        >
                                            <p className="mb-2 test text-gray-500 ">
                                                <b> Answer:</b> Lorem ipsum is a commonly used placeholder text in the design and publishing industry. It has no real meaning
                                                and is used for its similarity to Latin, making it suitable for filling in content when the actual text is not available yet.                                            </p>

                                        </div>
                                    </div>
                                    {/* third question */}
                                    <div>
                                        <h2
                                            id="accordion-collapse-heading-1"
                                            className="mb-2"
                                        >
                                            <button
                                                type="button"
                                                onClick={() => handleOpen(3)}
                                                className={`w-[90%] test mx-auto p-5 font-medium flex items-center justify-between text-left text-gray-500 border ${open === 3 ? '' : 'rounded-xl'
                                                    } border-b-0 border-gray-200  bg-[#F1F5F9] rounded-t-2xl`}
                                                data-accordion-target="#accordion-collapse-body-1"
                                                aria-expanded={open === 3}
                                                aria-controls="accordion-collapse-body-1"
                                            >
                                                <span><b>Question:</b> What is Lorem ipsum?</span>
                                                <svg
                                                    data-accordion-icon
                                                    className={`w-3 h-3 rotate-180 shrink-0 ${open === 3 ? '' : 'transform rotate-0'
                                                        }`}
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 10 6"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M9 5 5 1 1 5"
                                                    />
                                                </svg>
                                            </button>
                                        </h2>
                                        <div
                                            id="accordion-collapse-body-1"
                                            className={`pb-3 px-5 border border-b-0 mx-auto w-[90%] border-gray-200 mt-[-9px]  bg-[#F1F5F9] rounded-b-2xl ${open === 3 ? '' : 'hidden'
                                                }`}
                                            aria-labelledby="accordion-collapse-heading-1"
                                        >
                                            <p className="mb-2 test text-gray-500 ">
                                                <b> Answer:</b> Lorem ipsum is a commonly used placeholder text in the design and publishing industry. It has no real meaning
                                                and is used for its similarity to Latin, making it suitable for filling in content when the actual text is not available yet.                                            </p>

                                        </div>
                                    </div>
                                    {/* fourth question */}
                                    <div>
                                        <h2
                                            id="accordion-collapse-heading-1"
                                            className="mb-2"
                                        >
                                            <button
                                                type="button"
                                                onClick={() => handleOpen(4)}
                                                className={`w-[90%] test mx-auto p-5 font-medium flex items-center justify-between text-left text-gray-500 border ${open === 4 ? '' : 'rounded-xl'
                                                    } border-b-0 border-gray-200  bg-[#F1F5F9] rounded-t-2xl`}
                                                data-accordion-target="#accordion-collapse-body-1"
                                                aria-expanded={open === 4}
                                                aria-controls="accordion-collapse-body-1"
                                            >
                                                <span><b>Question:</b> What is Lorem ipsum?</span>
                                                <svg
                                                    data-accordion-icon
                                                    className={`w-3 h-3 rotate-180 shrink-0 ${open === 4 ? '' : 'transform rotate-0'
                                                        }`}
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 10 6"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M9 5 5 1 1 5"
                                                    />
                                                </svg>
                                            </button>
                                        </h2>
                                        <div
                                            id="accordion-collapse-body-1"
                                            className={`pb-3 px-5 border border-b-0 mx-auto w-[90%] border-gray-200 mt-[-9px]  bg-[#F1F5F9] rounded-b-2xl ${open === 4 ? '' : 'hidden'
                                                }`}
                                            aria-labelledby="accordion-collapse-heading-1"
                                        >
                                            <p className="mb-2 test text-gray-500 ">
                                                <b> Answer:</b> Lorem ipsum is a commonly used placeholder text in the design and publishing industry. It has no real meaning
                                                and is used for its similarity to Latin, making it suitable for filling in content when the actual text is not available yet.                                            </p>

                                        </div>
                                    </div>
                                    {/* fifth question */}
                                    <div>
                                        <h2
                                            id="accordion-collapse-heading-1"
                                            className="mb-2"
                                        >
                                            <button
                                                type="button"
                                                onClick={() => handleOpen(5)}
                                                className={`w-[90%] test mx-auto p-5 font-medium flex items-center justify-between text-left text-gray-500 border ${open === 5 ? '' : 'rounded-xl'
                                                    } border-b-0 border-gray-200  bg-[#F1F5F9] rounded-t-2xl`}
                                                data-accordion-target="#accordion-collapse-body-1"
                                                aria-expanded={open === 1}
                                                aria-controls="accordion-collapse-body-1"
                                            >
                                                <span><b>Question:</b> What is Lorem ipsum?</span>
                                                <svg
                                                    data-accordion-icon
                                                    className={`w-3 h-3 rotate-180 shrink-0 ${open === 5 ? '' : 'transform rotate-0'
                                                        }`}
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 10 6"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M9 5 5 1 1 5"
                                                    />
                                                </svg>
                                            </button>
                                        </h2>
                                        <div
                                            id="accordion-collapse-body-1"
                                            className={`pb-3 px-5 border border-b-0 mx-auto w-[90%] border-gray-200 mt-[-9px]  bg-[#F1F5F9] rounded-b-2xl ${open === 5 ? '' : 'hidden'
                                                }`}
                                            aria-labelledby="accordion-collapse-heading-1"
                                        >
                                            <p className="mb-2 test text-gray-500 ">
                                                <b> Answer:</b> Lorem ipsum is a commonly used placeholder text in the design and publishing industry. It has no real meaning
                                                and is used for its similarity to Latin, making it suitable for filling in content when the actual text is not available yet.                                            </p>

                                        </div>
                                    </div>
                                    {/* sixth question */}
                                    <div>
                                        <h2
                                            id="accordion-collapse-heading-1"
                                            className="mb-2"
                                        >
                                            <button
                                                type="button"
                                                onClick={() => handleOpen(6)}
                                                className={`w-[90%] test mx-auto p-5 font-medium flex items-center justify-between text-left text-gray-500 border ${open === 1 ? '' : 'rounded-xl'
                                                    } border-b-0 border-gray-200  bg-[#F1F5F9] rounded-t-2xl`}
                                                data-accordion-target="#accordion-collapse-body-1"
                                                aria-expanded={open === 1}
                                                aria-controls="accordion-collapse-body-1"
                                            >
                                                <span><b>Question:</b> What is Lorem ipsum?</span>
                                                <svg
                                                    data-accordion-icon
                                                    className={`w-3 h-3 rotate-180 shrink-0 ${open === 6 ? '' : 'transform rotate-0'
                                                        }`}
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 10 6"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M9 5 5 1 1 5"
                                                    />
                                                </svg>
                                            </button>
                                        </h2>
                                        <div
                                            id="accordion-collapse-body-1"
                                            className={`pb-3 px-5 border border-b-0 mx-auto w-[90%] border-gray-200 mt-[-9px]  bg-[#F1F5F9] rounded-b-2xl ${open === 6 ? '' : 'hidden'
                                                }`}
                                            aria-labelledby="accordion-collapse-heading-1"
                                        >
                                            <p className="mb-2 test text-gray-500 ">
                                                <b> Answer:</b> Lorem ipsum is a commonly used placeholder text in the design and publishing industry. It has no real meaning
                                                and is used for its similarity to Latin, making it suitable for filling in content when the actual text is not available yet.                                            </p>

                                        </div>
                                    </div>
                                    {/* Repeat the above structure for the other accordion items (headings and bodies) */}
                                    <div>
                                        <h2
                                            id="accordion-collapse-heading-1"
                                            className="mb-2"
                                        >
                                            <button
                                                type="button"
                                                onClick={() => handleOpen(2)}
                                                className={`w-[90%] test mx-auto p-5 font-medium flex items-center justify-between text-left text-gray-500 border ${open === 2 ? '' : 'rounded-xl'
                                                    } border-b-0 border-gray-200  bg-[#F1F5F9] rounded-t-2xl`}
                                                data-accordion-target="#accordion-collapse-body-1"
                                                aria-expanded={open === 2}
                                                aria-controls="accordion-collapse-body-1"
                                            >
                                                <span><b>Question:</b> What is Lorem ipsum?</span>
                                                <svg
                                                    data-accordion-icon
                                                    className={`w-3 h-3 rotate-180 shrink-0 ${open === 2 ? '' : 'transform rotate-0'
                                                        }`}
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 10 6"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M9 5 5 1 1 5"
                                                    />
                                                </svg>
                                            </button>
                                        </h2>
                                        <div
                                            id="accordion-collapse-body-1"
                                            className={`pb-3 px-5 border border-b-0 mx-auto w-[90%] border-gray-200 mt-[-9px]  bg-[#F1F5F9] rounded-b-2xl ${open === 2 ? '' : 'hidden'
                                                }`}
                                            aria-labelledby="accordion-collapse-heading-1"
                                        >
                                            <p className="mb-2 test text-gray-500 ">
                                                <b> Answer:</b> Lorem ipsum is a commonly used placeholder text in the design and publishing industry. It has no real meaning
                                                and is used for its similarity to Latin, making it suitable for filling in content when the actual text is not available yet.                                            </p>

                                        </div>
                                    </div>
                                    {/* third question */}
                                    <div>
                                        <h2
                                            id="accordion-collapse-heading-1"
                                            className="mb-2"
                                        >
                                            <button
                                                type="button"
                                                onClick={() => handleOpen(3)}
                                                className={`w-[90%] test mx-auto p-5 font-medium flex items-center justify-between text-left text-gray-500 border ${open === 3 ? '' : 'rounded-xl'
                                                    } border-b-0 border-gray-200  bg-[#F1F5F9] rounded-t-2xl`}
                                                data-accordion-target="#accordion-collapse-body-1"
                                                aria-expanded={open === 3}
                                                aria-controls="accordion-collapse-body-1"
                                            >
                                                <span><b>Question:</b> What is Lorem ipsum?</span>
                                                <svg
                                                    data-accordion-icon
                                                    className={`w-3 h-3 rotate-180 shrink-0 ${open === 3 ? '' : 'transform rotate-0'
                                                        }`}
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 10 6"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M9 5 5 1 1 5"
                                                    />
                                                </svg>
                                            </button>
                                        </h2>
                                        <div
                                            id="accordion-collapse-body-1"
                                            className={`pb-3 px-5 border border-b-0 mx-auto w-[90%] border-gray-200 mt-[-9px]  bg-[#F1F5F9] rounded-b-2xl ${open === 3 ? '' : 'hidden'
                                                }`}
                                            aria-labelledby="accordion-collapse-heading-1"
                                        >
                                            <p className="mb-2 test text-gray-500 ">
                                                <b> Answer:</b> Lorem ipsum is a commonly used placeholder text in the design and publishing industry. It has no real meaning
                                                and is used for its similarity to Latin, making it suitable for filling in content when the actual text is not available yet.                                            </p>

                                        </div>
                                    </div>
                                    {/* fourth question */}
                                    <div>
                                        <h2
                                            id="accordion-collapse-heading-1"
                                            className="mb-2"
                                        >
                                            <button
                                                type="button"
                                                onClick={() => handleOpen(4)}
                                                className={`w-[90%] test mx-auto p-5 font-medium flex items-center justify-between text-left text-gray-500 border ${open === 4 ? '' : 'rounded-xl'
                                                    } border-b-0 border-gray-200  bg-[#F1F5F9] rounded-t-2xl`}
                                                data-accordion-target="#accordion-collapse-body-1"
                                                aria-expanded={open === 4}
                                                aria-controls="accordion-collapse-body-1"
                                            >
                                                <span><b>Question:</b> What is Lorem ipsum?</span>
                                                <svg
                                                    data-accordion-icon
                                                    className={`w-3 h-3 rotate-180 shrink-0 ${open === 4 ? '' : 'transform rotate-0'
                                                        }`}
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 10 6"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M9 5 5 1 1 5"
                                                    />
                                                </svg>
                                            </button>
                                        </h2>
                                        <div
                                            id="accordion-collapse-body-1"
                                            className={`pb-3 px-5 border border-b-0 mx-auto w-[90%] border-gray-200 mt-[-9px]  bg-[#F1F5F9] rounded-b-2xl ${open === 4 ? '' : 'hidden'
                                                }`}
                                            aria-labelledby="accordion-collapse-heading-1"
                                        >
                                            <p className="mb-2 test text-gray-500 ">
                                                <b> Answer:</b> Lorem ipsum is a commonly used placeholder text in the design and publishing industry. It has no real meaning
                                                and is used for its similarity to Latin, making it suitable for filling in content when the actual text is not available yet.                                            </p>

                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Faq
