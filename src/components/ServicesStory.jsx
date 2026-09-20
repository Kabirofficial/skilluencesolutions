import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Check, 
  FileText,
  UserCheck,
  Send,
  MessageSquare,
  Compass,
  Target,
  Sparkles,
  Award
} from 'lucide-react';
import { servicesData } from '../data/siteData';

export default function ServicesStory() {
  const [activeServiceId, setActiveServiceId] = useState(servicesData[0].id);
  const [expandedModal, setExpandedModal] = useState(null);
  const scrollContainerRef = useRef(null);

  const activeService = servicesData.find(s => s.id === activeServiceId) || servicesData[0];

  const serviceIcons = {
    'resume-cv': <FileText className="w-5 h-5 text-sp-ink" />,
    'linkedin-opt': <UserCheck className="w-5 h-5 text-sp-ink" />,
    'application-support': <Send className="w-5 h-5 text-sp-ink" />,
    'interview-prep': <MessageSquare className="w-5 h-5 text-sp-ink" />,
    'career-guidance': <Compass className="w-5 h-5 text-sp-ink" />,
    'job-search': <Target className="w-5 h-5 text-sp-ink" />,
    'profile-building': <Sparkles className="w-5 h-5 text-sp-ink" />,
    'personal-branding': <Award className="w-5 h-5 text-sp-ink" />
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      className="relative min-h-[100svh] w-full bg-sp-white text-sp-ink py-20 sm:py-28 lg:py-32 flex flex-col justify-center border-b border-sp-lightGray overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-offWhite border border-sp-lightGray text-[11px] font-mono uppercase tracking-widest text-sp-charcoal mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
              <span>PRACTICAL SERVICES / 04</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-sp-ink leading-tight">
              Modular Career Support.
            </h2>
            <p className="text-base sm:text-lg text-sp-midGray mt-3 max-w-xl font-normal">
              Targeted, transparent interventions for the practical milestones that govern hiring decisions.
            </p>
          </div>

          {/* Desktop Carousel Navigation */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={scrollLeft}
              className="p-3 rounded-btn border border-sp-lightGray hover:border-sp-ink bg-sp-white hover:bg-sp-offWhite text-sp-ink transition-colors"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={scrollRight}
              className="p-3 rounded-btn border border-sp-lightGray hover:border-sp-ink bg-sp-white hover:bg-sp-offWhite text-sp-ink transition-colors"
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop Horizontal Scroll Track & Panels */}
        <div
          ref={scrollContainerRef}
          className="flex lg:overflow-x-auto pb-6 space-x-5 sm:space-x-6 scrollbar-none snap-x snap-mandatory flex-col lg:flex-row lg:space-y-0 space-y-4"
        >
          {servicesData.map((service, idx) => {
            const isSelected = activeServiceId === service.id;
            return (
              <div
                key={service.id}
                onClick={() => {
                  setActiveServiceId(service.id);
                  setExpandedModal(service);
                }}
                className={`snap-start shrink-0 w-full lg:w-[320px] p-6 sm:p-8 rounded-card border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-sp-offWhite border-sp-ink shadow-md'
                    : 'bg-sp-white border-sp-lightGray hover:border-sp-gray hover:bg-sp-offWhite/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-sp-lightGray">
                    <span className="font-mono text-2xl sm:text-3xl font-black text-sp-ink">
                      {service.number}
                    </span>
                    <div className="w-9 h-9 rounded border border-sp-lightGray bg-sp-white flex items-center justify-center">
                      {serviceIcons[service.id]}
                    </div>
                  </div>

                  <h3 className="text-xl font-black tracking-tight text-sp-ink uppercase mb-3 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-sp-midGray leading-relaxed mb-6 font-normal">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-sp-lightGray flex items-center justify-between text-xs font-mono text-sp-charcoal">
                  <span className="font-bold">VIEW DETAILS</span>
                  <Plus className="w-4 h-4 text-sp-ink" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Service Details Modal / Flyout for Full Deliverables */}
        <AnimatePresence>
          {expandedModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-sp-ink/60 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-xl bg-sp-white rounded-card border border-sp-ink p-8 sm:p-10 shadow-2xl"
              >
                <div className="flex items-center justify-between border-b border-sp-lightGray pb-4 mb-6">
                  <div className="flex items-center gap-2 font-mono text-xs text-sp-midGray font-bold uppercase">
                    <span>SERVICE {expandedModal.number}</span>
                    <span>•</span>
                    <span>MODULE SPECIFICATION</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setExpandedModal(null)}
                    className="p-1 rounded text-sp-charcoal hover:text-sp-ink text-sm font-mono font-bold"
                  >
                    [CLOSE]
                  </button>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-sp-ink uppercase tracking-tight mb-3">
                  {expandedModal.title}
                </h3>
                <p className="text-sm text-sp-charcoal leading-relaxed mb-6">
                  {expandedModal.shortDesc}
                </p>

                <div className="mb-6">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-sp-midGray block mb-3">
                    Deliverables & Standards
                  </span>
                  <div className="space-y-2.5">
                    {expandedModal.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-3 text-xs sm:text-sm text-sp-ink">
                        <Check className="w-4 h-4 text-sp-ink mt-0.5 shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-sp-lightGray flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] font-mono text-sp-midGray">
                    Target: {expandedModal.targetRole}
                  </span>
                  <a
                    href="#contact"
                    onClick={() => setExpandedModal(null)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-btn bg-sp-ink text-sp-white font-bold text-xs"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
