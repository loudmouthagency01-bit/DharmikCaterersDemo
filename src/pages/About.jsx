import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page page-container animate-fade-in">
      <h1 className="section-title">About Us</h1>
      
      <div className="about-content">
        <div className="about-image">
          {/* Placeholder for Thali image */}
          <img src="https://images.unsplash.com/photo-1626779848529-688dd6a804ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Traditional Thali" />
        </div>
        
        <div className="about-text">
          <div className="mission-vision-box">
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
      </div>

      <div className="core-values">
        <h2>Core Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <div className="value-icon">🏅</div>
            <h3>Quality Assit</h3>
          </div>
          <div className="value-item">
            <div className="value-icon">⏱️</div>
            <h3>Timely Service</h3>
          </div>
          <div className="value-item">
            <div className="value-icon">🧼</div>
            <h3>Hygiene & Safety</h3>
          </div>
          <div className="value-item">
            <div className="value-icon">🥘</div>
            <h3>Authentic Taste</h3>
          </div>
          <div className="value-item">
            <div className="value-icon">💡</div>
            <h3>Innovation</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
