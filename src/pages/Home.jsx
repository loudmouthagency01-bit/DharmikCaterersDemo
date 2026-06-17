import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      <section className="hero">
        <div className="hero-content">
          <h1>An Exclusive<br/>Culinary Experience</h1>
          <p>We bring traditional taste and modern presentation together to create memorable celebrations.</p>
          <div className="hero-btns">
            <Link to="/packages" className="btn btn-primary">View Menus</Link>
            <Link to="/contact" className="btn btn-secondary" style={{borderColor: 'var(--cream)', color: 'var(--cream)'}}>Book Now</Link>
          </div>
        </div>
        <div className="hero-overlay"></div>
        {/* Placeholder image for hero */}
        <img src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Catering Service" className="hero-bg" />
      </section>

      <section className="page-container services-overview">
        <h2 className="section-title">Our Premium Packages</h2>
        <div className="packages-grid">
          <div className="package-card pink">
            <h3>Delux Package</h3>
            <p>A beautifully curated menu for a delightful dining experience.</p>
            <Link to="/packages" className="btn-secondary card-btn">Explore</Link>
          </div>
          <div className="package-card green">
            <h3>Premium Package</h3>
            <p>Our most popular choice featuring live counters and rich desserts.</p>
            <Link to="/packages" className="btn-secondary card-btn">Explore</Link>
          </div>
          <div className="package-card gold">
            <h3>Gold Package</h3>
            <p>The ultimate luxury spread including a special mocktail bar and international cuisine.</p>
            <Link to="/packages" className="btn-secondary card-btn">Explore</Link>
          </div>
        </div>
      </section>

      <section className="expertise-section page-container">
        <div className="expertise-content">
          <h2 className="section-title">Our Expertise</h2>
          <p className="expertise-text">
            With over <strong>20 years of experience</strong> in the catering industry, our team of award-winning chefs brings a wealth of creativity and expertise to the table. We specialize in bespoke catering services, ranging from intimate private dinners and elegant weddings to grand corporate galas and community festivals.
          </p>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>20+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>1000+</h3>
              <p>Events Hosted</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-container text-center">
          <h2>Ready To Host An Unforgettable Event?</h2>
          <p>Let us turn your next occasion into a true feast for the senses.</p>
          <Link to="/contact" className="btn btn-primary cta-btn">Get Your Custom Quote</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
