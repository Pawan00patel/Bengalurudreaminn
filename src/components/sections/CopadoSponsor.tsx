import React from 'react';
import {  sponsors } from '../../data/copadocon2025/sponsors';
import '../../styles/CopadoSponsor.css';

const CopadoSponsor: React.FC = () => {
  return (
    <div className="copado-sponsor">
      <div className="copado-sponsor-container">
        {sponsors.map(sponsor => (
          <div
            key={sponsor.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '40px auto',
              gap: '18px',
              minHeight: '220px',
              width: '100%',
              maxWidth: '400px',
            }}
          >
            <h2
              style={{
                fontSize: '2rem',
                fontWeight: 700,
                marginBottom: 0,
                whiteSpace: 'nowrap',
                textAlign: 'center',
              }}
            >
              {sponsor.tier}
            </h2>
            <a
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="copado-sponsor-link"
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}
            >
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} - ${sponsor.tier}`}
                className="copado-sponsor-logo"
                style={{
                  display: 'block',
                  margin: '0 auto',
                  maxWidth: '220px',
                  height: 'auto',
                  padding: '8px 0',
                }}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CopadoSponsor;
