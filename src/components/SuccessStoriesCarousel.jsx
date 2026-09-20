import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Briefcase, 
  TrendingUp,
  Building2,
  Heart
} from 'lucide-react';

export const placementStories = [
  {
    id: 1,
    candidate: "Aarav Sharma",
    degree: "B.Tech Computer Science, 2025 Graduate",
    placedRole: "Full-Stack Software Engineer",
    companyType: "High-Growth Cloud Platform (Verified Employer)",
    frustration: "Sent 320+ applications on job boards with zero replies. Feeling invisible and anxious about post-grad gap.",
    transformation: "Skilluence recruiter overhauled my portfolio narrative, secured 3 direct interview rounds, and coached my STAR answers.",
    outcome: "Full-Time Placement within 28 days • 100% SLA Satisfied",
    metrics: "28 Days To Offer",
    badgeColor: "bg-[#D96C4A]/15 text-[#D96C4A] border-[#D96C4A]/30"
  },
  {
    id: 2,
    candidate: "Priya Venkatesh",
    degree: "BBA & Finance Analyst",
    placedRole: "Associate Risk & Financial Analyst",
    companyType: "Tier-1 FinTech Enterprise",
    frustration: "Trapped in an unfulfilling sales internship. Agencies asked for huge upfront deposits without any refund guarantee.",
    transformation: "Skilluence matched my quantitative skill set directly with verified finance partners. The mock interviews gave me absolute composure.",
    outcome: "Secured Full-Time Permanent Role with 45% compensation lift",
    metrics: "45% Compensation Lift",
    badgeColor: "bg-[#68705A]/25 text-[#FAF8F2] border-[#68705A]/50"
  },
  {
    id: 3,
    candidate: "Marcus Vance",
    degree: "Information Systems Graduate",
    placedRole: "DevOps & Infrastructure Associate",
    companyType: "US Enterprise Healthcare SaaS",
    frustration: "Bots kept rejecting my resume due to missing keyword formatting. Recruiters were impossible to reach.",
    transformation: "Sahil's team took personal ownership. They pre-screened my skills and submitted me straight to the Director of Infrastructure.",
    outcome: "Landed Dream Full-Time Career with comprehensive benefits",
    metrics: "3 Verified Interviews",
    badgeColor: "bg-[#D96C4A]/15 text-[#D96C4A] border-[#D96C4A]/30"
  },
  {
    id: 4,
    candidate: "Neha Choudhury",
    degree: "Data Science & Statistics Graduate",
    placedRole: "Junior Machine Learning Analyst",
    companyType: "Autonomous Systems AI Lab",
    frustration: "Too many recruiters pushed temporary 3-month contract gigs that offered zero job security or career progression.",
    transformation: "Skilluence stood firm on their Full-Time Roles Only principle. They advocated for my permanent placement and negotiated my offer.",
    outcome: "Permanent Full-Time Offer with mentorship path",
    metrics: "Permanent Full-Time",
    badgeColor: "bg-[#68705A]/25 text-[#FAF8F2] border-[#68705A]/50"
  }
];

export default function SuccessStoriesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? placementStories.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === placementStories.length - 1 ? 0 : prev + 1));
  };

  // Auto-play every 5 seconds
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(timerRef.current);
  }, [isPaused, currentIndex]);

  const current = placementStories[currentIndex];

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Carousel Navigation Bar */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D96C4A] animate-pulse"></span>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D96C4A]">
            Verified Stories Across The Bridge
          </span>
          <span className="hidden sm:inline text-xs text-[#A8B09A] font-mono">
            • Story {currentIndex + 1} of {placementStories.length}
          </span>
        </div>

        {/* Prev / Next Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Story"
            className="w-10 h-10 rounded-xl bg-[#68705A]/35 hover:bg-[#D96C4A] hover:text-[#25283D] border border-[#68705A] text-[#FAF8F2] flex items-center justify-center transition-all duration-200 shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Story"
            className="w-10 h-10 rounded-xl bg-[#68705A]/35 hover:bg-[#D96C4A] hover:text-[#25283D] border border-[#68705A] text-[#FAF8F2] flex items-center justify-center transition-all duration-200 shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Slide Window */}
      <div className="relative overflow-hidden rounded-3xl bg-[#25283D] border border-[#68705A]/70 shadow-2xl p-6 sm:p-10 lg:p-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Side: Before & After Journey */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Quote & Persona */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#D96C4A] to-[#68705A] text-[#FAF8F2] flex items-center justify-center font-black text-xl shadow-lg">
                  {current.candidate[0]}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#FAF8F2]">
                    {current.candidate}
                  </h3>
                  <p className="text-xs text-[#A8B09A] font-medium font-mono">
                    {current.degree}
                  </p>
                </div>
              </div>

              {/* Contrast: The Frustration */}
              <div className="p-4 rounded-2xl bg-[#1C1E2E]/90 border border-[#A95245]/40">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#A95245] block mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A95245]"></span>
                  The Past Frustration:
                </span>
                <p className="text-xs text-[#F3EFE6] leading-relaxed">
                  "{current.frustration}"
                </p>
              </div>

              {/* Contrast: The Happiness Bridge */}
              <div className="p-4 rounded-2xl bg-[#68705A]/25 border border-[#D96C4A]/50">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D96C4A] block mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#D96C4A]" />
                  The Skilluence Bridge:
                </span>
                <p className="text-xs text-[#FAF8F2] font-medium leading-relaxed">
                  "{current.transformation}"
                </p>
              </div>

            </div>

            {/* Right Side: Role & Verification Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#1C1E2E] border border-[#68705A]/60 flex flex-col justify-between space-y-5">
              <div>
                <span className={`text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full border ${current.badgeColor} inline-block mb-3`}>
                  {current.metrics}
                </span>

                <div className="text-xs text-[#A8B09A] font-semibold uppercase tracking-wider mb-1 font-mono">
                  Placed Full-Time Role:
                </div>
                <h4 className="text-lg font-black text-[#FAF8F2] leading-snug">
                  {current.placedRole}
                </h4>
                
                <div className="text-xs text-[#D96C4A] font-medium mt-1 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{current.companyType}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#68705A]/50 space-y-2">
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold font-mono">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-[#D96C4A]" />
                  <span>{current.outcome}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#A8B09A] font-mono">
                  <ShieldCheck className="w-4 h-4 text-[#D96C4A] shrink-0" />
                  <span>SLA Terms Fully Satisfied</span>
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Pills */}
      <div className="flex items-center justify-center gap-2.5 mt-6">
        {placementStories.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === idx
                ? 'w-10 bg-[#D96C4A]'
                : 'w-2.5 bg-[#68705A] hover:bg-[#A8B09A]'
            }`}
          />
        ))}
      </div>

    </div>
  );
}
