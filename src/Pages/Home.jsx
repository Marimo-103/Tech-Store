import React from "react";
import Container from "../Components/Container";
import IntroBanner from "../Components/IntroBanner";

const Home = () => {
  return (
    <div>
      <section id="intro" className="">
        <Container>
          <IntroBanner />
        </Container>
      </section>
    </div>
  );
};

export default Home;
