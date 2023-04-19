import React, { useState, useEffect } from 'react';
import './navbar.css';

import resume from '../../assets/resume/AricHylton_Resume.pdf'

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
      <nav className='navbar-navz'>
        <div className='logo'>
          <a href='/' aria-label='home'>
            {nameText}
          </a>
        </div>
        <ul className='navbar__items-container' style={{marginBottom: 0}}>
          <li>
            <a href='/#about' className='navbar__items-container-link'>
              About
            </a>
          </li>
          <li>
            <a href='/#skills' className='navbar__items-container-link'>
              Skills
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
            <a href={resume} className='resume-link' target='_blank'>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
