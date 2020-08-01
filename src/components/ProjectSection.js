import React, { useState, useRef } from 'react';
import Project from './Project';
import { scrollToTargetAdjusted } from '../utilities/utils'

function ProjectSection() {
  const [projects] = useState([
    {
      title: 'Indecision App',
      imgUrl: './assets/images/projects/indecision-app.jpg',
      link: 'https://kamnakis-indecision-app.herokuapp.com/',
      github: 'https://github.com/kamnakis/indecision-app',
    },
    {
      title: 'Chat App',
      imgUrl: './assets/images/projects/chat-app.png',
      link: 'https://kamnakis-chat-app.herokuapp.com/',
      github: 'https://github.com/kamnakis/chat-app',
    },
    {
      title: 'Weather App',
      imgUrl: './assets/images/projects/weather-app.png',
      link: 'https://kamnakis-weather-app.herokuapp.com/',
      github: 'https://github.com/kamnakis/weather-app',
    },
    {
      title: 'Task Manager API',
      imgUrl: './assets/images/projects/task-manager-app.jpg',
      link: 'https://kamnakis-task-manager.herokuapp.com/',
      github: 'https://github.com/kamnakis/task-manager-api',
    }
  ]);

  const [projectsToShow, setProjectsToShow] = useState(3)
  const projectSection = useRef(null)
  const showBtn = useRef(null)

  const showMoreProjects = (event) => {
    event.preventDefault();
    if (projectsToShow === 3) {
      setProjectsToShow(projects.length)
      showBtn.current.innerHTML = 'hide'
    } else {
      scrollToTargetAdjusted(projectSection.current)
      setProjectsToShow(3)
      showBtn.current.innerHTML = 'show all'
    }
  }

  return (
    <div ref={projectSection} className="w-full">
      <div className="w-3/4 mx-auto">
        <div className="w-full flex justify-end md:-mt-10 pr-16 mb-8">
          <h1 className="text-6xl">projects</h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 col-gap-8 row-gap-8">
          {
            projects.slice(0, projectsToShow).map(project => <Project key={project.title} details={project} />)
          }
        </div>
        
        {
        projects.length > 3 &&
        <div className="w-full flex justify-center mt-12">
          <button ref={showBtn} className="transition-transform duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg border border-black px-20 py-1 rounded-lg text-xl lg:text-3xl tracking-widest" onMouseDown={showMoreProjects}>show all</button>
        </div>
        }
      </div>
    </div>
  );
}

export default ProjectSection;
