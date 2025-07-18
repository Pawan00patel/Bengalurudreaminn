import React from 'react';
import { copadoConOthers } from '../../../data/copadocon2025/others';

const Others: React.FC = () => (
  <section>
    <h2>Other Information</h2>
    <ul>
      {copadoConOthers.map((item, i) => (
        <li key={i}><strong>{item.title}:</strong> {item.content}</li>
      ))}
    </ul>
  </section>
);

export default Others;
