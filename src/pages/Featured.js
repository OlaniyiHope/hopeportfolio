import React from "react";
import "./featured.css";
import what from "../design/what.png";

import cyclebreezeLogo from "./logos/cyclebreeze.jpeg";
import edsoftaLogo from "./logos/edsofta.jpeg";
import eduproLogo from "./logos/edupro.png";
import nationalLogo from "./logos/national.jpg";
import praixLogo from "./logos/praix.png";
import skillLogo from "./skill.png";

// 👉 Real projects — easy to extend later
const projects = [
  {
    id: 1,
    name: "Cyclebreeze",
    tagline: "Multi-product dev collaboration",
    logo: cyclebreezeLogo,
    url: "https://www.cyclebreeze.com",
    tag: "pink",
  },
  {
    id: 2,
    name: "EdSofta Engineering",
    tagline: "Education mobile & desktop app",
    logo: edsoftaLogo,
    url: "https://www.edsofta.com",
    tag: "blue",
  },
  {
    id: 3,
    name: "EduPro Solution",
    tagline: "School & polytechnic management platform",
    logo: eduproLogo,
    url: "https://www.edupro.com.ng",
    tag: "yellow",
  },
  {
    id: 4,
    name: "Praix Development",
    tagline: "Finomic AI & Loaded Ride",
    logo: praixLogo,
    url: "https://www.praixdevelopment.com",
    tag: "green",
  },
  {
    id: 5,
    name: "National Daily Newspaper",
    tagline: "Blog & newspaper platform",
    logo: nationalLogo,
    url: "https://www.nationaldailynewspaper.com",
    tag: "pink",
  },
  {
    id: 6,
    name: "Lanbeth Resolutions",
    tagline: "UK homecare management platform",
    logo: null,
    initials: "LR",
    url: "https://app.lanbethresolutions.co.uk",
    tag: "blue",
  },
  {
    id: 7,
    name: "Phebe Consultancy",
    tagline: "Travel consultancy website",
    logo: null,
    initials: "PC",
    url: "https://www.phebeconsultancy.com",
    tag: "yellow",
  },
  {
    id: 8,
    name: "Skillovia",
    tagline: "Skill-barter exchange (UK)",
    logo: skillLogo,
    url: "https://www.skillovia.co.uk",
    tag: "green",
  },
];

const tiltFor = (index) => (index % 2 === 0 ? "tilt-left" : "tilt-right");

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
              Portfolio showcase
              <br />
              of some of my work.
            </p>
          </div>

          {/* PROJECT GRID */}
          <div className="featured-grid">
            {projects.map((project, index) => (
              <div className={`featured-card ${tiltFor(index)}`} key={project.id}>
                <div className="featured-image placeholder logo-box">
                  {project.logo ? (
                    <img src={project.logo} alt={`${project.name} logo`} />
                  ) : (
                    <span className="logo-initials">{project.initials}</span>
                  )}
                </div>

                <div className="featured-footer">
                  <p>{project.name}</p>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`tag ${project.tag}`}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Visit
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
