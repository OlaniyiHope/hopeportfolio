import React, { useState, useEffect } from "react";
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
    role: "Full-Stack & Mobile Developer",
    period: "Jan 2026 – Present",
    points: [
      "Collaborated with multiple cross-functional developer teams across diverse, concurrent product lines.",
      "Built a full-featured university mobile application from design through deployment.",
      "Developed a digital publications platform for academic and institutional content management.",
      "Engineered a medical laboratory management system handling patient records, test results, and reporting.",
      "Contributed to the Circue travel booking platform — new pages, an event scheduling calendar, and NestJS API endpoints.",
    ],
  },
  {
    id: 2,
    name: "EdSofta Engineering",
    tagline: "Education mobile & desktop app",
    logo: edsoftaLogo,
    url: "https://www.edsofta.com",
    tag: "blue",
    role: "Mobile & Desktop App Developer",
    period: "2025 – Present",
    points: [
      "Own end-to-end development of the company's full mobile application and companion desktop application.",
      "Built a comprehensive education app covering CBT exam practice (JAMB, WAEC, NECO), payment screens, study materials, and AI-powered study features.",
      "Developed 100+ screens in React Native, delivering a feature-rich learning experience for students.",
      "Built the cross-platform desktop companion app with Electron.js, shipping production Windows (.exe) and macOS (.dmg) builds.",
    ],
  },
  {
    id: 3,
    name: "EduPro Solution",
    tagline: "School & polytechnic management platform",
    logo: eduproLogo,
    url: "https://www.edupro.com.ng",
    tag: "yellow",
    role: "Founder & Lead Software Engineer",
    period: "2022 – Present",
    points: [
      "Founded and built an AI-powered school management platform serving multiple Nigerian schools — online exams, AI-generated report cards, attendance tracking, lesson notes, and student portals.",
      "Applied system design practices to strengthen platform reliability, including rate limiting and idempotency on core APIs.",
      "Deployed and managed multi-school subdomains, letting different institutions run independently on the same platform.",
      "Founded the EduPro Solution Academy (2025), training students in web development, mobile development, and software engineering.",
      "Expanded EduPro Solution into the tertiary education sector (Aug 2026), onboarding British Transatlantic Polytechnic for e-learning and institutional e-management.",
    ],
  },
  {
    id: 4,
    name: "Praix Development",
    tagline: "Finomic AI & Loaded Ride",
    logo: praixLogo,
    url: "https://www.praixdevelopment.com",
    tag: "green",
    role: "Full-Stack Mobile Developer (Contract)",
    period: "Apr – Aug 2025",
    points: [
      "Built Finomic AI, an AI-powered financial assistant and trading platform, using Next.js, Node.js, and OpenAI integration.",
      "Developed Loaded Ride, an Uber-like transport mobile app in React Native, shipping Android and iOS builds.",
    ],
  },
  {
    id: 5,
    name: "National Daily Newspaper",
    tagline: "Blog & newspaper platform",
    logo: nationalLogo,
    url: "https://www.nationaldailynewspaper.com",
    tag: "pink",
    role: "Full-Stack Developer (Contract)",
    period: "July 2026",
    points: [
      "Built a full blog and newspaper platform for digital news publishing, from content management to public-facing delivery.",
    ],
  },
  {
    id: 6,
    name: "Lanbeth Resolutions",
    tagline: "UK homecare management platform",
    logo: null,
    initials: "LR",
    url: "https://app.lanbethresolutions.co.uk",
    tag: "blue",
    role: "Full-Stack Developer (Contract)",
    period: "2026 · United Kingdom",
    points: [
      "Built the backend from scratch (Node.js, MongoDB) for LanbethCare, a homecare management platform for a UK-based care provider.",
      "Designed a role-based system spanning Staff, Client, Admin, and Policy roles, with a ~40-endpoint API covering clients, reports, staff, policy, and audit logging.",
      "Delivered dedicated dashboards for staff, clients, and administrators to manage care delivery and compliance.",
    ],
  },
  {
    id: 7,
    name: "Phebe Consultancy",
    tagline: "Travel consultancy website",
    logo: null,
    initials: "PC",
    url: "https://www.phebeconsultancy.com",
    tag: "yellow",
    role: "Full-Stack Developer (Contract)",
    period: "July 2026",
    points: [
      "Built a travel consultancy website to showcase services and manage client-facing travel content.",
    ],
  },
  {
    id: 8,
    name: "Skillovia",
    tagline: "Skill-barter exchange (UK)",
    logo: skillLogo,
    url: "https://www.skillovia.co.uk",
    tag: "green",
    role: "Full-Stack Developer (Contract)",
    period: "Jan – Mar 2025 · United Kingdom",
    points: [
      "Built a skill-barter exchange platform enabling users to swap skills and discover nearby matches via geolocation.",
      "Designed and implemented RESTful API endpoints, a token-based reward system, and geolocation search functionality.",
    ],
  },
];

const tiltFor = (index) => (index % 2 === 0 ? "tilt-left" : "tilt-right");

const ProjectModal = ({ project, onClose }) => {
  // close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="pm-overlay" onClick={onClose}>
      <div className="pm-modal" onClick={(e) => e.stopPropagation()}>
        <button className="pm-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="pm-header">
          <div className="pm-logo">
            {project.logo ? (
              <img src={project.logo} alt={`${project.name} logo`} />
            ) : (
              <span className="logo-initials">{project.initials}</span>
            )}
          </div>
          <div>
            <h3 className="pm-title">{project.name}</h3>
            <p className="pm-role">
              {project.role} <span className="pm-period">· {project.period}</span>
            </p>
          </div>
        </div>

        <ul className="pm-points">
          {project.points.map((pt, i) => (
            <li key={i}>{pt}</li>
          ))}
        </ul>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`tag ${project.tag} pm-visit`}
          style={{ color: "black", textDecoration: "none" }}
        >
          Visit Website →
        </a>
      </div>
    </div>
  );
};

const Featured = () => {
  const [activeProject, setActiveProject] = useState(null);

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
                <button
                  className="featured-image placeholder logo-box card-open-btn"
                  onClick={() => setActiveProject(project)}
                  aria-label={`Read more about ${project.name}`}
                >
                  {project.logo ? (
                    <img src={project.logo} alt={`${project.name} logo`} />
                  ) : (
                    <span className="logo-initials">{project.initials}</span>
                  )}
                </button>

                <div className="featured-footer">
                  <p>{project.name}</p>

                  <div className="featured-card-actions">
                    <button
                      className="tag read-more"
                      onClick={() => setActiveProject(project)}
                    >
                      Read more
                    </button>
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
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
};

export default Featured;
