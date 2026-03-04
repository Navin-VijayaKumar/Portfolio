import React, { useContext } from "react";
import "./Footer.css";

const Footer = () => {

  return (
    <section id="contact">
    <div className="contact-icons" >
      <h2 className="contact-heading">Connect with Me</h2>
      <p className="contact-subheading">Find me on these platforms:</p>

      <div className="contact-cards-container">
        {/* GitHub */}
        <a
          href="https://github.com/Navin-VijayaKumar"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
        <div 
          className="contact-card" 
        >
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub"
            className="contact-logo"
          />
            GitHub
        </div>
          </a>

        {/* LeetCode */}
        <a
          href="https://leetcode.com/u/22CSR129_Navin_v-/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
        <div 
          className="contact-card"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
            alt="LeetCode"
            className="contact-logo"
          />
            LeetCode
        </div>
          </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/navinv2004/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
        <div 
          className="contact-card"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt="LinkedIn"
            className="contact-logo"
          />
            LinkedIn
        </div>
          </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/918940773056"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
        <div 
          className="contact-card"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="contact-logo"
          />
            WhatsApp
        </div>
          </a>

        {/* Gmail */}
        <div 
          className="contact-card"
          onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=navinv10122004@gmail.com", "_blank")}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
            alt="Gmail"
            className="contact-logo"
          />
          <span className="contact-link">Gmail</span>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Footer;