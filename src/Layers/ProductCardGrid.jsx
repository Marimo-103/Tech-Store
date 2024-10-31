import React from "react";
import { Image } from "antd";
import { RiStarFill, RiStarHalfFill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import favIcon01 from "/Products Images/Fav.png";
import favIcon02 from "/Products Images/Fav1.png";
import Button from "../Layers/Button";
import { FiShoppingCart } from "react-icons/fi";

const InStock = ({ className }) => {
  return (
    <div
      className={`flex items-center py-[7px] pl-[5px] pr-2 gap-[2px] ${className}`}
    >
      <div className="flex items-center justify-center w-[10px] h-[10px] rounded-full bg-[#78A962] text-white">
        <TiTick className="text-[10px]" />
      </div>
      <p className="text-[10px] text-[#78A962] leading-[210%]">in stock</p>
    </div>
  );
};

const Tags = ({ className }) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <div>
        <img src={favIcon01} alt="" />
      </div>
      <div>
        <img src={favIcon02} alt="" />
      </div>
    </div>
  );
};

const ProductCardGrid = ({
  src,
  ProductTitle,
  price,
  DiscountPrice,
  className,
}) => {
  return (
    <div
      className={`w-[174px] md:w-[234px] px-[13.5px] md:px-[25px] pt-[26px] bg-[#fff] cursor-pointer duration-300 lg:hover:shadow-custom relative group overflow-hidden ${className}`}
    >
      <div className="image w-[100px] h-[100px] md:w-[150px] md:h-[150px] mx-auto">
        <Image src={src} className="!w-full !h-full object-contain" />
      </div>
      <div className="rating flex items-center gap-2 md:mt-[10px] mt-1">
        <div className="stars flex items-center md:text-[13px] text-[10px] text-[#E9A426] gap-[2px]">
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarHalfFill />
        </div>
        <p className="md:text-xs text-[10px] text-[#A2A6B0] leading-[210%]">
          Reviews (4)
        </p>
      </div>
      <h2 className="title text-[11px] md:text-[13px] text-black line-clamp-3 md:mt-[6px] mt-[3px]">
        {ProductTitle}
      </h2>
      <div className="price my-3">
        <p className="normal md:text-sm text-xs text-[#666] leading-[140%] line-through mb-1">
          {price}
        </p>
        <p className="discount md:text-lg text-sm text-[#000] leading-[140%] font-semibold">
          {DiscountPrice}
        </p>
      </div>
      <InStock className="absolute top-0 -translate-y-full left-[25px] duration-300 group-hover:translate-y-0" />
      <Tags className="absolute top-4 right-0 translate-x-[110%] duration-300 group-hover:translate-x-[-12px]" />
      <div className="max-h-0 overflow-hidden transition-max-height duration-300 ease-in-out group-hover:max-h-20">
      <Button className='lg:px-5 px-3 md:px-4 lg:mb-4'>
        <FiShoppingCart className="inline-block mr-2"/>
        <span>
        Add to cart
        </span>
      </Button>
      </div>
    </div>
  );
};

export default ProductCardGrid;
