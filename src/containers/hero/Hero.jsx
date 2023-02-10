import React, { useEffect, useState } from 'react';
import './hero.css';

import githubImg from '../../assets/icons/github-original.svg';
import linkedinImg from '../../assets/icons/linkedin-original.svg';
import resumeImg from '../../assets/icons/document-outline.svg';

const Top = () => {
  return (
    <section className='hero__container'>
      <div>
        <h1>Hi, my name is</h1>
      </div>
      <div>
        <h2 className='big-heading'>Aric Hylton.</h2>
      </div>
      <div>
        <h3 className='big-heading'>Software Developer.</h3>
      </div>
      <div>
        <p>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </p>
      </div>
      <div>
        <a
          className='contact-link'
          href='!#'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={githubImg} />
        </a>
        <a
          className='contact-link'
          href='!#'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={linkedinImg} />
        </a>
      </div>
    </section>
  );
};

export default Top;
