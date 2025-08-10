import React, { useState, useEffect } from 'react';
import '../../styles/Sponsors.css';
import { sponsorsData } from '../../data/sponsorsData';
import SponsorModal from '../sections/SponsorModal';

const groupedSponsors: { [key: string]: any[] } = {
  diamond: [],
  silver: [],
  bronze: [],
  associate: [],
};
sponsorsData.forEach((sponsor) => {
  if (sponsor.tier && groupedSponsors[sponsor.tier]) {
    groupedSponsors[sponsor.tier].push(sponsor);
  } else {
    groupedSponsors.associate.push(sponsor);
  }
});

interface SponsorSectionProps {
  title: string;
  sponsors: typeof sponsorsData;
  onSponsorClick: (sponsor: typeof sponsorsData[0]) => void;
}

const SponsorSection: React.FC<SponsorSectionProps> = ({ title, sponsors, onSponsorClick }) => {
  return (
    <div className="sponsor-section">
      <h3 className="sponsor-tier-heading">{title}</h3>
      <div className="sponsor-card-row">
        {sponsors.map((sponsor, i) => {
          const cardId = `sponsor-card-${sponsor.name.replace(/\s+/g, '')}`;
          return (
            <div className="sponsor-card" key={i} id={cardId}>
              <button
                className="sponsor-link-btn"
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                onClick={() => onSponsorClick(sponsor)}
                aria-label={sponsor.name}
              >
                <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};


const SponsorsPage: React.FC = () => {
  const [selectedSponsor, setSelectedSponsor] = useState<typeof sponsorsData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSponsorClick = (sponsor: typeof sponsorsData[0]) => {
    setSelectedSponsor(sponsor);
    setIsModalOpen(true);
  };

  useEffect(() => {
    // Restore scroll to sponsor card if available
    const cardId = sessionStorage.getItem('sponsorsPageCardId');
    if (cardId) {
      const el = document.getElementById(cardId);
      if (el) {
        el.scrollIntoView({ behavior: 'auto', block: 'center' });
      }
      sessionStorage.removeItem('sponsorsPageCardId');
    } else {
      // fallback to previous scroll position if any
      const scroll = sessionStorage.getItem('sponsorsPageScroll');
      if (scroll) {
        window.scrollTo({ top: parseInt(scroll, 10), behavior: 'auto' });
        sessionStorage.removeItem('sponsorsPageScroll');
      }
    }
  }, []);

  return (
    <div className="sponsors-page-bg">
      <div className="container py-5">
        <SponsorSection 
          title="DIAMOND SPONSORS" 
          sponsors={groupedSponsors.diamond} 
          onSponsorClick={handleSponsorClick}
        />
        <SponsorSection 
          title="SILVER SPONSORS" 
          sponsors={groupedSponsors.silver} 
          onSponsorClick={handleSponsorClick}
        />
        <SponsorSection 
          title="BRONZE SPONSORS" 
          sponsors={groupedSponsors.bronze} 
          onSponsorClick={handleSponsorClick}
        />
        <SponsorSection 
          title="ASSOCIATE SPONSORS" 
          sponsors={groupedSponsors.associate} 
          onSponsorClick={handleSponsorClick}
        />
      </div>
      <SponsorModal
        sponsor={selectedSponsor}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default SponsorsPage;
