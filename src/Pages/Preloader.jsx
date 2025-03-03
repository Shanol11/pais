import { useEffect, useState } from "react";
import "../styles/Preloader.css"; // Import the CSS file

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust loading duration

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null; // Hide preloader after loading

  return (
    <div className="preloader">
      <div className="loader">
        <img src="/assets/pre.jpg" alt="Loading..." />
        <div className="spinner"></div> {/* Add spinner here */}
      </div>
    </div>
  );
};

export default Preloader;
