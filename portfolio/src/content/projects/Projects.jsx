import React from 'react';

import './projects.css';
import ContentCard from '../../components/contentCard/ContentCard';

import projectImage from '../../images/17820207_SL-092619-23740-28.jpg';

const Projects = () => {
  return (
    <div className='projects__container'>
      <h1>Checkout My Work!</h1>
      <diV className='projects__code'>
        <ContentCard image={projectImage} title='Filmpire' desc='Greatest website' />
        <ContentCard image={projectImage} title='Filmpire' desc='Greatest website' />
        <ContentCard image={projectImage} title='Filmpire' desc='Greatest website' />
        <ContentCard image={projectImage} title='Filmpire' desc='Greatest website' />
        <ContentCard image={projectImage} title='Filmpire' desc='Greatest website' />
        <ContentCard image={projectImage} title='Filmpire' desc='Greatest website' />
      </diV>
    </div>
  )
}

export default Projects