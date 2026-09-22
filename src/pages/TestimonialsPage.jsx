import { Link } from 'react-router-dom';
import { Quote, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import CandidateMarquee from '../components/CandidateMarquee';
import { indianTestimonials } from '../data/siteData';

export default function TestimonialsPage() {
  return (
    <div className="w-full bg-[#FAF7F2] text-[#1F2421] pt-28 sm:pt-36">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-b border-[#E8E2D8]">
        <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#556059] mb-6 font-medium">
          <Link to="/" className="hover:text-[#142F23] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#142F23] font-semibold">Testimonials</span>
        </div>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#E8E2D8] bg-[#FBF9F5] text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#142F23] mb-6">
            <span className="w-1.5 h-1.5 bg-[#C36B4E]" />
            <span>Verified Placement Records</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-normal tracking-tight text-[#142F23] leading-[1.12]">
            Candidate Voices. <br />
            <span className="italic font-serif text-[#C36B4E]">
              Real international graduates thriving across the USA.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#556059] mt-6 max-w-2xl leading-relaxed font-light">
            From Silicon Valley and Seattle to Wall Street and Austin, read how international graduates and early-career starters turned ATS rejections into decisive job offers.
          </p>
        </div>
      </section>

      {/* Featured Interactive Carousel */}
      <TestimonialsCarousel />

      {/* Enterprise Marquee */}
      <CandidateMarquee />

      {/* Complete Candidate Directory Grid */}
      <section className="py-24 sm:py-32 bg-[#FAF7F2] border-b border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#E8E2D8] bg-[#FBF9F5] text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#142F23] mb-6">
              <span className="w-1.5 h-1.5 bg-[#C36B4E]" />
              <span>Comprehensive Candidate Directory</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal tracking-tight text-[#142F23]">
              Verified Candidate Experiences
            </h2>
            <p className="text-base text-[#556059] mt-4 font-light leading-relaxed">
              Browse candidate reflections across software engineering, data analytics, cloud systems, and financial technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {indianTestimonials.map((item) => (
              <div
                key={item.id}
                className="p-8 bg-white border border-[#E8E2D8] hover:border-[#142F23] transition-colors duration-300 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)] group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#E8E2D8] pb-4">
                    <Quote className="w-6 h-6 text-[#C36B4E]" />
                    <div className="flex items-center gap-1.5 text-xs font-sans text-[#556059]">
                      <MapPin className="w-3.5 h-3.5 text-[#142F23]" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <p className="font-serif text-lg text-[#142F23] italic leading-relaxed pt-2">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-6 mt-8 border-t border-[#E8E2D8]">
                  <h3 className="font-serif font-normal text-base text-[#142F23]">
                    {item.name}
                  </h3>
                  <div className="text-xs font-sans font-medium text-[#C36B4E] mt-1">
                    {item.role}
                  </div>
                  <div className="text-xs font-sans text-[#556059] mt-0.5 font-light">
                    {item.degree}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Candidate Milestone Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 sm:p-14 border border-[#E8E2D8] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <div className="lg:col-span-6 border border-[#E8E2D8] bg-[#142F23] overflow-hidden group">
            <img
              src="/images/career_offer_success.jpg"
              alt="Candidate Career Milestone & Offer Acceptance"
              width="800"
              height="450"
              loading="lazy"
              decoding="async"
              className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
            />
          </div>
          <div className="lg:col-span-6 space-y-6 lg:pl-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#E8E2D8] bg-[#FAF7F2] text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#142F23]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C36B4E]" />
              <span>Institutional Standard</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#142F23] tracking-tight leading-[1.15]">
              From Academic Rigor to Verified Executive Placement.
            </h2>
            <p className="text-base text-[#556059] leading-relaxed font-light">
              Every candidate review on this page represents dedicated hours of STAR behavioral defense, technical architecture translation, and strategic talent desk introductions. Our success is verified by candidate appointments.
            </p>
            <div className="pt-4 flex items-center gap-10 text-[#1F2421]">
              <div>
                <div className="text-3xl font-serif font-normal text-[#142F23]">94.2%</div>
                <div className="text-xs font-sans text-[#556059] uppercase tracking-wider mt-1 font-medium">Program Completion Rate</div>
              </div>
              <div className="h-10 w-px bg-[#E8E2D8]" />
              <div>
                <div className="text-3xl font-serif font-normal text-[#142F23]">48 Days</div>
                <div className="text-xs font-sans text-[#556059] uppercase tracking-wider mt-1 font-medium">Median Time to First Round</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-24 bg-[#142F23] text-[#FBF9F5] text-center border-t border-[#142F23]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 bg-white/5 text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#E8E2D8]">
            <span className="w-1.5 h-1.5 bg-[#C36B4E]" />
            <span>Consultation Available</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal tracking-tight text-white">
            Begin Your Career Transformation.
          </h2>
          <p className="text-base text-[#E8E2D8]/80 max-w-xl mx-auto font-light leading-relaxed">
            Engage with our senior advisory desk to evaluate your positioning and begin structured career representation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C36B4E] hover:bg-[#A8553B] text-white font-medium text-xs font-sans uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Schedule Advisory Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
