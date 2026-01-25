import React from "react";
import "./home.css"
const Header = () => {
  return (
    <header className="header">
      <div className="logo">zaisk</div>

      <nav className="nav">
        <a href="#portfolio">Portfolio</a>
        <a href="#hire">Hire Me</a>
      </nav>
    </header>
  );
};

export default Header;
