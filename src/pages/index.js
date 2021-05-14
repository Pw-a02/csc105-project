import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServiceSection from "../components/ServiceSection";
import ServiceCard from "../components/ServiceSection";
import TypeSec from "../components/TypeSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServiceCard />
      <TypeSec />
    </>
  );
};

export default Home;
