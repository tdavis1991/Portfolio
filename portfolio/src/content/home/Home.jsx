import React from 'react';

import portfolioImage from '../../images/portfolio_image_1.jpg';
import './home.css';

const Home = () => {
  return (
    <div className='home__container'>
      <div className='home__content'>
        <div className='home__header'>Hi, my name is <span className='home__name'>Tevin Davis</span>.</div>
        <p className='home__title'>Im a Full Stack Developer</p>
      </div>
      <img className='home__image' src={portfolioImage} alt='portfolio' />
    </div>
  )
}

export default Home