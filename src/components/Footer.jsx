import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section brand">
          <div className="logo-text footer-logo">
            <span className="logo-dharmik">DHARMIK</span>
            <span className="logo-sub">An Exclusive Experience</span>
          </div>
          <p className="footer-desc">
            Redefining catering by combining creativity, quality ingredients, and modern presentation.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon"><Facebook size={20} /></a>
            <a href="#" className="social-icon"><Instagram size={20} /></a>
            <a href="#" className="social-icon"><Twitter size={20} /></a>
          </div>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/packages">Our Packages</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Info</h3>
          <ul>
            <li><MapPin size={18} /> <span>Ahmedabad , Gujarat.</span></li>
            <li><Phone size={18} /> <span>+91 94090 77980</span></li>
            <li><Mail size={18} /> <span>dharmikcaterers@gmail.com</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Dharmik Caterers. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
