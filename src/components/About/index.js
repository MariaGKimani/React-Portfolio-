// AboutPage.js
import React from 'react';
import './style.scss';
import { FaReact, FaPython, FaCss3Alt,FaJsSquare, FaGraduationCap,FaBriefcase } from 'react-icons/fa';
import { SiDjango, SiTypescript } from 'react-icons/si';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skills = [
  { name: 'JavaScript', percentage: 60, icon: <FaJsSquare /> },
  { name: 'React', percentage: 60, icon: <FaReact /> },
  { name: 'Django', percentage: 80, icon: <SiDjango /> },
  { name: 'Python', percentage: 85, icon: <FaPython /> },
  { name: 'TypeScript', percentage: 35, icon: <SiTypescript /> },
  { name: 'CSS', percentage: 80, icon: <FaCss3Alt /> },
  
];

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <div className="skills-section">
        <div className="skills-container">
          {skills.map((skill) => (
            <div className="skill-item" key={skill.name}>
              <CircularProgressbar
                value={skill.percentage}
                text={skill.name}
                styles={buildStyles({
                  textSize: '14px',
                  pathColor: '#2196F3',
                  textColor: '#FFFFFF',
                })}
              />
              <div className="skill-icon">{skill.icon}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="education-experience-section">
        <div className="education">
        <FaGraduationCap className="section-icon" />
          <h2>Education</h2>
          <br/>
          <div className="education-item">
            <p className="education-title">Power Learn Project</p>
            <p className="education-details">June 2022 - September 2022</p>
          </div>
          <br/>
          <div className="education-item">
            <p className="education-title">AkiraChix</p>
            <p className="education-details">January 2023 - December 2023</p>
          </div>
          {/* Add more education details as needed */}
        </div>
        <div className="experience">
        <FaBriefcase className="section-icon" />
          <h2>Experience</h2>
          <div className="experience-item">
            <p className="experience-title">Platform Engineer Intern</p>
            <p className="experience-company">ELLO</p>
            <p className="experience-details">January 2024 - April 2024</p>
          </div>
          {/* Add more experience details as needed */}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
