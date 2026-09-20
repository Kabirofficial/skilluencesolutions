import { motion } from 'framer-motion';
import { Building, Users, Clock, ShieldCheck, FileCheck, ArrowUpRight } from 'lucide-react';
import { employerSolutions } from '../data/siteData';

export default function EmployerSolutions() {
  const icons = [Building, Users, Clock, ShieldCheck, FileCheck];

  return (
    <section
      id="employers"
      className="relative min-h-[90svh] w-full bg-sp-white text-sp-ink py-20 sm:py-28 lg:py-32 flex flex-col justify-center border-b border-sp-lightGray overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-offWhite border border-sp-lightGray text-[11px] font-mono uppercase tracking-widest text-sp-charcoal mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
              <span>ENTERPRISE STAFFING & HIRING / 08</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-sp-ink leading-tight uppercase">
              For Employers: Verified Talent On Demand.
            </h2>
            <p className="text-base sm:text-lg text-sp-midGray mt-4 font-normal">
              Accelerate your talent acquisition cycles with pre-screened, technically vetted professionals, flexible workforce models, and turnkey compliance.
            </p>
          </div>

          {/* Quick Metrics Badge Container */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-4 py-2.5 rounded-card bg-sp-white border border-sp-lightGray shadow-sm text-center">
              <div className="font-mono text-xs font-black text-sp-ink">48-72 HRS</div>
              <div className="text-[10px] text-sp-midGray font-mono uppercase">Shortlist Turnaround</div>
            </div>
            <div className="px-4 py-2.5 rounded-card bg-sp-white border border-sp-lightGray shadow-sm text-center">
              <div className="font-mono text-xs font-black text-sp-ink">100% VETTED</div>
              <div className="text-[10px] text-sp-midGray font-mono uppercase">Pre-Screened Candidates</div>
            </div>
            <div className="px-4 py-2.5 rounded-card bg-sp-white border border-sp-lightGray shadow-sm text-center">
              <div className="font-mono text-xs font-black text-sp-ink">ZERO DELAYS</div>
              <div className="text-[10px] text-sp-midGray font-mono uppercase">Strict SLA Deadlines</div>
            </div>
          </div>
        </div>

        {/* 5 Enterprise Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {employerSolutions.map((solution, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <motion.div
                key={solution.code}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.09 }}
                className="p-7 rounded-card bg-sp-white border border-sp-lightGray hover:border-sp-ink transition-all shadow-sm flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-sp-midGray">
                      SOLUTION {solution.code}
                    </span>
                    <div className="w-8 h-8 rounded-btn bg-sp-offWhite border border-sp-lightGray flex items-center justify-center text-sp-ink group-hover:bg-sp-ink group-hover:text-sp-white transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-black tracking-tight text-sp-ink uppercase">
                    {solution.title}
                  </h3>

                  <p className="text-sm font-semibold text-sp-charcoal leading-snug">
                    {solution.statement}
                  </p>

                  <p className="text-xs sm:text-sm text-sp-midGray leading-relaxed font-normal">
                    {solution.description}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-sp-lightGray/60 flex items-center justify-between text-[11px] font-mono text-sp-midGray">
                  <span>ENTERPRISE SERVICE</span>
                  <span className="text-sp-ink font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    DETAILS <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            );
          })}

          {/* Employer Intake Banner Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="p-7 rounded-card bg-sp-ink text-sp-white border border-sp-ink shadow-md flex flex-col justify-between"
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-sp-lightGray block mb-3">
                HIRING MANAGER DESK
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-3 text-sp-white">
                Request Pre-Vetted Talent Today.
              </h3>
              <p className="text-xs sm:text-sm text-sp-lightGray leading-relaxed mb-6 font-normal">
                Share your active job descriptions and headcount priorities. We match and introduce verified candidates within 48 to 72 hours.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-btn bg-sp-white text-sp-ink font-bold text-xs uppercase tracking-wider hover:bg-sp-offWhite transition-all"
            >
              <span>Submit Talent Requirements</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
