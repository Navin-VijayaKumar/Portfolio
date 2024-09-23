import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src={logo} alt=''/>

        </div>
           <ul className="nav-menu">
            
            <li>Home</li>
            <li>About me</li>
            <li>My Certification</li>
            <li>My Works</li>
            <li>Contact</li>
         
    </ul>
    <div className="nav-connect">
        Connect With Me
    </div>
    </div>
  )
}

export default Navbar