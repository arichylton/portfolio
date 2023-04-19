import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import './about.css';

import personalPhoto from '../../assets/project-images/personal_photo.jpeg';

const About = () => {
  return (
    <section className='about__section anchor' id='about'>
      <AnimationOnScroll
        animateIn='animate__fadeIn'
        animateOnce='true'
        duration='.8'
      >
        <div className='about__title'>
          <h1>About Me</h1>
        </div>
        <div className='about__container'>
          <div>
            <div className='about__section-summary'>
              <span>
                Hey 👋🏼 my name is{' '}
                <span style={{ color: 'rgb(16, 234, 250)' }}>Aric Hylton</span>{' '}
                and I have been working with computers my entire life. I have
                been interested in coding since high school and I'm now enrolled
                at Full Sail University to recieve a Bachelor's in Computer
                Science at the end of 2023.
              </span>
              <span>
                My main programming experience is with{' '}
                <span style={{ color: 'rgb(16, 234, 250)' }}>
                JavaScript, React, Python, C#, HTML, CSS, and Node.js.
                </span>
                {' '}I'm constantly keeping up to date with new documentation and
                enhancing my knowledge of current programming concepts. It's
                important for me to be the best at what I do and strive to be
                the hardest working developer that I can be.
              </span>
              <span>
                A few of my other hobbies are powerlifting, rock-climbing, and
                pretty much anything outdoors. I like seeing a goal, mapping out
                the process of getting to the end, and then tackling each
                problem along the way.
              </span>
              <span>
                Here are a few technologies I’ve been working with recently:
              </span>
            </div>
          </div>
          <img src={personalPhoto} className='about__me-section-pic' />
        </div>
      </AnimationOnScroll>
    </section>
  );
};

export default About;
