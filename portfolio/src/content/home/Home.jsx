import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlinePhone } from "react-icons/ai";

import './home.css';

const Home = () => {

  return (
    <div className='home__container' id='home'>
      <div className='home__content'>
        <div className='home__header'>
          <motion.div
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, ease: 'linear' }}
            exit={{ x: -400, opacity: 0 }}
          >
            <h1>Hi, I'm a <span className='home__title'>Full Stack Developer</span></h1>
            <h1>From Rock Hill, SC</h1>
            <p>A passionate developer, father & husband</p>
          </motion.div>
          <motion.div 
            className='home__sub'
            initial={{ y: 400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, ease: 'linear' }}
            exit={{ y: -400, opacity: 0 }}
          >
            <a href='#projects'><button>Explore My Work</button></a>
            <p>Call: (803)-524-1533</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Home