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
      <div className='about__life'>
        <div className='about__content'>
          <h2>Story Time</h2>
          <p>Ever since I was a teenager, I knew I wanted to pursue a career in technology. After I graduated, I enrolled in a school for information technology but had to leave due to personal reasons. I took a break for a few years and decided to push myself to achieve a career in software engineering, and I have not looked back. I am now a certified full-stack developer from Bloomtech. Much has happened in the past few years. In 2019, I married the love of my life; in 2020, we became home owners; and in 2022, we became parents to a beautiful baby girl. Since it's not just me anymore, my passion to become a developer is stronger than ever.</p>
        </div>
      </div>
    </div>
  )
}

export default About