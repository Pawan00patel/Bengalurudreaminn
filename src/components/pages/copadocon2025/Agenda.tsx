import React from 'react';
import { copadoConAgenda } from '../../../data/copadocon2025/agenda';

const Agenda: React.FC = () => (
  <section>
    <h2>Agenda</h2>
    <ul>
      {copadoConAgenda.map((item, i) => (
        <li key={i}><strong>{item.time}</strong>: {item.event}</li>
      ))}
    </ul>
  </section>
);

export default Agenda;
