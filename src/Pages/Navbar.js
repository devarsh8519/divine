import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => setExpanded(!expanded);
  const closeNavbar = () => setExpanded(false);

  return (
    <nav className="navbar navbar-expand-lg" expanded={expanded.toString()}>
      <div className="container">
        <div className="navbar-brand d-flex" href="#">
          <img src="Images/Logo.avif" className="img-fluid a" alt="Logo" />
          <p className='p'>Divine Tubes</p>
        </div>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleNavbar} 
          aria-controls="navbarNav" 
          aria-expanded={expanded} 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="b" onClick={closeNavbar}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="b" onClick={closeNavbar}>Company Profile</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="b" onClick={closeNavbar}>Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/application" className="b" onClick={closeNavbar}>Industry</Link>
            </li>
            <li className="nav-item">
              <Link to="/service" className="b" onClick={closeNavbar}>Service Area</Link>
            </li>
            <li className="nav-item">
              <Link to="/touch" className="b" onClick={closeNavbar}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
