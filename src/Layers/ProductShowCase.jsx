import React, { useState } from "react";
import Wallpaper from "./Wallpaper";
import Container from "../Components/Container";
import { Tabs } from "antd";
import ProductCardGrid from "./ProductCardGrid";
import p02 from "/Products Images/Product-2.png";
import p03 from "/Products Images/Product-3.png";
import p04 from "/Products Images/Product-4.png";
import p05 from "/Products Images/Product-5.png";

const ProductShowCase = ({
  Tab1Text,
  Tab2Text,
  Tab3Text,
  Tab4Text,
  WallpaperImg,
  WallpaperTitle,
}) => {
  // tabs design
  const [activeKey, setActiveKey] = useState("1");

  const tabClassNames = (key) => `
    lg:text-base text-sm leading-[140%] font-semibold font-Poppins
    ${activeKey === key ? "text-[#000]" : "text-[#838383]"}
  `;
  return (
    <>
      <Tabs activeKey={activeKey} onChange={(key) => setActiveKey(key)}>
        <Tabs.TabPane
          tab={<span className={tabClassNames("1")}>{Tab1Text}</span>}
          key="1"
        >
          <Container className="flex md:flex-row flex-col gap-y-3 md:gap-0">
            <Wallpaper src={WallpaperImg} title={WallpaperTitle} />
            <div className="grid grid-cols-2 md:flex justify-center md:flex-nowrap">
              <ProductCardGrid
                className=""
                src={p05}
                ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
                price="$499.00"
                DiscountPrice="$499.00"
              />
              <ProductCardGrid
                className=""
                src={p05}
                ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
                price="$499.00"
                DiscountPrice="$499.00"
              />
              <ProductCardGrid
                className=""
                src={p05}
                ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
                price="$499.00"
                DiscountPrice="$499.00"
              />
              <ProductCardGrid
                className=""
                src={p05}
                ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
                price="$499.00"
                DiscountPrice="$499.00"
              />
              <ProductCardGrid
                className=""
                src={p05}
                ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
                price="$499.00"
                DiscountPrice="$499.00"
              />
            </div>
          </Container>
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={<span className={tabClassNames("2")}>{Tab2Text}</span>}
          key="2"
        >
          <Container className="flex md:flex-row flex-col gap-y-3 md:gap-0">
            <Wallpaper src={WallpaperImg} title={WallpaperTitle} />
            <div className="grid grid-cols-2 md:flex justify-center md:flex-nowrap">
              <ProductCardGrid
                className=""
                src={p02}
                ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
                price="$499.00"
                DiscountPrice="$499.00"
              />
              <ProductCardGrid
                className=""
                src={p02}
                ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
                price="$499.00"
                DiscountPrice="$499.00"
              />
              <ProductCardGrid
                className=""
                src={p02}
                ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
                price="$499.00"
                DiscountPrice="$499.00"
              />
              <ProductCardGrid
                className=""
                src={p02}
                ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
                price="$499.00"
                DiscountPrice="$499.00"
              />
              <ProductCardGrid
                className=""
                src={p02}
                ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
                price="$499.00"
                DiscountPrice="$499.00"
              />
            </div>
          </Container>
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={<span className={tabClassNames("3")}>{Tab3Text}</span>}
          key="3"
        >
          <Container className="flex md:flex-row flex-col gap-y-3 md:gap-0">
            <Wallpaper src={WallpaperImg} title={WallpaperTitle} />
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
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={<span className={tabClassNames("4")}>{Tab4Text}</span>}
          key="4"
        >
          <Container className="flex md:flex-row flex-col gap-y-3 md:gap-0">
            <Wallpaper src={WallpaperImg} title={WallpaperTitle} />
            <div className="grid grid-cols-2 md:flex justify-center md:flex-nowrap">
              <ProductCardGrid
                className=""
                src={p04}
                ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
                price="$499.00"
                DiscountPrice="$499.00"
              />
              <ProductCardGrid
                className=""
                src={p04}
                ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
                price="$499.00"
                DiscountPrice="$499.00"
              />
              <ProductCardGrid
                className=""
                src={p04}
                ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
                price="$499.00"
                DiscountPrice="$499.00"
              />
              <ProductCardGrid
                className=""
                src={p04}
                ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
                price="$499.00"
                DiscountPrice="$499.00"
              />
              <ProductCardGrid
                className=""
                src={p04}
                ProductTitle="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
                price="$499.00"
                DiscountPrice="$499.00"
              />
            </div>
          </Container>
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};

export default ProductShowCase;
