import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import p01 from "/Products Images/Product-1.png";
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
        background: "#25293180",
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
        background: "#25293180",
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

const NewArrivals = () => {
  var settings = {
    dots: false,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          arrows: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container mx-auto">
      <Slider {...settings}>
        <div className="py-[14px] mx-auto">
          <ProductCardGrid
            src={p01}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="py-[14px]">
          <ProductCardGrid
            src={p01}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="py-[14px]">
          <ProductCardGrid
            src={p01}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="py-[14px]">
          <ProductCardGrid
            src={p01}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="py-[14px]">
          <ProductCardGrid
            src={p01}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="py-[14px]">
          <ProductCardGrid
            src={p01}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="py-[14px]">
          <ProductCardGrid
            src={p01}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="py-[14px]">
          <ProductCardGrid
            src={p01}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="py-[14px]">
          <ProductCardGrid
            src={p01}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="py-[14px]">
          <ProductCardGrid
            src={p01}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="py-[14px]">
          <ProductCardGrid
            src={p01}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="py-[14px]">
          <ProductCardGrid
            src={p01}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="py-[14px]">
          <ProductCardGrid
            src={p01}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="py-[14px]">
          <ProductCardGrid
            src={p01}
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
