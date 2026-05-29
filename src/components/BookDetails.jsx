import React, { useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const BookDetails = () => {
  const [activeBookIndex, setActiveBookIndex] = useState(0);

  const books = [
    {
      title: "The Dream",
      image: "/images/the-dream.jpg",
      year: "2016",
      description: authorData.book.description
    },
    {
      title: "You Don't Have To Be Old To Be Wise",
      image: "/images/old-to-be-wise.jpg",
      year: "2018",
      description: [
        "You Don't Have To Be Old To Be Wise is a collection of stories, experiences and insights about life. You Don't Have To Be Old To Be Wise is filled with great advice, truth, sayings and proverbs.",
        "Through the writings of two-time Author Sarah J. Cadore you will find inspiration, motivation and encouragement; let these inspirational words motivate and encourage you."
      ]
    },
    {
      title: "The Dream - Sequel",
      image: "/images/secret.jpg",
      year: "Coming Soon",
      description: [
        "Despite losing her biological parents at the tender age of six and being brought up by people with whom she shared no bloodline, Stella turned out to be a strong, powerful woman. She had it all. She had found her long-lost brother, and surrounded by people who loved her, she was able to fend off Susan, her nemesis grandmother who pursued her with hopes of seeing her fail, if not dead. Yet deep within, Stella was missing something. She did not know who she was. From whom did she get her strength? Where did she get her tenacity? She had to find out. To set a course for where she was going, Stella had to know where she came from.",
        "Using her honeymoon to search for her father's relatives on the island of Aruba, Stella left no stone unturned. However, what she uncovered was a web of secrets held and lies told even by those she trusted most.",
        "As perturbed as she was, Stella could not have imagined that this was only the tip of the iceberg. There were still more secrets to uncover--secrets that would devastate others, secrets that would prove that her entire life was a lie."
      ]
    }
  ];

  const currentBook = books[activeBookIndex];


  return (
    <section id="book" className="py-8" style={{ backgroundColor: '#FEF3C7' }}>
      <div className="container-custom mx-auto">

        {/* Compact Carousel */}
        <div
          className="rounded-md p-5 shadow-sm mb-6"
          style={{ 
            backgroundColor: '#f5f5f5',
            border: '1px solid rgba(217, 119, 6, 0.15)'
          }}
        >
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Small Book Image */}
            <div className="flex flex-col items-center gap-4 w-full md:w-auto">
              <div style={{ minWidth: '160px', maxWidth: '200px', width: '100%' }}>
                <img
                  src={currentBook.image}
                  alt={currentBook.title}
                  className="w-full h-auto object-cover rounded"
                />
              </div>
              {/* Thumbnail Nav — horizontal on mobile, vertical on desktop */}
              <div className="flex md:hidden flex-row gap-3 justify-center">
                {books.map((book, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveBookIndex(idx)}
                    className="group transition-all duration-300"
                    title={book.title}
                  >
                    <div
                      className="overflow-hidden rounded-sm transition-all duration-300 group-hover:scale-105"
                      style={{
                        width: '44px',
                        height: '60px',
                        border: idx === activeBookIndex ? '2px solid #D97706' : '2px solid rgba(217, 119, 6, 0.2)',
                        opacity: idx === activeBookIndex ? 1 : 0.45,
                        boxShadow: idx === activeBookIndex ? '0 0 8px rgba(217,119,6,0.4)' : 'none'
                      }}
                    >
                      <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Book Info */}
            <div className="flex-1">
              <p className="font-tagline text-xs mb-1" style={{ color: '#D97706' }}>
                {currentBook.year}
              </p>
              <h3 className="font-display text-xl font-bold mb-3" style={{ color: '#924B0E' }}>
                {currentBook.title}
              </h3>
              <div className="space-y-2 mb-4">
                {(Array.isArray(currentBook.description) ? currentBook.description : [currentBook.description]).map((para, i) => (
                  <p key={i} className="text-xs leading-relaxed" style={{ color: '#924B0E' }}>
                    {para}
                  </p>
                ))}
              </div>
              <button
                className="px-5 py-2 rounded text-sm font-semibold transition-all hover:opacity-90"
                style={{ 
                  backgroundColor: '#D97706',
                  color: '#f5f5f5'
                }}
              >
                Get {currentBook.title}
              </button>
            </div>

            {/* Thumbnail Dot Navigation — vertical, desktop only */}
            <div className="hidden md:flex flex-col gap-3 justify-center">
              {books.map((book, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveBookIndex(idx)}
                  className="group relative transition-all duration-300"
                  title={book.title}
                >
                  <div
                    className="overflow-hidden rounded-sm transition-all duration-300 group-hover:scale-105"
                    style={{
                      width: '44px',
                      height: '60px',
                      border: idx === activeBookIndex ? '2px solid #D97706' : '2px solid rgba(217, 119, 6, 0.2)',
                      opacity: idx === activeBookIndex ? 1 : 0.45,
                      boxShadow: idx === activeBookIndex ? '0 0 8px rgba(217,119,6,0.4)' : 'none'
                    }}
                  >
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Quote */}
        <div 
          className="rounded-md p-5 shadow-sm"
          style={{ 
            backgroundColor: '#f5f5f5',
            border: '2px solid rgba(217, 119, 6, 0.2)',
            borderLeft: '4px solid #D97706'
          }}
        >
          <FaQuoteLeft style={{ color: '#D97706' }} className="mb-2" size={20} />
          <p className="italic text-sm leading-relaxed mb-2" style={{ color: '#924B0E' }}>
            "Things will happen in life; the most important thing to remember is you are love, remain whole, and keep shining your light."
          </p>
          <p className="font-author text-xs" style={{ color: '#D97706' }}>
            — From The Dream
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;