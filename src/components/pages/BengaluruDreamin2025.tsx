import React, { useEffect, useState } from 'react';
import Footer from '../layout/Footer';

import BengaluruDreaminNavbar from '../layout/BengaluruDreaminNavbar';
import Hero from '../sections/hero';
import Speakers from '../sections/Speakers';
import OurTeam from '../pages/OurTeam';
import Gallery from '../pages/Gallery';
import Blog from '../sections/Blog';
import SponsorsPage from '../pages/SponsorsPage';
import AgendaPDFViewer from '../sections/AgendaPDFViewer';
import '../../styles/BengaluruDreamin2025.css';

const BengaluruDreamin2025: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <BengaluruDreaminNavbar />
      <div className="min-h-screen">
        <BengaluruDreaminNavbar />
        {/* Hero Section */}
        <Hero />
        {/* Content Sections */}
        <section id="speakers" className="section">
          <div className="section-container">
            <h2 className="section-title">Featured Speakers</h2>
            <Speakers />
          </div>
        </section>
        <section id="agenda" className="section section-dark">
          <div className="section-container">
            <h2 className="section-title">Event Agenda</h2>
            <AgendaPDFViewer />
          </div>
        </section>
        <section id="our-team" className="section">
          <div className="section-container">
            <h2 className="section-title">Our Team</h2>
            <OurTeam />
          </div>
        </section>
        <section id="gallery" className="section section-dark">
          <div className="section-container">
            <h2 className="section-title">Gallery</h2>
            <Gallery />
          </div>
        </section>
        <section id="blog" className="section">
          <div className="section-container">
            <h2 className="section-title">Latest Updates</h2>
            <Blog />
          </div>
        </section>
        <section id="sponsors" className="section section-dark">
          <div className="section-container">
            <h2 className="section-title">Our Sponsors</h2>
            <SponsorsPage />
          </div>
        </section>
        <Footer />
        {showScrollTop && (
          <button
            onClick={handleScrollToTop}
            style={{
              position: 'fixed',
              bottom: '2rem',
              right: '2rem',
              zIndex: 1000,
              background: 'grey',
              color: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              fontSize: '2rem',
              boxShadow: '0 2px 8px rgba(177, 169, 169, 0.2)',
              cursor: 'pointer',
              transition: 'opacity 0.3s',
              opacity: 0.85
            }}
            aria-label="Scroll to top"
          >
            ↑
          </button>
        )}
      </div>
    </div>
  );
};

export default BengaluruDreamin2025;
