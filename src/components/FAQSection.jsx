import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { faqItems } from '../data/siteData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative min-h-[100svh] w-full bg-sp-offWhite text-sp-ink py-20 sm:py-28 lg:py-32 flex flex-col justify-center border-b border-sp-lightGray overflow-hidden select-none"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-white border border-sp-lightGray text-[11px] font-mono uppercase tracking-widest text-sp-charcoal mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
            <span>CLARITY & TRANSPARENCY / 10</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-sp-ink leading-tight">
            Frequently Asked Questions.
          </h2>
          <p className="text-base sm:text-lg text-sp-midGray mt-4 max-w-xl mx-auto font-normal">
            Direct, unfiltered answers regarding our services, mentorship scope, and operational ethics.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqItems.map((faq, index) => {
            const isOpen = openIndex === index;
            const isGuarantee = faq.question.toLowerCase().includes('guarantee');

            return (
              <div
                key={index}
                className={`rounded-card border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-sp-white border-sp-ink shadow-md ring-1 ring-sp-ink/10'
                    : 'bg-sp-white/70 border-sp-lightGray hover:border-sp-gray hover:bg-sp-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="flex items-center gap-3 pr-4">
                    <span className="font-mono text-xs font-bold text-sp-midGray">
                      0{index + 1}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-sp-ink tracking-tight">
                      {faq.question}
                    </span>
                  </span>
                  <div
                    className={`w-7 h-7 rounded-btn border border-sp-lightGray flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-sp-ink text-sp-white border-sp-ink' : 'bg-sp-white text-sp-charcoal'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-sp-charcoal leading-relaxed border-t border-sp-lightGray/60">
                        {isGuarantee ? (
                          <div className="p-4 rounded-btn bg-sp-offWhite border border-sp-lightGray font-medium text-sp-ink">
                            {faq.answer}
                          </div>
                        ) : (
                          <p>{faq.answer}</p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Prompt */}
        <div className="mt-12 text-center text-xs font-mono text-sp-midGray">
          Have a question not covered above?{' '}
          <a href="#contact" className="text-sp-ink font-bold hover:underline underline-offset-4">
            Direct your inquiry to our advisory desk
          </a>
        </div>

      </div>
    </section>
  );
}
