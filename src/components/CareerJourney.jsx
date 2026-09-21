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
  ChevronRight
} from 'lucide-react';
import { journeyStages } from '../data/siteData';

export default function CareerJourney() {
  const [activeStageId, setActiveStageId] = useState('resume');

  const activeIndex = journeyStages.findIndex(s => s.id === activeStageId);
  const activeStage = journeyStages[activeIndex] || journeyStages[2];

  const getStageIcon = (id, isActive) => {
    const className = `w-4 h-4 sm:w-5 sm:h-5 transition-colors ${isActive ? 'text-sp-ink font-bold' : 'text-sp-lightGray'}`;
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

  const nextStage = () => {
    if (activeIndex < journeyStages.length - 1) {
      setActiveStageId(journeyStages[activeIndex + 1].id);
    }
  };

  const prevStage = () => {
    if (activeIndex > 0) {
      setActiveStageId(journeyStages[activeIndex - 1].id);
    }
  };

  return (
    <section
      id="journey"
      className="relative min-h-[100svh] w-full bg-sp-ink text-sp-white py-20 sm:py-28 lg:py-32 flex flex-col justify-center border-b border-sp-charcoal overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-charcoal border border-sp-midGray/40 text-[11px] font-mono uppercase tracking-widest text-sp-lightGray mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sp-white" />
            <span>SIGNATURE ROADMAP / 06</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-sp-white leading-tight mb-4">
            From uncertain<br />
            <span className="font-times italic font-normal text-sp-lightGray">
              to job-ready.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-sp-gray leading-relaxed font-normal max-w-xl">
            A dynamic 2.5D path from graduation ambiguity to structured commercial readiness. Navigate the sequential nodes below to inspect each stage standard.
          </p>
        </div>

        {/* 2.5D Monochromatic Node Path with Progressive Animated Path Drawing */}
        <div className="relative mb-12 sm:mb-16">
          
          {/* Animated Connecting Path for Desktop */}
          <div className="hidden md:block absolute top-7 left-10 right-10 h-0.5 z-0">
            {/* Background dashed track */}
            <div className="w-full h-full border-t border-dashed border-sp-midGray/50" />
            
            {/* Dynamic Animated Drawn Path */}
            <motion.div
              className="absolute top-0 left-0 h-0.5 bg-sp-white shadow-[0_0_8px_rgba(255,255,255,0.4)]"
              initial={{ width: 0 }}
              animate={{ width: `${(activeIndex / (journeyStages.length - 1)) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>

          {/* Node Stepper Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-4 relative z-10">
            {journeyStages.map((stage, idx) => {
              const isActive = stage.id === activeStageId;
              const isPassed = idx < activeIndex;

              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveStageId(stage.id)}
                  className={`flex flex-col items-center text-center group focus:outline-none p-2 rounded-card transition-all ${
                    idx === journeyStages.length - 1 ? 'col-span-2 sm:col-span-1' : ''
                  }`}
                  aria-pressed={isActive}
                >
                  <motion.div
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    animate={{
                      scale: isActive ? 1.12 : 1,
                      z: isActive ? 16 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 240, damping: 18 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-btn flex items-center justify-center transition-all duration-300 relative ${
                      isActive
                        ? 'bg-sp-white border-2 border-sp-white text-sp-ink shadow-[0_0_30px_rgba(255,255,255,0.45)] ring-4 ring-sp-white/20'
                        : isPassed
                          ? 'bg-sp-charcoal border border-sp-lightGray text-sp-white hover:border-sp-white'
                          : 'bg-sp-charcoal/90 border border-sp-midGray/40 text-sp-gray hover:border-sp-lightGray'
                    }`}
                  >
                    {getStageIcon(stage.id, isActive)}
                    
                    {/* Stage Counter Badge with High Contrast */}
                    <span className={`absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full text-[9px] font-mono font-bold flex items-center justify-center ${
                      isActive 
                        ? 'bg-sp-ink text-sp-white font-black border border-sp-white shadow-md' 
                        : isPassed
                          ? 'bg-sp-lightGray text-sp-ink font-bold'
                          : 'bg-sp-charcoal text-sp-gray border border-sp-midGray/50'
                    }`}>
                      0{idx + 1}
                    </span>
                  </motion.div>

                  <div className="mt-3">
                    <span
                      className={`text-[11px] font-mono font-bold tracking-wider block uppercase transition-colors ${
                        isActive ? 'text-sp-white font-extrabold underline decoration-sp-white decoration-2 underline-offset-4' : isPassed ? 'text-sp-lightGray' : 'text-sp-gray group-hover:text-sp-lightGray'
                      }`}
                    >
                      {stage.label}
                    </span>
                    <span className={`text-[10px] hidden sm:block ${isActive ? 'text-sp-white font-medium drop-shadow-xs' : 'text-sp-midGray'}`}>
                      {stage.subtitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Node Details Display Panel (2.5D Depth Box) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-card bg-sp-charcoal/90 border border-sp-midGray/40 p-5 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-md"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Stage Focus & Navigation Controls */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-sp-lightGray uppercase tracking-widest">
                  <span>STAGE {activeStage.stepNumber} OF 07</span>
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

                {/* Stage Stepper Buttons */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    type="button"
                    disabled={activeIndex === 0}
                    onClick={prevStage}
                    className="px-4 py-2 rounded-btn border border-sp-midGray/40 hover:border-sp-white disabled:opacity-40 disabled:cursor-not-allowed text-xs font-mono font-bold text-sp-lightGray transition-all"
                  >
                    Previous Node
                  </button>
                  <button
                    type="button"
                    disabled={activeIndex === journeyStages.length - 1}
                    onClick={nextStage}
                    className="px-4 py-2 rounded-btn bg-sp-white hover:bg-sp-offWhite text-sp-ink disabled:opacity-40 disabled:cursor-not-allowed text-xs font-mono font-bold transition-all flex items-center gap-1"
                  >
                    <span>Advance Stage</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Key Actions & Readiness Checklist */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Practical Actions */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-sp-lightGray mb-3">
                    PRACTICAL EXECUTION STANDARDS
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
                    READINESS VERIFICATION CHECKLIST
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
