import { Link } from 'react-router-dom';
import { ArrowRight, Building2, CheckCircle2, ShieldCheck, Mail } from 'lucide-react';
import EmployerSolutions from '../components/EmployerSolutions';
import CandidateMarquee from '../components/CandidateMarquee';
import { siteConfig } from '../data/siteData';

export default function EmployersPage() {
  return (
    <div className="w-full bg-sp-white text-sp-ink pt-28 sm:pt-36">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 border-b border-sp-lightGray">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sp-midGray mb-4">
          <Link to="/" className="hover:text-sp-ink transition-colors">Home</Link>
          <span>/</span>
          <span className="text-sp-ink font-bold">Employers</span>
        </div>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-offWhite border border-sp-lightGray text-[11px] font-mono uppercase tracking-widest text-sp-charcoal mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
            <span>ENTERPRISE TALENT ACQUISITION</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-sp-ink leading-[1.08]">
            Pre-Vetted Talent.<br />
            <span className="font-times italic font-normal text-sp-charcoal">
              Engineered for immediate organizational impact.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-sp-midGray mt-4 max-w-2xl leading-relaxed">
            Partner with Skilluence Solutions to access top-tier graduates and disciplined career professionals across software, data science, cloud architecture, and corporate analytics.
          </p>
        </div>
      </section>

      {/* Marquee */}
      <CandidateMarquee />

      {/* Visual Enterprise Scale Feature */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative rounded-card overflow-hidden border border-sp-lightGray shadow-xl bg-sp-ink group">
          <img
            src="/images/us_tech_ecosystem.jpg"
            alt="US Enterprise Tech Corridor"
            width="1200"
            height="500"
            className="w-full h-[280px] sm:h-[400px] lg:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sp-ink/95 via-sp-ink/40 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-xl text-sp-white space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-sp-lightGray font-bold">
                HIGH-CONVERSION PLACEMENT HUBS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-sp-white">
                Connecting US Enterprises with Decisive Early-Career Talent.
              </h2>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-btn bg-sp-charcoal/90 border border-sp-midGray/40 text-xs font-mono text-sp-lightGray shrink-0 backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-sp-white" />
              <span>Pre-Screened & Technically Vetted</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Employer Solutions Component */}
      <EmployerSolutions />

      {/* Corporate Inquiry Panel */}
      <section className="py-20 bg-sp-offWhite border-t border-sp-lightGray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-card bg-sp-white border border-sp-lightGray shadow-lg space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-offWhite border border-sp-lightGray text-[11px] font-mono uppercase tracking-widest text-sp-charcoal">
              <Building2 className="w-4 h-4 text-sp-ink" />
              <span>DIRECT RECRUITER PIPELINE</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-black text-sp-ink tracking-tight">
              Submit a Hiring Requirement
            </h2>
            <p className="text-sm sm:text-base text-sp-midGray leading-relaxed">
              We connect hiring managers directly with candidates matched to technical specifications, visa eligibility (OPT/CPT/H-1B), and verified project deliverables.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={`mailto:${siteConfig.contact.email}?subject=Enterprise%20Hiring%20Partnership%20Inquiry`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-btn bg-sp-ink text-sp-white font-bold text-xs font-mono uppercase tracking-wider hover:bg-sp-charcoal transition-all shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Email {siteConfig.contact.email}</span>
              </a>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-btn bg-sp-offWhite border border-sp-lightGray text-sp-ink font-bold text-xs font-mono uppercase tracking-wider hover:bg-sp-lightGray/70 transition-all"
              >
                <span>Use Contact Form</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
