import React, { useState } from "react";
import "./header.css"
const Header2 = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="zn-header">
        <div className="container">
          
      <div className="zn-frame">
        {/* LEFT LOGO */}
        <div className="zn-left">
          <span className="zn-star">✦</span>
          <span className="zn-name"><a href="/" style={{color: "black", textDecoration: "none", fontWeight: "800"}}>HOPE OLANIYI</a></span>
        </div>

        {/* DESKTOP NAV */}
        <nav className="zn-nav">
          <a href="/about-me">About </a>
          <a href="/portfolio" className="active">Portfolio</a>
          <a href="/hire-me">Hire Me</a>
        </nav>

        {/* MOBILE MENU */}
        <div className="zn-mobile" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="zn-mobile-menu">
          <a href="#">About </a>
          <a href="#">Portfolio</a>
          <a href="#">Hire Me</a>
        </div>
      )}
      </div>
    </header>
  );
};

export default Header2;
