import React from 'react'
import './Services.css'
import py from '../Assets/py.png'
const Services = () => {
  return (
    <div id='certificate' className='ser'>
    <div className="ser-title">
       <h1>My Certification</h1>
       <div className="Certificate">
        
       </div>
       <img src='' alt=''></img>
<div className="all-disp">


    <div className="disp">
    
      
      <img src={py}></img>
      <h3>Python course complited</h3>
     </div>
     <div className="disp">
    
    
    <img src={py}></img>
    <h3>Python course complited</h3>
   </div>
   <div className="disp">
    
    
    <img src={py}></img>
    <h3>Python course complited</h3>
   </div>
   </div>
    </div>
    </div>
  )
}

export default Services