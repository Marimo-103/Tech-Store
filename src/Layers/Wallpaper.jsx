import React from "react";
import { Link } from "react-router-dom";


const Wallpaper = ({src, title}) => {
  return (
    <div className="relative">
      <div className="lg:w-[232px] lg:h-[350px] md:w-[229.013px] md:h-[346px] h-[82px] w-full">
        <img src={src} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-white text-center">
        <h2 className="lg:text-[22px] text-lg font-bold leading-[130%] lg:mt-[146px] md:mt-[149px] mt-4 lg:mb-[92px] md:mb-[97px] mb-[13px]">
          {title}
        </h2>
        <Link className="md:text-[13px] text-xs underline">
          See All Products
        </Link>
      </div>
    </div>
  );
};

export default Wallpaper;
