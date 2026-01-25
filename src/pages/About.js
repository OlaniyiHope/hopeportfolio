import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import What from "./What";
import "./home.css";
import Featured from "./Featured";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./Footer";
import Header2 from "./Header2";
import Hero2 from "./Hero2";
import TechStack from "./TechStack";
import Services from "./Services";

const About = () => {
  return (
    <>
      {/* <Header /> */}
      <Header2 />

      <What />
      <Work />
      <TechStack />

  
      <Footer />
    </>
  );
};

export default About;
