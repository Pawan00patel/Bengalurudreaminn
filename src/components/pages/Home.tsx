import React, { useEffect, useState } from 'react';
// import Hero from '../sections/hero';
import AnimatedStats from '../sections/AnimatedStats';
import UpcomingEventsComponent from './UpcomingEventsComponent';
import HomepageCTA from './HomepageCTA';



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
      {/* <Hero /> */}
      <HomepageCTA />
      <AnimatedStats />
      <UpcomingEventsComponent />
     
     
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
    </main>
  );
};

export default Home;
