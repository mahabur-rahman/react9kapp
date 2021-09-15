import React from "react";
import Hero from "../components/HeroSection/Hero";
import AboutSection from "../components/AboutSection/AboutSection";
import WhatDo from "../components/WhatDo/WhatDo";
import whatImg from "../images/what.svg";
import ReactSlick from "../components/Slider/ReactSlick";
import ContactForm from "../components/Contact/ContactForm";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <WhatDo
        imgSrc={whatImg}
        subTitle={"Satisfy Clients"}
        title={"We build award winning design"}
        text={
          "We help clients to build more complex website developing and attract more customers. Buyers Expect a Different Experience From Sellers. Simplify Your Content Distribution And Activation To Close More Deals. Meet Sales Quotas —Faster."
        }
      />
      <ReactSlick />
      <ContactForm />
    </>
  );
};

export default Home;
