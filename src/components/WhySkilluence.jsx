import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap, Briefcase, Award } from 'lucide-react';
import { skilluenceDifferentiators, candidatePlacementPillars } from '../data/siteData';

export default function WhySkilluence() {
  const icons = [Award, ShieldCheck, Briefcase, Zap, CheckCircle2];

  return (
    <section
      id="why"
      className="relative min-h-[100svh] w-full bg-sp-white text-sp-ink py-20 sm:py-28 lg:py-32 flex flex-col justify-center border-b border-sp-lightGray overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-20">
        
        {/* PART 1: WHAT MAKES SKILLUENCE SOLUTIONS DIFFERENT */}
        <div>
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-offWhite border border-sp-lightGray text-[11px] font-mono uppercase tracking-widest text-sp-charcoal mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
              <span>THE SKILLUENCE STANDARD / 07</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-sp-ink leading-tight uppercase">
              What Makes Skilluence Different.
            </h2>
            <p className="text-base sm:text-lg text-sp-midGray mt-4 max-w-2xl font-normal">
              We don’t spam job portals or make empty claims. Our framework is engineered around precision matching, SLA refund protection, and high-conversion interviews.
            </p>
          </div>

          {/* 5 Differentiator Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {skilluenceDifferentiators.map((diff, idx) => {
              const IconComponent = icons[idx % icons.length];
              return (
                <motion.div
                  key={diff.code}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-6 rounded-card bg-sp-offWhite border border-sp-lightGray hover:border-sp-ink hover:bg-sp-white transition-all duration-200 flex flex-col justify-between group shadow-sm"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] font-bold text-sp-midGray">
                        {diff.code}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-btn bg-sp-white border border-sp-lightGray text-sp-charcoal font-semibold">
                        {diff.metric}
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-btn bg-sp-white border border-sp-lightGray flex items-center justify-center text-sp-ink group-hover:bg-sp-ink group-hover:text-sp-white transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>

                    <h3 className="text-sm sm:text-base font-black tracking-tight text-sp-ink uppercase leading-snug">
                      {diff.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-sp-midGray leading-relaxed font-normal">
                      {diff.statement}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-sp-lightGray/60 flex items-center justify-between text-[10px] font-mono text-sp-charcoal">
                    <span>VERIFIED SLA</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* PART 2: CANDIDATE PLACEMENT ADVANTAGE */}
        <div className="border-t border-sp-lightGray pt-16">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-offWhite border border-sp-lightGray text-[11px] font-mono uppercase tracking-widest text-sp-charcoal mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
              <span>CAREER ADVANTAGE</span>
            </div>

            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-sp-ink uppercase">
              End-To-End Placement Support.
            </h3>
            <p className="text-sm sm:text-base text-sp-midGray mt-3 max-w-xl font-normal">
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
                className="p-6 sm:p-7 rounded-card bg-sp-white border border-sp-lightGray hover:border-sp-ink transition-all shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-sp-midGray">
                      ADVANTAGE {pillar.code}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-sp-ink" />
                  </div>

                  <h4 className="text-lg font-black text-sp-ink uppercase tracking-tight mb-2.5">
                    {pillar.title}
                  </h4>

                  <p className="text-sm font-semibold text-sp-charcoal mb-2 leading-snug">
                    {pillar.statement}
                  </p>

                  <p className="text-xs sm:text-sm text-sp-midGray leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-sp-lightGray/70 flex items-center justify-between text-[11px] font-mono text-sp-midGray">
                  <span>CAREER PILLAR</span>
                  <span className="text-sp-ink font-bold">READY →</span>
                </div>
              </motion.div>
            ))}

            {/* Direct Action Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="p-6 sm:p-7 rounded-card bg-sp-ink text-sp-white border border-sp-ink shadow-md flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-sp-lightGray block mb-3">
                  READY TO START?
                </span>
                <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-3 text-sp-white">
                  Get Interview-Ready This Week.
                </h4>
                <p className="text-xs sm:text-sm text-sp-lightGray leading-relaxed mb-6 font-normal">
                  Connect with our advisory desk, review your profile, and receive a direct roadmap tailored to your target roles.
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-btn bg-sp-white text-sp-ink font-bold text-xs uppercase tracking-wider hover:bg-sp-offWhite transition-colors"
              >
                Schedule Diagnostic Call
              </a>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

