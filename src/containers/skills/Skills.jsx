import React from "react";
import "./skills.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

import reactImg from "../../assets/icons/react-original.svg";
import cssImg from "../../assets/icons/css3-original.svg";
import htmlImg from "../../assets/icons/html5-original.svg";
import pythonImg from "../../assets/icons/python-original.svg";
import gitImg from "../../assets/icons/git-original.svg";
import javascriptImg from "../../assets/icons/javascript-original.svg";
import nodejsImg from "../../assets/icons/nodejs-original.svg";
import npmImg from "../../assets/icons/npm-original-wordmark.svg";
import goImg from "../../assets/icons/go-original.svg";
import csharpImg from "../../assets/icons/csharp-line.svg";
import unityImg from "../../assets/icons/unity-original.svg";
import mongodbImg from "../../assets/icons/mongodb-original.svg";
import firebaseImg from "../../assets/icons/firebase-plain.svg";
import postgresSqlImg from "../../assets/icons/postgresql-original.svg";
import nextjsImg from "../../assets/icons/nextjs.svg";
import bootstrapImg from "../../assets/icons/bootstrap-original.svg";

const Skills = () => {
  return (
    <section className="skills__section anchor" id="skills">
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        duration=".8"
        animateOnce="true"
      >
        <div className="skills__title">
          <h1>Skills</h1>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        duration=".8"
        animateOnce="true"
      >
        <div className="skills__container">
          <div className="skills__section-group">
            <div>
              <h2>Development</h2>
            </div>
            <div className="skills__section-img-grid">
              <img src={reactImg} />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
              <img src={nodejsImg} />
              <img src={pythonImg} />
              <img src={goImg} />

              <img src={cssImg} />
              <img src={htmlImg} />
              <img src={firebaseImg} />
              <img src={postgresSqlImg} />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
              <img src={bootstrapImg} />

              <img src={gitImg} />
              <img src={csharpImg} />
              <img src={npmImg} />

              {/* <img src={goImg} /> */}
            </div>
          </div>

          <div className="skills__section-group">
            <div>
              <h2>Design</h2>
            </div>
            <div>
              <p>Wireframing / UML</p>
              <p>UI / UX Design</p>
              <p>Adobe Photoshop</p>
            </div>
          </div>
        </div>
        <div className="skills__section-group">
          <div>
            <h2>Tools</h2>
          </div>
          <div>
            <p>Git + Github</p>
            <p>Command Line</p>
            <p>Chrome DevTools</p>
            <p>Slack</p>
            <p>Visual Studio</p>
            <p>Unity</p>
            <p>Windows</p>
          </div>
        </div>
      </AnimationOnScroll>
    </section>
  );
};

export default Skills;
