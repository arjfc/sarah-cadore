import React, { useState } from 'react';
import { FaEnvelope, FaPaperPlane, FaBook, FaStar, FaPhone } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <section id="contact" className="py-20" style={{ 
      background: `linear-gradient(to bottom right, #924B0E 0%, #1a1a1a 100%)`
    }}>
      <div className="container-custom mx-auto text-center">

        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: '#f5f5f5' }}>
          Stay in the dream
        </h2>

        <p className="text-lg mb-4 max-w-2xl mx-auto" style={{ color: 'rgba(245, 245, 245, 0.8)' }}>
          Join Sarah's newsletter for updates, new stories, and behind-the-scenes moments.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {authorData.email && (
            <div className="backdrop-blur-sm px-5 py-2 rounded-full inline-flex items-center gap-2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}>
              <FaEnvelope size={13} style={{ color: '#D97706' }} />
              <span className="text-sm" style={{ color: 'rgba(245, 245, 245, 0.8)' }}>{authorData.email}</span>
            </div>
          )}
          {authorData.phone && (
            <div className="backdrop-blur-sm px-5 py-2 rounded-full inline-flex items-center gap-2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}>
              <FaPhone size={13} style={{ color: '#D97706' }} />
              <span className="text-sm" style={{ color: 'rgba(245, 245, 245, 0.8)' }}>{authorData.phone}</span>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-6 py-3 rounded-md outline-none focus:ring-2"
            style={{ 
              backgroundColor: 'rgba(26, 26, 26, 0.95)',
              color: '#1a1a1a'
            }}
            required
          />
          <button
            type="submit"
            className="px-8 py-3 rounded-md font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 shadow-lg hover:opacity-90"
            style={{ 
              backgroundColor: '#D97706',
              color: '#1a1a1a'
            }}
          >
            <FaPaperPlane size={16} />
            Subscribe
          </button>
        </form>

        {submitted && (
          <div className="mt-4 backdrop-blur-sm rounded-md p-3 inline-block mx-auto animate-pulse" style={{ 
            backgroundColor: 'rgba(234, 88, 12, 0.2)'
          }}>
            <p className="font-semibold" style={{ color: '#EA580C' }}>
              Thank you for subscribing!
            </p>
          </div>
        )}

        <div className="flex items-center justify-center gap-3 mt-6 text-sm flex-wrap" style={{ color: 'rgba(245, 245, 245, 0.6)' }}>
          <div className="flex items-center gap-1 px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(255, 255, 255, 0.07)' }}>
            <FaStar size={11} style={{ color: '#D97706' }} />
            <span>New stories</span>
          </div>
          <div className="flex items-center gap-1 px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(255, 255, 255, 0.07)' }}>
            <FaBook size={11} style={{ color: '#D97706' }} />
            <span>Behind-the-scenes</span>
          </div>
          <div className="flex items-center gap-1 px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(255, 255, 255, 0.07)' }}>
            <FaStar size={11} style={{ color: '#EA580C' }} />
            <span>Inspiration</span>
          </div>
        </div>

        <p className="text-xs mt-6" style={{ color: 'rgba(245, 245, 245, 0.3)' }}>
          No spam ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;