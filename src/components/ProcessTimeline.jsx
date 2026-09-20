import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Wrench, 
  Target, 
  Send, 
  Sparkles, 
  TrendingUp, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { processSteps } from '../data/siteData';

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [
    <Search key="1" className="w-5 h-5" />,
    <Wrench key="2" className="w-5 h-5" />,
    <Target key="3" className="w-5 h-5" />,
    <Send key="4" className="w-5 h-5" />,
    <Sparkles key="5" className="w-5 h-5" />,
    <TrendingUp key="6" className="w-5 h-5" />
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-[#25283D] text-[#FAF8F2] relative overflow-hidden border-b border-[#68705A]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D96C4A]/15 border border-[#D96C4A]/30 text-[#D96C4A] text-xs font-bold uppercase tracking-wider mb-4 font-mono">
            Unified Animation System
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#FAF8F2] mb-3">
            A simple process. A clearer path.
          </h2>
          <p className="text-xs sm:text-base text-[#F3EFE6] leading-relaxed">
            Follow the glowing trajectory from initial discovery to continuous refinement and career fulfillment.
          </p>
        </div>

        {/* Desktop Interactive Stepper Grid with Glowing Traveling #D96C4A Line */}
        <div className="hidden lg:block mb-12">
          {/* Top Connecting Track */}
          <div className="relative mb-10">
            {/* Base track */}
            <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-[#1C1E2E] -translate-y-1/2 z-0 rounded-full border border-[#68705A]/50" />
            
            {/* Glowing Traveling Line */}
            <motion.div 
              className="absolute top-1/2 left-0 h-1.5 bg-gradient-to-r from-[#D96C4A] via-[#E88B6E] to-[#D96C4A] shadow-[0_0_15px_#D96C4A] -translate-y-1/2 z-0 rounded-full transition-all duration-500"
              style={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
            />

            <div className="grid grid-cols-6 gap-4 relative z-10">
              {processSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                const isPast = activeStep > idx;

                return (
                  <button
                    key={step.step}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className="flex flex-col items-center group focus:outline-none"
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 relative ${
                      isActive 
                        ? 'bg-[#D96C4A] text-[#25283D] shadow-xl shadow-[#D96C4A]/40 scale-110 ring-4 ring-[#D96C4A]/30'
                        : isPast 
                          ? 'bg-[#68705A] text-[#FAF8F2] border border-[#D96C4A]/40' 
                          : 'bg-[#1C1E2E] text-[#A8B09A] border border-[#68705A] hover:border-[#D96C4A]'
                    }`}>
                      {stepIcons[idx]}
                    </div>

                    <div className="mt-3 text-center">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#D96C4A] block">
                        STAGE {step.step}
                      </span>
                      <span className={`text-xs font-bold transition-colors ${
                        isActive ? 'text-[#FAF8F2]' : 'text-[#F3EFE6] group-hover:text-[#FAF8F2]'
                      }`}>
                        {step.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Highlight Box */}
          <div className="p-8 rounded-3xl bg-[#1C1E2E] border border-[#68705A] shadow-2xl flex items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-[#D96C4A] uppercase tracking-widest mb-2">
                <span>PHASE {processSteps[activeStep].step}</span>
                <span>•</span>
                <span>{processSteps[activeStep].short}</span>
              </div>
              <h3 className="text-2xl font-black text-[#FAF8F2] mb-2">
                {processSteps[activeStep].title}: {processSteps[activeStep].short}
              </h3>
              <p className="text-[#F3EFE6] text-sm leading-relaxed mb-4">
                {processSteps[activeStep].description}
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#FAF8F2] bg-[#25283D] px-4 py-2.5 rounded-xl border border-[#68705A] w-fit font-mono">
                <CheckCircle2 className="w-4 h-4 text-[#D96C4A]" />
                <span>{processSteps[activeStep].action}</span>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <button
                type="button"
                disabled={activeStep === 0}
                onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                className="px-5 py-2.5 rounded-xl bg-[#25283D] hover:bg-[#68705A] disabled:opacity-40 disabled:cursor-not-allowed text-xs font-bold text-[#F3EFE6] transition-colors"
              >
                Previous
              </button>
              <button
                type="button"
                disabled={activeStep === processSteps.length - 1}
                onClick={() => setActiveStep(prev => Math.min(processSteps.length - 1, prev + 1))}
                className="px-5 py-2.5 rounded-xl bg-[#D96C4A] hover:bg-[#A95245] disabled:opacity-40 disabled:cursor-not-allowed text-[#25283D] text-xs font-black transition-colors flex items-center gap-1 shadow-lg shadow-[#D96C4A]/25"
              >
                <span>Next Stage</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Stepper with Glowing Connector */}
        <div className="lg:hidden space-y-4">
          {processSteps.map((step, idx) => (
            <div
              key={step.step}
              onClick={() => setActiveStep(idx)}
              className={`p-5 rounded-2xl border transition-all ${
                activeStep === idx
                  ? 'bg-[#1C1E2E] border-[#D96C4A] shadow-lg shadow-[#D96C4A]/10'
                  : 'bg-[#25283D] border-[#68705A]'
              }`}
            >
              <div className="flex items-center gap-3 mb-2.5">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                  activeStep === idx ? 'bg-[#D96C4A] text-[#25283D]' : 'bg-[#1C1E2E] text-[#A8B09A]'
                }`}>
                  {stepIcons[idx]}
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#D96C4A] font-bold">
                    STAGE {step.step}
                  </div>
                  <h4 className="text-base font-bold text-[#FAF8F2]">
                    {step.title}
                  </h4>
                </div>
              </div>

              <p className="text-xs text-[#F3EFE6] leading-relaxed mb-3">
                {step.description}
              </p>

              <div className="text-[11px] text-[#FAF8F2] bg-[#1C1E2E] p-2.5 rounded-lg border border-[#68705A]/60 flex items-center gap-2 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D96C4A] shrink-0" />
                <span>{step.action}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
