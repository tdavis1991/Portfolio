import React from 'react';

import './projects.css';
import ContentCard from '../../components/contentCard/ContentCard';
import {projectData} from '../../assets/constants';

const Projects = () => {
  return (
    <div className='projects__container' id='#projects'>
      <div className='projects__title'>
        <p>WORK</p>
        <h1>My Latest Projects</h1>
      </div>
      <div className='projects__code'>
        {projectData.map((project, i) => (
          <ContentCard 
            image={project.image}
            title={project.title}
            desc={project.desc}
            site={project.site}
            code={project.code}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects