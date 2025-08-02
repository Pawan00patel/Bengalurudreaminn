import React from 'react';
import BengaluruDreaminNavbar from '../layout/BengaluruDreaminNavbar';
import Speakers from '../sections/Speakers';
import AgendaSection from '../sections/AgendaSection';
import OurTeam from '../pages/OurTeam';
import Gallery from '../pages/Gallery';
import Blog from '../sections/Blog';
import Sponsors from '../sections/Sponsors';
import '../../styles/BengaluruDreamin2025.css';

const BengaluruDreamin2025: React.FC = () => {
  return (
    <div className="min-h-screen">
      <BengaluruDreaminNavbar />
      
      {/* Hero Section */}
      <section className="bengaluru-dreamin-hero">
        <div className="section-container">
          <h1>Bengaluru Dreamin 2024</h1>
          <p>Join us for the biggest Salesforce community event in Bengaluru</p>
        </div>
      </section>

      {/* Content Sections */}
      <section id="speakers" className="section">
        <div className="section-container">
          <h2 className="section-title">Featured Speakers</h2>
          <Speakers />
        </div>
      </section>

      <section id="agenda" className="section section-dark">
        <div className="section-container">
          <h2 className="section-title">Event Agenda</h2>
          <AgendaSection />
        </div>
      </section>

      <section id="our-team" className="section">
        <div className="section-container">
          <h2 className="section-title">Our Team</h2>
          <OurTeam />
        </div>
      </section>

      <section id="gallery" className="section section-dark">
        <div className="section-container">
          <h2 className="section-title">Gallery</h2>
          <Gallery />
        </div>
      </section>

      <section id="blog" className="section">
        <div className="section-container">
          <h2 className="section-title">Latest Updates</h2>
          <Blog />
        </div>
      </section>

      <section id="sponsors" className="section section-dark">
        <div className="section-container">
          <h2 className="section-title">Our Sponsors</h2>
          <Sponsors />
        </div>
      </section>
    </div>
  );
};

export default BengaluruDreamin2025;
