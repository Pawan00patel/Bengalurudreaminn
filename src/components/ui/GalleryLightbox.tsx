import React from 'react';

interface GalleryLightboxProps {
  items: Array<{ src: string; type: 'photo' | 'video'; thumbnail?: string; youtubeUrl?: string }>;
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const GalleryLightbox: React.FC<GalleryLightboxProps> = ({ items, currentIndex, onClose, onPrev, onNext }) => {
  const item = items[currentIndex];
  if (!item) return null;

  return (
    <div className="gallery-lightbox-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.85)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="gallery-lightbox-content" style={{ position: 'relative', background: '#fff', borderRadius: 8, padding: 24, maxWidth: 700, width: '90vw', boxShadow: '0 2px 16px rgba(0,0,0,0.15)' }}>
        <div style={{ position: 'absolute', top: 16, right: 16, zIndex: 2 }}>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: 28, cursor: 'pointer' }} aria-label="Close">&times;</button>
        </div>
        <div style={{ textAlign: 'center', position: 'relative' }}>
          {item.type === 'photo' ? (
            <>
              <img src={item.src} alt={item.src} style={{ maxWidth: '100%', maxHeight: '60vh', borderRadius: 8 }} />
              <a href={item.src} download style={{ position: 'absolute', bottom: 16, right: 16, background: 'rgba(0,0,0,0.5)', borderRadius: '50%', padding: 8, color: '#fff', textDecoration: 'none' }} title="Download">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M12 16l4-5h-3V4h-2v7H8l4 5zm-8 2v2h16v-2H4z"/></svg>
              </a>
            </>
          ) : (
            <iframe
              width="560"
              height="315"
              src={item.youtubeUrl}
              title={item.src}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: 8 }}
            />
          )}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24 }}>
          <button onClick={onPrev} disabled={currentIndex === 0} style={{ padding: '8px 24px', fontSize: 16, borderRadius: 4, background: '#222', color: '#fff', border: 'none', cursor: 'pointer' }}>&lt; Previous</button>
          <button onClick={onNext} disabled={currentIndex === items.length - 1} style={{ padding: '8px 24px', fontSize: 16, borderRadius: 4, background: '#222', color: '#fff', border: 'none', cursor: 'pointer' }}>Next &gt;</button>
        </div>
      </div>
    </div>
  );
};

export default GalleryLightbox;
