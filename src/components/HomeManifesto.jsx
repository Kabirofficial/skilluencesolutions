import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Target, TrendingUp } from 'lucide-react';

export default function HomeManifesto() {
  const pillars = [
    {
      roman: 'I',
      icon: ShieldCheck,
      title: 'Fiduciary Independence',
      summary: 'We work solely for your interests — never for corporate commission cuts.',
      body: 'Conventional staffing firms extract hidden percentages from your compensation or compromise your placement for swift commissions. Skilluence operates with pristine fiduciary transparency: flat advisory fees and total advocacy for your career trajectory.',
    },
    {
      roman: 'II',
      icon: Target,
      title: 'Executive Caliber',
      summary: 'Replacing academic theory with executive hiring manager benchmarks.',
      body: 'Computer science degrees provide foundational concepts; corporate US enterprises evaluate commercial systems trade-offs, cross-functional leadership, and communication poise under pressure. We calibrate your narrative to match VP-level standards.',
    },
    {
      roman: 'III',
      icon: TrendingUp,
      title: 'Compounding Prestige',
      summary: 'Frameworks engineered to elevate your entire lifelong career trajectory.',
      body: 'The positioning rubrics, executive STAR frameworks, and counter-offer negotiation strategies you master at Skilluence will serve as lifelong assets for every promotion, executive transition, and milestone across your career.',
    },
  ];

  return (
    <section className="w-full bg-[#142F23] text-[#FBF9F5] py-24 sm:py-32 border-b border-[#0E2118] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[#FBF9F5]/15">
          <div className="max-w-2xl space-y-3">
            <div className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#C36B4E] font-semibold">
              <span>Section VI • The Advisory Charter</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal tracking-tight text-[#FBF9F5] leading-[1.12]">
              The Skilluence Standard.{' '}
              <span className="block mt-1 font-serif italic text-[#C36B4E]">
                Three foundational commitments defining our advisory ethos.
              </span>
            </h2>
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.14em] font-semibold text-[#FBF9F5] hover:text-[#C36B4E] transition-colors group whitespace-nowrap"
          >
            <span>Read The Complete Charter</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C36B4E] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {pillars.map((item, idx) => (
            <div 
              key={idx}
              className="p-8 sm:p-12 rounded-sm bg-[#0E2118] border border-[#FBF9F5]/10 hover:border-[#C36B4E]/40 transition-colors duration-300 flex flex-col justify-between space-y-8"
            >
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#FBF9F5]/10">
                  <span className="text-3xl font-serif italic text-[#C36B4E]">
                    Principle {item.roman}
                  </span>
                  <div className="w-8 h-8 rounded-sm bg-[#142F23] flex items-center justify-center text-[#FBF9F5]">
                    <item.icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-2xl font-serif font-normal text-[#FBF9F5] tracking-tight">
                  {item.title}
                </h3>
                <div className="font-serif italic text-sm text-[#546B5F] mt-2 leading-relaxed">
                  {item.summary}
                </div>

                <p className="text-xs sm:text-sm text-[#FBF9F5]/75 leading-relaxed mt-5 font-normal">
                  {item.body}
                </p>
              </div>

              <div className="pt-6 border-t border-[#FBF9F5]/10 text-[10px] font-sans uppercase tracking-[0.16em] text-[#C36B4E] font-semibold">
                Permanent Advisory Standard
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
