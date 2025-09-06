import React from 'react';
import { speakers } from '../../data/copadocon2025/speakers';
import '../../styles/Speakers.css';

const CopadoConSpeaker: React.FC = () => {
  return (
    <div className="speakersPage--container" style={{ background: '#f8fbff', color: '#232323', minHeight: '60vh' }}>
      <h2 className="speakers--title" style={{  fontSize: '2rem',  fontWeight: 700, marginBottom: 0,whiteSpace: 'nowrap',  textAlign: 'center',color: '#232323' }}> Speakers</h2>
      <div className="speakers--grid-flat">
        {speakers.map(speaker => (
          <div key={speaker.id} className="speaker-flat-card">
            <div className="speaker-flat-img-container">
              <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer">
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  className="speaker-flat-img"
                  style={{ cursor: 'pointer' }}
                />
              </a>
            </div>
            <div className="speaker-flat-info">
              <div className="speaker-flat-name">{speaker.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CopadoConSpeaker;
