import React from 'react';
import './projects.css';

import movielyImg from '../../assets/project-images/moviely.png';
import powerImg from '../../assets/project-images/power.png';
import weatherlyImg from '../../assets/project-images/weatherly.png';
import saigheadImg from '../../assets/project-images/saighead.jpg';

import steamImg from '../../assets/icons/steam.svg';
import githubImg from '../../assets/icons/github-original-link.svg';
import websiteImg from '../../assets/icons/website.svg';

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
              <div className='project-links'>
                <a href='https://github.com/arichylton/moviely' target='blank'>
                  <img src={githubImg} />
                </a>
                <a
                  href='https://ubiquitous-platypus-29d3a7.netlify.app/'
                  target='blank'
                >
                  <img src={websiteImg} />
                </a>
              </div>
            </div>
          </div>
          <div
            className='project-image gatsby-image-wrapper-constrained gatsby-image-wrapper'
            style={{ maxWidth: 700, display: 'block' }}
          >
            <a
              href='https://ubiquitous-platypus-29d3a7.netlify.app/'
              target='blank'
            >
              <img src={movielyImg} />
            </a>
          </div>
        </li>
        <li className='featured-item'>
          <div className='project-content'>
            <div>
              <p className='project-overline'>Featured Project</p>
              <h3 className='project-title'>
                <a>Saighead</a>
              </h3>
              <div className='project-description'>
                <p>
                  Saighead is 2D single-player puzzle game developed by my
                  brother and I. It was developed with C# utilizing the Unity
                  engine to create all 100 puzzles. I was in charge of the
                  development, design and direction of the game.
                </p>
              </div>
              <ul className='project-tech-list'>
                <li>Unity</li>
                <li>C#</li>
                <li>Adobe</li>
                <li>Steam</li>
                <li>Visual Studio</li>
              </ul>
              <div className='project-links'>
                <a
                  href='https://store.steampowered.com/app/1576020/Saighead/'
                  target='blank'
                >
                  <img src={steamImg} />
                </a>
              </div>
            </div>
          </div>
          <div
            className='project-image gatsby-image-wrapper-constrained gatsby-image-wrapper'
            style={{ maxWidth: 700, display: 'block' }}
          >
            <a
              href='https://store.steampowered.com/app/1576020/Saighead/'
              target='_blank'
            >
              <img src={saigheadImg} className="saigheadIMG"/>
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
                  wilks and fitness goals. Power was also built off of react and
                  uses various components to make it look great.
                </p>
              </div>
              <ul className='project-tech-list'>
                <li>React</li>
                <li>Javascript</li>
                <li>Express</li>
                <li>VSC</li>
                <li>Netlify</li>
              </ul>
              <div className='project-links'>
                <a href='#' target='blank'>
                  <img src={githubImg} />
                </a>
                <a href='#' target='blank'>
                  <img src={websiteImg} />
                </a>
              </div>
            </div>
          </div>
          <div className='project-image'>
            <a target='blank'>
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
                  Weatherly was made using React and Redux. Utilizes the Dark
                  Sky API to fetch weather data asynchronously based on a
                  searched location in the United States.
                </p>
              </div>
              <ul className='project-tech-list'>
                <li>React</li>
                <li>Javascript</li>
                <li>Express</li>
                <li>Dark Sky API</li>
                <li>Netlify</li>
              </ul>
              <div className='project-links'>
                <a href='#' target='blank'>
                  <img src={githubImg} />
                </a>
                <a href='#' target='blank'>
                  <img src={websiteImg} />
                </a>
              </div>
            </div>
          </div>
          <div className='project-image'>
            <a target='blank'>
              <img src={weatherlyImg} />
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
