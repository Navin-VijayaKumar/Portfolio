import React from 'react'
import './Flow.css'
import gamepad from '../Assets/gamepad.png'
import tool from '../Assets/tool.png'
import pro from '../Assets/pro.png'
import skil from '../Assets/skil.png'
import cer from '../Assets/cer.png'
import work from '../Assets/work.png'
const Flow = () => {
 return (
    <div className='all-timeline'>


 <div className="all-timeline1">

     <div className="all-timeline1">
  <div className="timeline">
    <div className="container1 l">
      <img src={tool} alt="Tools" />
      <div className="text-box">
        <h2>🛠 Tools</h2>
        <small>Technologies I Use</small>
        <p>React.js |  Node.js  |  Express</p>
        <p>MongoDB | Tailwind CSS</p>
        <p> Git | Figma</p>
        <span className='left-con-arrow'></span>
      </div>
    </div>

    <div className="container1 r">
      <img src={pro} alt="Projects" />
      <div className="text-box">
        <h2>Projects</h2>
        <small>What Built</small>
        <p>Web Application</p>
        <p>Mobile App</p>
        <p>ML Model</p>
        <p>UI/UX Design</p>
        <span className='right-con-arrow'></span>
      </div>
    </div>

    <div className="container1 l">
      <img src={work} alt="Services" />
      <div className="text-box">
        <h2>Services</h2>
        <small>What I Offer</small>
        <p> Intern - Remote | Gaming Console</p>
        <p> Intern - Remote | Student Stress Prediction</p>
        <p></p>
        <span className='left-con-arrow'></span>
      </div>
    </div>

    <div className="container1 r">
      <img src={skil} alt="Skills" />
      <div className="text-box">
        <h2>Skillset</h2>
        <small>Core Competencies</small>
        <p>Front-end development with React</p>
        <p> Back-end with Node.js and Express js</p>
        <p> Database design in MongoDB </p>
        <p>Project management using Git & GitHub.</p>
        <span className='right-con-arrow'></span>
      </div>
    </div>

    <div className="container1 l">
      <img src={cer} alt="Certifications" />
      <div className="text-box">
        <h2>Certifications</h2>
        <small>Learning Milestones</small>
        <p>MongoDB Associate Developer(Node.js)</p>
        <p>Salesforce AI Specialist</p>
        <span className='left-con-arrow'></span>
      </div>
    </div>

    <div className="container1 r">
      <img src={gamepad} alt="Contact" />
      <div className="text-box">
        <h2>Soft Skills</h2>
        <small>Let's Connect</small>
        <p>Team Collaboration</p>
        <p>Problem-Solving</p>
        <p>Leadership</p>
        <span className='right-con-arrow'></span>
      </div>
    </div>
  </div>
</div>

       
    </div>
      </div>  )
}

export default Flow