import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/infoSection";
import Services from "../components/services/index";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/infoSection/Data";
import NavBar from "../components/NavBar/index";
import SideBar from "../components/SideBar/SideBar";
import Footer from "../components/footer/index";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
