import React from "react";

import Hero from "../components/Hero";
import Feature from "../components/Feature";
import SectionHow from "../components/SectionHow";
import Catalog from "../components/Catalog";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";

const Home = () => {
  return (
    <>
      <Hero />
      <Feature />
      <SectionHow />
      <Catalog />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default Home;
