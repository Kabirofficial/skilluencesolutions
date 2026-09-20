import { motion } from 'framer-motion';
import { ArrowRight, Compass, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/siteData';
import CareerDashboard from './CareerDashboard';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Gradients & Grid */}
      <div 
        className="absolute inset-0 bg-dot-pattern-dark opacity-35 pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-600/20 via-indigo-600/10 to-transparent blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute -bottom-24 right-0 w-[500px] h-[500px] bg-violet-600/10 blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{siteConfig.heroEyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              Your Degree Got You Here.{' '}
              <br className="hidden sm:inline" />
              <span className="text-gradient-primary inline-block">
                Let's Get You Job-Ready.
              </span>
            </h1>

            {/* Description Copy */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mb-8">
              {siteConfig.heroDescription}
            </p>

            {/* CTA Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              <button
                type="button"
                onClick={() => scrollTo('#contact')}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white font-semibold text-sm shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Start Your Career Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('#services')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 border border-slate-700/80 text-slate-200 hover:text-white hover:bg-slate-800/80 text-sm font-medium transition-all duration-200"
              >
                <span>Explore Services</span>
              </button>
            </div>

            {/* Sub-CTA Trust Strip */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Practical support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Personalized guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                <span>Student-friendly approach</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Career Command Center Interactive Dashboard */}
          <div className="lg:col-span-5 w-full">
            <CareerDashboard />
          </div>

        </div>
      </div>
    </section>
  );
}
