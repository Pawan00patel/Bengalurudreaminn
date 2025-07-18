import React from 'react';
import { copadoConSpeakers } from '../../../data/copadocon2025/speakers';

const Speakers: React.FC = () => (
  <section>
    <h2>Speakers</h2>
    <ul>
      {copadoConSpeakers.map((sp, i) => (
        <li key={i}><strong>{sp.name}</strong> - {sp.title}, {sp.company}</li>
      ))}
    </ul>
  </section>
);

export default Speakers;
