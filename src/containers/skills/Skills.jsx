import React from 'react';
import './skills.css'

import reactImg from '../../assets/icons/react-original.svg'
import cssImg from '../../assets/icons/css3-original.svg'
import htmlImg from '../../assets/icons/html5-original.svg'
import pythonImg from '../../assets/icons/python-original.svg'
import gitImg from '../../assets/icons/git-original.svg'
import javascriptImg from '../../assets/icons/javascript-original.svg'
import nodejsImg from '../../assets/icons/nodejs-original.svg'
import npmImg from '../../assets/icons/npm-original-wordmark.svg'
import slackImg from '../../assets/icons/slack-original.svg';
import goImg from '../../assets/icons/go-original.svg';
import csharpImg from '../../assets/icons/csharp-line.svg';
import unityImg from '../../assets/icons/unity-original.svg';
import mongodbImg from '../../assets/icons/mongodb-original.svg';
import firebaseImg from '../../assets/icons/firebase-plain.svg';
import postgresSqlImg from '../../assets/icons/postgresql-original.svg';
import bootstrapImg from '../../assets/icons/bootstrap-original.svg';

const Skills = () => {
  return (
    <section className='skills__section'>
      <div className='skills__title'>
        <h1>Tech Stack and Skills</h1>
      </div>
      <div className='skills__container'>
        <div className='skills__front-end'>
          <img src={reactImg} />
          <img src={cssImg} />
          <img src={htmlImg} />
          <img src={pythonImg} />
          <img src={gitImg} />
          <img src={javascriptImg} />
          <img src={nodejsImg} />
          <img src={npmImg} />
          <img src={slackImg} />
          <img src={goImg} />
          <img src={csharpImg} />
          <img src={unityImg} />
          <img src={mongodbImg} />
          <img src={bootstrapImg} />
          <img src={postgresSqlImg} />
          <img src={firebaseImg} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
