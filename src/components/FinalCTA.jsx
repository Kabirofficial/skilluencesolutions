import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function FinalCTA() {
  return (
    <section
      className="relative min-h-[80svh] lg:min-h-[90svh] w-full bg-sp-ink text-sp-white py-24 sm:py-32 flex flex-col justify-center text-center border-b border-sp-charcoal overflow-hidden select-none"
    >
      {/* Subtle Background Architectural Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #FFFFFF 1px, transparent 1px),
            linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-8">
        
        {/* Micro Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-charcoal border border-sp-midGray/40 text-[11px] font-mono uppercase tracking-widest text-sp-lightGray">
          <span className="w-1.5 h-1.5 rounded-full bg-sp-white" />
          <span>CAREER ADVANCEMENT / 12</span>
        </div>

        {/* Master CTA Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-sp-white leading-[1.08]">
          Your next opportunity<br />
          <span className="font-serif italic font-normal text-sp-lightGray">
            starts with a stronger strategy.
          </span>
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-sp-gray max-w-xl mx-auto leading-relaxed font-normal">
          Stop submitting blind applications into automated rejection filters. Let's overhaul your profile, sharpen your narrative, and prepare you for decisive rounds.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-btn bg-sp-white hover:bg-sp-offWhite text-sp-ink font-bold text-sm transition-all shadow-sm active:scale-[0.98]"
          >
            <span>{siteConfig.heroCTA}</span>
            <ArrowRight className="w-4 h-4 text-sp-ink" />
          </a>

          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-btn bg-sp-charcoal hover:bg-sp-midGray/40 border border-sp-midGray/40 text-sp-white font-semibold text-sm transition-all active:scale-[0.98]"
          >
            <span>{siteConfig.heroSecondaryCTA}</span>
          </a>
        </div>

        <div className="pt-8 text-xs font-mono text-sp-midGray">
          Affordable, individual mentorship • Independent advisory
        </div>

      </div>
    </section>
  );
}
