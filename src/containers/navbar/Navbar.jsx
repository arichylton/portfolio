import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
  const [nameText, setNameText] = useState('Aric Hylton');

  useEffect(() => {
    window.addEventListener('scroll', changeBackground, true);
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);

  const changeBackground = () => {
    if (window.scrollY >= 600) {
      setNameText('Aric Hylton');
    } else {
      setNameText('AH');
    }
  };

  return (
    <header className='header'>
      <nav className='navbar'>
        <div className='logo'>
          <a href='/' aria-label='home'>
            {nameText}
          </a>
        </div>
        <div className='navbar__items-container navbar_items-extra'>
          <ul>
            <li>
              <a href='/#about' className='navbar__items-container-link'>
                About
              </a>
            </li>
            <li>
              <a href='/#experience' className='navbar__items-container-link'>
                Experience
              </a>
            </li>
            <li>
              <a href='/#projects' className='navbar__items-container-link'>
                Projects
              </a>
            </li>
            <li>
              <a href='/#contact' className='navbar__items-container-link'>
                Contact
              </a>
            </li>
            <li>
              <a href='/#resume' className='resume-link'>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
