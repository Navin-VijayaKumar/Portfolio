import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
          <div className="top-left">
            <img src={logo} alt=''></img>
            <p>A passionate Web developer have experience in creating full stack websites using Html, Css,Mongo DB,Node js and JavaScript</p>
          </div>
          </div>
    </div>
  )
}

export default Footer