import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Check } from 'lucide-react';
import useReducedMotion from '../hooks/useReducedMotion';

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const yHeadline = useTransform(scrollY, [0, 600], [0, prefersReducedMotion ? 0 : -35]);
  const opacityHero = useTransform(scrollY, [0, 500], [1, prefersReducedMotion ? 1 : 0.4]);

  return (
    <section
      id="hero"
      className="relative min-h-[92svh] w-full bg-[#FBF9F5] text-[#1F2421] flex flex-col justify-between pt-32 pb-14 sm:pt-40 sm:pb-16 lg:pt-44 lg:pb-20 border-b border-[#E8E2D8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-grow flex items-center">
        <motion.div 
          style={{ opacity: opacityHero }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full my-auto"
        >
          
          {/* Left Column: Editorial Headline & Consultation Proposition */}
          <motion.div 
            style={{ y: yHeadline }}
            className="lg:col-span-7 space-y-7"
          >
            {/* Kicker / Chapter Marker */}
            <div className="inline-flex items-center gap-2.5 text-xs font-sans uppercase tracking-[0.2em] text-[#C36B4E] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C36B4E]" />
              <span>Independent Career Representation & Advisory</span>
            </div>

            {/* Editorial Serif Headline */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl lg:text-[72px] font-serif font-normal tracking-tight text-[#142F23] leading-[1.08]"
              >
                Your degree opened the door.{' '}
                <span className="block mt-2 font-serif italic text-[#C36B4E]">
                  We secure your seat at the table.
                </span>
              </motion.h1>
            </div>

            {/* Refined Supporting Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#5E6963] max-w-xl leading-relaxed font-normal"
            >
              Independent, fiduciary career advisory for ambitious international graduates and early-career specialists. Strategic narrative positioning, executive behavioral calibration, and direct placement across premier US enterprises.
            </motion.p>

            {/* Architectural Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-sm bg-[#142F23] hover:bg-[#1B3E2F] text-[#FBF9F5] font-sans uppercase tracking-[0.14em] font-semibold text-xs transition-colors duration-200"
              >
                <span>Request Advisory Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C36B4E]" />
              </Link>

              <Link
                to="/process"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-sm border border-[#E8E2D8] hover:border-[#142F23] bg-transparent text-[#142F23] font-sans uppercase tracking-[0.14em] font-semibold text-xs transition-colors duration-200"
              >
                <span>The Advisory Method</span>
              </Link>
            </motion.div>

            {/* Institutional Commitments */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 flex flex-wrap items-center gap-y-2 gap-x-7 text-xs font-sans text-[#5E6963] border-t border-[#E8E2D8]"
            >
              <span className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#142F23]" />
                Senior 1-on-1 Counsel
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#142F23]" />
                Hiring Authority Calibrated
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#142F23]" />
                Fiduciary Independence
              </span>
            </motion.div>

          </motion.div>

          {/* Right Column: Photographic Spread with Editorial Folio */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full relative"
          >
            <div className="border border-[#E8E2D8] bg-[#FFFFFF] p-3 rounded-sm shadow-[0_10px_30px_rgba(20,47,35,0.04)]">
              <div className="relative overflow-hidden rounded-none">
                <img
                  src="/images/career_strategy_workspace.jpg"
                  alt="Skilluence Advisory Strategy Workspace"
                  width="800"
                  height="550"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-[360px] sm:h-[420px] lg:h-[460px] object-cover"
                />
                
                {/* Editorial Caption Tag */}
                <div className="p-5 border-t border-[#E8E2D8] bg-[#FFFFFF] space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-sans uppercase tracking-[0.16em] text-[#C36B4E] font-semibold">
                    <span>Field Documentation</span>
                    <span className="text-[#546B5F]">Plate 01 / Advisory Desk</span>
                  </div>
                  <h3 className="font-serif text-base text-[#142F23] font-normal leading-snug">
                    Bespoke Candidate Portfolio & Behavioral Modeling
                  </h3>
                  <p className="text-xs text-[#5E6963] font-normal leading-relaxed">
                    Preparing STEM and business graduates for high-stakes technical defense and salary negotiation across US corporate corridors.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Subtle Editorial Folio Indicator */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-[11px] font-sans uppercase tracking-[0.18em] text-[#546B5F] pt-8 border-t border-[#E8E2D8]">
        <span>Skilluence Solutions • Volume MMXXVI</span>
        <button 
          type="button"
          onClick={() => window.scrollBy({ top: 650, behavior: 'smooth' })}
          className="flex items-center gap-1.5 hover:text-[#142F23] transition-colors cursor-pointer font-medium"
        >
          <span>Explore The Practice</span>
          <ChevronDown className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
}
