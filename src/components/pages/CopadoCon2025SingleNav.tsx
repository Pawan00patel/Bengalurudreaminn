import React, { useState } from 'react';
import { Switch, Route, Redirect, NavLink, useRouteMatch } from 'react-router-dom';
import About from './copadocon2025/About';
import Sponsors from './copadocon2025/Sponsors';
import Agenda from './copadocon2025/Agenda';
import Speakers from './copadocon2025/Speakers';
import Others from './copadocon2025/Others';
import Footer from '../layout/Footer';

const navItems = [
  { label: 'About', path: '/copadocon2025-single/about' },
  { label: 'Sponsors', path: '/copadocon2025-single/sponsors' },
  { label: 'Agenda', path: '/copadocon2025-single/agenda' },
  { label: 'Speakers', path: '/copadocon2025-single/speakers' },
  { label: 'Others', path: '/copadocon2025-single/others' },
];

const CopadoCon2025SingleNav: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <main style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #111212ff 0%, #041c38ff 100%)',
        padding: '3rem 0 0 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.55)',
          borderRadius: 18,
          boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)',
           maxWidth: '100%',
            width: '95%',
          margin: '0 auto',
          padding: '2.5rem 2rem 1.5rem 2rem',
          marginTop: '2rem',
          marginBottom: '2rem',
          color: '#111',
          backdropFilter: 'blur(16px) saturate(180%)',
          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
          border: '1px solid rgba(255,255,255,0.25)',
          position: 'relative',
        }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <NavLink to="/copadocon2025-single" style={{ display: 'inline-block' }}>
              <img
                src={process.env.PUBLIC_URL + '/images/logos/CopadoCon Logo_Blue and Black@2x.png'}
                alt="CopadoCon 2025 Logo"
                style={{
                  maxWidth: '250px',
                  width: '80vw',
                  marginBottom: 12,
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
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
                    }}
                    onClick={() => setNavOpen(false)}
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
          `}</style>
          {/* CTA section for landing page */}
          <div className="copado-content">
            <Switch>
            <Route exact path="/copadocon2025-single" render={() => (
              <div style={{ textAlign: 'center', marginTop: 40, marginBottom: 40 }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 16 }}>Welcome to CopadoCon 2025!</h2>
                <p style={{ fontSize: '1.15rem', color: '#333', marginBottom: 24 }}>
                  Join us for the premier event for DevOps, Salesforce, and cloud professionals.<br />
                  Discover innovation, network with industry leaders, and be part of the future.
                </p>
                <NavLink
                  to="/copadocon2025-single/about"
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
                >
                  Learn More
                </NavLink>
              </div>
            )} />
            <Route exact path="/copadocon2025-single/about" component={About} />
            <Route exact path="/copadocon2025-single/sponsors" component={Sponsors} />
            <Route exact path="/copadocon2025-single/agenda" component={Agenda} />
            <Route exact path="/copadocon2025-single/speakers" component={Speakers} />
            <Route exact path="/copadocon2025-single/others" component={Others} />
            <Redirect to="/copadocon2025-single" />
          </Switch>
        </div>
        </div> {/* Close main content div */}
        <div style={{ width: '100%', marginTop: 'auto' }}>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default CopadoCon2025SingleNav;
