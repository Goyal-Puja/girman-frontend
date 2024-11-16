import React from 'react';
import './navbar.css';

function NavBar() {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src="/assests/image/logo.svg" alt="Girman Technologies Logo" className="logo" />
        <div className="logo-text">
          <h1>Girman</h1>
          <span>TECHNOLOGIES</span>
        </div>
      </div>
      <div className="nav-links">
        <a href="#search" className="nav-link">SEARCH</a>
        <a href="https://girmantech.com/" className="nav-link">WEBSITE</a>
        <a href="https://www.linkedin.com/company/girmantech/" className="nav-link">LINKEDIN</a>
        <a href="#contact" className="nav-link">CONTACT</a>
      </div>
    </div>
  );
}

export default NavBar;
