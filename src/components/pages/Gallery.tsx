import React, { useState } from 'react';

const galleryImages = [
  '/images/coreteamandfounders/Akshay-1-scaled.jpg',
  '/images/coreteamandfounders/Sesha-bro-dp.jpg',
  '/images/coreteamandfounders/Sukesh-1-1.jpg',
  '/images/coreteamandfounders/Aish-scaled.jpg',
  '/images/coreteamandfounders/IMG_20230923_094227.jpg',
  '/images/coreteamandfounders/Sudeer-1-2.png',
  '/images/coreteamandfounders/Screenshot 2023-05-29 062920.png',
  '/images/logos/New-Dreamin-Logo-White.png',
  // Add more image paths as needed
];

const galleryVideos = [
  '/videos/Bengaluru-Dreamin.mp4',
  // Add more video paths as needed
];

const Gallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Gallery</h1>
      <h4 className="mb-3">Photos</h4>
      <div className="row g-3 justify-content-center">
        {galleryImages.map((src, idx) => (
          <div className="col-6 col-md-4 col-lg-3" key={src}>
            <div
              className="gallery-thumb rounded shadow-sm overflow-hidden position-relative"
              style={{ cursor: 'pointer', transition: 'transform 0.3s', transform: activeIndex === idx ? 'scale(1.05)' : 'scale(1)' }}
              onMouseEnter={() => setActiveIndex(idx)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <img
                src={src}
                alt="Gallery"
                className="w-100 h-100"
                style={{ objectFit: 'cover', aspectRatio: '1/1', transition: 'filter 0.4s', filter: activeIndex === idx ? 'brightness(0.85)' : 'brightness(1)' }}
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                style={{ background: activeIndex === idx ? 'rgba(0,0,0,0.2)' : 'transparent', transition: 'background 0.4s' }}
              >
                {activeIndex === idx && <span className="text-white fs-4 fw-bold"></span>}
              </div>
            </div>
          </div>
        ))}
      </div>
      <h4 className="mt-5 mb-3">Videos</h4>
      <div className="row g-3 justify-content-center">
        {galleryVideos.map((src, idx) => (
          <div className="col-12 col-md-8" key={src}>
            <div className="ratio ratio-16x9 rounded shadow overflow-hidden">
              <video controls poster="/images/logos/New-Dreamin-Logo-White.png" style={{ width: '100%', height: '100%' }}>
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
