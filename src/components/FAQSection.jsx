import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '../data/siteData';

export default function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [openIndex, setOpenIndex] = useState(0);

  // Extract unique categories
  const categories = ["ALL", ...Array.from(new Set(faqItems.map((item) => item.category || "General")))];

  const filteredItems = selectedCategory === "ALL"
    ? faqItems
    : faqItems.filter((item) => item.category === selectedCategory);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative min-h-[100svh] w-full bg-sp-offWhite text-sp-ink py-20 sm:py-28 lg:py-32 flex flex-col justify-center border-b border-sp-lightGray overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-white border border-sp-lightGray text-[11px] font-mono uppercase tracking-widest text-sp-charcoal mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
            <span>CLARITY & TRANSPARENCY / 10</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-sp-ink leading-tight uppercase">
            Frequently Asked Questions.
          </h2>
          <p className="text-base sm:text-lg text-sp-midGray mt-4 max-w-2xl mx-auto font-normal">
            Direct, authoritative answers regarding our career placement methodology, OPT/CPT/H1B support, employer solutions, and fee structure.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-8">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setOpenIndex(0);
                  }}
                  className={`px-3.5 py-1.5 rounded-btn text-xs font-mono uppercase tracking-wider transition-all ${
                    isActive
                      ? 'bg-sp-ink text-sp-white shadow-sm font-bold'
                      : 'bg-sp-white text-sp-charcoal border border-sp-lightGray hover:border-sp-ink font-medium'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredItems.map((faq, index) => {
            const isOpen = openIndex === index;
            const isGuarantee = faq.question.toLowerCase().includes('guarantee');
            const panelId = `faq-panel-${selectedCategory.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${index}`;

            return (
              <div
                key={`${selectedCategory}-${index}`}
                className={`rounded-card border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-sp-white border-sp-ink shadow-md ring-1 ring-sp-ink/10'
                    : 'bg-sp-white/75 border-sp-lightGray hover:border-sp-gray hover:bg-sp-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none gap-4"
                >
                  <div className="flex items-start gap-3.5 pr-2">
                    <span className="font-mono text-xs font-bold text-sp-midGray shrink-0 mt-0.5">
                      {index < 9 ? `0${index + 1}` : index + 1}
                    </span>
                    <div>
                      <span className="text-sm sm:text-base font-bold text-sp-ink tracking-tight block">
                        {faq.question}
                      </span>
                      {faq.category && (
                        <span className="text-[10px] font-mono uppercase tracking-wider text-sp-midGray mt-0.5 block">
                          {faq.category}
                        </span>
                      )}
                    </div>
                  </div>
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
                      id={panelId}
                      role="region"
                      aria-labelledby={panelId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-sp-charcoal leading-relaxed border-t border-sp-lightGray/60 font-normal">
                        {isGuarantee ? (
                          <div className="p-4 rounded-btn bg-sp-offWhite border border-sp-lightGray font-medium text-sp-ink leading-relaxed">
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
          Have an inquiry regarding specific candidate profiles or enterprise hiring?{' '}
          <a href="#contact" className="text-sp-ink font-bold hover:underline underline-offset-4">
            Connect with our advisory desk
          </a>
        </div>

      </div>
    </section>
  );
}

