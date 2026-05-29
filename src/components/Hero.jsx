import React from 'react';
import { FaArrowRight, FaChevronRight } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
      style={{ backgroundColor: '#2d2d2d' }}
    >
      {/* Background glows with parallax */}
      <div 
        className="absolute top-20 right-10 w-64 h-64 rounded-full blur-3xl opacity-20 animate-parallax-glow"
        style={{ backgroundColor: '#D97706' }}
      ></div>
      <div 
        className="absolute bottom-20 left-10 w-80 h-80 rounded-full blur-3xl opacity-15 animate-parallax-glow-delayed"
        style={{ backgroundColor: '#EA580C' }}
      ></div>

      <div className="container-custom mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="text-center md:text-left animate-fade-in-left">
            <p className="font-tagline text-xs mb-6" style={{ color: '#D97706' }}>
              A Story of Wonder, Family, and Dreams
            </p>

            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-none mb-2" style={{ color: '#D97706' }}>
              The Dream
            </h1>
            <h2 className="font-display-italic text-2xl md:text-3xl leading-relaxed mb-6" style={{ color: '#d0d0d0' }}>
              by {authorData.name}
            </h2>

            <div className="section-divider mb-6 md:mx-0"></div>

            <p className="text-base mb-10 leading-relaxed max-w-md" style={{ color: '#d0d0d0' }}>
              A heartwarming story of family, wonder, and the dreams that bind us together — told through the eyes of a child.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#book"
                className="font-author text-xs px-8 py-3 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 group transform hover:-translate-y-1 shadow-lg"
                style={{ backgroundColor: '#D97706', color: '#f5f5f5' }}
              >
                Get the book
                <FaArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#book"
                className="font-author text-xs px-8 py-3 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 hover:opacity-80"
                style={{ border: `2px solid #d0d0d0`, color: '#d0d0d0' }}
              >
                Read more
                <FaChevronRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Image - Book Cover */}
          <div className="relative flex justify-center md:justify-end animate-silhouette-reveal">
            <div className="relative" style={{ maxWidth: '320px', width: '100%' }}>
              <img
                src="/images/the-dream.jpg"
                alt="The Dream - Book Cover"
                className="relative w-full h-auto object-cover rounded-sm shadow-2xl"
                style={{ minHeight: '500px' }}
              />
              {/* Name overlay at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 px-6 py-4 rounded-b-sm text-center"
                style={{ background: 'linear-gradient(to top, rgba(26,26,26,0.95), transparent)' }}
              >
                <p className="font-author text-sm" style={{ color: '#D97706' }}>The Dream</p>
                <p className="font-tagline text-xs opacity-70" style={{ color: '#f5f5f5' }}>{authorData.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes parallax-glow {
          0%, 100% { transform: translateY(0px); opacity: 0.2; }
          50% { transform: translateY(-20px); opacity: 0.25; }
        }
        @keyframes parallax-glow-delayed {
          0%, 100% { transform: translateY(0px); opacity: 0.15; }
          50% { transform: translateY(-15px); opacity: 0.2; }
        }
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes silhouette-reveal {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-parallax-glow { animation: parallax-glow 6s ease-in-out infinite; }
        .animate-parallax-glow-delayed { animation: parallax-glow-delayed 7s ease-in-out infinite; }
        .animate-fade-in-left { animation: fade-in-left 0.8s ease-out; }
        .animate-silhouette-reveal { animation: silhouette-reveal 0.8s ease-out 0.2s both; }
      `}</style>
    </section>
  );
};

export default Hero;