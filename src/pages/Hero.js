import React from "react";
import "./home.css";
import hope from "./boy.jpg"
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-inner">
        {/** LEFT — avatar + label + heading */}
      <div className="hero-left">
  <div className="hero-avatar">
    <img src={hope} alt="Profile" />
    <span className="hero-label">hope</span>
  </div>

  {/* Arrow connecting avatar -> label */}
  <svg
    className="hero-arrow"
    width="120"
    height="70"
    viewBox="0 0 120 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 55C28 30 65 18 105 26"
      stroke="black"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M96 12L112 28L92 34"
      stroke="black"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>

  <h1 className="joy">
    I <span className="highlight">design</span> top <br /> notch websites
  </h1>
</div>


        {/** RIGHT — text + button */}
        <div className="hero-right">
          <p>
            I’ll design your website and will develop to
            land it on internet using No-code.
          </p>

          <button className="primary-btn">Hire me</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
