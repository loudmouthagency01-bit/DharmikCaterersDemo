import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Packages', path: '/packages' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Terms', path: '/terms' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logo.png" alt="Dharmik Caterers Logo" className="nav-logo-img" />
          <div className="logo-text">
            <span className="logo-dharmik">DHARMIK</span>
            <span className="logo-sub">An Exclusive Experience</span>
          </div>
        </Link>

        <nav className={`navbar-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={location.pathname === link.path ? 'active-link' : ''}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary nav-btn">Get a Quote</Link>
        </nav>

        <div className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} color="var(--primary-green)" /> : <Menu size={28} color="var(--primary-green)" />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
