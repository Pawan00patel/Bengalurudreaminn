import React, { useState } from 'react';

const speakers = [
  {
    name: 'Sarah Franklin',
    title: 'President & CMO',
    company: 'Salesforce',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&q=80',
  },
  {
    name: 'Parker Harris',
    title: 'Co-founder',
    company: 'Salesforce',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80',
  },
  {
    name: 'Kavindra Patel',
    title: 'SVP & GM, Trailhead',
    company: 'Salesforce',
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&q=80',
  },
  {
    name: 'Guillaume Roques',
    title: 'DevRel',
    company: 'Salesforce',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80',
  },
];

const team = [
  {
    name: 'Rakesh Kumar',
    role: 'Lead Organizer',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80',
  },
  {
    name: 'Priya Sharma',
    role: 'Sponsorship Lead',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80',
  },
  {
    name: 'Amit Singh',
    role: 'Marketing & Comms',
    photo: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&q=80',
  },
  {
    name: 'Sunita Patil',
    role: 'Volunteer Coordinator',
    photo: 'https://images.unsplash.com/photo-1610216705422-caa3fc2bab7e?w=500&q=80',
  },
];

const sponsors = [
  { name: 'Salesforce' },
  { name: 'Infosys' },
  { name: 'Wipro' },
  { name: 'TCS' },
  { name: 'Capgemini' },
  { name: 'Accenture' },
  { name: 'Cognizant' },
  { name: 'Mindtree' },
];

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Speakers', id: 'speakers' },
  { label: 'Team', id: 'team' },
  { label: 'Sponsors', id: 'sponsors' },
  { label: 'Agenda', id: 'agenda' },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -90; // height of fixed header
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

const CopadoCon2025SingleNav: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e3f0ff 100%)',
      fontFamily: 'Inter, sans-serif',
      color: '#222',
      position: 'relative',
      overflowX: 'hidden',
    }}>
      {/* Navigation */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        background: 'rgba(15, 11, 11, 0.85)',
        boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)',
        backdropFilter: 'blur(12px)',
      }}>
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0.5rem 2rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <a href="http://localhost:3000/" style={{ display: 'inline-block' }}>
              <img src={process.env.PUBLIC_URL + '/images/logos/New-Dreamin-Logo-White.png'} alt="Bengaluru Dreamin Logo" style={{ height: 36 }} />
            </a>
          </div>
          <button
            aria-label="Open navigation"
            onClick={() => setNavOpen(!navOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              fontSize: 32,
              cursor: 'pointer',
            }}
            className="copado-hamburger"
          >
            <span style={{ display: 'block', width: 32, height: 4, background: '#222', margin: '7px 0', borderRadius: 2 }}></span>
            <span style={{ display: 'block', width: 32, height: 4, background: '#222', margin: '7px 0', borderRadius: 2 }}></span>
            <span style={{ display: 'block', width: 32, height: 4, background: '#222', margin: '7px 0', borderRadius: 2 }}></span>
          </button>
          <ul className={`copado-nav-list${navOpen ? ' open' : ''}`} style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '2rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}>
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#fff',
                    fontWeight: 500,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    padding: '0.5rem 0',
                    transition: 'color 0.2s',
                  }}
                  onClick={() => { setNavOpen(false); scrollToSection(item.id); }}
                  onMouseOver={e => (e.currentTarget.style.color = '#00d4aa')}
                  onMouseOut={e => (e.currentTarget.style.color = '#fff')}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100,
        paddingBottom: 60,
        textAlign: 'center',
        background: 'linear-gradient(135deg, #0b0c0dff 0%, #cc0cb2ff, #1a0785ff 100%)',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Animated shapes for hero section */}
        <div style={{ position: 'absolute', top: 40, left: 60, zIndex: 0 }}>
          <div className="hero-anim-circle" />
        </div>
        <div style={{ position: 'absolute', bottom: 80, right: 80, zIndex: 0 }}>
          <div className="hero-anim-triangle" />
        </div>
        <div style={{ position: 'absolute', top: 180, right: 120, zIndex: 0 }}>
          <div className="hero-anim-square" />
        </div>
        <img src={process.env.PUBLIC_URL + '/images/logos/CopadoCon Logo_Blue and Black@2x.png'} alt="CopadoCon 2025 Logo" style={{ height: 150, marginBottom: 24, zIndex: 1 }} />
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: 16, zIndex: 1 }}>CopadoCon 2025</h1>
        <p style={{ fontSize: '1.3rem', marginBottom: 32, zIndex: 1 }}>The premier event for DevOps, Salesforce, and cloud professionals in India.</p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', zIndex: 1 }}>
          <a href="#about" onClick={e => { e.preventDefault(); scrollToSection('about'); }} style={{
            background: '#fff', color: '#0070f3', fontWeight: 600, fontSize: '1.1rem', padding: '0.75rem 2rem', borderRadius: 12, textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginTop: 8,
          }}>Learn More</a>
          <a href="#agenda" onClick={e => { e.preventDefault(); scrollToSection('agenda'); }} style={{
            background: '#00d4aa', color: '#fff', fontWeight: 600, fontSize: '1.1rem', padding: '0.75rem 2rem', borderRadius: 12, textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginTop: 8,
          }}>Register Now</a>
        </div>
        <style>{`
          .hero-anim-circle {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: rgba(0, 212, 170, 0.18);
            animation: heroCircleAnim 4s infinite alternate ease-in-out;
          }
          .hero-anim-triangle {
            width: 0;
            height: 0;
            border-left: 50px solid transparent;
            border-right: 50px solid transparent;
            border-bottom: 90px solid rgba(0,112,243,0.18);
            animation: heroTriangleAnim 5s infinite alternate ease-in-out;
          }
          .hero-anim-square {
            width: 60px;
            height: 60px;
            background: rgba(204,12,178,0.18);
            border-radius: 16px;
            animation: heroSquareAnim 6s infinite alternate ease-in-out;
          }
          @keyframes heroCircleAnim {
            0% { transform: translateY(0) scale(1); }
            100% { transform: translateY(30px) scale(1.15); }
          }
          @keyframes heroTriangleAnim {
            0% { transform: translateX(0) rotate(0deg); }
            100% { transform: translateX(-30px) rotate(12deg); }
          }
          @keyframes heroSquareAnim {
            0% { transform: scale(1) rotate(0deg); }
            100% { transform: scale(1.2) rotate(8deg); }
          }
        `}</style>
      </section>

      {/* About Section */}
      <section id="about" style={{ maxWidth: 900, margin: '0 auto', padding: '4rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 16 }}>About CopadoCon 2025</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: 24 }}>CopadoCon 2025 brings together the brightest minds in Salesforce DevOps for a day of learning, networking, and innovation. Join us to explore the future of cloud development, automation, and collaboration.</p>
        <ul style={{ display: 'inline-block', textAlign: 'left', fontSize: '1rem', marginBottom: 24 }}>
          <li>Learn from industry leaders</li>
          <li>Hands-on workshops and sessions</li>
          <li>Networking with peers and experts</li>
        </ul>
        <div style={{ marginTop: 24, fontSize: '1.1rem', color: '#0070f3' }}>Date: July 20, 2025 | Bengaluru, India</div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" style={{ maxWidth: 1100, margin: '0 auto', padding: '4rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 32 }}>Meet Our Speakers</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
          {speakers.map(sp => (
            <div key={sp.name} style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.08)', padding: 24, textAlign: 'center', color: '#222' }}>
              <img src={sp.photo} alt={sp.name} style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', marginBottom: 16, border: '4px solid #0070f3' }} />
              <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 4 }}>{sp.name}</div>
              <div style={{ color: '#0070f3', fontWeight: 500, marginBottom: 4 }}>{sp.title}</div>
              <div style={{ fontSize: '0.95rem', color: '#555' }}>{sp.company}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section id="team" style={{ maxWidth: 1100, margin: '0 auto', padding: '4rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 32 }}>Our Core Team</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
          {team.map(tm => (
            <div key={tm.name} style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.08)', padding: 24, textAlign: 'center', color: '#222' }}>
              <img src={tm.photo} alt={tm.name} style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover', marginBottom: 16, border: '4px solid #00d4aa' }} />
              <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 4 }}>{tm.name}</div>
              <div style={{ color: '#00d4aa', fontWeight: 500 }}>{tm.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" style={{ maxWidth: 900, margin: '0 auto', padding: '4rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 32 }}>Our Sponsors</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 24, marginBottom: 24 }}>
          {sponsors.map(sp => (
            <div key={sp.name} style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: 16, textAlign: 'center', color: '#222', fontWeight: 600, fontSize: '1rem' }}>{sp.name}</div>
          ))}
        </div>
        <a href="#contact" onClick={e => { e.preventDefault(); scrollToSection('contact'); }} style={{
          display: 'inline-block', background: '#0070f3', color: '#fff', fontWeight: 600, fontSize: '1.1rem', padding: '0.75rem 2rem', borderRadius: 12, textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginTop: 8,
        }}>Become a Sponsor</a>
      </section>

      {/* Agenda Section (replacing Contact) */}
      <section id="agenda" style={{ maxWidth: 800, margin: '0 auto', padding: '4rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 24 }}>Agenda</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: 24 }}>Here's a sneak peek at the CopadoCon 2025 agenda. Stay tuned for more details!</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24, maxWidth: 600, margin: '0 auto' }}>
          <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: 20, textAlign: 'left', color: '#222' }}>
            <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>09:00 AM - Registration & Networking</div>
            <div style={{ color: '#0070f3', fontWeight: 500 }}>Kick off the day with coffee and connections.</div>
          </div>
          <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: 20, textAlign: 'left', color: '#222' }}>
            <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>10:00 AM - Keynote: The Future of DevOps</div>
            <div style={{ color: '#0070f3', fontWeight: 500 }}>Insights from industry leaders.</div>
          </div>
          <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: 20, textAlign: 'left', color: '#222' }}>
            <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>11:30 AM - Breakout Sessions</div>
            <div style={{ color: '#0070f3', fontWeight: 500 }}>Hands-on workshops and technical deep-dives.</div>
          </div>
          <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: 20, textAlign: 'left', color: '#222' }}>
            <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>01:00 PM - Lunch & Networking</div>
            <div style={{ color: '#0070f3', fontWeight: 500 }}>Enjoy a delicious meal and meet fellow attendees.</div>
          </div>
          <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: 20, textAlign: 'left', color: '#222' }}>
            <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>02:00 PM - Panel Discussion</div>
            <div style={{ color: '#0070f3', fontWeight: 500 }}>Q&A with experts on DevOps and Salesforce.</div>
          </div>
          <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: 20, textAlign: 'left', color: '#222' }}>
            <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>04:00 PM - Closing & Networking</div>
            <div style={{ color: '#0070f3', fontWeight: 500 }}>Wrap up the day and connect with new friends.</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#041c38', color: '#fff', padding: '2rem 0', textAlign: 'center', marginTop: 40 }}>
        <div style={{ marginBottom: 16, fontWeight: 700, fontSize: '1.1rem' }}>© 2025 CopadoCon. All rights reserved.</div>
        <div style={{ fontSize: '0.95rem', color: '#b3b3b3' }}>Made with ❤️ by the Bengaluru Dreamin.</div>
        <div style={{ marginTop: 16 }}>
          <a href="#about" style={{ color: '#fff', margin: '0 12px', textDecoration: 'underline' }} onClick={e => { e.preventDefault(); scrollToSection('about'); }}>About</a>
          <a href="#speakers" style={{ color: '#fff', margin: '0 12px', textDecoration: 'underline' }} onClick={e => { e.preventDefault(); scrollToSection('speakers'); }}>Speakers</a>
          <a href="#team" style={{ color: '#fff', margin: '0 12px', textDecoration: 'underline' }} onClick={e => { e.preventDefault(); scrollToSection('team'); }}>Team</a>
          <a href="#sponsors" style={{ color: '#fff', margin: '0 12px', textDecoration: 'underline' }} onClick={e => { e.preventDefault(); scrollToSection('sponsors'); }}>Sponsors</a>
          <a href="#agenda" style={{ color: '#fff', margin: '0 12px', textDecoration: 'underline' }} onClick={e => { e.preventDefault(); scrollToSection('agenda'); }}>Agenda</a>
        </div>
      </footer>
      <style>{`
        @media (max-width: 900px) {
          .copado-nav-list { gap: 1rem !important; }
        }
        @media (max-width: 768px) {
          header nav ul.copado-nav-list {
            flex-direction: column !important;
            background: rgba(255,255,255,0.98);
            position: absolute;
            top: 56px;
            left: 0;
            right: 0;
            width: 100%;
            border-radius: 0 0 18px 18px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            padding: 1rem 1.5rem !important;
            z-index: 10;
            display: ${navOpen ? 'flex' : 'none'} !important;
            border-top: none !important;
            backdrop-filter: blur(16px) saturate(180%);
            -webkit-backdrop-filter: blur(16px) saturate(180%);
          }
          .copado-hamburger { display: block !important; }
        }
      `}</style>
    </div>
  );
};

export default CopadoCon2025SingleNav;
