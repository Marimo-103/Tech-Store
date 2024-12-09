import React, { useEffect, useState } from "react";
import Container from "./Container";
import Button from "../Layers/Button";
import { Link } from "react-router-dom";
import { BiSolidChevronDown } from "react-icons/bi";
import { IoLogoFacebook } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";
import card_1 from "/Common Images/paypal.png";
import card_2 from "/Common Images/visa.png";
import card_3 from "/Common Images/maestro.png";
import card_4 from "/Common Images/discover.png";
import card_5 from "/Common Images/american-express.png";

const Footer = () => {
  const information = [
    { name: "About Us", path: "/about/us" },
    { name: "About Zip", path: "/about-zip" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Search", path: "/search" },
    { name: "Terms", path: "/terms/&/conditions" },
    { name: "Orders and Returns", path: "/orders-returns" },
    { name: "Contact Us", path: "/contact/us" },
    { name: "Advanced Search", path: "/advanced-search" },
    { name: "Newsletter Subscription", path: "/newsletter-subscription" },
  ];

  const pcParts = [
    { name: "CPUs", path: "/cpus" },
    { name: "Add On Cards", path: "/add-on-cards" },
    { name: "Hard Drives (Internal)", path: "/hard-drives-internal" },
    { name: "Graphic Cards", path: "/graphic-cards" },
    { name: "Keyboards / Mice", path: "/keyboards-mice" },
    {
      name: "Cases / Power Supplies / Cooling",
      path: "/cases-power-supplies-cooling",
    },
    { name: "RAM (Memory)", path: "/ram-memory" },
    { name: "Software", path: "/software" },
    { name: "Speakers / Headsets", path: "/speakers-headsets" },
    { name: "Motherboards", path: "/motherboards" },
  ];

  const desktopPCs = [
    { name: "Custom PCs", path: "/custom-pcs" },
    { name: "Servers", path: "/servers" },
    { name: "MSI All-in-One PCs", path: "/msi-all-in-one" },
    { name: "HP/Compaq PCs", path: "/hp-compaq-pcs" },
    { name: "ASUS PCs", path: "/asus-pcs" },
    { name: "Tecs PCs", path: "/tecs-pcs" },
  ];

  const laptops = [
    { name: "Everyday Use Notebooks", path: "/everyday-use-notebooks" },
    { name: "MSI Workstation Series", path: "/msi-workstation" },
    { name: "MSI Prestige Series", path: "/msi-prestige" },
    { name: "Tablets and Pads", path: "/tablets-pads" },
    { name: "Netbooks", path: "/netbooks" },
    { name: "Infinity Gaming Notebooks", path: "/infinity-gaming" },
  ];

  let [infoDDM, setInfoDDM] = useState(false);
  let [pcPartsDDM, setPcPartsDDM] = useState(false);
  let [desktopPCsDDM, setDesktopPCsDDM] = useState(false);
  let [laptopsDDM, setLaptopsDDM] = useState(false);
  let [adressDDM, setAdressDDM] = useState(false);

  useEffect(() => {
    function size() {
      if (window.innerWidth < 769) {
        setInfoDDM(false);
        setPcPartsDDM(false);
        setDesktopPCsDDM(false);
        setLaptopsDDM(false);
        setAdressDDM(false);
      } else {
        setInfoDDM(true);
        setPcPartsDDM(true);
        setDesktopPCsDDM(true);
        setLaptopsDDM(true);
        setAdressDDM(true);
      }
    }
    size();
    window.addEventListener("resize", size);
  }, []);

  return (
    <div className="bg-[#020203] lg:pt-[47px] py-[35px]">
      <Container>
        <div className="header flex md:flex-row flex-col gap-y-4 items-center justify-between">
          <div className="left">
            <h2 className="lg:text-[38px] text-lg text-white font-medium leading-[132.5%]">
              Sign Up To Our Newsletter.
            </h2>
            <p className="lg:text-base text-xs text-white font-light leading-[132.5%] lg:mt-2 mt-1">
              Be the first to hear about the latest offers.
            </p>
          </div>
          <div className="right flex items-center lg:gap-6 gap-2">
            <input
              type="text"
              placeholder="Your Email"
              className="lg:px-[13px] lg:py-[15px] px-[15px] py-[9px] w-[186px] lg:w-[391px] bg-transparent border-2 border-white outline-none rounded-[4px] placeholder:text-white lg:text-sm text-[11px] text-white"
            />
            <Button className="lg:py-4 lg:px-10 py-[9px] px-8 text-[13px] lg:text-sm font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
        <div className="body flex lg:flex-row flex-col gap-y-4 items-start lg:gap-x-[78px] lg:mt-[45px] lg:mb-9 my-[15px] lg:w-auto w-[94%] mx-auto">
          <ul className="lg:w-auto w-full">
            <h4
              onClick={() => setInfoDDM(!infoDDM)}
              className="flex justify-between items-center lg:block lg:text-sm text-[11px] lg:text-[#ffffff80] text-[#E5ECF1] font-bold leading-[100%] lg:mb-5 lg:p-0 px-1 py-[10px] border-b border-[#A2A6B0] lg:border-none cursor-pointer"
            >
              Information
              <BiSolidChevronDown
                className={`lg:hidden block ${
                  infoDDM ? "rotate-180" : "rotate-0"
                }`}
              />
            </h4>
            <span className={`${infoDDM ? "block" : "hidden"}`}>
              {information.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="footerListItem">
                    {item.name}
                  </Link>
                </li>
              ))}
            </span>
          </ul>
          <ul className="lg:w-auto w-full">
            <h4
              onClick={() => setPcPartsDDM(!pcPartsDDM)}
              className="flex justify-between items-center lg:block lg:text-sm text-[11px] lg:text-[#ffffff80] text-[#E5ECF1] font-bold leading-[100%] lg:mb-5 lg:p-0 px-1 py-[10px] border-b border-[#A2A6B0] lg:border-none cursor-pointer"
            >
              PC Parts
              <BiSolidChevronDown
                className={`lg:hidden block ${
                  pcPartsDDM ? "rotate-180" : "rotate-0"
                }`}
              />
            </h4>
            <span className={`${pcPartsDDM ? "block" : "hidden"}`}>
              {pcParts.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="footerListItem">
                    {item.name}
                  </Link>
                </li>
              ))}
            </span>
          </ul>
          <ul className="lg:w-auto w-full">
            <h4
              onClick={() => setDesktopPCsDDM(!desktopPCsDDM)}
              className="flex justify-between items-center lg:block lg:text-sm text-[11px] lg:text-[#ffffff80] text-[#E5ECF1] font-bold leading-[100%] lg:mb-5 lg:p-0 px-1 py-[10px] border-b border-[#A2A6B0] lg:border-none cursor-pointer"
            >
              Desktop PCs
              <BiSolidChevronDown
                className={`lg:hidden block ${
                  desktopPCsDDM ? "rotate-180" : "rotate-0"
                }`}
              />
            </h4>
            <span className={`${desktopPCsDDM ? "block" : "hidden"}`}>
              {desktopPCs.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="footerListItem">
                    {item.name}
                  </Link>
                </li>
              ))}
            </span>
          </ul>
          <ul className="lg:w-auto w-full">
            <h4
              onClick={() => setLaptopsDDM(!laptopsDDM)}
              className="flex justify-between items-center lg:block lg:text-sm text-[11px] lg:text-[#ffffff80] text-[#E5ECF1] font-bold leading-[100%] lg:mb-5 lg:p-0 px-1 py-[10px] border-b border-[#A2A6B0] lg:border-none cursor-pointer"
            >
              Laptops
              <BiSolidChevronDown
                className={`lg:hidden block ${
                  laptopsDDM ? "rotate-180" : "rotate-0"
                }`}
              />
            </h4>
            <span className={`${laptopsDDM ? "block" : "hidden"}`}>
              {laptops.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="footerListItem">
                    {item.name}
                  </Link>
                </li>
              ))}
            </span>
          </ul>
          <ul className="lg:w-[301px] w-full">
            <h4
              onClick={() => setAdressDDM(!adressDDM)}
              className="flex justify-between items-center lg:block lg:text-sm text-[11px] lg:text-[#ffffff80] text-[#E5ECF1] font-bold leading-[100%] lg:mb-5 lg:p-0 px-1 py-[10px] border-b border-[#A2A6B0] lg:border-none cursor-pointer"
            >
              Address
              <BiSolidChevronDown
                className={`lg:hidden block ${
                  adressDDM ? "rotate-180" : "rotate-0"
                }`}
              />
            </h4>
            <span className={`${adressDDM ? "block" : "hidden"}`}>
              <li className="footerListItem">
                Address: 1234 Street Adress City Address, 1234
              </li>
              <li className="footerListItem">
                Phones: <span className="text-[#01A4FF]">(00) 1234 5678</span>
              </li>
              <li className="footerListItem">
                We are open: Monday-Thursday: 9:00 AM - 5:30 PM
              </li>
              <li className="footerListItem">Friday: 9:00 AM - 6:00 PM</li>
              <li className="footerListItem">Saturday: 11:00 AM - 5:00 PM</li>
              <li className="footerListItem">
                E-mail: <span className="text-[#01A4FF]">shop@email.com</span>
              </li>
            </span>
          </ul>
        </div>
        <div className="icons flex items-center justify-between relative mb-10 lg:m-0">
          <div className="socials flex items-center gap-1 text-xl text-[#ffffff80]">
            <IoLogoFacebook />
            <PiInstagramLogoFill />
          </div>
          <div className="cards flex items-center gap-[10px] absolute md:top-1/2 top-full left-1/2 -translate-x-1/2 md:-translate-y-1/2 translate-y-[15px] ">
            <div className="img w-[34.071px] h-[21.957px]">
              <img src={card_1} alt="" className="h-full w-full" />
            </div>
            <div className="img w-[34.071px] h-[21.957px]">
              <img src={card_2} alt="" className="h-full w-full" />
            </div>
            <div className="img w-[34.071px] h-[21.957px]">
              <img src={card_3} alt="" className="h-full w-full" />
            </div>
            <div className="img w-[34.071px] h-[21.957px]">
              <img src={card_4} alt="" className="h-full w-full" />
            </div>
            <div className="img w-[34.071px] h-[21.957px]">
              <img src={card_5} alt="" className="h-full w-full" />
            </div>
          </div>
          <div className="text-xs text-[#ffffff99] font-medium leading-[132.5%]">
          Copyright © 2020 Shop Pty. Ltd.
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
