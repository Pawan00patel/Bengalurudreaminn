import React from 'react';

interface SponsorDetailProps {
  name: string;
  logo: string;
  description: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
}

const iconStyle = { width: 28, height: 28 };

const SponsorDetail: React.FC<SponsorDetailProps> = ({ name, logo, description, linkedin, twitter, instagram, youtube }) => {
  return (
    <div className="sponsor-detail" style={{ maxWidth: 700, margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={logo} alt={name} style={{ width: 180, height: 90, objectFit: 'contain', marginBottom: 24 }} />
        <h2 style={{ fontSize: '2rem', marginBottom: 16 }}>{name}</h2>
        <p style={{ fontSize: '1.1rem', color: '#333', textAlign: 'center', lineHeight: 1.7 }}>{description}</p>
        {(linkedin || twitter || instagram || youtube) && (
          <div style={{ marginTop: 24, display: 'flex', gap: 24 }}>
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src="/images/socialmediaicons/icons8-linkedin-48.png" alt="LinkedIn" style={iconStyle} />
              </a>
            )}
            {twitter && (
              <a href={twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <img src="/images/socialmediaicons/icons8-x-50.png" alt="Twitter" style={iconStyle} />
              </a>
            )}
            {instagram && (
              <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src="/images/socialmediaicons/icons8-instagram-48.png" alt="Instagram" style={iconStyle} />
              </a>
            )}
            {youtube && (
              <a href={youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <img src="/images/socialmediaicons/icons8-youtube-48.png" alt="YouTube" style={iconStyle} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SponsorDetail;
