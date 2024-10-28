import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Button from "../Layers/Button";

function ReviewSlider() {
  let [active, setActive] = useState(0);

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (item, index) => {
      setActive(index);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "13px",
          transform: "translateY(0%)",
          right: "0",
        }}
      >
        <ul style={{ margin: "0px", display:"flex", gap:"10px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`text-[10px] text-transparent rounded-full ${
          i == active
            ? "bg-[#0156FF]"
            : "bg-[#CACDD8]"
        }`}
        style={{
          width: "12px",
          height: "12px",
        }}
      >
        0{i + 1}
      </div>
    ),
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="!flex gap-[18px] lg:gap-[26px]">
            <span className="text-8xl italic text-black">"</span>
            <p className="text-[13px] lg:text-lg md:p-0 pr-[17px] text-black">
              My first order arrived today in perfect condition. From the time I
              sent a question about the item to making the purchase, to the
              shipping and now the delivery, your company, Tecs, has stayed in
              touch. Such great service. I look forward to shopping on your site
              in the future and would highly recommend it.
            </p>
          </div>
          <p className="text-[10px] lg:text-sm text-right lg:mt-[15px] md:mt-[19px] mt-[5px]">
            - Tama Brown
          </p>
          <Button className="px-[26px] opacity-0">Leave Us A Review</Button>
        </div>
        <div>
          <div className="!flex gap-[18px] lg:gap-[26px]">
            <span className="text-8xl italic text-black">"</span>
            <p className="text-[13px] lg:text-lg md:p-0 pr-[17px] text-black">
              My first order arrived today in perfect condition. From the time I
              sent a question about the item to making the purchase, to the
              shipping and now the delivery, your company, Tecs, has stayed in
              touch. Such great service. I look forward to shopping on your site
              in the future and would highly recommend it.
            </p>
          </div>
          <p className="text-[10px] lg:text-sm text-right lg:mt-[15px] md:mt-[19px] mt-[5px]">
            - Tama Brown
          </p>
          <Button className="px-[26px] opacity-0">Leave Us A Review</Button>
        </div>
        <div>
          <div className="!flex gap-[18px] lg:gap-[26px]">
            <span className="text-8xl italic text-black">"</span>
            <p className="text-[13px] lg:text-lg md:p-0 pr-[17px] text-black">
              My first order arrived today in perfect condition. From the time I
              sent a question about the item to making the purchase, to the
              shipping and now the delivery, your company, Tecs, has stayed in
              touch. Such great service. I look forward to shopping on your site
              in the future and would highly recommend it.
            </p>
          </div>
          <p className="text-[10px] lg:text-sm text-right lg:mt-[15px] md:mt-[19px] mt-[5px]">
            - Tama Brown
          </p>
          <Button className="px-[26px] opacity-0">Leave Us A Review</Button>
        </div>
        <div>
          <div className="!flex gap-[18px] lg:gap-[26px]">
            <span className="text-8xl italic text-black">"</span>
            <p className="text-[13px] lg:text-lg md:p-0 pr-[17px] text-black">
              My first order arrived today in perfect condition. From the time I
              sent a question about the item to making the purchase, to the
              shipping and now the delivery, your company, Tecs, has stayed in
              touch. Such great service. I look forward to shopping on your site
              in the future and would highly recommend it.
            </p>
          </div>
          <p className="text-[10px] lg:text-sm text-right lg:mt-[15px] md:mt-[19px] mt-[5px]">
            - Tama Brown
          </p>
          <Button className="px-[26px] opacity-0">Leave Us A Review</Button>
        </div>
      </Slider>
    </div>
  );
}

export default ReviewSlider;
