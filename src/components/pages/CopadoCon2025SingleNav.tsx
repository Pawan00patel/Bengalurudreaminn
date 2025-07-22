import React, { useState } from 'react';

// const speakers = [
//   {
//     name: 'Sarah Franklin',
//     title: 'President & CMO',
//     company: 'Salesforce',
//     photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&q=80',
//   },
//   {
//     name: 'Parker Harris',
//     title: 'Co-founder',
//     company: 'Salesforce',
//     photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80',
//   },
//   {
//     name: 'Kavindra Patel',
//     title: 'SVP & GM, Trailhead',
//     company: 'Salesforce',
//     photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&q=80',
//   },
//   {
//     name: 'Guillaume Roques',
//     title: 'DevRel',
//     company: 'Salesforce',
//     photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80',
//   },
// ];

// const team = [
//   {
//     name: 'Rakesh Kumar',
//     role: 'Lead Organizer',
//     photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80',
//   },
//   {
//     name: 'Priya Sharma',
//     role: 'Sponsorship Lead',
//     photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80',
//   },
//   {
//     name: 'Amit Singh',
//     role: 'Marketing & Comms',
//     photo: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&q=80',
//   },
//   {
//     name: 'Sunita Patil',
//     role: 'Volunteer Coordinator',
//     photo: 'https://images.unsplash.com/photo-1610216705422-caa3fc2bab7e?w=500&q=80',
//   },
// ];

// const sponsors = [
//   { name: 'Salesforce' },
//   { name: 'Infosys' },
//   { name: 'Wipro' },
//   { name: 'TCS' },
//   { name: 'Capgemini' },
//   { name: 'Accenture' },
//   { name: 'Cognizant' },
//   { name: 'Mindtree' },
// ];

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Sponsors', id: 'sponsors' },
  { label: 'Speakers', id: 'speakers' },
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
  const [navScrolled, setNavScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
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
        background: navScrolled ? 'rgba(15, 11, 11, 0.85)' : 'transparent',
        boxShadow: navScrolled ? '0 2px 16px 0 rgba(0,0,0,0.10)' : 'none',
        transition: 'background 0.3s, box-shadow 0.3s',
        backdropFilter: navScrolled ? 'blur(12px)' : 'none',
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
            <a
              className="navbar-brand d-flex align-items-center gap-2"
              href="/"
              style={{ marginLeft: '-125px' }}
            >
              <img
                src={process.env.PUBLIC_URL + '/images/logos/New-Dreamin-Logo-White.png'}
                alt="Bengaluru Dreamin Logo"
                style={{ height: '36px' }}
                className="d-inline-block align-text-top"
              />
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
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
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 48,
        paddingBottom: 48,
        textAlign: 'center',
        background: 'linear-gradient(285deg, #2463ea, #550cad 57%, #000)',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <img src={process.env.PUBLIC_URL + '/images/logos/CopadoCon Logo_Blue and Black@2x.png'} alt="CopadoCon 2025 Logo" style={{ height: 220, marginBottom: 0, zIndex: 1 }} />
        <div style={{ maxWidth: 800, margin: '0 auto', zIndex: 1 }}>
          <p style={{ fontSize: '1.3rem', marginBottom: 20, lineHeight: 1.6, wordBreak: 'break-word', whiteSpace: 'pre-line' }}>
            A flagship, community-focused conference proudly led by Copado, the global leader in DevOps and AI-driven transformation for the Salesforce ecosystem
          </p>
        </div>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', zIndex: 1, marginBottom: 8 }}>
          <a
            href="https://konfhub.com/checkout/copadocon-2025"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#2176ff',
              color: '#fff',
              fontWeight: 600,
              fontSize: '1.1rem',
              padding: '0.75rem 2rem',
              borderRadius: 8,
              textDecoration: 'none',
              boxShadow: 'none',
              marginTop: 8,
              border: 'none',
              transition: 'background 0.2s',
              display: 'inline-block',
            }}
          >Register Your Interest</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ maxWidth: 900, margin: '0 auto', padding: '4rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 16 }}>About CopadoCon 2025</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: 24, textAlign: 'justify' }}>
          CopadoCon 2025 is a flagship, community-focused conference proudly led by Copado the global leader in DevOps and AI-driven transformation for the Salesforce ecosystem. Curated to bring together DevOps engineers, developers, architects, admins, consultants, and technology leaders, CopadoCon 2025 is a celebration of innovation, learning, and the future of digital delivery.<br /><br />
          As the exclusive Title Sponsor and driving force behind the event, Copado is shaping this experience to highlight the power of DevOps, AI, and enterprise agility within the Salesforce platform. From deep-dive sessions and expert-led demos to visionary keynotes and hands-on learning zones, the event is designed to fuel every stage of your professional growth.<br /><br />
          Organized by the Bengaluru Dreamin’, the event brings community execution expertise to ensure a high-impact experience for every attendee amplifying Copado’s vision at scale.
        </p>
        <div style={{ marginTop: 24, fontSize: '1.1rem', color: '#0070f3' }}>Date: 13 September 2025 | The Den Whitefield Bengaluru, India</div>
      </section>
      {/* Copado Community Section */}
      <section id="community" style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: 12, color: '#000', borderRadius: 8, padding: '1rem 0' }}>
          Are you a Copado Community member?
        </h2>
        <a
          href="https://www.copado.com/community"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#2176ff',
            color: '#fff',
            fontWeight: 600,
            fontSize: '1.1rem',
            padding: '0.75rem 2rem',
            borderRadius: 8,
            textDecoration: 'none',
            boxShadow: 'none',
            marginTop: 8,
            border: 'none',
            transition: 'background 0.2s',
            display: 'inline-block',
          }}
        >Join Copado Community</a>
      </section>

      {/* Speakers Section */}
      {/* Sponsors Section (swapped position) */}
      <section id="sponsors" style={{ maxWidth: 900, margin: '0 auto', padding: '4rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 8 }}>Our Sponsors</h2>
        <div style={{ fontSize: '1.3rem', color: '#0070f3', fontWeight: 600, padding: '0.5rem 0' }}>To Be Announced</div>
        <div style={{ marginTop: 24, marginBottom: 8 }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#2176ff', marginBottom: 8 }}>Title Sponsor</h3>
          <img src={process.env.PUBLIC_URL + '/images/logos/copadomain-ddg-logo.svg'} alt="Copado Title Sponsor Logo" style={{ height: 30 }} />
        </div>
      </section>
      {/* Speakers Section (swapped position) */}
      <section id="speakers" style={{ maxWidth: 1100, margin: '0 auto', padding: '4rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 8 }}>Meet Our Speakers</h2>
        <div style={{ fontSize: '1.3rem', color: '#0070f3', fontWeight: 600, padding: '0.5rem 0' }}>To Be Announced</div>
      </section>

      {/* Team Section removed as per request */}

      {/* Sponsors Section */}
      <section id="sponsors" style={{ maxWidth: 900, margin: '0 auto', padding: '4rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 8 }}>Our Sponsors</h2>
        <div style={{ fontSize: '1.3rem', color: '#0070f3', fontWeight: 600, padding: '0.5rem 0' }}>To Be Announced</div>
      </section>

      {/* Agenda Section (replacing Contact) */}
      <section id="agenda" style={{ maxWidth: 800, margin: '0 auto', padding: '4rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 8 }}>Agenda</h2>
        <div style={{ fontSize: '1.3rem', color: '#0070f3', fontWeight: 600, padding: '0.5rem 0' }}>To Be Announced</div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'linear-gradient(285deg, #2463ea, #550cad 57%, #000)',
        color: '#fff',
        padding: '2rem 0',
        textAlign: 'center',
        marginTop: 40,
      }}>
        <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>© 2025 CopadoCon. All rights reserved.</div>
      </footer>
      <style>{`
        @media (max-width: 900px) {
          .copado-nav-list { gap: 1rem !important; }
        }
        @media (max-width: 768px) {
          header nav ul.copado-nav-list {
            flex-direction: column !important;
            background: rgba(0, 0, 0, 0.98);
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
          .navbar-brand img {
            height: 28px !important;
            margin-left: 0 !important;
          }
          .navbar-brand {
            margin-left: 0 !important;
          }
        }
        .copado-nav-list button:hover {
          color: #2176ff !important;
        }
      `}</style>
    </div>
  );
};

export default CopadoCon2025SingleNav;
