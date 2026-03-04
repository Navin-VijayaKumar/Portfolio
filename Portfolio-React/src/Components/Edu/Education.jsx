import React, { useContext } from "react";
import "./Education.css";
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const Education = () => {
  // context
  

  return (
    <section id="education"> {/* Added section with ID */}
      <div className="Edu">
        <h1 className="Edu_title">Education</h1>
        <p className="Edu_description">The Journey where I come from</p>
        <div className="Edu_sec">
          <div className="Edu_card">
            <FaGraduationCap className="icon" />
            <h2 className="Edu_degree" >BE CSE</h2>
            <p className="Edu_institution" >Kongu Engineering College</p>
            <p className="Edu_score">CGPA: 7.09*</p>
            <p className="Edu_institution" >(2022 - 2026)</p>
          </div>
          <div className="Edu_card">
            <FaSchool className="icon" />
            <h2 className="Edu_degree" >HSC</h2>
            <p className="Edu_institution" >Velavan Matric Hr Sec School</p>
            <p className="Edu_score">80%</p>
            <p className="Edu_institution" >(2022)  </p>
          </div>
          <div className="Edu_card">
            <FaSchool className="icon" />
            <h2 className="Edu_degree" >SSLC</h2>
            <p className="Edu_institution" >Velavan Matric Hr Sec School</p>
            <p className="Edu_score">75%</p>
            <p className="Edu_institution" >(2020)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;