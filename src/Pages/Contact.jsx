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
          <div className="flex md:flex-row flex-col md:items-start items-center justify-between">
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
              <Button className="lg:px-[50px] lg:py-[15px] px-[28.5px] mt-10">
                Submit
              </Button>
            </div>
            <div className="address bg-[#F5F7FF] pl-[31px] lg:pr-[88px] pr-[59px] pt-[26px] lg:pb-[74px] pb-8 flex items-start justify-start flex-col lg:gap-[15px] gap-[14px] lg:mt-[-50px] md:mt-5 mt-6">
              <div className="child flex gap-x-[10px]">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M14.5714 14.5714C13.3929 14.5714 12.4286 13.6456 12.4286 12.5142C12.4286 11.3828 13.3929 10.4571 14.5714 10.4571C15.75 10.4571 16.7143 11.3828 16.7143 12.5142C16.7143 13.6456 15.75 14.5714 14.5714 14.5714ZM21 12.7199C21 8.98622 18.1607 6.34279 14.5714 6.34279C10.9821 6.34279 8.14286 8.98622 8.14286 12.7199C8.14286 15.1268 10.2321 18.3154 14.5714 22.1211C18.9107 18.3154 21 15.1268 21 12.7199ZM14.5714 4.28564C19.0714 4.28564 23.1429 7.59764 23.1429 12.7199C23.1429 16.1348 20.2821 20.1771 14.5714 24.8571C8.86071 20.1771 6 16.1348 6 12.7199C6 7.59764 10.0714 4.28564 14.5714 4.28564Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="text lg:mt-2 mt-1">
                  <h3 className="lg:text-lg text-sm text-black font-semibold">
                    Address:
                  </h3>
                  <p className="lg:text-[13px] text-[11px] text-black lg:m-0 mt-[3px]">
                    1234 Street Adress City Address, 1234
                  </p>
                </div>
              </div>
              <div className="child flex gap-x-[10px]">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M15 24.5642C9.72753 24.5642 5.43571 20.2724 5.43571 14.9999C5.43571 9.72747 9.72753 5.43564 15 5.43564C20.2725 5.43564 24.5643 9.72747 24.5643 14.9999C24.5643 20.2724 20.2725 24.5642 15 24.5642Z"
                      stroke="black"
                      stroke-width="2.3"
                    />
                    <path
                      d="M16.0004 17.2345L16.7384 16.4961C16.8379 16.3979 16.9636 16.3306 17.1005 16.3026C17.2374 16.2745 17.3794 16.2867 17.5095 16.3379L18.409 16.6972C18.5404 16.7505 18.6531 16.8416 18.7328 16.9589C18.8126 17.0763 18.8558 17.2146 18.8571 17.3564V19.0046C18.8564 19.1011 18.8361 19.1965 18.7975 19.2849C18.7589 19.3734 18.7029 19.4531 18.6327 19.5194C18.5625 19.5856 18.4796 19.6369 18.3891 19.6702C18.2986 19.7036 18.2022 19.7182 18.1059 19.7133C11.8025 19.3211 10.5306 13.981 10.2901 11.9373C10.2789 11.8369 10.2891 11.7353 10.32 11.6392C10.3509 11.543 10.4018 11.4545 10.4694 11.3795C10.5369 11.3044 10.6196 11.2446 10.7119 11.2038C10.8042 11.163 10.9042 11.1422 11.0051 11.1428H12.5966C12.7386 11.1433 12.8773 11.1862 12.9947 11.2661C13.1121 11.346 13.203 11.4592 13.2556 11.5911L13.6148 12.491C13.6676 12.6206 13.681 12.7629 13.6535 12.9001C13.626 13.0372 13.5586 13.1633 13.4599 13.2624L12.7218 14.0008C12.7218 14.0008 13.1469 16.8785 16.0004 17.2345Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="text lg:mt-2 mt-1">
                  <h3 className="lg:text-lg text-sm text-black font-semibold">
                    Phone:
                  </h3>
                  <p className="lg:text-[13px] text-[11px] text-black lg:m-0 mt-[3px]">
                    (00) 1234 5678
                  </p>
                </div>
              </div>
              <div className="child flex gap-x-[10px]">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M15 24.5642C9.72753 24.5642 5.43571 20.2724 5.43571 14.9999C5.43571 9.72747 9.72753 5.43564 15 5.43564C20.2725 5.43564 24.5643 9.72747 24.5643 14.9999C24.5643 20.2724 20.2725 24.5642 15 24.5642Z"
                      stroke="black"
                      stroke-width="2.3"
                    />
                    <path
                      d="M15 10.5V15.75H20.25"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <div className="text lg:mt-2 mt-1">
                  <h3 className="lg:text-lg text-sm text-black font-semibold">
                    We are open:
                  </h3>
                  <p className="lg:text-[13px] text-[11px] text-black lg:m-0 mt-[3px]">
                    Monday - Thursday: 9:00 AM - 5:30 PM <br /> Friday 9:00 AM -
                    6:00 PM
                    <br /> Saturday: 11:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
              <div className="child flex gap-x-[10px]">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M15 24.5642C9.72753 24.5642 5.43571 20.2724 5.43571 14.9999C5.43571 9.72747 9.72753 5.43564 15 5.43564C20.2725 5.43564 24.5643 9.72747 24.5643 14.9999C24.5643 20.2724 20.2725 24.5642 15 24.5642Z"
                      stroke="black"
                      stroke-width="2.3"
                    />
                    <path
                      d="M9.85712 18.3983V11.9143L15 15.5143L20.1428 11.9143V18.3983"
                      stroke="black"
                      stroke-width="1.7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="text lg:mt-[7px] mt-1">
                  <h3 className="lg:text-lg text-sm text-black font-semibold">
                    E-mail:
                  </h3>
                  <p className="lg:text-[13px] text-[11px] text-black lg:m-0 mt-[3px]">
                    shop@email.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* support */}
      <section
        id="support"
        className="bg-[#F5F9FF] lg:mt-[123px] md:mt-[34px] mt-7"
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

export default Contact;
