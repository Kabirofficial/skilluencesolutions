import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SolutionStory from '../components/SolutionStory';
import CareerJourney from '../components/CareerJourney';
import ProcessStory from '../components/ProcessStory';

export default function ProcessPage() {
  return (
    <div className="w-full bg-[#FAF7F2] text-[#1F2421] pt-28 sm:pt-36">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-b border-[#E8E2D8]">
        <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#556059] mb-6 font-medium">
          <Link to="/" className="hover:text-[#142F23] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#142F23] font-semibold">Process & Journey</span>
        </div>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#E8E2D8] bg-[#FBF9F5] text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#142F23] mb-6">
            <span className="w-1.5 h-1.5 bg-[#C36B4E]" />
            <span>Methodology & Strategic Workflow</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-normal tracking-tight text-[#142F23] leading-[1.12]">
            Systematic Process. <br />
            <span className="italic font-serif text-[#C36B4E]">
              A transparent path from degree to offer.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#556059] mt-6 max-w-2xl leading-relaxed font-light">
            Career success is not a gamble. Our disciplined 6-stage operational framework turns academic achievement into verified hiring traction with clear deliverables at every step.
          </p>
        </div>
      </section>

      {/* Core Methodology: Build, Position, Apply, Prepare */}
      <SolutionStory />

      {/* Signature Interactive Career Journey */}
      <CareerJourney />

      {/* Visual Feature: 1-on-1 Mentorship & Evaluation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 border border-[#E8E2D8] bg-[#142F23] overflow-hidden group">
            <img
              src="/images/interview_mentorship_session.jpg"
              alt="1-on-1 Mentorship Evaluation Session"
              width="800"
              height="450"
              loading="lazy"
              decoding="async"
              className="w-full h-[320px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
            />
          </div>
          <div className="lg:col-span-6 space-y-6 lg:pl-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#E8E2D8] bg-[#FBF9F5] text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#142F23]">
              <span className="w-1.5 h-1.5 bg-[#C36B4E]" />
              <span>The Mentorship Difference</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#142F23] tracking-tight leading-[1.15]">
              Direct Guidance From Seasoned Industry Reviewers.
            </h2>
            <p className="text-base text-[#556059] leading-relaxed font-light">
              You won't be left navigating ATS rejection letters alone. Every phase of your job search is calibrated in direct 1-on-1 strategy sessions with senior professionals who understand the hiring dynamics at major US tech enterprises.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2 font-sans text-xs">
              <div className="p-5 bg-white border border-[#E8E2D8] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                <div className="font-serif italic text-2xl text-[#142F23]">1-on-1</div>
                <div className="text-[#556059] mt-1 font-light">Dedicated Mock Drills</div>
              </div>
              <div className="p-5 bg-white border border-[#E8E2D8] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                <div className="font-serif italic text-2xl text-[#C36B4E]">Weekly</div>
                <div className="text-[#556059] mt-1 font-light">Pipeline Review Audits</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Step-by-Step Workflow Story */}
      <ProcessStory />

      {/* Conversion Banner */}
      <section className="py-24 bg-[#FAF7F2] border-t border-[#E8E2D8] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#E8E2D8] bg-[#FBF9F5] text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#142F23]">
            <span className="w-1.5 h-1.5 bg-[#C36B4E]" />
            <span>Consultation Available</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal tracking-tight text-[#142F23]">
            Begin your structured roadmap today.
          </h2>
          <p className="text-base text-[#556059] max-w-xl mx-auto font-light leading-relaxed">
            Review our service packages or discuss your background with our advisory team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C36B4E] hover:bg-[#A8553B] text-white font-medium text-xs font-sans uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-[#E8E2D8] text-[#142F23] font-medium text-xs font-sans uppercase tracking-wider hover:bg-[#FAF7F2] hover:border-[#142F23] transition-colors"
            >
              <span>Schedule Intake</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
