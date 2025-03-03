import React, { useState } from "react";
import "../styles/Weddingmenu.css";

const menuData = {
    "Staters" :[
    
        { name: "Chicken Lollipop", img: "31.jpg" },
        { name: "Chicken Drumsticks", img: "51.jpg" },
    
      ],
    

  "Main Course" :[
    {name : "Neer Dosa" ,img: "9.jpg"},
    {name : "Shavige" ,img: "7.jpg"},
    {name : "Chicken Sukka" ,img: "25.jpg"},
    {name : "Pork Sorpotel" ,img: "11.webp"},

    {name : "Rice" ,img: "15.jpg"},
    {name : "Dal" ,img: "16.jpg"},
    {name : "Pickle" ,img: "17.jpg"},


  ],
  "Desserts & Beverages" : [
    {name: "Payasam", img:"26.jpg"},
    {name: "Ice Cream", img:"19.jpg"},
    {name: "Hot Tea", img:"28.jpg"},
    {name: "Coffee", img:"27.jpg"},
  ]

 
  
  
  
};

const menuItems = Object.keys(menuData);
const IMAGES_PER_PAGE = 6;

const  Retirement = () => {
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
          <h1 className="title">Retirement Function Menu</h1>
          <p className="breadcrumb">A heartfelt celebration with a delicious meal!</p>
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

export default Retirement;
