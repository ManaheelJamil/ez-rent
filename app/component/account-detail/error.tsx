// "use client"
// import React, { useState } from 'react'
// import Image from 'next/image'
// import { RxCross1 } from "react-icons/rx"
// const page = () => {
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const [isOpen, setIsOpen] = useState(false);

//   const toggleToClose = () => {
//     console.log("hello")
//     setIsOpen(false);
//   };
//     return (
//        <>
    
//             <div className=' absolute top-32 right-0 left-0 '>
//             <div className='w-[550px] h-[300px] mx-auto bg-white  rounded-3xl mt-32 p-5 text-center border'>
//                 <div className='flex justify-end'><RxCross1 className="text-[#CACACA]" onClick={toggleToClose}/></div>
//                 <div className='flex justify-center items-center gap-5'>
//                     <Image src="/info-circle.png" alt="error" width={56} height={56} />
//                     <h1 className='text-2xl font-bold'>Report This User</h1>
//                 </div>
//                 <textarea placeholder='Please Share the reason for reporting this lessor...' className='p-3 my-5 text-xs border mx-auto rounded-lg w-[409px] h-[112px]'>

//                 </textarea>
//                 <button className='text-white text-center py-2 w-44 mx-auto rounded-full bg-red-700'>Report</button>

//             </div>
//         </div>
        
//        </>

//     )
// }

// export default page