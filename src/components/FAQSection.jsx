import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Search, Sparkles } from 'lucide-react';
import { faqItems } from '../data/siteData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // open first by default
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-100">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clarifications & Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600 max-w-xl mx-auto">
            Clear, honest answers about what we do, how we work, and how we keep career preparation accessible.
          </p>

          {/* Quick Filter Search Bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. guarantee, resume, pricing)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-sm"
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-sm">
              No matching questions found. Feel free to contact our team below!
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const isGuaranteeQuestion = faq.question.toLowerCase().includes('guarantee');

              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'bg-slate-50/80 border-blue-200 shadow-md' 
                      : 'bg-white border-slate-200/90 hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <span className="flex items-center gap-3 pr-4">
                      {isGuaranteeQuestion && (
                        <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                      )}
                      <span className="text-base sm:text-lg font-bold text-slate-900">
                        {faq.question}
                      </span>
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-blue-600 text-white' : 'text-slate-500'
                    }`}>
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
                        <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                          {isGuaranteeQuestion ? (
                            <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-blue-950 font-medium">
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
            })
          )}
        </div>

        {/* Bottom Help Prompt */}
        <div className="mt-12 text-center text-xs text-slate-500">
          Have a specific question not addressed above?{' '}
          <a href="#contact" className="text-blue-600 font-bold hover:underline">
            Reach out through our consultation form
          </a>
        </div>

      </div>
    </section>
  );
}
