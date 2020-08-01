import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class Sidenav extends React.Component {
  constructor(props){
    super(props)
    this.sidenav = React.createRef();
    this.links = React.createRef();
    this.state = {
      visibility: false
    }
  }
  changeActiveLink = (e) => {
    Array.from(this.links.current.querySelectorAll('.active-link')).forEach(link => link.classList.toggle('active-link'))
    e.target.classList.toggle('active-link')
    this.setVisibility()
  }
  setVisibility = () => {
    if(!this.state.visibility){
      this.sidenav.current.classList.add('sidenav_show')
      this.setState(() => ({
        visibility: true
      }))
    } else {
      this.sidenav.current.classList.toggle('sidenav_show')
      this.setState(() => ({
        visibility: false
      }))
    }
  }
  render() {
    return (
      <div ref={this.sidenav} className="fixed sidenav sm:hidden bg-primary z-40">
        <div className="w-3/4 h-full mx-auto flex flex-col items-center justify-start">
          <div className="w-full py-10 flex justify-end items-center text-white text-3xl">
            <FontAwesomeIcon icon={faTimes} onClick={this.setVisibility}/>
          </div>
          <ul ref={this.links} className="text-3xl text-white text-center">
            <li className="mb-6"><a href="#home" className="active-link" onClick={this.changeActiveLink}>home</a></li>
            <li className="mb-6"><a href="#about" onClick={this.changeActiveLink}>about</a></li>
            <li className="mb-6"><a href="#projects" onClick={this.changeActiveLink}>projects</a></li>
            <li className="mb-6"><a href="#contact" onClick={this.changeActiveLink}>contact</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Sidenav;
