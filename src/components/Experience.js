import React, { useState } from 'react';
import './Experience.css';
import globallogic from '../assets/globallogic.png';
import pidot from '../assets/pidot.png';
import eduskills from '../assets/eduskills.png';
import learnit from '../assets/learnit.png';
import tita from '../assets/tita.png';

const experiences = [
  {
    id: 1,
    title: 'Head of Operations',
    company: 'Pi Dot (EMELEX Bussinuss Solutions LLP)',
    duration: 'Apr 2024 - Present',
    tools: ['Leadership', 'Webdevelopment','Data', 'Operations', 'Client Management'],
    logo: pidot,
    description: 'Oversaw tech projects, managed client interactions, and led a team of 20+ young individuals.'
  },
  {
    id: 2,
    title: 'Associate Analyst',
    company: 'Global Logic',
    duration: 'Jan 2024 - Mar 2024',
    tools: ['Sheets', 'Data Analysis', 'AI', 'Client Management'],
    logo: globallogic,
    description: 'Contributed to AI-focused project, processing real-time data for model training and enhancement.'
  },
  {
    id: 3,
    title: 'AI & ML Virtual Intern',
    company: 'Edu-Skills / AWS Academy',
    duration: 'Aug 2023 - Nov 2023',
    tools: ['AWS', 'Machine Learning', 'Cloud Foundations'],
    logo: eduskills,
    description: 'Completed AWS academy courses and built cloud-based AI projects.'
  },
  {
    id: 4,
    title: 'Intern',
    company: 'Learnit',
    duration: 'May 2023 - Jul 2023',
    tools: ['Web Development', 'Team Collaboration'],
    logo: learnit,
    description: 'Contributed to development of learning platform and collaborated with peers.'
  },
  {
    id: 5,
    title: 'Java Intern',
    company: 'TITA',
    duration: 'Jan 2023 - Apr 2023',
    tools: ['Java', 'Tech Events', 'Community Outreach'],
    logo: tita,
    description: 'Learned and built java-based projects.'
  }
];

function Experience() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title aligned">Experience</h2>
      <div className="experience-logos">
        {experiences.map((exp) => (
          <img
            key={exp.id}
            src={exp.logo}
            alt={exp.company}
            onClick={() => setSelected(exp.id)}
            className={`experience-logo ${selected === exp.id ? 'selected' : ''}`}
          />
        ))}
      </div>

      {selected && (
        <div className="experience-expand">
          <div className="experience-box glass">
            <img src={experiences[selected - 1].logo} alt="" className="experience-box-logo" />
            <div className="experience-box-details">
              <h3>{experiences[selected - 1].title}</h3>
              <p><strong>Company:</strong> {experiences[selected - 1].company}</p>
              <p><strong>Duration:</strong> {experiences[selected - 1].duration}</p>
              <p><strong>Tools:</strong> {experiences[selected - 1].tools.join(', ')}</p>
              <p><strong>About:</strong> {experiences[selected - 1].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Experience;
