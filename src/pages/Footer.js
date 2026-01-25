
import React from "react";
import park from "./white.png";
import "./featured.css";

const Footer = () => {
  return (
    <footer className="portfolio-footer">
      <div className="container footer-frame">

        {/* frame lines */}
        <span className="footer-line top"></span>
        <span className="footer-line bottom"></span>
        <span className="footer-line left"></span>
        <span className="footer-line right"></span>

        <div className="footer-inner">
          {/* LEFT */}
          <div className="footer-left">
            <img src={park} alt="logo" className="footer-logo" />
            <span className="footer-name">HOPE OLANIYI</span>
          </div>

          {/* CENTER */}
          <p className="footer-copy">Copyright. Portfolio 2024</p>

          {/* RIGHT */}
          <div className="footer-socials">
            <a href="#" className="footer-btn">Twitter X</a>
            <a href="#" className="footer-btn">LinkedIn</a>
            <a href="#" className="footer-btn">Instagram</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
