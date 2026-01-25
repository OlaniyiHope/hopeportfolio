import React from "react";
import "./featured.css";
import what from "../design/what.png";
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
          Have designed<br />
          morethan 20 projects
        </p>
      </div>

      {/* PROJECT GRID */}
      <div className="featured-grid">
        {/* CARD 1 */}
        <div className="featured-card tilt-left">
          <div className="featured-image placeholder">
            Portfolio Design
          </div>

          <div className="featured-footer">
            <p>4 style Portfolio design</p>
            <span className="tag pink">No-Code</span>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="featured-card tilt-right purple">
          <div className="featured-image app-ui" />

          <div className="featured-footer">
            <p>Color system for app</p>
            <span className="tag blue">UI Design</span>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="featured-card tilt-left">
          <div className="featured-image sketch" />

          <div className="featured-footer">
            <p>Onboarding screen process</p>
            <span className="tag yellow">UX Design</span>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="featured-card tilt-right">
          <div className="featured-image phone-ui" />

          <div className="featured-footer">
            <p>Finance Landing page</p>
            <span className="tag green">UI Design</span>
          </div>
        </div>
      </div>
      </div>
      </div>
    </section>
  );
};

export default Featured;
