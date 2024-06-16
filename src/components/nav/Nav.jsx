// src/components/Nav/Nav.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className='nav'>
      <img src="https://i2.wp.com/www.eliteeventsva.com/wp-content/uploads/2019/05/Logo-Idea-2.1-Transparent2.png?resize=1024%2C499" alt="logo" className='logo' />
      <button className='mobile-menu-icon' onClick={handleToggle}>
        {isMobile ? '✖' : '☰'}
      </button>
      <ul className={isMobile ? 'nav-links show' : 'nav-links'}>
        <li><Link to="/" onClick={() => setIsMobile(false)}>Home</Link></li>
        <li><Link to="/ourwork" onClick={() => setIsMobile(false)}>Our Work</Link></li>
        <li><Link to="/insights" onClick={() => setIsMobile(false)}>Insights</Link></li>
        <li><Link to="/aboutus" onClick={() => setIsMobile(false)}>About Us</Link></li>
        <li><Link to="/contact" onClick={() => setIsMobile(false)}>Contact Us</Link></li>
       
      </ul>
    </div>
  );
}

export default Nav;