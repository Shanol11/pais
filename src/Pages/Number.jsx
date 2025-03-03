import React, { useState, useEffect, useRef } from "react";
import "../styles/Number.css";

const stats = [
  { value: 25, label: "Years Of Excellence", bgImage: "/assets/num1.jpg "},
  { value: 250, label: "Menu Options", bgImage: "/assets/num2.jpg "},
  { value: 340, label: "Staff", bgImage:"/assets/num3.jpg"},
  { value: 1250, label: "Happy Foodies", bgImage: "/assets/num4.jpg "},
];

const Number = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const ref = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            startCounting(index, stats[index].value);
          }
        });
      },
      { threshold: 0.5 }
    );

    ref.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const startCounting = (index, targetValue) => {
    let duration = 1500;
    let steps = 60;
    let stepValue = targetValue / steps;

    let currentCount = 0;
    let interval = setInterval(() => {
      currentCount += stepValue;
      setCounts((prevCounts) => {
        const newCounts = [...prevCounts];
        newCounts[index] = Math.min(Math.floor(currentCount), targetValue);
        return newCounts;
      });

      if (currentCount >= targetValue) clearInterval(interval);
    }, duration / steps);
  };

  return (
    <div className="stats-container">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="stats-card"
          style={{ backgroundImage: `url(${stat.bgImage})` }}
          ref={(el) => (ref.current[index] = el)}
        >
         <span className="stats-value">
            {counts[index]}
            {(stat.value === 25 || stat.value === 250) && "+"} {/* Added "+" only for 25 and 250 */}
          </span>
          <span className="stats-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Number;
