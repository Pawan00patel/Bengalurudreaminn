import React from 'react';
import Video from './Video';

interface VideoBackgroundProps {
  videoSrc: string;
  overlayOpacity?: number;
  brightness?: number;
  children?: React.ReactNode;
}

// Function to check if the video file exists
const checkVideoExists = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.error('Error checking video:', error);
    return false;
  }
};

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  videoSrc,
  overlayOpacity = 0.5,
  brightness = 0.7,
  children
}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [videoExists, setVideoExists] = React.useState(false);

  // Check if video exists when component mounts
  React.useEffect(() => {
    const checkVideo = async () => {
      const exists = await checkVideoExists(videoSrc);
      console.log('Video exists:', exists, 'Path:', videoSrc);
      setVideoExists(exists);
      if (!exists) {
        setError('Video file not found');
        setIsLoading(false);
      }
    };
    checkVideo();
  }, [videoSrc]);

  React.useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleCanPlay = () => {
        console.log('Video can play');
        setIsLoading(false);
      };

      video.addEventListener('canplay', handleCanPlay);
      return () => video.removeEventListener('canplay', handleCanPlay);
    }
  }, []);

  const handleError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Video error:', e);
    const video = e.target as HTMLVideoElement;
    setError(video.error?.message || 'Error loading video');
    setIsLoading(false);
  };

  return (    <div className="position-relative min-vh-100 w-100">
      {/* Fallback Background */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100" 
        style={{ 
          zIndex: 0,
          background: 'linear-gradient(45deg, #1a1a1a, #4a4a4a)'
        }}
      />
      
      {/* Video Container */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: error ? 0 : 1 }}>
        {isLoading && (
          <div className="position-absolute top-50 start-50 translate-middle text-white">
            Loading video...
          </div>
        )}
        {error && (
          <div className="position-absolute top-50 start-50 translate-middle text-white bg-danger p-3">
            {error}
          </div>
        )}        <Video
          sources={[
            {
              src: videoSrc,
              type: 'video/mp4'
            }
          ]}
          className="position-absolute top-0 start-0"
          style={{ 
            objectFit: 'cover',
            filter: `brightness(${brightness})`,
            opacity: isLoading ? 0 : 1,
            transition: 'opacity 0.5s ease-in-out'
          }}
          onError={handleError}
          onLoad={() => setIsLoading(false)}
        />
        
        {/* Overlay */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ 
            backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
            zIndex: 1
          }}
        />
      </div>

      {/* Content */}
      <div className="position-relative w-100 h-100" style={{ zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;