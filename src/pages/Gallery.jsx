import React, { useEffect, useRef } from 'react';
import './Gallery.css';

const GalleryVideo = ({ src }) => {
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
      className="centerpiece-video"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
    </video>
  );
};

const Gallery = () => {
  const images = [
    "/WhatsApp Image 2026-06-20 at 1.36.25 PM (1).jpeg",
    "/WhatsApp Image 2026-06-20 at 1.36.25 PM.jpeg",
    "/WhatsApp Image 2026-06-20 at 1.36.26 PM (1).jpeg",
    "/WhatsApp Image 2026-06-20 at 1.36.26 PM.jpeg",
    "/WhatsApp Image 2026-06-20 at 1.36.27 PM (1).jpeg",
    "/WhatsApp Image 2026-06-20 at 1.36.27 PM (2).jpeg",
    "/WhatsApp Image 2026-06-20 at 1.36.27 PM.jpeg",
    "/WhatsApp Image 2026-06-20 at 1.41.02 PM.jpeg",
    "/WhatsApp Image 2026-06-20 at 1.41.03 PM (1).jpeg",
    "/WhatsApp Image 2026-06-20 at 1.41.03 PM.jpeg",
    "/WhatsApp Image 2026-06-20 at 1.41.04 PM.jpeg",
    "/ai_images/luxury_catering_display_1782061133933.png",
    "/ai_images/exquisite_dessert_spread_1782061148442.png"
  ];

  return (
    <div className="gallery-page page-container animate-fade-in relative-page">
      
      {/* Background Abstract Shapes */}
      <div className="abstract-shape shape-1"></div>
      <div className="abstract-shape shape-2"></div>
      <div className="abstract-shape shape-3"></div>

      <div className="gallery-header">
        <h1 className="section-title">A Visual Feast</h1>
        <p className="text-center mb-4">Every dish tells a story. Step into our world of culinary artistry.</p>
        
        {/* SVG Scribble Decoration */}
        <div className="scribble-container">
          <svg className="scribble-line" viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,10 Q50,-10 100,10 T200,10" fill="none" stroke="var(--primary-orange)" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      
      <div className="gallery-video-centerpiece" style={{ marginTop: '0', marginBottom: '80px' }}>
        <div className="video-abstract-bg"></div>
        <GalleryVideo src="/HorizontalVideos/VID-20260621-WA0009.mp4" />
        
        {/* SVG highlight overlay */}
        <svg className="video-highlight" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
           <circle cx="50" cy="50" r="45" fill="none" stroke="var(--gold)" strokeWidth="2" strokeDasharray="10, 10" />
        </svg>
      </div>

      <div className="css-masonry">
        {images.map((src, idx) => (
          <div key={idx} className={`masonry-item img-card offset-${idx % 3}`}>
            <img src={src} alt={`Catering preview ${idx + 1}`} />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Gallery;
