import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems, PUBLIC_URL } from '../../data/constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleNavigation = (href: string): void => {
    setIsMenuOpen(false);
    
    if (href.startsWith('#')) {
      if (location.pathname === '/') {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If we're not on the home page, first navigate to home
        window.location.href = '/' + href;
      }
    } else {
      // For non-hash routes (like /core-team), just let the Link component handle it
      scrollToTop();
    }
  };

  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{
        background: '#000000',
        backgroundImage: 'linear-gradient(to right, #434343, #000000)'
      }}>
      <div className="container position-relative py-2">{/* Brand Name */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/" onClick={scrollToTop}>
          <img 
            src={`${PUBLIC_URL}/images/logos/New-Dreamin-Logo-White.png`}
            alt="Bengaluru Dreamin Logo"
            style={{ height: "40px" }}
            className="d-inline-block align-text-top"
          />
         
        </Link>

        {/* Hamburger Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleMenu}
          aria-controls="navbarNav" 
          aria-expanded={isMenuOpen} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Items */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <Link 
                  className="nav-link text-white" 
                  to={item.href}
                  onClick={() => handleNavigation(item.href)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;