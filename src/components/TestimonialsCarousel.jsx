import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Users, MapPin, CheckCircle, Shuffle } from 'lucide-react';
import { indianTestimonials, siteConfig } from '../data/siteData';

// Utility to shuffle array randomly (Fisher-Yates)
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function TestimonialsCarousel() {
  // Randomize testimonial order on initial load so different candidates appear every time
  const [items, setItems] = useState(() => shuffleArray(indianTestimonials));
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const randomSlide = () => {
    if (items.length <= 1) return;
    let nextIdx = Math.floor(Math.random() * items.length);
    while (nextIdx === currentIndex) {
      nextIdx = Math.floor(Math.random() * items.length);
    }
    setCurrentIndex(nextIdx);
  };

  // Optional subtle auto-advance every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [items.length]);

  const current = items[currentIndex] || items[0];

  return (
    <section
      id="testimonials"
      className="relative min-h-[90svh] w-full bg-sp-offWhite text-sp-ink py-20 sm:py-28 flex flex-col justify-center border-b border-sp-lightGray overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Prominent Recruiter Network Trust Banner */}
        <div className="mb-14 sm:mb-16 p-6 sm:p-8 rounded-card bg-sp-ink text-sp-white border border-sp-charcoal flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-btn bg-sp-charcoal border border-sp-midGray/40 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6 text-sp-white" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-sp-lightGray font-bold flex items-center gap-2 justify-center md:justify-start">
                <span className="w-2 h-2 rounded-full bg-sp-white animate-pulse" />
                <span>ACTIVE INDUSTRY NETWORK</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-sp-white tracking-tight mt-1">
                {siteConfig.recruiterNetworkStat}
              </h3>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-btn bg-sp-charcoal border border-sp-midGray/50 text-xs font-mono text-sp-lightGray">
            <CheckCircle className="w-4 h-4 text-sp-white" />
            <span>Direct Hiring Channels</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-white border border-sp-lightGray text-[11px] font-mono uppercase tracking-widest text-sp-charcoal mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
              <span>CANDIDATE VOICES • RANDOM ROTATION</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-sp-ink leading-tight">
              Real Candidate Experiences.
            </h2>
            <p className="text-base sm:text-lg text-sp-midGray mt-3 max-w-xl font-normal">
              Hear from Indian graduates and career starters across the <span className="font-times italic font-bold text-sp-ink">United States</span> who structured their profiles, mastered their interviews, and transitioned with confidence.
            </p>
          </div>

          {/* Carousel Controls with Shuffle Button */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={randomSlide}
              className="px-3.5 py-3 rounded-btn border border-sp-lightGray hover:border-sp-ink bg-sp-white hover:bg-sp-offWhite text-sp-ink transition-colors flex items-center gap-1.5 text-xs font-mono font-bold"
              title="Shuffle / Show Random Candidate Story"
              aria-label="Show random candidate story"
            >
              <Shuffle className="w-3.5 h-3.5 text-sp-charcoal" />
              <span className="hidden sm:inline">Randomize</span>
            </button>

            <button
              type="button"
              onClick={prevSlide}
              className="p-3 rounded-btn border border-sp-lightGray hover:border-sp-ink bg-sp-white hover:bg-sp-offWhite text-sp-ink transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-mono text-xs font-bold text-sp-midGray px-2 whitespace-nowrap">
              {String(currentIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
            </span>
            <button
              type="button"
              onClick={nextSlide}
              className="p-3 rounded-btn border border-sp-lightGray hover:border-sp-ink bg-sp-white hover:bg-sp-offWhite text-sp-ink transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonial Active Slide Card with Times Roman typography */}
        <div className="relative min-h-[320px] sm:min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id || currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="p-5 sm:p-8 lg:p-12 rounded-card bg-sp-white border border-sp-ink shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-6">
                <Quote className="w-10 h-10 text-sp-lightGray" />
                <p className="font-times text-xl sm:text-2xl lg:text-[28px] text-sp-ink italic leading-relaxed font-normal">
                  "{current.quote}"
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-sp-lightGray flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg font-black text-sp-ink uppercase tracking-tight">
                    {current.name}
                  </h4>
                  <div className="text-xs font-mono text-sp-midGray mt-0.5">
                    {current.role} • <span className="font-times italic text-sm text-sp-charcoal font-bold">{current.degree}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-sp-midGray">
                  <MapPin className="w-3.5 h-3.5 text-sp-charcoal" />
                  <span className="font-medium text-sp-ink">{current.location}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {items.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'w-8 bg-sp-ink' : 'w-2 bg-sp-lightGray hover:bg-sp-gray'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
