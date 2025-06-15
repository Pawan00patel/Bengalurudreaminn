import React from 'react';
import Hero from '../sections/hero';
import About from '../sections/About';
import Speakers from '../sections/Speakers';
import Events from '../sections/Events';
import CTA from '../sections/CTA';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Speakers />
      <Events />
      <CTA />
    </main>
  );
};

export default Home;
