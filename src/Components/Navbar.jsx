import React, { useEffect, useState } from "react";
import Header from "./Header";
import Container from "./Container";
import Logo from "../Layers/Logo";
import { Link } from "react-router-dom";
import Button from "../Layers/Button";
import { IoMenu, IoSearch } from "react-icons/io5";
import { FaAngleDown, FaRegUser } from "react-icons/fa";
import menuLogo from "/Common Images/menu-pop-Logo.png";
import { RxCross2 } from "react-icons/rx";

const Search = () => {
  let [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <div className="cursor-pointer">
      <div className="relative">
        <IoSearch
          onClick={() => setShowSearchBar(true)}
          className={`text-black text-xl hidden lg:block absolute top-1/2 -translate-y-1/2 right-0 duration-500 ${
            showSearchBar ? "translate-x-[-80px]" : "translate-x-[0px]"
          }`}
        />
        <RxCross2
          onClick={() => setShowSearchBar(false)}
          className={`text-[#0156FF] text-xl hidden lg:block absolute top-1/2 -translate-y-1/2 right-0 duration-500 ${
            showSearchBar ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        />
      </div>
      <input
        type="text"
        placeholder="Search entiere store here..."
        className={`absolute top-1/2 -translate-y-1/2  z-[-1] px-[30px] py-5 rounded-[31px] text-sm placeholder:text-[#A2A6B0] text-black outline-none bg-[#F5F7FF] transition-all duration-500 ${
          showSearchBar
            ? "translate-x-[-105%] visible opacity-100 w-[1126px]"
            : "left-full invisible opacity-0 w-0"
        }`}
      />
      <div className="res lg:hidden block relative">
        <IoSearch className="text-[#CACDD8] absolute top-1/2 -translate-y-1/2 left-[15px]" />
        <input
          type="text"
          placeholder="Search"
          className="md:w-[518px] w-[227px] pl-[38px] pr-[15px] pt-[9px] pb-[6px] rounded-[25px] text-[11px] placeholder:text-[#CACDD8] text-black outline-none"
        />
      </div>
    </div>
  );
};

const Cart = () => {
  return (
    <div className="cursor-pointer">
      <div className="icon lg:hidden block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M15.8772 23.2138C16.4787 23.2138 17.0556 22.9748 17.481 22.5494C17.9064 22.1241 18.1453 21.5472 18.1453 20.9456C18.1453 20.3441 17.9064 19.7672 17.481 19.3418C17.0556 18.9164 16.4787 18.6775 15.8772 18.6775C15.2756 18.6775 14.6987 18.9164 14.2734 19.3418C13.848 19.7672 13.609 20.3441 13.609 20.9456C13.609 21.5472 13.848 22.1241 14.2734 22.5494C14.6987 22.9748 15.2756 23.2138 15.8772 23.2138ZM7.93867 23.2138C8.54022 23.2138 9.11713 22.9748 9.54249 22.5494C9.96785 22.1241 10.2068 21.5472 10.2068 20.9456C10.2068 20.3441 9.96785 19.7672 9.54249 19.3418C9.11713 18.9164 8.54022 18.6775 7.93867 18.6775C7.33712 18.6775 6.76021 18.9164 6.33485 19.3418C5.90949 19.7672 5.67053 20.3441 5.67053 20.9456C5.67053 21.5472 5.90949 22.1241 6.33485 22.5494C6.76021 22.9748 7.33712 23.2138 7.93867 23.2138ZM22.7247 7.24942C23.0078 7.24029 23.2763 7.12141 23.4733 6.91792C23.6704 6.71442 23.7805 6.44227 23.7805 6.15901C23.7805 5.87576 23.6704 5.60361 23.4733 5.40011C23.2763 5.19662 23.0078 5.07773 22.7247 5.0686H21.4194C20.3965 5.0686 19.5119 5.77853 19.2896 6.77652L17.8686 13.175C17.6463 14.1729 16.7618 14.8829 15.7388 14.8829H7.21967L5.58434 8.33927H16.1822C16.4627 8.32647 16.7274 8.20606 16.9213 8.00307C17.1153 7.80009 17.2235 7.53016 17.2235 7.24942C17.2235 6.96869 17.1153 6.69876 16.9213 6.49577C16.7274 6.29279 16.4627 6.17238 16.1822 6.15958H5.58434C5.25281 6.15948 4.92562 6.23497 4.62765 6.38031C4.32968 6.52565 4.06876 6.73701 3.86474 6.99832C3.66072 7.25964 3.51896 7.56403 3.45024 7.88836C3.38152 8.21268 3.38765 8.54841 3.46816 8.87001L5.10349 15.4113C5.22138 15.8833 5.49371 16.3024 5.87717 16.6018C6.26062 16.9012 6.73317 17.0638 7.21967 17.0637H15.7388C16.7314 17.0638 17.6943 16.7254 18.4685 16.1044C19.2428 15.4833 19.782 14.6168 19.9973 13.6479L21.4194 7.24942H22.7247Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="icon lg:block hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <path
            d="M14.5834 20.8334C15.1359 20.8334 15.6658 20.6139 16.0566 20.2232C16.4473 19.8325 16.6667 19.3026 16.6667 18.75C16.6667 18.1975 16.4473 17.6676 16.0566 17.2769C15.6658 16.8862 15.1359 16.6667 14.5834 16.6667C14.0309 16.6667 13.501 16.8862 13.1103 17.2769C12.7196 17.6676 12.5001 18.1975 12.5001 18.75C12.5001 19.3026 12.7196 19.8325 13.1103 20.2232C13.501 20.6139 14.0309 20.8334 14.5834 20.8334ZM7.29174 20.8334C7.84428 20.8334 8.37418 20.6139 8.76488 20.2232C9.15558 19.8325 9.37508 19.3026 9.37508 18.75C9.37508 18.1975 9.15558 17.6676 8.76488 17.2769C8.37418 16.8862 7.84428 16.6667 7.29174 16.6667C6.73921 16.6667 6.20931 16.8862 5.81861 17.2769C5.4279 17.6676 5.20841 18.1975 5.20841 18.75C5.20841 19.3026 5.4279 19.8325 5.81861 20.2232C6.20931 20.6139 6.73921 20.8334 7.29174 20.8334ZM20.873 6.16981C21.133 6.16142 21.3796 6.05223 21.5606 5.86531C21.7416 5.6784 21.8428 5.42842 21.8428 5.16825C21.8428 4.90807 21.7416 4.6581 21.5606 4.47118C21.3796 4.28427 21.133 4.17507 20.873 4.16669H19.674C18.7345 4.16669 17.922 4.81877 17.7178 5.73544L16.4126 11.6125C16.2084 12.5292 15.3959 13.1813 14.4563 13.1813H6.63133L5.12924 7.17085H14.8636C15.1212 7.1591 15.3644 7.0485 15.5425 6.86205C15.7206 6.67561 15.82 6.42767 15.82 6.16981C15.82 5.91195 15.7206 5.66401 15.5425 5.47757C15.3644 5.29113 15.1212 5.18052 14.8636 5.16877H5.12924C4.82473 5.16868 4.5242 5.23802 4.25051 5.37151C3.97682 5.50501 3.73716 5.69915 3.54976 5.93917C3.36236 6.17919 3.23215 6.45878 3.16903 6.75668C3.10591 7.05458 3.11154 7.36295 3.1855 7.65835L4.68758 13.6667C4.79586 14.1002 5.046 14.4851 5.39821 14.7601C5.75042 15.0351 6.18447 15.1845 6.63133 15.1844H14.4563C15.368 15.1845 16.2524 14.8737 16.9636 14.3032C17.6748 13.7328 18.1701 12.9369 18.3678 12.0469L19.674 6.16981H20.873Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};

const User = () => {
  let [show, setShow] = useState(false);

  return (
    <div className="h-9 w-9 rounded-full border-2 lg:border-[#0156FF] border-white flex items-center justify-center  lg:ml-[11px]">
      <FaRegUser
        onClick={() => setShow(!show)}
        className="lg:text-[#0156FF] text-white text-xl cursor-pointer"
      />
      <div
        className={`info md:text-sm text-xs text-black md:leading-[200%] leading-[240%] font-medium md:py-5 px-[26px] py-[19px] w-[232px] bg-[#ffffff] absolute top-full translate-y-[13px] right-[-10px] z-50 shadow-custom border border-[#CACDD8] duration-300 ${
          show ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="relative flex flex-col md:gap-[6px]">
          <div class="inline-block w-0 h-0 border-solid border-t-0 border-r-[14.5px] border-l-[14.5px] border-b-[19px] border-l-transparent border-r-transparent border-t-transparent border-b-[#ffffff] absolute top-[-36px] right-[-14px]"></div>
          <Link to='/login' className="cursor-pointer">My Account</Link>
          <Link to='/' className="cursor-pointer">My Wish List (0)</Link>
          <Link to='/' className="cursor-pointer">Compare (0)</Link>
          <Link to='/login' className="cursor-pointer">Create an Account</Link>
          <Link to='/login' className="cursor-pointer">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  let navbarListItem = [
    { name: "Laptops", pathname: "/product/details" },
    { name: "Desktop PCs", pathname: "/desktop-pcs" },
    { name: "Networking Devices", pathname: "/networking-devices" },
    { name: "Printers & Scanners", pathname: "/printers-scanners" },
    { name: "PC Parts", pathname: "/pc-parts" },
    { name: "All Other Products", pathname: "/all-other-products" },
    { name: "Repairs", pathname: "/repairs" }
  ];

  let [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    function size() {
      if (window.innerWidth < 769) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    }
    size();
    window.addEventListener("resize", size);
  }, []);

  return (
    <div className="bg-[#0156FF] lg:bg-white border-b border-[#CACDD8] sticky top-0 z-[99999999]">
      <Header />
      <Container className="lg:py-3 py-[13px]">
        <div className="main flex items-center">
          <Logo className="hidden lg:block mr-[30px]" />
          <ul
            className={`lg:static absolute top-0 bg-white lg:bg-transparent lg:h-auto  h-dvh lg:flex lg:flex-row flex-col items-center gap-[25px] lg:gap-0 w-[300px] md:w-[436px] lg:w-auto duration-500 z-30 lg:z-10 ${
              showMenu
                ? "opacity-100 visible left-0"
                : "opacity-0 invisible left-[-100%]"
            }`}
          >
            <div className="cross lg:hidden flex items-center justify-between mt-[10px] px-1">
              <div className="img w-[71px] h-[57px]">
                <img src={menuLogo} alt="" />
              </div>
              <RxCross2
                onClick={() => setShowMenu(false)}
                className="mr-5 cursor-pointer text-lg"
              />
            </div>
            <div className="line lg:hidden h-[1px] w-[89%] md:w-[94%] bg-[#CACDD8] mt-[6px] my-[9px] mx-auto"></div>
            {navbarListItem.map((item, index) => (
              <li
                key={index}
                className="lg:px-0 px-6  duration-300 hover:bg-[#F5F7FF] lg:hover:bg-transparent"
              >
                <span className="flex items-center justify-between w-full">
                  <Link to={item.pathname} className="navbarListItem">{item.name}</Link>
                  <FaAngleDown className="block lg:hidden -rotate-90" />
                </span>
                {/* mega menu left */}
              </li>
            ))}
            <Button className="lg:px-[26px] px-[50px] relative z-40 lg:m-0 mt-6 ml-6">
              Our Deals
            </Button>
          </ul>
          <button
            onClick={() => setShowMenu(true)}
            className="lg:hidden text-white text-[26px]"
          >
            <IoMenu />
          </button>
          <div className="cart&search ml-auto flex items-center md:gap-[25px] gap-4 relative z-20 lg:z-30">
            <Search />
            <Cart />
            <User />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
