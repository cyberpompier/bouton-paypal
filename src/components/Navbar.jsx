import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Navbar({ isAuthenticated }) { // Receive isAuthenticated prop
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Ma PWA</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">À Propos</Link>
        </li>
        {isAuthenticated && ( // Conditionally render the Profile link
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
