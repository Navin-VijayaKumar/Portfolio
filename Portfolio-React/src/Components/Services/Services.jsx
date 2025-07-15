

import React, { useContext, useState } from "react";
import "./Services.css";
// import { motion } from "framer-motion";

const Services = () => {
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const transition = {
    duration: 0.6,
    type: "spring",
    stiffness: 100
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    hover: { y: -15, scale: 1.03 }
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.15, rotate: 5 }
  };

  const services = [
    {
      id: "uiux",
      title: "UI/UX Design",
      description: "Crafting user-friendly interfaces and intuitive user experiences using modern design principles. Also prototyping and ensuring responsive designs.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke={darkMode ? "#ffffff" : "#6b6b6b"} strokeWidth="1.5"/>
          <path d="M7 14.5C7 14.5 8.2 16 10 16C11.8 16 13 14.5 13 14.5" stroke={darkMode ? "#ffffff" : "#6b6b6b"} strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M9 10C9 10.5523 8.55228 11 8 11C7.44772 11 7 10.5523 7 10C7 9.44772 7.44772 9 8 9C8.55228 9 9 9.44772 9 10Z" fill={darkMode ? "#ffffff" : "#6b6b6b"}/>
          <path d="M17 10C17 10.5523 16.5523 11 16 11C15.4477 11 15 10.5523 15 10C15 9.44772 15.4477 9 16 9C16.5523 9 17 9.44772 17 10Z" fill={darkMode ? "#ffffff" : "#6b6b6b"}/>
        </svg>
      )
    },
    {
      id: "webdev",
      title: "Web Development",
      description: "Building dynamic and responsive websites using the MERN stack (MongoDB, Express, React, Node.js). Implementing JWT for secure authentication.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 16V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V16C4 17.1046 4.89543 18 6 18H18C19.1046 18 20 17.1046 20 16Z" stroke={darkMode ? "#ffffff" : "#6b6b6b"} strokeWidth="1.5"/>
          <path d="M8 21H16" stroke={darkMode ? "#ffffff" : "#6b6b6b"} strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 18V21" stroke={darkMode ? "#ffffff" : "#6b6b6b"} strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M8 11L11 14L8 17" stroke={darkMode ? "#ffffff" : "#6b6b6b"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 11L13 14L16 17" stroke={darkMode ? "#ffffff" : "#6b6b6b"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: "mobiledev",
      title: "Agile Development",
      description: "Emphasizing clean code architecture, performance optimization, and maintainability using agile development practices and modern frameworks.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="7" y="2" width="10" height="20" rx="2" stroke={darkMode ? "#ffffff" : "#6b6b6b"} strokeWidth="1.5"/>
          <path d="M11 5H13" stroke={darkMode ? "#ffffff" : "#6b6b6b"} strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 18H12.01" stroke={darkMode ? "#ffffff" : "#6b6b6b"} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className={`container ${darkMode ? "white" : ""}`}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="services-header"
        >
          <h1 className="services-title gradient-text" style={{ color: darkMode ? "white" : "" }}>
            My Services
          </h1>
        </motion.div>

        {/* Services cards */}
        <div className="services-container">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`service-card ${darkMode ? "white" : ""}`}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              onHoverStart={() => setHoveredCard(service.id)}
              onHoverEnd={() => setHoveredCard(null)}
              viewport={{ once: true }}
              transition={{ ...transition, delay: index * 0.2 }}
              variants={cardVariants}
            >
              <div className="card-content">
                <div className="icon-container">
                  <motion.div 
                    className="service-icon"
                    style={{ backgroundColor: hoveredCard === service.id ? "#FF8A00" : "#FCA61F" }}
                    variants={iconVariants}
                  >
                    {service.icon}
                  </motion.div>
                </div>
                
                <h3 className="card-title" style={{ color: darkMode ? "black" : "" }}>
                  {service.title}
                </h3>
                
                <div className="title-underline" 
                  style={{ 
                    width: hoveredCard === service.id ? "80px" : "50px", 
                    backgroundColor: hoveredCard === service.id ? "#FF8A00" : "#FCA61F",
                    transition: "all 0.3s ease"
                  }}
                ></div>
                
                <p className="card-description" style={{ color: darkMode ? "black" : "" }}>
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CV Download button */}
        <motion.div 
          className="cv-download-container" 
          style={{ textAlign: "center", marginTop: "3rem" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
