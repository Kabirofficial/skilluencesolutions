import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Target, TrendingUp } from 'lucide-react';

export default function HomeManifesto() {
  const pillars = [
    {
      number: '01',
      icon: ShieldCheck,
      title: 'Fiduciary Alignment',
      summary: 'We work exclusively for you — never for recruiters or corporate staffing agencies.',
      body: 'Most staffing firms collect commissions by pushing candidates into suboptimal roles or taking ongoing cuts of your salary. Skilluence operates with complete fiduciary independence: we charge fixed advisory fees with zero ongoing percentage skimming.',
    },
    {
      number: '02',
      icon: Target,
      title: 'Commercial Caliber',
      summary: 'We replace academic theory with hiring manager commercial rubrics.',
      body: 'Academic computer science teaches algorithms; corporate tech hiring tests systems impact, business trade-offs, and communication under pressure. We calibrate your narrative to match what VP-level hiring managers look for.',
    },
    {
      number: '03',
      icon: TrendingUp,
      title: 'Compounding Leverage',
      summary: 'Strategies designed to elevate your entire career trajectory, not just your first job.',
      body: 'The positioning, STAR storytelling, and salary negotiation frameworks you master with Skilluence compound for every promotion, transition, and career milestone throughout your professional life in the US tech market.',
    },
  ];

  return (
    <section className="w-full bg-sp-ink text-sp-white py-20 sm:py-28 border-b border-sp-charcoal relative overflow-hidden">
      {/* Subtle Background Architectural Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #FFFFFF 1px, transparent 1px),
            linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-sp-charcoal">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-charcoal border border-sp-midGray/40 text-[11px] font-mono uppercase tracking-widest text-sp-lightGray mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-sp-white" />
              <span>THE ADVISORY CHARTER</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-sp-white leading-[1.12]">
              The Skilluence Standard.<br />
              <span className="font-times italic font-normal text-sp-lightGray">
                Three principles defining our advisory ethos.
              </span>
            </h2>
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sp-lightGray hover:text-sp-white transition-colors group whitespace-nowrap"
          >
            <span>Learn More About Our Mission</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-8 rounded-card bg-sp-charcoal/60 border border-sp-midGray/30 hover:border-sp-lightGray/60 transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black font-mono text-sp-midGray">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-sp-charcoal border border-sp-midGray/50 flex items-center justify-center text-sp-white">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-sp-white tracking-tight">
                    {item.title}
                  </h3>
                  <div className="font-times italic text-sm text-sp-lightGray mt-1">
                    {item.summary}
                  </div>

                  <p className="text-xs text-sp-midGray leading-relaxed mt-4 font-normal">
                    {item.body}
                  </p>
                </div>

                <div className="pt-4 border-t border-sp-midGray/20 text-[10px] font-mono uppercase tracking-widest text-sp-lightGray/70">
                  STANDARD VERIFIED
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
