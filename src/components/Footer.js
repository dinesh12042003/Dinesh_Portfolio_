import React, { useEffect, useState } from 'react';
import '../styles/Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= documentHeight - 100) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="footer-container glass">
        <div className="footer-column brand-info">
          <h2 className="footer-logo">DINESH</h2>
          <p className="footer-description">Crafting clean code, one pixel at a time.</p>
        </div>

        <div className="footer-column footer-links">
          <h3>Quick Links</h3>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-column footer-socials">
          <h3>Connect</h3>
          <a href="mailto:dineshchowdharyparidala@gmail.com">
            <i className="fas fa-envelope"></i> dineshchowdharyparidala@gmail.com
          </a>
          <a href="tel:+917336737989">
            <i className="fas fa-phone-alt"></i> +91 73367 37989
          </a>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/dinesh-paridala/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/dinesh12042003" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/dinesh365_/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="mailto:dineshchowdharyparidala@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Dinesh. All Rights Reserved.</p>
      </div>

      {showScroll && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </div>
      )}
    </footer>
  );
}

export default Footer;
