import React from 'react';
import './style.scss';
import { FaGithub, FaLink } from 'react-icons/fa';

const projects = [
  {
    title: "Parents Report",
    description: "As an intern at Ello, I developed a feature to send weekly email reports to parents about their child's app usage and tips, enhancing parental engagement in their learning journey.",
    technologies: ["Typescript", "GraphQL", "Next js"],
    // github: "https://github.com/yourprofile/project-one",
    demo: "https://www.ello.com/",
  },
  {
    title: "Green kiosk",
    description: "A platform to help Mama Mboga boost sales.",
    technologies: ["Django", "Python", "Bootstrap"],
    github: "https://github.com/MariaGKimani/Green_Kiosk_.git",
    demo: "",
  },
  {
    title: "Users connect",
    description: "A  web app that lists users from an API.",
    technologies: ["React", "JavaScript", "Rest API"],
    github: "https://github.com/MariaGKimani/Users_Connect",
    demo: "https://users-connect-g3zfvyghj-mgmkimani-gmailcom.vercel.app/",
  },
  {
    title: "CarbonGuard",
    description: "This project helps transportation companies track carbon emissions using IoT devices and a dashboard for carbon credit calculations..",
    technologies: ["Django", "Python", "Bootstrap"],
    github: "https://github.com/yourprofile/project-two",
    demo: "https://project-two-demo.com",
  },
];

const Projects = () => {
  console.log("Projects component rendered");
  return (
    <div className="projects-page">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="project-icon" /> GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <FaLink className="project-icon" /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
