import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import SkillSet from './Components/SkillSet/SkillSet'
import ProjectItems from './Components/Projects/ProjectItems'
import Projects from './Components/Projects/Projects'
import Starbg from './Components/Starbg/Starbg'
const App = () => {
  return (
    <div>
      <Starbg></Starbg>
      <Navbar/>
      <Hero/>
      <About/>
      <SkillSet></SkillSet>
      <ProjectItems></ProjectItems>
      <Projects></Projects>
      <Contact/>
    </div>
  )
}

export default App