// src/components/StarBackground.jsx
import React, { useEffect } from 'react';
import './Starbg.css';

const Starbg = () => {
  useEffect(() => {
    const container = document.getElementById("stars-container");
    for (let i = 0; i < 150; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDuration = `${5 + Math.random() * 5}s`;
      star.style.opacity = Math.random();
      container.appendChild(star);
    }
  }, []);

  return <div className="stars" id="stars-container"></div>;
};

export default Starbg;
