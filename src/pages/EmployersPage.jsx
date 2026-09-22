import { Link } from 'react-router-dom';
import { ArrowRight, Building2, ShieldCheck, Mail } from 'lucide-react';
import EmployerSolutions from '../components/EmployerSolutions';
import CandidateMarquee from '../components/CandidateMarquee';
import { siteConfig } from '../data/siteData';

export default function EmployersPage() {
  return (
    <div className="w-full bg-[#FAF7F2] text-[#1F2421] pt-28 sm:pt-36">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-b border-[#E8E2D8]">
        <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#556059] mb-6 font-medium">
          <Link to="/" className="hover:text-[#142F23] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#142F23] font-semibold">Employers</span>
        </div>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#E8E2D8] bg-[#FBF9F5] text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#142F23] mb-6">
            <span className="w-1.5 h-1.5 bg-[#C36B4E]" />
            <span>Enterprise Talent Acquisition</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-normal tracking-tight text-[#142F23] leading-[1.12]">
            Pre-Vetted Talent. <br />
            <span className="italic font-serif text-[#C36B4E]">
              Engineered for immediate organizational impact.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#556059] mt-6 max-w-2xl leading-relaxed font-light">
            Partner with Skilluence Solutions to access top-tier graduates and disciplined career professionals across software engineering, data science, cloud architecture, and corporate analytics.
          </p>
        </div>
      </section>

      {/* Marquee */}
      <CandidateMarquee />

      {/* Visual Enterprise Scale Feature */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative border border-[#E8E2D8] bg-[#142F23] overflow-hidden group">
          <img
            src="/images/us_tech_ecosystem.jpg"
            alt="US Enterprise Tech Corridor"
            width="1200"
            height="500"
            loading="lazy"
            decoding="async"
            className="w-full h-[280px] sm:h-[400px] lg:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#142F23]/95 via-[#142F23]/40 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-xl text-[#FBF9F5] space-y-2">
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#C36B4E] font-semibold">
                High-Conversion Placement Hubs
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-normal text-white leading-snug">
                Connecting US Enterprises with <br className="hidden sm:block" />
                <span className="italic font-serif">Decisive Early-Career Talent.</span>
              </h2>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 border border-white/20 bg-white/10 text-xs font-sans text-[#FBF9F5] shrink-0 backdrop-blur-xs">
              <ShieldCheck className="w-4 h-4 text-[#C36B4E]" />
              <span className="font-medium">Pre-Screened & Technically Vetted</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Employer Solutions Component */}
      <EmployerSolutions />

      {/* Corporate Inquiry Panel */}
      <section className="py-24 bg-[#FAF7F2] border-t border-[#E8E2D8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-14 bg-white border border-[#E8E2D8] shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#E8E2D8] bg-[#FAF7F2] text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#142F23]">
              <Building2 className="w-3.5 h-3.5 text-[#C36B4E]" />
              <span>Direct Corporate Pipeline</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-serif font-normal text-[#142F23] tracking-tight">
              Submit a Hiring Requirement
            </h2>
            <p className="text-base text-[#556059] leading-relaxed font-light">
              We connect hiring managers directly with candidates matched to technical specifications, visa eligibility (OPT/CPT/H-1B), and verified project deliverables.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={`mailto:${siteConfig.contact.email}?subject=Enterprise%20Hiring%20Partnership%20Inquiry`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C36B4E] hover:bg-[#A8553B] text-white font-medium text-xs font-sans uppercase tracking-wider transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Email {siteConfig.contact.email}</span>
              </a>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-[#E8E2D8] text-[#142F23] font-medium text-xs font-sans uppercase tracking-wider hover:bg-[#FAF7F2] hover:border-[#142F23] transition-colors"
              >
                <span>Use Advisory Intake Form</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
