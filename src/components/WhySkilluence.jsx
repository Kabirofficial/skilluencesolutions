import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { whyPillars } from '../data/siteData';

export default function WhySkilluence() {
  return (
    <section
      id="why"
      className="relative min-h-[100svh] w-full bg-sp-white text-sp-ink py-20 sm:py-28 lg:py-32 flex flex-col justify-center border-b border-sp-lightGray overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-offWhite border border-sp-lightGray text-[11px] font-mono uppercase tracking-widest text-sp-charcoal mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
            <span>CORE PHILOSOPHY / 07</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-sp-ink leading-tight">
            Career support should be practical.<br />
            <span className="font-serif italic font-normal text-sp-charcoal">
              Not intimidating.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-sp-midGray mt-4 max-w-xl font-normal">
            No gatekeeping. No astronomical fees. Just structured execution built around the realities of current talent screening.
          </p>
        </div>

        {/* Four Large Typographic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 border-t border-sp-lightGray pt-12">
          {whyPillars.map((pillar, idx) => (
            <motion.div
              key={pillar.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="flex flex-col justify-between space-y-6"
            >
              <div>
                <span className="font-mono text-xs font-bold text-sp-midGray block mb-2">
                  PILLAR {pillar.code}
                </span>

                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-sp-ink uppercase mb-3">
                  {pillar.title}
                </h3>

                <p className="text-sm font-semibold text-sp-charcoal mb-2 leading-snug">
                  {pillar.statement}
                </p>

                <p className="text-xs sm:text-sm text-sp-midGray leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-sp-lightGray/70 font-mono text-[11px] text-sp-charcoal flex items-center justify-between">
                <span>STANDARD 0{idx + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
