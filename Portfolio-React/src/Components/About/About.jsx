import React from 'react'
import './About.css'
import profilepic from '../Assets/profilepic.jpg'
import palette from '../Assets/palette.png'
const About = () => {
  return (
    <div id='about' className='about'>

       <div className="about-title">
        <h1>About me</h1>
       </div>
       <div className="about-sec">
        <div className="about-left">
            <img src={profilepic}></img>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I approach challenges with patience, clarity, and a solution-focused mindset. I believe in professionalism, teamwork, and continuous growth. </p>
            </div>
            <div className="skils">
                <div className="about-skils">
                    <p>Salesforce</p><hr style={{width:"45%"}}/>
                </div>
                <div className="about-skils">
                    <p>MERN Stack</p><hr style={{width:"40%"}}/>
                </div>
                <div className="about-skils">
                    <p>Apex</p><hr style={{width:"35%"}}/>
                </div>
                <div className="about-skils">
                    <p>Problem Solving</p><hr style={{width:"45%"}}/>
                </div>
            </div>
        </div>

       </div>
       <div className="about-acs">
        <div className="about-ac">
         <h1>200+</h1>
         <p>Problens Solved in leedcode</p>
        </div>
        <hr/>
        <div className="about-ac">
         <h1>3</h1>
         <p>Internships</p>
        </div>
        <hr/>
        <div className="about-ac">
         <h1>2</h1>
         <p>International Certification</p>
        </div>
       </div>
    </div>
  )
}

export default About