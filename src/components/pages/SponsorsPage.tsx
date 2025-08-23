import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Sponsors.css';
import { sponsorsData } from '../../data/sponsorsData';

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
}

const SponsorSection: React.FC<SponsorSectionProps> = ({ title, sponsors }) => {
  return (
    <div className="sponsor-section">
      <h3 className="sponsor-tier-heading">{title}</h3>
      <div className="sponsor-card-row">
        {sponsors.map((sponsor, i) => {
          const cardId = `sponsor-card-${sponsor.name.replace(/\s+/g, '')}`;
          // Extract sponsorId from sponsor.url
          const sponsorId = sponsor.url.split('/').pop();
          return (
            <div className="sponsor-card" key={i} id={cardId}>
              <Link
                className="sponsor-link-btn"
                to={`/BengaluruDreamin2025/event-founders/sponsors/${sponsorId}`}
                aria-label={sponsor.name}
                style={{ display: 'block' }}
              >
                <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};


const SponsorsPage: React.FC = () => {
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
        />
        <SponsorSection 
          title="SILVER SPONSORS" 
          sponsors={groupedSponsors.silver}
        />
        <SponsorSection 
          title="BRONZE SPONSORS" 
          sponsors={groupedSponsors.bronze}
        />
        <SponsorSection 
          title="ASSOCIATE SPONSORS" 
          sponsors={groupedSponsors.associate}
        />
      </div>
    </div>
  );
};

export default SponsorsPage;
