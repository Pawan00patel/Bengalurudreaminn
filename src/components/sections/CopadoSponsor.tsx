import React from 'react';
import { Sponsor, sponsors } from '../../data/copadocon2025/sponsors';
import '../../styles/CopadoSponsor.css';

const CopadoSponsor: React.FC = () => {
  const copadoSponsor = sponsors.find(sponsor => sponsor.name === 'Copado');

  if (!copadoSponsor) return null;

  return (
    <div className="copado-sponsor">
      <div className="copado-sponsor-container">
        <a 
          href={copadoSponsor.website}
          target="_blank"
          rel="noopener noreferrer"
          className="copado-sponsor-link"
        >
          <img 
            src={copadoSponsor.logo} 
            alt={`${copadoSponsor.name} - ${copadoSponsor.tier}`}
            className="copado-sponsor-logo"
          />
          {/* <div className="copado-sponsor-info">
            <span className="copado-sponsor-tier">{copadoSponsor.tier}</span>
          </div> */}
        </a>
      </div>
    </div>
  );
};

export default CopadoSponsor;
