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
  CheckSquare,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { journeyStages } from '../data/siteData';

export default function CareerJourney() {
  const [activeStageId, setActiveStageId] = useState('resume');

  const activeStage = journeyStages.find(s => s.id === activeStageId) || journeyStages[2];

  const getStageIcon = (id, isActive) => {
    const className = `w-5 h-5 transition-colors ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'}`;
    switch (id) {
      case 'education': return <GraduationCap className={className} />;
      case 'profile': return <UserCheck className={className} />;
      case 'resume': return <FileText className={className} />;
      case 'job-search': return <Compass className={className} />;
      case 'applications': return <Send className={className} />;
      case 'interview': return <MessageSquareCode className={className} />;
      case 'career': return <Award className={className} />;
      default: return <Sparkles className={className} />;
    }
  };

  return (
    <section id="journey" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Lighting */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-violet-600/10 blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Interactive Roadmap
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            From uncertain to job-ready.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Click through each milestone below to see how we systematically bridge the gap from degree completion to strategic job readiness.
          </p>
        </div>

        {/* Interactive Node Path Navigation */}
        <div className="mb-12">
          {/* Desktop Node Stepper */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-6 left-8 right-8 h-0.5 bg-slate-800 -z-0" />

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 md:gap-2 relative z-10">
              {journeyStages.map((stage, idx) => {
                const isActive = stage.id === activeStageId;
                return (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => setActiveStageId(stage.id)}
                    className="flex flex-col items-center text-center group focus:outline-none p-2 rounded-2xl transition-all"
                  >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 relative ${
                      isActive 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/50 scale-110 ring-4 ring-blue-500/20' 
                        : 'bg-slate-900 border border-slate-700/80 hover:border-slate-500'
                    }`}>
                      {getStageIcon(stage.id, isActive)}
                      
                      {/* Mini Step Number */}
                      <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-slate-800 border border-slate-700 text-[9px] font-mono font-bold flex items-center justify-center text-slate-300">
                        {idx + 1}
                      </span>
                    </div>

                    <div className="mt-2.5">
                      <span className={`text-[11px] font-bold tracking-wider block uppercase transition-colors ${
                        isActive ? 'text-blue-400' : 'text-slate-400 group-hover:text-slate-200'
                      }`}>
                        {stage.label}
                      </span>
                      <span className="text-[9px] text-slate-500 hidden sm:block">
                        {stage.subtitle}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Selected Node Details Display Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-slate-900/90 border border-slate-800 p-8 sm:p-10 shadow-2xl backdrop-blur-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Stage Info & Focus */}
              <div className="lg:col-span-5">
                <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-blue-400 uppercase tracking-widest mb-3">
                  <span>STAGE {activeStage.stepNumber}</span>
                  <span>•</span>
                  <span>{activeStage.subtitle}</span>
                </div>
                
                <h3 className="text-3xl font-black text-white mb-4 tracking-tight">
                  {activeStage.label}
                </h3>
                
                <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/70 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Core Objective:
                  </span>
                  <p className="text-sm text-slate-200 leading-relaxed font-medium">
                    {activeStage.focus}
                  </p>
                </div>

                <div className="text-[11px] text-slate-400 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 italic">
                  * Actionable preparation that replaces guesswork with strategic habits.
                </div>
              </div>

              {/* Right Column: Actions & Practical Checklist */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Practical Actions */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    Practical Actions We Implement
                  </h4>
                  <div className="space-y-2.5">
                    {activeStage.actions.map((act, aIdx) => (
                      <div 
                        key={aIdx}
                        className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/50 flex items-start gap-3"
                      >
                        <span className="text-xs font-mono font-bold text-blue-400 mt-0.5">
                          0{aIdx + 1}
                        </span>
                        <span className="text-xs text-slate-200 leading-relaxed">
                          {act}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Milestone Checklist */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-1.5">
                    <CheckSquare className="w-4 h-4" />
                    Stage Readiness Checklist
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeStage.checklist.map((chk, cIdx) => (
                      <div 
                        key={cIdx}
                        className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-2.5 text-xs text-slate-300"
                      >
                        <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></span>
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
