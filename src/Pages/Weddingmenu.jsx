import React, { useState } from "react";
import "../styles/Weddingmenu.css";

const menuData = {
  "Staters" :[
    { name: "Veg Roll", img: "1.jpg" },
    { name: "Veg Cutlets", img: "2.jpg" },
    { name: "Chicken Roll", img: "3.jpg" },
    { name: "Burger Patty", img: "4.jpg" },
    { name: "Chicken Sausages", img: "5.jpg" },
    
  ],
  "Main Course" :[
    {name : "Idly" ,img: "6.jpg"},
    {name : "Shavige" ,img: "7.jpg"},
    {name : "Appam" ,img: "8.jpeg"},
    {name : "Neer Dosa" ,img: "9.jpg"},
    {name : "Chicken Masala(Red/Green)" ,img: "10.jpg"},
    {name : "Pork Bafat" ,img: "11.webp"},
    {name : "Chicken Fry" ,img: "12.jpg"},
    {name : "Veg Sukka" ,img: "13.jpg"},
    {name : "Salad" ,img: "14.jpg"},
    {name : "Rice" ,img: "15.jpg"},
    {name : "Dal" ,img: "16.jpg"},
    {name : "Pickle" ,img: "17.jpg"},
  ],
  "Desserts & Beverages" : [
    {name: "Cake & Wine", img:"18.jpg"},
    {name: "Ice cream(Slab/cup)", img:"19.jpg"},
    {name: "Lemon Juice", img:"20.webp"},
    {name: "Mint Lime Juice", img:"21.jpg"},
    {name: "Soft Drinks", img:"22.webp"},
    {name: "Badam Milk", img:"23.jpg"},
    
  ]

 
  
  
  
};

const menuItems = Object.keys(menuData);
const IMAGES_PER_PAGE = 6;

const Weddingmenu = () => {
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
          <h1 className="title">Wedding Menu</h1>
          <p className="breadcrumb">A grand feast for a grand celebration! make your wedding memorable with our carefully curated menu</p>
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
              <img src={`$/assets/${dish.img}`} alt={dish.name} />
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

export default Weddingmenu;
