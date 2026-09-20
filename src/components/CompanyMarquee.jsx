import React from 'react';
import { Building2, Sparkles } from 'lucide-react';

export const companies = [
  { name: "Google", domain: "Technology & Cloud" },
  { name: "Amazon", domain: "E-Commerce & AWS" },
  { name: "Microsoft", domain: "Enterprise Software" },
  { name: "Salesforce", domain: "CRM & Cloud" },
  { name: "Deloitte", domain: "Advisory & Tech Consulting" },
  { name: "Cisco", domain: "Networking & Security" },
  { name: "Oracle", domain: "Database & Cloud" },
  { name: "Adobe", domain: "Creative & Digital Experience" },
  { name: "Goldman Sachs", domain: "FinTech & Investment" },
  { name: "IBM", domain: "Hybrid Cloud & AI" },
  { name: "JPMorgan Chase", domain: "Financial Tech Systems" },
  { name: "Nvidia", domain: "AI Hardware & Compute" },
];

export default function CompanyMarquee() {
  return (
    <section className="py-16 bg-[#1C1E2E] border-t border-b border-[#68705A]/60 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        
        {/* Title Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D96C4A]/15 border border-[#D96C4A]/30 text-[#D96C4A] text-xs font-bold uppercase tracking-widest mb-3 font-mono">
          <Sparkles className="w-3.5 h-3.5 text-[#D96C4A]" />
          <span>Proven Track Record</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-[#FAF8F2] tracking-tight">
          Candidates Placed In
        </h2>

        <p className="text-xs sm:text-sm text-[#F3EFE6] max-w-xl mx-auto mt-2">
          From high-growth tech scale-ups to Fortune 500 enterprises, our candidates transition into verified full-time roles across industry leaders.
        </p>
      </div>

      {/* Infinite Scrolling Marquee Container */}
      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex w-max animate-marquee space-x-6 hover:[animation-play-state:paused]">
          
          {/* First loop */}
          {companies.map((company, index) => (
            <div
              key={`c1-${index}`}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#25283D] border border-[#68705A]/70 hover:border-[#D96C4A] hover:shadow-lg hover:shadow-[#D96C4A]/15 transition-all duration-300 group shrink-0"
            >
              <div className="w-9 h-9 rounded-xl bg-[#1C1E2E] border border-[#68705A] flex items-center justify-center text-[#D96C4A] group-hover:scale-110 transition-transform">
                <Building2 className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-sm font-black text-[#FAF8F2] group-hover:text-[#D96C4A] transition-colors tracking-wide">
                  {company.name}
                </div>
                <div className="text-[10px] font-mono text-[#A8B09A]">
                  {company.domain}
                </div>
              </div>
            </div>
          ))}

          {/* Duplicated loop for seamless infinite scroll */}
          {companies.map((company, index) => (
            <div
              key={`c2-${index}`}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#25283D] border border-[#68705A]/70 hover:border-[#D96C4A] hover:shadow-lg hover:shadow-[#D96C4A]/15 transition-all duration-300 group shrink-0"
            >
              <div className="w-9 h-9 rounded-xl bg-[#1C1E2E] border border-[#68705A] flex items-center justify-center text-[#D96C4A] group-hover:scale-110 transition-transform">
                <Building2 className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-sm font-black text-[#FAF8F2] group-hover:text-[#D96C4A] transition-colors tracking-wide">
                  {company.name}
                </div>
                <div className="text-[10px] font-mono text-[#A8B09A]">
                  {company.domain}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      <div className="mt-8 text-center text-[11px] font-mono text-[#A8B09A]/80">
        * Candidates placed through verified employer channels, direct referrals & recruiter-scheduled interviews.
      </div>
    </section>
  );
}
