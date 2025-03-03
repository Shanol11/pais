import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footerpart = () => {
  const bandContent = [
   "Wedding Event",
    "60th Wedding Event",
    "70th Wedding Event",
    "80th Wedding Event",
    "Engagement",
    "Babyshower",
    "Annaprasanna",
    "Birthday",
    "Housebreakfast",
    "Houselunch",
    "Mehndi",
    "Corporate",
    "Retirement",
    "Livecounter",
    "Counter and stalls for wedding",
    "Roce"
  ];

  // Create a very long duplicated content array
  const longBandContent = [];
  for (let i = 0; i < 10; i++) {
    bandContent.forEach(item => longBandContent.push(item));
  }

  return (
    <div>
      <div className="band-container">
        <div className="moving-content">
          {longBandContent.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <img
              src="/assets/logo.jpg"
              alt="Venus Catering"
              className="footerlogo"
            />
            <p>
              Let Pais Caterers transform your special occasion into a masterpiece with our professional touch.
            </p>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a href="https://wa.me/9591584523" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div className="footer-services">
            <h3>Our Services</h3>
            <div className="services-list">
              <ul>
                <li><Link to="/wedding">Wedding Event</Link></li>
                <li><Link to="/60wedding">60th Wedding Event</Link></li>
                <li><Link to="/70wedding">70th Wedding Event</Link></li>
                <li><Link to="/80wedding">80th Wedding Event</Link></li>
                <li><Link to="/engagement">Engagement</Link></li>
                <li><Link to="/babyshower">Babyshower</Link></li>
                <li><Link to="/annaprasana">Annaprasanna</Link></li>
                <li><Link to="/birthday">Birthday</Link></li>
              </ul>
              <ul>
               
                <li><Link to="/housebreakfast">Housebreakfast</Link></li>
                <li><Link to="/houselunch">Houselunch</Link></li>
                <li><Link to="/mehndi">Mehndi</Link></li>
                <li><Link to="/corporate">Corporate</Link></li>
                <li><Link to="/retirement">Retirement</Link></li>
                <li><Link to="/live">Livecounter</Link></li>
                <li><Link to="/counterr">Counter and stalls for wedding</Link></li>
                <li><Link to="/Rose">Roce</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-contact">
            <h3>Contact Now</h3>
            <p><FontAwesomeIcon icon={faLocationDot} className="icon1" />4X39+8WC, Kesargadde - Guddeangadi Road, Murkottupalke, Basakala, Karnataka 574226. </p>
            <p><FontAwesomeIcon icon={faPhone} className="icon1" /> +91 95915 84523</p>
            <p><FontAwesomeIcon icon={faPhone} className="icon1" /> +91 98451 48523</p>
            <p><FontAwesomeIcon icon={faEnvelope} className="icon1" /> paiscaterers@gmail.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © 2025 <b>Pais Caterers</b> All rights reserved | Designed By <b>Vision Flow Technologies</b>.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footerpart;