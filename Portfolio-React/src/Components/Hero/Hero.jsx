import React from 'react';
import './Hero.css';
import profilepic from '../Assets/profilepic.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img className="pic" src={profilepic} alt="Profile" />
      <h1>
        <span>Hello, I'am Navin,</span>A full stack developer
      </h1>
      <p>
        A passionate Web developer with experience in creating full stack websites using HTML, CSS, MongoDB, Node.js, and JavaScript, as well as solving coding problems on platforms using languages like Java, Python, and C.
      </p>
      <div className="hero-action">
      <div className="hero-cunnect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
    </div>
        <div className="hero-resume">
          <a
            href="/navinres.docx"
            download="navinres.docx"
            className="resume-link"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
