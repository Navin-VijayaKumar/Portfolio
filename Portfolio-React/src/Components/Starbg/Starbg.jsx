import React, { useEffect } from 'react';
import './Starbg.css';

const Starbg = () => {
  useEffect(() => {
    const container = document.getElementById("stars-container");

    // Normal stars
    for (let i = 0; i < 150; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDuration = `${5 + Math.random() * 5}s`;
      star.style.opacity = Math.random();
      container.appendChild(star);
    }

    // 🌠 Shooting star generator
    const createShootingStar = () => {
      const shootingStar = document.createElement("div");
      shootingStar.classList.add("shooting-star");

      shootingStar.style.left = `${Math.random() * 50}%`;
      shootingStar.style.top = `${Math.random() * 50}%`;

      container.appendChild(shootingStar);

      // Remove after animation
      setTimeout(() => {
        shootingStar.remove();
      }, 1500);
    };

    // Random interval for shooting stars
    const interval = setInterval(() => {
      createShootingStar();
    }, 3000 + Math.random() * 3000);

    return () => clearInterval(interval);
  }, []);

  return <div className="stars" id="stars-container"></div>;
};

export default Starbg;
