import React from 'react';
import './Gallery.css';

const Gallery = () => {
  // Placeholder images for gallery
  const images = [
    "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1547496502-affa22d38842?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <div className="gallery-page page-container animate-fade-in">
      <h1 className="section-title">Our Gallery</h1>
      <p className="text-center mb-4">A glimpse into our exquisite food presentations and catering setups.</p>
      
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Catering display ${index + 1}`} />
            <div className="gallery-overlay">
              <span>View</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
