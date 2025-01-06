import React from 'react'
import './SkillSet.css' 
import react from '../Assets/react.png'
import java from '../Assets/java.png'
import nodejs from '../Assets/nodejs.png'
import mondb from '../Assets/mondb.png'
import fb from '../Assets/fb.png'
import js from '../Assets/js.png'

const SkillSet = () => {
  return (
    <div className='rot'>
        <div>

        <h1>Skill Set</h1>
        </div>
        <div className="rot-items">

        <div className='rot-item1'>

        <img className='rot-img' src={react}></img>
        </div>
        <div className='rot-item1'>

        <img className='rot-img' src={java}></img>
        </div>
        <div className='rot-item1'>

        <img className='rot-img' src={fb}></img>
        </div>
        <div className='rot-item2'>

        <img className='rot-img' src={js}></img>
        </div>
        <div className='rot-item2'>

        <img className='rot-img' src={nodejs}></img>
        </div>
        <div className='rot-item2'>

        <img className='rot-img1' src={mondb}></img>
        </div>
        </div>

    </div>

)
}

export default SkillSet