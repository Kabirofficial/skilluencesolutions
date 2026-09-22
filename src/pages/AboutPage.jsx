import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PhilosophySection from '../components/PhilosophySection';
import WhySkilluence from '../components/WhySkilluence';
import AudienceStory from '../components/AudienceStory';

export default function AboutPage() {
  return (
    <div className="w-full bg-[#FAF7F2] text-[#1F2421] pt-28 sm:pt-36">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-b border-[#E8E2D8]">
        <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#556059] mb-6 font-medium">
          <Link to="/" className="hover:text-[#142F23] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#142F23] font-semibold">About Us</span>
        </div>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#E8E2D8] bg-[#FBF9F5] text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#142F23] mb-6">
            <span className="w-1.5 h-1.5 bg-[#C36B4E]" />
            <span>Ethos & Advisory Mission</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-normal tracking-tight text-[#142F23] leading-[1.12]">
            Practical Guidance. <br />
            <span className="italic font-serif text-[#C36B4E]">
              Grounded in accountability and clarity.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#556059] mt-6 max-w-2xl leading-relaxed font-light">
            Skilluence Solutions was founded on a simple premise: academic education provides theoretical foundations, but commercial hiring requires distinct tactical positioning. We bridge that gap without shortcuts or false promises.
          </p>
        </div>
      </section>

      {/* Visual Editorial Feature */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative border border-[#E8E2D8] bg-[#142F23] group overflow-hidden">
          <img
            src="/images/interview_mentorship_session.jpg"
            alt="Skilluence Mentorship and Editorial Advisory"
            width="1200"
            height="500"
            loading="lazy"
            decoding="async"
            className="w-full h-[280px] sm:h-[400px] lg:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#142F23]/90 via-[#142F23]/65 to-transparent flex items-center p-6 sm:p-12 lg:p-16" />
          <div className="absolute inset-0 flex items-center p-6 sm:p-12 lg:p-16">
            <div className="max-w-xl text-[#FBF9F5] space-y-4">
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#C36B4E] font-semibold block">
                Advisory Credibility & Integrity
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-normal tracking-tight text-white leading-snug">
                Independent Career Advisory. <br />
                <span className="italic">No Shortcuts.</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#E8E2D8]/85 leading-relaxed max-w-md font-light">
                We believe career mentorship should be rigorous, transparent, and grounded in real commercial metrics. Our advisors work closely with candidates to build enduring career capability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Philosophy & Manifesto */}
      <PhilosophySection />

      {/* What Makes Skilluence Different */}
      <WhySkilluence />

      {/* Audience Personas (Who We Help) */}
      <AudienceStory />

      {/* Conversion Banner */}
      <section className="py-24 bg-[#FAF7F2] border-t border-[#E8E2D8] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#E8E2D8] bg-[#FBF9F5] text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#142F23]">
            <span className="w-1.5 h-1.5 bg-[#C36B4E]" />
            <span>Consultation Available</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal tracking-tight text-[#142F23]">
            Speak with our career advisors today.
          </h2>
          <p className="text-base text-[#556059] max-w-xl mx-auto font-light leading-relaxed">
            Take the first step toward structured profile positioning and decisive interview readiness.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C36B4E] hover:bg-[#A8553B] text-white font-medium text-xs font-sans uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
