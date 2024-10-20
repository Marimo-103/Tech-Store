import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Desktop_banner from "../../public/Common Images/Desktop-Banner.png";
import Tablet_banner from "../../public/Common Images/Tablet-Banner.png";
import Mobile_banner from "../../public/Common Images/Mobile-Banner.png";
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

const IntroBanner = () => {
  const settings = {
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="slider-container lg:m-0 md:mt-5 mt-3">
      <Slider {...settings}>
        <div>
          <picture>
            <source media="(min-width: 1024px)" srcset={Desktop_banner} />
            <source media="(min-width: 768px)" srcset={Tablet_banner} />
            <img src={Mobile_banner} alt="" className="w-full" />
          </picture>
        </div>
        <div>
          <picture>
            <source media="(min-width: 1024px)" srcset={Desktop_banner} />
            <source media="(min-width: 768px)" srcset={Tablet_banner} />
            <img src={Mobile_banner} alt="" className="w-full" />
          </picture>
        </div>
        <div>
          <picture>
            <source media="(min-width: 1024px)" srcset={Desktop_banner} />
            <source media="(min-width: 768px)" srcset={Tablet_banner} />
            <img src={Mobile_banner} alt="" className="w-full" />
          </picture>
        </div>
      </Slider>
    </div>
  );
};

export default IntroBanner;
