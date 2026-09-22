import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ServicesStory from '../components/ServicesStory';
import CandidateMarquee from '../components/CandidateMarquee';

export default function ServicesPage() {
  return (
    <div className="w-full bg-[#FAF7F2] text-[#1F2421] pt-28 sm:pt-36">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-b border-[#E8E2D8]">
        <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#556059] mb-6 font-medium">
          <Link to="/" className="hover:text-[#142F23] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#142F23] font-semibold">Services</span>
        </div>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#E8E2D8] bg-[#FBF9F5] text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#142F23] mb-6">
            <span className="w-1.5 h-1.5 bg-[#C36B4E]" />
            <span>Modular Career Suite</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-normal tracking-tight text-[#142F23] leading-[1.12]">
            Strategic Services. <br />
            <span className="italic font-serif text-[#C36B4E]">
              Engineered for hiring conversion.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#556059] mt-6 max-w-2xl leading-relaxed font-light">
            From ATS resume reconstruction to 1-on-1 STAR interview simulation drills and offer negotiation, our structured services position candidates for decisive career milestones.
          </p>
        </div>
      </section>

      {/* Featured Strategic Visual Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative border border-[#E8E2D8] bg-[#142F23] overflow-hidden group">
          <img
            src="/images/career_strategy_workspace.jpg"
            alt="Strategic Career Advisory Suite"
            width="1200"
            height="500"
            loading="lazy"
            decoding="async"
            className="w-full h-[280px] sm:h-[400px] lg:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#142F23]/90 via-[#142F23]/60 to-transparent flex items-center p-6 sm:p-12 lg:p-16" />
          <div className="absolute inset-0 flex items-center p-6 sm:p-12 lg:p-16">
            <div className="max-w-xl text-[#FBF9F5] space-y-4">
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#C36B4E] font-semibold block">
                Executive Methodology
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-normal tracking-tight text-white leading-snug">
                Engineered for High-Yield <br />
                <span className="italic font-serif">Interview Traction.</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#E8E2D8]/85 leading-relaxed max-w-md font-light">
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

      {/* Conversion Banner */}
      <section className="py-24 bg-[#FAF7F2] border-t border-[#E8E2D8] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#E8E2D8] bg-[#FBF9F5] text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#142F23]">
            <span className="w-1.5 h-1.5 bg-[#C36B4E]" />
            <span>Advisory Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal tracking-tight text-[#142F23]">
            Ready to structure your professional narrative?
          </h2>
          <p className="text-base text-[#556059] max-w-xl mx-auto font-light leading-relaxed">
            Explore our transparent pricing tiers or get in touch with our career advisory management directly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C36B4E] hover:bg-[#A8553B] text-white font-medium text-xs font-sans uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>View Pricing Plans</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-[#E8E2D8] text-[#142F23] font-medium text-xs font-sans uppercase tracking-wider hover:bg-[#FAF7F2] hover:border-[#142F23] transition-colors"
            >
              <span>Contact Advisory Desk</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
