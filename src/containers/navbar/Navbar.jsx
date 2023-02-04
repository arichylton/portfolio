import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <p className='navbar__title'>Aric Hylton</p>
      <ul className='navbar__items-container'>
        <li>About</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Contact</li>
        <li>Resume</li>
      </ul>
    </div>
  );
};

export default Navbar;
