import React from 'react';
import './footer.css';

import githubImg from '../../assets/icons/github-original.svg';
import linkedinImg from '../../assets/icons/linkedin-original.svg';
import resumeImg from '../../assets/icons/document-outline.svg';

const Footer = () => {
  return (
    <footer className='footer__section'>
      <ul className='footer_list'>
        <li>
          <a>
            <img src={githubImg} />
          </a>
        </li>
        <li>
          <a>
            <img src={linkedinImg} />
          </a>
        </li>
        <li>
          <a>
            <img src={resumeImg} />
          </a>
        </li>
      </ul>
      <p>Made with ❤️ by Aric Hylton @ 2023</p>
    </footer>
  );
};

export default Footer;
