import React, { useState } from "react";
import Container from "../Components/Container";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Button from "../Layers/Button";
import PaypalButton from "../Layers/PaypalButton";
import BreadCrumbs from "../Layers/BreadCrumbs";
import { Link } from "react-router-dom";
import ColorSelector from "./ColorSelector";

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
      <div className="bg-gradient-to-r from-[#F5F7FF] via-white to-white">
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
                {activeTab === "specs" && <div>specs</div>}
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
            <div className="slider lg:w-[595px] md:w-[339px] py-6 bg-slate-300"></div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProductDescriptionShowCase;
