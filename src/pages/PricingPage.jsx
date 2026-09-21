import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';

export default function PricingPage() {
  return (
    <div className="w-full bg-sp-white text-sp-ink pt-28 sm:pt-36">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 border-b border-sp-lightGray">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sp-midGray mb-4">
          <Link to="/" className="hover:text-sp-ink transition-colors">Home</Link>
          <span>/</span>
          <span className="text-sp-ink font-bold">Pricing</span>
        </div>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-offWhite border border-sp-lightGray text-[11px] font-mono uppercase tracking-widest text-sp-charcoal mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
            <span>TRANSPARENT FEE SCHEDULE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-sp-ink leading-[1.08]">
            Clear Pricing.<br />
            <span className="font-times italic font-normal text-sp-charcoal">
              Aligned with candidate success.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-sp-midGray mt-4 max-w-2xl leading-relaxed">
            Transparent, milestone-based fee structures designed with total clarity. No hidden subscriptions or vague retainer loops—just honest support and aligned incentives.
          </p>
        </div>
      </section>

      {/* Main Pricing Section */}
      <PricingSection />

      {/* Pricing & Policy FAQ Accordion */}
      <FAQSection />

      {/* Conversion Banner */}
      <section className="py-20 bg-sp-ink text-sp-white border-t border-sp-charcoal text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-charcoal border border-sp-midGray/40 text-[11px] font-mono uppercase tracking-widest text-sp-lightGray">
            <ShieldCheck className="w-4 h-4 text-sp-white" />
            <span>CONFIDENTIAL & VERIFIED ADVISORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-sp-white">
            Ready to review your enrollment?
          </h2>
          <p className="text-base text-sp-gray max-w-xl mx-auto">
            Contact our advisory desk directly at <span className="text-sp-white font-mono">manager@skilluencesolutions.com</span> to discuss your profile and timeline.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-btn bg-sp-white text-sp-ink font-bold text-xs font-mono uppercase tracking-wider hover:bg-sp-offWhite transition-all shadow-sm"
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
