import React from "react";
import Container from "../Components/Container";
import BreadCrumbs from "../Layers/BreadCrumbs";
import Title from "../Layers/Title";
import supp01 from "/Common Images/Support-1.png";
import supp02 from "/Common Images/Support-2.png";
import supp03 from "/Common Images/Support-3.png";
import Input from "../Layers/Input";
import Button from "../Layers/Button";

const Login = () => {
  return (
    <div>
      <section>
        <Container>
          <BreadCrumbs className="md:mt-5 mt-4" />
          <Title
            text="Customer Login"
            className="lg:mt-[19px] lg:mb-[21px] md:my-[13px] mt-[10px] mb-4"
          />
          <div className="flex flex-col md:flex-row lg:justify-center lg:items-start md:items-start md:justify-start justify-center items-center lg:gap-[34px] md:gap-5 gap-4">
            <div className="box lg:w-[564px] lg:h-[415px] lg:px-[57.5px] lg:pt-[37px] lg:pb-10 py-8 px-[19px] bg-[#F5F7FF] w-[345px] h-[344px]">
              <h3 className="lg:text-lg text-sm text-black font-semibold">
                Registered Customers
              </h3>
              <p className="lg:text-sm text-xs text-black font-light lg:leading-[214.286%] leading-[183.333%] mt-2 mb-3">
                If you have an account, sign in with your email address.
              </p>
              <div className="flex flex-col gap-[7px]">
                <div className="flex flex-col">
                  <Input
                    label="Email"
                    labelFor="mail"
                    required="*"
                    inputType="text"
                    placeholder="Your Email"
                  />
                </div>
                <div className="flex flex-col">
                  <Input
                    label="Password"
                    labelFor="password"
                    required="*"
                    inputType="password"
                    placeholder="Your Password"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4 lg:gap-6 lg:mt-[30px] mt-4">
                <Button className="lg:py-[14.5px] lg:px-[51.5px] px-[42.5px] lg:text-sm text-[13px]">
                  Sign In
                </Button>
                <p className="lg:text-sm text-[11px] text-[#0156FF] leading-[20px] cursor-pointer">
                  Forgot Your Password?
                </p>
              </div>
            </div>
            <div className="box lg:w-[564px] lg:h-[415px] lg:px-[57.5px] lg:pt-[37px] lg:pb-10 py-8 px-[19px] bg-[#F5F7FF] w-[345px] h-[263px]">
              <h3 className="lg:text-lg text-sm text-black font-semibold">
                New Customer?
              </h3>
              <p className="lg:text-sm text-xs text-black font-light lg:leading-[214.286%] leading-[183.333%] lg:mb-[15px] lg:mt-[22px] mt-3 mb-[26px]">
                Creating an account has many benefits:
              </p>
              <ul className="lg:text-sm text-xs text-black font-light ml-[9px] lg:ml-[11px]">
                <li className="list-disc leading-[183.333%] lg:leading-[142.857%] lg:py-[2px]">
                  Check out faster
                </li>
                <li className="list-disc leading-[183.333%] lg:leading-[142.857%] lg:py-[2px]">
                  Keep more than one address
                </li>
                <li className="list-disc leading-[183.333%] lg:leading-[142.857%] lg:py-[2px]">
                  Track orders and more
                </li>
              </ul>
              <Button className="lg:py-[14.5px] lg:px-9 px-[29px] lg:text-sm text-[13px] lg:mt-[35px] mt-[22px]">
                Create An Account
              </Button>
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

export default Login;
