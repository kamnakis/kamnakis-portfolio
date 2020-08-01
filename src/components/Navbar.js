import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Sidenav from './Sidenav'

function Navbar() {
  const sidenav = useRef(null)
  const navbar = useRef(null)
  const links = useRef(null)

  const changeActiveLink = (e) => {
    Array.from(links.current.querySelectorAll('.active-link')).forEach(link => link.classList.toggle('active-link'))
    e.target.classList.toggle('active-link')
  }

  useEffect(() => {
    const sticky = navbar.current.offsetTop;
    const navbarSticky = () => {
      if (window.pageYOffset >= sticky) {
        navbar.current.classList.add("sticky")
      } else {
        navbar.current.classList.remove("sticky");
      }
    }
    window.addEventListener('scroll', navbarSticky)
  }, [])

  const setSidenavVisibility = () => {
    sidenav.current.setVisibility()
  }

  return (
    <div>
      <nav ref={navbar} className="navbar absolute m-6 px-4 flex justify-between items-center rounded-xl h-20 border border-white z-30">
        <h1 className="text-white text-3xl">kamnakis <span className="text-xl text-secondary">stelios</span></h1>

        <div>
          <ul ref={links} className="links hidden sm:flex justify-center text-white text-xl">
            <li className="ml-6"><a href="#home" className="active-link" onClick={changeActiveLink}>home</a></li>
            <li className="ml-6"><a href="#about" onClick={changeActiveLink} >about</a></li>
            <li className="ml-6"><a href="#projects" onClick={changeActiveLink} >projects</a></li>
            <li className="ml-6"><a href="#contact" onClick={changeActiveLink} >contact</a></li>
          </ul>
          <div className="sm:hidden mr-6 text-white text-2xl"><FontAwesomeIcon icon={faBars} onClick={setSidenavVisibility}/></div>
        </div>
      </nav>

      <Sidenav ref={sidenav}/>
    </div>
  )
}

export default Navbar;
