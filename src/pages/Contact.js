import React from "react";
import "./featured.css"
import "./home.css"
import what from "../design/what.png";
/* SVG Arrow – same sketch style */
const ArrowSvg = () => (
     <img src={what} className="doodle what-icon" alt="" />
);

const Contact = () => {
  const backgroundStyle = {
    backgroundImage: `url('/static/media/breads.png')`,
  };

  return (
    <section className="contact-section" >
          <div className="container">
                <div className="contact-inner">
      {/* LEFT */}
      <div className="contact-left">
        <span className="contact-label">Contact here</span>

        <p className="contact-desc">
          Have a project idea? <br />
          just say me Hi.
        </p>

        <ArrowSvg />
      </div>

      {/* RIGHT */}
      <div className="contact-form">
        {/* NAME */}
        <div className="contact-row">
          <span className="contact-tag pink">Name</span>
          <input
            type="text"
            className="contact-input"
            placeholder="Zainab Nisa"
          />
        </div>

        {/* EMAIL */}
        <div className="contact-row">
          <span className="contact-tag yellow">Your email</span>
          <input
            type="email"
            className="contact-input"
            placeholder="zainab123@gmail.com"
          />
        </div>

        {/* ABOUT */}
        <div className="contact-row">
          <span className="contact-tag blue">About Project</span>
          <input
            type="text"
            className="contact-input"
            placeholder="I want to discuss you about ......"
          />
        </div>

        {/* BUTTON */}
        <button className="contact-submit">Send Here</button>
      </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
