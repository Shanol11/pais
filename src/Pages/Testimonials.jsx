import React, { useEffect, useRef, useState } from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "A very special day today in our life and this is the second time we booked Venus catering for birthday party and as expected the food and service was extremely well.Multiple varieties and all tastes were awesome. All our guests enjoyed and specially mentioned about food taste. Many thanks to Venus catering .. We really enjoyed and also India won today's match... Soo happy. Will definitely refer to all our friends and relatives😀",
      author: "vinoth.R.sugan",
    },
    {
      quote: "We have planned housewarming function on June 9th. We booked venus catering based on very good reviews. Both Gurumurthy sir and his son Ruthresh came in- person and provided Extradinory service. We are very happy for the service and food items. Both our friends and family are very happy. Top class top notch food.",
      author: "Sathish Kumar",
    },
    {
      quote: "I appreciate the exceptional service provided by Guru Murthy, the caterer, at my housewarming ceremony. His dedication and kindness were evident in the diverse and high-quality breakfast and lunch menu he offered. The addition of a tea and coffee stall by Kumbakonam Degree added great value, leaving my guests delighted. Notably, Guru Murthy himself ensured the impeccable service by personally serving food and even attending to guests. A heartfelt thank you for your outstanding service sir. Surely I will recommend your valuable service to my friends and relatives.",
      author: "Sujith Joseph",
    },
    {
      quote: "I am a person who selected venus catering. Initially I was in a dilemma. Later I felt my decision is right. We ordered 300 breakfast and 300 lunch. Both are awesome. Thank you to Mr.Gurumurrthy. Your services are great. Keep up your good work.",
      author: "Prem kumar Kalyanasundaram",
    },
    {
      quote: "Venus catering is very very good in catering service, their hospitality is very very good , unexpected crowd was came into my daughters marriage, but Mr .Gurumoorthy tackled the situation easily and immediately managed and served to all coming to our marriage , I’m very very grateful to him , food they served was excellent and praised by all coming to our marriage at 18/2/24 &19/2/24.",
      author: "Uma Devi",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const [key, setKey] = useState(0);
  const [headingText, setHeadingText] = useState('');
  const fullHeadingText = "What People Say About Us?";
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timer;
    if (charIndex < fullHeadingText.length) {
      timer = setTimeout(() => {
        setHeadingText((prevText) => prevText + fullHeadingText[charIndex]);
        setCharIndex((prevIndex) => prevIndex + 1);
      }, 100);
    }
    return () => clearTimeout(timer);
  }, [charIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section" ref={sectionRef}>
      <div className="testimonials-content">
        <h2>TESTIMONIAL</h2>
        <h1 key={key}>{headingText}</h1>
        <p>{testimonials[currentIndex].quote}</p>
        <p className="author">{testimonials[currentIndex].author}</p>
        <div className="arrow-container">
          <button className="arrow left-arrow" onClick={handlePrev}>←</button>
          <button className="arrow right-arrow" onClick={handleNext}>→</button>
        </div>
      </div>
      <div className="image-container">
        <img
          src="/assets/test.jpg"
          alt="Testimonial Image"
          className="testimonial-image"
        />
      </div>
    </section>
  );
};

export default Testimonials;