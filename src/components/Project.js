import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

function Project({ details }) {
  const project = useRef(null)

  useEffect(() => {
    project.current.classList.toggle('animateIn')
  }, [])
  return (
    <div ref={project} 
      className="project relative w-full h-64 rounded-lg bg-cover bg-center overflow-hidden hover:shadow-lg transition-transform duration-200 ease-in-out transform hover:scale-105"
      style={{ backgroundImage: `url(${details.imgUrl})` }}>
      <div className="w-full h-full flex justify-center items-center">
        <div className="project-card-hover opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out w-full h-full">
          <div className="w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
            <h1 className="text-4xl text-white mb-8">{details.title}</h1>
            <div className="w-1/2 flex justify-around items-center text-white text-3xl">
              <a href={details.link} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGlobe} /></a>
              <a href={details.github} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
