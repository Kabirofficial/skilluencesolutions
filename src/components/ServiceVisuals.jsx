import React from 'react';

export default function ServiceVisual({ id, inModal = false }) {
  const containerClass = inModal
    ? "w-full h-32 sm:h-36 bg-[#FAF7F2] border border-[#E8E2D8] flex items-center justify-center p-3 relative overflow-hidden select-none font-sans text-[10px]"
    : "w-full h-24 bg-[#FAF7F2] border border-[#E8E2D8] flex items-center justify-center p-2.5 relative overflow-hidden select-none font-sans text-[9px] mb-4 group-hover:border-[#142F23] transition-colors";

  switch (id) {
    case 'resume-cv':
      return (
        <div className={containerClass}>
          <div className="relative z-10 w-48 bg-white border border-[#E8E2D8] p-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between border-b border-[#E8E2D8] pb-1.5 mb-2">
              <div className="h-1.5 w-16 bg-[#142F23]" />
              <span className="text-[8px] px-1.5 py-0.5 border border-[#E8E2D8] bg-[#FAF7F2] text-[#C36B4E] font-medium">ATS: 98%</span>
            </div>
            <div className="space-y-1 relative">
              <div className="h-1 w-full bg-[#E8E2D8]" />
              <div className="h-1 w-5/6 bg-[#E8E2D8]/80" />
              <div className="h-1 w-4/6 bg-[#E8E2D8]/60" />
              <div className="absolute -inset-x-1 h-0.5 bg-[#C36B4E]" />
            </div>
            <div className="mt-2 pt-1 border-t border-[#E8E2D8] flex items-center justify-between text-[8px] text-[#556059]">
              <span className="tracking-wider uppercase text-[7px] text-[#142F23] font-medium">Keywords: Parsed</span>
              <span className="w-1.5 h-1.5 bg-[#142F23]" />
            </div>
          </div>
        </div>
      );

    case 'linkedin-opt':
      return (
        <div className={containerClass}>
          <div className="relative z-10 w-48 bg-white border border-[#E8E2D8] p-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] space-y-2">
            <div className="h-4 bg-[#FAF7F2] border-b border-[#E8E2D8] relative">
              <div className="absolute -bottom-1.5 left-2 w-5 h-5 bg-white border border-[#142F23] flex items-center justify-center">
                <div className="w-2 h-2 bg-[#C36B4E]" />
              </div>
            </div>
            <div className="pt-1 pl-8 space-y-1">
              <div className="h-1.5 w-20 bg-[#142F23]" />
              <div className="h-1 w-24 bg-[#E8E2D8]" />
            </div>
            <div className="pt-1.5 border-t border-[#E8E2D8] flex items-center justify-between text-[8px]">
              <span className="text-[#1F2421] font-medium">EXECUTIVE PROFILE</span>
              <span className="text-[7px] px-1.5 py-0.5 border border-[#E8E2D8] bg-[#FAF7F2] text-[#142F23] font-medium">
                OPTIMIZED
              </span>
            </div>
          </div>
        </div>
      );

    case 'application-support':
      return (
        <div className={containerClass}>
          <div className="relative z-10 w-48 h-16 flex items-center justify-center">
            <div className="absolute w-40 h-10 bg-[#FAF7F2] border border-[#E8E2D8] transform -rotate-3 -translate-y-2 opacity-60" />
            <div className="absolute w-42 h-11 bg-white border border-[#E8E2D8] transform rotate-2 -translate-y-1 opacity-80" />
            <div className="relative w-44 h-12 bg-white border border-[#142F23] p-2 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-medium text-[#142F23]">TARGETED PIPELINE</span>
                <span className="text-[8px] text-[#C36B4E] font-medium">PRIORITY FIT</span>
              </div>
              <div className="flex items-center justify-between text-[8px] pt-1 border-t border-[#E8E2D8]">
                <div className="h-1 w-16 bg-[#142F23]" />
                <span className="text-[#142F23] font-medium">→ SUBMITTED</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'interview-prep':
      return (
        <div className={containerClass}>
          <div className="relative z-10 w-48 space-y-2">
            <div className="bg-white border border-[#E8E2D8] p-2 text-[8px] flex items-center justify-between shadow-xs">
              <span className="text-[#556059] font-serif italic">Q: "Walk me through an obstacle..."</span>
              <span className="w-1.5 h-1.5 bg-[#C36B4E] shrink-0" />
            </div>
            <div className="bg-[#FAF7F2] border border-[#142F23] p-2 text-[8px] flex items-center justify-between">
              <span className="text-[#142F23] font-medium">STAR DRILL: STRUCTURED</span>
              <span className="text-[7px] bg-[#142F23] text-white px-1.5 py-0.5 font-sans font-medium">HIGH YIELD</span>
            </div>
          </div>
        </div>
      );

    case 'career-guidance':
      return (
        <div className={containerClass}>
          <div className="relative z-10 w-48 bg-white border border-[#E8E2D8] p-2.5 shadow-xs">
            <div className="flex items-center justify-between text-[8px] border-b border-[#E8E2D8] pb-1.5 mb-1.5">
              <span className="font-medium text-[#142F23]">DIRECTIONAL MATRIX</span>
              <span className="text-[#C36B4E] font-medium">TRAJECTORY</span>
            </div>
            <svg className="w-full h-8" viewBox="0 0 160 32" fill="none">
              <line x1="20" y1="16" x2="65" y2="16" stroke="#142F23" strokeWidth="1.5" />
              <path d="M 65,16 C 85,16 95,8 140,8" stroke="#C36B4E" strokeWidth="1.5" strokeDasharray="3 3" />
              <path d="M 65,16 C 85,16 95,24 140,24" stroke="#142F23" strokeWidth="1.5" />
              <circle cx="20" cy="16" r="3" fill="#142F23" />
              <circle cx="65" cy="16" r="3" fill="#142F23" />
              <circle cx="140" cy="8" r="2.5" fill="#C36B4E" />
              <circle cx="140" cy="24" r="2.5" fill="#142F23" />
            </svg>
          </div>
        </div>
      );

    case 'job-search':
      return (
        <div className={containerClass}>
          <div className="relative z-10 w-48 bg-white border border-[#E8E2D8] p-2.5 shadow-xs space-y-2">
            <div className="h-5 px-2 bg-[#FAF7F2] border border-[#E8E2D8] flex items-center justify-between text-[8px]">
              <span className="text-[#1F2421] font-medium">Role: Strategic Consultant</span>
              <span className="text-[7px] text-[#556059]">FILTERS (3)</span>
            </div>
            <div className="flex items-center gap-1.5 text-[7px]">
              <span className="px-2 py-0.5 border border-[#142F23] bg-[#142F23] text-white font-medium">Direct Hiring</span>
              <span className="px-2 py-0.5 border border-[#E8E2D8] bg-white text-[#556059]">High-Relevance</span>
            </div>
          </div>
        </div>
      );

    case 'profile-building':
      return (
        <div className={containerClass}>
          <div className="relative z-10 w-48 bg-white border border-[#E8E2D8] p-2.5 shadow-xs">
            <div className="flex items-center justify-between text-[8px] border-b border-[#E8E2D8] pb-1.5 mb-2">
              <span className="font-medium text-[#142F23]">PORTFOLIO ARCHITECTURE</span>
              <span className="text-[#C36B4E] font-medium">MODULAR</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 text-center text-[7px]">
              <div className="p-1 border border-[#E8E2D8] bg-[#FAF7F2] text-[#142F23] font-medium">
                CAPSTONE
              </div>
              <div className="p-1 border border-[#E8E2D8] bg-[#FAF7F2] text-[#142F23] font-medium">
                EVIDENCE
              </div>
              <div className="p-1 border border-[#142F23] bg-[#142F23] text-white font-medium">
                IMPACT
              </div>
            </div>
          </div>
        </div>
      );

    case 'personal-branding':
      return (
        <div className={containerClass}>
          <div className="relative z-10 w-48 bg-white border border-[#E8E2D8] p-2.5 shadow-xs space-y-1.5">
            <div className="flex items-center justify-between text-[8px] border-b border-[#E8E2D8] pb-1.5">
              <span className="font-serif italic text-[#142F23] text-[9px]">Executive Monogram</span>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-white border border-[#142F23]" />
                <span className="w-2 h-2 bg-[#C36B4E]" />
              </div>
            </div>
            <div className="text-[7px] text-[#556059] pt-0.5 leading-tight uppercase tracking-wider">
              Positioning • Narrative • Value Pitch
            </div>
            <div className="h-1 w-full bg-[#142F23]" />
          </div>
        </div>
      );

    default:
      return null;
  }
}
