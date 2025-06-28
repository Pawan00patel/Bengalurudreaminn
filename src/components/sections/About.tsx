import React, { useEffect } from 'react';
import '../../styles/About.css';
import { aboutData } from '../../data/aboutData';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about" id="about">
      <div className="line-styling">
        <div className="style-circle"></div>
        <div className="style-circle"></div>
        <div className="style-line"></div>
      </div>
      <div className="about-body">
        <div className="about-description">
          <h2>{aboutData.title}</h2>
          <p className="text-lg md:text-xl font-light text-gray-200 mb-8 text-left">
            {aboutData.intro}
          </p>
          <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-100">
            {aboutData.paragraphs.map((para, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
          </div>
        </div>
        <div className="about-img">
          <img
            src={aboutData.image === 2 ? '/images/Gallary/Others/1-3-1-scaled.jpg' : '/images/aboutimg2.png'}
            alt="About section visual"
          />
        </div>
      </div>
    </div>
  );
};

export default About;




