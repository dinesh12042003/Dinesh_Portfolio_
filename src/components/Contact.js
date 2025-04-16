// Contact.js
import React from 'react';
import './Contact.css';
import { MdEmail, MdPhone } from 'react-icons/md';
import catchyImage from '../assets/connect.png';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Let's Connect!</h2>
      <div className="contact-container">
        {/* Info glass box on the left */}
        <div className="contact-info glass">
          <img src={catchyImage} alt="Connect" className="connect-image" />
          <p className="catch-line">Let’s build something awesome together ✨</p>

          <div className="info-item">
            <div className="icon-bg">
              <MdEmail className="info-icon" />
            </div>
            <a href="mailto:dineshchowdharyparidala@gmail.com">dineshchowdharyparidala@gmail.com</a>
          </div>

          <div className="info-item">
            <div className="icon-bg">
              <MdPhone className="info-icon" />
            </div>
            <a href="tel:+917386737989">+91 73867 37989</a>
          </div>
        </div>

        {/* Form glass box on the right */}
        <form
          className="contact-form glass"
          action="https://formspree.io/f/yourFormID"
          method="POST"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
