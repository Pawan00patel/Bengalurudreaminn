import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import {  PUBLIC_URL } from '../../data/constants';
import '../../styles/BengaluruDreamin2025.css';

interface NavItem {
  label: string;
  path: string;
  isSection: boolean;
}

const navItems: NavItem[] = [
  { label: 'Speakers', path: 'speakers', isSection: true },
  { label: 'Agenda', path: 'agenda', isSection: true },
  { label: 'Our Team', path: 'our-team', isSection: true },
  { label: 'Gallery', path: 'gallery', isSection: true },
  { label: 'Blog', path: 'blog', isSection: true },
  { label: 'Sponsors', path: 'sponsors', isSection: true },
];

const BengaluruDreaminNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`bengaluru-dreamin-nav${scrolled ? ' scrolled' : ' transparent'}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        background: scrolled ? 'rgba(15, 11, 11, 0.85)' : 'transparent',
        boxShadow: scrolled ? '0 2px 16px 0 rgba(0,0,0,0.10)' : 'none',
        transition: 'background 0.3s, box-shadow 0.3s',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="container">
         <a
                 className="navbar-brand d-flex align-items-center gap-2"
                 href="/"
                 style={{ marginLeft: '1px' }}
               >
                 <img
                   src={`${PUBLIC_URL}/images/logos/New-Dreamin-Logo-White.png`}
                   alt="Bengaluru Dreamin Logo"
                   style={{ height: '36px' }}
                   className="d-inline-block align-text-top"
                 />
               </a>
        <button
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg
            className={isMenuOpen ? 'hidden' : 'block'}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <svg
            className={isMenuOpen ? 'block' : 'hidden'}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            item.isSection ? (
              <ScrollLink
                key={item.path}
                to={item.path}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </ScrollLink>
            ) : (
              <Link
                key={item.path}
                to={`/BengaluruDreamin2025/${item.path}`}
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BengaluruDreaminNavbar;
