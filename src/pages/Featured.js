import React from "react";
import "./featured.css";
import laugh from "./skill.png";
import what from "../design/what.png";
import one from "./one.png";
import { Navigate } from "react-router-dom";
// import two from "./two.png";
// import three from "./three.png";
// import four from "./four.png";
const Featured = () => {
  return (
    <section className="featured-section">
        <div className="container">
             <div className="featured-inner">
      {/* LEFT TEXT */}
      <div className="featured-left">
     <img src={what} className="doodle what-icon" alt="" />


        <span className="featured-label">Featured Projects</span>

        <p className="featured-desc">
      Portfolio showcase<br />
          of some of my work.
        </p>
      </div>

      {/* PROJECT GRID */}
      <div className="featured-grid">
        {/* CARD 1 */}
        <div className="featured-card tilt-left">
          <div className="featured-image placeholder">
      <img src={laugh} alt="" />
          </div>

      <div className="featured-footer">
  <p>Skillovia</p>

  <a
    href="https://www.skillovia.co.uk"
    target="_blank"
    rel="noopener noreferrer"
    className="tag pink"
    style={{color: "black", textDecoration: "none"}}
  >
    Visit
  </a>
</div>

        </div>

        {/* CARD 2 */}
        <div className="featured-card tilt-right purple">
           <div className="featured-image placeholder">
      <img src={one}  alt="" />
          </div>

          <div className="featured-footer">
            <p>Color system for app</p>
        <a
    href="https://www.skillovia.co.uk"
    target="_blank"
    rel="noopener noreferrer"
    className="tag blue"
    style={{color: "black", textDecoration: "none"}}
  >
    Visit
  </a>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="featured-card tilt-left">
         <div className="featured-image placeholder">
      <img src={one}  alt="" />
          </div>

          <div className="featured-footer">
            <p>Onboarding screen process</p>
             <a
    href="https://www.skillovia.co.uk"
    target="_blank"
    rel="noopener noreferrer"
    className="tag yellow"
    style={{color: "black", textDecoration: "none"}}
  >
    Visit
  </a>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="featured-card tilt-right">
           <div className="featured-image placeholder">
      <img src={one} alt="" />
          </div>

          <div className="featured-footer">
            <p>Finance Landing page</p>
         <a
    href="https://www.skillovia.co.uk"
    target="_blank"
    rel="noopener noreferrer"
    className="tag green"
    style={{color: "black", textDecoration: "none"}}
  >
    Visit
  </a>
          </div>
        </div>
      </div>
      </div>
      </div>
    </section>
  );
};

export default Featured;
