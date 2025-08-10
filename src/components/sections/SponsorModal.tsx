import React from 'react';
import '../../styles/SponsorModal.css';

interface SponsorModalProps {
  sponsor: {
    name: string;
    logo: string;
    description: string;
    linkedin: string;
    twitter: string;
    instagram: string;
    youtube: string;
    tier: string;
    url: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const SponsorModal: React.FC<SponsorModalProps> = ({ sponsor, isOpen, onClose }) => {
  // Close on escape key
  React.useEffect(() => {
    if (isOpen) {
      const handleEsc = (event: KeyboardEvent) => {
        if (event.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [isOpen, onClose]);

  // Handle click outside
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  // Manage focus when modal opens
  React.useEffect(() => {
    if (isOpen) {
      // Save previous active element
      const previousActiveElement = document.activeElement;
      // Set focus to close button
      const closeButton = document.getElementById('modal-close-button');
      closeButton?.focus();

      return () => {
        // Restore focus when modal closes
        if (previousActiveElement instanceof HTMLElement) {
          previousActiveElement.focus();
        }
      };
    }
  }, [isOpen]);

  if (!sponsor || !isOpen) return null;

  
  return (
    <div 
      className={`sponsor-modal-overlay ${isOpen ? 'active' : ''}`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="sponsor-modal-content"
        role="document"
      >
        <button
          id="modal-close-button"
          className="sponsor-modal-close"
          onClick={onClose}
          aria-label="Close dialog"
        >
          ×
        </button>
        <div className="sponsor-modal-header">
          <h2 id="modal-title" className="sponsor-modal-title">{sponsor.name}</h2>
          <div className="sponsor-modal-tier">
            {sponsor.tier && <span className={`sponsor-tier-badge ${sponsor.tier}`}>{sponsor.tier.toUpperCase()} SPONSOR</span>}
          </div>
        </div>
        <div className="sponsor-modal-body">
          <img src={sponsor.logo} alt={sponsor.name} className="sponsor-modal-logo" />
          <p className="sponsor-modal-description">{sponsor.description}</p>
         
        
          <div className="sponsor-modal-social">
            {sponsor.linkedin && (
              <a href={sponsor.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            )}
            {sponsor.twitter && (
              <a href={sponsor.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            )}
            {sponsor.instagram && (
              <a href={sponsor.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            )}
            {sponsor.youtube && (
              <a href={sponsor.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorModal;
