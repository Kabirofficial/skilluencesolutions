import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section
      className="relative w-full bg-[#FBF9F5] text-[#1F2421] py-28 sm:py-36 flex flex-col justify-center text-center border-b border-[#E8E2D8] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-8">
        
        {/* Kicker */}
        <div className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#C36B4E] font-semibold">
          <span>Private Advisory Engagement</span>
        </div>

        {/* Master Editorial Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-[68px] font-serif font-normal tracking-tight text-[#142F23] leading-[1.08]">
          Your next career appointment<br />
          <span className="font-serif italic text-[#C36B4E]">
            begins with a confidential conversation.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-[#5E6963] max-w-2xl mx-auto leading-relaxed font-normal">
          Move beyond anonymous automated portals and generic applications. Partner with dedicated senior advisors who calibrate your narrative, audit your commercial systems defense, and position you for decisive rounds.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-sm bg-[#142F23] hover:bg-[#1B3E2F] text-[#FBF9F5] font-sans uppercase tracking-[0.14em] font-semibold text-xs transition-colors duration-200"
          >
            <span>Request Private Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C36B4E]" />
          </Link>

          <Link
            to="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm border border-[#E8E2D8] hover:border-[#142F23] bg-transparent text-[#142F23] font-sans uppercase tracking-[0.14em] font-semibold text-xs transition-colors duration-200"
          >
            <span>Inspect All Capabilities</span>
          </Link>
        </div>

        <div className="pt-6 text-xs font-sans text-[#546B5F] uppercase tracking-[0.14em] font-medium">
          Individual Mentorship • Fiduciary Alignment • Verified US Placements
        </div>

      </div>
    </section>
  );
}
