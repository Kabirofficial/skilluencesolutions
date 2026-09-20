import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, TrendingUp, UserCheck, ShieldCheck } from 'lucide-react';
import { LinkedInIcon } from './Icons';

export default function LinkedInProfileCard() {
  const [isOptimized, setIsOptimized] = useState(false);

  return (
    <div 
      className="relative w-full py-2 [perspective:1000px] select-none"
      onMouseEnter={() => setIsOptimized(true)}
      onMouseLeave={() => setIsOptimized(false)}
    >
      {/* 3D Rotating Card: -8deg -> 0deg */}
      <motion.div
        initial={{ rotateY: -8, rotateZ: -1 }}
        whileInView={{ rotateY: 0, rotateZ: 0 }}
        viewport={{ once: false, margin: "-40px" }}
        animate={{
          rotateY: isOptimized ? 0 : -8,
          scale: isOptimized ? 1.02 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className={`relative mx-auto w-full max-w-sm rounded-2xl bg-[#1C1E2E] border p-5 shadow-2xl transition-all duration-500 ${
          isOptimized ? 'border-[#D96C4A] shadow-[#D96C4A]/20' : 'border-[#68705A]'
        }`}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-[#68705A]/60 pb-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
              isOptimized ? 'bg-[#D96C4A] text-[#25283D]' : 'bg-[#68705A]/40 text-[#F3EFE6]'
            }`}>
              <LinkedInIcon className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-black text-[#FAF8F2]">
                LinkedIn Profile Audit
              </div>
              <div className="text-[9px] font-mono text-[#A8B09A]">
                Searchability & Social Proof
              </div>
            </div>
          </div>

          {/* Transformation Status Indicator Badge */}
          <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border transition-all duration-300 ${
            isOptimized 
              ? 'bg-[#D96C4A]/20 text-[#D96C4A] border-[#D96C4A]/40 animate-pulse' 
              : 'bg-[#68705A]/30 text-[#A8B09A] border-[#68705A]'
          }`}>
            {isOptimized ? 'OPTIMIZED' : 'INCOMPLETE'}
          </span>
        </div>

        {/* Profile Card Center Content */}
        <div className="space-y-3">
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-[#25283D] border-2 border-[#68705A] flex items-center justify-center text-[#FAF8F2] font-bold text-sm">
                JD
              </div>
              {isOptimized && (
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#D96C4A] text-[#25283D] flex items-center justify-center">
                  <CheckCircle2 className="w-3 h-3 text-[#25283D]" />
                </div>
              )}
            </div>

            <div>
              <div className="text-xs font-bold text-[#FAF8F2]">
                John Doe
              </div>
              <div className="text-[10px] text-[#F3EFE6]">
                {isOptimized 
                  ? 'AI / ML Engineer | PyTorch | Cloud Computing' 
                  : 'Student / Seeking Opportunities'}
              </div>
              <div className="text-[9px] text-[#D96C4A] font-mono mt-0.5 font-bold">
                {isOptimized ? '500+ Connections • Top 5% Industry Search' : '38 Connections • Hidden from Search'}
              </div>
            </div>
          </div>

          {/* Progress Bar Transformation: 40% Incomplete -> 92% OPTIMIZED */}
          <div className="p-3 rounded-xl bg-[#25283D] border border-[#68705A]/70">
            <div className="flex items-center justify-between text-[10px] font-mono font-bold mb-1.5">
              <span className={isOptimized ? 'text-[#D96C4A]' : 'text-[#A8B09A]'}>
                {isOptimized ? 'PROFILE OPTIMIZED' : 'PROFILE INCOMPLETE'}
              </span>
              <span className={`font-black ${isOptimized ? 'text-[#D96C4A]' : 'text-[#A8B09A]'}`}>
                {isOptimized ? '92%' : '40%'}
              </span>
            </div>

            <div className="w-full h-2 bg-[#1C1E2E] rounded-full overflow-hidden">
              <motion.div
                animate={{ width: isOptimized ? "92%" : "40%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`h-full rounded-full ${
                  isOptimized 
                    ? 'bg-gradient-to-r from-[#A8B09A] to-[#D96C4A]' 
                    : 'bg-[#68705A]'
                }`}
              />
            </div>

            <div className="mt-2 text-[9px] text-[#A8B09A] flex items-center justify-between">
              <span>{isOptimized ? 'Headline & Summary Tailored' : 'Missing Role Keywords'}</span>
              <span className="text-[#D96C4A] font-bold">{isOptimized ? 'Recruiter Discoverable' : 'Low Visibility'}</span>
            </div>
          </div>

        </div>

        {/* Hover / Touch Hint */}
        <div className="mt-3 pt-2 border-t border-[#68705A]/40 text-center text-[9px] font-mono text-[#A8B09A]/70">
          Hover or tap to toggle optimization transformation
        </div>
      </motion.div>
    </div>
  );
}
