import React from 'react'
import { Navbar } from '../../component/ProductPage/navbar'
import Footer from '../../component/ProductPage/footer'
const TermsCondition = () => {
    return (
        <>
            <Navbar />
            <div>
                <div className='gradient-shade w-full  2xl:h-[350px] h-[270px] relative md:mb-[500px] mb-[600px]'>
                    <div className='bg-white back-shadow rounded-3xl  2xl:w-[1150px] xl:w-[900px] lg:w-[600px] absolute mx-3 right-0 left-0 xl:mt-44 mt-32 md:mx-auto'>
                        <div className='flex  '>
                            <div className='bg-[#F1F5F9] w-[420px] rounded-l-3xl'></div>
                            <div className='lg:mx-12 mx-6 overflow-x-hidden overflow-y-scroll  mt-10'>
                                <h1 className='text-[#404EED] 2xl:text-5xl md:text-3xl text-xl  font-bold'>Terms & Conditions</h1>
                                <div className='bg-[#F1F5F9] 2xl:w-96 md:w-72 w-44 2xl:h-9 h-8 font-bold mt-5 px-4 rounded-full flex items-center text-[#404EED] 2xl:text-md text-xs'><p>Accepting the terms</p></div>
                                <div className='text-[#787878]'>
                                    <p className='2xl:text-[14px] xl:text-[12px] text-[8px] 2xl:w-[955px] xl:w-[700px] my-5 '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        Lorem Ipsum  is  simply  dummy  text  of  the  printing  and  typesetting  industry. Lorem  Ipsum  has been  the  industry standard  dummy
                                        text  ever  since the 1500s,  when  an  unknown printer took  a galley  of   type  and scrambled  it  to  make a  type  specimen  book. It  has  survived  not
                                        only  five centuries, but also the leap into  electronic  typesetting,  remaining  essentially unchanged. It  was  popularised in the 1960s  with  the  release
                                        of  Letraset sheets containing  Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker  including versions of
                                        Lorem Ipsum. It  was  popularised in the 1960s  with  the  release of  Letraset sheets containing  Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker  including versions of
                                        Lorem Ipsum.</p>
                                    <p className='2xl:text-[14px] xl:text-[12px] text-[8px]'>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        Lorem Ipsum  is  simply  dummy  text  of  the  printing  and  typesetting  industry. Lorem  Ipsum  has been  the  industry standard  dummy
                                        text  ever  since the 1500s,  when  an  unknown printer took  a galley  of   type  and scrambled  it  to  make a  type  specimen  book. It  has  survived  not
                                        only  five centuries, but also the leap into  electronic  typesetting,  remaining  essentially unchanged. It  was  popularised in the 1960s  with  the  release
                                        of  Letraset sheets containing  Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker  including versions of
                                        Lorem Ipsum. It  was  popularised in the 1960s  with  the  release of  Letraset sheets containing  Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker  including versions of
                                        Lorem Ipsum.</p>
                                                     
                                </div>
                                <p className='text-[#404EED] lg:text-sm text-xs flex  2xl:mt-20 mt-10 mb-5 2xl:mb-10 justify-end xl:pr-12 lg:pr-8'>Updated on March 23, 2023</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TermsCondition
export function generateMetadata() {
    return {
        title: "Ez-Rent | Terms&Condition "
    };
  }