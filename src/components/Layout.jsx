import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import BookDetails from './BookDetails';
import Newsletter from './Newsletter';
import Footer from './Footer';
import Testimonials from './Testimonials';

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <div style={{ background: 'linear-gradient(135deg, #FEF3C7 0%, #FDDBA0 50%, #FEF3C7 100%)', padding: '2rem 0' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center' }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, #D97706)' }} />
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', color: '#D97706', fontStyle: 'italic', letterSpacing: '0.1em' }}>More from Sarah</span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, #D97706, transparent)' }} />
          </div>

        </div>
      </div>
      <BookDetails />
      <Testimonials/>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Layout;
