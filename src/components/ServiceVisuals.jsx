import React from 'react';

export default function ServiceVisual({ id, inModal = false }) {
  const containerClass = inModal
    ? "w-full h-32 sm:h-36 rounded-card bg-sp-offWhite border border-sp-lightGray flex items-center justify-center p-3 relative overflow-hidden select-none font-mono text-[10px]"
    : "w-full h-24 rounded-card bg-sp-offWhite/80 border border-sp-lightGray/80 flex items-center justify-center p-2.5 relative overflow-hidden select-none font-mono text-[9px] mb-4 group-hover:border-sp-ink transition-colors";

  switch (id) {
    case 'resume-cv':
      // Document + ATS Scanner Beam & Keyword Match
      return (
        <div className={containerClass}>
          {/* Subtle Grid */}
          <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(#2B2B2B 1px, transparent 1px)', backgroundSize: '8px 8px' }} />
          
          {/* Document Object */}
          <div className="relative z-10 w-44 bg-sp-white rounded border border-sp-lightGray p-2 shadow-xs">
            <div className="flex items-center justify-between border-b border-sp-lightGray pb-1 mb-1.5">
              <div className="h-1.5 w-16 bg-sp-ink rounded-full" />
              <span className="text-[8px] px-1 py-0.2 rounded bg-sp-ink text-sp-white font-bold">ATS: 98%</span>
            </div>
            {/* Document Lines */}
            <div className="space-y-1 relative">
              <div className="h-1 w-full bg-sp-lightGray rounded-full" />
              <div className="h-1 w-5/6 bg-sp-lightGray/80 rounded-full" />
              <div className="h-1 w-4/6 bg-sp-lightGray/60 rounded-full" />
              {/* Animated Scan Beam */}
              <div className="absolute -inset-x-1 h-0.5 bg-sp-ink shadow-[0_0_6px_rgba(43,43,43,0.4)] animate-bounce" style={{ animationDuration: '2.4s' }} />
            </div>
            <div className="mt-1.5 pt-1 border-t border-sp-lightGray/60 flex items-center justify-between text-[8px] text-sp-midGray">
              <span>KEYWORDS: PARSED</span>
              <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
            </div>
          </div>
        </div>
      );

    case 'linkedin-opt':
      // Profile Wireframe + Recruiter Alignment Badge
      return (
        <div className={containerClass}>
          <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(#2B2B2B 1px, transparent 1px)', backgroundSize: '8px 8px' }} />
          
          <div className="relative z-10 w-44 bg-sp-white rounded border border-sp-lightGray p-2 shadow-xs space-y-1.5">
            {/* Banner + Avatar */}
            <div className="h-4 bg-sp-offWhite border-b border-sp-lightGray rounded-t relative">
              <div className="absolute -bottom-1.5 left-2 w-5 h-5 rounded-full bg-sp-white border-2 border-sp-ink flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-sp-charcoal" />
              </div>
            </div>
            {/* Headline and Network */}
            <div className="pt-1 pl-8 space-y-1">
              <div className="h-1.5 w-20 bg-sp-ink rounded-full" />
              <div className="h-1 w-24 bg-sp-lightGray rounded-full" />
            </div>
            {/* Badges */}
            <div className="pt-1 border-t border-sp-lightGray/60 flex items-center justify-between text-[8px]">
              <span className="text-sp-charcoal font-bold">ALL-STAR BADGE</span>
              <span className="text-[7px] px-1 py-0.2 rounded bg-sp-offWhite border border-sp-lightGray text-sp-midGray">
                SEO ALIGNED
              </span>
            </div>
          </div>
        </div>
      );

    case 'application-support':
      // 2.5D Stack of Application Folders & Velocity
      return (
        <div className={containerClass}>
          <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(#2B2B2B 1px, transparent 1px)', backgroundSize: '8px 8px' }} />
          
          <div className="relative z-10 w-44 h-16 flex items-center justify-center">
            {/* Layer 3 */}
            <div className="absolute w-36 h-10 rounded bg-sp-offWhite border border-sp-lightGray transform -rotate-4 -translate-y-2 opacity-60" />
            {/* Layer 2 */}
            <div className="absolute w-38 h-11 rounded bg-sp-white border border-sp-lightGray transform rotate-2 -translate-y-1 opacity-80" />
            {/* Top Layer 1 */}
            <div className="relative w-40 h-12 rounded bg-sp-white border border-sp-ink p-2 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-bold text-sp-ink">TARGETED PIPELINE</span>
                <span className="text-[8px] font-mono text-sp-midGray">TIER 1 FIT</span>
              </div>
              <div className="flex items-center justify-between text-[8px] pt-1 border-t border-sp-lightGray">
                <div className="h-1 w-16 bg-sp-charcoal rounded-full" />
                <span className="text-sp-ink font-bold">→ SUBMITTED</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'interview-prep':
      // STAR Framework Dialogue Simulation Cards
      return (
        <div className={containerClass}>
          <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(#2B2B2B 1px, transparent 1px)', backgroundSize: '8px 8px' }} />
          
          <div className="relative z-10 w-44 space-y-1.5">
            {/* Question bubble */}
            <div className="bg-sp-white rounded border border-sp-lightGray p-1.5 text-[8px] flex items-center justify-between shadow-xs">
              <span className="text-sp-midGray">Q: "Tell me about a complex obstacle..."</span>
              <span className="w-1.5 h-1.5 rounded-full bg-sp-charcoal shrink-0" />
            </div>
            {/* Candidate STAR response */}
            <div className="bg-sp-offWhite rounded border border-sp-ink p-1.5 text-[8px] flex items-center justify-between">
              <span className="text-sp-ink font-bold">STAR DRILL: SITUATION → RESULT</span>
              <span className="text-[7px] bg-sp-ink text-sp-white px-1 py-0.2 rounded font-mono">100%</span>
            </div>
          </div>
        </div>
      );

    case 'career-guidance':
      // Directional Path / Branching Vectors
      return (
        <div className={containerClass}>
          <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(#2B2B2B 1px, transparent 1px)', backgroundSize: '8px 8px' }} />
          
          <div className="relative z-10 w-44 bg-sp-white rounded border border-sp-lightGray p-2 shadow-xs">
            <div className="flex items-center justify-between text-[8px] border-b border-sp-lightGray pb-1 mb-1">
              <span className="font-bold text-sp-ink">DIRECTIONAL MATRIX</span>
              <span className="text-sp-midGray">360° MAP</span>
            </div>
            {/* Branching SVG lines */}
            <svg className="w-full h-8" viewBox="0 0 160 32" fill="none">
              <line x1="20" y1="16" x2="65" y2="16" stroke="#2B2B2B" strokeWidth="1.5" />
              <path d="M 65,16 C 85,16 95,8 140,8" stroke="#6B6B6B" strokeWidth="1.5" strokeDasharray="3 3" />
              <path d="M 65,16 C 85,16 95,24 140,24" stroke="#2B2B2B" strokeWidth="1.5" />
              <circle cx="20" cy="16" r="3" fill="#2B2B2B" />
              <circle cx="65" cy="16" r="3" fill="#2B2B2B" />
              <circle cx="140" cy="8" r="2.5" fill="#6B6B6B" />
              <circle cx="140" cy="24" r="2.5" fill="#2B2B2B" />
            </svg>
          </div>
        </div>
      );

    case 'job-search':
      // Search Interface & Filters Matrix
      return (
        <div className={containerClass}>
          <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(#2B2B2B 1px, transparent 1px)', backgroundSize: '8px 8px' }} />
          
          <div className="relative z-10 w-44 bg-sp-white rounded border border-sp-lightGray p-2 shadow-xs space-y-1.5">
            {/* Search query bar */}
            <div className="h-5 px-2 rounded bg-sp-offWhite border border-sp-lightGray flex items-center justify-between text-[8px]">
              <span className="text-sp-charcoal font-medium">Role: Enterprise Analyst</span>
              <span className="text-[7px] text-sp-midGray">🔍 FILTERS (3)</span>
            </div>
            {/* Filter chips */}
            <div className="flex items-center gap-1 text-[7px]">
              <span className="px-1.5 py-0.5 rounded bg-sp-ink text-sp-white">Verified Companies</span>
              <span className="px-1.5 py-0.5 rounded border border-sp-lightGray bg-sp-white text-sp-charcoal">High-Conversion</span>
            </div>
          </div>
        </div>
      );

    case 'profile-building':
      // Construction Scaffolding / Modular Skill Blocks
      return (
        <div className={containerClass}>
          <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(#2B2B2B 1px, transparent 1px)', backgroundSize: '8px 8px' }} />
          
          <div className="relative z-10 w-44 bg-sp-white rounded border border-sp-lightGray p-2 shadow-xs">
            <div className="flex items-center justify-between text-[8px] border-b border-sp-lightGray pb-1 mb-1.5">
              <span className="font-bold text-sp-ink">PORTFOLIO ARCHITECTURE</span>
              <span className="text-sp-midGray">MODULAR</span>
            </div>
            {/* 3 Building Blocks */}
            <div className="grid grid-cols-3 gap-1 text-center text-[7px]">
              <div className="p-1 rounded bg-sp-offWhite border border-sp-lightGray text-sp-charcoal font-bold">
                CAPSTONE
              </div>
              <div className="p-1 rounded bg-sp-offWhite border border-sp-lightGray text-sp-charcoal font-bold">
                PROOF
              </div>
              <div className="p-1 rounded bg-sp-ink text-sp-white font-bold">
                IMPACT
              </div>
            </div>
          </div>
        </div>
      );

    case 'personal-branding':
      // Typographic Identity / Brand System Grid
      return (
        <div className={containerClass}>
          <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(#2B2B2B 1px, transparent 1px)', backgroundSize: '8px 8px' }} />
          
          <div className="relative z-10 w-44 bg-sp-white rounded border border-sp-lightGray p-2 shadow-xs space-y-1">
            <div className="flex items-center justify-between text-[8px] border-b border-sp-lightGray pb-1">
              <span className="font-bold text-sp-ink font-serif italic text-[9px]">Personal Monogram</span>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-sp-white border border-sp-ink" />
                <span className="w-2 h-2 bg-sp-ink" />
              </div>
            </div>
            <div className="text-[8px] text-sp-midGray pt-0.5 leading-tight">
              30-SEC PITCH • VOICE • POSITIONING
            </div>
            <div className="h-1 w-full bg-sp-ink rounded-full" />
          </div>
        </div>
      );

    default:
      return null;
  }
}
