import React from 'react';
import { FaEnvelope, FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Footer = () => {
  return (
    <footer className="py-10" style={{ 
      backgroundColor: '#1a1a1a',
      color: 'rgba(245, 245, 245, 0.7)'
    }}>
      <div className="container-custom mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Author Info */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl mb-2" style={{ color: '#D97706' }}>
              The Dream
            </h3>
            <p className="font-tagline text-xs" style={{ color: 'rgba(245, 245, 245, 0.55)' }}>
              A story of wonder, family, and the power of dreaming.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex gap-8 text-sm">
            <div>
              <p className="font-author text-xs mb-2" style={{ color: '#D97706' }}>NAVIGATE</p>
              <ul className="space-y-1" style={{ color: 'rgba(245, 245, 245, 0.6)' }}>
                <li><a href="#about" className="hover:text-white transition">About</a></li>
                <li><a href="#book" className="hover:text-white transition">Book details</a></li>
                <li><a href="#reviews" className="hover:text-white transition">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-white transition">Newsletter</a></li>
              </ul>
            </div>
            <div>
              <p className="font-author text-xs mb-2" style={{ color: '#D97706' }}>GET THE BOOK</p>
              <ul className="space-y-1" style={{ color: 'rgba(245, 245, 245, 0.6)' }}>
                <li><a href="#" className="hover:text-white transition">Amazon</a></li>
                <li><a href="#" className="hover:text-white transition">Barnes & Noble</a></li>
                <li><a href="#" className="hover:text-white transition">Book Depository</a></li>
                <li><a href="#" className="hover:text-white transition">Local bookstores</a></li>
              </ul>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            {[
              { Icon: FaTwitter, url: '#' },
              { Icon: FaInstagram, url: '#' },
              { Icon: FaFacebookF, url: '#' },
              { Icon: FaLinkedinIn, url: '#' }
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                className="transition-all duration-300 hover:scale-110 transform"
                style={{ 
                  color: 'rgba(245, 245, 245, 0.6)'
                }}
              >
                <social.Icon size={18} />
              </a>
            ))}
            {authorData.email && (
              <a
                href={`mailto:${authorData.email}`}
                className="transition-all duration-300 hover:scale-110 transform"
                style={{ 
                  color: 'rgba(245, 245, 245, 0.6)'
                }}
              >
                <FaEnvelope size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-8 pt-6 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }}>
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://buy.stripe.com/7sY5kEdVm6vNfRU8Ey2kw07"
              target="_blank"
              rel="noopener noreferrer"
              className="font-author text-xs px-8 py-3 rounded-sm transition-all duration-300 transform hover:-translate-y-0.5 hover:opacity-90 shadow-lg"
              style={{ 
                background: 'linear-gradient(90deg, #924B0E, #D97706, #924B0E)',
                color: '#f5f5f5',
                letterSpacing: '0.15em'
              }}
            >
              Launch & Go-Live Portal
            </a>
            <p className="font-tagline text-xs text-center" style={{ color: 'rgba(245, 245, 245, 0.35)' }}>
              © 2026 Sarah J. Cadore. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;