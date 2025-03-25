import React from 'react'
import Navbar from '../components/Navbar'
import Homepage from '../pages/Homepage'
import Skills from '../pages/skills'
import Projects from '../pages/projects'
import Contact from '../pages/contact'
import Footer from '../components/Footer'
const MainLayout = () => {
  return (
    <>
    <Navbar/>
    <Homepage id="home"/>
    <Skills id="skills"/>
    <Projects id="projects"/>
    <Contact id="contact"/>
    <Footer id="footer"/>
    </>
  )
}

export default MainLayout