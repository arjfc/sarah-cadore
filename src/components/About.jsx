import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const About = () => {
  return (
    <section id="about" className="py-10" style={{ backgroundColor: '#FEF3C7' }}>
      <div className="container-custom mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-3" style={{ color: '#924B0E' }}>
            {authorData.fullName}
          </h2>
          <div className="section-divider mb-4" style={{ background: 'linear-gradient(90deg, transparent, #924B0E, transparent)' }}></div>
          
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          
          {/* Author Image - Larger with decorative frame */}
          <div className="flex justify-center">
            <div className="relative" style={{ maxWidth: '440px', width: '100%' }}>
              {/* Decorative frame corners */}
              <div 
                className="absolute -top-4 -left-4 w-8 h-8 border-t-3 border-l-3"
                style={{ borderColor: '#D97706' }}
              ></div>
              <div 
                className="absolute -bottom-4 -right-4 w-8 h-8 border-b-3 border-r-3"
                style={{ borderColor: '#EA580C' }}
              ></div>

              <img
                src="/images/sarah-cadore.jpg"
                alt={authorData.fullName}
                className="w-full h-auto object-cover rounded-lg shadow-xl"
              />
              {/* Author Quick Facts */}
              <div className="grid grid-cols-2 gap-6 mt-16">
                {[
                  { label: '3 Books', value: 'Published' },
                  { label: "Master's", value: 'Science' },
                  { label: 'Writing', value: 'Since 2016' },
                  { label: 'Upstate', value: 'New York' }
                ].map((fact, i) => (
                  <div key={i} className="text-center" style={{ backgroundColor: 'rgba(217, 119, 6, 0.08)', padding: '8px', borderRadius: '6px', border: '1px solid rgba(217, 119, 6, 0.2)' }}>
                    <p className="font-tagline text-xs" style={{ color: '#D97706' }}>{fact.label}</p>
                    <p className="font-author text-xs" style={{ color: '#924B0E' }}>{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Author Bio */}
          <div className="space-y-4">
            {/* Bio Text */}
            <div
              className="rounded-lg p-6 shadow-md"
              style={{ 
                backgroundColor: '#f5f5f5',
                border: '2px solid rgba(217, 119, 6, 0.2)'
              }}
            >
              {authorData.authorBio.fullBio.split('\n\n').map((para, i) => (
                <p 
                  key={i} 
                  className="leading-relaxed text-sm mb-3 last:mb-0" 
                  style={{ color: '#924B0E' }}
                >
                  {para}
                </p>
              ))}
            </div>

          
            {/* Tagline Quote */}
            <div
              className="rounded-lg p-6 shadow-md border-l-4"
              style={{ 
                backgroundColor: '#f5f5f5',
                border: '2px solid rgba(217, 119, 6, 0.2)',
                borderLeftColor: '#D97706'
              }}
            >
              <FaQuoteLeft style={{ color: '#D97706' }} className="mb-3" size={24} />
              <p className="italic text-sm leading-relaxed" style={{ color: '#924B0E' }}>
                "{authorData.tagline}"
              </p>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
      `}</style>
    </section>
  );
};

export default About;