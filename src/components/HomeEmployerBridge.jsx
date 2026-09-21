import { Link } from 'react-router-dom';
import { Building2, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function HomeEmployerBridge() {
  return (
    <section className="py-16 sm:py-20 bg-sp-offWhite text-sp-ink border-b border-sp-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-card overflow-hidden border border-sp-lightGray shadow-xl bg-sp-ink text-sp-white p-8 sm:p-12 lg:p-16">
          
          {/* Subtle Background Pattern */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#FFFFFF 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-charcoal border border-sp-midGray/40 text-[11px] font-mono uppercase tracking-widest text-sp-lightGray">
                <Building2 className="w-3.5 h-3.5 text-sp-white" />
                <span>FOR ENTERPRISES & RECRUITERS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-sp-white leading-tight">
                Direct Access to Pre-Vetted<br />
                <span className="font-times italic font-normal text-sp-lightGray">
                  Early-Career & Tech Talent.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-sp-gray max-w-2xl leading-relaxed">
                We bridge high-growth organizations and corporate hiring teams with top international graduates and STEM OPT professionals trained in production-grade environments.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-sp-lightGray">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sp-white" />
                  Technical Interview Vetted
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sp-white" />
                  OPT/CPT/H-1B Eligible
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sp-white" />
                  Zero Placement Retainer
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 shrink-0">
              <Link
                to="/employers"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-btn bg-sp-white text-sp-ink font-bold text-xs font-mono uppercase tracking-wider hover:bg-sp-offWhite transition-all shadow-sm active:scale-[0.98]"
              >
                <span>Employer Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-btn bg-sp-charcoal border border-sp-midGray/50 text-sp-white font-bold text-xs font-mono uppercase tracking-wider hover:bg-sp-midGray/40 transition-all active:scale-[0.98]"
              >
                <span>Request Candidate Pipeline</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
