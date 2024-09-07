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
            <a
              href='mailto: Arich212@gmail.com'
              rel='noopener noreferrer'
              target='_blank'

            >
            Get In Touch
            </a>
            <AnimationOnScroll
              animateIn='animate__slideInRight'
              duration='.9'
              animateOnce='true'
            >
              👈
            </AnimationOnScroll>
          </h1>
          <p className='contact__summary'>
            I'm currently open for new opportunities. Let's get together and build something great!
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
