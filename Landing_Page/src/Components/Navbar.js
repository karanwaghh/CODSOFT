
import React from 'react';
import './CSS/Navbar.css'; 
import Logo from '../Img/Logo.png';
const Navbar = () => {
  return (
    <nav className="navbar"> 
      <div className="navbar-left">
        <img src={Logo} alt="Logo" style={{ borderRadius: '50px' }}/>
      </div>
      <div className="navbar-right">
      <a href='/' style={{ color: 'white', textDecoration: 'none' }}>Home</a>
      <a href='/services' style={{ color: 'white', textDecoration: 'none' }}>Service</a>
      <a href="/blog" style={{ color: 'white', textDecoration: 'none' }}>Blog</a>
      <a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>

      </div>
    </nav>
  );
};

export default Navbar;



