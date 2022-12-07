import React from 'react';

import './projects.css';
import ContentCard from '../../components/contentCard/ContentCard';
import {projectData} from '../../assets/constants';

const Projects = () => {
  return (
    <div className='projects__container' id='#projects'>
      <h1>Checkout My Work!</h1>
      <diV className='projects__code'>
        {projectData.map((project, i) => (
          <ContentCard 
            image={project.image}
            title={project.title}
            desc={project.desc}
            site={project.site}
            code={project.code}
          />
        ))}
      </diV>
    </div>
  )
}

export default Projects