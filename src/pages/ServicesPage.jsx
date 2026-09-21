import { Link } from 'react-router-dom';
import { ArrowRight, Layers, CheckCircle } from 'lucide-react';
import ServicesStory from '../components/ServicesStory';
import ServiceVisuals from '../components/ServiceVisuals';
import CandidateMarquee from '../components/CandidateMarquee';

export default function ServicesPage() {
  return (
    <div className="w-full bg-sp-white text-sp-ink pt-28 sm:pt-36">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 border-b border-sp-lightGray">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sp-midGray mb-4">
          <Link to="/" className="hover:text-sp-ink transition-colors">Home</Link>
          <span>/</span>
          <span className="text-sp-ink font-bold">Services</span>
        </div>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-offWhite border border-sp-lightGray text-[11px] font-mono uppercase tracking-widest text-sp-charcoal mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
            <span>MODULAR CAREER SUITE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-sp-ink leading-[1.08]">
            Strategic Services.<br />
            <span className="font-times italic font-normal text-sp-charcoal">
              Engineered for hiring conversion.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-sp-midGray mt-4 max-w-2xl leading-relaxed">
            From ATS resume reconstruction to 1-on-1 STAR interview simulation drills and offer negotiation, our structured services position candidates for decisive career milestones.
          </p>
        </div>
      </section>

      {/* Featured Strategic Visual Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="relative rounded-card overflow-hidden border border-sp-lightGray shadow-xl bg-sp-ink">
          <img
            src="/images/career_strategy_workspace.jpg"
            alt="Strategic Career Advisory Suite"
            width="1200"
            height="500"
            className="w-full h-[260px] sm:h-[380px] lg:h-[440px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sp-ink/90 via-sp-ink/50 to-transparent flex items-center p-6 sm:p-12 lg:p-16" />
          <div className="absolute inset-0 flex items-center p-6 sm:p-12 lg:p-16">
            <div className="max-w-xl text-sp-white space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-charcoal/80 border border-sp-midGray/50 text-[10px] font-mono uppercase tracking-widest text-sp-lightGray backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-sp-white" />
                <span>EXECUTIVE METHODOLOGY</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-sp-white">
                Engineered for High-Yield Interview Traction.
              </h2>
              <p className="text-xs sm:text-sm text-sp-lightGray leading-relaxed max-w-md">
                Every service module is calibrated around measurable hiring mechanics: ATS parser accuracy, STAR narrative structure, and direct recruiter discovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Trust Banner */}
      <CandidateMarquee />

      {/* Core Modular Services Story */}
      <ServicesStory />

      {/* Interactive Service Visuals & Diagnostic Proof */}
      <ServiceVisuals />

      {/* Conversion Banner */}
      <section className="py-20 bg-sp-offWhite border-t border-sp-lightGray text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-sp-ink">
            Ready to structure your professional narrative?
          </h2>
          <p className="text-base text-sp-midGray max-w-xl mx-auto">
            Explore our transparent pricing tiers or get in touch with our career advisory management directly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-btn bg-sp-ink text-sp-white font-bold text-xs font-mono uppercase tracking-wider hover:bg-sp-charcoal transition-all shadow-sm"
            >
              <span>View Pricing Plans</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-btn bg-sp-white border border-sp-lightGray text-sp-ink font-bold text-xs font-mono uppercase tracking-wider hover:bg-sp-offWhite transition-all"
            >
              <span>Contact Advisory Desk</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
