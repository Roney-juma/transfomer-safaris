import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import images from src/images (exclude the logo file)
import elephant from '../images/elepant.jpg';
import giraffe from '../images/giraffe.avif';
import lion from '../images/lion.jpg';
import w1 from '../images/WhatsApp Image 2026-01-15 at 13.09.39.jpeg';
import w2 from '../images/WhatsApp Image 2026-01-15 at 13.10.25.jpeg';
import w3 from '../images/WhatsApp Image 2026-01-15 at 13.10.26.jpeg';
import w4 from '../images/WhatsApp Image 2026-01-15 at 13.10.27 (1).jpeg';
import w5 from '../images/WhatsApp Image 2026-01-15 at 13.10.27.jpeg';

const slides = [
  { id: 1, src: elephant, caption: 'Elephant Plains' },
  { id: 2, src: giraffe, caption: 'Giraffe Horizon' },
  { id: 3, src: lion, caption: 'Majestic Lion' },
  { id: 4, src: w1, caption: 'Safari Moment 1' },
  { id: 5, src: w2, caption: 'Safari Moment 2' },
  { id: 6, src: w3, caption: 'Safari Moment 3' },
  { id: 7, src: w4, caption: 'Safari Moment 4' },
  { id: 8, src: w5, caption: 'Safari Moment 5' }
];

const LandingCarousel = ({ autoPlay = true, interval = 4500 }) => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const containerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  // autoplay
  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(id);
  }, [isPlaying, interval]);

  // keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // touch handlers for swipe support
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
    setIsPlaying(false);
  };

  const onTouchMove = (e) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const onTouchEnd = () => {
    const threshold = 50; // px
    if (touchDeltaX.current > threshold) {
      prev();
    } else if (touchDeltaX.current < -threshold) {
      next();
    }
    touchDeltaX.current = 0;
    setIsPlaying(autoPlay);
  };

  const prev = () => setIndex((prevI) => (prevI - 1 + slides.length) % slides.length);
  const next = () => setIndex((prevI) => (prevI + 1) % slides.length);

  return (
    <section className="relative w-full bg-gray-100">
      <div
        ref={containerRef}
        className="relative overflow-hidden w-full h-[480px] md:h-[560px] lg:h-[640px]"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(autoPlay)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        role="region"
        aria-roledescription="carousel"
        aria-label="Landing image carousel"
      >
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              i === index ? 'translate-x-0 z-10' : i < index ? '-translate-x-full z-0' : 'translate-x-full z-0'
            }`}
            aria-hidden={i === index ? 'false' : 'true'}
          >
            <img
              src={slide.src}
              alt={slide.caption}
              className="w-full h-full object-cover"
              loading={i === index || i === (index + 1) % slides.length || i === (index - 1 + slides.length) % slides.length ? 'eager' : 'lazy'}
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute left-6 bottom-8 text-white">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">{slide.caption}</h3>
              <a href="#tours" className="inline-block mt-4 bg-safari-orange text-white px-5 py-3 rounded-full font-medium hover:opacity-90">
                Explore Tours
              </a>
            </div>
          </div>
        ))}

        {/* Left / Right Arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicators */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex space-x-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? 'bg-safari-orange scale-110' : 'bg-white/60 hover:bg-white'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="container mx-auto px-4 mt-4">
        <div className="flex items-center justify-center space-x-3 overflow-x-auto py-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setIndex(i)}
              className={`flex-shrink-0 w-20 h-14 rounded-md overflow-hidden border-2 ${
                i === index ? 'border-safari-orange scale-105' : 'border-transparent'
              } transition-transform`}
            >
              <img src={s.src} alt={s.caption} className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingCarousel;
