import React from "react";
import Container from "../Components/Container";
import IntroBanner from "../Components/IntroBanner";
import { Link } from "react-router-dom";
import ProductCardGrid from "../Layers/ProductCardGrid";
import p01 from "/Products Images/Product-1.png";
import NewArrivals from "../Components/NewArrivals";

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
          <div className="slider">
            <NewArrivals className='w-full'/>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
