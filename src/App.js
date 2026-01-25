import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Featured from "./pages/Featured";
import Portfolio from "./pages/Portfolio";
import Hire from "./pages/Hire";
import About from "./pages/About";
import "./App.css"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/hire-me" element={<Hire />} />
          <Route path="/about-me" element={<About />} />
      
      
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
