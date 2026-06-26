import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Clock, Utensils } from 'lucide-react';
import './Home.css';
import './Gallery.css';

const ReelVideo = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(e => console.log("Auto-play prevented", e));
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.3 }
    );

    if (videoRef.current) {
      videoRef.current.volume = 0.75;
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  };

  return (
    <video 
      ref={videoRef}
      src={src} 
      muted loop playsInline controls 
      className="reel-video"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
    </video>
  );
};

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      <section className="hero">
        <div className="hero-content">
          <img src="/logo.png" alt="Dharmik Caterers Logo" className="hero-logo" />
          <h2 className="hero-subtitle" style={{color: 'var(--gold)', letterSpacing: '2px'}}>AN EXCLUSIVE EXPERIENCE</h2>
          <h1>Where Elegance Meets Flavor</h1>
          {/* <p>Elevate your celebrations with our premium catering services. We craft unforgettable culinary experiences tailored to your most cherished moments.</p> */}
          <div className="hero-btns">
            <Link to="/packages" className="btn btn-primary">Explore Our Menu</Link>
            <Link to="/contact" className="btn btn-secondary" style={{borderColor: 'var(--cream)', color: 'var(--cream)'}}>Contact Us</Link>
          </div>
        </div>
        <div className="hero-overlay"></div>
        <img src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Catering Service" className="hero-bg" />
      </section>

      <section className="services-overview">
        <div className="page-container">
          <h2 className="section-title">Our Packages</h2>
          <div className="packages-grid">
            <div className="package-card pink">
              <h3>Delux Package</h3>
              <p>A beautifully curated menu for a delightful dining experience.</p>
              <Link to="/packages#delux-package" className="btn-secondary card-btn">Explore</Link>
            </div>
            <div className="package-card green">
              <h3>Premium Package</h3>
              <p>Our most popular choice featuring live counters and rich desserts.</p>
              <Link to="/packages#premium-package" className="btn-secondary card-btn">Explore</Link>
            </div>
            <div className="package-card gold">
              <h3>Gold Package</h3>
              <p>The ultimate luxury spread including a special mocktail bar and international cuisine.</p>
              <Link to="/packages#gold-package" className="btn-secondary card-btn">Explore</Link>
            </div>
            <div className="package-card silver">
              <h3>Silver Package</h3>
              <p>An elegant menu balancing traditional favorites with premium selections.</p>
              <Link to="/packages#silver-package" className="btn-secondary card-btn">Explore</Link>
            </div>
            <div className="package-card diamond">
              <h3>Diamond Package</h3>
              <p>Our most extravagant offering, featuring a grand array of live counters and special bars.</p>
              <Link to="/packages#diamond-package" className="btn-secondary card-btn">Explore</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="reels-section">
        {/* Abstract Decorative Shapes */}
        <div className="reel-shape shape-a"></div>
        <div className="reel-shape shape-b"></div>
        <div className="reel-shape shape-c"></div>

        <div className="page-container">
          <h2 className="section-title">Experience Dharmik</h2>
          <div className="reels-grid">
            <div className="reel-card">
              <ReelVideo src="/reels/VID-20260619-WA0003.mp4" />
            </div>
            <div className="reel-card">
              <ReelVideo src="/reels/VID-20260619-WA0004.mp4" />
            </div>
            <div className="reel-card">
              <ReelVideo src="/reels/VID-20260621-WA0008.mp4" />
            </div>
          </div>
        </div>
      </section>

      <section className="expertise-section">
        <div className="page-container">
          <div className="expertise-content">
            <h2 className="section-title">The Art of Catering</h2>
            <p className="expertise-text">
              With decades of experience, Dharmik Caterers has perfected the art of serving thousands with the same warmth and quality as a private dinner. We specialize in mega-events, seamlessly managing food for 1000+ guests while maintaining impeccable standards.
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
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-container text-center">
          <h2>Ready To Host An Unforgettable Event?</h2>
          <p>Let us turn your next occasion into a true feast for the senses.</p>
          <Link to="/contact" className="btn btn-primary cta-btn">Get Your Custom Quote</Link>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="gallery-preview-section">
        <div className="page-container">
          <h2 className="section-title">A Glimpse Into Our Events</h2>
          <div className="gallery-grid">
            {[
              "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1547496502-affa22d38842?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ].map((src, index) => (
              <Link to="/gallery" key={index} className="gallery-item" style={{ display: 'block' }}>
                <img src={src} alt={`Catering display ${index + 1}`} />
                <div className="gallery-overlay">
                  <span>View</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
