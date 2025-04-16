// components/Education.js
import React from 'react';
import mruLogo from '../assets/mru.png';
import chaithanyaLogo from '../assets/chaithanya.png';
import schoolLogo from '../assets/school.png';
import eduImage from '../assets/education.svg';
import '../styles/Education.css';

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-content glass-box">
        <h2 className="education-title">Education</h2>

        <div className="education-entry">
          <div className="edu-entry-logo">
            <img src={mruLogo} alt="Malla Reddy University Logo" className="edu-logo animated-logo" />
          </div>
          <div className="edu-entry-details">
            <h3>Malla Reddy University</h3>
            <p className="degree">B.Tech in CSE (AI & ML)</p>
            <p className="year-gpa">2020-24 | CGPA: 8.49</p>
          </div>
        </div>

        <div className="education-entry">
          <div className="edu-entry-logo">
            <img src={chaithanyaLogo} alt="Chaithanya College Logo" className="edu-logo animated-logo" />
          </div>
          <div className="edu-entry-details">
            <h3>Sri Chaithanya Junior College</h3>
            <p className="degree">Intermediate MPC</p>
            <p className="year-gpa">2018-20 | 90.4%</p>
          </div>
        </div>

        <div className="education-entry">
          <div className="edu-entry-logo">
            <img src={schoolLogo} alt="Chaithanya School Logo" className="edu-logo animated-logo" />
          </div>
          <div className="edu-entry-details">
            <h3>Sri Chaithanya School</h3>
            <p className="degree">SSC</p>
            <p className="year-gpa">2017-18 | CGPA: 9.3</p>
          </div>
        </div>
      </div>

      <div className="education-image">
        <img src={eduImage} alt="Education Illustration" className="large-edu-image" />
      </div>
    </section>
  );
}

export default Education;
