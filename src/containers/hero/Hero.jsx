import React, { useEffect, useState } from 'react';
import './hero.css';

const Top = () => {
  return (
    <section className='hero__container'>
      <div>
        <h1>Hi, my name is</h1>
      </div>
      <div>
        <h2 className='big-heading'>Aric Hylton</h2>
      </div>
      <div>
        <h3 className='big-heading'>I build things for the web.</h3>
      </div>
      <div>
        <p>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </p>
      </div>
    </section>
  );
};

export default Top;
