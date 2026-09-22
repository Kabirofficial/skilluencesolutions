import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';

export default function PricingPage() {
  return (
    <div className="w-full bg-[#FAF7F2] text-[#1F2421] pt-28 sm:pt-36">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-b border-[#E8E2D8]">
        <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#556059] mb-6 font-medium">
          <Link to="/" className="hover:text-[#142F23] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#142F23] font-semibold">Pricing</span>
        </div>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#E8E2D8] bg-[#FBF9F5] text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#142F23] mb-6">
            <span className="w-1.5 h-1.5 bg-[#C36B4E]" />
            <span>Transparent Fee Schedule</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-normal tracking-tight text-[#142F23] leading-[1.12]">
            Clear Pricing. <br />
            <span className="italic font-serif text-[#C36B4E]">
              Aligned with candidate success.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#556059] mt-6 max-w-2xl leading-relaxed font-light">
            Transparent, milestone-based fee structures designed with total clarity. No hidden subscriptions or vague retainer loops—just honest support and aligned incentives.
          </p>
        </div>
      </section>

      {/* Main Pricing Section */}
      <PricingSection />

      {/* Pricing & Policy FAQ Accordion */}
      <FAQSection />

      {/* Conversion Banner */}
      <section className="py-24 bg-[#142F23] text-[#FBF9F5] border-t border-[#142F23] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 bg-white/5 text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#E8E2D8]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C36B4E]" />
            <span>Confidential & Verified Advisory</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal tracking-tight text-white">
            Ready to review your enrollment?
          </h2>
          <p className="text-base text-[#E8E2D8]/80 max-w-xl mx-auto font-light leading-relaxed">
            Contact our advisory desk directly at <span className="text-white font-sans font-medium underline decoration-[#C36B4E]">manager@skilluencesolutions.com</span> to discuss your profile and timeline.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C36B4E] hover:bg-[#A8553B] text-white font-medium text-xs font-sans uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
