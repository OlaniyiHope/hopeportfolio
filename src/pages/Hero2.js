import React from "react";
import "./header.css";
import starSticky from "../design/design1.png";
import redStar from "../design/design4.png";
import smileDots from "../design/design5.png";
import arrow from "../design/design6.png";
import buttonBlob from "../design/design7.png";
import hope from "./hope.JPG";

const Hero2 = () => {
  return (
    <section className="hero">
               <div  className="container">
           <div className="hero-inner">
      {/* LEFT */}
      <div className="hero-left">
              <img src={starSticky} className="doodle sticky-star" alt="" />

        <h1 className="not">
          I build ✍️ top <br />
          <span className="highlight">notch websites and apps</span>
        </h1>
        <h3 className="note">
        <span>I'm a Software Developer and Content Creator, passionate about sharing my journey learning to code and making it in the tech industry. </span>
        </h3>

        <a className="hero-btn" href="/portfolio">
          See Portfolio
        </a>
             <img src={buttonBlob} className="doodle btn-blob" alt="" />
      </div>

      {/* RIGHT */}
      <div className="hero-right">
        <span className="hero-name">HOPE OLANIYI</span>
                <img src={arrow} className="doodle name-arrow" alt="" />
        <span className="hero-arrow">➜</span>

        <div className="hero-frame">
             <img src={smileDots} className="doodle smile-dots" alt="" />
               
          <span className="frame-line top"></span>
          <span className="frame-line bottom"></span>
          <span className="frame-line left"></span>
          <span className="frame-line right"></span>

          <img src={hope} alt="me" />
          <img src={redStar} className="doodle frame-star" alt="" />
        
        </div>
      </div>
      </div>
 </div>
    </section>
  );
};



export default Hero2;


