import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowUpRight, Sparkles, FileText } from 'lucide-react';

export default function FloatingResumeCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full py-2 [perspective:1000px] select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating 3D Resume Canvas */}
      <motion.div
        animate={{
          rotateX: isHovered ? 8 : 2,
          rotateY: isHovered ? -8 : -3,
          rotateZ: isHovered ? -1 : 0,
          scale: isHovered ? 1.03 : 1,
          y: isHovered ? -6 : 0
        }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        className="relative mx-auto w-full max-w-sm rounded-2xl bg-[#1C1E2E] border border-[#68705A] p-5 shadow-2xl overflow-hidden transition-colors group-hover:border-[#D96C4A]/80"
      >
        {/* ATS Scanning Laser Line (Travels vertically on hover) */}
        {isHovered && (
          <motion.div
            initial={{ top: "-10%" }}
            animate={{ top: "110%" }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
            className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D96C4A] to-transparent shadow-[0_0_15px_#D96C4A] z-20 pointer-events-none"
          />
        )}

        {/* Ambient Top Glow */}
        <div className={`absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none ${
          isHovered ? 'bg-[#D96C4A]/25 opacity-100' : 'bg-[#D96C4A]/10 opacity-40'
        }`} />

        {/* Resume Header */}
        <div className="border-b border-[#68705A]/60 pb-3 mb-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-black text-[#FAF8F2] tracking-wide flex items-center gap-1.5">
                JOHN DOE
                <span className="w-1.5 h-1.5 rounded-full bg-[#D96C4A] animate-pulse"></span>
              </div>
              <div className="text-[10px] font-mono text-[#D96C4A] font-bold tracking-wider uppercase">
                AI / ML Engineer
              </div>
            </div>
            <div className="w-7 h-7 rounded-lg bg-[#25283D] border border-[#68705A] flex items-center justify-center text-[#F3EFE6]">
              <FileText className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="text-[9px] text-[#A8B09A] mt-1 font-mono">
            New York, NY • contact@johndoe.ai • github.com/johndoe
          </div>
        </div>

        {/* Resume Section: Experience */}
        <div className="mb-3">
          <div className="flex items-center justify-between text-[10px] font-mono font-bold text-[#A8B09A] uppercase tracking-wider mb-1.5">
            <span>EXPERIENCE</span>
            {isHovered && (
              <span className="text-[8px] text-[#D96C4A] font-mono font-bold animate-pulse">
                98% ATS MATCH
              </span>
            )}
          </div>
          
          <div className={`space-y-1.5 transition-colors duration-300 p-2 rounded-lg ${
            isHovered ? 'bg-[#25283D]/90 border border-[#D96C4A]/40' : 'bg-[#25283D]/50'
          }`}>
            <div className="flex items-center justify-between text-[10px] font-bold text-[#FAF8F2]">
              <span>Lead ML Associate</span>
              <span className="text-[8px] text-[#A8B09A] font-mono">2023 - Present</span>
            </div>
            <div className="w-full h-1.5 bg-[#68705A]/40 rounded-full overflow-hidden">
              <motion.div 
                animate={{ width: isHovered ? "100%" : "85%" }}
                className="h-full bg-gradient-to-r from-[#A8B09A] to-[#D96C4A] rounded-full"
              />
            </div>
            <div className="text-[9px] text-[#F3EFE6] leading-snug">
              • Scaled predictive models reducing pipeline latency by 34%
            </div>
          </div>
        </div>

        {/* Resume Section: Skills */}
        <div>
          <div className="text-[10px] font-mono font-bold text-[#A8B09A] uppercase tracking-wider mb-1.5">
            CORE SKILLS & TECH STACK
          </div>
          <div className="flex flex-wrap gap-1.5">
            {['Python', 'PyTorch', 'AWS SageMaker', 'Kubernetes', 'FastAPI'].map((skill, idx) => (
              <span 
                key={idx}
                className={`text-[9px] px-2 py-0.5 rounded-md font-mono transition-all duration-300 ${
                  isHovered 
                    ? 'bg-[#D96C4A]/20 text-[#D96C4A] border border-[#D96C4A]/40 font-bold' 
                    : 'bg-[#25283D] text-[#F3EFE6] border border-[#68705A]/60'
                }`}
              >
                ● {skill}
              </span>
            ))}
          </div>
        </div>

      </motion.div>

      {/* Floating ATS READY Badge with Upward Arrow */}
      <motion.div
        animate={{
          y: isHovered ? [0, -4, 0] : 0,
          scale: isHovered ? 1.05 : 0.95
        }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute -bottom-2 right-4 sm:right-8 z-30 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D96C4A] text-[#25283D] font-black text-xs shadow-xl shadow-[#D96C4A]/30 border-2 border-[#FAF8F2]"
      >
        <CheckCircle2 className="w-4 h-4 text-[#25283D]" />
        <span>ATS READY</span>
        <ArrowUpRight className="w-3.5 h-3.5 text-[#25283D]" />
      </motion.div>
    </div>
  );
}
