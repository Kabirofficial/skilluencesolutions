import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Check } from 'lucide-react';
import CareerScene from './CareerScene';
import { siteConfig } from '../data/siteData';
import useReducedMotion from '../hooks/useReducedMotion';

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // Scroll storytelling transforms
  const yHeadline = useTransform(scrollY, [0, 600], [0, prefersReducedMotion ? 0 : -80]);
  const yScene = useTransform(scrollY, [0, 600], [0, prefersReducedMotion ? 0 : 50]);
  const opacityHero = useTransform(scrollY, [0, 500], [1, prefersReducedMotion ? 1 : 0.2]);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full bg-sp-white text-sp-ink flex flex-col justify-between pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 overflow-hidden border-b border-sp-lightGray"
    >
      {/* Background Architectural Grid Lines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.45]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #D4D4D4 1px, transparent 1px),
            linear-gradient(to bottom, #D4D4D4 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-grow flex items-center">
        <motion.div 
          style={{ opacity: opacityHero }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full my-auto"
        >
          
          {/* Left Column: Editorial Headline & Copy */}
          <motion.div 
            style={{ y: yHeadline }}
            className="lg:col-span-6 space-y-6 sm:space-y-8"
          >
            {/* Micro-Label: CAREER SUPPORT / 01 */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-3 px-3 py-1 rounded-btn bg-sp-offWhite border border-sp-lightGray text-[11px] sm:text-xs font-mono font-bold tracking-widest uppercase text-sp-charcoal"
            >
              <span className="w-2 h-2 rounded-full bg-sp-ink" />
              <span>{siteConfig.heroLabel}</span>
            </motion.div>

            {/* Main Editorial Headline */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[32px] sm:text-5xl md:text-6xl lg:text-[74px] font-black tracking-tight text-sp-ink leading-[1.08] sm:leading-[1.05]"
              >
                Your Degree Got You Here.{' '}
                <span className="block mt-1 font-serif italic font-normal text-sp-charcoal underline decoration-sp-lightGray decoration-2 underline-offset-8">
                  Let's Get You {siteConfig.heroHighlight}
                </span>
              </motion.h1>
            </div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg lg:text-xl text-sp-midGray max-w-xl leading-relaxed font-normal"
            >
              {siteConfig.heroDescription}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-btn bg-sp-ink hover:bg-sp-charcoal text-sp-white font-bold text-sm tracking-wide transition-all duration-200 shadow-sm active:scale-[0.98]"
              >
                <span>{siteConfig.heroCTA}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-btn bg-sp-offWhite hover:bg-sp-lightGray/70 border border-sp-lightGray text-sp-ink font-semibold text-sm transition-all duration-200 active:scale-[0.98]"
              >
                <span>{siteConfig.heroSecondaryCTA}</span>
              </a>
            </motion.div>

            {/* Micro Trust Proof: Clear & Authentic */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-[11px] sm:text-xs font-mono text-sp-midGray border-t border-sp-lightGray/80"
            >
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-sp-ink" />
                Individualized Mentorship
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-sp-ink" />
                ATS-Engineered Resumes
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-sp-ink" />
                STAR Interview Simulations
              </span>
            </motion.div>

          </motion.div>

          {/* Right Column: 3D Career Object Visualization */}
          <motion.div
            style={{ y: yScene }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 w-full relative"
          >
            <CareerScene />
          </motion.div>

        </motion.div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-sp-midGray pt-4">
        <span>EST. CAREER ADVISORY</span>
        <a 
          href="#problem"
          className="flex items-center gap-1 hover:text-sp-ink transition-colors group"
        >
          <span>Scroll To Discover</span>
          <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
}
