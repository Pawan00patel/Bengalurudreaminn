import React from 'react';
import { speakers } from '../../data/constants';
import { Speaker } from '../../types';
import '../../styles/Speakers.css';
// Dynamically generate topics from speakers data

const Speakers: React.FC = () => {


  return (
    <div
       style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '120px',
        padding: '3vw 0',
        width: '100%',
        background: 'radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)',
      }}
    >
      <div className="speakersPage--container" style={{ background: 'transparent', color: '#fff' }}>
        <div className="speakers--grid-flat">
          {speakers.map((speaker: Speaker) => (
            <div key={speaker.id} className="speaker-flat-card">
              <div className="speaker-flat-img-container">
                <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="speaker-flat-img"
                    style={{ cursor: 'pointer' }}
                  />
                </a>
              </div>
              <div className="speaker-flat-info">
                <div className="speaker-flat-name">{speaker.name}</div>
                <div className="speaker-flat-title">{speaker.topic}</div>
                {speaker.experience && (
                  <div className="speaker-flat-experience">{speaker.experience}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
