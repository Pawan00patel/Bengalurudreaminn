import React, { useEffect } from 'react';
import Video from '../ui/Video';

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
    <section id="home" className="position-relative min-vh-100 p-0 m-0" style={{overflow: 'hidden', marginBottom: '0'}}>
      {/* Video Background */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 0, minHeight: '100vh', minWidth: '100vw', overflow: 'hidden', pointerEvents: 'none', marginBottom: '0' }}>
        <Video
          sources={[
            {
              src: '/videos/Bengaluru-Dreamin.mp4',
              type: 'video/mp4'
            }
          ]}
          width="100%"
          height="100%"
          style={{ objectFit: 'cover', width: '100vw', height: '100vh', marginBottom: '0' }}
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
            zIndex: 1,
            marginBottom: '0' 
          }}
        />
      </div>

      
      {/* Why Bengaluru Dreamin Section */}
      <div className="container position-absolute top-50 start-50 translate-middle" style={{ zIndex: 2 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-8 text-center">
            <h2 className="display-4 mb-4 text-white">WHY Bengaluru Dreamin'?</h2>
            <p className="lead text-white">
              Because we're not just another tech event—we're a catalyst for transformation
              in the Salesforce ecosystem.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action at Bottom
      <div style={{position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 3}}>
        <div className="w-100 py-5" style={{background: '#0a74ff'}}>
          <div className="container text-center">
            <h2 className="fw-bold display-4 text-white mb-3">Ready to Join the Carnival?</h2>
            <p className="lead text-dark mb-4">
              Be part of a movement that's shaping the future of the Salesforce ecosystem. Come, Network, Learn and Have Fun!
            </p>
            <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
              <a href="#register" className="btn btn-light btn-lg rounded-pill px-5 fw-semibold mb-2 mb-md-0">Register Now</a>
              <a href="#schedule" className="btn btn-outline-light btn-lg rounded-pill px-5 fw-semibold">View Schedule</a>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;