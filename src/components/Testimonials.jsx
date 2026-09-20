import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Info, CheckCircle2, User } from 'lucide-react';
import { testimonialsData } from '../data/siteData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  // Auto advance every 6s when not paused
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextTestimonial();
      }, 6000);
    }
    return () => clearInterval(timerRef.current);
  }, [isPaused, currentIndex]);

  const current = testimonialsData[currentIndex];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-4">
              Graduate Perspectives
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-3">
              Stories of practical progress.
            </h2>
            <p className="text-base text-slate-600">
              Illustrative representation of candidates who transformed their search approach with tailored guidance.
            </p>
          </div>

          {/* Desktop Controls */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 hover:border-slate-400 flex items-center justify-center transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 hover:border-slate-400 flex items-center justify-center transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Notice Badge for Placeholders */}
        <div className="mb-8 p-3 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-800 text-xs flex items-center gap-2.5">
          <Info className="w-4 h-4 shrink-0 text-amber-600" />
          <span>
            <strong>Client testimonial placeholder:</strong> Replace this section with verified client feedback before public marketing launch.
          </span>
        </div>

        {/* Testimonial Carousel Card */}
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Side: Quote */}
                <div className="lg:col-span-8">
                  <Quote className="w-10 h-10 text-blue-200 mb-6" />
                  <p className="text-lg sm:text-2xl font-medium text-slate-900 leading-relaxed italic mb-8">
                    "{current.quote}"
                  </p>

                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 w-fit">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Focus Result: {current.outcome}</span>
                  </div>
                </div>

                {/* Right Side: Candidate Profile Details */}
                <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-base shadow-md">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">
                        {current.name}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">
                        {current.role}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-slate-200 text-xs">
                    <div>
                      <span className="text-slate-400 font-medium block">Target Domain:</span>
                      <span className="font-semibold text-slate-700">{current.targetField}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-medium block">Service Format:</span>
                      <span className="font-semibold text-slate-700">1-on-1 Profile Strategy & Mock Prep</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator & Mobile Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === idx ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex sm:hidden items-center gap-2">
              <button
                type="button"
                onClick={prevTestimonial}
                className="p-2 rounded-lg border border-slate-300 bg-white text-slate-700"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextTestimonial}
                className="p-2 rounded-lg border border-slate-300 bg-white text-slate-700"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
