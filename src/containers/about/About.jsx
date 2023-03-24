import React from 'react';
import './about.css';

import personalPhoto from '../../assets/project-images/personal_photo.jpeg'


const About = () => {
  return (
    <section className='about__section'>
      <div className='about__title'>
        <h1>About Me</h1>
      </div>
      <div className='about__container'>
        <div>
          <div className='about__section-summary'>
            <p>
              My name is Aric Hylton I have been working with computers my
              entire life. I have been interested in coding since high school
              and decided I would finally pursue a career in it.
            </p>
            <p>
              My main experience is with JavaScript, React-Redux, HTML, CSS, and
              Node.js. I'm constantly keeping up to date with new documentation
              and enhancing my knowledge of current programming concepts. It's
              important for me to be the best at what I do and strive to be the
              hardest working developer that I can be.
            </p>
            <p>
              A few of my other hobbies are powerlifting, rock-climbing, and
              pretty much anything outdoors. I like seeing a goal, mapping out
              the process of getting to the end, and then tackling each problem
              along the way.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>
        </div>
        <img src={personalPhoto} />
      </div>
    </section>
  );
};

export default About;
