import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import menuBar from '../assets/icons/icons8-menu-50.png';
import '../styles/Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function openMenu() {
    setMenuOpen((prev) => !prev);
  }

  // Function to close the menu if clicked outside
  useEffect(() => {
    function handleOutsideClick(event) {
      // Check if the click is outside the menu
      if (!event.target.closest('.navigation') && !event.target.closest('.openMenu')) {
        setMenuOpen(false); // Close the menu if clicked outside
      }
    }

    // Add click event listener when menu is open
    if (menuOpen) {
      document.addEventListener('click', handleOutsideClick);
    }

    // Cleanup event listener on unmount or when menuOpen state changes
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Primary Navigation */}
      <div className="nav">
        <ul>
          <li><Link to="/bordire/">HOME</Link></li>
          <li><Link to="/Services">SERVICES</Link></li>
          <li><Link to="/">ABOUT</Link></li>
          <li><Link to="/">WHY CHOOSE US</Link></li>
          <li><Link to="/">CONTACT</Link></li>
        </ul>
      </div>

      {/* Menu Icon for Toggling */}
      <div className="openMenu" onClick={openMenu}>
        <img src={menuBar} alt="Menu Icon" />
      </div>

      {/* Dropdown Navigation Menu */}
      <div className={`navigation ${menuOpen ? 'visible' : 'hidden'}`}>
        <div className="navLinks">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/whyUs">Why Choose Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
