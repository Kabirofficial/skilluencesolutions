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
  Check, 
  ChevronRight 
} from 'lucide-react';
import { journeyStages } from '../data/siteData';

const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];

export default function CareerJourney() {
  const [activeStageId, setActiveStageId] = useState('resume');

  const activeIndex = journeyStages.findIndex(s => s.id === activeStageId);
  const activeStage = journeyStages[activeIndex] || journeyStages[2];

  const getStageIcon = (id, isActive) => {
    const className = `w-4 h-4 transition-colors ${isActive ? 'text-[#FBF9F5]' : 'text-[#546B5F]'}`;
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
      className="relative w-full bg-[#142F23] text-[#FBF9F5] py-24 sm:py-32 border-b border-[#0E2118]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18 space-y-3">
          <div className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#C36B4E] font-semibold">
            <span>Milestone Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#FBF9F5] leading-[1.12]">
            From Academic Ambiguity{' '}
            <span className="block mt-1 font-serif italic text-[#C36B4E]">
              to Executive Appointment.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#FBF9F5]/75 leading-relaxed font-normal pt-1">
            A structured sequential methodology transforming academic credentials into verified commercial authority. Inspect each developmental milestone below.
          </p>
        </div>

        {/* Milestone Stepper Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-0 border border-[#FBF9F5]/15 bg-[#0E2118] mb-12 divide-y sm:divide-y-0 sm:divide-x divide-[#FBF9F5]/15">
          {journeyStages.map((stage, idx) => {
            const isActive = stage.id === activeStageId;
            const isPassed = idx < activeIndex;

            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveStageId(stage.id)}
                className={`p-4 sm:p-5 text-left transition-all duration-200 flex flex-col justify-between cursor-pointer relative ${
                  isActive
                    ? 'bg-[#142F23]'
                    : 'bg-[#0E2118] hover:bg-[#142F23]/60'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#C36B4E]" />
                )}

                <div className="flex items-center justify-between mb-3">
                  <div className="w-7 h-7 rounded-sm bg-[#0E2118] border border-[#FBF9F5]/15 flex items-center justify-center">
                    {getStageIcon(stage.id, isActive)}
                  </div>
                  <span className={`text-[11px] font-serif italic ${isActive ? 'text-[#C36B4E] font-bold' : 'text-[#546B5F]'}`}>
                    {romanNumerals[idx] || idx + 1}
                  </span>
                </div>

                <div>
                  <div className={`text-xs font-sans uppercase tracking-[0.1em] ${isActive ? 'text-[#FBF9F5] font-semibold' : 'text-[#FBF9F5]/70'}`}>
                    {stage.label}
                  </div>
                  <div className="text-[10px] text-[#546B5F] mt-0.5 truncate hidden sm:block">
                    {stage.subtitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Milestone Detail Spread */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-12 rounded-sm bg-[#FBF9F5] text-[#1F2421] border border-[#E8E2D8] shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              {/* Left Column: Stage Focus & Controls */}
              <div className="lg:col-span-5 space-y-6">
                <div className="text-[11px] font-sans uppercase tracking-[0.18em] text-[#C36B4E] font-semibold">
                  Milestone {romanNumerals[activeIndex] || activeIndex + 1} of VII • {activeStage.subtitle}
                </div>

                <h3 className="text-2xl sm:text-4xl font-serif font-normal text-[#142F23] tracking-tight leading-snug">
                  {activeStage.label}
                </h3>

                <div className="p-5 rounded-sm bg-[#F4EFEA] border-l-2 border-[#C36B4E]">
                  <span className="text-[10px] font-sans uppercase tracking-[0.16em] text-[#546B5F] block mb-1 font-semibold">
                    Strategic Objective
                  </span>
                  <p className="text-sm text-[#1F2421] font-normal leading-relaxed">
                    {activeStage.focus}
                  </p>
                </div>

                {/* Stepper Buttons */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    type="button"
                    disabled={activeIndex === 0}
                    onClick={prevStage}
                    className="px-4 py-2.5 rounded-sm border border-[#E8E2D8] hover:border-[#142F23] disabled:opacity-30 disabled:cursor-not-allowed text-xs font-sans uppercase tracking-[0.12em] text-[#1F2421] transition-colors cursor-pointer"
                  >
                    Previous Milestone
                  </button>
                  <button
                    type="button"
                    disabled={activeIndex === journeyStages.length - 1}
                    onClick={nextStage}
                    className="px-5 py-2.5 rounded-sm bg-[#142F23] hover:bg-[#1B3E2F] text-[#FBF9F5] disabled:opacity-30 disabled:cursor-not-allowed text-xs font-sans uppercase tracking-[0.12em] font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Advance Milestone</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#C36B4E]" />
                  </button>
                </div>
              </div>

              {/* Right Column: Practical Actions & Verification Checklist */}
              <div className="lg:col-span-7 space-y-7">
                
                {/* Practical Actions */}
                <div>
                  <h4 className="text-xs font-sans uppercase tracking-[0.16em] font-semibold text-[#142F23] mb-3">
                    Execution Protocols
                  </h4>
                  <div className="space-y-2.5">
                    {activeStage.actions.map((act, aIdx) => (
                      <div
                        key={aIdx}
                        className="p-3.5 rounded-sm bg-[#FFFFFF] border border-[#E8E2D8] flex items-start gap-3"
                      >
                        <span className="text-xs font-serif italic text-[#C36B4E] font-bold mt-0.5">
                          {romanNumerals[aIdx] || aIdx + 1}.
                        </span>
                        <span className="text-xs sm:text-sm text-[#5E6963] leading-relaxed font-normal">
                          {act}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stage Checklist */}
                <div>
                  <h4 className="text-xs font-sans uppercase tracking-[0.16em] font-semibold text-[#142F23] mb-3">
                    Readiness Verification Milestones
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeStage.checklist.map((chk, cIdx) => (
                      <div
                        key={cIdx}
                        className="p-3 rounded-sm bg-[#F4EFEA] border border-[#E8E2D8] flex items-center gap-2.5 text-xs text-[#1F2421]"
                      >
                        <Check className="w-3.5 h-3.5 text-[#142F23] shrink-0" />
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
