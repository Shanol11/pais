import React, { useState } from "react";
import "../styles/Weddingmenu.css";

const menuData = {
  "Staters" :[
    
    { name: "Chicken Lollipop", img: "31.jpg" },
    { name: "Chicken Tikka", img: "32.jpg" },
    { name: "Veg Cutlets", img: "2.jpg" },
    { name: "Chicken Sausages", img: "5.jpg" },
    

  ],
  "Main Course" :[
    {name : "Idly" ,img: "6.jpg"},
    {name : "Neer Dosa" ,img: "9.jpg"},
    {name : "Chicken Biryani" ,img: "33.jpg"},
    {name: "Mutton Biryani", img:"34.jpg"},
    
    {name : "Chicken Ghee Roast" ,img: "35.jpg"},
    {name : "Veg Sukka" ,img: "13.jpg"},

    {name : "Dal Tadka" ,img: "16.jpg"},

  ],
  "Desserts & Beverages" : [
    {name: "Cake & Wine", img:"18.jpg"},
    {name: "Fruit Punch", img:"36.webp"},
    {name: "Soft Drinks", img:"22.webp"},
   
    
  ]

 
  
  
  
};

const menuItems = Object.keys(menuData);
const IMAGES_PER_PAGE = 6;

const Engagement = () => {
  const [selectedMenu, setSelectedMenu] = useState(menuItems[0]);
  const [currentPage, setCurrentPage] = useState(0);

  const selectedDishes = menuData[selectedMenu] || [];
  const totalPages = Math.ceil(selectedDishes.length / IMAGES_PER_PAGE);

  const paginatedDishes = selectedDishes.slice(
    currentPage * IMAGES_PER_PAGE,
    (currentPage + 1) * IMAGES_PER_PAGE
  );

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
    window.scrollTo(0,0);
  };

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
    window.scrollTo(0,0);
  };

  return (
    <div>
      <div className="wedding-menu-container">
        <div className="overlay">
          <h1 className="title">Engagement Menu</h1>
          <p className="breadcrumb">Begin the journey of love with a delicious celebrations!</p>
        </div>
      </div>

      <div className="main-content">
        <div className="menu-list-container">
          <ul className="menu-list">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={selectedMenu === item ? "active" : ""}
                onClick={() => {
                  setSelectedMenu(item);
                  setCurrentPage(0);
                }}
              >
                <img src="/assets/logo.jpg" className="icon"/> {item}
              </li>
            ))}
          </ul>
        </div>
<div className="items">
  
        <div className="image-gallery">
          {paginatedDishes.map((dish, index) => (
            <div key={index} className="dish-card">
              <img src={`/assets/${dish.img}`} alt={dish.name} />
              <p>{dish.name}</p>
            </div>
          ))}

        </div>
<div className="pagination-controls">
            <button className="pagination-button" onClick={handlePrev} disabled={currentPage === 0}>
              Prev ««
            </button>
            <span className="pagination-text">
              <strong>Page {currentPage + 1} of {totalPages}</strong>
            </span>
            <button className="pagination-button" onClick={handleNext} disabled={currentPage === totalPages - 1}>
              »» Next
            </button>
          </div>
      </div>
          </div>
    </div>
  
  );
};

export default Engagement;
