import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className='contact__section'>
      <div className='contact__title'>
        <h1>👉 Get In Touch 👈</h1>
        <p className='contact__summary'>
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>
        <a className='email__link' href="Arich212@gmail.com" rel="noopener noreferrer" target="_blank">Connect</a>
      </div>
    </section>
  );
};

export default Contact;
