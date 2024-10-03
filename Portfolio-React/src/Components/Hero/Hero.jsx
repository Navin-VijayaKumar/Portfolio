import React from 'react'
import './Hero.css'
import profilepic from '../Assets/profilepic.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img  className='pic' src={profilepic} alt=''></img>
            <h1><span>Hello, I'am Navin,</span>A full stack developer</h1>
            <p>A passionate Web developer have experience
in creating full stack websites
using Html, Css,Mongo DB,Node js and JavaScript and solving
coding problems in coding platforms
with languages like Java, Python and C</p>
<div className="hero-action">
    <div className="hero-cunnect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
    </div>
    <div className="hero-resume">
        My Resume
    </div>
</div>
    </div>
  )
}

export default Hero