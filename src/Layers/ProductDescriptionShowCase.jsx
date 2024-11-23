import React, { useState } from "react";
import Container from "../Components/Container";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Button from "../Layers/Button";
import PaypalButton from "../Layers/PaypalButton";
import BreadCrumbs from "../Layers/BreadCrumbs";
import { Link } from "react-router-dom";
import ColorSelector from "./ColorSelector";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import fav1 from "../../public/Products Images/Fav1.svg";
import fav2 from "../../public/Products Images/Fav2.svg";
import p01 from "../../public/Products Images/DetailesProduct.png";
import p02 from "../../public/Products Images/Product-3.png";
import p03 from "../../public/Products Images/Product-2.png";
import sponsor from "../../public/Products Images/sponsorInSlider.png";

function SimpleSlider() {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="!flex md:gap-x-9 lg:gap-x-14">
          <div className="icons flex flex-col gap-y-[6.5px] md:mt-5 lg:mt-10">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <circle
                  cx="15"
                  cy="15"
                  r="14"
                  stroke="#A2A6B0"
                  stroke-width="2"
                />
                <path
                  d="M14.6851 11.8254L15.3954 12.5419L16.1056 11.8254C16.7788 11.1462 17.8139 10.375 18.8922 10.375C19.9606 10.375 20.8026 10.7307 21.3714 11.278C21.9374 11.8225 22.2936 12.6141 22.2936 13.6095C22.2936 14.6805 21.8643 15.5925 21.1287 16.4761C20.3739 17.3829 19.3563 18.1913 18.2509 19.0643L18.2252 19.0846C17.2883 19.8241 16.2458 20.647 15.3958 21.5675C14.5542 20.655 13.5216 19.8387 12.593 19.1047L12.5424 19.0646L12.542 19.0643C11.4363 18.1911 10.4189 17.3825 9.66433 16.4757C8.92905 15.5921 8.5 14.6802 8.5 13.6095C8.5 12.6141 8.8562 11.8226 9.42223 11.278C9.99108 10.7308 10.8333 10.375 11.9021 10.375C12.9791 10.375 14.0111 11.1454 14.6851 11.8254Z"
                  stroke="#A2A6B0"
                  stroke-width="2"
                />
              </svg>
            </div>
            <div>
              <img src={fav1} alt="" />
            </div>
            <div>
              <img src={fav2} alt="" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="image md:w-[210px] md:h-[210px] lg:w-[255px] lg:h-[444px] ">
              <img src={p01} alt="" className="h-full w-full object-contain"/>
            </div>
            <div className="sponsor md:h-6 md:w-[214px] lg:h-7 lg:w-[263px]">
              <img src={sponsor} alt="" className="h-full w-full object-contain"/>
            </div>
          </div>
        </div>
        <div className="!flex md:gap-x-9 lg:gap-x-14">
          <div className="icons flex flex-col gap-y-[6.5px] md:mt-5 lg:mt-10">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <circle
                  cx="15"
                  cy="15"
                  r="14"
                  stroke="#A2A6B0"
                  stroke-width="2"
                />
                <path
                  d="M14.6851 11.8254L15.3954 12.5419L16.1056 11.8254C16.7788 11.1462 17.8139 10.375 18.8922 10.375C19.9606 10.375 20.8026 10.7307 21.3714 11.278C21.9374 11.8225 22.2936 12.6141 22.2936 13.6095C22.2936 14.6805 21.8643 15.5925 21.1287 16.4761C20.3739 17.3829 19.3563 18.1913 18.2509 19.0643L18.2252 19.0846C17.2883 19.8241 16.2458 20.647 15.3958 21.5675C14.5542 20.655 13.5216 19.8387 12.593 19.1047L12.5424 19.0646L12.542 19.0643C11.4363 18.1911 10.4189 17.3825 9.66433 16.4757C8.92905 15.5921 8.5 14.6802 8.5 13.6095C8.5 12.6141 8.8562 11.8226 9.42223 11.278C9.99108 10.7308 10.8333 10.375 11.9021 10.375C12.9791 10.375 14.0111 11.1454 14.6851 11.8254Z"
                  stroke="#A2A6B0"
                  stroke-width="2"
                />
              </svg>
            </div>
            <div>
              <img src={fav1} alt="" />
            </div>
            <div>
              <img src={fav2} alt="" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="image md:w-[210px] md:h-[210px] lg:w-[255px] lg:h-[444px] ">
              <img src={p03} alt="" className="h-full w-full object-contain"/>
            </div>
            <div className="sponsor md:h-6 md:w-[214px] lg:h-7 lg:w-[263px]">
              <img src={sponsor} alt="" className="h-full w-full object-contain"/>
            </div>
          </div>
        </div>
        <div className="!flex md:gap-x-9 lg:gap-x-14">
          <div className="icons flex flex-col gap-y-[6.5px] md:mt-5 lg:mt-10">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <circle
                  cx="15"
                  cy="15"
                  r="14"
                  stroke="#A2A6B0"
                  stroke-width="2"
                />
                <path
                  d="M14.6851 11.8254L15.3954 12.5419L16.1056 11.8254C16.7788 11.1462 17.8139 10.375 18.8922 10.375C19.9606 10.375 20.8026 10.7307 21.3714 11.278C21.9374 11.8225 22.2936 12.6141 22.2936 13.6095C22.2936 14.6805 21.8643 15.5925 21.1287 16.4761C20.3739 17.3829 19.3563 18.1913 18.2509 19.0643L18.2252 19.0846C17.2883 19.8241 16.2458 20.647 15.3958 21.5675C14.5542 20.655 13.5216 19.8387 12.593 19.1047L12.5424 19.0646L12.542 19.0643C11.4363 18.1911 10.4189 17.3825 9.66433 16.4757C8.92905 15.5921 8.5 14.6802 8.5 13.6095C8.5 12.6141 8.8562 11.8226 9.42223 11.278C9.99108 10.7308 10.8333 10.375 11.9021 10.375C12.9791 10.375 14.0111 11.1454 14.6851 11.8254Z"
                  stroke="#A2A6B0"
                  stroke-width="2"
                />
              </svg>
            </div>
            <div>
              <img src={fav1} alt="" />
            </div>
            <div>
              <img src={fav2} alt="" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="image md:w-[210px] md:h-[210px] lg:w-[255px] lg:h-[444px] ">
              <img src={p02} alt="" className="h-full w-full object-contain"/>
            </div>
            <div className="sponsor md:h-6 md:w-[214px] lg:h-7 lg:w-[263px]">
              <img src={sponsor} alt="" className="h-full w-full object-contain"/>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

const ProductDescriptionShowCase = () => {
  let [activeTab, setActiveTab] = useState("about");
  const [selectedColor, setSelectedColor] = useState("#4B4D4F");
  const colors = ["#4B4D4F", "#F2E9DC", "#EAE8EB"];
  const detailsList = [
    "Intel Core i7-10700F",
    "Intel H410",
    "WHITE",
    "NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6",
    "SO-DIMM 16GB (16GB x 1) DDR4 2666MHz",
    "2 total slots (64GB Max)",
    "512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM",
    "Gaming Keyboard GK30 + Gaming Mouse GM11",
    "3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)",
    "Intel WGI219V ethernet (10/100/1000M)",
    "AX200 (WIFI 6)+BT5.1",
    "PSU 330W",
    "Fan Cooler",
  ];
  let [count, setCount] = useState(1);

  return (
    <>
      <div className="border-b border-[#00000033]">
        <Container className="hidden md:block">
          <div className="header flex md:flex-row-reverse flex-col justify-between items-center lg:py-[26px] py-[22px]">
            <div className="counter flex items-center">
              <p className="text-xs lg:text-sm text-black mr-4 text-center">
                On Sale from <br className="lg:hidden block" />{" "}
                <span className="font-semibold text-sm">$3,299.00</span>
              </p>
              <div className="count lg:w-[70px] lg:h-[50px] w-[56px] h-[42.4px] bg-[#E5ECF1] flex items-center justify-center rounded-md">
                <p className="text-black lg:text-[13px] text-[11px] leading-[210%] font-semibold lg:mr-3 md:mr-4">
                  {count}
                </p>
                <div>
                  <FaAngleUp
                    onClick={() => setCount(count + 1)}
                    className="text-[#A2A6B0] cursor-pointer hover:text-[green] duration-300"
                  />
                  <FaAngleDown
                    onClick={() => (count > 1 ? setCount(count - 1) : count)}
                    className="text-[#A2A6B0] cursor-pointer hover:text-[#d22626] duration-300"
                  />
                </div>
              </div>
              <div className="flex lg:gap-[13px] gap-2 items-center justify-center ml-[14px] lg:ml-[21px]">
                <Button className="lg:py-4 lg:px-[34px] md:py-2 md:px-[28.5px] text-[13px] lg:text-sm font-semibold">
                  Add to Cart
                </Button>
                <PaypalButton className="lg:px-[34px] md:px-[28.5px]" />
              </div>
            </div>
            <div className="tabs">
              <ul className="flex lg:gap-[30px] md:gap-[18px] items-center">
                <li
                  onClick={() => setActiveTab("about")}
                  className={`productInsideLi ${
                    activeTab === "about"
                      ? "text-black after:w-[100%]"
                      : "text-[#666] after:w-[0%]"
                  }`}
                >
                  About Product
                </li>
                <li
                  onClick={() => setActiveTab("details")}
                  className={`productInsideLi ${
                    activeTab === "details"
                      ? "text-black after:w-[100%]"
                      : "text-[#666] after:w-[0%]"
                  }`}
                >
                  Details
                </li>
                <li
                  onClick={() => setActiveTab("specs")}
                  className={`productInsideLi ${
                    activeTab === "specs"
                      ? "text-black after:w-[100%]"
                      : "text-[#666] after:w-[0%]"
                  }`}
                >
                  Specs
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-gradient-to-r from-[#F5F7FF] via-white to-white hidden md:block">
        <Container>
          <div className="flex">
            <div className="text lg:w-[806px] md:w-[424px] lg:pt-[67px] md:pt-[34px] lg:pr-[118px] md:pr-[54px] lg:pb-[59px] md:pb-[46px] bg-[#F5F7FF]">
              <div className="lg:pl-[124px] lg:pb-[166px]">
                <BreadCrumbs />
                <div className="productTitle md:mt-[25px] lg:mb-3 md:mb-[6px] md:text-[22px] lg:text-[32px] font-medium">
                  MSI MPG Trident 3
                </div>
                <p className="text-[#0156FF] lg:text-xs md:text-[10px] lg:mb-6 md:mb-4">
                  Be the first to review this product
                </p>
                {/* about part */}
                {activeTab === "about" && (
                  <div className="aboutProductTab">
                    <p className="lg:text-lg md:text-xs font-light md:mb-4 lg:mb-11">
                      MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER,
                      16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming
                      Keyboard and Mouse 3 Years Warranty Gaming Desktop
                    </p>
                    <ColorSelector
                      colors={colors}
                      selectedColor={selectedColor}
                      onSelectColor={setSelectedColor}
                    />
                  </div>
                )}
                {/* details part */}
                {activeTab === "details" && (
                  <div>
                    <ul className="ml-[10px]">
                      {detailsList.map((item, key) => (
                        <li className="productDetailsTabLi">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* specs part */}
                {activeTab === "specs" && (
                  <div className="border border-[#CACDD8] lg:w-[401px] md:w-[345px] bg-white">
                    <div className="child md:py-[10px] flex items-center md:gap-[10px] md:px-[15px]">
                      <p className="md:w-[121px] text-black md:text-sm">CPU</p>
                      <p className="md:w-[240px] text-[#666] md:text-sm">N/A</p>
                    </div>
                    <div className="child md:py-[10px] flex items-center md:gap-[10px] md:px-[15px] bg-[#F5F7FF]">
                      <p className="md:w-[121px] text-black md:text-sm">
                        Featured
                      </p>
                      <p className="md:w-[240px] text-[#666] md:text-sm">N/A</p>
                    </div>
                    <div className="child md:py-[10px] flex items-center md:gap-[10px] md:px-[15px]">
                      <p className="md:w-[121px] text-black md:text-sm">
                        I/O Ports
                      </p>
                      <p className="md:w-[240px] text-[#666] md:text-sm">N/A</p>
                    </div>
                  </div>
                )}
                <div className="question flex items-center justify-between lg:mt-[28px] md:mt-[35px]">
                  <p className="lg:text-xs md:text-[10px] font-semibold">
                    Have a Question?{" "}
                    <Link
                      to="/contact/us"
                      className="font-normal text-[#0156FF] underline decoration-[#0156FF] cursor-pointer"
                    >
                      Contact Us
                    </Link>
                  </p>
                  <p className="md:text-xs">SKU D5515AI</p>
                </div>
              </div>
              <p className="lg:block hidden text-sm font-bold cursor-pointer">
                <span className="font-normal">+</span> More information
              </p>
            </div>
            <div className="slider lg:w-[595px] md:w-[339px] lg:mt-[60px] lg:ml-6">
              <div className="sliderInner md:w-[279px] md:h-[278px] lg:w-full lg:h-auto mx-auto my-auto">
                <SimpleSlider />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="block md:hidden">
        <Container className="flex flex-col">
          <div className="slider py-10 bg-red-300"></div>
          <div className="tabs mt-5 mb-[10px]">
            <ul className="flex gap-[18px] items-center">
              <li
                onClick={() => setActiveTab("about")}
                className={`productInsideLi ${
                  activeTab === "about"
                    ? "text-black after:w-[100%]"
                    : "text-[#666] after:w-[0%]"
                }`}
              >
                About Product
              </li>
              <li
                onClick={() => setActiveTab("details")}
                className={`productInsideLi ${
                  activeTab === "details"
                    ? "text-black after:w-[100%]"
                    : "text-[#666] after:w-[0%]"
                }`}
              >
                Details
              </li>
              <li
                onClick={() => setActiveTab("specs")}
                className={`productInsideLi ${
                  activeTab === "specs"
                    ? "text-black after:w-[100%]"
                    : "text-[#666] after:w-[0%]"
                }`}
              >
                Specs
              </li>
            </ul>
          </div>
          <div className="infos">
            <div className="pb-[30px]">
              <div className="productTitle mb-[6px] text-[22px] font-medium">
                MSI MPG Trident 3
              </div>
              <p className="text-[#0156FF] text-[10px] mb-[14px]">
                Be the first to review this product
              </p>
              {/* about part */}
              {activeTab === "about" && (
                <div className="aboutProductTab">
                  <p className="text-xs font-light leading-[166.67%] mb-4">
                    MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER,
                    16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming
                    Keyboard and Mouse 3 Years Warranty Gaming Desktop
                  </p>
                  <ColorSelector
                    colors={colors}
                    selectedColor={selectedColor}
                    onSelectColor={setSelectedColor}
                  />
                </div>
              )}
              {/* details part */}
              {activeTab === "details" && (
                <div>
                  <ul className="ml-[10px]">
                    {detailsList.map((item, key) => (
                      <li className="productDetailsTabLi">{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {/* specs part */}
              {activeTab === "specs" && (
                <div className="border border-[#CACDD8] w-[234px] bg-white">
                  <div className="child py-[6px] flex items-center md:gap-[10px] px-[15px]">
                    <p className="w-[121px] text-black md:text-sm">CPU</p>
                    <p className="md:w-[240px] w-[84.314px] text-[#666] md:text-sm">
                      N/A
                    </p>
                  </div>
                  <div className="child py-[6px] flex items-center md:gap-[10px] px-[15px] bg-[#F5F7FF]">
                    <p className="w-[121px] text-black md:text-sm">Featured</p>
                    <p className="md:w-[240px] w-[84.314px] text-[#666] md:text-sm">
                      N/A
                    </p>
                  </div>
                  <div className="child py-[6px] flex items-center md:gap-[10px] px-[15px]">
                    <p className="w-[121px] text-black md:text-sm">I/O Ports</p>
                    <p className="md:w-[240px] w-[84.314px] text-[#666] md:text-sm">
                      N/A
                    </p>
                  </div>
                </div>
              )}
              <div className="question flex items-center justify-between mt-5">
                <p className="lg:text-xs text-[10px] font-semibold">
                  Have a Question?{" "}
                  <Link
                    to="/contact/us"
                    className="font-normal text-[#0156FF] underline decoration-[#0156FF] cursor-pointer"
                  >
                    Contact Us
                  </Link>
                </p>
                <p className="text-xs">SKU D5515AI</p>
              </div>
            </div>
          </div>
          <div className="counter flex items-center flex-wrap justify-center">
            <div className="count lg:w-[70px] lg:h-[50px] w-[56px] h-[42.4px] bg-[#E5ECF1] flex items-center justify-center rounded-md">
              <p className="text-black lg:text-[13px] text-[11px] leading-[210%] font-semibold lg:mr-3 md:mr-4 mr-3">
                {count}
              </p>
              <div>
                <FaAngleUp
                  onClick={() => setCount(count + 1)}
                  className="text-[#A2A6B0] cursor-pointer hover:text-[green] duration-300"
                />
                <FaAngleDown
                  onClick={() => (count > 1 ? setCount(count - 1) : count)}
                  className="text-[#A2A6B0] cursor-pointer hover:text-[#d22626] duration-300"
                />
              </div>
            </div>
            <div className="flex gap-2 items-center justify-center ml-3">
              <Button className="py-2 px-[28.5px] text-[13px] lg:text-sm font-semibold">
                Add to Cart
              </Button>
              <PaypalButton className="px-[28.5px] py-2" />
            </div>
            <div className="text-xs text-black bg-[#F5F7FF] w-[339px] h-[32px] flex items-center justify-center rounded-[4px] my-[10px]">
              <p>
                On Sale from{" "}
                <span className="font-semibold text-sm">$3,299.00</span>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProductDescriptionShowCase;
