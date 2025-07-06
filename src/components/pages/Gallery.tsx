import React, { useState, useEffect, useCallback } from 'react';
import { galleryData } from '../../data/galleryData';

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

const getYears = (data: typeof galleryData) => {
  const years = Array.from(new Set(data.map(item => item.year))).sort((a, b) => b - a);
  return years;
};

const Gallery: React.FC<GalleryProps> = ({ autoPlay = true, autoPlayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeYear, setActiveYear] = useState<number | 'all'>('all');
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const years = getYears(galleryData);

  const images = galleryData.filter(item => item.type === 'photo');
  const filteredImages = images.filter(img =>
    (activeCategory === 'all' || img.category === activeCategory) &&
    (activeYear === 'all' || img.year === activeYear)
  );

  const videos = galleryData.filter(item => item.type === 'video' &&
    (activeCategory === 'all' || item.category === activeCategory) &&
    (activeYear === 'all' || item.year === activeYear)
  );

  const nextImage = useCallback(() => {
    setCurrentIndex(prev => prev === filteredImages.length - 1 ? 0 : prev + 1);
  }, [filteredImages.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex(prev => prev === 0 ? filteredImages.length - 1 : prev - 1);
  }, [filteredImages.length]);

  const goToImage = (index: number) => setCurrentIndex(index);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentIndex(0);
  };

  const handleYearChange = (year: number | 'all') => {
    setActiveYear(year);
    setCurrentIndex(0);
  };

  useEffect(() => {
    if (!autoPlay || isHovered || filteredImages.length <= 1) return;
    const interval = setInterval(nextImage, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, isHovered, nextImage, filteredImages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextImage, prevImage]);

  useEffect(() => {
    if (currentIndex >= filteredImages.length) {
      setCurrentIndex(Math.max(0, filteredImages.length - 1));
    }
  }, [filteredImages.length, currentIndex]);

  const getPrevIndex = () => currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
  const getNextIndex = () => currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;

  if (filteredImages.length === 0) {
    return (
      <div className="min-vh-100 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 d-flex align-items-center justify-content-center">
        <div className="text-white fs-2">No images found for this category/year</div>
      </div>
    );
  }

  return (
    <div className="min-vh-100" style={{ background: 'linear-gradient(135deg,rgb(0, 0, 0) 0%,rgb(0, 0, 0) 50%,rgb(87, 32, 32) 100%)', color: '#fff', overflow: 'hidden' }}>
      <div className="container py-5">
        <h1 className="text-center display-3 fw-bold mb-5" style={{ background: 'linear-gradient(90deg, #f472b6, #60a5fa, #34d399)', WebkitBackgroundClip: 'text', color: 'transparent', WebkitTextFillColor: 'transparent' }}>Gallery</h1>
        {/* Flex row for category (left) and year (right) */}
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap" style={{gap: 16}}>
          <div className="d-flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 rounded-pill fw-medium border-0 shadow-sm mx-1 mb-2 ${activeCategory === category.id ? 'category-active' : 'category-inactive'}`}
                style={{ minWidth: 120, fontSize: 18, position: 'relative', zIndex: 1 }}
              >
                {category.label}
              </button>
            ))}
          </div>
          <div className="d-flex flex-wrap gap-2">
            <button
              onClick={() => handleYearChange('all')}
              className={`px-3 py-1 rounded-pill border-0 mx-1 mb-2 ${activeYear === 'all' ? 'category-active' : 'category-inactive'}`}
              style={{ minWidth: 70 }}
            >All</button>
            {years.map(year => (
              <button
                key={year}
                onClick={() => handleYearChange(year)}
                className={`px-3 py-1 rounded-pill border-0 mx-1 mb-2 ${activeYear === year ? 'category-active' : 'category-inactive'}`}
                style={{ minWidth: 70 }}
              >{year}</button>
            ))}
          </div>
        </div>
        {/* Carousel section - increased size by 20% */}
        <div 
          className="position-relative d-flex align-items-center justify-content-center mx-auto mb-4"
          style={{ minHeight: 420, maxWidth: 720, perspective: 1000 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {filteredImages.length > 1 && (
            <div 
              className="position-absolute start-0 top-50 translate-middle-y d-none d-md-block"
              style={{ width: 144, height: 108, zIndex: 5, left: -72, cursor: 'pointer', filter: 'blur(2px) brightness(0.7)', transform: 'scale(0.8) rotateY(15deg)' }}
              onClick={prevImage}
            >
              <img 
                src={filteredImages[getPrevIndex()].src} 
                alt={filteredImages[getPrevIndex()].title || ''}
                className="w-100 h-100 rounded-4 object-fit-cover"
              />
            </div>
          )}
          <div 
            className="position-relative mx-2 w-100"
            style={{ maxWidth: 480, minHeight: 384, zIndex: 10 }}
          >
            <img 
              src={filteredImages[currentIndex].src} 
              alt={filteredImages[currentIndex].title || ''}
              className="w-100 h-100 rounded-4 shadow-lg object-fit-cover"
              style={{ aspectRatio: '4/3', maxHeight: 420 }}
            />
            <div className="position-absolute bottom-0 start-0 end-0 p-3" style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.7) 60%, transparent 100%)', color: '#fff', borderBottomLeftRadius: '1.5rem', borderBottomRightRadius: '1.5rem' }}>
              <h4 className="mb-1 fw-bold">{filteredImages[currentIndex].title}</h4>
              <div className="small text-white-50">{filteredImages[currentIndex].description}</div>
            </div>
          </div>
          {filteredImages.length > 1 && (
            <div 
              className="position-absolute end-0 top-50 translate-middle-y d-none d-md-block"
              style={{ width: 144, height: 108, zIndex: 5, right: -72, cursor: 'pointer', filter: 'blur(2px) brightness(0.7)', transform: 'scale(0.8) rotateY(-15deg)' }}
              onClick={nextImage}
            >
              <img 
                src={filteredImages[getNextIndex()].src} 
                alt={filteredImages[getNextIndex()].title || ''}
                className="w-100 h-100 rounded-4 object-fit-cover"
              />
            </div>
          )}
          {filteredImages.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="btn btn-light position-absolute start-0 top-50 translate-middle-y d-md-none"
                style={{ zIndex: 20, width: 40, height: 40, borderRadius: '50%' }}
                aria-label="Previous"
              >&#8592;</button>
              <button
                onClick={nextImage}
                className="btn btn-light position-absolute end-0 top-50 translate-middle-y d-md-none"
                style={{ zIndex: 20, width: 40, height: 40, borderRadius: '50%' }}
                aria-label="Next"
              >&#8594;</button>
            </>
          )}
        </div>
        {filteredImages.length > 1 && (
          <div className="d-flex justify-content-center gap-2 mb-3">
            {filteredImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`rounded-circle border-0 ${index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'}`}
                style={{ width: 12, height: 12 }}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
        <div className="text-center text-white-50 mb-5">{currentIndex + 1} / {filteredImages.length}</div>
        {/* Videos Section */}
        <h3 className="text-center mt-5 mb-3">Videos</h3>
        <div className="row g-4 justify-content-center">
          {videos.length === 0 && <div className="text-white-50 text-center">No videos for this category/year.</div>}
          {videos.map(video => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex flex-column align-items-center" key={video.title + video.year}>
              <div
                className="video-thumb rounded-4 shadow-lg overflow-hidden position-relative mb-2"
                style={{ width: '100%', maxWidth: 260, aspectRatio: '16/9', cursor: 'pointer', background: '#222' }}
                onClick={() => window.open(video.youtubeUrl, '_blank')}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
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
              <div className="fw-bold text-center">{video.title}</div>
              <div className="small text-white-50 text-center">{video.description}</div>
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
