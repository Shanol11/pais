import React, { useState } from "react";
import "../App.css"; 
import "../styles/Gallery.css";


const images = [
  { id: 1, src: "/assets/g1.jpg", alt: "Food 1" },
  { id: 2, src: "/assets/g2.jpg", alt: "Food 2" },
  { id: 3, src: "/assets/g3.jpg", alt: "Food 3" },
  { id: 4, src: "/assets/g4.jpg", alt: "Food 4" },
  { id: 5, src: "/assets/g5.jpg", alt: "Food 5" },
  { id: 6, src: "/assets/g6.jpg", alt: "Food 6" },
  { id: 7, src: "/assets/g7.jpg", alt: "Food 7" },
  { id: 8, src: "/assets/g8.jpg", alt: "Food 8" },
  { id: 9, src: "/assets/g9.jpg", alt: "Food 9" },
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openImage = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    
    <div className="gallery-page">
      
     
      {/* Banner Section */}
      
      <div className="gallery-banner" style={{ backgroundImage: `url(/assets/gal.jpg)` }}>
      <div className="gallery-overlay">
        <h1 className="slide-in">Gallery</h1>
        <p>Home / Gallery</p>
      </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-container">
        {images.map((image, index) => (
          <div key={image.id} className="gallery-item">
            <img
              src={image.src}
              alt={image.alt}
              className="zoom-effect"
              onClick={() => openImage(index)}
            />
          </div>
        ))}
      </div>

      {/* Modal for Enlarged Image with Navigation */}
      {selectedIndex !== null && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>&times;</span>
          <button className="prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}> &#9664;</button>
          <img className="modal-content zoom-effect" src={images[selectedIndex].src} alt="Enlarged" />
          <button className="next" onClick={(e) => { e.stopPropagation(); nextImage(); }}> &#9654;</button>
        </div>
      )}

       {/* Add Footer */}
    </div>
  
  );
};

export default Gallery;
