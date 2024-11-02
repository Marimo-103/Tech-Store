import React from "react";
import BreadCrumbs from "../Layers/BreadCrumbs";
import Container from "../Components/Container";
import supp01 from "/Common Images/Support-1.png";
import supp02 from "/Common Images/Support-2.png";
import supp03 from "/Common Images/Support-3.png";
import feature01 from "/Common Images/features-1.png";
import feature02 from "/Common Images/features-2.png";
import feature03 from "/Common Images/features-3.png";
import feature04 from "/Common Images/features-4.png";
import Heading from "../Layers/Heading";
import InfoText from "../Layers/InfoText";
import { BsArrowDownRight } from "react-icons/bs";

const ProductInside = () => {
  return (
    <div>
      <section>
        <Container className="!max-w-[1920px] flex md:flex-row-reverse flex-col">
          <div className="imageSlider md:w-[45.68%] bg-slate-200 py-20">2</div>
          <div className="text md:w-[55.42%] bg-slate-300 py-20">
            <div className="head py-8 bg-red-300">1</div>
            <div className="content py-14 bg-[#F5F7FF] lg:ml-[35.63%]"></div>
          </div>
        </Container>
      </section>

      {/* further details slider */}
      <section
        id="details02"
        className="lg:pt-[165px] lg:pb-[152px] md:pt-[58px] md:pb-[70px] pt-[230px] pb-8 lg:bg-i7D md:bg-i7T bg-i7M bg-cover bg-center"
      >
        <Container>
          <div className="max-w-[326px] lg:max-w-[436px] md:p-0 pl-[13px] md:ml-[50px] lg:ml-[15%]">
            <Heading text="Outplay the Competittion" />
            <InfoText
              text="Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience."
              className="lg:mt-10 mt-3 mb-2 lg:mb-4"
            />
            <InfoText text="*Performance compared to i7-9700. Specs varies by model." />
          </div>
        </Container>
      </section>

      {/* Customer support */}
      <section
        id="CSupport"
        className="bg-customer-support bg-center bg-cover lg:py-[100px] md:py-16 pt-[37px] pb-[126px]"
      >
        <Container>
          <div className="flex flex-col w-[243px] lg:w-[347px] gap-[14px] lg:gap-5 md:ml-[50px] lg:ml-[15%]">
            <div className="flex items-center justify-between lg:pl-[26px] lg:pr-5 lg:py-4 pl-[18px] pr-[22px] py-[11px] rounded-[6px] border border-[#CACDD8] w-full cursor-pointer">
              <p className="lg:text-base text-xs text-[#313131] font-medium">
                Product Support
              </p>
              <BsArrowDownRight className="-rotate-45 lg:text-lg text-sm text-[#0156FF]" />
            </div>
            <div className="flex items-center justify-between lg:pl-[26px] lg:pr-5 lg:py-4 pl-[18px] pr-[22px] py-[11px] rounded-[6px] border border-[#CACDD8] w-full cursor-pointer">
              <p className="lg:text-base text-xs text-[#313131] font-medium">
                Product Support
              </p>
              <BsArrowDownRight className="-rotate-45 lg:text-lg text-sm text-[#0156FF]" />
            </div>
            <div className="flex items-center justify-between lg:pl-[26px] lg:pr-5 lg:py-4 pl-[18px] pr-[22px] py-[11px] rounded-[6px] border border-[#CACDD8] w-full cursor-pointer">
              <p className="lg:text-base text-xs text-[#313131] font-medium">
                Product Support
              </p>
              <BsArrowDownRight className="-rotate-45 lg:text-lg text-sm text-[#0156FF]" />
            </div>
          </div>
        </Container>
      </section>

      {/* features section */}
      <section
        id="features"
        className="bg-custom-radial lg:pt-[76px] lg:pb-[104px] md:pt-[31px] md:pb-[38px] py-8 md:px-[75px] lg:px-0"
      >
        <Container className="text-center">
          <Heading text="Features" />
          <InfoText
            className="lg:max-w-[418px] max-w-[326px] mx-auto lg:mt-7 mt-[14px] lg:mb-[60px] mb-[31px]"
            text="The MPG series brings out the best in gamers by allowing full expression
            in color with advanced RGB lighting control and synchronization."
          />
          <div className="contain flex md:flex-row flex-col md:flex-wrap lg:justify-center md:justify-between md:items-start items-center lg:gap-x-[47px]">
            <div className="child lg:p-0 p-[10px] flex flex-col lg:gap-7 gap-[10px] items-center w-[254px]">
              <div className="img w-[80px] h-[80px] lg:w-[136px] lg:h-[136px]">
                <img src={feature01} alt="" className="w-full h-full" />
              </div>
              <p className="lg:text-sm text-xs text-white font-light leading-[183.333%]">
                <span className="font-bold">Intel® Core™ i7</span> processor
                with the upmost computing power to bring you an unparalleled
                gaming experience.
              </p>
            </div>
            <div className="child lg:p-0 p-[10px] flex flex-col lg:gap-7 gap-[10px] items-center w-[254px]">
              <div className="img w-[80px] h-[80px] lg:w-[136px] lg:h-[136px]">
                <img src={feature02} alt="" className="w-full h-full" />
              </div>
              <p className="lg:text-sm text-xs text-white font-light leading-[183.333%]">
                The new <span className="font-bold"> GeForce® RTX SUPER™7</span>{" "}
                Series has more cores and higher clocks for superfast
                performance compared to previous-gen GPUs.
              </p>
            </div>
            <div className="child lg:p-0 p-[10px] flex flex-col lg:gap-7 gap-[10px] items-center w-[254px]">
              <div className="img w-[80px] h-[80px] lg:w-[136px] lg:h-[136px]">
                <img src={feature03} alt="" className="w-full h-full" />
              </div>
              <p className="lg:text-sm text-xs text-white font-light leading-[183.333%]">
                Unleash the full potential with the latest{" "}
                <span className="font-bold">SSD technology</span>, the NVM
                Express. 6 times faster than traditional SATA SSD.
              </p>
            </div>
            <div className="child lg:p-0 p-[10px] flex flex-col lg:gap-7 gap-[10px] items-center w-[254px]">
              <div className="img w-[80px] h-[80px] lg:w-[136px] lg:h-[136px]">
                <img src={feature04} alt="" className="w-full h-full" />
              </div>
              <p className="lg:text-sm text-xs text-white font-light leading-[183.333%]">
                Featuring the latest{" "}
                <span className="font-bold">10th Gen Intel® Core™</span>{" "}
                processors, memory can support up to DDR4 2933MHz to delivers an
                unprecedented gaming experience.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* support */}
      <section id="support" className="bg-[#F5F9FF]">
        <div className="support max-w-[1160px] mx-auto lg:pt-[60px] lg:pb-11 md:py-[37.5px] py-[25px] lg:px-[53px] flex md:flex-row flex-col md:justify-between justify-center items-center gap-y-5">
          <div className="child flex flex-col items-center gap-y-2 lg:w-[265px] md:w-[229px] w-[265px]">
            <div className="img w-[45px] h-[46px] lg:w-[65px] lg:h-[65px]">
              <img src={supp01} alt="" className="w-full h-full" />
            </div>
            <div className="text w-full text-center">
              <h3 className="lg:text-lg text-sm text-black font-bold leading-[140%]">
                Product Support
              </h3>
              <p className="lg:text-sm text-xs text-[#000000b3] leading-[140%] lg:mt-[13px] mt-[5px]">
                Up to 3 years on-site warranty available for your peace of mind.
              </p>
            </div>
          </div>
          <div className="child flex flex-col items-center gap-y-2 lg:w-[265px] md:w-[229px] w-[265px]">
            <div className="img w-[45px] h-[46px] lg:w-[65px] lg:h-[65px]">
              <img src={supp02} alt="" className="w-full h-full" />
            </div>
            <div className="text w-full text-center">
              <h3 className="lg:text-lg text-sm text-black font-bold leading-[140%]">
                Personal Account
              </h3>
              <p className="lg:text-sm text-xs text-[#000000b3] leading-[140%] lg:mt-[13px] mt-[5px]">
                With big discounts, free delivery and a dedicated support
                specialist.
              </p>
            </div>
          </div>
          <div className="child flex flex-col items-center gap-y-2 lg:w-[265px] md:w-[229px] w-[265px]">
            <div className="img w-[45px] h-[46px] lg:w-[65px] lg:h-[65px]">
              <img src={supp03} alt="" className="w-full h-full" />
            </div>
            <div className="text w-full text-center">
              <h3 className="lg:text-lg text-sm text-black font-bold leading-[140%]">
                Amazing Savings
              </h3>
              <p className="lg:text-sm text-xs text-[#000000b3] leading-[140%] lg:mt-[13px] mt-[5px]">
                Up to 70% off new Products, you can be sure of the best price.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductInside;
