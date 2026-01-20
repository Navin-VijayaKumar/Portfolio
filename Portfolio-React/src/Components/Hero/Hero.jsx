import React from 'react';
import './Hero.css';
import profilepic from '../Assets/profilepic.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useEffect } from 'react';
const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/22CSR129-Navin.pdf';
    link.download = '22CSR129-Navin.pdf';
    link.click(); 
  };



  return (
    <div id="home" className="hero">

      <img className="pic" src={profilepic} alt="Profile" />
      <h1>
        <span>Hello, I'am Navin</span>
      </h1>
      <p>
I am a dedicated and adaptable fresher who loves learning new things,  With hands-on experience in Salesforce development, Full Stack projects      </p>
      <div className="hero-action">
      <div className="hero-cunnect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
    </div>
        <div className="hero-resume">
          <button onClick={handleDownloadResume} className="resume-button">
          My Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
