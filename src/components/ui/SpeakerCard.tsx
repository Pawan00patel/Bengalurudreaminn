import React from 'react';
import { Speaker } from '../../types';

interface SpeakerCardProps {
  speaker: Speaker;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker }) => {
  const getInitials = (name: string): string => {
    return name.split(' ').map(n => n[0]).join('');
  };

  return (    <div className="card p-4">
      <div className="gradient-bg rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
        <span className="text-white fw-bold h4 mb-0">
          {getInitials(speaker.name)}
        </span>
      </div>
      
      <h3 className="h4 fw-bold text-center mb-2">
        {speaker.name}
      </h3>
      
      <p className="text-blue-600 text-center font-semibold mb-1">
        {speaker.role}
      </p>
      
      <p className="text-gray-600 text-center mb-4">
        {speaker.company}
      </p>
      
      {speaker.badges && (
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {speaker.badges.map((badge, index) => (
            <span 
              key={index} 
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
            >
              {badge}
            </span>
          ))}
        </div>
      )}
      
      {speaker.certifications && (
        <p className="text-center text-sm text-gray-600 mb-2">
          {speaker.certifications}
        </p>
      )}
      
      {speaker.experience && (
        <p className="text-center text-sm text-gray-600 mb-2">
          {speaker.experience}
        </p>
      )}
      
      {speaker.specialty && (
        <p className="text-center text-sm text-blue-600 font-medium">
          {speaker.specialty}
        </p>
      )}
    </div>
  );
};

export default SpeakerCard;