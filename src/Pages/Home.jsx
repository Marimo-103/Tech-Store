import React from "react";
import Container from "../Components/Container";
import IntroBanner from "../Components/IntroBanner";
import { Link } from "react-router-dom";
import NewArrivals from "../Components/NewArrivals";
import desktopAdd from "/Common Images/Add-01.png";
import mobileAdd from "/Common Images/Mobile_Add-01.png";
import tabletpAdd from "/Common Images/Tablet_Add-01.png";
import GradientTextOverlay from "../Layers/GradientTextOverlay";
import CustomBuild from "/Common Images/customBuild.png";
import ProductSlider from "../Components/ProductSlider";
import Wallpaper from "../Layers/Wallpaper";
import p01 from "/Products Images/Product-1.png";
import p02 from "/Products Images/Product-2.png";
import p03 from "/Products Images/Product-3.png";
import p04 from "/Products Images/Product-4.png";
import p05 from "/Products Images/Product-5.png";
import ProductCardGrid from "../Layers/ProductCardGrid";

const Home = () => {
  return (
    <div>
      {/* intro banner */}
      <section id="intro" className="">
        <Container className="">
          <IntroBanner />
        </Container>
      </section>

      {/* new products */}
      <section id="newProducts" className="lg:pt-[37px] md:pt-8 pt-[19px]">
        <Container>
          <div className="title flex justify-between items-center">
            <h3 className="lg:text-[22px] text-lg text-black font-semibold">
              New Products
            </h3>
            <Link
              to=""
              className="lg:text-[13px] text-[10px] text-[#0156FF] leading-[115%] underline"
            >
              See All New Products
            </Link>
          </div>
        </Container>
        <Container>
          <div className="slider overflow-hidden">
            <NewArrivals className="" />
          </div>
        </Container>
      </section>

      {/* adds */}
      <section id="adds" className="pt-1">
        <Container className="">
          <Link to="/">
            <picture>
              <source media="(min-width: 1024px)" srcset={desktopAdd} />
              <source media="(min-width: 768px)" srcset={tabletpAdd} />
              <img src={mobileAdd} alt="" />
            </picture>
          </Link>
        </Container>
      </section>
      <section id="custom_build" className="py-4">
        <Container className="flex md:flex-row flex-col gap-y-3 md:gap-0">
          <Wallpaper src={CustomBuild} title="Custome Builds" />
          <div className="grid grid-cols-2 md:flex justify-center md:flex-nowrap">
            <ProductCardGrid
              className=""
              src={p03}
              ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
              price="$499.00"
              DiscountPrice="$499.00"
            />
            <ProductCardGrid
              className=""
              src={p03}
              ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
              price="$499.00"
              DiscountPrice="$499.00"
            />
            <ProductCardGrid
              className=""
              src={p03}
              ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
              price="$499.00"
              DiscountPrice="$499.00"
            />
            <ProductCardGrid
              className=""
              src={p03}
              ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
              price="$499.00"
              DiscountPrice="$499.00"
            />
            <ProductCardGrid
              className=""
              src={p03}
              ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
              price="$499.00"
              DiscountPrice="$499.00"
            />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
