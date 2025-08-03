import React from 'react';

interface Speaker {
  id: string;
  name: string;
  title: string;
  company: string;
  bio: string;
  photo: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

interface SpeakersSectionProps {
  speakers: Speaker[];
}

/**
 * SpeakersSection Component
 * 
 * Displays a grid of keynote speakers with their profile images,
 * titles, and social media links. Responsive design that adapts
 * from desktop grid to mobile stack layout.
 */
const SpeakersSection: React.FC<SpeakersSectionProps> = ({ speakers }) => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Keynote Speakers
        </h2>
        <p className="text-xl text-gray-600">
          Meet our distinguished industry experts
        </p>
      </div>

      {/* Speakers Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {speakers.map((speaker) => (
          <div 
            key={speaker.id}
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Speaker Image */}
            <div className="w-48 h-48 mb-6 relative">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-blue-50 shadow-inner">
                <img
                  src={speaker.photo}
                  alt={`${speaker.name} - ${speaker.title} at ${speaker.company}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Speaker Info */}
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              {speaker.name}
            </h3>
            <div className="text-center mb-3">
              <p className="text-lg font-medium text-gray-800">{speaker.title}</p>
              <p className="text-gray-600">{speaker.company}</p>
            </div>
            <p className="text-gray-600 text-center mb-4 max-w-sm">
              {speaker.bio}
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {speaker.social.linkedin && (
                <a
                  href={speaker.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${speaker.name}'s LinkedIn profile`}
                  className="w-8 h-8 transition-transform hover:scale-110"
                >
                  <img 
                    src="/images/socialmediaicons/linkedin.png" 
                    alt="LinkedIn"
                    className="w-full h-full object-contain"
                  />
                </a>
              )}
              {speaker.social.twitter && (
                <a
                  href={speaker.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${speaker.name}'s Twitter profile`}
                  className="w-8 h-8 transition-transform hover:scale-110"
                >
                  <img 
                    src="/images/socialmediaicons/twitter.png" 
                    alt="Twitter"
                    className="w-full h-full object-contain"
                  />
                </a>
              )}
              {speaker.social.github && (
                <a
                  href={speaker.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${speaker.name}'s GitHub profile`}
                  className="w-8 h-8 transition-transform hover:scale-110"
                >
                  <img 
                    src="/images/socialmediaicons/github.png" 
                    alt="GitHub"
                    className="w-full h-full object-contain"
                  />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpeakersSection;
