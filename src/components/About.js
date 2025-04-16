import React from 'react';
import './About.css';
import aboutImage from '../assets/about-me.jpg';
import resumePDF from '../assets/Dinesh_Resume.pdf';

function About() {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container glass-effect">
        <div className="about-content">
          <h2>
            Hi, I'm <span className="highlight styled-name">Dinesh Chowdhary</span>
          </h2>
          <p>
            Creative Developer blending code with art. Passionate about crafting elegant frontend experiences,
            robust backend solutions, and diving deep into data science realms. Whether it’s a solo build or a
            collaborative hackathon, I thrive where creativity meets logic.
          </p>
          <ul className="highlights">
            <li>⚡ Built real-time AI pipelines for data processing</li>
            <li>🚀 Participated and won accolades in national hackathons</li>
            <li>🎯 Strong grip on Python, Java, and Database Design</li>
          </ul>
          <div className="about-buttons">
            <a href={resumePDF} download className="btn">Download Resume</a>
            <button onClick={scrollToContact} className="btn">Contact Me</button>
          </div>
        </div>
        <div className="about-image circle-shape">
          <img src={aboutImage} alt="Dinesh Portrait" />
        </div>
      </div>
    </section>
  );
}

export default About;
