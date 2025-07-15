import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import SkillSet from './Components/SkillSet/SkillSet'
import ProjectItems from './Components/Projects/ProjectItems'
import Projects from './Components/Projects/Projects'
import Starbg from './Components/Starbg/Starbg'
import Flow from './Components/Flow/Flow'
import Services from './Components/Services/Services'
const App = () => {
  return (
    <Routes>

      <Route path="/flow" element={<Flow />} />

      <Route
        path="/"
        element={
          <>
            <Starbg />
            <Navbar />
            <Hero />
            <About />
            <SkillSet />
            {/* <Services /> */}
            <ProjectItems />
            <Projects />
            <Contact />
          </>
        }
      />
    </Routes>
  );
};

export default App;
