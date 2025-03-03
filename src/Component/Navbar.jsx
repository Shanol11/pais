import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
        setSubmenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // ✅ Toggle Main Menu (☰)
  const toggleMenu = (e) => {
    e.stopPropagation();
    setMenuOpen((prev) => {
      if (!prev) setSubmenuOpen(false); 
      return !prev;
    });
  };

  // ✅ Toggle Submenu ("Menu ▼")
  const toggleSubmenu = (e) => {
    e.stopPropagation();
    setSubmenuOpen((prev) => !prev);
  };

  // ✅ Close menu when clicking any option
  const handleCloseMenu = () => {
    setMenuOpen(false);
    setSubmenuOpen(false);
  };

  return (
    <nav className="navbar" ref={menuRef}>
      <div>
        <img src="assets/logo.jpg" alt="Venus Catering" className="logo" />
      </div>

      {/* Hamburger for Mobile */}
      {isMobile && (
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
      )}

      {/* Main Menu */}
      <ul className={`menu ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={handleCloseMenu}>Home</Link></li>
        <li><Link to="/about" onClick={handleCloseMenu}>About</Link></li>
        <li><Link to="/services" onClick={handleCloseMenu}>Services</Link></li>

        {/* Dropdown (Menu ▼) */}
        <li className="dropdown">
          <span onClick={toggleSubmenu}>Menu ▼</span>
          <ul className={`dropdown-menu ${submenuOpen ? "open" : ""}`}>
            <li><Link to="/wedding" onClick={handleCloseMenu}>Wedding</Link></li>
            <li><Link to="/60wedding" onClick={handleCloseMenu}>60th Wedding Anniversary Menu</Link></li>
            <li><Link to="/70wedding" onClick={handleCloseMenu}>70th Wedding menu</Link></li>
            <li><Link to="/80wedding" onClick={handleCloseMenu}>80th Wedding menu</Link></li>
            <li><Link to="/engagement" onClick={handleCloseMenu}>Engagement menu</Link></li>
            <li><Link to="/babyshower" onClick={handleCloseMenu}>Seemantham menu</Link></li>
            <li><Link to="/annaprasana" onClick={handleCloseMenu}>Annaprasana ceremony</Link></li>
            <li><Link to="/birthday" onClick={handleCloseMenu}>Birthday menu</Link></li>
            <li><Link to="/housebreakfast" onClick={handleCloseMenu}>House Warming breakfast menu</Link></li>
            <li><Link to="/houselunch" onClick={handleCloseMenu}>House Warming lunch menu</Link></li>
            <li><Link to="/mehndi" onClick={handleCloseMenu}>Mehndi Function menu</Link></li>
            <li><Link to="/corporate" onClick={handleCloseMenu}>Corporate menu</Link></li>
            <li><Link to="/retirement" onClick={handleCloseMenu}>Retirement Function menu</Link></li>
            <li><Link to="/live" onClick={handleCloseMenu}>Live Counter</Link></li>
            <li><Link to="/counterr" onClick={handleCloseMenu}>Counter & stalls for wedding function</Link></li>
            <li><Link to="/Rose" onClick={handleCloseMenu}>Roce Ceremony Menu</Link></li>
          </ul>
        </li>

        <li><Link to="/gallery" onClick={handleCloseMenu}>Gallery</Link></li>
       
        <li><Link to="/contact" onClick={handleCloseMenu} id="id1">Contact</Link></li>

        {/* Book Now Button */}
        <li className="book-now-btn">
        <a href="https://wa.me/9591584523" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
          <button className="book-btn" onClick={handleCloseMenu}>
            <span>Book Now</span>
            <span className="arrow-circle">→</span>
          </button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


