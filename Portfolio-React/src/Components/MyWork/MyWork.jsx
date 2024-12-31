import React from 'react'
import './MyWork.css'
import pff from '../Assets/pff.png'
import pa from '../Assets/pa.png'
import ns1 from '../Assets/ns1.png'
const MyWork = () => {
  return (
    
        <div id='work' className='sera'>
        <div className="ser-titlea">
           <h1>My Latest Work</h1>
           <div className="Certificate">
            
           </div>
           <img src='' alt=''></img>
    <div className="all-displ">
    
    
        <div className="displ">
        
         
          <img src={pff}></img>
          <h3>E-COMMERCE WEBSITE PC-FACTORY</h3>
         </div>
         <div className="displ">
        
      
        <img src={pa}></img>
        <h3>PET ADOPTION WEBSITE MERN STACK</h3>
       </div>
       <div className="displ">
        
       
        <img src={ns1}></img>
        <h3>AQUA SCAPE WEBSITE MERN STACK</h3>
       </div>
       </div>
        </div>
        </div>
      )
  
}

export default MyWork