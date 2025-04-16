import React, { useEffect, useRef } from 'react';
import './Projects.css';

// Import all project images
import fire from '../assets/fire.jpg';
import student from '../assets/student.jpg';
import lane from '../assets/lane.jpg';
import medalarm from '../assets/medalarm.jpg';
import histogram from '../assets/histogram.jpg';
import gun from '../assets/gun.jpg';
import plagiarism from '../assets/plagiarism.jpg';
import ecommerce from '../assets/ecommerce.jpg';
import assistant from '../assets/assistant.jpg';

const projects = [
  {
    title: "FireDetection Using RTpnn",
    image: fire,
    link: "https://github.com/dinesh12042003/Fire_Dectetion"
  },
  {
    title: "Student performance prediction",
    image: student,
    link: "https://github.com/yourusername/student-performance"
  },
  {
    title: "Lane detection using Scnn",
    image: lane,
    link: "https://github.com/yourusername/lane-detection"
  },
  {
    title: "CarePlus - Med Alarm",
    image: medalarm,
    link: "https://github.com/dinesh12042003/Care_plus"
  },
  {
    title: "Histogram based image preprocessing",
    image: histogram,
    link: "https://github.com/dinesh12042003/Histogram_based_image_preprocessing"
  },
  {
    title: "Gun Detection",
    image: gun,
    link: "https://github.com/dinesh12042003/Gun_Detection"
  },
  {
    title: "Plagiarism Detection",
    image: plagiarism,
    link: "https://github.com/yourusername/plagiarism-detection"
  },
  {
    title: "Data analysis for Ecommerce project",
    image: ecommerce,
    link: "https://github.com/dinesh12042003/Ecommerce_Website_Analysis"
  },
  {
    title: "Virtual Assistant using HTML, CSS, JavaScript",
    image: assistant,
    link: "https://github.com/yourusername/virtual-assistant"
  }
];

function Projects() {
  const scrollRef = useRef(null);
  const directionRef = useRef(1);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const scrollStep = 1;

    const scroll = () => {
      if (scrollContainer) {
        if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
          directionRef.current = -1;
        } else if (scrollContainer.scrollLeft <= 0) {
          directionRef.current = 1;
        }
        scrollContainer.scrollLeft += scrollStep * directionRef.current;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-scroll" ref={scrollRef}>
        {projects.concat(projects).map((project, index) => (
          <a
            key={index}
            className="project-card glass"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-overlay always-visible">
              <h3 className="project-title animated-title">{project.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;