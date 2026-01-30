import React from "react";

import What from "./What";
import "./home.css";
import Work from "./Work";
import Footer from "./Footer";
import Header2 from "./Header2";
import TechStack from "./TechStack";

const About = () => {
  return (
    <>
      {/* <Header /> */}
      <Header2 />

      {/* <What /> */}
      <Work />
      <TechStack />

  
      <Footer />
    </>
  );
};

export default About;
