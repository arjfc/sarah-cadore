import React from 'react';
import { FaStar, FaUser, FaCalendarAlt, FaQuoteRight, FaPenFancy } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Testimonials = () => {
  const testimonials = authorData.testimonials;

  return (
    <section className="py-20" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="container-custom mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md mb-4" style={{ backgroundColor: 'rgba(217, 119, 6, 0.1)' }}>
            <span className="font-tagline text-xs" style={{ color: '#D97706' }}>
              WHAT READERS SAY
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: '#f5f5f5' }}>
            Testimonials
          </h2>
          <div className="section-divider mb-4"></div>

          <p style={{ color: 'rgba(245, 245, 245, 0.55)' }}>
            What readers are saying about{' '}
            <span className="italic font-semibold" style={{ color: '#f5f5f5' }}>
              "{authorData.book.fullTitle}"
            </span>
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="rounded-md p-6 shadow-lg border-t-4 hover:shadow-xl transition-all duration-300"
              style={{ 
                borderColor: '#D97706',
                backgroundColor: 'rgba(26, 26, 26, 0.6)'
              }}
            >
              <FaQuoteRight className="mb-3" size={26} style={{ color: 'rgba(217, 119, 6, 0.3)' }} />

              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} size={15} style={{ color: '#D97706' }} />
                ))}
              </div>

              <p className="text-sm italic mb-4 leading-relaxed" style={{ color: 'rgba(245, 245, 245, 0.7)' }}>
                "{testimonial.review}"
              </p>

              <div className="flex items-center gap-2 pt-3 border-t" style={{ borderColor: 'rgba(234, 88, 12, 0.15)' }}>
                <div className="p-2 rounded-full" style={{ backgroundColor: 'rgba(217, 119, 6, 0.1)' }}>
                  <FaUser size={13} style={{ color: '#D97706' }} />
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: '#D97706' }}>
                    {testimonial.name}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-xs" style={{ color: 'rgba(245, 245, 245, 0.4)' }}>
                    <span>{testimonial.title}</span>
                    {testimonial.date && (
                      <>
                        <span>{testimonial.date}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
