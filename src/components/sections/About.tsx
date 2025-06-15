import React from 'react';
import { Leaf } from 'lucide-react';
import ReasonCard from '../ui/ReasonCard';
import { reasons } from '../../data/constants';

const About: React.FC = () => {
  return (    <section id="about" className="py-5 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Why Choose Bengaluru Dreamin?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Because we're not just another tech event—we're a catalyst for change. 
            In a world where technology evolves at breakneck speed, Bengaluru Dreamin 
            stands out as a beacon of innovation and inclusivity.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason) => (
            <ReasonCard key={reason.id} reason={reason} />
          ))}
        </div>

        {/* Sustainability Section */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Leaf className="w-8 h-8 text-green-600" />
            <h3 className="text-2xl font-bold text-gray-800">Our Commitment to Sustainability</h3>
          </div>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            Our commitment to "Go Green" sets us apart, signaling our dedication to 
            sustainability and environmental stewardship. Join us in making a positive 
            impact on our planet while advancing your Salesforce career.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;