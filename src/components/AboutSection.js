import React from 'react';

function AboutSection() {
  return (
    <div id="about" className="w-full aboutSectionBackground bg-cover" style={{ backgroundImage: `url(./assets/images/svg/angle.svg)` }}>
      <div className="w-3/4 mx-auto flex flex-col md:flex-row pt-20 pb-24 md:pb-56 text-white justify-around">
        <div className="flex flex-col items-center w-full md:w-1/2">
          <h1 className="text-5xl mb-4">about</h1>
          <div className="h-48 w-48 profilePic bg-cover rounded-full" style={{ backgroundImage: `url(./assets/images/profile.png)`}}></div>
          <h1 className="text-center mt-8 text-xl">
            I am a Front-End Web Developer. <br />
            Studying Informatics Engineering at the Hellenic Mediterranean University of Crete. <br />
          </h1>
        </div>
        <div className="flex flex-col items-center w-full md:w-1/2 mt-12 md:mt-0">
          <h1 className="text-5xl mb-4">skills</h1>
          <div className="text-6xl grid grid-rows-3 grid-cols-3 col-gap-12 row-gap-12">
            <img className="h-16 w-16 transform hover:scale-110 transition-transform duration-200 ease-in-out" src="./assets/images/icons/html.svg" alt="html5" title="html5"/>
            <img className="h-16 w-16 transform hover:scale-110 transition-transform duration-200 ease-in-out" src="./assets/images/icons/css.svg" alt="css3" title="css3"/>
            <img className="h-16 w-16 transform hover:scale-110 transition-transform duration-200 ease-in-out" src="./assets/images/icons/js.svg" alt="javascript" title="javascript"/>
            <img className="h-16 w-16 transform hover:scale-110 transition-transform duration-200 ease-in-out" src="./assets/images/icons/tailwindcss-icon.svg" alt="tailwindcss" title="tailwindcss"/>
            <img className="h-16 w-16 transform hover:scale-110 transition-transform duration-200 ease-in-out" src="./assets/images/icons/sass.svg" alt="scss" title="scss"/>
            <img className="h-16 w-16 transform hover:scale-110 transition-transform duration-200 ease-in-out" src="./assets/images/icons/react-js.svg" alt="react" title="react"/>
            <img className="h-16 w-16 transform hover:scale-110 transition-transform duration-200 ease-in-out" src="./assets/images/icons/node-js.svg" alt="nodejs" title="nodejs"/>
            <img className="h-16 w-16 transform hover:scale-110 transition-transform duration-200 ease-in-out" src="./assets/images/icons/expressjs.svg" alt="expressjs" title="expressjs"/>
            <img className="h-16 w-16 transform hover:scale-110 transition-transform duration-200 ease-in-out" src="./assets/images/icons/postgresql.svg" alt="postgresql" title="postgresql" />
          </div>
        </div>
      </div>
      <div id="projects" className="absolute -mt-32"></div>
    </div>
  );
}

export default AboutSection;