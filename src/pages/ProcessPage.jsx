import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SolutionStory from '../components/SolutionStory';
import CareerJourney from '../components/CareerJourney';
import ProcessStory from '../components/ProcessStory';

export default function ProcessPage() {
  return (
    <div className="w-full bg-sp-white text-sp-ink pt-28 sm:pt-36">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 border-b border-sp-lightGray">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sp-midGray mb-4">
          <Link to="/" className="hover:text-sp-ink transition-colors">Home</Link>
          <span>/</span>
          <span className="text-sp-ink font-bold">Process & Journey</span>
        </div>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-offWhite border border-sp-lightGray text-[11px] font-mono uppercase tracking-widest text-sp-charcoal mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
            <span>METHODOLOGY & WORKFLOW</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-sp-ink leading-[1.08]">
            Systematic Process.<br />
            <span className="font-times italic font-normal text-sp-charcoal">
              A transparent path from degree to offer.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-sp-midGray mt-4 max-w-2xl leading-relaxed">
            Career success is not a gamble. Our disciplined 6-stage operational framework turns academic achievement into verified hiring traction with clear deliverables at every step.
          </p>
        </div>
      </section>

      {/* Core Methodology: Build, Position, Apply, Prepare */}
      <SolutionStory />

      {/* Signature 2.5D Interactive Career Journey */}
      <CareerJourney />

      {/* Visual Feature: 1-on-1 Mentorship & Evaluation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 rounded-card overflow-hidden border border-sp-lightGray shadow-xl bg-sp-ink group">
            <img
              src="/images/interview_mentorship_session.jpg"
              alt="1-on-1 Mentorship Evaluation Session"
              width="800"
              height="450"
              className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="lg:col-span-6 space-y-5 lg:pl-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-offWhite border border-sp-lightGray text-[11px] font-mono uppercase tracking-widest text-sp-charcoal">
              <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
              <span>THE MENTORSHIP DIFFERENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-sp-ink tracking-tight">
              Direct Guidance From Seasoned Industry Reviewers.
            </h2>
            <p className="text-base text-sp-midGray leading-relaxed font-normal">
              You won't be left navigating ATS rejection letters alone. Every phase of your job search is calibrated in direct 1-on-1 strategy sessions with senior professionals who understand the hiring dynamics at major US tech enterprises.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2 font-mono text-xs text-sp-charcoal">
              <div className="p-3.5 rounded-card bg-sp-offWhite border border-sp-lightGray">
                <div className="font-black text-lg text-sp-ink">1-on-1</div>
                <div className="text-sp-midGray mt-0.5">Dedicated Mock Drills</div>
              </div>
              <div className="p-3.5 rounded-card bg-sp-offWhite border border-sp-lightGray">
                <div className="font-black text-lg text-sp-ink">Weekly</div>
                <div className="text-sp-midGray mt-0.5">Pipeline Review Audits</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Step-by-Step Workflow Story */}
      <ProcessStory />

      {/* Conversion Banner */}
      <section className="py-20 bg-sp-offWhite border-t border-sp-lightGray text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-sp-ink">
            Begin your structured roadmap today.
          </h2>
          <p className="text-base text-sp-midGray max-w-xl mx-auto">
            Review our service packages or discuss your background with our advisory team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-btn bg-sp-ink text-sp-white font-bold text-xs font-mono uppercase tracking-wider hover:bg-sp-charcoal transition-all shadow-sm"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-btn bg-sp-white border border-sp-lightGray text-sp-ink font-bold text-xs font-mono uppercase tracking-wider hover:bg-sp-offWhite transition-all"
            >
              <span>Schedule Intake</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
