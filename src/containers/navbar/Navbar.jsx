import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <header className='header'>
      <nav className='navbar'>
        <div className='logo'>
          <a href='/' aria-label='home'>
            Aric Hylton
          </a>
        </div>
        <div className='navbar__items-container navbar_items-extra'>
          <ul>
            <li>
              <a href='/#about'>About</a>
            </li>
            <li>
              <a href='/#experience'>Experience</a>
            </li>
            <li>
              <a href='/#projects'>Projects</a>
            </li>
            <li>
              <a href='/#contact'>Contact</a>
            </li>
            <li>
              <a href='/#resume'>Resume</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
