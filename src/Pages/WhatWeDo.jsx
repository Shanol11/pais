import React, { useState, useEffect, useRef} from "react";
import "../styles/WhatWeDo.css";
import { useNavigate } from "react-router-dom";
const WhatWeDo = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [key, setKey] = useState(0);
  const navigate = useNavigate();

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
    <div ref={sectionRef} className="what-we-do-container">
      <h2 className="small-header">WHAT WE DO</h2>
      <h2 className="heading1" key={key}> 
        {"Exceptional Catering for Every Occasion".split(" ").map((word, wordIndex) => (
          <span key={wordIndex} style={{ display: "inline-block", marginRight: "8px" }}>
            {word.split("").map((letter, letterIndex) => (
              <span key={letterIndex} style={{ animationDelay: `${(wordIndex * 10 + letterIndex) * 0.05}s` }}>
                {letter}
              </span>
            ))}
          </span>
        ))}
      </h2>

      <div className="content-boxes">
        <div className="content-box">
          <div className="box-image">
            <img src="/assets/wedding.jpg" alt="Wedding" />
          </div>
          <div className="box-content">
            <h3>Wedding Event</h3>
            <p>A wedding is more than just a celebration it’s a grand feast of love, laughter, and
               togetherness! At Pais Catering, we ensure that your guests don’t just attend your wedding;
                 they experience it through flavors that linger long after the celebrations. Because what’s a
                 feast without unforgettable food?<br/><strong>"Life is about to begin, but first, let’s
                  eat!"</strong></p>
          </div>
        </div>

        <div className="content-box">
          <div className="box-image">
            <img src="/assets/corporate.jpg" alt="Corporate" />
          </div>
          <div className="box-content">
            <h3>Corporate Event</h3>
            <p>From boardroom meetings to grand corporate galas, we bring business and fine dining
            together! Whether it’s a power lunch, an annual celebration, or a product launch, Pais
         Catering serves up customized, exquisite delicacies that impress and indulge. Because great
            food fuels great ideas!<br/><strong>"Targets, deadlines,
              meetings—let them wait! Food comes first!"</strong></p>
              </div>
        </div>

        <div className="content-box">
          <div className="box-image">
            <img src="/assets/birthday.jpg" alt="Birthday" />
          </div>
          <div className="box-content">
            <h3>Birthday Party</h3>
            <p>Birthdays are not just about growing older they&#39;re about celebrating life! Whether it’s a fun-
              filled kids&#39; party or a milestone birthday, Pais Catering ensures your guests are treated to lip-
              smacking dishes while you enjoy the moment.<br/><strong>"Aging is optional, but cake
                overload is a must!"</strong></p>
          </div>
        </div>
      </div>

      <div className="buttons2">
        <button className="ser-btn" onClick={()=> navigate("/services")}>
          <span><b>View All Services</b></span>
          <span className="arrow-circle">→</span>
        </button>
      </div>
    </div>
  );
};

export default WhatWeDo;
