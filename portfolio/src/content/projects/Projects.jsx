import React from 'react';
import { motion } from 'framer-motion';

import './projects.css';
import ContentCard from '../../components/contentCard/ContentCard';
import {projectData} from '../../assets/constants';

const Projects = () => {
  return (
    <div className='projects__container' id='projects'>
      <div className='projects__title'>
        <p>WORK</p>
        <h1>My Latest Projects</h1>
      </div>
      <div className='projects__code'>
        {projectData.map((project, i) => (
          <motion.div
            initial={{ x: -400, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: i*0.5, ease: 'linear' }}
            exit={{ x: 400, opacity: 0 }}
          >
            <ContentCard 
              image={project.image}
              title={project.title}
              desc={project.desc}
              site={project.site}
              code={project.code}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects