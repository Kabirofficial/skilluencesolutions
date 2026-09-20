import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  UserCheck, 
  FileText, 
  Compass, 
  Send, 
  MessageSquareCode, 
  Award,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { journeyStages } from '../data/siteData';

export default function CareerJourney() {
  const [activeStageId, setActiveStageId] = useState('resume');

  const activeStage = journeyStages.find(s => s.id === activeStageId) || journeyStages[2];

  const getStageIcon = (id, isActive) => {
    const className = `w-4 h-4 sm:w-5 sm:h-5 transition-colors ${isActive ? 'text-sp-white' : 'text-sp-gray'}`;
    switch (id) {
      case 'education': return <GraduationCap className={className} />;
      case 'profile': return <UserCheck className={className} />;
      case 'resume': return <FileText className={className} />;
      case 'job-search': return <Compass className={className} />;
      case 'applications': return <Send className={className} />;
      case 'interview': return <MessageSquareCode className={className} />;
      case 'career': return <Award className={className} />;
      default: return <FileText className={className} />;
    }
  };

  return (
    <section
      id="journey"
      className="relative min-h-[100svh] w-full bg-sp-ink text-sp-white py-20 sm:py-28 lg:py-32 flex flex-col justify-center border-b border-sp-charcoal overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-charcoal border border-sp-midGray/40 text-[11px] font-mono uppercase tracking-widest text-sp-lightGray mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sp-white" />
            <span>SIGNATURE ARCHITECTURE / 06</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-sp-white leading-tight mb-4">
            From uncertain<br />
            <span className="font-serif italic font-normal text-sp-lightGray">
              to job-ready.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-sp-gray leading-relaxed font-normal max-w-xl">
            A 2.5D connected path from graduation ambiguity to structured readiness. Select any node to inspect the underlying mechanical standards.
          </p>
        </div>

        {/* 2.5D Monochromatic Node Path */}
        <div className="relative mb-12 sm:mb-16">
          {/* Subtle connecting path line for desktop */}
          <div className="hidden md:block absolute top-7 left-8 right-8 h-[1px] bg-sp-charcoal z-0" />

          {/* Node Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-4 relative z-10">
            {journeyStages.map((stage, idx) => {
              const isActive = stage.id === activeStageId;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveStageId(stage.id)}
                  className="flex flex-col items-center text-center group focus:outline-none p-2 rounded-card transition-all"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-btn flex items-center justify-center transition-all duration-300 relative ${
                      isActive
                        ? 'bg-sp-white text-sp-ink shadow-2xl ring-2 ring-sp-white'
                        : 'bg-sp-charcoal border border-sp-midGray/40 hover:border-sp-lightGray'
                    }`}
                  >
                    {getStageIcon(stage.id, isActive)}
                    
                    {/* Tiny Step Number */}
                    <span className={`absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full text-[9px] font-mono font-bold flex items-center justify-center ${
                      isActive ? 'bg-sp-ink text-sp-white' : 'bg-sp-charcoal text-sp-gray border border-sp-midGray/50'
                    }`}>
                      0{idx + 1}
                    </span>
                  </motion.div>

                  <div className="mt-3">
                    <span
                      className={`text-[11px] font-mono font-bold tracking-wider block uppercase transition-colors ${
                        isActive ? 'text-sp-white' : 'text-sp-gray group-hover:text-sp-lightGray'
                      }`}
                    >
                      {stage.label}
                    </span>
                    <span className="text-[10px] text-sp-midGray hidden sm:block">
                      {stage.subtitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Node Details Display Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-card bg-sp-charcoal/90 border border-sp-midGray/40 p-6 sm:p-10 shadow-2xl backdrop-blur-md"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Stage Focus & Core Objective */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-sp-lightGray uppercase tracking-widest">
                  <span>STAGE {activeStage.stepNumber}</span>
                  <span>•</span>
                  <span>{activeStage.subtitle}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-black text-sp-white tracking-tight uppercase">
                  {activeStage.label}
                </h3>

                <div className="p-4 rounded-btn bg-sp-ink/80 border border-sp-midGray/30">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-sp-gray block mb-1">
                    PRIMARY DELIVERABLE
                  </span>
                  <p className="text-sm text-sp-white font-medium leading-relaxed">
                    {activeStage.focus}
                  </p>
                </div>

                <p className="text-xs text-sp-gray font-mono">
                  * Systematic preparation replacing speculative applications with demonstrable standards.
                </p>
              </div>

              {/* Right Column: Key Actions & Checklist */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Tactical Actions */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-sp-lightGray mb-3 flex items-center gap-2">
                    <span>PRACTICAL IMPLEMENTATION</span>
                  </h4>
                  <div className="space-y-2">
                    {activeStage.actions.map((act, aIdx) => (
                      <div
                        key={aIdx}
                        className="p-3.5 rounded-btn bg-sp-ink/50 border border-sp-midGray/30 flex items-start gap-3"
                      >
                        <span className="text-xs font-mono font-bold text-sp-lightGray mt-0.5">
                          0{aIdx + 1}
                        </span>
                        <span className="text-xs sm:text-sm text-sp-lightGray leading-relaxed">
                          {act}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stage Checklist */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-sp-lightGray mb-3">
                    READINESS VERIFICATION
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeStage.checklist.map((chk, cIdx) => (
                      <div
                        key={cIdx}
                        className="p-3 rounded-btn bg-sp-ink border border-sp-midGray/40 flex items-center gap-2.5 text-xs text-sp-gray"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-sp-white shrink-0" />
                        <span>{chk}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
