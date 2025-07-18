import React from 'react';
import { copadoConSponsors } from '../../../data/copadocon2025/sponsors';

const Sponsors: React.FC = () => (
  <section>
    <h2>Sponsors</h2>
    <ul>
      {copadoConSponsors.map((s, i) => (
        <li key={i}><strong>{s.name}</strong> - {s.type}</li>
      ))}
    </ul>
  </section>
);

export default Sponsors;
