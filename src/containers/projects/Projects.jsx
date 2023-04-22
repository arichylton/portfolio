import React from 'react';
import './projects.css';
import { Tooltip } from 'react-tooltip';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import movielyImg from '../../assets/project-images/moviely.png';
import powerImg from '../../assets/project-images/power.png';
import playifyImg from '../../assets/project-images/playify.png';
import saigheadImg from '../../assets/project-images/saighead.jpg';

import steamImg from '../../assets/icons/steam.svg';
import githubImg from '../../assets/icons/github-original-link.svg';
import websiteImg from '../../assets/icons/website.svg';

const Projects = () => {
  return (
    <section id='projects' className='anchor projects__section'>
      <AnimationOnScroll animateIn='animate__fadeIn' animateOnce='true'>
        <div className='projects__title'>
          <h1>Projects</h1>
        </div>
      </AnimationOnScroll>
      <ul className='projects__featured-list'>
        <AnimationOnScroll
          animateIn='animate__fadeIn'
          animateOnce='true'
          className='featured-item'
        >
          <div
            className='project-content'
            style={{ backgroundImage: `url(${movielyImg})` }}
          >
            <p className='project-overline'>Featured Project</p>
            <h3 className='project-title'>
              <a href='https://github.com/arichylton/moviely' target='_blank'>
                Moviely
              </a>
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
              <a
                href='https://github.com/arichylton/moviely'
                target='blank'
                data-tooltip-content='Github'
                data-tooltip-id='github-tooltip-project'
              >
                <Tooltip id='github-tooltip-project' place='bottom' />
                <img src={githubImg} />
              </a>
              <a
                href='https://moviely-app.netlify.app/'
                target='blank'
                data-tooltip-content='Website'
                data-tooltip-id='website-tooltip-project'
              >
                <Tooltip id='website-tooltip-project' place='bottom' />
                <img src={websiteImg} />
              </a>
            </div>
          </div>

          <div
            className='project-image gatsby-image-wrapper-constrained gatsby-image-wrapper'
            style={{ maxWidth: 700, display: 'block' }}
          >
            <a href='https://moviely-app.netlify.app/' target='blank'>
              <img src={movielyImg} />
            </a>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn='animate__fadeIn'
          animateOnce='true'
          className='featured-item'
        >
          <div
            className='project-content'
            style={{ backgroundImage: `url(${playifyImg})` }}
          >
            <p className='project-overline'>Featured Project</p>
            <h3 className='project-title'>
              <a href='https://playify-app.herokuapp.com/' target='_blank'>
                Playify
              </a>
            </h3>
            <div className='project-description'>
              <p>
                Playify incorporates a Client/Server project structure that
                allows users to authenticate through the Spotify API. The server
                maintains the access token and login functionality while the
                client uses React to render the user's spotify data and look up
                specific information about their profile.
              </p>
            </div>
            <ul className='project-tech-list'>
              <li>React</li>
              <li>Javascript</li>
              <li>Express</li>
              <li>Spotify API</li>
              <li>Heroku</li>
            </ul>
            <div className='project-links'>
              <a
                href='https://github.com/arichylton/spotifiApp'
                target='blank'
                data-tooltip-content='Github'
                data-tooltip-id='github-tooltip-project'
              >
                <Tooltip id='github-tooltip-project' place='bottom' />
                <img src={githubImg} />
              </a>
              <a
                href='https://playify-app.herokuapp.com/'
                target='blank'
                data-tooltip-content='Website'
                data-tooltip-id='website-tooltip-project'
              >
                <Tooltip id='website-tooltip-project' place='bottom' />
                <img src={websiteImg} />
              </a>
            </div>
          </div>
          <div
            className='project-image gatsby-image-wrapper-constrained gatsby-image-wrapper'
            style={{ maxWidth: 700, display: 'block' }}
          >
            <a href='https://playify-app.herokuapp.com/' target='blank'>
              <img src={playifyImg} />
            </a>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn='animate__fadeIn'
          animateOnce='true'
          className='featured-item'
        >
          <div
            className='project-content'
            style={{ backgroundImage: `url(${saigheadImg})` }}
          >
            <p className='project-overline'>Featured Project</p>
            <h3 className='project-title'>
              <a
                href='https://store.steampowered.com/app/1576020/Saighead/'
                target='_blank'
              >
                Saighead
              </a>
            </h3>
            <div className='project-description'>
              <p>
                Saighead is 2D single-player puzzle game developed by my brother
                and I. It was developed with C# utilizing the Unity engine to
                create all 100 puzzles. I was in charge of the development,
                design and direction of the game.
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
                data-tooltip-content='Steam Webpage'
                data-tooltip-id='steam-tooltip-project'
              >
                <Tooltip id='steam-tooltip-project' place='bottom' />
                <img src={steamImg} />
              </a>
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
              <img src={saigheadImg} className='saigheadIMG' />
            </a>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn='animate__fadeIn'
          animateOnce='true'
          className='featured-item'
        >
          <span
            className='project-content'
            style={{ backgroundImage: `url(${powerImg})` }}
          >
            <p className='project-overline'>Featured Project</p>
            <h3 className='project-title'>
              <a href='https://power-app.netlify.app/' target='_blank'>
                Power
              </a>
            </h3>
            <div className='project-description'>
              <p>
                Need to find out your current wilks score? Look no further!
                Power utilizes firebase for its authentication through google
                along with managing and storing a user's personalized wilks
                data. Power was also built off of react and uses various
                components to make it look great.
              </p>
            </div>
            <ul className='project-tech-list'>
              <li>React</li>
              <li>Javascript</li>
              <li>Express</li>
              <li>Firebase</li>
              <li>Netlify</li>
            </ul>
            <div className='project-links'>
              <a
                href='https://github.com/arichylton/powerly'
                target='_blank'
                data-tooltip-content='Github'
                data-tooltip-id='github-tooltip-project'
              >
                <img src={githubImg} />
              </a>
              <a
                href='https://power-app.netlify.app/'
                target='_blank'
                data-tooltip-content='Website'
                data-tooltip-id='website-tooltip-project'
              >
                <img src={websiteImg} />
              </a>
            </div>
          </span>
          <div className='project-image'>
            <a href='https://power-app.netlify.app/' target='blank'>
              <img src={powerImg} />
            </a>
          </div>
        </AnimationOnScroll>
      </ul>
    </section>
  );
};

export default Projects;
