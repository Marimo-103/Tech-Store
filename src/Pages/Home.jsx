import React, { useState } from "react";
import Container from "../Components/Container";
import IntroBanner from "../Components/IntroBanner";
import { Link } from "react-router-dom";
import Title from "../Layers/Title";
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
import p06 from "/Products Images/Product-6.png";
import p07 from "/Products Images/Product-7.png";
import partner01 from "/Products Images/Partner-1.png";
import partner02 from "/Products Images/Partner-2.png";
import partner03 from "/Products Images/Partner-3.png";
import partner04 from "/Products Images/Partner-4.png";
import partner05 from "/Products Images/Partner-5.png";
import partner06 from "/Products Images/Partner-6.png";
import partner07 from "/Products Images/Partner-7.png";
import ProductCardGrid from "../Layers/ProductCardGrid";
import MSILaptops from "/Common Images/MSI_Laptop.png";
import GamingMonitors from "/Common Images/MSI.png";
import Desktops from "/Common Images/Desktop.png";
import ProductShowCase from "../Layers/ProductShowCase";
import Partner from "../Layers/Partner";
import post01 from "/Common Images/post-1.png";
import post02 from "/Common Images/post-2.png";
import post03 from "/Common Images/post-3.png";
import post04 from "/Common Images/post-4.png";
import post05 from "/Common Images/post-5.png";
import post06 from "/Common Images/post-6.png";
import post07 from "/Common Images/post-7.png";
import post08 from "/Common Images/post-8.png";
import post09 from "/Common Images/post-9.png";
import Card from "../Layers/Card";

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
            <Title text="New Products" />
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
              <img
                src={mobileAdd}
                alt=""
                className="w-full md:h-auto h-[103px]"
              />
            </picture>
          </Link>
        </Container>
      </section>

      {/* Custom Build */}
      <section id="custom_build" className="pt-4">
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

      {/* MSI Laptops */}
      <section id="MSI" className="lg:pt-9 md:pt-7 pt-[14px]">
        <Container className="">
          <ProductShowCase
            Tab1Text="MSI GS Series"
            Tab2Text="MSI GT Series"
            Tab3Text="MSI GL Series"
            Tab4Text="MSI GE Series"
            WallpaperImg={MSILaptops}
            WallpaperTitle="MSI Laptops"
          />
        </Container>
      </section>

      {/* desktops */}
      <section id="desktops" className="lg:pt-9 md:pt-7 pt-[14px]">
        <Container className="">
          <ProductShowCase
            Tab1Text="MSI Infinute Series"
            Tab2Text="MSI Triden"
            Tab3Text="MSI GL Series"
            Tab4Text="MSI Nightblade"
            WallpaperImg={Desktops}
            WallpaperTitle="Desktops"
          />
        </Container>
      </section>

      {/* gaming monitors */}
      <section id="gaming" className="lg:pt-8 pt-[15px]">
        <Container className="flex md:flex-row flex-col gap-y-3 md:gap-0">
          <Wallpaper src={GamingMonitors} title="Gaming Monitors" />
          <div className="grid grid-cols-2 md:flex justify-center md:flex-nowrap">
            <ProductCardGrid
              className=""
              src={p06}
              ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
              price="$499.00"
              DiscountPrice="$499.00"
            />
            <ProductCardGrid
              className=""
              src={p06}
              ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
              price="$499.00"
              DiscountPrice="$499.00"
            />
            <ProductCardGrid
              className=""
              src={p06}
              ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
              price="$499.00"
              DiscountPrice="$499.00"
            />
            <ProductCardGrid
              className=""
              src={p07}
              ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
              price="$499.00"
              DiscountPrice="$499.00"
            />
            <ProductCardGrid
              className=""
              src={p07}
              ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
              price="$499.00"
              DiscountPrice="$499.00"
            />
          </div>
        </Container>
      </section>

      {/* partners */}
      <section id="partners" className="lg:pt-8 md:pt-[18px] pt-[15px]">
        <Container>
          <div className="flex flex-wrap lg:flex-nowrap">
            <Partner src={partner01} />
            <Partner src={partner02} />
            <Partner src={partner03} />
            <Partner src={partner04} />
            <Partner src={partner05} />
            <Partner src={partner06} />
            <Partner src={partner07} />
          </div>
        </Container>
      </section>

      {/* insta follow and posts */}
      <section id="followOnIsnta" className="lg:block hidden pt-[42px]">
        <Container>
          <Title text="Follow us on Instagram for News, Offers & More" />
          <div className="flex flex-wrap mt-5 gap-[9px]">
            <Card
              src={post01}
              comment="If you’ve recently made a desktop PC or laptop purchase, you might
              want to consider adding peripherals to enhance your home office setup,
              your gaming rig, or your business workspace......If you’ve recently
              made a desktop PC or laptop purchase, you might want to consider
              adding peripherals to enhance your home office setup, your gaming rig,
              or your business workspace..."
              date="01.09.2020"
            />
            <Card
              src={post02}
              comment="If you’ve recently made a desktop PC or laptop purchase, you might
              want to consider adding peripherals to enhance your home office setup,
              your gaming rig, or your business workspace......If you’ve recently
              made a desktop PC or laptop purchase, you might want to consider
              adding peripherals to enhance your home office setup, your gaming rig,
              or your business workspace..."
              date="01.09.2020"
            />
            <Card
              src={post03}
              comment="If you’ve recently made a desktop PC or laptop purchase, you might
              want to consider adding peripherals to enhance your home office setup,
              your gaming rig, or your business workspace......If you’ve recently
              made a desktop PC or laptop purchase, you might want to consider
              adding peripherals to enhance your home office setup, your gaming rig,
              or your business workspace..."
              date="01.09.2020"
            />
            <Card
              src={post04}
              comment="If you’ve recently made a desktop PC or laptop purchase, you might
              want to consider adding peripherals to enhance your home office setup,
              your gaming rig, or your business workspace......If you’ve recently
              made a desktop PC or laptop purchase, you might want to consider
              adding peripherals to enhance your home office setup, your gaming rig,
              or your business workspace..."
              date="01.09.2020"
            />
            <Card
              src={post05}
              comment="If you’ve recently made a desktop PC or laptop purchase, you might
              want to consider adding peripherals to enhance your home office setup,
              your gaming rig, or your business workspace......If you’ve recently
              made a desktop PC or laptop purchase, you might want to consider
              adding peripherals to enhance your home office setup, your gaming rig,
              or your business workspace..."
              date="01.09.2020"
            />
            <Card
              src={post06}
              comment="If you’ve recently made a desktop PC or laptop purchase, you might
              want to consider adding peripherals to enhance your home office setup,
              your gaming rig, or your business workspace......If you’ve recently
              made a desktop PC or laptop purchase, you might want to consider
              adding peripherals to enhance your home office setup, your gaming rig,
              or your business workspace..."
              date="01.09.2020"
            />
            <Card
              src={post07}
              comment="If you’ve recently made a desktop PC or laptop purchase, you might
              want to consider adding peripherals to enhance your home office setup,
              your gaming rig, or your business workspace......If you’ve recently
              made a desktop PC or laptop purchase, you might want to consider
              adding peripherals to enhance your home office setup, your gaming rig,
              or your business workspace..."
              date="01.09.2020"
            />
            <Card
              src={post08}
              comment="If you’ve recently made a desktop PC or laptop purchase, you might
              want to consider adding peripherals to enhance your home office setup,
              your gaming rig, or your business workspace......If you’ve recently
              made a desktop PC or laptop purchase, you might want to consider
              adding peripherals to enhance your home office setup, your gaming rig,
              or your business workspace..."
              date="01.09.2020"
            />
            <Card
              src={post09}
              comment="If you’ve recently made a desktop PC or laptop purchase, you might
              want to consider adding peripherals to enhance your home office setup,
              your gaming rig, or your business workspace......If you’ve recently
              made a desktop PC or laptop purchase, you might want to consider
              adding peripherals to enhance your home office setup, your gaming rig,
              or your business workspace..."
              date="01.09.2020"
            />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
