import React, { useState, useEffect } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom"; 

import "../styles/HomePage.css";


const greetings = ["Had food?", "If not, come to Pais!"]; // Array of greetings

const HomePage= () => {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [zoomClass, setZoomClass] = useState("zoom-in");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate(); 

  useEffect(() => {
    const interval = setInterval(() => {
      setZoomClass("zoom-out"); // Start zoom-out animation

      setTimeout(() => {
        setCurrentGreeting((prev) => (prev + 1) % greetings.length);
        setZoomClass("zoom-in"); // Zoom in with new text
      }, 1000); // Wait for zoom-out to complete (match CSS duration)
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  // Mouse move event to track pointer position
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="container">
      {/* Hero Section */}
      <div className="hero" style={{ backgroundImage: 'url("/assets/image3.jpg")' }}>
        <div className="hero-overlay">
          <h4> WELCOME TO PAIS CATERING! </h4>

          {/* Zoom-In & Out Greeting Animation */}
          <h1 className={`zoom-text ${zoomClass}`}>{greetings[currentGreeting]}</h1>

          <p >
          Namaskara! Mangalore’s finest veg & non-veg wedding caterers, serving authentic flavors
          with 2,000+ weddings of experience and a team of 340 experts.
          </p>
          <div className="buttons">
            {/* Explore Button */}
            <button className="btn-custom" onClick={() => navigate("/about")}>
              <span><b>Explore</b></span>
              <span className="arrow-circle">→</span>
            </button>

            {/* Contact Button */}
            <button className="btn-custom"  onClick={() => navigate("/contact")}>
              <span><b>Contact</b></span>
              <span className="arrow-circle">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Circle Following Mouse */}
      <div
        className="mouse-circle"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      ></div>
    </div>
  );
};

export default HomePage;
