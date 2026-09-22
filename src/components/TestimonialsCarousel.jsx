import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Users, MapPin, Check, Shuffle } from 'lucide-react';
import { indianTestimonials, siteConfig } from '../data/siteData';

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function TestimonialsCarousel() {
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

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 9000);
    return () => clearInterval(timer);
  }, [items.length]);

  const current = items[currentIndex] || items[0];

  return (
    <section
      id="testimonials"
      className="relative w-full bg-[#FBF9F5] text-[#1F2421] py-24 sm:py-32 border-b border-[#E8E2D8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Recruiter Network Trust Ledger */}
        <div className="mb-16 p-8 sm:p-10 rounded-sm bg-[#142F23] text-[#FBF9F5] border border-[#142F23] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5 text-center md:text-left">
            <div className="w-12 h-12 rounded-sm bg-[#0E2118] border border-[#FBF9F5]/15 flex items-center justify-center shrink-0 text-[#C36B4E]">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C36B4E] font-semibold">
                Verified Recruiter Network
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#FBF9F5] tracking-tight mt-1">
                {siteConfig.recruiterNetworkStat}
              </h3>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-sm bg-[#0E2118] border border-[#FBF9F5]/15 text-xs font-sans text-[#FBF9F5]/80">
            <Check className="w-4 h-4 text-[#C36B4E]" />
            <span>Direct Enterprise Hiring Channels</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-8 border-b border-[#E8E2D8]">
          <div className="space-y-2">
            <div className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#C36B4E] font-semibold">
              <span>Candidate Reflections & Placements</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#142F23] leading-[1.12]">
              Candid Candidate Experiences.
            </h2>
            <p className="text-base text-[#5E6963] mt-2 max-w-xl font-normal leading-relaxed">
              Direct accounts from international STEM and business graduates across the <span className="font-serif italic text-[#142F23]">United States</span> who navigated the recruitment landscape with disciplined advisory.
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={randomSlide}
              className="px-4 py-2 rounded-sm border border-[#E8E2D8] hover:border-[#142F23] bg-[#FFFFFF] text-[#142F23] transition-colors flex items-center gap-2 text-xs font-sans uppercase tracking-[0.12em] font-medium cursor-pointer"
              title="Show Random Candidate Experience"
              aria-label="Show random candidate experience"
            >
              <Shuffle className="w-3.5 h-3.5 text-[#C36B4E]" />
              <span className="hidden sm:inline">Randomize</span>
            </button>

            <button
              type="button"
              onClick={prevSlide}
              className="w-10 h-10 rounded-sm border border-[#E8E2D8] hover:border-[#142F23] bg-[#FFFFFF] text-[#142F23] transition-colors flex items-center justify-center cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-sans text-xs uppercase tracking-[0.14em] text-[#546B5F] px-2 whitespace-nowrap">
              {currentIndex + 1} / {items.length}
            </span>
            <button
              type="button"
              onClick={nextSlide}
              className="w-10 h-10 rounded-sm border border-[#E8E2D8] hover:border-[#142F23] bg-[#FFFFFF] text-[#142F23] transition-colors flex items-center justify-center cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Testimonial Active Slide */}
        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id || currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-12 lg:p-16 rounded-sm bg-[#FFFFFF] border border-[#E8E2D8] shadow-[0_4px_24px_rgba(20,47,35,0.03)] flex flex-col justify-between"
            >
              <div className="space-y-6">
                <Quote className="w-10 h-10 text-[#C36B4E]" />
                <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#142F23] italic leading-relaxed font-normal">
                  "{current.quote}"
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-[#E8E2D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-xl font-serif font-normal text-[#142F23] tracking-tight">
                    {current.name}
                  </h4>
                  <div className="text-sm font-sans text-[#5E6963] mt-1">
                    {current.role} • <span className="font-serif italic text-[#142F23]">{current.degree}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-sans text-[#546B5F]">
                  <MapPin className="w-3.5 h-3.5 text-[#C36B4E]" />
                  <span>{current.location}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Dots */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {items.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 transition-all duration-300 cursor-pointer ${
                currentIndex === idx ? 'w-8 bg-[#142F23]' : 'w-2 bg-[#E8E2D8] hover:bg-[#546B5F]'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
