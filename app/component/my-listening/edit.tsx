/* eslint-disable @next/next/no-img-element */
import { LuImagePlus } from "react-icons/lu"
import React, { ChangeEvent, useState } from 'react';
function UploadImage() {
    const [imageUrl1, setImageUrl1] = useState<string | undefined>(undefined);
    function readURL(input: HTMLInputElement | null) {
        if (input && input.files && input.files[0]) {
            const file = input.files[0];
            const reader = new FileReader();

            reader.onload = (e) => {
                setImageUrl1(e.target?.result as string);
            };

            reader.readAsDataURL(file);
        }
    }


    return (
        <div className="flex lg:flex-col md:flex-row flex-col md:ml-0 gap-5">
            <div className='2xl:w-[300px] lg:w-[250px] md:w-[300px] w-[250px] md:mx-0 mx-auto bg-image bg-[#CACACA] text-center 2xl:py-28 py-24 border border-[#CACACA] rounded-2xl'>
                <label className="btn btn-default" htmlFor="inputFile">
                    <label><LuImagePlus className="text-white mx-auto w-[36px] h-[36px]"/></label>
                    <div className="fa fa-upload fa-2x">
                        <h1 className="text-white text-md">Change image</h1>
                    </div>
                </label>
                <input
                    id="inputFile"
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => readURL(e.target)}
                />
                {imageUrl1 && (
                    <div className="box ">
                        <img src={imageUrl1} alt="Uploaded Image" className="  absolute -mt-[200px] flex justify-center 2xl:w-[300px] lg:w-[250px] md:w-[300px] w-[250px]   lg:h-[300px] h-[330px] rounded-2xl  h-auto" />
                    </div>
                )}
            </div>
            <div className="lg:flex lg:flex-col md:flex-row flex-col">
                <div className="flex gap-5 mt-5 md:justify-start justify-center">
                    <div className='2xl:w-[140px] w-[120px] h-[130px] text-center py-12 bg1 border border-[#CACACA] rounded-2xl'>
                        <label className="btn btn-default" htmlFor="inputFile">

                            {imageUrl1 && (
                                <div className="box ">
                                    <img src={imageUrl1} alt="Uploaded Image" className="  absolute -mt-[90px] flex justify-center 2xl:w-[140px] w-[120px]  rounded-2xl  h-36" />
                                </div>
                            )}
                        </label>

                    </div>
                    <div className='2xl:w-[140px] w-[120px]  h-[130px] text-center py-12 bg2 border border-[#CACACA] rounded-2xl'>
                        <label className="btn btn-default" htmlFor="inputFile">

                            {imageUrl1 && (
                                <div className="box ">
                                    <img src={imageUrl1} alt="Uploaded Image" className="  absolute -mt-[90px] flex justify-center 2xl:w-[140px] w-[120px]  rounded-2xl  h-36" />
                                </div>
                            )}
                        </label>

                    </div>
                </div>
                <div className="flex gap-5 mt-5 md:justify-start justify-center">
                    <div className='2xl:w-[140px] w-[120px] h-[130px] text-center py-12 bg3 border border-[#CACACA] rounded-2xl'>
                        <label className="btn btn-default" htmlFor="inputFile">

                            {imageUrl1 && (
                                <div className="box ">
                                    <img src={imageUrl1} alt="Uploaded Image" className="  absolute -mt-[90px] flex justify-center 2xl:w-[140px] w-[120px]  rounded-2xl  h-36" />
                                </div>
                            )}
                        </label>

                    </div>
                    <div className='2xl:w-[140px] w-[120px] h-[130px] text-center py-12 bg4 border border-[#CACACA] rounded-2xl'>
                        <label className="btn btn-default" htmlFor="inputFile">
                            {/* <label ><LuImagePlus className="text-[#404EED] mx-auto w-[36px] h-[36px]" /></label> */}

                            {imageUrl1 && (
                                <div className="box ">
                                    <img src={imageUrl1} alt="Uploaded Image" className="  absolute -mt-[90px] flex justify-center 2xl:w-[140px] w-[120px]  rounded-2xl  h-36" />
                                </div>
                            )}
                        </label>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default UploadImage