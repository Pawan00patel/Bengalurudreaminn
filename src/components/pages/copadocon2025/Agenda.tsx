import React from 'react';
import { agenda } from '../../../data/copadocon2025/agenda';

const Agenda: React.FC = () => (
  <section>
    <h2>Agenda</h2>
    <ul>
      {agenda.map((item, i) => (
        <li key={i}><strong>{item.day} {item.time}</strong>: {item.title} - {item.description}</li>
      ))}
    </ul>
  </section>
);

export default Agenda;
