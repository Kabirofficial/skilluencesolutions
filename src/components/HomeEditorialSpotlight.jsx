import { Link } from 'react-router-dom';
import { ArrowRight, Check, MapPin, Building, Award } from 'lucide-react';

export default function HomeEditorialSpotlight() {
  return (
    <section className="w-full bg-[#FBF9F5] py-24 sm:py-32 border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 pb-8 border-b border-[#E8E2D8]">
          <div className="space-y-3">
            <div className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#C36B4E] font-semibold">
              <span>Section V • Candidate Case Study Dossier</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal tracking-tight text-[#142F23] leading-[1.12]">
              Alumni Appointment Spotlight.{' '}
              <span className="block mt-1 font-serif italic text-[#C36B4E]">
                From 140 cold rejections to signed AWS offer letter.
              </span>
            </h2>
          </div>

          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.14em] font-semibold text-[#142F23] hover:text-[#C36B4E] transition-colors group shrink-0"
          >
            <span>Read All 12 Candidate Dossiers</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C36B4E] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Featured Editorial Magazine Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-[#E8E2D8] bg-[#FFFFFF] rounded-sm shadow-[0_4px_24px_rgba(20,47,35,0.03)] overflow-hidden">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full bg-[#142F23] overflow-hidden group">
            <img
              src="/images/career_offer_success.jpg"
              alt="Candidate Career Milestone Spotlight"
              width="800"
              height="600"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E2118]/95 via-[#0E2118]/30 to-transparent" />
            
            {/* Caption Plaque */}
            <div className="absolute bottom-8 left-8 right-8 text-[#FBF9F5] space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#142F23]/80 border border-[#FBF9F5]/20 text-[10px] font-sans uppercase tracking-[0.16em] text-[#C36B4E] font-semibold">
                <Award className="w-3 h-3" />
                <span>Verified Appointment • Amazon AWS</span>
              </div>
              <div className="text-xl font-serif text-[#FBF9F5] font-normal tracking-tight">
                Sneha Patel • MS in Computer Science
              </div>
              <div className="text-xs text-[#FBF9F5]/70 flex items-center gap-4 pt-1 font-sans">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C36B4E]" /> Seattle, WA
                </span>
                <span className="flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-[#C36B4E]" /> Amazon AWS
                </span>
              </div>
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between bg-[#FFFFFF] space-y-8">
            <div className="space-y-6">
              
              {/* Telemetry Tag Strip */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-sm bg-[#F4EFEA] border border-[#E8E2D8] text-xs font-sans text-[#142F23] font-medium">
                  Role: Cloud Infrastructure Engineer
                </span>
                <span className="px-3.5 py-1.5 rounded-sm bg-[#142F23] text-[#FBF9F5] text-xs font-sans font-medium">
                  Compensation: $128,000 Base + RSUs
                </span>
                <span className="px-3.5 py-1.5 rounded-sm bg-[#F4EFEA] border border-[#E8E2D8] text-xs font-sans text-[#5E6963]">
                  Cycle: 38 Days
                </span>
              </div>

              {/* Serif Pull-Quote */}
              <blockquote className="font-serif italic text-xl sm:text-2xl text-[#142F23] leading-relaxed border-l-2 border-[#C36B4E] pl-6 py-2">
                "Before Skilluence, I submitted over 140 applications online with zero interview responses. Skilluence completely rebuilt my narrative, audited my distributed systems architecture project, and calibrated my composure through rigorous behavioral drills. Within 38 days, I had multiple final rounds and signed with AWS."
              </blockquote>

              {/* Challenge vs Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div className="p-5 rounded-sm bg-[#FBF9F5] border border-[#E8E2D8]">
                  <div className="text-[11px] font-sans uppercase tracking-[0.16em] text-[#C36B4E] font-semibold mb-2">
                    Initial Deficit
                  </div>
                  <p className="text-xs text-[#5E6963] leading-relaxed font-normal">
                    Uncalibrated academic resume with zero ATS keyword weighting, weak quantitative impact metrics, and passive candidate framing in initial recruiter screenings.
                  </p>
                </div>
                <div className="p-5 rounded-sm bg-[#FBF9F5] border border-[#E8E2D8]">
                  <div className="text-[11px] font-sans uppercase tracking-[0.16em] text-[#142F23] font-semibold mb-2">
                    Advisory Intervention
                  </div>
                  <p className="text-xs text-[#5E6963] leading-relaxed font-normal">
                    Full STAR narrative alignment, distributed systems architecture project audit, and 4 mock behavioral simulation drills with senior mentors.
                  </p>
                </div>
              </div>

              {/* Verifiable Milestones */}
              <div className="space-y-2.5 pt-2 font-sans text-xs text-[#1F2421]">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#142F23] shrink-0" />
                  <span>ATS score increased from 48/100 to 96/100 parser validation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#142F23] shrink-0" />
                  <span>3 corporate final rounds secured within first 3 weeks of active search</span>
                </div>
              </div>

            </div>

            {/* Bottom Link */}
            <div className="pt-8 border-t border-[#E8E2D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-[#5E6963] font-sans">
                Documented case brief. Published with candidate authorization.
              </div>
              <Link
                to="/testimonials"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-[#142F23] hover:bg-[#1B3E2F] text-[#FBF9F5] text-xs font-sans uppercase tracking-[0.14em] font-semibold transition-colors"
              >
                <span>Inspect All Case Briefs</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C36B4E]" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
