import { motion } from 'framer-motion';
import { ArrowRight, Layers, Crosshair, Send, MessageSquareCheck } from 'lucide-react';
import { solutionData } from '../data/siteData';

export default function SolutionStory() {
  const pillarIcons = [
    <Layers key="b" className="w-5 h-5 text-sp-lightGray" />,
    <Crosshair key="p" className="w-5 h-5 text-sp-lightGray" />,
    <Send key="a" className="w-5 h-5 text-sp-lightGray" />,
    <MessageSquareCheck key="pr" className="w-5 h-5 text-sp-lightGray" />
  ];

  return (
    <section
      id="solution"
      className="relative min-h-[100svh] w-full bg-sp-ink text-sp-white py-24 sm:py-32 flex flex-col justify-center border-b border-sp-charcoal overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Micro-Label */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-btn bg-sp-charcoal border border-sp-midGray/40 text-[11px] font-mono uppercase tracking-widest text-sp-lightGray">
            <span className="w-1.5 h-1.5 rounded-full bg-sp-white" />
            <span>CORE METHODOLOGY / 03</span>
          </div>
        </div>

        {/* Large Central Editorial Statement: Line by Line Reveal */}
        <div className="max-w-4xl mx-auto text-center mb-20 sm:mb-24 space-y-2">
          {solutionData.quote.map((line, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`text-3xl sm:text-5xl md:text-6xl font-black tracking-tight ${
                idx === 2
                  ? 'text-sp-white'
                  : 'text-sp-gray/80 font-normal'
              }`}
            >
              {line}
            </motion.div>
          ))}
        </div>

        {/* Thin Animated Monochrome Connecting Line across BUILD -> POSITION -> APPLY -> PREPARE */}
        <div className="relative mt-8">
          {/* Desktop Connecting Line Track */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-[1px] bg-sp-charcoal z-0">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="h-full bg-sp-lightGray"
            />
          </div>

          {/* Four Connected Word Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {solutionData.pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.15 }}
                className="p-6 sm:p-7 rounded-card bg-sp-charcoal/80 border border-sp-midGray/30 hover:border-sp-lightGray transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-btn bg-sp-ink border border-sp-midGray/40 flex items-center justify-center group-hover:border-sp-white transition-colors">
                      {pillarIcons[idx]}
                    </div>
                    <span className="text-[11px] font-mono font-bold text-sp-lightGray/70">
                      0{idx + 1}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-sp-lightGray block mb-1">
                    {pillar.code}
                  </span>

                  <h3 className="text-lg font-bold text-sp-white mb-2.5">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-sp-gray leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-sp-midGray/30 flex items-center justify-between text-[11px] font-mono text-sp-lightGray">
                  <span>{pillar.action}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
