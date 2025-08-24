import React, { useState } from 'react';
import { galleryData } from '../../data/galleryData';
import GalleryLightbox from '../ui/GalleryLightbox';

interface GalleryProps {
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const categories = [
  { id: 'all', label: 'All' },
  { id: 'Conferences', label: 'Conferences' },
  { id: 'Roadshows', label: 'Roadshows' },
  { id: 'Workshops', label: 'Workshops' }
];

const Gallery: React.FC<GalleryProps> = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const images = galleryData.filter(item => item.type === 'photo');
  const filteredImages = images.filter(img =>
    (activeCategory === 'all' || img.category === activeCategory)
  );
  const videos = galleryData.filter(item => item.type === 'video' &&
    (activeCategory === 'all' || item.category === activeCategory)
  );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);
  const nextLightbox = () => setLightboxIndex(i => Math.min(filteredImages.length - 1, i + 1));
  const prevLightbox = () => setLightboxIndex(i => Math.max(0, i - 1));

  return (
    <div className="min-vh-100" 
       style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '120px',
        padding: '3vw 0',
        width: '100%',
        background: 'radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)',
      }}>
      <div className="container py-5">
        <div className="d-flex flex-wrap gap-2 mb-4">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-pill fw-medium border-0 shadow-sm mx-1 mb-2 ${activeCategory === category.id ? 'category-active' : 'category-inactive'}`}
              style={{ minWidth: 120, fontSize: 18, position: 'relative', zIndex: 1 }}
            >
              {category.label}
            </button>
          ))}
        </div>
        {/* Gallery grid */}
        <div className="row g-4 justify-content-center">
          {filteredImages.length === 0 && <div className="text-white fs-2">No images found for this category</div>}
          {filteredImages.map((img, idx) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex flex-column align-items-center" key={img.src}>
              <div
                className="gallery-thumb rounded-4 shadow-lg overflow-hidden position-relative mb-2"
                style={{ width: '100%', maxWidth: 260, aspectRatio: '4/3', cursor: 'pointer', background: '#222' }}
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={img.src}
                  alt={img.src}
                  className="w-100 h-100 object-fit-cover"
                  style={{ filter: 'brightness(0.85)' }}
                />
              </div>
              {/* Removed title and description */}
            </div>
          ))}
        </div>
        {lightboxOpen && (
          <GalleryLightbox
            items={filteredImages as Array<{ src: string; type: 'photo' | 'video'; thumbnail?: string; youtubeUrl?: string }>}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevLightbox}
            onNext={nextLightbox}
          />
        )}
        {/* Videos Section */}
        <h3 className="text-center mt-5 mb-3">Videos</h3>
        <div className="row g-4 justify-content-center">
          {videos.length === 0 && <div className="text-white-50 text-center">No videos for this category.</div>}
          {videos.map(video => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex flex-column align-items-center" key={video.src}>
              <div
                className="video-thumb rounded-4 shadow-lg overflow-hidden position-relative mb-2"
                style={{ width: '100%', maxWidth: 260, aspectRatio: '16/9', cursor: 'pointer', background: '#222' }}
                onClick={() => window.open(video.youtubeUrl, '_blank')}
              >
                <img
                  src={video.thumbnail}
                  alt={video.src}
                  className="w-100 h-100 object-fit-cover"
                  style={{ filter: 'brightness(0.85)' }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ background: 'rgba(0,0,0,0.35)' }}>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="rgba(0,0,0,0.5)" />
                    <polygon points="20,16 34,24 20,32" fill="#fff" />
                  </svg>
                </div>
              </div>
              {/* Removed title and description */}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .category-active {
          background: rgba(0,0,0,0.7) !important;
          color: #fff !important;
          box-shadow: 0 2px 12px 0 rgba(0,0,0,0.12);
          backdrop-filter: blur(8px);
        }
        .category-inactive {
          background: rgba(0,0,0,0.2) !important;
          color: #fff !important;
          transition: background 0.2s;
        }
        .category-inactive:hover {
          background: rgba(0,0,0,0.5) !important;
          color: #fff !important;
          backdrop-filter: blur(8px);
        }
      `}</style>
    </div>
  );
};

export default Gallery;
