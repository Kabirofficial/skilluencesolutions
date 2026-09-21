import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, MapPin, Building, Award } from 'lucide-react';

export default function HomeEditorialSpotlight() {
  return (
    <section className="w-full bg-sp-white py-20 sm:py-28 border-b border-sp-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-offWhite border border-sp-lightGray text-[11px] font-mono uppercase tracking-widest text-sp-charcoal mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
              <span>FEATURED CASE BRIEF</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-sp-ink leading-[1.12]">
              Verified Candidate Spotlight.<br />
              <span className="font-times italic font-normal text-sp-charcoal">
                From 140+ rejections to a signed AWS offer.
              </span>
            </h2>
          </div>

          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-sp-ink hover:text-sp-charcoal transition-colors group"
          >
            <span>Read All 12 Candidate Journeys</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Featured Editorial Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-card border border-sp-lightGray bg-sp-offWhite overflow-hidden shadow-lg">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full bg-sp-ink overflow-hidden group">
            <img
              src="/images/career_offer_success.jpg"
              alt="Candidate Career Milestone Spotlight"
              width="800"
              height="600"
              className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sp-ink via-sp-ink/30 to-transparent" />
            
            {/* Overlay Tag */}
            <div className="absolute bottom-6 left-6 right-6 text-sp-white space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-sp-ink/80 backdrop-blur-sm border border-sp-midGray/50 text-[10px] font-mono uppercase tracking-wider text-sp-white">
                <Award className="w-3 h-3 text-sp-lightGray" />
                <span>CASE REFERENCE: CS-2024-SEA</span>
              </div>
              <div className="text-lg font-black text-sp-white tracking-tight">
                Sneha Patel • MS in Computer Science
              </div>
              <div className="text-xs text-sp-lightGray flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> Seattle, WA
                </span>
                <span className="flex items-center gap-1">
                  <Building className="w-3 h-3" /> Amazon AWS
                </span>
              </div>
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between bg-sp-white">
            <div className="space-y-6">
              
              {/* Monospace Telemetry Badges */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-btn bg-sp-offWhite border border-sp-lightGray text-[11px] font-mono text-sp-ink font-bold">
                  Role: Cloud Infrastructure Engineer
                </span>
                <span className="px-3 py-1 rounded-btn bg-sp-ink text-sp-white text-[11px] font-mono font-bold">
                  Package: $128,000 Base + RSUs
                </span>
                <span className="px-3 py-1 rounded-btn bg-sp-offWhite border border-sp-lightGray text-[11px] font-mono text-sp-midGray">
                  Cycle: 38 Days
                </span>
              </div>

              {/* Times New Roman Quote */}
              <blockquote className="font-times italic text-xl sm:text-2xl text-sp-ink leading-relaxed border-l-2 border-sp-ink pl-4 py-1">
                "Before Skilluence, I submitted over 140 applications online with zero interview responses. Skilluence completely rebuilt my narrative, audited my distributed systems project, and prepped me for rigorous behavioral drills. Within 38 days, I had multiple final rounds and signed with AWS."
              </blockquote>

              {/* Challenge vs Intervention Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-card bg-sp-offWhite border border-sp-lightGray/70">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-sp-midGray font-bold mb-1">
                    INITIAL BOTTLENECK
                  </div>
                  <p className="text-xs text-sp-charcoal leading-relaxed">
                    Uncalibrated resume with zero ATS keyword weighting, weak impact metrics, and passive responses in initial recruiter screening calls.
                  </p>
                </div>
                <div className="p-4 rounded-card bg-sp-offWhite border border-sp-lightGray/70">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-sp-ink font-bold mb-1">
                    SKILLUENCE INTERVENTION
                  </div>
                  <p className="text-xs text-sp-charcoal leading-relaxed">
                    Full STAR narrative alignment, distributed systems architecture project audit, and 4 mock behavioral simulation drills.
                  </p>
                </div>
              </div>

              {/* Deliverables checklist */}
              <div className="space-y-2 pt-1 font-mono text-xs text-sp-charcoal">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-sp-ink shrink-0" />
                  <span>ATS score increased from 48/100 to 96/100 parser validation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-sp-ink shrink-0" />
                  <span>3 corporate interviews secured within first 3 weeks of active search</span>
                </div>
              </div>

            </div>

            {/* Bottom Link to Full Testimonial Hub */}
            <div className="pt-8 mt-6 border-t border-sp-lightGray flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-sp-midGray">
                Documented case study. Published with candidate consent.
              </div>
              <Link
                to="/testimonials"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-btn bg-sp-ink text-sp-white hover:bg-sp-charcoal text-xs font-mono font-bold uppercase tracking-wider transition-all"
              >
                <span>Browse All 12 Profiles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
