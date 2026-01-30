import React from "react";
import "./home.css";
import "./featured.css";

// import icons
import reactIcon from "../techicon/react.png";
import nextIcon from "../techicon/nextjs.png";
import awsIcon from "../techicon/aws.png";
import tsIcon from "../techicon/typescript.png";
import rnIcon from "../techicon/react.png";
import postgresIcon from "../techicon/postgres.png";
import nodeIcon from "../techicon/node-js.png";
import expressIcon from "../techicon/express.png";
import cssIcon from "../techicon/css.png";
import tailwindIcon from "../techicon/tail.png";
import jsIcon from "../techicon/js.png";
import mongoIcon from "../techicon/mongodb.png";

const stack = [
  { id: "01", name: "React.js", icon: reactIcon },
  { id: "02", name: "Next.js", icon: nextIcon },
  { id: "03", name: "Aws", icon: awsIcon },
  { id: "04", name: "TypeScript", icon: tsIcon },
  { id: "05", name: "React Native", icon: rnIcon },
  { id: "06", name: "PostgreSQL", icon: postgresIcon },
  { id: "07", name: "Node.js", icon: nodeIcon },
  { id: "08", name: "Express.js", icon: expressIcon },
  { id: "09", name: "CSS3", icon: cssIcon },
  { id: "10", name: "Tailwind CSS", icon: tailwindIcon },
  { id: "11", name: "JavaScript", icon: jsIcon },
  { id: "12", name: "MongoDB", icon: mongoIcon }
];

const TechStack = () => {
  return (
    <section className="tech-section">
         <div className="container">
 
      <div className="tech-header">
        <h2>TECH STACK</h2>
        <p>CORE TECHNOLOGIES & LIBRARIES</p>
      </div>

      <div className="tech-grid">
        {stack.map((item) => (
        <div className="tech-card" key={item.id}>
  <span className="tech-id">{item.id}</span>

  <div className="tech-content">
    <img
      src={item.icon}
      alt={item.name}
      className="tech-icon"
    />

    <h3>{item.name}</h3>
  </div>
</div>

        ))}
      </div>
      </div>
 
    </section>
  );
};

export default TechStack;
