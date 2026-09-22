import { motion } from 'framer-motion';
import { Building, Users, Clock, ShieldCheck, FileCheck, ArrowUpRight } from 'lucide-react';
import { employerSolutions } from '../data/siteData';

const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI'];

export default function EmployerSolutions() {
  const icons = [Building, Users, Clock, ShieldCheck, FileCheck];

  return (
    <section
      id="employers"
      className="relative w-full bg-[#FBF9F5] text-[#1F2421] py-24 sm:py-32 border-b border-[#E8E2D8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[#E8E2D8]">
          <div className="max-w-2xl space-y-3">
            <div className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#C36B4E] font-semibold">
              <span>Enterprise Partnership & Staffing Standards</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#142F23] leading-[1.12]">
              Pre-Vetted Talent.{' '}
              <span className="block mt-1 font-serif italic text-[#C36B4E]">
                Uncompromising commercial standards.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#5E6963] mt-3 font-normal leading-relaxed">
              Accelerate your talent acquisition cycles with thoroughly vetted professionals, adaptable engagement models, and seamless compliance oversight.
            </p>
          </div>

          {/* Quick Metrics Plaque Container */}
          <div className="flex flex-wrap items-center gap-3.5">
            <div className="px-5 py-3 rounded-sm bg-[#FFFFFF] border border-[#E8E2D8] text-center">
              <div className="font-serif text-lg text-[#142F23] font-normal">48–72 Hours</div>
              <div className="text-[10px] text-[#C36B4E] font-sans font-semibold uppercase tracking-[0.14em] mt-0.5">Shortlist Delivery</div>
            </div>
            <div className="px-5 py-3 rounded-sm bg-[#FFFFFF] border border-[#E8E2D8] text-center">
              <div className="font-serif text-lg text-[#142F23] font-normal">100% Vetted</div>
              <div className="text-[10px] text-[#C36B4E] font-sans font-semibold uppercase tracking-[0.14em] mt-0.5">Technical Defense</div>
            </div>
            <div className="px-5 py-3 rounded-sm bg-[#FFFFFF] border border-[#E8E2D8] text-center">
              <div className="font-serif text-lg text-[#142F23] font-normal">Strict SLAs</div>
              <div className="text-[10px] text-[#C36B4E] font-sans font-semibold uppercase tracking-[0.14em] mt-0.5">Corporate Governance</div>
            </div>
          </div>
        </div>

        {/* Enterprise Practice Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {employerSolutions.map((solution, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <motion.div
                key={solution.code || idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-8 sm:p-10 rounded-sm bg-[#FFFFFF] border border-[#E8E2D8] hover:border-[#142F23]/60 transition-all duration-300 shadow-[0_4px_16px_rgba(20,47,35,0.02)] hover:shadow-[0_10px_28px_rgba(20,47,35,0.05)] flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-[#E8E2D8]">
                    <span className="text-[11px] font-sans uppercase tracking-[0.16em] text-[#C36B4E] font-semibold">
                      Practice {romanNumerals[idx] || idx + 1}
                    </span>
                    <div className="w-8 h-8 rounded-sm bg-[#F4EFEA] flex items-center justify-center text-[#142F23] group-hover:bg-[#142F23] group-hover:text-[#FBF9F5] transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-serif font-normal tracking-tight text-[#142F23]">
                    {solution.title}
                  </h3>

                  <p className="text-sm font-medium text-[#1F2421] leading-snug">
                    {solution.statement}
                  </p>

                  <p className="text-xs sm:text-sm text-[#5E6963] leading-relaxed font-normal">
                    {solution.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E8E2D8] flex items-center justify-between text-xs font-sans text-[#546B5F]">
                  <span className="uppercase tracking-[0.14em] font-semibold">Institutional SLA</span>
                  <a href="#contact" className="text-[#142F23] font-semibold group-hover:text-[#C36B4E] transition-colors flex items-center gap-1">
                    Engage <ArrowUpRight className="w-3.5 h-3.5 text-[#C36B4E]" />
                  </a>
                </div>
              </motion.div>
            );
          })}

          {/* Employer Intake Banner Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="p-8 sm:p-10 rounded-sm bg-[#142F23] text-[#FBF9F5] border border-[#142F23] shadow-lg flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C36B4E] font-semibold block mb-3">
                Corporate Hiring Partner Desk
              </span>
              <h3 className="text-2xl font-serif font-normal tracking-tight mb-3 text-[#FBF9F5]">
                Partner With Our Talent Practice.
              </h3>
              <p className="text-xs sm:text-sm text-[#FBF9F5]/75 leading-relaxed mb-6 font-normal">
                Share your technical headcount milestones and specific domain requirements. We curate and introduce verified candidates calibrated to your architecture standards.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-[#C36B4E] hover:bg-[#A8553B] text-[#FBF9F5] font-sans uppercase tracking-[0.14em] font-semibold text-xs transition-colors"
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
