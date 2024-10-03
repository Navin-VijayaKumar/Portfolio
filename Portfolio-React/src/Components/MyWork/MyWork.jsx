import React from 'react'
import './MyWork.css'
import mw from '../Assets/mw.png'
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
          <img src={mw}></img>
          <h3>Python course complited</h3>
         </div>
         <div className="displ">
        
        <h3>2</h3>
        <img src={mw}></img>
        <h3>Python course complited</h3>
       </div>
       <div className="displ">
        
        <h3>3</h3>
        <img src={mw}></img>
        <h3>Python course complitedssssssssssssssss</h3>
       </div>
       </div>
        </div>
        </div>
      )
  
}

export default MyWork