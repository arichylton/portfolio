import React from 'react';
import './contact.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Contact = () => {
  return (
    <section className='contact__section anchor' id='contact'>
      <AnimationOnScroll animateIn='animate__fadeIn' animateOnce='true'>
        <div className='contact__title'>
          <h1>
            <AnimationOnScroll
              animateIn='animate__slideInLeft'
              duration='.9'
              animateOnce='true'
            >
              👉
            </AnimationOnScroll>
            Get In Touch
            <AnimationOnScroll
              animateIn='animate__slideInRight'
              duration='.9'
              animateOnce='true'
            >
              👈
            </AnimationOnScroll>
          </h1>
          <p className='contact__summary'>
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <a
            className='email__link'
            href='mailto: Arich212@gmail.com'
            rel='noopener noreferrer'
            target='_blank'
          >
            Connect
          </a>
        </div>
      </AnimationOnScroll>
    </section>
  );
};

export default Contact;
