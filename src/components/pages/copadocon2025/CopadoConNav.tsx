import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'About', path: '/copadocon2025/about' },
  { label: 'Sponsors', path: '/copadocon2025/sponsors' },
  { label: 'Agenda', path: '/copadocon2025/agenda' },
  { label: 'Speakers', path: '/copadocon2025/speakers' },
  { label: 'Others', path: '/copadocon2025/others' },
];

const CopadoConNav: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav
      style={{
        background: 'rgba(255,255,255,0.55)',
        borderRadius: 18,
        boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)',
        margin: '2rem auto 2.5rem',
        maxWidth: 800,
        width: '95%',
        position: 'relative',
        padding: '0.5rem 0',
        overflow: 'hidden',
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        border: '1px solid rgba(255,255,255,0.25)',
      }}
    >
      {/* Hamburger for mobile */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: 'none',
          position: 'absolute',
          right: 20,
          top: 16,
          background: 'none',
          border: 'none',
          fontSize: 28,
          cursor: 'pointer',
          zIndex: 2,
        }}
        className="copado-nav-hamburger"
        aria-label="Toggle navigation"
      >
        <span style={{ display: 'block', width: 28, height: 4, background: '#222', margin: '6px 0', borderRadius: 2 }}></span>
        <span style={{ display: 'block', width: 28, height: 4, background: '#222', margin: '6px 0', borderRadius: 2 }}></span>
        <span style={{ display: 'block', width: 28, height: 4, background: '#222', margin: '6px 0', borderRadius: 2 }}></span>
      </button>
      <ul
        className={`copado-nav-list${open ? ' open' : ''}`}
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
              }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <style>{`
        @media (max-width: 700px) {
          .copado-nav-list {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.5rem !important;
            background: rgba(255,255,255,0.85);
            position: absolute;
            top: 56px;
            left: 0;
            right: 0;
            width: 100%;
            border-radius: 0 0 18px 18px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            padding: 1rem 1.5rem !important;
            z-index: 10;
            display: ${open ? 'flex' : 'none'} !important;
            border-top: none !important;
            backdrop-filter: blur(16px) saturate(180%);
            -webkit-backdrop-filter: blur(16px) saturate(180%);
          }
          .copado-nav-hamburger {
            display: block !important;
          }
        }
        @media (max-width: 700px) {
          .copado-nav-list:not(.open) {
            border-top: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default CopadoConNav;