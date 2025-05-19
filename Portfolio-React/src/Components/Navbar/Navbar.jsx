import React, { useRef } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import { useState } from 'react'
import iconport from '../Assets/iconport.png'
import  AnchorLink from 'react-anchor-link-smooth-scroll'
import c2 from '../Assets/c2.png'
import s2 from '../Assets/s2.png'

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
           <ul ref={menuRef}  className="nav-menu">
            <img src={c2} onClick={closemenu} className='nav-close' alt=''></img>
            <li><AnchorLink className='anchor-link sstt'  href='#home'><p onClick={()=>setMenu("home")}>Home </p></AnchorLink>{menu==='home'?<img className='paint' src={iconport} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About me</p></AnchorLink>{menu==='about'?<img className='paint' src={iconport} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link sstts' offset={50} href='#certificate'><p onClick={()=>setMenu("certificate")}>Certification</p></AnchorLink>{menu==='certificate'?<img className='paint' src={iconport} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>My Works</p></AnchorLink>{menu==='work'?<img className='paint' src={iconport} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==='contact'?<img className='paint' src={iconport} alt=''/>:<></>}</li>
         
    </ul>
    <div className="nav-connect">
       <AnchorLink className='anchor-link' offset={50} href='#contact'> Connect With Me</AnchorLink>
    </div>
    </div>
  )
}

export default Navbar