import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

document.addEventListener('scroll', function () {
  const navbar = document.querySelector('.fixed-navbar');
  if (window.scrollY > 20) {
    navbar.classList.add('blur');
  } else {
    navbar.classList.remove('blur');
  }
});