import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'book', 'contact'];
      const scrollPosition = window.scrollY + 150;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveTab(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'BOOK', href: '#book', id: 'book' },
    { name: 'REVIEWS', href: '#reviews', id: 'reviews' },
    { name: 'NEWSLETTER', href: '#contact', id: 'contact' },
  ];

  const handleClick = (e, href, id) => {
    e.preventDefault();
    setActiveTab(id);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg py-3' : 'py-5'
      }`}
      style={{ 
        backgroundColor: scrolled ? '#2d2d2d' : 'rgba(45, 45, 45, 0.95)',
        backdropFilter: scrolled ? 'blur(10px)' : 'blur(5px)'
      }}
    >
      <div className="container-custom mx-auto flex justify-between items-center">
        {/* Logo - Author Name */}
        <a
          href="#home"
          className="flex items-center gap-2 group cursor-pointer"
          onClick={(e) => handleClick(e, '#home', 'home')}
        >
          <span className="font-display text-2xl" style={{ color: '#D97706' }}>
            {authorData.name}
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href, item.id)}
              className={`px-4 py-2 rounded-md transition-all duration-300 font-author text-xs`}
              style={{ 
                backgroundColor: activeTab === item.id ? '#D97706' : 'transparent',
                color: activeTab === item.id ? '#2d2d2d' : '#f5f5f5'
              }}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#book"
          className="hidden sm:block px-6 py-2 rounded-md font-semibold transition-all duration-300 transform hover:opacity-90"
          style={{ 
            backgroundColor: '#D97706',
            color: '#f5f5f5'
          }}
        >
          Get the book
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ color: '#D97706' }}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full shadow-xl border-t animate-slide-down" style={{ 
          borderColor: 'rgba(217, 119, 6, 0.2)',
          backgroundColor: '#2d2d2d'
        }}>
          <div className="flex flex-col gap-2 py-4 px-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-3 rounded-md transition-all duration-300 font-author text-xs`}
                style={{ 
                  backgroundColor: activeTab === item.id ? 'rgba(217, 119, 6, 0.2)' : 'transparent',
                  color: activeTab === item.id ? '#D97706' : '#f5f5f5'
                }}
                onClick={(e) => handleClick(e, item.href, item.id)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#book"
              className="px-4 py-3 rounded-md font-semibold mt-2 text-xs text-center"
              style={{ 
                backgroundColor: '#D97706',
                color: '#f5f5f5'
              }}
              onClick={(e) => handleClick(e, '#book', 'book')}
            >
              Get the book
            </a>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down { animation: slide-down 0.3s ease-out; }
      `}</style>
    </nav>
  );
};

export default Navigation;