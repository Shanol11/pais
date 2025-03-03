import React, { useEffect, useState } from "react";
import "../App.css";
import "../styles/Contact.css";


const Contact = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [trailPos, setTrailPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPos({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const moveTrail = () => {
      setTrailPos((prev) => ({
        x: prev.x + (cursorPos.x - prev.x) * 0.2,
        y: prev.y + (cursorPos.y - prev.y) * 0.2,
      }));
    };

    const interval = setInterval(moveTrail, 10);
    return () => clearInterval(interval);
  }, [cursorPos]);

  return (
    
      <div className="contact-page">
        <div
          className="custom-cursor"
          style={{ left: `${trailPos.x}px`, top: `${trailPos.y}px` }}
        ></div>

        <div
          className="contact-hero"
          style={{ backgroundImage: `url(/assets/cont1.jpg)` }}
        >
          <div className="contact-overlay">
            <h1 className="contact-title"><center>Contact Us</center></h1>
            <p>Home / <span className="highlight">Contact Us</span></p>
          </div>
        </div>

        <div className="contact-wrapper">
          <div className="contact-content">
            <p className="small-title">HELLO EVERYONE<span className="dot">.</span></p>
            <h2 className="main-title">
              We prepare food just like your home in large quantities. That's it.<br />
              Do book us and relax.
            </h2>
            <p className="sub-text">
              We offer personalized catering solutions for all events, ensuring every
              detail is perfect. Contact us for exceptional service and exquisite culinary
              experiences tailored to your needs. Your satisfaction is our top priority.
            </p>

            <div className="button-container">
              <button className="btn1-custom">
                <span><b>Book Now</b></span>
                <span className="arrow-circle">→</span>
              </button>
            </div>
          </div>
        </div>

        <div className="contact-details">
          <br />
          <br />
          <h3 className="section-title">CONTACT US<span className="dot">.</span></h3>
          <h2 className="section-heading">Book Now & Get In Touch</h2>

          <div className="contact-grid">
            <div className="map-container">
              <br />
              <br />
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed/v1/place?q=Pais+catering&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="contact-box">
              <h4 className="section-title">Contact Details</h4>
              <p className="contact-info">
                <span className="icon"><img src="/assets/cont2.jpg" alt="location Icon" /></span>
                <span className="detail">4X39+8WC, Kesargadde - Guddeangadi Road, Murkottupalke, Basakala, Karnataka 574226.</span>
              </p>

              <p className="contact-info">
                <span className="icon"><img src="/assets/cont3.jpg" alt="email Icon" /></span>
                <span className="detail">paiscaterers@gmail.com</span>              
              </p>

              <p className="contact-info">
                <span className="icon"><img src="/assets/cont4.jpg" alt="contact Icon" /></span>
                <span className="detail">Rolson Pais : +91 95915 84523</span>
               
              </p>
              <p className="contact-info">
                <span className="icon"><img src="/assets/cont4.jpg" alt="contact Icon" /></span>
                <span className="detail">Victor Pais :+91 98451 48523</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      
  );
};

export default Contact;
