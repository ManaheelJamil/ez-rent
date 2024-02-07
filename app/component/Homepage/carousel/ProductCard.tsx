import React, { useEffect, useContext } from 'react';
// import { Product } from "./data";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { IoIosStar } from "react-icons/io";
import Products from '../../product-detail/product-detail-popup';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ProductImage from '../../../public/about-image-2.png';
import { AppDispatch, RootState } from '@/app/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import QuickviewContext from '../../../context/QuickviewContext';
import { updateWishlistProduct,userWishlistProduct } from '@/app/redux/Product/productAction';
import ProductDetailPopup from '../../product-detail/product-detail-popup';
interface Props {
  product: any;
  rootProps?: React.HTMLProps<HTMLDivElement>;
}

const ProductCard: React.FC<Props> = ({ product, rootProps }) => {
  const [newProduct, setNewProduct] = useState<any>({});
  const {quickView, setQuickView} = useContext(QuickviewContext);
  const actionQuickView = useContext(QuickviewContext);
  const [open, setOpen] = useState(false);
  const wishlists = useSelector((state: RootState) => state.product.wishlists);
  const dispatch: AppDispatch = useDispatch();
  const toggleToOpen = () => {
    console.log("hello")
    setOpen(true);
  };
  const toggleToClose = () => {
    setOpen(false);
  };
  const [isFilled, setIsFilled] = useState(false);
  // const [quickView, setQuickView] = useState(false)
  const handleClick = () => {
    setIsFilled(!isFilled)
    const data = {
      product_id: newProduct.id
    }
    dispatch(updateWishlistProduct(data))
  };
  const wishListedProducts = useSelector((state: RootState) => state.product.userWishlists);
  // const isProductWishlisted = () => {
  //   return wishListedProducts.some(item => item.product.id === newProduct.id);
  // }
  useEffect(() => {
    setNewProduct(product)
    dispatch(userWishlistProduct(wishListedProducts))
   
  }, [product])
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="" {...rootProps}>
        <div className="xl:px-3 md:px-2 px-4 md:mt-10 mt-8">
          <div className="relative  2xl:w-[330px] xl:w-[230px]  md:w-[170px] w-[170px]  mx-auto   rounded-[20px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <Link href={`/product-detail/${newProduct.id}`}>
              {newProduct?.featuredImagePath && (
                <Image
                  src={newProduct.featuredImagePath}
                  alt="image"
                  width={400}
                  height={400}
                  className="2xl:w-[330px] object-center xl:w-[230px] md:w-[170px] w-[170px]  mx-auto 2xl:h-64 xl:h-52 h-44 overflow-hidden  rounded-[20px]"
                />
              )}
            </Link>
            <div className='bg-opacity-80 bg-gray-400'>
              <button
                className={`absolute bg-white text-[#787878] px-4 top-40  right-0 left-0  w-32 mx-auto  py-2 text-xs rounded-full transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                {/* <p onClick={() => actionQuickView.setQuickView(true)}> */}
                <p onClick={() => setQuickView(true)}>
                  Quick view
                </p>
              </button>
            </div>
            <div>
              <div onClick={handleClick} className='w-[32px] h-[32px] bg-white rounded-full flex items-center absolute top-0 right-0  m-3'>
                {isFilled ? (
                  <AiFillHeart className={`text-[#EC4F9A] cursor-pointer w-[18.2px] h-[16.41px] mx-auto`} />
                ) : (
                  <AiOutlineHeart className={`text-[#404EED]  cursor-pointer w-[18.2px] h-[16.41px] mx-auto`} />
                )}
              </div>
            </div>
          </div>
          <div className='flex justify-between w-auto  mx-auto md:mx-2 mt-5'>
            <div>
              <h1 className='2xl:text-[20px] lg:text-[16px] text-[12px] font-semibold'>{newProduct?.title}</h1>
              <p className='2xl:text-[16px] text-[9px] text-[#787878]'>{newProduct?.tagline}</p>
            </div>
            <div>
              <button className='md:text-[12px] text-[9px]  border-1 rounded-lg ml-3 border-[#404EED] p-1'>${newProduct?.price}/d</button>
            </div>
          </div>
          <div className='flex justify-between m-2 items-center w-auto mx-auto'>
            <div className='flex items-center md:gap-3 gap-1'>
              <Image alt="icon-image" src="/icon.png" width={35} height={35} className='md:w-[35px] md:h-[35px] w-[25px] h-[25px]' />
              <h1 className='2xl:text-[14px] text-[8px]'>{newProduct?.user?.name}</h1>
            </div>
            <div className='flex items-center'>
              <IoIosStar
                className="text-[#FFC107] text-xl" />
              <h1 className='2xl:text-[12px] text-[8px] mt-1 text-[#787878]'>0.0 (0 reviews)</h1>
            </div>
          </div>
        </div>
      </div>
      {/* {quickView && (
          <>
            <div className=' '>
              <ProductDetailPopup product={newProduct} />
            </div>
          </>
        )} */}
     
    </>
  );
};

export default ProductCard;
