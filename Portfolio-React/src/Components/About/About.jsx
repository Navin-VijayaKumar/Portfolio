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
                <p>Developing clean website with html, css and javascript and learning frameworks like Nodejs</p>
                <p>Interested in Frontend Developement and maintain my git repository with all my recent project</p>
            </div>
            <div className="skils">
                <div className="about-skils">
                    <p>HTML & CSS</p><hr style={{width:"45%"}}/>
                </div>
                <div className="about-skils">
                    <p>React JS</p><hr style={{width:"40%"}}/>
                </div>
                <div className="about-skils">
                    <p>JavaScript</p><hr style={{width:"35%"}}/>
                </div>
                <div className="about-skils">
                    <p>Problem Solving</p><hr style={{width:"45%"}}/>
                </div>
            </div>
        </div>

       </div>
       <div className="about-acs">
        <div className="about-ac">
         <h1>160+</h1>
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