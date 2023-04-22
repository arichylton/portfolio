import React, { useState, useEffect } from 'react';
import './navbar.css';

import resume from '../../assets/resume/AricHylton_Resume.pdf';

const Navbar = () => {
  const [nameText, setNameText] = useState('AH');
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [checked, setChecked] = useState(false);
  const [topOfPage, setTopOfPage] = useState(100);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY < lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', changeBackground, true);
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);

  const changeBackground = () => {
    if (window.scrollY == 0) {
      setTopOfPage(100);
    } else setTopOfPage(70);
    if (window.scrollY >= 600) {
      setNameText('Aric Hylton');
    } else {
      setNameText('AH');
    }
  };

  const changeChecked = () => {
    setChecked(!checked);
  };

  return (
    <header className={`header ${show && 'hidden'} ${topOfPage != 100 && 'shadowed'}`} style={{height: topOfPage}}>
      <nav className='navbar-navz'>
        <div className='logo'>
          <a href='/#' aria-label='home'>
            {nameText}
          </a>
        </div>

        <ul className='navbar__items-container' style={{ marginBottom: 0 }}>
          <input
            type='checkbox'
            id='checkbox_toggle'
            checked={checked}
            readOnly={true}
          />
          {!checked ? (
            <label
              htmlFor='checkbox_toggle'
              className='hamburger'
              onClick={changeChecked}
            >
              &#9776;
            </label>
          ) : (
            <label
              htmlFor='checkbox_toggle'
              className='hamburger'
              onClick={changeChecked}
            >
              &#9932;
            </label>
          )}

          <div className='menu'>
            <li>
              <a
                href='/#about'
                className='navbar__items-container-link'
                onClick={changeChecked}
              >
                About
              </a>
            </li>
            <li>
              <a
                href='/#skills'
                className='navbar__items-container-link'
                onClick={changeChecked}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href='/#projects'
                className='navbar__items-container-link'
                onClick={changeChecked}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href='/#contact'
                className='navbar__items-container-link'
                onClick={changeChecked}
              >
                Contact
              </a>
            </li>
            <li>
              <a href={resume} className='resume-link' target='_blank'>
                Resume
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
