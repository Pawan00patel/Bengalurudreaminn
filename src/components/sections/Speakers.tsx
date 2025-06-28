import React, { useState } from 'react';
import { speakers } from '../../data/constants';
import '../../styles/Speakers.css';

const Speakers: React.FC = () => {
  const [search, setSearch] = useState('');

  const filteredSpeakers = speakers.filter((speaker) => {
    const content = `${speaker.name} ${speaker.topic} ${speaker.experience}`;
    return content.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="speakersPage">
      <div className="speakersPage--header">
        <h1>Speakers</h1>
      </div>
      <div className="speakersPage--container">
        <div className="speakers--search">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search speakers..."
            className="speakers--input"
          />
        </div>
        <div className="speakers--grid">
          {filteredSpeakers.length === 0 ? (
            <p className="no-speakers">No speakers found.</p>
          ) : (
            filteredSpeakers.map((speaker) => (
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
                    <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="speaker-linkedin-modern">Know more</a>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Speakers;