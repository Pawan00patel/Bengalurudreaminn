import React from 'react';
import Marquee from "react-fast-marquee";
import '../../styles/Sponsors.css';
import { sponsorsData } from '../../data/sponsorsData';

const Sponsors: React.FC = () => {
  return (
    <div id="sponsors" className="sponsors">
      <div className="sponsorsHeader">
        <h2>Sponsors</h2>
      </div>
      <div className="sponsorsContainer">
        <div className="sponsor--scroll">
          <Marquee 
            gradient={false} 
            speed={60} 
            pauseOnHover={true}
            pauseOnClick={true} 
            delay={0}
            play={true} 
            direction="left"
          >
            {sponsorsData.map((sponsor, id) => (
              <a
                className="sponsor--box"
                key={id}
                href={sponsor.url}
                style={{ textDecoration: 'none' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={sponsor.logo} alt={sponsor.name} />
                <h3>{sponsor.name}</h3>
              </a>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
