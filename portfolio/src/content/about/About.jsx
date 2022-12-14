import React from 'react';

import './about.css';
import AboutCard from '../../components/aboutCard/AboutCard';

const About = () => {
  return (
    <div className='about__container' id='about'>
      <p>ABOUT</p>
      <h1>My Education & Experience</h1>
      <div className='about__cards'>
        <div className='about__card'>
          <h2>Education</h2>
          <AboutCard title='Full Stack Web Developer' placeTime='Bloomtech (2019-2021)' text='A rigorous course that develops the skill to build dynamic web applications and gain proficiency in the theory and application of web development and computer science.' />
        </div>
        <div className='about__card'>
          <h2>Experience</h2>
          <AboutCard title='Team Lead' placeTime='Bloomtech (2019-2020)' text='Lead a team of 8-10 students for few months while attending Lambda. This roles responsibilities were assessing code, hosting meetings, and helping students with blockers they may have. Setup Trello boards and GitHub organization for students final project for the unit.' />
        </div>
      </div>
    </div>
  )
}

export default About