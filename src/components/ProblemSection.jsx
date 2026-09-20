import React from 'react';
import { motion } from 'framer-motion';
import { Compass, FileSpreadsheet, AlertCircle } from 'lucide-react';
import { problemItems } from '../data/siteData';

export default function ProblemSection() {
  const iconMap = [
    <Compass key="1" className="w-6 h-6 text-[#D96C4A]" />,
    <FileSpreadsheet key="2" className="w-6 h-6 text-[#A8B09A]" />,
    <AlertCircle key="3" className="w-6 h-6 text-[#D96C4A]" />
  ];

  return (
    <section id="problem" className="py-20 sm:py-24 bg-[#1C1E2E] relative overflow-hidden border-b border-[#68705A]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D96C4A]/15 text-[#D96C4A] text-xs font-bold uppercase tracking-wider mb-4 border border-[#D96C4A]/30 font-mono">
            The Current Reality
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#FAF8F2] tracking-tight leading-tight mb-4">
            Education is only the beginning.
          </h2>
          <p className="text-xs sm:text-base text-[#F3EFE6] leading-relaxed">
            Getting a degree is a major milestone. Turning that qualification into a career opportunity requires a completely different set of practical skills that most classrooms never teach.
          </p>
        </div>

        {/* 3 Sequential Cards: 01 -> 02 -> 03 moving upward 40px */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {problemItems.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-3xl bg-[#25283D] p-6 sm:p-8 border border-[#68705A] hover:border-[#D96C4A] shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black font-mono text-[#68705A] group-hover:text-[#D96C4A] transition-colors">
                    {item.number}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-[#1C1E2E] border border-[#68705A] flex items-center justify-center group-hover:scale-110 group-hover:border-[#D96C4A] transition-all">
                    {iconMap[idx]}
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#FAF8F2] mb-1.5 tracking-tight group-hover:text-[#D96C4A] transition-colors">
                  {item.title}
                </h3>
                <span className="text-xs font-semibold text-[#A8B09A] uppercase tracking-wider block mb-3 font-mono">
                  {item.subtitle}
                </span>

                {/* Card Description */}
                <p className="text-xs sm:text-sm text-[#F3EFE6] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Decorative Line */}
              <div className="mt-8 pt-5 border-t border-[#68705A]/50 flex items-center justify-between text-xs text-[#A8B09A] font-mono">
                <span>Barrier 0{idx + 1}</span>
                <span className="text-[#D96C4A] font-bold">0{idx + 1} / 03</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
