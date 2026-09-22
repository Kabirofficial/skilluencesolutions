import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap, Briefcase, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { skilluenceDifferentiators, candidatePlacementPillars } from '../data/siteData';

export default function WhySkilluence() {
  const icons = [Award, ShieldCheck, Briefcase, Zap, CheckCircle2];

  return (
    <section
      id="why"
      className="relative min-h-[85svh] w-full bg-[#FAF7F2] text-[#1F2421] py-20 sm:py-28 lg:py-32 flex flex-col justify-center border-b border-[#E8E2D8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-24">
        
        {/* PART 1: WHAT MAKES SKILLUENCE SOLUTIONS DIFFERENT */}
        <div>
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#E8E2D8] bg-[#FBF9F5] text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#142F23] mb-6">
              <span className="w-1.5 h-1.5 bg-[#C36B4E]" />
              <span>The Skilluence Standard</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#142F23] leading-[1.12]">
              What Distinguishes Our <br />
              <span className="italic font-serif text-[#C36B4E]">Advisory Framework.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#556059] mt-5 max-w-2xl font-light leading-relaxed">
              We don’t spam job portals or make empty claims. Our framework is engineered around precision matching, contractual protection, and high-conversion interviews.
            </p>
          </div>

          {/* 5 Differentiator Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {skilluenceDifferentiators.map((diff, idx) => {
              const IconComponent = icons[idx % icons.length];
              return (
                <motion.div
                  key={diff.code}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-6 bg-white border border-[#E8E2D8] hover:border-[#142F23] transition-colors duration-300 flex flex-col justify-between group shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-[#E8E2D8] pb-3">
                      <span className="font-serif text-sm text-[#142F23]">
                        {diff.code}
                      </span>
                      <span className="text-[10px] font-sans px-2 py-0.5 border border-[#E8E2D8] bg-[#FAF7F2] text-[#C36B4E] font-medium">
                        {diff.metric}
                      </span>
                    </div>

                    <div className="w-8 h-8 border border-[#E8E2D8] bg-[#FAF7F2] flex items-center justify-center text-[#142F23] group-hover:bg-[#142F23] group-hover:text-[#FBF9F5] transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>

                    <h3 className="text-sm sm:text-base font-serif font-normal tracking-tight text-[#142F23] leading-snug">
                      {diff.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#556059] leading-relaxed font-light">
                      {diff.statement}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-[#E8E2D8] flex items-center justify-between text-[10px] font-sans text-[#556059]">
                    <span className="uppercase tracking-widest text-[#C36B4E] font-semibold">Verified SLA</span>
                    <span className="w-1 h-1 bg-[#142F23]" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* PART 2: CANDIDATE PLACEMENT ADVANTAGE */}
        <div className="border-t border-[#E8E2D8] pt-20">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#E8E2D8] bg-[#FBF9F5] text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#142F23] mb-6">
              <span className="w-1.5 h-1.5 bg-[#C36B4E]" />
              <span>Career Advantage</span>
            </div>

            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-[#142F23] leading-[1.12]">
              End-To-End Placement <br />
              <span className="italic font-serif text-[#C36B4E]">Advisory Support.</span>
            </h3>
            <p className="text-sm sm:text-base text-[#556059] mt-4 max-w-xl font-light leading-relaxed">
              Direct access to recruiters, verified US employers, and interview training designed for stable long-term career growth.
            </p>
          </div>

          {/* 5 Placement Pillar Rows / Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {candidatePlacementPillars.map((pillar, idx) => (
              <motion.div
                key={pillar.code}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-7 md:p-8 bg-white border border-[#E8E2D8] hover:border-[#142F23] transition-colors shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-[#E8E2D8] pb-3">
                    <span className="font-serif text-sm font-normal text-[#142F23]">
                      Advantage {pillar.code}
                    </span>
                    <span className="w-1.5 h-1.5 bg-[#C36B4E]" />
                  </div>

                  <h4 className="text-lg font-serif font-normal text-[#142F23] tracking-tight mb-2.5">
                    {pillar.title}
                  </h4>

                  <p className="text-sm font-medium text-[#142F23] mb-2.5 leading-snug">
                    {pillar.statement}
                  </p>

                  <p className="text-xs sm:text-sm text-[#556059] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E8E2D8] flex items-center justify-between text-[11px] font-sans text-[#556059]">
                  <span className="uppercase tracking-widest text-[10px] text-[#C36B4E] font-semibold">Career Pillar</span>
                  <span className="text-[#142F23] font-medium">Ready →</span>
                </div>
              </motion.div>
            ))}

            {/* Direct Action Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="p-7 md:p-8 bg-[#142F23] text-[#FBF9F5] border border-[#142F23] shadow-md flex flex-col justify-between"
            >
              <div>
                <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#E8E2D8]/70 block mb-4">
                  Ready To Engage?
                </span>
                <h4 className="text-xl sm:text-2xl font-serif font-normal tracking-tight mb-3 text-white leading-snug">
                  Get Interview-Ready This Week.
                </h4>
                <p className="text-xs sm:text-sm text-[#E8E2D8]/80 leading-relaxed mb-8 font-light">
                  Connect with our advisory desk, review your profile, and receive a direct roadmap tailored to your target roles.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C36B4E] hover:bg-[#A8553B] text-white font-medium text-xs uppercase tracking-wider transition-colors"
              >
                Schedule Diagnostic Call
              </Link>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

