import React, { useState } from 'react';
import CopadoSponsor from '../sections/CopadoSponsor';
import CopadoConSpeaker from '../sections/CopadoConSpeaker';
import CopadoConAgenda from '../sections/CopadoConAgenda';

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Sponsors', id: 'sponsors' },
  { label: 'Speakers', id: 'speakers' },
  { label: 'Agenda', id: 'agenda' },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    let yOffset = -90;
    if (window.innerWidth <= 600) yOffset = -40;
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
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0.5rem 2rem',
          }}
        >
          <div
            className="navbar-logos"
            style={{ display: 'flex', alignItems: 'center', gap: 16 }}
          >
            <div className="logo-container">
              <a
                className="navbar-brand"
                href="https://bengalurudreamin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + '/images/logos/New-Dreamin-Logo-White.png'}
                  alt="Bengaluru Dreamin Logo"
                  className="dreamin-logo"
                />
              </a>
              <div className="logo-divider" />
              <a
                href="https://www.copado.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="copado-link"
              >
                <img
                  src={process.env.PUBLIC_URL + '/images/logos/00_Copado Logo_Blue and White.png'}
                  alt="Copado Logo"
                  className="copado-logo"
                />
              </a>
            </div>
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
        paddingTop: window.innerWidth <= 600 ? 16 : 48,
        paddingBottom: window.innerWidth <= 600 ? 16 : 48,
        textAlign: 'center',
        background: 'linear-gradient(285deg, #2463ea, #550cad 57%, #000)',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <img
          src={process.env.PUBLIC_URL + '/images/logos/CopadoCon Logo_Blue and White@2x.png'}
          alt="CopadoCon 2025 Logo"
          className="copadocon-hero-logo"
        />
        <div style={{ maxWidth: 800, margin: '0 auto', zIndex: 1 }}>
              <p style={{ fontSize: '1.2rem', marginBottom: 53, lineHeight: 1.6, wordBreak: 'break-word', whiteSpace: 'pre-line', padding: '17px', textAlign: 'justify' }}>
            CopadoCon 2025 is the flagship, community-focused conference brought to you by Copado, the global leader in DevOps and AI-driven transformation for the Salesforce ecosystem
          </p>
        </div>
    
      </section>

      {/* About Section */}
      <section id="about" style={{ maxWidth: 900, margin: '0 auto', padding: '4rem 1rem', textAlign: 'center' }}>
        <h2 className="about-copadocon-heading">About CopadoCon 2025</h2>
        <p className="about-copadocon-desc">
          CopadoCon 2025 is the flagship, community-focused conference brought to you by Copado, the global leader in DevOps and AI-driven transformation for the Salesforce ecosystem.
          Designed to unite DevOps engineers, developers, architects, admins, consultants, and technology leaders, CopadoCon 2025 is a celebration of innovation, learning, and the future of digital delivery.<br /><br />
          As the driving force behind this premier event, Copado is shaping the experience to showcase the transformative power of DevOps, AI, and enterprise agility within the Salesforce platform.
          From deep-dive sessions and expert-led demos to visionary keynotes and hands-on learning zones, CopadoCon is built to inspire and accelerate every stage of your professional journey.<br /><br />
          Organized by Bengaluru Dreamin’ in collaboration with seasoned community leaders to bring world-class execution and local expertise to deliver a high-impact experience that brings Copado’s vision to life at scale.
        </p>
        <div style={{ marginTop: 24, fontSize: '1.1rem', color: '#0070f3' }}>Date: 13 September 2025 | Sheraton Grand Whitefield, Bengaluru, India</div>
      </section>
      {/* Copado Community Section */}
      <section id="community" style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: 10, color: '#000', borderRadius: 8, padding: '1rem 0' }}>
          Are you a Copado Community member? </h2>  <h3  style={{ fontSize: '1.5rem', marginBottom: 16 }}>
         <b>If not,  join today!</b> 
        </h3>
        
        <a
          href="https://www.copado.com/community"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#01c3ee',
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

      {/* Sponsors Section */}
      <section id="sponsors">
        <CopadoSponsor />
      </section>
      {/* Speakers Section */}
      <section id="speakers">
        <CopadoConSpeaker />
      </section>
      {/* Agenda Section */}
      <section id="agenda">
        <CopadoConAgenda />
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
        .logo-container {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 8px 0 0;  /* Reduced padding, especially on the left */
          max-width: 100%;
          overflow: visible;
          margin-left: 8px;  /* Add a small margin instead of padding for finer control */
        }
        
        .navbar-brand {
          display: flex;
          align-items: center;
          padding: 4px;
          transition: transform 0.2s ease;
        }
        
        .dreamin-logo {
          height: 36px;
          width: auto;
          max-width: 100%;
        }
        
        .logo-divider {
          height: 32px;
          width: 1px;
          background: #e0e0e0;
          margin: 0 8px;
        }
        
        .copado-link {
          display: flex;
          align-items: center;
          padding: 4px;
        }
        
        .copado-logo {
          height: 32px;
          border-radius: 4px;
          padding: 2px;
          width: auto;
          max-width: 100%;
        }

        @media (max-width: 1024px) {
          .navbar-brand {
            margin-left: -80px !important;
          }
          .about-copadocon-desc {
            padding: 0 20px;
          }
        }
        
        @media (max-width: 912px) {
          .navbar-brand {
            margin-left: -60px !important;
          }
          .about-copadocon-desc {
            padding: 0 16px;
          }
        }

        @media (max-width: 853px) {
          .navbar-brand {
            margin-left: -40px !important;
          }
        }

        @media (max-width: 820px) {
          .navbar-brand {
            margin-left: -20px !important;
          }
          .about-copadocon-desc {
            padding: 0 12px;
          }
        }

        @media (max-width: 600px) {
          #hero {
            padding-top: 16px !important;
            padding-bottom: 16px !important;
            min-height: 90vh !important;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            background: linear-gradient(285deg, #2463ea, #550cad 57%, #000);
            color: #fff;
            position: relative;
            overflow: hidden;
          }
          .navbar-brand {
            margin-left: 0 !important;
          }
        }

      .about-copadocon-heading {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 16px;
            padding: 0 15px;
          }
          .about-copadocon-desc {
            font-size: 1.2rem;
            margin-bottom: 24px;
            text-align: justify;
            padding: 0 30px;
            line-height: 1.6;
          }
          .hero-desc {
            padding: 0 20px;
            text-align: justify;
          }

      

    
    
     
        @media (max-width: 900px) {
          .about-copadocon-heading {
            font-size: 1.3rem;
            margin-bottom: 12px;
          }
          .about-copadocon-desc {
            font-size: 0.95rem;
          }
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
          .navbar-logos {
            gap: 8px !important;
            padding: 0 10px;
          }
          .dreamin-logo {
            height: 24px !important;
            margin-left: 0 !important;
          }
          .copado-logo {
            height: 22px !important;
          }
          .logo-divider {
            height: 22px !important;
            margin: 0 6px 0 2px !important;
          }
          .navbar-brand {
            margin-left: 0 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
        }
        @media (max-width: 480px) {
          .about-copadocon-heading {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 10px;
            padding: 0 10px;
          }
          .about-copadocon-desc {
            font-size: 1.0rem;
            margin-bottom: 15px;
            text-align: justify;
            padding: 0 15px;
            line-height: 1.5;
          }
          .hero-desc {
            padding: 0 15px;
            font-size: 0.95rem;
          }
          .logo-container {
            gap: 6px;
            padding: 0 8px;
          }
          .navbar-brand {
            padding: 2px;
          }
          .dreamin-logo {
            height: 22px;
          }
          .copado-logo {
            height: 20px;
          }
          .logo-divider {
            height: 16px;
            margin: 0 2px;
          }
          .copado-link {
            padding: 2px;
          }
        }

        /* Additional breakpoints for better logo handling */
        @media (max-width: 1200px) {
          .logo-container {
            padding: 0 14px;
          }
        }

        @media (max-width: 992px) {
          .logo-container {
            padding: 0 12px;
          }
          .dreamin-logo {
            height: 32px;
          }
          .copado-logo {
            height: 28px;
          }
        }

        @media (max-width: 820px) {
          .logo-container {
            padding: 0 10px;
          }
          .dreamin-logo {
            height: 28px;
          }
          .copado-logo {
            height: 26px;
          }
          .logo-divider {
            margin: 0 6px;
          }
        }

        @media (max-width: 640px) {
          .logo-container {
            padding: 0 8px;
          }
          .dreamin-logo {
            height: 24px;
          }
          .copado-logo {
            height: 22px;
          }
          .logo-divider {
            margin: 0 4px;
          }
        }
        .copadocon-hero-logo {
          height: 300px;
          margin-bottom: 0;
          z-index: 1;
          max-width: 90vw;
          width: auto;
          display: block;
        }
        @media (max-width: 900px) {
          .copadocon-hero-logo {
            height: 220px;
          }
        }
        @media (max-width: 768px) {
          .copadocon-hero-logo {
            height: 140px;
          }
        }
        @media (max-width: 480px) {
          .copadocon-hero-logo {
            height: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default CopadoCon2025SingleNav;
