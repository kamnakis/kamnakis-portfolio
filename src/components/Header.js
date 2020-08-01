import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div id="home" className="relative w-full h-screen flex justify-center items-center headerBackground bg-cover bg-center"
    style={{ backgroundImage: `url(./assets/images/bg.jpg)` }}>

      <div className="w-3/4 mx-auto text-white text-center">
        <h1 className="text-2xl sm:text-5xl xl:text-6xl tracking-wide">Hi! I am Stelios Kamnakis.</h1>
        <h1 className="text-2xl sm:text-3xl xl:text-4xl tracking-widest">I am a Front-End Web Developer.</h1>
      </div>

      <div className="absolute bottom-0 w-3/4 sm:w-1/2 lg:w-1/4 py-2 px-8 bg-primary rounded-t-xl text-white text-xl sm:text-2xl md:text-3xl flex justify-around items-center">
        <a href="./assets/files/cv.pdf" className="transform hover:scale-105 transition-transform duration-200 ease-in-out"><FontAwesomeIcon icon={faDownload} className="mr-4 md:text-2xl" />Download CV</a>
      </div>

    </div>
  );
}

export default Header