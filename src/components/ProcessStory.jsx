import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { processSteps } from '../data/siteData';

export default function ProcessStory() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="process"
      className="relative min-h-[85svh] w-full bg-[#FAF7F2] text-[#1F2421] py-20 sm:py-28 lg:py-32 flex flex-col justify-center border-b border-[#E8E2D8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Editorial Heading & Progress Context */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#E8E2D8] bg-[#FBF9F5] text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#142F23]">
              <span className="w-1.5 h-1.5 bg-[#C36B4E]" />
              <span>The Advisory Workflow</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#142F23] leading-[1.12]">
              A simple process. <br />
              <span className="italic font-serif text-[#C36B4E]">
                A clearer path.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#556059] leading-relaxed font-light max-w-md">
              Career transitions should be systematic, not sporadic. We guide each candidate through six disciplined phases from diagnostic audit to offer readiness.
            </p>

            {/* Quick Step Indicators */}
            <div className="pt-4 flex items-center gap-2 font-sans text-xs text-[#556059]">
              <span className="uppercase tracking-wider text-[10px]">Active Stage:</span>
              <span className="font-medium text-[#142F23]">
                0{activeStep + 1} / 0{processSteps.length} — {processSteps[activeStep].short}
              </span>
            </div>

            <div className="pt-2 hidden lg:block">
              <a
                href="#journey"
                className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#142F23] font-semibold hover:text-[#C36B4E] transition-colors"
              >
                <span>View Full Roadmap</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Progressive Stages with Progress Track */}
          <div className="lg:col-span-7 relative pl-6 sm:pl-8 border-l border-[#E8E2D8] space-y-6 sm:space-y-8">
            
            {processSteps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`relative p-7 sm:p-9 border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-white border-[#142F23] shadow-sm translate-x-1 sm:translate-x-2'
                      : isPast
                        ? 'bg-white/60 border-[#E8E2D8] opacity-60 hover:opacity-90'
                        : 'bg-white border-[#E8E2D8] hover:border-[#142F23]'
                  }`}
                >
                  {/* Timeline Indicator Dot on Border */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[39px] top-9 w-3.5 h-3.5 border transition-all duration-300 ${
                      isActive
                        ? 'bg-[#C36B4E] border-[#142F23] scale-125'
                        : 'bg-white border-[#E8E2D8]'
                    }`}
                  />

                  <div className="flex items-center justify-between mb-3 border-b border-[#E8E2D8] pb-3.5">
                    <div className="flex items-center gap-3">
                      <span className="font-serif text-sm font-normal text-[#142F23]">
                        Phase {step.step}
                      </span>
                      <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C36B4E] font-semibold">
                        • {step.short}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-sans uppercase tracking-widest font-semibold ${
                        isActive ? 'text-[#142F23]' : 'text-[#556059]'
                      }`}
                    >
                      {isActive ? 'Current Focus' : `Step ${idx + 1}`}
                    </span>
                  </div>

                  <h3
                    className={`text-xl sm:text-2xl font-serif font-normal tracking-tight mb-2 transition-colors ${
                      isActive ? 'text-[#142F23]' : 'text-[#556059]'
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-5 font-light transition-colors ${
                      isActive ? 'text-[#1F2421]' : 'text-[#556059]'
                    }`}
                  >
                    {step.description}
                  </p>

                  <div
                    className={`p-3 border text-xs font-sans flex items-center gap-2.5 ${
                      isActive
                        ? 'bg-[#FAF7F2] border-[#E8E2D8] text-[#142F23] font-medium'
                        : 'bg-transparent border-transparent text-[#556059]'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-[#142F23]" />
                    <span>Action: {step.action}</span>
                  </div>
                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}
