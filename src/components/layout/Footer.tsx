import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-100 bg-dark text-white py-4 footer-blur">
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
                aria-label="Instagram"
              >
                <img
                  src="/images/socialmediaicons/icons8-instagram-48.png"
                  alt="Instagram"
                  style={{ width: 28, height: 28 }}
                />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <img
                  src="/images/socialmediaicons/icons8-youtube-48.png"
                  alt="YouTube"
                  style={{ width: 28, height: 28 }}
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img
                  src="/images/socialmediaicons/icons8-linkedin-48.png"
                  alt="LinkedIn"
                  style={{ width: 28, height: 28 }}
                />
              </a>
          
            </div>
          </div>
          {/* Made with Love */}
          <div className="col-md-4 col-12 text-center text-md-end">
            <small className="text-light">
              Made with ❤️ for Bengaluru Dreaminn
            </small>
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