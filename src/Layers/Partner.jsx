import React from "react";

const Partner = ({ src, className }) => {
  return (
    <div className="px-[23px] py-[25px] md:px-[45.64px] md:py-[35px] lg:px-6">
      <div
        className={`h-[66px] w-[127px] md:h-[79.484px] md:w-[151px] ${className}`}
      >
        <img src={src} alt="" className="h-full w-full object-contain" />
      </div>
    </div>
  );
};

export default Partner;
