import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ctaData } from '../../data/ctaData';
import '../../styles/HomepageCTA.css';

const HomepageCTA: React.FC = () => {
  return (
    <div className="homepage-cta-bg relative bg-gradient-copado text-white overflow-hidden flex flex-col md:flex-row items-center justify-center min-h-[70vh] py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-400 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-400 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-indigo-400 rounded-full animate-pulse delay-700"></div>
      </div>

      {/* Left: Image with animation */}
      <div className="flex-1 cta-image-container flex items-center justify-center w-full md:w-1/2 p-0 md:p-0 h-full min-h-[350px] animate-fadeInLeft">
        <div className="relative group">
          <img
            src={process.env.PUBLIC_URL + '/images/eventsposters/copado.png'}
            alt="Copado Logo"
            className="cta-copado-img drop-shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1"
            style={{
              borderRadius: '1rem',
              background: 'rgba(0, 0, 0, 0.05)',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              animation: 'float 3s ease-in-out infinite'
            }}
          />
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
        </div>
      </div>

      {/* Right: Text & CTA with staggered animations */}
      <div className="flex-1 flex flex-col items-center md:items-start justify-center w-full md:w-1/2 p-4 md:p-8 z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center md:text-left bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent animate-slideInRight">
          {ctaData.title}
        </h1>
        
        <p className="text-lg md:text-2xl text-blue-100 mb-2 text-center md:text-left font-semibold tracking-wide animate-slideInRight delay-200">
          {ctaData.subtitle}
        </p>
        
        <div className="flex cta-btn-modern flex-col sm:flex-row items-center md:justify-start gap-10 mb-8 mt-4 w-full animate-slideInRight delay-400">
          <a
            href={ctaData.registerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn-primary px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-2xl flex items-center gap-2 group relative overflow-hidden"
            style={{ letterSpacing: '0.04em' }}
          >
            {/* Button background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <span className="flex items-center gap-2 relative z-10">
              {ctaData.registerText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomepageCTA;