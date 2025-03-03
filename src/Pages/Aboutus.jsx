import React, { useEffect, useRef, useState } from "react";
import "../styles/Aboutus.css";

const Aboutus = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(false);
          setTimeout(() => {
            setAnimate(true);
            setKey((prevKey) => prevKey + 1);
          }, 10);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-container" ref={sectionRef}>
      <div className="about-content">
        {/* Left side: Food images */}
        <div className={`image-section ${animate ? "slide-in" : ""}`}>
          <img src="/assets/food1.jpg" alt="Food 1" className="food-img first-img" />
          <img src="/assets/food2.jpg" alt="Food 2" className="food-img second-img" />
        </div>

        {/* Right side: Text content */}
        <div className="since-badge">
          <p>Since</p>
          <h2>1997</h2>
        </div>
        <div className="text-section">
          <h4 className="heading-top">ABOUT US</h4>
          <h2 className="heading" key={key}> {/* Key prop ensures re-render */}
            {"Elevating Your Events with\n Exceptional Food.".split(" ").map((word, wordIndex) => (
              <span key={wordIndex} style={{ display: "inline-block", marginRight: "8px" }}>
                {word.split("" ).map((letter, letterIndex) => (
                  <span key={letterIndex} style={{ animationDelay: `${(wordIndex * 10 + letterIndex) * 0.05}s` }}>
                    {letter}
                  </span>
                ))}
              </span>
            ))}
          </h2>
          <p className="description">
            Pais Catering – Where food meets tradition for over 27 years! We take pride in crafting
            unforgettable culinary experiences that make your celebrations truly special.
          </p>

          <div className="stats">
            <div className="stat-card">
              <img src="./assets/img1.jpg" alt="Experience" />
              <p><strong>27+<br/> Years of Excellence</strong></p>
            </div>
            <div className="stat-card">
              <img src="./assets/img2.jpg" alt="Marriages" />
              <p><strong>2500+<br/>Successful Weddings & Events</strong></p>
            </div>
            <div className="stat-card">
              <img src="./assets/img3.jpg" alt="Customers" />
              <p><strong>98% <br/> Happy & Returning Customers</strong></p>
            </div>
          </div>
        
          <div className="buttons1">
            {/* Explore Button */}
            <button className="more-btn">
              <span><b>More About Us</b></span>
              <span className="arrow-circle">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;