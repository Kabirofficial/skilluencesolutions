import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, FileQuestion, UserMinus, Layers } from 'lucide-react';
import { problemStatement } from '../data/siteData';

// Monochromatic Editorial Visual 01: Unfinished Resume / Drafting Ambiguity
function UnfinishedResumeVisual() {
  return (
    <div className="p-4 sm:p-5 rounded-btn bg-sp-offWhite border border-sp-lightGray relative overflow-hidden font-mono text-[10px]">
      {/* Background architectural grid */}
      <div 
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #E4D5BF 1px, transparent 1px), linear-gradient(to bottom, #E4D5BF 1px, transparent 1px)',
          backgroundSize: '16px 16px'
        }}
      />
      
      {/* Miniature Document Wireframe */}
      <div className="relative z-10 bg-sp-white rounded-card border border-sp-lightGray p-3.5 shadow-sm space-y-2.5 max-w-sm mx-auto">
        {/* Document Header with Redaction / Drafting Marks */}
        <div className="flex items-center justify-between border-b border-sp-lightGray pb-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-sp-gray animate-ping" />
            <div className="h-2 w-24 bg-sp-charcoal rounded-full" />
          </div>
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-sp-offWhite border border-sp-lightGray text-sp-midGray font-bold">
            DRAFT • V1.0
          </span>
        </div>

        {/* Incomplete Headline with Blinking Cursor */}
        <div className="space-y-1">
          <div className="text-[9px] text-sp-midGray font-bold uppercase tracking-wider">
            OBJECTIVE / POSITIONING
          </div>
          <div className="h-4 px-2 rounded bg-sp-offWhite border border-dashed border-sp-midGray/60 flex items-center justify-between text-sp-midGray">
            <span className="text-[9px] text-sp-charcoal">Seeking Entry Level Role...</span>
            <span className="w-1.5 h-3 bg-sp-ink animate-pulse" />
          </div>
        </div>

        {/* Redacted / Scattered Experience Lines */}
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center justify-between text-[9px] text-sp-midGray">
            <span>EXPERIENCE MAPPING</span>
            <span className="text-sp-ink font-bold">[UNSTRUCTURED]</span>
          </div>
          <div className="h-1.5 w-full bg-sp-lightGray rounded-full" />
          <div className="h-1.5 w-4/5 bg-sp-lightGray/70 rounded-full" />
          <div className="h-1.5 w-3/5 bg-sp-lightGray/50 rounded-full" />
        </div>

        {/* Readiness Meter */}
        <div className="pt-2 border-t border-sp-lightGray flex items-center justify-between text-[9px]">
          <span className="text-sp-midGray uppercase">ATS Readiness Score</span>
          <span className="font-bold text-sp-ink bg-sp-offWhite px-2 py-0.5 rounded border border-sp-lightGray">
            18% • MISSING CORE DATA
          </span>
        </div>
      </div>
    </div>
  );
}

// Monochromatic Editorial Visual 02: Profile Outline / Narrative Wireframe
function ProfileOutlineVisual() {
  return (
    <div className="p-4 sm:p-5 rounded-btn bg-sp-offWhite border border-sp-lightGray relative overflow-hidden font-sans text-[10px]">
      <div 
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #E4D5BF 1px, transparent 1px), linear-gradient(to bottom, #E4D5BF 1px, transparent 1px)',
          backgroundSize: '16px 16px'
        }}
      />

      <div className="relative z-10 bg-sp-white rounded-card border border-sp-lightGray p-3.5 shadow-sm space-y-2.5 max-w-sm mx-auto">
        {/* Profile Card Mockup */}
        <div className="flex items-center gap-3 border-b border-sp-lightGray pb-2.5">
          <div className="w-9 h-9 rounded-full border-2 border-dashed border-sp-midGray flex items-center justify-center bg-sp-offWhite text-sp-midGray">
            <span className="text-[11px] font-bold">?</span>
          </div>
          <div className="space-y-1 flex-1">
            <div className="h-2 w-28 bg-sp-charcoal rounded-full" />
            <div className="h-1.5 w-40 bg-sp-lightGray rounded-full" />
          </div>
        </div>

        {/* Value Proposition Gap Box */}
        <div className="p-2 rounded bg-sp-offWhite border border-dashed border-sp-midGray/50 text-center">
          <span className="text-[9px] font-bold text-sp-ink block uppercase tracking-wide">
            [UNDEFINED VALUE PROPOSITION]
          </span>
          <span className="text-[8px] text-sp-midGray">
            Coursework not translated to demonstrable commercial capability
          </span>
        </div>

        {/* Broken Skill Matrix */}
        <div className="pt-1">
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2 py-0.5 rounded border border-sp-lightGray bg-sp-white text-sp-midGray text-[9px]">
              • Academic Theory
            </span>
            <span className="px-2 py-0.5 rounded border border-dashed border-sp-midGray/60 bg-sp-offWhite text-sp-charcoal text-[9px]">
              • Commercial Proof: 0
            </span>
            <span className="px-2 py-0.5 rounded border border-sp-lightGray bg-sp-white text-sp-midGray text-[9px]">
              • STAR Stories: Missing
            </span>
          </div>
        </div>

        <div className="pt-2 border-t border-sp-lightGray flex items-center justify-between text-[9px]">
          <span className="text-sp-midGray uppercase">Recruiter Discovery Rate</span>
          <span className="font-bold text-sp-ink bg-sp-offWhite px-2 py-0.5 rounded border border-sp-lightGray">
            MINIMAL INBOUND
          </span>
        </div>
      </div>
    </div>
  );
}

// Monochromatic Editorial Visual 03: Scattered Applications / Portal Queue Static
function ScatteredApplicationsVisual() {
  return (
    <div className="p-4 sm:p-5 rounded-btn bg-sp-offWhite border border-sp-lightGray relative overflow-hidden font-sans text-[10px]">
      <div 
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #E4D5BF 1px, transparent 1px), linear-gradient(to bottom, #E4D5BF 1px, transparent 1px)',
          backgroundSize: '16px 16px'
        }}
      />

      <div className="relative z-10 bg-sp-white rounded-card border border-sp-lightGray p-3.5 shadow-sm space-y-2.5 max-w-sm mx-auto">
        {/* Header Ledger */}
        <div className="flex items-center justify-between border-b border-sp-lightGray pb-2">
          <div className="flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-sp-charcoal" />
            <span className="font-bold text-sp-ink text-[9px] uppercase tracking-wider">
              PORTAL QUEUE LEDGER
            </span>
          </div>
          <span className="text-[9px] text-sp-midGray font-bold">
            142 SUBMITTED
          </span>
        </div>

        {/* Cascading Application Entries */}
        <div className="space-y-1.5">
          <div className="p-1.5 rounded bg-sp-offWhite border border-sp-lightGray/80 flex items-center justify-between text-[9px]">
            <span className="text-sp-charcoal font-medium">Job #142 • Generic Application</span>
            <span className="text-sp-midGray font-bold">NO REPLY</span>
          </div>
          <div className="p-1.5 rounded bg-sp-offWhite/80 border border-sp-lightGray/60 flex items-center justify-between text-[9px] opacity-75">
            <span className="text-sp-charcoal font-medium">Job #141 • Public Aggregator</span>
            <span className="text-sp-midGray font-bold">AUTOMATED REJECT</span>
          </div>
          <div className="p-1.5 rounded bg-sp-offWhite/60 border border-sp-lightGray/40 flex items-center justify-between text-[9px] opacity-50">
            <span className="text-sp-charcoal font-medium">Job #140 • Blind Submission</span>
            <span className="text-sp-midGray font-bold">PORTAL SILENCE</span>
          </div>
        </div>

        {/* Funnel Metrics */}
        <div className="pt-2 border-t border-sp-lightGray flex items-center justify-between text-[9px]">
          <span className="text-sp-midGray uppercase">Strategy Conversion</span>
          <span className="font-bold text-sp-ink bg-sp-offWhite px-2 py-0.5 rounded border border-sp-lightGray">
            0% INTERVIEWS • SPRAY & PRAY
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ProblemStory() {
  const [activeProblem, setActiveProblem] = useState(0);

  const visualObjects = [
    <UnfinishedResumeVisual key="v1" />,
    <ProfileOutlineVisual key="v2" />,
    <ScatteredApplicationsVisual key="v3" />
  ];

  const problemIcons = [FileQuestion, UserMinus, Layers];

  return (
    <section
      id="problem"
      className="relative min-h-[100svh] w-full bg-sp-offWhite text-sp-ink py-20 sm:py-28 lg:py-32 flex flex-col justify-center border-b border-sp-lightGray overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-btn bg-sp-white border border-sp-lightGray text-[11px] font-mono uppercase tracking-widest text-sp-charcoal mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
            <span>THE EMPLOYABILITY GAP / 02</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-sp-ink leading-tight mb-4">
            Education is <span className="font-times italic font-normal text-sp-charcoal">only the beginning.</span>
          </h2>
          <p className="text-base sm:text-lg text-sp-midGray leading-relaxed max-w-2xl font-normal">
            <span className="font-times italic text-sp-ink font-semibold">A degree represents academic completion.</span> Translating that achievement into a competitive professional candidate requires an entirely distinct discipline.
          </p>
        </div>

        {/* Full-Screen Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left: Interactive Sequential Problem List */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            {problemStatement.items.map((item, idx) => {
              const isActive = activeProblem === idx;
              const IconComp = problemIcons[idx];
              return (
                <div
                  key={item.number}
                  onClick={() => setActiveProblem(idx)}
                  className={`group p-6 sm:p-8 rounded-card border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-sp-white border-sp-ink shadow-lg ring-1 ring-sp-ink/10'
                      : 'bg-sp-white/50 border-sp-lightGray hover:border-sp-gray hover:bg-sp-white/80 opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono text-3xl sm:text-4xl font-black transition-colors ${
                          isActive ? 'text-sp-ink' : 'text-sp-gray group-hover:text-sp-midGray'
                        }`}
                      >
                        {item.number}
                      </span>
                      <div className="w-7 h-7 rounded border border-sp-lightGray flex items-center justify-center bg-sp-offWhite">
                        <IconComp className="w-3.5 h-3.5 text-sp-charcoal" />
                      </div>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-sp-midGray">
                      {isActive ? 'CURRENT FOCUS' : 'CLICK TO REVEAL'}
                    </span>
                  </div>

                  <h3
                    className={`text-xl sm:text-2xl font-black tracking-tight uppercase mb-2 transition-colors ${
                      isActive ? 'text-sp-ink' : 'text-sp-midGray group-hover:text-sp-ink'
                    }`}
                  >
                    {item.question}
                  </h3>

                  <p className="text-xs sm:text-sm text-sp-midGray leading-relaxed">
                    {item.headline}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: Focused Editorial Dossier Panel */}
          <div className="lg:col-span-6">
            <div className="sticky top-28 rounded-card bg-sp-white border border-sp-ink p-5 sm:p-8 lg:p-10 shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProblem}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6"
                >
                  {/* Oversized Monochromatic Number */}
                  <div className="flex items-center justify-between border-b border-sp-lightGray pb-4">
                    <span className="text-6xl sm:text-7xl lg:text-8xl font-black font-mono text-sp-charcoal leading-none tracking-tighter">
                      {problemStatement.items[activeProblem].number}
                    </span>
                    <div className="text-right font-mono text-xs text-sp-midGray">
                      <span className="block font-bold text-sp-ink uppercase">CHALLENGE DOSSIER</span>
                      <span>STAGE 0{activeProblem + 1} OF 03</span>
                    </div>
                  </div>

                  {/* Subtle Editorial Visual Storytelling Object */}
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-sp-midGray block mb-2 font-bold">
                      VISUAL DIAGNOSTIC / AMBIGUITY ARTIFACT
                    </span>
                    {visualObjects[activeProblem]}
                  </div>

                  <div>
                    <span className="text-[11px] font-mono tracking-widest uppercase text-sp-midGray block mb-1">
                      CORE HURDLE
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-black text-sp-ink tracking-tight uppercase">
                      {problemStatement.items[activeProblem].question}
                    </h4>
                  </div>

                  <p className="text-sm sm:text-base text-sp-charcoal leading-relaxed">
                    {problemStatement.items[activeProblem].description}
                  </p>

                  <div className="p-4 rounded-btn bg-sp-offWhite border border-sp-lightGray">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-sp-midGray block mb-1 font-bold">
                      SYSTEMIC IMPACT
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-sp-ink">
                      {problemStatement.items[activeProblem].impact}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs font-mono text-sp-midGray">
                    <span>Practical Intervention Available</span>
                    <a
                      href="#solution"
                      className="inline-flex items-center gap-1 font-bold text-sp-ink hover:underline"
                    >
                      <span>See Our Approach</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
