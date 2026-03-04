import React, { useRef} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import { useState } from 'react'
import iconport from '../Assets/iconport.png'
import  AnchorLink from 'react-anchor-link-smooth-scroll'
import c2 from '../Assets/c2.png'
import s2 from '../Assets/s2.png'
import { Link } from 'react-router-dom'
const Navbar = () => {

const[menu,setMenu]= useState('home');
const menuRef=useRef();
const openmenu =()=>{
  menuRef.current.style.right='0';
}
const closemenu =()=>{
  menuRef.current.style.right='-350px';
}

  return (
    <div className='navbar'>
        <div className="logo">
            <img src={logo} alt=''/>
            <img src={s2} onClick={openmenu} className='nav-open' alt='' ></img>

        </div>
          <ul ref={menuRef} className="nav-menu">
  <img src={c2} onClick={closemenu} className='nav-close' alt='' />

  <li onClick={() => setMenu("home")}>
    <AnchorLink
      className={`anchor-link ${menu === "home" ? "active" : ""}`}
      href="#home"
    >
      Home
    </AnchorLink>
    {menu === "home" && <img className="paint" src={iconport} alt="" />}
  </li>

  <li onClick={() => setMenu("about")}>
    <AnchorLink
      className={`anchor-link ${menu === "about" ? "active" : ""}`}
      offset={50}
      href="#about"
    >
      About Me
    </AnchorLink>
    {menu === "about" && <img className="paint" src={iconport} alt="" />}
  </li>

  <li onClick={() => setMenu("certificate")}>
    <AnchorLink
      className={`anchor-link ${menu === "certificate" ? "active" : ""}`}
      offset={50}
      href="#certificate"
    >
      Certification
    </AnchorLink>
    {menu === "certificate" && <img className="paint" src={iconport} alt="" />}
  </li>

  <li onClick={() => setMenu("work")}>
    <AnchorLink
      className={`anchor-link ${menu === "work" ? "active" : ""}`}
      offset={50}
      href="#work"
    >
      My Works
    </AnchorLink>
    {menu === "work" && <img className="paint" src={iconport} alt="" />}
  </li>

  <li onClick={() => setMenu("contact")}>
    <AnchorLink
      className={`anchor-link ${menu === "contact" ? "active" : ""}`}
      offset={50}
      href="#contact"
    >
      Contact
    </AnchorLink>
    {menu === "contact" && <img className="paint" src={iconport} alt="" />}
  </li>
</ul>
    <div className="nav-connect">
 <Link to="/Activities" className='anchor-link' offset={50} href='#contact'>Activities</Link>
    </div>
    </div>
  )
}

export default Navbar