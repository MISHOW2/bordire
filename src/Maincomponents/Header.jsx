import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import menuBar from '../assets/icons/icons8-menu-50.png';
import '../styles/Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  let lastScrollY = 0;

  function openMenu() {
    setMenuOpen((prev) => !prev);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsHidden(true);
      } else {
        // Scrolling up
        setIsHidden(false);
      }
      lastScrollY = window.scrollY;
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${isHidden ? 'hidden' : ''}`}>
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
