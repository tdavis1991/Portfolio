import React from 'react';

import './home.css';

const Home = () => {

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if(entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show')
      }
    })

    const hiddenElements = document.querySelectorAll('.hidden')

    hiddenElements.forEach((el) => observer.observe(el))

  })
  return (
    <div className='home__container' id='home'>
      <div className='home__content'>
        <div className='home__header'>
          <h1 className='hidden'>Hi, I'm a <span className='home__title'>Full Stack Developer</span></h1>
          <h1 className='hidden'>From Rock Hill, SC</h1>
          <p className='hidden'>A passionate developer, father & husband</p>
          <div className='home__sub'>
            <a href='#projects'><button>Explore My Work</button></a>
            <p>Call: (803)-524-1533</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home