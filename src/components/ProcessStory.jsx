import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { processSteps } from '../data/siteData';

export default function ProcessStory() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="process"
      className="relative min-h-[100svh] w-full bg-sp-offWhite text-sp-ink py-20 sm:py-28 lg:py-32 flex flex-col justify-center border-b border-sp-lightGray overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Editorial Heading & Progress Context */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-white border border-sp-lightGray text-[11px] font-mono uppercase tracking-widest text-sp-charcoal">
              <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
              <span>THE WORKFLOW / 05</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-sp-ink leading-tight">
              A simple process.<br />
              <span className="font-times italic font-normal text-sp-charcoal">
                A clearer path.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-sp-midGray leading-relaxed font-normal max-w-md">
              Career transitions should be systematic, not sporadic. We guide each candidate through six disciplined phases from diagnostic audit to offer readiness.
            </p>

            {/* Quick Step Indicators */}
            <div className="pt-4 flex items-center gap-2 font-mono text-xs text-sp-midGray">
              <span>ACTIVE STAGE:</span>
              <span className="font-bold text-sp-ink">
                0{activeStep + 1} / 0{processSteps.length} — {processSteps[activeStep].short}
              </span>
            </div>

            <div className="pt-2 hidden lg:block">
              <a
                href="#journey"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-sp-ink hover:underline"
              >
                <span>View Full Roadmap</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Progressive Stages with Progress Track */}
          <div className="lg:col-span-7 relative pl-6 sm:pl-8 border-l border-sp-lightGray space-y-6 sm:space-y-8">
            
            {processSteps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`relative p-6 sm:p-8 rounded-card border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-sp-white border-sp-ink shadow-xl ring-1 ring-sp-ink/10 translate-x-1 sm:translate-x-2'
                      : isPast
                        ? 'bg-sp-white/40 border-sp-lightGray opacity-50 hover:opacity-80'
                        : 'bg-sp-white/60 border-sp-lightGray opacity-70 hover:opacity-100'
                  }`}
                >
                  {/* Timeline Indicator Dot on Border */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[39px] top-8 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                      isActive
                        ? 'bg-sp-ink border-sp-white ring-4 ring-sp-ink/20 scale-125'
                        : 'bg-sp-lightGray border-sp-offWhite'
                    }`}
                  />

                  <div className="flex items-center justify-between mb-3 border-b border-sp-lightGray pb-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-sp-charcoal">
                        PHASE {step.step}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-sp-midGray">
                        • {step.short}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider font-bold ${
                        isActive ? 'text-sp-ink' : 'text-sp-gray'
                      }`}
                    >
                      {isActive ? 'CURRENT FOCUS' : `STEP ${idx + 1}`}
                    </span>
                  </div>

                  <h3
                    className={`text-xl sm:text-2xl font-black tracking-tight mb-2 transition-colors ${
                      isActive ? 'text-sp-ink' : 'text-sp-midGray'
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-4 transition-colors ${
                      isActive ? 'text-sp-charcoal font-medium' : 'text-sp-midGray'
                    }`}
                  >
                    {step.description}
                  </p>

                  <div
                    className={`p-3 rounded-btn border text-xs font-mono flex items-center gap-2 ${
                      isActive
                        ? 'bg-sp-offWhite border-sp-lightGray text-sp-ink font-semibold'
                        : 'bg-transparent border-transparent text-sp-midGray'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-sp-ink" />
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
