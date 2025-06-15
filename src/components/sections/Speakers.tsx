import React from 'react';
import SpeakerCard from '../ui/SpeakerCard';
import { speakers } from '../../data/constants';

const Speakers: React.FC = () => {
  return (    <section id="speakers" className="py-5 bg-light">
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
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;