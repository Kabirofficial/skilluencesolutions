import { useState, useRef, useEffect } from 'react';
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
import ServiceVisual from './ServiceVisuals';

export default function ServicesStory() {
  const [activeServiceId, setActiveServiceId] = useState(servicesData[0].id);
  const [expandedModal, setExpandedModal] = useState(null);
  const scrollContainerRef = useRef(null);

  // Lock body scroll when modal is open and restore on close
  useEffect(() => {
    if (expandedModal) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [expandedModal]);

  // Support closing modal with Escape key
  useEffect(() => {
    if (!expandedModal) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setExpandedModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [expandedModal]);

  const serviceIcons = {
    'resume-cv': <FileText className="w-4 h-4 text-[#142F23]" />,
    'linkedin-opt': <UserCheck className="w-4 h-4 text-[#142F23]" />,
    'application-support': <Send className="w-4 h-4 text-[#142F23]" />,
    'interview-prep': <MessageSquare className="w-4 h-4 text-[#142F23]" />,
    'career-guidance': <Compass className="w-4 h-4 text-[#142F23]" />,
    'job-search': <Target className="w-4 h-4 text-[#142F23]" />,
    'profile-building': <Sparkles className="w-4 h-4 text-[#142F23]" />,
    'personal-branding': <Award className="w-4 h-4 text-[#142F23]" />
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
      className="relative min-h-[85svh] w-full bg-[#FAF7F2] text-[#1F2421] py-20 sm:py-28 lg:py-32 flex flex-col justify-center border-b border-[#E8E2D8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#E8E2D8] bg-[#FBF9F5] text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#142F23] mb-6">
              <span className="w-1.5 h-1.5 bg-[#C36B4E]" />
              <span>Modular Career Suite</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#142F23] leading-[1.12]">
              Modular Career Support.
            </h2>
            <p className="text-base sm:text-lg text-[#556059] mt-4 max-w-xl font-light leading-relaxed">
              Targeted, transparent interventions for the practical milestones that govern hiring decisions.
            </p>
          </div>

          {/* Desktop Carousel Navigation */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={scrollLeft}
              className="p-3 border border-[#E8E2D8] hover:border-[#142F23] bg-white hover:bg-[#FAF7F2] text-[#142F23] transition-colors"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={scrollRight}
              className="p-3 border border-[#E8E2D8] hover:border-[#142F23] bg-white hover:bg-[#FAF7F2] text-[#142F23] transition-colors"
              aria-label="Next service"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Desktop Horizontal Scroll Track & Panels */}
        <div
          ref={scrollContainerRef}
          className="flex flex-col lg:flex-row pb-6 space-y-4 lg:space-y-0 lg:gap-6 lg:overflow-x-auto lg:snap-x lg:snap-mandatory hide-scrollbar"
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
                className={`lg:snap-start shrink-0 w-full lg:w-[320px] p-7 sm:p-8 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#142F23] shadow-sm'
                    : 'bg-white border-[#E8E2D8] hover:border-[#142F23]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E8E2D8]">
                    <span className="font-serif text-2xl sm:text-3xl font-light text-[#142F23]">
                      {service.number}
                    </span>
                    <div className="w-8 h-8 border border-[#E8E2D8] bg-[#FAF7F2] flex items-center justify-center">
                      {serviceIcons[service.id]}
                    </div>
                  </div>

                  <h3 className="text-xl font-serif font-normal tracking-tight text-[#142F23] mb-3 leading-snug">
                    {service.title}
                  </h3>

                  {/* 2.5D Service Visual Composition */}
                  <ServiceVisual id={service.id} />

                  <p className="text-xs sm:text-sm text-[#556059] leading-relaxed mb-6 font-light">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8E2D8] flex items-center justify-between text-xs font-sans text-[#1F2421]">
                  <span className="font-medium uppercase tracking-wider text-[11px]">View Details</span>
                  <Plus className="w-4 h-4 text-[#C36B4E]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Service Details Modal / Flyout for Full Deliverables */}
        <AnimatePresence>
          {expandedModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#142F23]/60 backdrop-blur-xs overflow-y-auto"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setExpandedModal(null);
                }
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: 15 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white border border-[#E8E2D8] p-8 sm:p-10 shadow-xl my-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between border-b border-[#E8E2D8] pb-4 mb-6">
                  <div className="flex items-center gap-2 font-sans text-xs text-[#556059] uppercase tracking-wider">
                    <span className="text-[#C36B4E] font-semibold">Service {expandedModal.number}</span>
                    <span>•</span>
                    <span>Specification</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setExpandedModal(null)}
                    className="text-xs font-sans text-[#556059] hover:text-[#142F23] uppercase tracking-widest"
                  >
                    [Close]
                  </button>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#142F23] tracking-tight mb-4">
                  {expandedModal.title}
                </h3>

                {/* Modal Visual */}
                <div className="mb-6">
                  <ServiceVisual id={expandedModal.id} inModal={true} />
                </div>

                <p className="text-sm text-[#556059] leading-relaxed mb-6 font-light">
                  {expandedModal.shortDesc}
                </p>

                <div className="mb-8">
                  <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#142F23] block mb-3">
                    Deliverables & Standards
                  </span>
                  <div className="space-y-2.5">
                    {expandedModal.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#1F2421] font-light">
                        <Check className="w-4 h-4 text-[#142F23] mt-0.5 shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#E8E2D8] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs font-sans text-[#556059]">
                    Target: <strong className="text-[#142F23] font-medium">{expandedModal.targetRole}</strong>
                  </span>
                  <a
                    href="#contact"
                    onClick={() => setExpandedModal(null)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#C36B4E] hover:bg-[#A8553B] text-white font-medium text-xs font-sans uppercase tracking-wider transition-colors"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
