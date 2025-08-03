import React from 'react';
import { speakers } from '../../data/constants';
import { Speaker } from '../../types';
import '../../styles/Speakers.css';

const Speakers: React.FC = () => {
  return (
    <div className="speakers--grid">
      {speakers.map((speaker: Speaker) => (
        <div key={speaker.id} className="speaker-card-modern">
          <div className="speaker-img-container">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="speaker-img-modern"
            />
          </div>
          <div className="speaker-content-block card-blur-content">
            <h3 className="speaker-name-modern">{speaker.name}</h3>
            <p className="speaker-role-modern">{speaker.topic}</p>
            <p className="speaker-experience-modern">{speaker.experience}</p>
            {speaker.dateSpoken && (
              <p className="speaker-date-modern">Spoke on: {speaker.dateSpoken}</p>
            )}
            {speaker.linkedin && (
              <a 
                href={speaker.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="speaker-linkedin-modern"
              >
                Know more
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Speakers;