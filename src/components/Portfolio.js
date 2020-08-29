import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import AboutSection from './AboutSection';
import ProjectSection from './ProjectSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

function Portfolio() {
  return (
    <div className="relative bg-gray-300">

      {/* <div className="fixed opacity-75 top-0 left-0 m-10 text-5xl bg-white rounded-xl w-20 h-20 flex justify-center items-center text-gray-900 z-50">
        <h1 className="sm:hidden">0</h1>
        <h1 className="hidden sm:block md:hidden">SM</h1>
        <h1 className="hidden md:block lg:hidden">MD</h1>
        <h1 className="hidden lg:block xl:hidden">LG</h1>
        <h1 className="hidden xl:block">XL</h1>
      </div> */}
      
      <Navbar />
      <Header />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Portfolio
