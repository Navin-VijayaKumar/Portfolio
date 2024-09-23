import React from 'react'
import './Hero.css'
import profilepic from '../Assets/profilepic.jpg'
const Hero = () => {
  return (
    <div className='hero'>
        <img  className='pic' src={profilepic} alt=''></img>
            <h1><span>Hello, I'am </span>Navin</h1>
            <p>A passionate Web developer have experience
in creating full stack websites
using Html, Css,Mongo DB,Node js and JavaScript and solving
coding problems in coding platforms
with languages like Java, Python and C</p>
<div className="hero-action">
    <div className="hero-cunnect">
        Connect With Me
    </div>
    <div className="hero-resume">
        My Resume
    </div>
</div>
    </div>
  )
}

export default Hero