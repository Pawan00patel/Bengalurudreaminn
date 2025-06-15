import React, { useState, useEffect } from 'react';
import { MapPin, ChevronUp } from 'lucide-react';
import { FC } from 'react';

const Footer: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <footer 
      className="text-white py-12 relative" 
      style={{
        background: '#000000',
        backgroundImage: 'linear-gradient(to right, #434343, #000000)'
      }}
    >
      {/* {isVisible && (
        <button          onClick={scrollToTop}
          className="fixed bottom-4 right-4 text-white p-3 rounded-full transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} className="text-white" />
        </button>
      )} */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-start">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">BD</span>
              </div>
              <h2 className="text-2xl font-bold">Bengaluru Dreamin</h2>
            </div>
            <p className="text-gray-400 text-base mt-3">
              The biggest and most vibrant Salesforce community event in the world.
            </p>
          </div>          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#about" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 block"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#speakers" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 block"
                  >
                    Speakers
                  </a>
                </li>
                <li>
                  <a 
                    href="#events" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 block"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 block"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Community</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://trailblazer.me" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Trailblazer Community
                  </a>
                </li>
                <li>
                  <a 
                    href="https://trailhead.salesforce.com/trailblazer-community/groups" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    User Groups
                  </a>
                </li>
                <li>
                  <a 
                    href="/j2s-program" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 block"
                  >
                    J2S Program
                  </a>
                </li>
                <li>
                  <a 
                    href="/mentorship" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 block"
                  >
                    Mentorship
                  </a>
                </li>
              </ul>
            </nav>
          </div>          {/* Location */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Location</h3>
            <address className="not-italic">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p className="font-medium">Sheraton Grand Whitefield</p>
                  <p className="mt-1">Bengaluru, Karnataka</p>
                  <p className="mt-1">India</p>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700/50 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Bengaluru Dreamin. All rights reserved. 
            <span className="mx-1">·</span>
            Made with <span className="text-red-500 mx-1">❤️</span> for the Salesforce community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;