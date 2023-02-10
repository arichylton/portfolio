import React from 'react';
import './projects.css';

import movielyImg from '../../assets/project-images/moviely.png';
import powerImg from '../../assets/project-images/power.png';
import weatherlyImg from '../../assets/project-images/weatherly.png';

const Projects = () => {
  return (
    <section>
      <div className='projects__title'>
        <h1>Projects</h1>
      </div>
      <ul className='projects__featured-list'>
        <li className='featured-item'>
          <div className='project-content'>
            <div>
              <p className='project-overline'>Featured Project</p>
              <h3 className='project-title'>
                <a>Moviely</a>
              </h3>
              <div className='project-description'>
                <p>
                  Moviely utilizes a movie database api to show upcoming movies,
                  featured movies, and the highest rated movies of all time.
                  Moviely also allows users to search for movies and see
                  individual movie details.
                </p>
              </div>
              <ul className='project-tech-list'>
                <li>React</li>
                <li>Javascript</li>
                <li>Express</li>
                <li>MovieDB API</li>
                <li>Netlify</li>
              </ul>
              <div>
                <a href='#'>IMG</a>
                <a href='#'>IMG</a>
              </div>
            </div>
          </div>
          <div
            className='project-image gatsby-image-wrapper-constrained gatsby-image-wrapper'
            style={{ maxWidth: 700, display: 'block' }}
          >
            <a>
              <img src={movielyImg} />
            </a>
          </div>
        </li>
        <li className='featured-item'>
          <div className='project-content'>
            <div>
              <p className='project-overline'>Featured Project</p>
              <h3 className='project-title'>
                <a>Power</a>
              </h3>
              <div className='project-description'>
                <p>
                  Need to find out your current wilks score? Look no further!
                  Power utilizes it's own api to allow users to track their
                  wilks and fitness goals. Power was also built off react and
                  uses various components to make it look great
                </p>
              </div>
              <ul className='project-tech-list'>
                <li>React</li>
                <li>Javascript</li>
                <li>Express</li>
                <li>VSC</li>
                <li>Netlify</li>
              </ul>
              <div>
                <a href='#'>IMG</a>
                <a href='#'>IMG</a>
              </div>
            </div>
          </div>
          <div className='project-image'>
            <a>
              <img src={powerImg} />
            </a>
          </div>
        </li>
        <li className='featured-item'>
          <div className='project-content'>
            <div>
              <p className='project-overline'>Featured Project</p>
              <h3 className='project-title'>
                <a>Weatherly</a>
              </h3>
              <div className='project-description'>
                <p>
                  Weatherly was made using React and Redux. Utilizes the Dark Sky API to fetch weather data asynchronously based on a searched
                  location in the United States.
                </p>
              </div>
              <ul className='project-tech-list'>
                <li>React</li>
                <li>Javascript</li>
                <li>Express</li>
                <li>Dark Sky API</li>
                <li>Netlify</li>
              </ul>
              <div>
                <a href='#'>IMG</a>
                <a href='#'>IMG</a>
              </div>
            </div>
          </div>
          <div className='project-image'>
            <a>
              <img src={weatherlyImg} />
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
