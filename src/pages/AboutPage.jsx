import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PhilosophySection from '../components/PhilosophySection';
import WhySkilluence from '../components/WhySkilluence';
import AudienceStory from '../components/AudienceStory';

export default function AboutPage() {
  return (
    <div className="w-full bg-sp-white text-sp-ink pt-28 sm:pt-36">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 border-b border-sp-lightGray">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sp-midGray mb-4">
          <Link to="/" className="hover:text-sp-ink transition-colors">Home</Link>
          <span>/</span>
          <span className="text-sp-ink font-bold">About Us</span>
        </div>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-offWhite border border-sp-lightGray text-[11px] font-mono uppercase tracking-widest text-sp-charcoal mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
            <span>ETHOS & MISSION</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-sp-ink leading-[1.08]">
            Practical Guidance.<br />
            <span className="font-times italic font-normal text-sp-charcoal">
              Grounded in accountability and clarity.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-sp-midGray mt-4 max-w-2xl leading-relaxed">
            Skilluence Solutions was founded on a simple premise: academic education provides theoretical foundations, but commercial hiring requires distinct tactical positioning. We bridge that gap without shortcuts or false promises.
          </p>
        </div>
      </section>

      {/* Visual Editorial Feature */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative rounded-card overflow-hidden border border-sp-lightGray shadow-xl bg-sp-ink group">
          <img
            src="/images/interview_mentorship_session.jpg"
            alt="Skilluence Mentorship and Editorial Advisory"
            width="1200"
            height="500"
            className="w-full h-[260px] sm:h-[380px] lg:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sp-ink/90 via-sp-ink/60 to-transparent flex items-center p-6 sm:p-12 lg:p-16" />
          <div className="absolute inset-0 flex items-center p-6 sm:p-12 lg:p-16">
            <div className="max-w-xl text-sp-white space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-sp-lightGray font-bold">
                ADVISORY CREDIBILITY & INTEGRITY
              </span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-sp-white">
                Independent Career Advisory. No Shortcuts.
              </h2>
              <p className="text-xs sm:text-sm text-sp-lightGray leading-relaxed max-w-md">
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
      <section className="py-20 bg-sp-offWhite border-t border-sp-lightGray text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-sp-ink">
            Speak with our career advisors today.
          </h2>
          <p className="text-base text-sp-midGray max-w-xl mx-auto">
            Take the first step toward structured profile positioning and decisive interview readiness.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-btn bg-sp-ink text-sp-white font-bold text-xs font-mono uppercase tracking-wider hover:bg-sp-charcoal transition-all shadow-sm"
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
