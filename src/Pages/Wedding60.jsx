import React, { useState } from "react";
import "../styles/Weddingmenu.css";

const menuData = {
  "Main Course" :[
    {name : "Neer Dosa" ,img: "9.jpg"},
    {name : "Appam" ,img: "8.jpeg"},
    {name: "Mutton Masala(Red/Green)", img:"24.jpg"},
    {name : "Pork Bafat" ,img: "11.webp"},
    {name : "Chicken Sukka" ,img: "25.jpg"},
    {name : "Veg Sukka" ,img: "13.jpg"},
    {name : "Salad" ,img: "14.jpg"},
    {name : "Rice" ,img: "15.jpg"},
    {name : "Dal" ,img: "16.jpg"},
    {name : "Pickle" ,img: "17.jpg"},

  ],
  "Desserts" :[
    {name: "Ice Cream(Slab/cup)", img:"19.jpg"},
    {name: "Payasam", img:"26.jpg"},
  ],
  "Beverages" :[
    {name: "Lemon Juice", img:"20.webp"},
    {name: "Soft Drinks", img:"22.webp"},
    {name: "Coffee", img:"27.jpg"},
    {name: "Tea", img:"28.jpg"},
  ]

  
  
  
};

const menuItems = Object.keys(menuData);
const IMAGES_PER_PAGE = 6;

const Wedding60 = () => {
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
          <h1 className="title">60th Wedding Anniversary Menu</h1>
          <p className="breadcrumb">Celebrate the milestone with a feast full of love and tradition</p>
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

export default Wedding60;
