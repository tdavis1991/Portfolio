import React from 'react';
import { AiOutlinePhone } from "react-icons/ai";

import './home.css';

const Home = () => {
  return (
    <div className='home__container' id='#home'>
      <div className='home__content'>
        <div className='home__header'>
          <h1>Hi, I'm a <span className='home__title'>Full Stack Developer</span></h1>
          <h1>From Rock Hill, SC</h1>
          <h3>A father, husband and developer</h3>
          <div className='home__sub'>
            <a href='#projects'><button>Explore My Work</button></a>
            <p><span><AiOutlinePhone /></span> (803)-524-1533</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home