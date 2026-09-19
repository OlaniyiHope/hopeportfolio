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

// 👉 Your real CV experience (easy to extend later)
const workExperience = [
  {
    id: 1,
    color: "yellow",
    role: "Full-Stack & Mobile Developer",
    company: "Cyclebreeze",
    desc: "Building a university mobile app, a digital publications platform and a medical lab management system across multiple concurrent product lines.",
    date: "Jan 2026 – Present",
  },
  {
    id: 2,
    color: "pink",
    role: "Mobile & Desktop App Developer",
    company: "EdSofta Engineering",
    desc: "Own the full mobile and desktop app — 100+ React Native screens for CBT, payments and AI, plus an Electron.js desktop build.",
    date: "2025 – Present",
  },
  {
    id: 3,
    color: "blue",
    role: "Founder & Lead Software Engineer",
    company: "EduPro Solution",
    desc: "Built an AI-powered school & polytechnic management platform, added system design (rate limiting, idempotency), and run a coding academy.",
    date: "2022 – Present",
  },
  {
    id: 4,
    color: "green",
    role: "Full-Stack Developer",
    company: "Lanbeth Resolutions (UK)",
    desc: "Built a role-based homecare management backend from scratch — staff, client, admin and policy dashboards.",
    date: "2026",
  },
  {
    id: 5,
    color: "yellow",
    role: "Full Stack Mobile Developer",
    company: "Praix Development",
    desc: "Built web & mobile apps for clients using Node.js, Next.js and React Native.",
    date: "Apr – Aug 2025",
  },
  {
    id: 6,
    color: "blue",
    role: "Full Stack Developer",
    company: "Skillovia (UK)",
    desc: "Created APIs, implemented geo-location skill matching and token systems.",
    date: "Jan – Mar 2025",
  },
  {
    id: 7,
    color: "pink",
    role: "Full-Stack & Mobile Developer",
    company: "ParkWell, Lagos",
    desc: "Worked on mobile UI with Ionic and backend APIs using NestJS & TypeORM.",
    date: "2023 – 2024",
  },
];

const Work = () => {
  return (
    <section className="featured-section work-frame">
      <div className="container">
        <div className="featured-inner">

          {/* LEFT */}
          <div className="featured-left">
            <span className="featured-label">Work Experience</span>

            <p className="featured-desc">
              Building scalable web & mobile products <br />
              for over 5 years
            </p>

            <ArrowSvg />
          </div>

          {/* RIGHT */}
          <div className="work-timeline">
            {workExperience.map((item) => (
              <div className="work-item" key={item.id}>
                <div className={`work-number ${item.color}`}>
                  {item.id}
                </div>

                <div className="work-content">
                  <h4>
                    {item.role} at <span>{item.company}</span>
                  </h4>
                  <p>{item.desc}</p>
                  <small>{item.date}</small>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Work;
