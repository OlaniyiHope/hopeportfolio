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
            <h3>30+</h3>
            <p>Projects</p>
          </div>

          <div className="stat">
            <h3>500k+</h3>
            <p>users</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
<div className="services-cards">
  {/* Service 1 */}
  <div className="service-card">
    <span className="icon yellow">★</span>
    <h4>Web Application Development</h4>
    <p>
      Craft responsive and scalable web applications using technologies like React, Node.js, and Express. 
      Deliver intuitive user experiences backed by robust server-side logic.
    </p>
    <div className="learn-more">Learn more</div>
  </div>

  {/* Service 2 */}
  <div className="service-card">
    <span className="icon purple">#</span>
    <h4>Mobile App Development</h4>
    <p>
      Build high-performance mobile apps for iOS and Android using modern frameworks, 
      ensuring smooth functionality, accessibility, and seamless user interaction.
    </p>
    <div className="learn-more">Learn more</div>
  </div>

  {/* Service 3 */}
  <div className="service-card">
    <span className="icon red">♥</span>
    <h4>API & System Design</h4>
    <p>
      Design and implement RESTful or GraphQL APIs to power web and mobile applications. 
      Handle authentication, payment integrations, and efficient data management.
    </p>
    <div className="learn-more">Learn more</div>
  </div>

  {/* Service 4 */}
  <div className="service-card">
    <span className="icon blue">✳</span>
    <h4>Database & Cloud Integration</h4>
    <p>
      Manage SQL and NoSQL databases while integrating cloud services like AWS, Firebase, or Heroku. 
      Ensure real-time data, scalability, and reliability for modern applications.
    </p>
    <div className="learn-more">Learn more</div>
  </div>

  {/* Service 5 */}
  <div className="service-card">
    <span className="icon green">⚡</span>
    <h4>Performance & Maintenance</h4>
    <p>
      Optimize web and mobile applications for speed, security, and stability. 
      Provide ongoing maintenance, code reviews, and bug fixes for long-term reliability.
    </p>
    <div className="learn-more">Learn more</div>
  </div>
</div>

      </div>
      </div>
    </section>
  );
};

export default Services;
