import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page page-container animate-fade-in">
      <h1 className="section-title">About Us</h1>
      
      {/* Our Story Section */}
      <div className="about-content">
        <div className="about-image-wrapper">
          <img src="/WhatsApp Image 2026-06-20 at 1.41.02 PM.jpeg" alt="Catering Service" className="about-image-circle" />
        </div>
        
        <div className="about-text-box">
          <h2>Our Story</h2>
          <p>
            Welcome to <strong>Dharmik Caterers</strong>, where every event is a culinary journey crafted just for you. We believe that exceptional food is the heart of any gathering, and our passion lies in transforming your vision into an unforgettable gastronomic experience.
          </p>
          <br/>
          <p>
            We specialize in bespoke catering services, ranging from intimate private dinners and elegant weddings to grand corporate galas and community festivals. With an expertise of more than <strong>20 years</strong> in this industry, our team of award-winning chefs brings a wealth of creativity to the table.
          </p>
          <br/>
          <p>
            We master a diverse array of cuisines while excelling in innovative modern culinary techniques. Beyond exquisite food, our dedicated professional staff works tirelessly to handle every detail. Think fresh and delicious food with stunning presentation and professional service that makes everything feel effortless.
          </p>
          <br/>
          <p>
            We pride ourselves on creating menus that are not only delicious but also reflect your personal taste, dietary needs, and the unique theme of your celebration. With Dharmik Caterers, you are not just getting a meal, you are getting a meticulously created experience designed to delight your senses and leave a lasting impression on your guests.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="mission-vision-section">
        <div className="mv-card">
          <div className="mv-header">
            <span className="mv-icon">🎯</span>
            <h2>OUR MISSION</h2>
          </div>
          <p>
            Our mission is to serve delicious, fresh, and hygienic food with traditional taste and modern presentation, ensuring every event is handled with care, discipline, and customer satisfaction.
          </p>
        </div>
        
        <div className="mv-card">
          <div className="mv-header">
            <span className="mv-icon">👁️</span>
            <h2>OUR VISION</h2>
          </div>
          <p>
            To redefine catering by combining creativity, quality ingredients, and modern presentation that brings people together and creates memorable celebrations for every occasion.
          </p>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="core-values">
        <h2>Core Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <div className="value-icon">🍲</div>
            <h3>Quality Food</h3>
          </div>
          <div className="value-item">
            <div className="value-icon">🤵</div>
            <h3>Professional Service</h3>
          </div>
          <div className="value-item">
            <div className="value-icon">🥗</div>
            <h3>Best Presentation</h3>
          </div>
          <div className="value-item">
            <div className="value-icon">✨</div>
            <h3>Pure & Hygienic</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
