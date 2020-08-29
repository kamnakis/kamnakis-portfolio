import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function ContactSection() {
  return (
    <div id="contact" className="relative mb-10 mt-10">
      {/* <div className="contactTopBackground w-full h-40 mt-12" style={{ backgroundImage: `url(./assets/images/svg/angles.svg)` }}></div> */}
      <div className="w-full bg-primary">
        <div className="w-3/4 mx-auto flex justify-center pt-8 pb-24">
          <div className="w-full flex flex-col text-white items-center">
            <h1 className="text-5xl mb-20 mt-4">contact</h1>
            <div className="w-3/4 flex flex-col md:flex-row justify-around items-center text-white text-3xl">
              <a href="https://github.com/kamnakis" target="_black" className="mx-1 mb-4 md:mb-0 hover:text-gray-900 transition-colors duration-200 ease-in-out flex flex-col items-center justify-center text-center">
                <FontAwesomeIcon icon={faGithub} />
                <h1 className="mt-4 text-2xl">kamnakis</h1>
              </a>
              <a href="mailto:kamnis1997@gmail.com" className="mx-1 mb-4 md:mb-0 hover:text-red-500 transition-colors duration-200 ease-in-out flex flex-col items-center justify-center text-center">
                <FontAwesomeIcon icon={faMailBulk} />
                <h1 className="mt-4 text-2xl">kamnis1997@gmail.com</h1>
              </a>
              <a href="https://www.linkedin.com/in/kamnakis/" target="_black" className="mx-1 mb-4 md:mb-0 hover:text-secondary transition-colors duration-200 ease-in-out flex flex-col items-center justify-center text-center">
                <FontAwesomeIcon icon={faLinkedin} />
                <h1 className="mt-4 text-2xl">kamnakis</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="contactBotBackground w-full h-40" style={{ backgroundImage: `url(./assets/images/svg/angles.svg)` }}></div>
    </div >
  );
}

export default ContactSection;
