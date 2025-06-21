import React from 'react';
import { speakers } from '../../data/constants';

const Speakers: React.FC = () => {
  return (
    <section id="speakers" className="py-5 bg-light">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Meet Our Speakers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from industry leaders, Salesforce MVPs, and community champions
            who are shaping the future of the Salesforce ecosystem.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="bg-white rounded-lg shadow-md p-5">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {speaker.name}
              </h3>
              <p className="text-gray-600 mb-1">{speaker.role}</p>
              <p className="text-gray-500 mb-1">{speaker.company}</p>
              {speaker.badges && (
                <div className="d-flex flex-wrap justify-content-center gap-2 mb-2">
                  {speaker.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="badge bg-primary text-white px-2 py-1"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}
              {speaker.certifications && (
                <p className="text-sm text-gray-600 mb-1">
                  {speaker.certifications}
                </p>
              )}
              {speaker.experience && (
                <p className="text-sm text-gray-600 mb-1">
                  {speaker.experience}
                </p>
              )}
              {speaker.specialty && (
                <p className="text-sm text-primary mb-1">
                  {speaker.specialty}
                </p>
              )}
              {speaker.bio && (
                <p className="text-muted small mt-2">{speaker.bio}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;