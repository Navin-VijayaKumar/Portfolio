import React from 'react'
import './MyWork.css'
import pff from '../Assets/pff.png'
import pa from '../Assets/pa.png'
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
        
          <h3>1</h3>
          <img src={pff}></img>
          <h3>E-COMMERCE WEBSITE PC-FACTORY</h3>
         </div>
         <div className="displ">
        
        <h3>2</h3>
        <img src={pa}></img>
        <h3>PET ADOPTION WEBSITE MERN STACK</h3>
       </div>
       <div className="displ">
        
        <h3>3</h3>
        <img src=""></img>
        <h3>AQUA SCAPE WEBSITE MERN STACK</h3>`
       </div>
       </div>
        </div>
        </div>
      )
  
}

export default MyWork