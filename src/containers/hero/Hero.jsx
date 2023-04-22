import React, { useEffect, useState } from 'react';
import './hero.css';
import { Tooltip } from 'react-tooltip';

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
        <h3 className='big-heading'>Software Engineer.</h3>
      </div>
      <div>
        <p>
          I build solid and scalable web applications with great user experiences.
        </p>
      </div>
      <div>
        <a
          className='contact-link'
          href='https://github.com/arichylton'
          target='_blank'
          rel='noopener noreferrer'
          data-tooltip-content='Github'
          data-tooltip-id='github-tooltip'
        >
          <Tooltip id='github-tooltip' place='bottom' />
          <img src={githubImg} />
        </a>
        <a
          className='contact-link'
          href='https://www.linkedin.com/in/aric-hylton-8a3394177/'
          target='_blank'
          rel='noopener noreferrer'
          data-tooltip-content='LinkedIn'
          data-tooltip-id='linkedin-tooltip'
        >
          <Tooltip id='linkedin-tooltip' place='bottom' />
          <img src={linkedinImg} />
        </a>

      </div>
    </section>
  );
};

export default Top;
