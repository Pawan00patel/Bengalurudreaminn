import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import About from './copadocon2025/About';
import Sponsors from './copadocon2025/Sponsors';
import Agenda from './copadocon2025/Agenda';
import Speakers from './copadocon2025/Speakers';
import Others from './copadocon2025/Others';

const navItems = [
  { label: 'About', path: '/copadocon2025/about' },
  { label: 'Sponsors', path: '/copadocon2025/sponsors' },
  { label: 'Agenda', path: '/copadocon2025/agenda' },
  { label: 'Speakers', path: '/copadocon2025/speakers' },
  { label: 'Others', path: '/copadocon2025/others' },
];

const CopadoCon2025: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setLogoVisible(true), 100);
    setTimeout(() => setTitleVisible(true), 400);
  }, []);
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      padding: '3rem 0 0 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Floating particles and shapes */}
      <BackgroundParticles />
      <div style={{
        background: '#faffffc9',
        borderRadius: 18,
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        maxWidth: '100%',
        width: '95%',
        margin: '0 auto',
        padding: '2.5rem 2rem 1.5rem 2rem',
        marginTop: '2rem',
        marginBottom: '2rem',
        color: '#111',
        position: 'relative',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <NavLink to="/copadocon2025" style={{ display: 'inline-block' }}>
            <img
              src={process.env.PUBLIC_URL + '/images/logos/CopadoCon Logo_Blue and Black@2x.png'}
              alt="CopadoCon 2025 Logo"
              style={{
                maxWidth: '250px',
                width: '80vw',
                marginBottom: 12,
                cursor: 'pointer',
                opacity: logoVisible ? 1 : 0,
                transform: logoVisible ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 0.8s, transform 0.8s',
              }}
              className="copado-logo"
            />
          </NavLink>
          <div style={{ fontSize: '1.2rem', color: '#555', marginBottom: 24 }}>Date: To be announced</div>
        </div>
        {/* Mobile Hamburger & Responsive Nav */}
        <nav className="copado-nav-responsive">
          <button
            className="copado-hamburger"
            aria-label="Open navigation"
            onClick={() => setNavOpen(!navOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              fontSize: 32,
              position: 'absolute',
              right: 18,
              top: 10,
              zIndex: 10,
              cursor: 'pointer',
            }}
          >
            <span style={{ display: 'block', width: 32, height: 4, background: '#222', margin: '7px 0', borderRadius: 2 }}></span>
            <span style={{ display: 'block', width: 32, height: 4, background: '#222', margin: '7px 0', borderRadius: 2 }}></span>
            <span style={{ display: 'block', width: 32, height: 4, background: '#222', margin: '7px 0', borderRadius: 2 }}></span>
          </button>
          <ul
            className={`copado-nav-list${navOpen ? ' open' : ''}`}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem',
              listStyle: 'none',
              margin: 0,
              padding: '1rem 0',
              transition: 'all 0.3s',
            }}
          >
            {navItems.map(item => (
              <li key={item.label} style={{ width: 'auto' }}>
                <NavLink
                  to={item.path}
                  activeStyle={{
                    color: '#0070f3',
                    fontWeight: 700,
                    borderBottom: '2px solid #0070f3',
                    paddingBottom: 2,
                  }}
                  style={{
                    color: '#222',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    padding: '0 0.5rem',
                    display: 'block',
                    minHeight: 44,
                    transition: 'color 0.3s, background 0.3s, transform 0.3s',
                  }}
                  onClick={() => setNavOpen(false)}
                  className="copado-nav-link"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <style>{`
          @media (max-width: 768px) {
            .copado-nav-list {
              flex-direction: column !important;
              align-items: stretch !important;
              gap: 0.5rem !important;
              background: rgba(255,255,255,0.95);
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
            .copado-hamburger {
              display: block !important;
            }
            .copado-logo {
              max-width: 180px !important;
              width: 70vw !important;
            }
          }
          @media (max-width: 768px) {
            .copado-nav-list:not(.open) {
              border-top: none !important;
            }
          }
          @media (max-width: 768px) {
            .copado-nav-responsive {
              margin-bottom: 1.5rem !important;
            }
          }
          @media (max-width: 768px) {
            .copado-content {
              padding: 1rem !important;
              box-shadow: none !important;
              border-radius: 0 !important;
              margin: 0 !important;
            }
          }
          .copado-nav-link {
            transition: color 0.3s, background 0.3s, transform 0.3s;
          }
          .copado-nav-link:hover {
            color: #0070f3;
            background: rgba(0,112,243,0.08);
            transform: scale(1.04);
          }
          .copado-cta-btn {
            animation: copadoPulse 2s infinite;
          }
          @keyframes copadoPulse {
            0% { box-shadow: 0 0 0 0 #0070f3; }
            70% { box-shadow: 0 0 0 10px rgba(0,112,243,0); }
            100% { box-shadow: 0 0 0 0 #0070f3; }
          }
          .copado-logo {
            transition: opacity 0.8s, transform 0.8s;
          }
          .copado-title {
            opacity: 0;
            transform: translateY(24px);
            transition: opacity 0.7s, transform 0.7s;
          }
          .copado-title.visible {
            opacity: 1;
            transform: translateY(0);
          }
        `}</style>
        <div className="copado-content">
          <Switch>
            <Route exact path="/copadocon2025" render={() => (
              <div style={{ textAlign: 'center', marginTop: 40, marginBottom: 40 }}>
                <h2 className={`copado-title${titleVisible ? ' visible' : ''}`} style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 16 }}>Welcome to CopadoCon 2025!</h2>
                <p style={{ fontSize: '1.15rem', color: '#333', marginBottom: 24 }}>
                  Join us for the premier event for DevOps, Salesforce, and cloud professionals.<br />
                  Discover innovation, network with industry leaders, and be part of the future.
                </p>
                <NavLink
                  to="/copadocon2025/about"
                  style={{
                    display: 'inline-block',
                    background: '#0070f3',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    padding: '0.75rem 2rem',
                    borderRadius: 12,
                    textDecoration: 'none',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    marginTop: 16,
                  }}
                  className="copado-cta-btn"
                >
                  Learn More
                </NavLink>
              </div>
            )} />
            <Route exact path="/copadocon2025/about" component={About} />
            <Route exact path="/copadocon2025/sponsors" component={Sponsors} />
            <Route exact path="/copadocon2025/agenda" component={Agenda} />
            <Route exact path="/copadocon2025/speakers" component={Speakers} />
            <Route exact path="/copadocon2025/others" component={Others} />
            <Redirect to="/copadocon2025" />
          </Switch>
        </div>
      </div>
      <div style={{ width: '100%', marginTop: 'auto' }}>
        {/* Sticky footer for mobile */}
        {/* You can use your existing Footer component here if available */}
      </div>
    </main>
  );

  // Floating background particles and shapes
  function BackgroundParticles() {
    return (
      <>
        {/* Dots */}
        {[...Array(18)].map((_, i) => (
          <span
            key={i}
            style={{
              position: 'absolute',
              top: `${10 + Math.sin(i) * 60 + (i * 30)}px`,
              left: `${20 + Math.cos(i) * 80 + (i * 40)}px`,
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: 'rgba(0,112,243,0.18)',
              animation: `floatDot${i} 6s ease-in-out infinite`,
              opacity: 0.5,
              zIndex: 0,
            }}
          />
        ))}
        {/* Geometric shapes */}
        <svg style={{ position: 'absolute', top: 120, left: 60, opacity: 0.12, zIndex: 0 }} width="60" height="60">
          <circle cx="30" cy="30" r="24" fill="#0070f3" />
        </svg>
        <svg style={{ position: 'absolute', bottom: 80, right: 80, opacity: 0.12, zIndex: 0 }} width="70" height="70">
          <polygon points="35,10 60,60 10,60" fill="#00D4AA" />
        </svg>
        <svg style={{ position: 'absolute', top: 220, right: 120, opacity: 0.10, zIndex: 0 }} width="50" height="50">
          <polygon points="25,5 45,45 5,45" fill="#FF6B35" />
        </svg>
        {/* Keyframes for floating dots */}
        <style>{`
          ${[...Array(18)].map((_, i) => `@keyframes floatDot${i} {
            0% { transform: translateY(0); }
            50% { transform: translateY(${8 + (i % 3) * 6}px); }
            100% { transform: translateY(0); }
          }`).join('\n')}
        `}</style>
      </>
    );
  }
// ...existing code...
};

export default CopadoCon2025;
