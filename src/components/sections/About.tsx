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

      {/* Top Row */}
      <div className="about-top">
        <div className="about-top-text">
          <h2>{aboutData.title}</h2>
          <p className="intro-text">{aboutData.intro}</p>
        </div>
        <div className="about-top-img">
          <div className="gradient-border">
            <img
              src={
                aboutData.image === 2
                  ? '/images/Gallary/Others/1-3-1-scaled.jpg'
                  : '/images/aboutimg2.png'
              }
              alt="About section visual"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="about-bottom">
        {aboutData.paragraphs.slice(1).map((para, idx) => (
          <p
            key={idx}
            className="bottom-paragraph"
            dangerouslySetInnerHTML={{ __html: para }}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
