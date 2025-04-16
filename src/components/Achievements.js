// Achievements.js
import React, { useEffect, useRef } from 'react';
import './Achievements.css';
import awardIcon from '../assets/award.png';
import medalIcon from '../assets/medal.png';
import starIcon from '../assets/star.png';

const achievements = [
  {
    title: 'AI & ML Virtual Internship - AWS Academy',
    description: 'Completed AWS Academy Machine Learning Foundation with distinction.',
    logo: awardIcon
  },
  {
    title: 'Digital Yatra Organizer',
    description: 'Educated 10,000+ students across 100 schools in Telangana on digital literacy.',
    logo: starIcon
  },
  {
    title: 'Certified in Deep Learning - NPTEL IIT Ropar',
    description: 'Completed course and gained knowledge on Neural Networkd and DL.',
    logo: awardIcon
  },
  {
    title: 'Hackathon Merit - IIITH',
    description: 'Built an end-to-end web app for social good in 24 hours.',
    logo: medalIcon
  }
];

const Achievements = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const scrollStep = 1;
    const scrollInterval = 20;

    const intervalId = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollStep;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }
    }, scrollInterval);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="achievements" className="achievements-section">
      <h2 className="achievements-title">Achievements</h2>
      <div className="achievements-scroll" ref={scrollRef}>
        {achievements.concat(achievements).map((item, index) => (
          <div className="achievement-card" key={index}>
            <img src={item.logo} alt="Achievement Icon" className="achievement-icon" />
            <h3 className="achievement-title">{item.title}</h3>
            <p className="achievement-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
