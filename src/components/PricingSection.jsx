import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { pricingMarketingPlan } from '../data/siteData';

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative min-h-[100svh] w-full bg-sp-white text-sp-ink py-20 sm:py-28 lg:py-32 flex flex-col justify-center border-b border-sp-lightGray overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* PDF Document Header Block */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-offWhite border border-sp-lightGray text-[11px] font-mono uppercase tracking-widest text-sp-charcoal mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
            <span>TRANSPARENT FEE SCHEDULE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-sp-ink uppercase leading-tight">
            {pricingMarketingPlan.header}
          </h2>

          <div className="mt-3 font-mono text-xs sm:text-sm font-bold tracking-widest uppercase text-sp-charcoal">
            {pricingMarketingPlan.subHeader}
          </div>

          <p className="mt-2 text-base sm:text-lg font-times italic text-sp-charcoal font-medium">
            "{pricingMarketingPlan.tagline}"
          </p>

          <div className="mt-6 p-4 rounded-card bg-sp-offWhite border border-sp-lightGray max-w-2xl mx-auto text-left">
            <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-sp-ink block mb-1">
              {pricingMarketingPlan.introTitle}
            </span>
            <p className="text-xs sm:text-sm text-sp-midGray leading-relaxed font-normal">
              {pricingMarketingPlan.introDescription}
            </p>
          </div>
        </div>

        {/* 3 Structured Pricing Stages (01, 02, 03) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {pricingMarketingPlan.stages.map((stage, idx) => (
            <motion.div
              key={stage.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`p-6 sm:p-8 rounded-card border transition-all duration-300 flex flex-col justify-between ${
                idx === 0
                  ? 'bg-sp-white border-sp-ink shadow-lg ring-1 ring-sp-ink/10'
                  : 'bg-sp-offWhite border-sp-lightGray hover:border-sp-gray'
              }`}
            >
              <div>
                {/* Stage Header */}
                <div className="flex items-center justify-between border-b border-sp-lightGray pb-4 mb-6">
                  <div className="w-10 h-10 rounded-btn bg-sp-ink text-sp-white flex items-center justify-center font-mono font-black text-sm">
                    {stage.step}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-sp-midGray">
                    {stage.badge}
                  </span>
                </div>

                {/* Amount */}
                <div className="mb-4">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono text-sp-ink">
                    {stage.price}
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-sp-charcoal uppercase tracking-tight mt-2">
                    {stage.title}
                  </h3>
                </div>

                {/* Deliverables */}
                <div className="space-y-3 pt-4 border-t border-sp-lightGray">
                  {stage.items.map((item, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-sp-charcoal">
                      <Check className="w-4 h-4 text-sp-ink mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-sp-lightGray/80 text-[11px] font-mono text-sp-midGray flex items-center justify-between">
                <span>STAGE 0{idx + 1} OF 03</span>
                <span className="text-sp-ink font-bold uppercase">Scheduled Fee</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2 Bottom Cards: SUCCESS FEE & MARKETING SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
          {/* Success Fee Card (Col-Span 5) */}
          <div className="md:col-span-5 p-6 sm:p-8 rounded-card bg-sp-ink text-sp-white border border-sp-charcoal flex flex-col justify-between shadow-md">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-sp-lightGray font-bold mb-2">
                PLACEMENT INCENTIVE
              </div>
              <h4 className="text-lg sm:text-xl font-black text-sp-white uppercase tracking-tight mb-2">
                {pricingMarketingPlan.successFee.title}
              </h4>
              <div className="text-2xl sm:text-3xl font-black font-mono text-sp-white mt-1 mb-2">
                {pricingMarketingPlan.successFee.amount}
              </div>
              <p className="text-xs text-sp-gray leading-relaxed font-normal">
                {pricingMarketingPlan.successFee.note}.
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-sp-charcoal text-[10px] font-mono text-sp-lightGray">
              Contingent on successful offer acceptance
            </div>
          </div>

          {/* Marketing Services Card (Col-Span 7) */}
          <div className="md:col-span-7 p-6 sm:p-8 rounded-card bg-sp-offWhite border border-sp-lightGray flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-sp-midGray font-bold mb-2">
                COMPREHENSIVE PROMOTION
              </div>
              <h4 className="text-lg sm:text-xl font-black text-sp-ink uppercase tracking-tight mb-4">
                {pricingMarketingPlan.marketingServices.title}
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {pricingMarketingPlan.marketingServices.items.map((mItem, mIdx) => (
                  <div key={mIdx} className="flex items-center gap-2 text-xs text-sp-charcoal font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-sp-ink shrink-0" />
                    <span>{mItem}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-sp-lightGray text-[10px] font-mono text-sp-midGray">
              Professional positioning & recruiter outreach suite
            </div>
          </div>
        </div>

        {/* Why Choose Our Approach (4 Pillars from Page 2 of PDF) */}
        <div className="p-5 sm:p-8 lg:p-10 rounded-card bg-sp-offWhite border border-sp-lightGray mb-10">
          <h4 className="text-base sm:text-lg font-black text-sp-ink uppercase tracking-wider mb-6 text-center">
            WHY CHOOSE OUR APPROACH?
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingMarketingPlan.whyChooseApproach.map((item) => (
              <div key={item.step} className="space-y-1.5">
                <span className="font-mono text-xs font-bold text-sp-midGray">
                  {item.step}
                </span>
                <h5 className="text-xs sm:text-sm font-black text-sp-ink uppercase">
                  {item.title}
                </h5>
                <p className="text-xs text-sp-midGray leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notice Disclaimer from PDF */}
        <div className="p-4 rounded-btn bg-sp-white border border-sp-lightGray text-xs text-sp-midGray leading-relaxed mb-10">
          <span className="font-bold text-sp-ink font-mono uppercase mr-1">
            Official PDF Policy:
          </span>
          {pricingMarketingPlan.pdfNotice}
        </div>

        {/* Action Button: Ready to Take the Next Step? */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-btn bg-sp-ink hover:bg-sp-charcoal text-sp-white font-bold text-sm transition-all shadow-sm active:scale-[0.98]"
          >
            <span>Ready to Take the Next Step? Inquire About This Program</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
