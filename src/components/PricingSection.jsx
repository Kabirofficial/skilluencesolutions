import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { pricingMarketingPlan } from '../data/siteData';

const romanStages = ['Phase I', 'Phase II', 'Phase III'];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative min-h-[85svh] w-full bg-[#FAF7F2] text-[#1F2421] py-20 sm:py-28 lg:py-32 flex flex-col justify-center border-b border-[#E8E2D8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Document Header Block */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#E8E2D8] bg-[#FBF9F5] text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#142F23] mb-6">
            <span className="w-1.5 h-1.5 bg-[#C36B4E]" />
            <span>Transparent Fee Schedule</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#142F23] leading-[1.12]">
            {pricingMarketingPlan.header}
          </h2>

          <div className="mt-3 font-sans text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#C36B4E]">
            {pricingMarketingPlan.subHeader}
          </div>

          <p className="mt-3 text-base sm:text-lg font-serif italic text-[#556059] font-normal">
            "{pricingMarketingPlan.tagline}"
          </p>

          <div className="mt-8 p-6 bg-white border border-[#E8E2D8] max-w-2xl mx-auto text-left shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-semibold text-[#142F23] block mb-1.5">
              {pricingMarketingPlan.introTitle}
            </span>
            <p className="text-xs sm:text-sm text-[#556059] leading-relaxed font-light">
              {pricingMarketingPlan.introDescription}
            </p>
          </div>
        </div>

        {/* 3 Structured Pricing Stages (01, 02, 03) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {pricingMarketingPlan.stages.map((stage, idx) => (
            <motion.div
              key={stage.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`p-7 sm:p-9 border transition-all duration-300 flex flex-col justify-between ${
                idx === 0
                  ? 'bg-white border-[#142F23] shadow-sm'
                  : 'bg-white border-[#E8E2D8] hover:border-[#142F23]'
              }`}
            >
              <div>
                {/* Stage Header */}
                <div className="flex items-center justify-between border-b border-[#E8E2D8] pb-4 mb-6">
                  <span className="text-xs font-serif italic text-[#142F23] font-medium text-base">
                    {romanStages[idx] || stage.step}
                  </span>
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-semibold text-[#C36B4E]">
                    {stage.badge}
                  </span>
                </div>

                {/* Amount */}
                <div className="mb-6">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#142F23]">
                    {stage.price}
                  </div>
                  <h3 className="text-base sm:text-lg font-serif font-normal text-[#142F23] tracking-tight mt-2">
                    {stage.title}
                  </h3>
                </div>

                {/* Deliverables */}
                <div className="space-y-3 pt-6 border-t border-[#E8E2D8]">
                  {stage.items.map((item, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#556059] font-light leading-snug">
                      <Check className="w-4 h-4 text-[#142F23] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-8 border-t border-[#E8E2D8] text-[11px] font-sans text-[#556059] flex items-center justify-between">
                <span className="uppercase tracking-widest text-[10px]">Schedule 0{idx + 1} of 03</span>
                <span className="text-[#142F23] font-semibold uppercase text-[10px] tracking-wider">Fixed Milestone</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2 Bottom Cards: SUCCESS FEE & MARKETING SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
          {/* Success Fee Card (Col-Span 5) */}
          <div className="md:col-span-5 p-7 sm:p-9 bg-[#142F23] text-[#FBF9F5] border border-[#142F23] flex flex-col justify-between shadow-sm">
            <div>
              <div className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#E8E2D8]/70 font-semibold mb-3">
                Placement Incentive
              </div>
              <h4 className="text-lg sm:text-xl font-serif font-normal text-white tracking-tight mb-2">
                {pricingMarketingPlan.successFee.title}
              </h4>
              <div className="text-2xl sm:text-3xl font-serif font-normal text-[#C36B4E] mt-2 mb-3">
                {pricingMarketingPlan.successFee.amount}
              </div>
              <p className="text-xs sm:text-sm text-[#E8E2D8]/80 leading-relaxed font-light">
                {pricingMarketingPlan.successFee.note}.
              </p>
            </div>

            <div className="pt-6 mt-8 border-t border-white/15 text-[10px] font-sans uppercase tracking-widest text-[#E8E2D8]/70">
              Contingent on formal employment offer acceptance
            </div>
          </div>

          {/* Marketing Services Card (Col-Span 7) */}
          <div className="md:col-span-7 p-7 sm:p-9 bg-white border border-[#E8E2D8] flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <div>
              <div className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C36B4E] font-semibold mb-3">
                Comprehensive Promotion
              </div>
              <h4 className="text-lg sm:text-xl font-serif font-normal text-[#142F23] tracking-tight mb-4">
                {pricingMarketingPlan.marketingServices.title}
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pricingMarketingPlan.marketingServices.items.map((mItem, mIdx) => (
                  <div key={mIdx} className="flex items-center gap-2.5 text-xs text-[#556059] font-light">
                    <span className="w-1.5 h-1.5 bg-[#142F23] shrink-0" />
                    <span>{mItem}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-8 border-t border-[#E8E2D8] text-[10px] font-sans uppercase tracking-widest text-[#556059]">
              Executive positioning & employer advocacy suite
            </div>
          </div>
        </div>

        {/* Why Choose Our Approach */}
        <div className="p-7 sm:p-10 lg:p-12 bg-white border border-[#E8E2D8] mb-12 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <h4 className="text-base sm:text-lg font-serif font-normal text-[#142F23] mb-8 text-center">
            Principles Governing Our Fee Architecture
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingMarketingPlan.whyChooseApproach.map((item) => (
              <div key={item.step} className="space-y-2 border-t border-[#E8E2D8] pt-4">
                <span className="font-serif text-sm text-[#C36B4E] block">
                  {item.step}
                </span>
                <h5 className="text-sm font-serif font-normal text-[#142F23]">
                  {item.title}
                </h5>
                <p className="text-xs text-[#556059] leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notice Disclaimer */}
        <div className="p-5 bg-[#FAF7F2] border border-[#E8E2D8] text-xs text-[#556059] leading-relaxed mb-12 font-light">
          <span className="font-semibold text-[#142F23] font-sans uppercase tracking-wider text-[10px] mr-1.5">
            Fiduciary Commitment:
          </span>
          {pricingMarketingPlan.pdfNotice}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#C36B4E] hover:bg-[#A8553B] text-white font-medium text-xs font-sans uppercase tracking-wider transition-colors shadow-sm"
          >
            <span>Inquire About Program Enrollment</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
