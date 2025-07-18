import React from 'react';
import { copadoConAbout } from '../../../data/copadocon2025/about';

const About: React.FC = () => (
  <section>
    <h2>{copadoConAbout.title}</h2>
    <p>{copadoConAbout.description}</p>
  </section>
);

export default About;
