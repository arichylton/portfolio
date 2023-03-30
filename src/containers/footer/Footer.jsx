import React from 'react';
import './footer.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import githubImg from '../../assets/icons/github-original.svg';
import linkedinImg from '../../assets/icons/linkedin-original.svg';
import resumeImg from '../../assets/icons/document-outline.svg';
import resumeLink from '../../assets/resume/AricHylton_Resume.pdf'

const Footer = () => {
  return (
    <AnimationOnScroll
      animateIn='animate__fadeIn'
      offset='100'
      animateOnce='true'
      className='footer__section'
    >
      <ul className='footer_list'>
        <li>
          <a href='https://github.com/arichylton' target='_blank'>
            <img src={githubImg} />
          </a>
        </li>

        <li>
          <a
            href='https://www.linkedin.com/in/aric-hylton-8a3394177/'
            target='_blank'
          >
            <img src={linkedinImg} />
          </a>
        </li>
        <li>
          <a href={resumeLink} target='_blank'>
            <img src={resumeImg} />
          </a>
        </li>
      </ul>

      <p>Made with ❤️ by Aric Hylton @ 2023</p>
    </AnimationOnScroll>
  );
};

export default Footer;
