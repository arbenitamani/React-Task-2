

import React from 'react';
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="#">Domains</a></li>
        <li className="nav-item"><a href="#">Web Hosting</a></li>
        <li className="nav-item"><a href="#">Dedicated Servers</a></li>
        <li className="nav-item"><a href="#">Virtual Cloud Servers</a></li>
        <li className="nav-item"><a href="#">WordPress Hosting</a></li>
        <li className="nav-item"><a href="#">Email Hosting</a></li>
        <li className="nav-item"><a href="#">WPS Hosting Servers</a></li>
        <li className="nav-item"><a href="#">Free Hosting</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
