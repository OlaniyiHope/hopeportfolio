import React from "react";
import "./home.css";

const Services = () => {
  return (
    <section className="services-section">
        <div className="container">
      <h2 className="services-title">
        Services we’re providing <span>🙂</span>
        <br />
        that derive 99% result
      </h2>

      <div className="services-grid">
        {/* LEFT STATS */}
        <div className="services-stats">
          <div className="stat">
            <h3>39</h3>
            <p>Projects</p>
          </div>

          <div className="stat">
            <h3>100k+</h3>
            <p>generated</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="services-cards">
          <div className="service-card">
            <span className="icon yellow">★</span>
            <h4>User Research</h4>
            <p>Services we’re providing that derive 99% result</p>
            <div className="learn-more">Learn more</div>
          </div>

          <div className="service-card">
            <span className="icon purple">#</span>
            <h4>Wireframing</h4>
            <p>Services we’re providing that derive 99% result</p>
            <div className="learn-more">Learn more</div>
          </div>

          <div className="service-card">
            <span className="icon red">♥</span>
            <h4>UI Designing</h4>
            <p>Services we’re providing that derive 99% result</p>
            <div className="learn-more">Learn more</div>
          </div>

          <div className="service-card">
            <span className="icon blue">✳</span>
            <h4>Prototyping</h4>
            <p>Services we’re providing that derive 99% result</p>
            <div className="learn-more">Learn more</div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Services;
