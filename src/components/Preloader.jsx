import React, { useState, useEffect } from 'react';
import './Preloader.css';

const criticalAssets = [
  { type: 'image', url: 'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' }
];

const Preloader = ({ onFinish }) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    let hasFinished = false;

    const finishLoading = () => {
      if (hasFinished) return;
      hasFinished = true;
      setIsFading(true);
      setTimeout(() => {
        onFinish();
      }, 500); // Wait for fade out animation
    };

    // Preload critical assets
    const loadPromises = criticalAssets.map(asset => {
      return new Promise((resolve) => {
        if (asset.type === 'image') {
          const img = new Image();
          img.src = asset.url;
          img.onload = resolve;
          img.onerror = resolve; // Resolve anyway to avoid infinite hang
        } else {
          resolve();
        }
      });
    });

    // Wait for all critical assets OR a maximum timeout of 1 second
    Promise.race([
      Promise.all(loadPromises),
      new Promise(resolve => setTimeout(resolve, 1000))
    ]).then(() => {
      finishLoading();
    });

  }, [onFinish]);

  return (
    <div className={`preloader-overlay ${isFading ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <img src="/logo.png" alt="Dharmik Caterers" className="preloader-logo" />
        <h1 className="preloader-text">Dharmik Caterers</h1>
        <div className="preloader-spinner"></div>
      </div>
    </div>
  );
};

export default Preloader;
