import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header-wrapper fixed-navbar">
        <Navbar />
      </header>
      <main className="main-content-wrapper">
        <About />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <footer className="footer-wrapper">
        <Footer />
      </footer>
    </div>
  );
}

export default App;