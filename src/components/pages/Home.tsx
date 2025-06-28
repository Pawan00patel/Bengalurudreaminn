import React, { useEffect, useState } from 'react';
import Hero from '../sections/hero';
import Events from '../sections/Events';
import Testimonials from '../sections/Testimonials';

const Home: React.FC = () => {
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
    <main>
      <Hero />
      <Events />
     
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 1000,
            background: '#222',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            fontSize: '2rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            cursor: 'pointer',
            transition: 'opacity 0.3s',
            opacity: 0.85
          }}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </main>
  );
};

export default Home;
