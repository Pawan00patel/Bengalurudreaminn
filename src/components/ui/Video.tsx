import React, { useRef, useEffect } from 'react';

interface VideoProps {
  sources: {
    src: string;
    type: string;
  }[];
  width?: string | number;
  height?: string | number;
  autoPlay?: boolean;
  controls?: boolean;
  muted?: boolean;
  loop?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onError?: (e: React.SyntheticEvent<HTMLVideoElement, Event>) => void;
  onLoad?: () => void;
}

const Video: React.FC<VideoProps> = ({
  sources,
  width = '100%',
  height = '100%',
  autoPlay = true,
  controls = false,
  muted = true,
  loop = true,
  className = '',
  style = {},
  onError,
  onLoad
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Log any error details
    const handleError = (e: Event) => {
      const videoEl = e.target as HTMLVideoElement;
      console.error('Video error details:', {
        error: videoEl.error?.message,
        networkState: videoEl.networkState,
        readyState: videoEl.readyState,
        currentSrc: videoEl.currentSrc,
      });
    };

    video.addEventListener('error', handleError);
    return () => video.removeEventListener('error', handleError);
  }, []);

  const handleError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Video error:', e);
    onError?.(e);
  };

  const handleLoadedData = () => {
    console.log('Video loaded successfully');
    onLoad?.();
  };

  return (
    <video
      ref={videoRef}
      className={className}
      width={width}
      height={height}
      autoPlay={autoPlay}
      controls={controls}
      muted={muted}
      loop={loop}
      playsInline
      style={style}
      onError={handleError}
      onLoadedData={handleLoadedData}
    >
      {sources.map((source, index) => (
        <source key={index} src={source.src} type={source.type} />
      ))}
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
