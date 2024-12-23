import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import p01 from "/Products Images/Product-1.png";
import p02 from "/Products Images/Product-2.png";
import p03 from "/Products Images/Product-3.png";
import p04 from "/Products Images/Product-4.png";
import p05 from "/Products Images/Product-5.png";
import ProductCardGrid from "../Layers/ProductCardGrid";
import { FaChevronUp } from "react-icons/fa";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="lg:w-[36px] lg:h-[48px] w-[27.391px] h-[36.456px] items-center justify-center left-0 top-1/2 -translate-y-1/2"
      style={{
        ...style,
        display: "flex",
        background: "#66666634",
        cursor: "pointer",
        borderRadius: "0px 30px 30px 0px",
        position: "absolute",
        zIndex: "1",
      }}
      onClick={onClick}
    >
      <FaChevronUp className="text-white text-xs rotate-90" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="lg:w-[36px] lg:h-[48px] w-[27.391px] h-[36.456px] items-center justify-center right-0 top-1/2 -translate-y-1/2"
      style={{
        ...style,
        display: "flex",
        background: "#66666634",
        cursor: "pointer",
        borderRadius: "30px 0px 0px 30px",
        position: "absolute",
        zIndex: "1",
      }}
      onClick={onClick}
    >
      <FaChevronUp className="text-white text-xs -rotate-90" />
    </div>
  );
}

const NewArrivals = ({className}) => {
  var settings = {
    dots: false,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          arrows: false,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          slidesToShow: 3.22,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 2.25,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 380,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`slider-container w-full ${className}`}>
      <Slider {...settings}>
        <div className="py-[14px]">
          <ProductCardGrid
          className='lg:mx-6 md:ml-7 mx-[9px]'
            src={p01}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="py-[14px]">
          <ProductCardGrid
          className='lg:mx-6 md:ml-7 mx-[9px]'
            src={p02}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="py-[14px]">
          <ProductCardGrid
          className='lg:mx-6 md:ml-7 mx-[9px]'
            src={p03}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="py-[14px]">
          <ProductCardGrid
          className='lg:mx-6 md:ml-7 mx-[9px]'
            src={p04}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="py-[14px]">
          <ProductCardGrid
          className='lg:mx-6 md:ml-7 mx-[9px]'
            src={p05}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="py-[14px]">
          <ProductCardGrid
          className='lg:mx-6 md:ml-7 mx-[9px]'
            src={p04}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="py-[14px]">
          <ProductCardGrid
          className='lg:mx-6 md:ml-7 mx-[9px]'
            src={p05}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="py-[14px]">
          <ProductCardGrid
          className='lg:mx-6 md:ml-7 mx-[9px]'
            src={p05}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="py-[14px]">
          <ProductCardGrid
          className='lg:mx-6 md:ml-7 mx-[9px]'
            src={p05}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="py-[14px]">
          <ProductCardGrid
          className='lg:mx-6 md:ml-7 mx-[9px]'
            src={p01}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="py-[14px]">
          <ProductCardGrid
          className='lg:mx-6 md:ml-7 mx-[9px]'
            src={p02}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="py-[14px]">
          <ProductCardGrid
          className='lg:mx-6 md:ml-7 mx-[9px]'
            src={p03}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="py-[14px]">
          <ProductCardGrid
          className='lg:mx-6 md:ml-7 mx-[9px]'
            src={p04}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="py-[14px]">
          <ProductCardGrid
          className='lg:mx-6 md:ml-7 mx-[9px]'
            src={p05}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
