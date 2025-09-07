import React from 'react';
import { speakers } from '../../data/copadocon2025/speakers';
import '../../styles/CopadoConSpeaker.css';

const CopadoConSpeaker: React.FC = () => {
  return (
    <div style={{ background: '#f8fbff', color: '#232323', minHeight: '60vh', padding: '2rem 0' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'center', color: '#232323' }}>Speakers</h2>
      <div className="speaker-grid">
        {speakers.map(speaker => (
          <div key={speaker.id} className="speaker-card">
            <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer">
              <img
                src={speaker.photo}
                alt={speaker.name}
                className="speaker-photo"
              />
            </a>
            <div className="speaker-name">{speaker.name}</div>
            {/* If you add title/company/bio, you can show them here with new CSS classes */}
            <div className="speaker-social">
              {speaker.social.linkedin && (
                <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CopadoConSpeaker;
