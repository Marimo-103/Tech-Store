import React from "react";

const Card = ({src, comment, date}) => {
  return (
    <div className="child w-[225px]">
      <div className="img w-full h-[151.106px]">
        <img src={src} alt="" />
      </div>
      <div className="text px-[25px] py-[10px] border border-[#eef0f5]">
        <p className="text-xs text-black text-center line-clamp-[7] mb-[10px]">
          {comment}
        </p>
        <p className="text-[10px] text-[#A2A6B0] text-center">{date}</p>
      </div>
    </div>
  );
};

export default Card;
