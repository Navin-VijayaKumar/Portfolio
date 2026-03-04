import React from "react";
import "./Skills.css"; // Import the updated CSS file

const skills = [
  {
    title: "Frontend",
    skills: [
      { name: "React Js", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
      { name: "LWC", image: "https://a.sfdcstatic.com/shared/images/c360-nav/salesforce-no-type-logo.svg" },
      { name: "HTML", image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" },
      { name: "CSS", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
      { name: "JavaScript", image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node Js", image: "https://nodejs.org/static/images/logo.svg" },
      { name: "Express Js", image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
      { name: "MySQL", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" },
      { name: "MongoDB", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" },
    ],
  },
  {
    title: "Others",
    skills: [
      { name: "Git", image: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
      { name: "GitHub", image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
      { name: "VS Code", image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" },
      { name: "Postman", image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      { name: "Figma", image: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "C", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" },
      { name: "Java", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
      { name: "Apex", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/apex/apex-original.svg" },
    ],
  }
];

const Skills = () => {
  

  return (
    <section id="skills">
      <div className="skills-container">
   

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <h2 className="skill-title">{skill.title}</h2>
              <div className="skill-items">
                {skill.skills.map((item, idx) => (
                  <div key={idx} className="skill-box">
                    <img src={item.image} alt={item.name} className="skill-icon" />
                    <span >{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;