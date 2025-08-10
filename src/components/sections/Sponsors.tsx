import React, { useState } from 'react';
import Marquee from "react-fast-marquee";
import '../../styles/Sponsors.css';
import { sponsorsData } from '../../data/sponsorsData';
import SponsorModal from './SponsorModal';

const Sponsors: React.FC = () => {
  const [selectedSponsor, setSelectedSponsor] = useState<typeof sponsorsData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSponsorClick = (sponsor: typeof sponsorsData[0]) => {
    setSelectedSponsor(sponsor);
    setIsModalOpen(true);
  };

  return (
    <div id="sponsors" className="sponsors">
      <div className="sponsorsContainer">
        <div className="sponsor--scroll">
          <Marquee 
            gradient={false} 
            speed={60} 
            pauseOnHover={true}
            pauseOnClick={true} 
            delay={0}
            play={true} 
            direction="left"
          >
            {sponsorsData.map((sponsor, id) => (
              <div
                className="sponsor--box"
                key={id}
                onClick={() => handleSponsorClick(sponsor)}
                style={{ textDecoration: 'none', cursor: 'pointer' }}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleSponsorClick(sponsor);
                  }
                }}
              >
                <img src={sponsor.logo} alt={sponsor.name} />
                <h3>{sponsor.name}</h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <SponsorModal
        sponsor={selectedSponsor}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Sponsors;
