import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Crosshair, Send, MessageSquareCheck, ArrowRight, Sparkles } from 'lucide-react';
import { solutionPillars } from '../data/siteData';

export default function SolutionSection() {
  const iconList = [
    <Layers key="b" className="w-6 h-6 text-[#D96C4A]" />,
    <Crosshair key="p" className="w-6 h-6 text-[#A8B09A]" />,
    <Send key="a" className="w-6 h-6 text-[#D96C4A]" />,
    <MessageSquareCheck key="pr" className="w-6 h-6 text-[#A8B09A]" />
  ];

  return (
    <section className="py-24 bg-[#25283D] text-[#FAF8F2] relative overflow-hidden border-b border-[#68705A]/60">
      {/* Background Subtle Terracotta Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#D96C4A]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#D96C4A]/15 border border-[#D96C4A]/30 text-[#D96C4A] text-xs font-bold uppercase tracking-wider mb-4 font-mono">
            Our Core Methodology
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#FAF8F2] mb-4">
            A different approach to career support.
          </h2>
          <p className="text-xs sm:text-base text-[#F3EFE6] leading-relaxed max-w-2xl mx-auto">
            Skilluence Solutions focuses on structured human intervention that turns anxiety into genuine career confidence.
          </p>
        </div>

        {/* Central Visual Statement */}
        <div className="max-w-4xl mx-auto mb-16 p-6 sm:p-10 rounded-3xl bg-[#1C1E2E] border border-[#68705A] text-center relative shadow-2xl">
          <div className="flex flex-col items-center justify-center space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#A8B09A] tracking-tight"
            >
              Not promises.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#A8B09A] tracking-tight"
            >
              Not shortcuts.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FAF8F2] via-[#D96C4A] to-[#A95245] tracking-tight"
            >
              Just practical career support.
            </motion.div>
          </div>

          <p className="mt-5 text-xs text-[#A8B09A] uppercase tracking-widest font-mono">
            Direct Recruiter Advocacy • SLA Refund Assurance • Full-Time Placements
          </p>
        </div>

        {/* The Four Words & Connecting Terracotta Line (#D96C4A) */}
        <div className="relative">
          {/* Animated Glowing Terracotta Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-1 z-0 rounded-full overflow-hidden">
            <div className="w-full h-full bg-[#68705A]/40" />
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#D96C4A] via-[#E88B6E] to-[#A95245] shadow-[0_0_12px_#D96C4A]"
            />
          </div>

          {/* 4 Connected Pillars: BUILD -> POSITION -> APPLY -> PREPARE */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {solutionPillars.map((pillar, idx) => (
              <motion.div
                key={pillar.code}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.18 }}
                className="rounded-3xl bg-[#1C1E2E] border border-[#68705A] p-6 flex flex-col justify-between hover:border-[#D96C4A] transition-all duration-300 group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#25283D] border border-[#68705A] flex items-center justify-center group-hover:scale-110 group-hover:border-[#D96C4A] transition-all">
                      {iconList[idx]}
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#25283D] text-[#D96C4A] border border-[#68705A]">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="text-sm font-black text-[#D96C4A] tracking-widest uppercase mb-1 font-mono">
                    {pillar.code}
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#FAF8F2] mb-2">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-xs text-[#F3EFE6] leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#68705A]/50 flex items-center justify-between text-[11px] font-mono text-[#A8B09A]">
                  <span>{pillar.tag}</span>
                  <span className="text-[#D96C4A] font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    Phase 0{idx + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
