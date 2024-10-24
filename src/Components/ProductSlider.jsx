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

const ProductSlider = ({className}) => {
  var settings = {
    dots: false,
    arrows: false,
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
        <div className="">
          <ProductCardGrid
            src={p01}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="">
          <ProductCardGrid
            src={p02}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="">
          <ProductCardGrid
            src={p03}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="">
          <ProductCardGrid
            src={p04}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="">
          <ProductCardGrid
            src={p05}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="">
          <ProductCardGrid
            src={p04}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="">
          <ProductCardGrid
            src={p05}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="">
          <ProductCardGrid
            src={p05}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="">
          <ProductCardGrid
            src={p05}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="">
          <ProductCardGrid
            src={p01}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="">
          <ProductCardGrid
            src={p02}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="">
          <ProductCardGrid
            src={p03}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="">
          <ProductCardGrid
            src={p04}
            ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
            price="$499.00"
            DiscountPrice="$499.00"
          />
        </div>
        <div className="">
          <ProductCardGrid
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

export default ProductSlider;
