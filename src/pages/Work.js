import React from "react";
import "./featured.css";

const ArrowSvg = () => (
  <svg
    className="featured-arrow"
    width="80"
    height="80"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 20 C60 40, 70 80, 100 100"
      stroke="#000"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M88 96 L102 102 L96 88"
      stroke="#000"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Work = () => {
  return (
    <section className="featured-section work-frame">
            <div className="container">
              <div className="featured-inner">

         {/* <span className="frame-line top" />
      <span className="frame-line bottom" />
      <span className="frame-line left" />
      <span className="frame-line right" />
      <span className="frame-line middle" /> */}

      {/* LEFT */}
      <div className="featured-left">
        <span className="featured-label">Work Experience</span>

        <p className="featured-desc">
          Have been designing <br />
          since my past 4 years
        </p>

        <ArrowSvg />
      </div>

      {/* RIGHT */}
      <div className="work-timeline">
        <div className="work-item">
          <div className="work-number yellow">1</div>
          <div className="work-content">
            <h4>
              Design intern at <span>Google</span>
            </h4>
            <p>Worked on design system at Material 3 designs</p>
            <small>20, April 2021</small>
          </div>
        </div>

        <div className="work-item">
          <div className="work-number blue">2</div>
          <div className="work-content">
            <h4>
              Sr. UI/UX Designer at <span>Microsoft</span>
            </h4>
            <p>Worked on design system at Material 3 designs</p>
            <small>20, April 2022</small>
          </div>
        </div>

        <div className="work-item">
          <div className="work-number pink">3</div>
          <div className="work-content">
            <h4>
              Software Engineer at <span>SASS Startup</span>
            </h4>
            <p>Worked on design system at Material 3 designs</p>
            <small>20, April 2023</small>
          </div>
        </div>
      </div>
      </div>
      </div>
    </section>
  );
};

export default Work;
