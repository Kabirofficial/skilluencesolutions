import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '../data/siteData';

export default function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [openIndex, setOpenIndex] = useState(0);

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
      className="relative w-full bg-[#FBF9F5] text-[#1F2421] py-24 sm:py-32 border-b border-[#E8E2D8]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-16 space-y-3">
          <div className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#C36B4E] font-semibold">
            <span>Inquiries & Advisory Clarity</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#142F23] leading-[1.1]">
            Frequently Addressed Inquiries.
          </h2>
          <p className="text-base sm:text-lg text-[#5E6963] mt-3 max-w-2xl font-normal leading-relaxed">
            Transparent, candid answers regarding our career representation protocols, OPT/CPT/H-1B navigation, employer partnerships, and fee model.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-6 border-b border-[#E8E2D8] pb-4">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setOpenIndex(0);
                  }}
                  className={`px-3.5 py-1.5 text-xs font-sans uppercase tracking-[0.12em] transition-colors cursor-pointer rounded-sm ${
                    isActive
                      ? 'bg-[#142F23] text-[#FBF9F5] font-semibold'
                      : 'text-[#5E6963] hover:text-[#142F23] hover:bg-[#F4EFEA]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Minimalist Accordion List */}
        <div className="divide-y divide-[#E8E2D8] border-y border-[#E8E2D8]">
          {filteredItems.map((faq, index) => {
            const isOpen = openIndex === index;
            const isGuarantee = faq.question.toLowerCase().includes('guarantee');
            const panelId = `faq-panel-${selectedCategory.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${index}`;

            return (
              <div key={`${selectedCategory}-${index}`} className="py-2 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full py-5 flex items-center justify-between text-left focus:outline-none gap-6 cursor-pointer group"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-sans uppercase tracking-[0.14em] text-[#546B5F] mt-1 shrink-0">
                      {index < 9 ? `0${index + 1}` : index + 1}
                    </span>
                    <div>
                      <span className="text-lg sm:text-xl font-serif font-normal text-[#142F23] group-hover:text-[#C36B4E] transition-colors block">
                        {faq.question}
                      </span>
                      {faq.category && (
                        <span className="text-[10px] font-sans uppercase tracking-[0.14em] text-[#546B5F] mt-1 block">
                          {faq.category}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="w-6 h-6 flex items-center justify-center shrink-0 text-[#142F23] group-hover:text-[#C36B4E] transition-transform duration-200">
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#C36B4E]' : ''}`} />
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
                      <div className="pl-9 pr-6 pb-6 text-sm text-[#5E6963] leading-relaxed font-normal">
                        {isGuarantee ? (
                          <div className="p-4 rounded-sm bg-[#F4EFEA] border-l-2 border-[#C36B4E] text-[#1F2421] leading-relaxed">
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
        <div className="mt-14 text-sm font-sans text-[#5E6963]">
          Have a specific inquiry regarding candidate dossiers or employer staffing?{' '}
          <a href="#contact" className="text-[#142F23] font-semibold hover:text-[#C36B4E] underline underline-offset-4">
            Connect with our advisory desk
          </a>
        </div>

      </div>
    </section>
  );
}
