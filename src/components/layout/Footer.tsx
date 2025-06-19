import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-100 bg-dark text-white py-4">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Logo/Brand */}
          <div className="col-md-4 col-12 text-center text-md-start mb-3 mb-md-0">
            <h5 className="mb-0 fw-bold">Bengaluru DreamInn</h5>
          </div>
          {/* Social Media Links */}
          <div className="col-md-4 col-12 text-center mb-3 mb-md-0">
            <div className="d-flex justify-content-center align-items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
                style={{ transition: 'color 0.3s' }}
                onMouseOver={e => (e.currentTarget.style.color = '#E4405F')}
                onMouseOut={e => (e.currentTarget.style.color = 'white')}
              >
                Instagram
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
                style={{ transition: 'color 0.3s' }}
                onMouseOver={e => (e.currentTarget.style.color = '#FF0000')}
                onMouseOut={e => (e.currentTarget.style.color = 'white')}
              >
                YouTube
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
                style={{ transition: 'color 0.3s' }}
                onMouseOver={e => (e.currentTarget.style.color = '#0077B5')}
                onMouseOut={e => (e.currentTarget.style.color = 'white')}
              >
                LinkedIn
              </a>
              <a
                href="/contact"
                className="text-white text-decoration-none"
                style={{ transition: 'color 0.3s' }}
                onMouseOver={e => (e.currentTarget.style.color = '#28a745')}
                onMouseOut={e => (e.currentTarget.style.color = 'white')}
              >
                Contact Us
              </a>
            </div>
          </div>
          {/* Made with Love */}
          <div className="col-md-4 col-12 text-center text-md-end">
            <small className="text-light">Made with ❤️ for Bengaluru Dreaminn</small>
          </div>
        </div>
        {/* Copyright */}
        <hr className="border-secondary my-3" />
        <div className="row">
          <div className="col-12 text-center">
            <small className="">
              © {new Date().getFullYear()} Bengaluru DreamInn. All rights reserved.
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;