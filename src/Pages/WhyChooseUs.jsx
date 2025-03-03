import React, { useState, useEffect, useRef } from "react";
import "../styles/WhyChooseUs.css";

const WhyChooseUs = () => {
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
    <div ref={sectionRef} className="why-choose-us-container">
      <h2 className="section-title">WHY CHOOSE US</h2>
      <h1 className="main-heading" key={key}> 
        {"Leave Your Guests Speechless With\n Our Fabulous Food!".split(" ").map((word, wordIndex) => (
          <span key={wordIndex} style={{ display: "inline-block", marginRight: "8px" }}>
            {word.split("" ).map((letter, letterIndex) => (
              <span key={letterIndex} style={{ animationDelay: `${(wordIndex * 10 + letterIndex) * 0.05}s` }}>
                {letter}
              </span>
            ))}
          </span>
        ))}
      </h1>

      {/* Features Section */}
      <div className="features-container">
        <div className="feature-box">
          <div className="feature-icon">
            <img src="/assets/icon1.jpg" alt="Authentic Taste" />
          </div>
          <h3 className="feature-heading">Authentic Taste</h3>
          <p className="feature-text">
            Savor tradition with our authentic Mangalorean and coastal flavors!
          </p>
        </div>

        <div className="feature-box">
          <div className="feature-icon">
            <img src="/assets/icon2.jpg" alt="Service Excellence" />
          </div>
          <h3 className="feature-heading">Service Excellence</h3>
          <p className="feature-text">
            More than food unforgettable experiences with top-notch service!
          </p>
        </div>

        <div className="feature-box">
          <div className="feature-icon">
            <img src="/assets/icon3.jpg" alt="Best Quality" />
          </div>
          <h3 className="feature-heading">Best Quality</h3>
          <p className="feature-text">
            Every bite, pure perfection with the finest ingredients!
          </p>
        </div>

        <div className="feature-box">
          <div className="feature-icon">
            <img src="/assets/icon4.jpg" alt="Heritage" />
          </div>
          <h3 className="feature-heading">Heritage</h3>
          <p className="feature-text">
            Pais Catering serves love, culture, and timeless traditions!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
