import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Testimonials = () => {
  return (
    <section id="reviews" className="py-10" style={{ backgroundColor: '#FEF3C7' }}>
      <div className="container-custom mx-auto">

         {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{ 
              border: '2px solid #D97706',
              backgroundColor: 'rgba(217, 119, 6, 0.08)'
            }}
          >
            <span className="font-tagline text-xs" style={{ color: '#D97706' }}>
              WHAT READERS SAY
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-3" style={{ color: '#924B0E' }}>
            Testimonials
          </h2>

          <div className="section-divider mb-6" style={{ background: 'linear-gradient(90deg, transparent, #924B0E, transparent)' }}></div>

          <p className="text-sm" style={{ color: '#924B0E' }}>
            What readers are saying about <span style={{ color: '#D97706' }}>The Dream</span>
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {authorData.testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              style={{ 
                backgroundColor: '#f5f5f5',
                border: '2px solid rgba(217, 119, 6, 0.2)',
                borderTopColor: '#D97706',
                borderTopWidth: '3px'
              }}
            >

              {/* Quote */}
              <FaQuoteLeft style={{ color: '#D97706' }} className="mb-3" size={24} />

              <p className="text-sm leading-relaxed mb-4 italic" style={{ color: '#924B0E' }}>
                "{testimonial.review}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t" style={{ borderColor: 'rgba(217, 119, 6, 0.15)' }}>
                <p className="font-author text-xs mb-1" style={{ color: '#D97706' }}>
                  {testimonial.name}
                </p>
                <p className="font-tagline text-xs" style={{ color: 'rgba(146, 75, 14, 0.6)' }}>
                  {testimonial.date}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;