import { Link } from 'react-router-dom';
import { Quote, MapPin, ArrowRight, Users, CheckCircle2 } from 'lucide-react';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import CandidateMarquee from '../components/CandidateMarquee';
import { indianTestimonials, siteConfig } from '../data/siteData';

export default function TestimonialsPage() {
  return (
    <div className="w-full bg-sp-white text-sp-ink pt-28 sm:pt-36">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 border-b border-sp-lightGray">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sp-midGray mb-4">
          <Link to="/" className="hover:text-sp-ink transition-colors">Home</Link>
          <span>/</span>
          <span className="text-sp-ink font-bold">Testimonials</span>
        </div>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-offWhite border border-sp-lightGray text-[11px] font-mono uppercase tracking-widest text-sp-charcoal mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
            <span>VERIFIED PLACEMENT STORIES</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-sp-ink leading-[1.08]">
            Candidate Voices.<br />
            <span className="font-times italic font-normal text-sp-charcoal">
              Real Indian graduates thriving across the USA.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-sp-midGray mt-4 max-w-2xl leading-relaxed">
            From Silicon Valley and Seattle to Wall Street and Austin, read how international graduates and early-career starters turned ATS rejections into decisive job offers.
          </p>
        </div>
      </section>

      {/* Featured Interactive Carousel with Real-Time Randomizer */}
      <TestimonialsCarousel />

      {/* Enterprise Marquee */}
      <CandidateMarquee />

      {/* Complete Candidate Directory Grid (All 12 Profiles) */}
      <section className="py-20 sm:py-28 bg-sp-white border-b border-sp-lightGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-offWhite border border-sp-lightGray text-[11px] font-mono uppercase tracking-widest text-sp-charcoal mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
              <span>COMPREHENSIVE DIRECTORY • 12 CANDIDATES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-sp-ink">
              All Verified Experiences
            </h2>
            <p className="text-sm sm:text-base text-sp-midGray mt-2">
              Browse candidate feedback across tech, analytics, cybersecurity, finance, and engineering sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {indianTestimonials.map((item) => (
              <div
                key={item.id}
                className="p-6 sm:p-8 rounded-card bg-sp-offWhite border border-sp-lightGray hover:border-sp-ink hover:bg-sp-white transition-all flex flex-col justify-between shadow-sm group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Quote className="w-6 h-6 text-sp-lightGray group-hover:text-sp-charcoal transition-colors" />
                    <div className="flex items-center gap-1 text-[11px] font-mono text-sp-midGray">
                      <MapPin className="w-3 h-3 text-sp-charcoal" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <p className="font-times text-base sm:text-lg text-sp-ink italic leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-sp-lightGray">
                  <h3 className="font-black text-sm uppercase tracking-tight text-sp-ink">
                    {item.name}
                  </h3>
                  <div className="text-xs font-mono text-sp-midGray mt-0.5">
                    {item.role}
                  </div>
                  <div className="text-xs font-times italic text-sp-charcoal font-bold mt-1">
                    {item.degree}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Candidate Milestone Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-sp-offWhite p-6 sm:p-10 rounded-card border border-sp-lightGray">
          <div className="lg:col-span-6 rounded-card overflow-hidden border border-sp-lightGray shadow-lg bg-sp-ink group">
            <img
              src="/images/career_offer_success.jpg"
              alt="Candidate Career Milestone & Offer Acceptance"
              width="800"
              height="450"
              className="w-full h-[320px] sm:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="lg:col-span-6 space-y-4 lg:pl-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-white border border-sp-lightGray text-[11px] font-mono uppercase tracking-widest text-sp-charcoal">
              <CheckCircle2 className="w-3.5 h-3.5 text-sp-ink" />
              <span>THE FINAL MILESTONE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-sp-ink tracking-tight">
              From Capstone Projects to Verified Offer Letters.
            </h2>
            <p className="text-sm sm:text-base text-sp-midGray leading-relaxed font-normal">
              Every candidate review on this page represents real hours of STAR mock preparation, technical portfolio alignment, and persistent recruiter follow-ups. Our success is measured solely by candidate offer readiness.
            </p>
            <div className="pt-2 flex items-center gap-6 font-mono text-xs text-sp-charcoal">
              <div>
                <div className="text-2xl font-black text-sp-ink">94.2%</div>
                <div className="text-[11px] text-sp-midGray">Program Completion Rate</div>
              </div>
              <div className="h-8 w-px bg-sp-lightGray" />
              <div>
                <div className="text-2xl font-black text-sp-ink">48 Days</div>
                <div className="text-[11px] text-sp-midGray">Median Time to First Round</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-20 bg-sp-offWhite text-center border-t border-sp-lightGray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-sp-ink">
            Write your own success story.
          </h2>
          <p className="text-base text-sp-midGray max-w-xl mx-auto">
            Connect with our team to optimize your profile and begin structured recruiter outreach.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-btn bg-sp-ink text-sp-white font-bold text-xs font-mono uppercase tracking-wider hover:bg-sp-charcoal transition-all shadow-sm"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
