import React, { useEffect, useState, useRef } from "react";
import "../App.css";
import "../styles/Service.css";

const Services = () => {
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
  const servicesData = [
  {
    img: "/assets/wedding.jpg",
    title: "Wedding Events",
    desc: "A wedding isn’t just an event—it’s a grand celebration of love! At Pais Catering, we transform every wedding into a royal feast with flavors that linger in your heart forever. \"Marriage is a journey, but first, let’s enjoy a delicious feast!\""
  },
  {
    img: "/assets/roce.JPG",
    title: "Roce Ceremony",
    desc: "A beautiful Mangalorean Catholic tradition, where the bride and groom receive blessings before their big day. And what’s a Roce without a lavish seafood and traditional Mangalorean spread? \"Blessings are complete, now it's time to indulge in a grand feast!\""
  },
  {
    img: "/assets/60th.jpg",
    title: "60th Wedding Anniversary (Shashti Poorthi)",
    desc: "A milestone of love and togetherness! Bless the couple and let us serve a hearty, traditional feast that brings family and memories together. \"Celebrating 60 years of love with a meal to match the occasion!\""
  },
  {
    img: "/assets/70th.jpg",
    title: "70th Wedding Anniversary (Bheemaratha Shanthi)",
    desc: "Seventy years of togetherness calls for a grand celebration! While you cherish their love, we ensure the guests enjoy every bite. \"Decades may pass, but great flavors remain timeless!\""
  },
  {
    img: "/assets/80th.jpg",
    title: "80th Wedding Anniversary (Sathabhishekam)",
    desc: "Witnessing eight decades of marriage is a divine experience! Let Pais Catering serve a feast worthy of this once-in-a-lifetime blessing. \"A lifetime of love deserves a feast that’s just as special!\""
  },
  {
    img: "/assets/enag.JPG",
    title: "Engagement",
    desc: "The first step towards forever deserves a meal that’s just as special! Let us make it grand with flavors that bring families together. \"A new journey begins with love, laughter, and delicious food!\""
  },
  {
    img: "/assets/bs.JPG",
    title: "Seemantham (Baby Shower)",
    desc: "Welcoming a new life is a magical moment! We ensure the food is as delightful as the blessings for the mother-to-be. \"Double the happiness with love, laughter, and a delicious spread!\""
  },
  {
    img: "/assets/an.JPG",
    title: "Annaprasana (Baby’s First Solid Meal)",
    desc: "A baby's first taste of solid food should be as pure and special as their smile. Let us make it a joyful occasion for everyone. \"A milestone moment deserves a feast filled with love and flavor!\""
  },
  {
    img: "/assets/birthday.jpg",
    title: "Birthday Party",
    desc: "Whether it’s your child’s first birthday or a milestone celebration, we bring flavors that make every moment special! \"What’s a birthday without a feast to remember?\""
  },
  {
    img: "/assets/housew.jpg",
    title: "Housewarming",
    desc: "New home, new beginnings, and a feast to impress your guests! Let your guests leave talking about both your home & our food! \"A new home deserves warm wishes and a delicious meal!\""
  },
  {
    img: "/assets/meh.JPG",
    title: "Mehndi Function",
    desc: "Henna on hands, flavors on plates! While the bride glows, let your guests enjoy a feast of traditional delicacies. \"Celebrate beauty, tradition, and taste in every bite!\""
  },
  {
    img: "/assets/corporate.jpg",
    title: "Corporate Events",
    desc: "From boardroom meetings to grand celebrations—great food = great business! We serve customized delicacies that leave an impression. \"Success tastes even better with a great meal!\""
  },
  {
    img: "/assets/retire.jpg",
    title: "Retirement Function",
    desc: "A lifetime of hard work deserves a grand farewell! Celebrate the next chapter with a meal that everyone will cherish. \"Work may retire, but great memories and delicious food last forever!\""
  },
];

  return (
    <div className="service-page">
      <div className="service-hero" style={{ backgroundImage: `url(/assets/cont1.jpg)` }}>
        <div className="service-overlay">
          <h1 className="service-title"><center>Services</center></h1>
          <p>Home / <span className="highlight">Services</span></p>
        </div>
      </div>

      <div ref={sectionRef} className={`service-container ${animate ? "animate-container" : ""}`}>
        <h2 className="small">WHAT WE DO</h2>
        <h2 className="services-heading" key={key}>
          {"Premium Catering Services for Every Occasion".split(" ").map((word, wordIndex) => (
            <span key={wordIndex} style={{ display: "inline-block", marginRight: "8px" }}>
              {word.split("").map((letter, letterIndex) => (
                <span key={letterIndex} style={{ animationDelay: `${(wordIndex * 10 + letterIndex) * 0.05}s` }}>
                  {letter}
                </span>
              ))}
            </span>
          ))}
        </h2>

        <div className="service-boxes">
          {servicesData.map((service, index) => (
            <div key={index} className="service-box">
              <div className="service-image">
                <img src={service.img} alt={service.title} />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
