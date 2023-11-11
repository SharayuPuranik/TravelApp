import React from 'react';
import './Navbar.css'; // Make sure to create a CSS file for styling
import { Link } from "react-router-dom";
// eslint-disable-next-line
import Blog from "./pages/Blog";
// eslint-disable-next-line
import About from "./pages/About";
// eslint-disable-next-line
import Plan from "./pages/Plan";
import logo from './logo.png'; 

const Navbar = () => {
  return (
    <nav className="navbar">
        <a href="/"> 
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div></a>
      <div className="navbar-links">
        <ul>
          <li><Link to="/Plan">Plan</Link></li>
          <li><Link to="/Blog">Blog</Link></li>
          <li><Link to="/About">About Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
