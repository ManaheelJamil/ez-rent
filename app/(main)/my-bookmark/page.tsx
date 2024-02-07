import React from 'react'
import { Navbar } from '../../component/ProductPage/navbar'
import BookmarkDetail from '../../component/ProductPage/product-detail/bookmarkDetail'
import Footer from '@/app/component/ProductPage/footer'
const Bookmark = () => {
  return (
    <div>
      <Navbar />
      <div className='2xl:my-44 my-32 2xl:w-[1200px] xl:w-[900px] lg:w-[700px] md:w-[600px] md:mx-auto mx-5'>
        <h1 className='2xl:text-4xl text-3xl font-bold '>My Bookmarks</h1>
        <hr className='2xl:mb-28 mb-20 mt-10 border' />
        <BookmarkDetail />

      </div>
      <Footer />
    </div>
  )
}

export default Bookmark
export function generateMetadata() {
  return {
    title: "Ez-Rent | My-Bookmark "
  };
}