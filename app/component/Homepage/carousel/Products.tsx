// import { ReactNode } from "react";
"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import ProductCard from "./ProductCard";
// import  products  from "./data";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { showProducts } from '../../../redux/Product/productAction';
const NextArrow = ({ onClick }: { onClick: () => void }) => (
  <div
    className=" absolute md:top-[-40px] top-[-30px] md:p-2 p-1  rounded-full hover:border-[#D9D9D9] hover:border-2  md:right-0 right-[5px]"
    onClick={onClick}
  >
    <BsArrowRight className="md:text-2xl " />
  </div>
);

const PrevArrow = ({ onClick }: { onClick: () => void }) => (
  <div
    className=" absolute md:top-[-40px] top-[-30px] md:p-2 p-1 rounded-full hover:border-[#D9D9D9] hover:border-2 md:right-16 right-14"
    onClick={onClick}
  >
    <BsArrowLeft className="md:text-2xl" />
  </div>
);

const Product = () => {
  const products = useSelector((state: RootState) => state.product.products)
  const filteredProducts = products.filter(product => product.status === true);

  const dispatch: AppDispatch = useDispatch();
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    dispatch(showProducts())
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1.5); // Medium screens
      } 
      else {
        setSlidesToShow(4); // Large screens
      }
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow, // Show 3 slides
    slidesToScroll: 1,
    nextArrow: <NextArrow onClick={function (): void {
		throw new Error("Function not implemented.");
	} } />,
    prevArrow: <PrevArrow onClick={function (): void {
		throw new Error("Function not implemented.");
	} } />,
  };
 
  return (
    <div className="">
      <div className="  ">
        <Slider {...settings}>
          {filteredProducts.map((product: any, index) => (
            <div key={index}>
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Product;
