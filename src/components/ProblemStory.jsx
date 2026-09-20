import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { problemStatement } from '../data/siteData';

export default function ProblemStory() {
  const [activeProblem, setActiveProblem] = useState(0);

  return (
    <section
      id="problem"
      className="relative min-h-[100svh] w-full bg-sp-offWhite text-sp-ink py-20 sm:py-28 lg:py-32 flex flex-col justify-center border-b border-sp-lightGray overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-btn bg-sp-white border border-sp-lightGray text-[11px] font-mono uppercase tracking-widest text-sp-charcoal mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
            <span>THE EMPLOYABILITY GAP / 02</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-sp-ink leading-tight mb-4">
            {problemStatement.heading}
          </h2>
          <p className="text-base sm:text-lg text-sp-midGray leading-relaxed max-w-2xl font-normal">
            {problemStatement.subheading}
          </p>
        </div>

        {/* Full-Screen Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left: Interactive Sequential Problem List */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            {problemStatement.items.map((item, idx) => {
              const isActive = activeProblem === idx;
              return (
                <div
                  key={item.number}
                  onClick={() => setActiveProblem(idx)}
                  className={`group p-6 sm:p-8 rounded-card border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-sp-white border-sp-ink shadow-lg ring-1 ring-sp-ink/10'
                      : 'bg-sp-white/50 border-sp-lightGray hover:border-sp-gray hover:bg-sp-white/80 opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <span
                      className={`font-mono text-3xl sm:text-4xl font-black transition-colors ${
                        isActive ? 'text-sp-ink' : 'text-sp-gray group-hover:text-sp-midGray'
                      }`}
                    >
                      {item.number}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-sp-midGray">
                      {isActive ? 'CURRENT FOCUS' : 'CLICK TO REVEAL'}
                    </span>
                  </div>

                  <h3
                    className={`text-xl sm:text-2xl font-black tracking-tight uppercase mb-2 transition-colors ${
                      isActive ? 'text-sp-ink' : 'text-sp-midGray group-hover:text-sp-ink'
                    }`}
                  >
                    {item.question}
                  </h3>

                  <p className="text-xs sm:text-sm text-sp-midGray leading-relaxed">
                    {item.headline}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: Focused Editorial Dossier Panel */}
          <div className="lg:col-span-6">
            <div className="sticky top-28 rounded-card bg-sp-white border border-sp-ink p-8 sm:p-10 shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProblem}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6"
                >
                  {/* Oversized Monochromatic Number */}
                  <div className="flex items-center justify-between border-b border-sp-lightGray pb-4">
                    <span className="text-6xl sm:text-7xl lg:text-8xl font-black font-mono text-sp-charcoal leading-none tracking-tighter">
                      {problemStatement.items[activeProblem].number}
                    </span>
                    <div className="text-right font-mono text-xs text-sp-midGray">
                      <span className="block font-bold text-sp-ink uppercase">CHALLENGE DOSSIER</span>
                      <span>STAGE 0{activeProblem + 1} OF 03</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono tracking-widest uppercase text-sp-midGray block mb-1">
                      CORE HURDLE
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-black text-sp-ink tracking-tight uppercase">
                      {problemStatement.items[activeProblem].question}
                    </h4>
                  </div>

                  <p className="text-sm sm:text-base text-sp-charcoal leading-relaxed">
                    {problemStatement.items[activeProblem].description}
                  </p>

                  <div className="p-4 rounded-btn bg-sp-offWhite border border-sp-lightGray">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-sp-midGray block mb-1 font-bold">
                      SYSTEMIC IMPACT
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-sp-ink">
                      {problemStatement.items[activeProblem].impact}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs font-mono text-sp-midGray">
                    <span>Practical Intervention Available</span>
                    <a
                      href="#solution"
                      className="inline-flex items-center gap-1 font-bold text-sp-ink hover:underline"
                    >
                      <span>See Our Approach</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
