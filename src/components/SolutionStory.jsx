import { motion } from 'framer-motion';
import { ArrowRight, Layers, Crosshair, Send, MessageSquareCheck } from 'lucide-react';
import { solutionData } from '../data/siteData';

const romanPillars = ['I', 'II', 'III', 'IV'];

export default function SolutionStory() {
  const pillarIcons = [
    <Layers key="b" className="w-5 h-5 text-[#C36B4E]" />,
    <Crosshair key="p" className="w-5 h-5 text-[#C36B4E]" />,
    <Send key="a" className="w-5 h-5 text-[#C36B4E]" />,
    <MessageSquareCheck key="pr" className="w-5 h-5 text-[#C36B4E]" />
  ];

  return (
    <section
      id="solution"
      className="relative min-h-[85svh] w-full bg-[#142F23] text-[#FBF9F5] py-24 sm:py-32 flex flex-col justify-center border-b border-[#142F23] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Micro-Label */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 bg-white/5 text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#E8E2D8]">
            <span className="w-1.5 h-1.5 bg-[#C36B4E]" />
            <span>Core Methodology</span>
          </div>
        </div>

        {/* Large Central Editorial Statement */}
        <div className="max-w-4xl mx-auto text-center mb-20 sm:mb-24 space-y-2">
          {solutionData.quote.map((line, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`text-3xl sm:text-5xl md:text-6xl font-serif tracking-tight ${
                idx === 2
                  ? 'text-[#C36B4E] italic font-serif'
                  : 'text-white/90 font-light'
              }`}
            >
              {line}
            </motion.div>
          ))}
        </div>

        {/* Connecting Line across BUILD -> POSITION -> APPLY -> PREPARE */}
        <div className="relative mt-8">
          {/* Connecting Line Track */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-[1px] bg-white/10 z-0">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="h-full bg-[#C36B4E]"
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
                className="p-7 sm:p-8 bg-white/5 border border-white/15 hover:border-white/40 transition-all duration-300 flex flex-col justify-between group backdrop-blur-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 border border-white/20 bg-white/10 flex items-center justify-center">
                      {pillarIcons[idx]}
                    </div>
                    <span className="font-serif text-sm text-[#E8E2D8]/70">
                      {romanPillars[idx] || idx + 1}
                    </span>
                  </div>

                  <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#C36B4E] block mb-1.5">
                    {pillar.code}
                  </span>

                  <h3 className="text-xl font-serif font-normal text-white mb-2.5">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#E8E2D8]/80 leading-relaxed mb-4 font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-sans text-[#E8E2D8]">
                  <span>{pillar.action}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C36B4E] group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
