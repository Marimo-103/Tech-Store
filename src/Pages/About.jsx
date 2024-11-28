import React from "react";
import Container from "../Components/Container";
import BreadCrumbs from "../Layers/BreadCrumbs";
import Title from "../Layers/Title";
import Heading from "../Layers/Heading";
import section_01_img from "/Common Images/About_Section_01.png";
import section_02_img from "/Common Images/About_Section_02.png";
import shopLogo from "/Common Images/About_Section_02_Logo.png";
import section_03_img from "/Common Images/About_Section_03.png";
import loveLogo from "/Common Images/About_Section_03_Logo.png";
import deliveryLogo from "/Common Images/About_Section_05_Logo.png";
import section_05_img from "/Common Images/About_Section_05.png";
import supp01 from "/Common Images/Support-1.png";
import supp02 from "/Common Images/Support-2.png";
import supp03 from "/Common Images/Support-3.png";
import ReviewSlider from "../Components/ReviewSlider";
import Button from "../Layers/Button";

const About = () => {
  return (
    <div>
      <section id="about_heading">
        <Container>
          <BreadCrumbs className="md:mt-[21px] lg:mb-[19px] md:mb-3 mt-4 mb-[10px]" />
          <Title text="About Us" />
        </Container>
      </section>

      {/* family keeps growing */}
      <section
        id="family"
        className="bg-black lg:py-[96.5px] lg:mt-5 md:mt-3 mt-4 md:pt-[39px] md:pb-12"
      >
        <div className="flex flex-col md:flex-row-reverse lg:gap-x-[123px] md:gap-x-[34px] gap-y-[17px] justify-center items-center text-white">
          <div className="image lg:w-[470.215px] lg:h-[488.539px] md:w-[260px] md:h-[270px] w-full h-[186px]">
            <img
              src={section_01_img}
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="text lg:w-[565px] w-[325px] mb-[26px] md:m-0">
            <Heading
              text="A Family That Keeps On Growing"
              className="lg:mb-[34px] mb-3"
            />
            <p className="aboutPageParagraphWhite">
              We always aim to please the home market, supplying great computers
              and hardware at great prices to non-corporate customers, through
              our large Melbourne CBD showroom and our online store.
            </p>
            <br />
            <p className="aboutPageParagraphWhite">
              Shop management approach fosters a strong customer service focus
              in our staff. We prefer to cultivate long-term client
              relationships rather than achieve quick sales, demonstrated in the
              measure of our long-term success.
            </p>
          </div>
        </div>
      </section>

      {/* shop.com */}
      <section id="family" className="lg:py-[62px] md:pt-[11px] md:pb-[21px]">
        <div className="flex flex-col md:flex-row lg:gap-x-[92px] md:gap-x-4 gap-y-2 justify-center items-center text-white">
          <div className="image lg:h-[557px] lg:w-[777px] md:w-[372px] md:h-[308px] w-[246px] h-[174px]">
            <img
              src={section_02_img}
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="text lg:w-[565px] w-[326px] mb-7 md:m-0">
            <div className="flex lg:flex-row flex-col lg:gap-6">
              <div className="lg:w-[61px] lg:h-[50px] w-[38px] h-[30px] lg:scale-x-[1] scale-x-[-1]">
                <img src={shopLogo} alt="" className="w-full h-full" />
              </div>
              <h2 className="aboutPageHeadingBlack">Shop.com</h2>
            </div>
            <p className="aboutPageParagraphBlack mt-[10px] lg:mt-8">
              <span className="font-normal">Shop.com</span> is a proudly
              Australian owned, Melbourne based supplier of I.T. goods and
              services, operating since 1991. Our client base encompasses
              individuals, small business, corporate and government
              organisations. We provide complete business IT solutions, centred
              on high quality hardware and exceptional customer service.
            </p>
          </div>
        </div>
      </section>

      {/* safe hands */}
      <section
        id="family"
        className="lg:py-[62px] md:py-[57px] pt-[18px] bg-black"
      >
        <div className="flex flex-col md:flex-row-reverse lg:gap-x-[102px] md:gap-x-[65px] gap-y-3 justify-center items-center text-white">
          <div className="image lg:h-[536.319px] lg:w-[439.405px] md:w-[223.85px] md:h-[273.221px] w-[119.1px] h-[145.369px]">
            <img
              src={section_03_img}
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="text lg:w-[565px] w-[326px] mb-7 md:m-0">
            <div className="flex lg:flex-row flex-col lg:gap-6">
              <div className="lg:w-[56px] lg:h-[50px] w-[32px] h-[30px] lg:scale-x-[1] scale-x-[-1]">
                <img src={loveLogo} alt="" className="w-full h-full" />
              </div>
              <Heading text="Now You're In Safe Hands" />
            </div>
            <p className="aboutPageParagraphWhite mt-[10px] lg:mt-8">
              Experience a 40% boost in computing from last generation. MSI
              Desktop equips the 10th Gen. Intel® Core™ i7 processor with the
              upmost computing power to bring you an unparalleled gaming
              experience.
            </p>
            <br />
            <p className="aboutPageParagraphWhite">
              *Performance compared to i7-9700. Specs varies by model.
            </p>
          </div>
        </div>
      </section>

      {/* high quality */}
      <div className="py-10"></div>

      {/* delivery */}
      <section
        id="family"
        className="lg:py-[70px] md:py-[65px] pt-[22px] bg-black"
      >
        <div className="flex flex-col md:flex-row-reverse lg:gap-x-[102px] md:gap-x-[65px] gap-y-3 justify-center items-center text-white">
          <div className="image lg:h-[536.319px] lg:w-[439.405px] md:w-[223.85px] md:h-[273.221px] w-[119.1px] h-[145.369px]">
            <img
              src={section_05_img}
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="text lg:w-[565px] w-[326px] mb-7 md:m-0">
            <div className="flex lg:flex-row flex-col lg:gap-6">
              <div className="lg:w-[56px] lg:h-[50px] w-[32px] h-[30px] lg:scale-x-[1] scale-x-[-1]">
                <img src={deliveryLogo} alt="" className="w-full h-full" />
              </div>
              <Heading text="We Deliver to Any Regions" />
            </div>
            <p className="aboutPageParagraphWhite mt-[10px] lg:mt-8">
              We deliver our goods all across Australia. No matter where you
              live, your order will be shipped in time and delivered right to
              your door or to any other location you have stated. The packages
              are handled with utmost care, so the ordered products will be
              handed to you safe and sound, just like you expect them to be.
            </p>
          </div>
        </div>
      </section>

      {/* review */}
      <section id="review" className="mt-3 md:mt-5 lg:mt-[63px]">
        <Container>
          <div className="slider max-w-[1160px] mx-auto lg:px-[119px] lg:pt-[49px] lg:pb-[56px] md:pl-[42px] md:pt-[34px] md:pb-[29px] pr-[19px] pl-3 py-[26px] bg-[#F5F7FF] relative">
            <ReviewSlider />
            <Button className="px-[26px] absolute lg:bottom-[56px] lg:left-[119px] md:left-[42px] md:bottom-[27px] bottom-[29px] left-[12px]">
              Leave Us A Review
            </Button>
          </div>
        </Container>
      </section>

      {/* support */}
      <section
        id="support"
        className="bg-[#F5F9FF] lg:mt-[63px] md:mt-5 mt-3"
      >
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

export default About;
