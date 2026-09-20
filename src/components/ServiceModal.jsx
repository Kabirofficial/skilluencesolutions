import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, Sparkles, Target, Users } from 'lucide-react';

export default function ServiceModal({ service, isOpen, onClose, onSelectService }) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1C1E2E]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#1C1E2E] rounded-3xl shadow-2xl border border-[#68705A] overflow-hidden z-10 my-8"
        >
          {/* Modal Header */}
          <div className="bg-[#25283D] text-[#FAF8F2] p-6 sm:p-8 relative border-b border-[#68705A]/70">
            <button
              type="button"
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full text-[#F3EFE6] hover:text-[#FAF8F2] hover:bg-[#68705A]/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D96C4A]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-[#D96C4A] text-xs font-mono font-bold tracking-wider mb-2">
              <span>SERVICE {service.number}</span>
              <span>•</span>
              <span>PRACTICAL MODULE</span>
            </div>

            <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#FAF8F2]">
              {service.title}
            </h3>
            <p className="mt-2 text-sm text-[#F3EFE6] leading-relaxed max-w-lg">
              {service.shortDesc}
            </p>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto text-[#FAF8F2]">
            {/* What it covers */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D96C4A] mb-3 flex items-center gap-1.5 font-mono">
                <Sparkles className="w-4 h-4 text-[#D96C4A]" />
                What We Cover Together
              </h4>
              <ul className="space-y-2.5">
                {service.coverage.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#F3EFE6]">
                    <CheckCircle2 className="w-4 h-4 text-[#D96C4A] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who is it for */}
            <div className="p-4 rounded-2xl bg-[#25283D] border border-[#68705A]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#A8B09A] mb-2 flex items-center gap-1.5 font-mono">
                <Users className="w-4 h-4 text-[#D96C4A]" />
                Ideal Candidate Profile
              </h4>
              <p className="text-sm text-[#FAF8F2] leading-relaxed">
                {service.targetAudience}
              </p>
            </div>

            {/* Expected Focus Areas */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#A8B09A] mb-2 flex items-center gap-1.5 font-mono">
                <Target className="w-4 h-4 text-[#D96C4A]" />
                Core Focus Elements
              </h4>
              <div className="p-3 bg-[#25283D] rounded-xl border border-[#68705A] text-xs font-medium text-[#D96C4A] font-mono">
                {service.focusAreas}
              </div>
            </div>

            {/* Non-Guarantee Reminder */}
            <div className="text-[11px] text-[#A8B09A] italic bg-[#25283D]/60 p-3 rounded-lg border border-[#68705A]/40">
              * Note: All sessions are dedicated to candidate competency, profile clarity, and strategy. Skilluence does not guarantee job offers or placements.
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="p-6 bg-[#25283D] border-t border-[#68705A]/70 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-[#A8B09A] hover:text-[#FAF8F2] transition-colors"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onSelectService(service.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#D96C4A] hover:bg-[#A95245] text-[#25283D] text-xs font-black shadow-lg shadow-[#D96C4A]/25 transition-all"
            >
              <span>Enquire About This Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
