import React, { useEffect } from 'react';
// import Button from '../ui/Button';
// import StatCard from '../ui/StatCard';
import Video from '../ui/Video';
// import { stats } from '../../data/constants';

const Hero: React.FC = () => {
  useEffect(() => {
    // Check if video exists on component mount
    const checkVideo = async () => {
      try {
        const response = await fetch('/videos/Bengaluru-Dreamin.mp4', { method: 'HEAD' });
        console.log('Video accessibility check:', response.status, response.statusText);
      } catch (error) {
        console.error('Error checking video:', error);
      }
    };
    checkVideo();
  }, []);
  return (
    <section id="home" className="position-relative min-vh-100">
      {/* Video Background */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
        <Video
          sources={[
            {
              src: '/videos/Bengaluru-Dreamin.mp4',
              type: 'video/mp4'
            }
          ]}
          width="100%"
          height="100%"
          style={{ objectFit: 'cover' }}
          autoPlay
          muted
          loop
          onError={(e) => console.error('Video error:', e)}
          onLoad={() => console.log('Video loaded successfully')}
        />
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1 
          }}
        />
      </div>

      
      {/* Why Bengaluru Dreamin Section */}
      <div className="container position-relative py-5">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <h2 className="display-4 mb-4 text-white">WHY Bengaluru Dreamin'?</h2>
            <p className="lead text-white">
              Because we're not just another tech event—we're a catalyst for transformation
              in the Salesforce ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;