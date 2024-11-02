import React from "react";
import BreadCrumbs from "../Layers/BreadCrumbs";
import Container from "../Components/Container";
import supp01 from "/Common Images/Support-1.png";
import supp02 from "/Common Images/Support-2.png";
import supp03 from "/Common Images/Support-3.png";
import Title from "../Layers/Title";
import Input from "../Layers/Input";
import Button from "../Layers/Button";

const Contact = () => {
  return (
    <div>
      <section id="contact">
        <Container>
          <BreadCrumbs className="md:mt-[21px] lg:mb-[19px] md:mb-3 mt-4 mb-[10px]" />
          <Title text="Contact Us" />
          <p className="lg:text-base text-xs text-black font-light lg:leading-[187.5%] leading-[183.333%] md:mt-3 mt-[10px]">
            We love hearing from you, our Shop customers. <br />
            Please contact us and we will make sure to get back to you as soon
            as we possibly can.
          </p>
          <div className="flex md:flex-row flex-col lg:gap-x-16">
            <div className="form lg:w-[930px] md:w-[345px] lg:mt-5 md:mt-3 mt-4">
              <div className="flex flex-wrap lg:gap-x-[30px] lg:gap-y-3 gap-[5px] w-full">
                <div className="name lg:w-[449px] w-[345px]">
                  <Input
                    label="Your Name"
                    labelFor="name"
                    required="*"
                    inputType="text"
                    placeholder="Your Name"
                  />
                </div>
                <div className="email lg:w-[449px] w-[345px]">
                  <Input
                    label="Your Email"
                    labelFor="email"
                    required="*"
                    inputType="text"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mobile lg:w-[449px] w-[345px]">
                  <Input
                    label="Your Phone Number"
                    labelFor="mobile"
                    inputType="number"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div className="comment w-full lg:h-[236px] h-[145px]">
                  <label
                    htmlFor="comment"
                    className="text-[11px] lg:text-[13px] text-black font-semibold leading-[210%] my-[5px]"
                  >
                    What’s on your mind?{" "}
                    <span className="text-[#C94D3F]">*</span>
                  </label>
                  <textarea
                    type="text"
                    id="comment"
                    placeholder="Jot us a note and we’ll get back to you as quickly as possible"
                    className="w-full h-full border border-[#A2A6B0] box-border align-top rounded-[4px] lg:py-[15px] lg:px-[17px] pt-[10px] pb-2 px-[15px] placeholder:text-[#A2A6B0] text-black lg:text-sm text-xs lg:leading-[142.857%] leading-[167.677%] outline-none"
                  ></textarea>
                </div>
              </div>
              <Button className='lg:px-[50px] lg:py-[15px] px-[28.5px] mt-10'>Submit</Button>
            </div>
            <div className="address"></div>
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

export default Contact;
