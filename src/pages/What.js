
import React from "react";
import "./home.css";
import what from "../design/what.png";
const What = () => {
  return (
    <section className="what-section">
             <div className="container">
      {/* Title */}
      <div className="what-title-wrap">
        <div className="what-label">What i do?</div>

   
            <img src={what} className="doodle what2-icon" alt="" />
      </div>

      {/* Cards */}
      <div className="what-cards">
        {/* CARD 1 */}
        <div className="what-card yellow tilt-left">
          <div className="card-tag pen-paper">Pen / Paper</div>

          <svg className="card-icon pencil" viewBox="0 0 24 24">
            <path
              d="M3 21 L6 20 L20 6 L18 4 L4 18 Z"
              fill="#FFD400"
              stroke="#000"
              strokeWidth="1.5"
            />
          </svg>

          <h3>
            User Research <br /> Design
          </h3>
        </div>

        {/* CARD 2 */}
        <div className="what-card blue tilt-center">
          <div className="card-tag figma">Figma</div>

          <svg className="card-icon eye" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="8" fill="#fff" stroke="#000" strokeWidth="1.5"/>
            <circle cx="12" cy="12" r="3" fill="#F384D4"/>
          </svg>

          <h3>
            UI & Product <br /> Design
          </h3>
        </div>

        {/* CARD 3 */}
        <div className="what-card pink tilt-right">
          <div className="card-tag webflow">Webflow</div>

          <svg className="card-icon star" viewBox="0 0 24 24">
            <path
              d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"
              fill="#FFD6F4"
              stroke="#000"
              strokeWidth="1.5"
            />
          </svg>

          <h3>
            No-code <br /> Development
          </h3>
        </div>
      </div>
      </div>
    </section>
  );
};

export default What;
