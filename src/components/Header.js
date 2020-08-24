import React, { useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { init } from 'ityped'

function Header() {
  const line_one = useRef(null)

  useEffect(() => {
    init(line_one.current, { showCursor: false, backDelay: 1250, typeSpeed:  100, strings: ['Hi! I am Stelios Kamnakis.', 'I am a Front-End Developer.'] })
  }, [])

  return (
    <div id="home" className="relative w-full h-screen flex justify-center items-center headerBackground bg-cover bg-center"
      style={{ backgroundImage: `url(./assets/images/bg.jpg)` }}>

      <div className="w-3/4 mx-auto text-white text-center">
        <h1 className="text-2xl sm:text-5xl xl:text-6xl tracking-wide" ref={line_one}></h1>
      </div>

      <div className="absolute bottom-0 w-3/4 sm:w-1/2 lg:w-1/4 py-2 px-8 bg-primary rounded-t-xl text-white text-xl sm:text-2xl md:text-3xl flex justify-around items-center">
        <a href="./assets/files/cv.pdf" className="transform hover:scale-105 transition-transform duration-200 ease-in-out"><FontAwesomeIcon icon={faDownload} className="mr-4 md:text-2xl" />Download CV</a>
      </div>

    </div>
  );
}

export default Header