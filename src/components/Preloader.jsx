import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useReducedMotion from '../hooks/useReducedMotion';

export default function Preloader({ onComplete }) {
  const prefersReducedMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("PREPARING ADVISORY DESK...");

  useEffect(() => {
    // Lock body scroll while preloader is active
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    // If reduced motion is requested, exit immediately without long animation
    if (prefersReducedMotion) {
      if (onComplete) onComplete();
      return;
    }

    const statuses = [
      "PREPARING ADVISORY DESK...",
      "CURATING CAREER CASE STUDIES...",
      "CONFIGURING ROADMAP DIRECTORY...",
      "WELCOME TO SKILLUENCE"
    ];

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 8) + 6;
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        setStatusText("WELCOME TO SKILLUENCE");
        clearInterval(interval);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 220);
      } else {
        setProgress(currentProgress);
        const statusIdx = Math.min(
          Math.floor((currentProgress / 100) * statuses.length),
          statuses.length - 1
        );
        setStatusText(statuses[statusIdx]);
      }
    }, 38);

    return () => clearInterval(interval);
  }, [onComplete, prefersReducedMotion]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: prefersReducedMotion ? 0.05 : 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[9999] bg-[#FAF7F2] text-[#142F23] flex flex-col justify-between p-6 sm:p-10 md:p-14 select-none"
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={progress}
      aria-label="Loading Skilluence Solutions"
    >
      {/* Top Masthead Accent */}
      <div className="flex items-center justify-between text-[11px] text-[#6B756E] uppercase tracking-wider border-b border-[#E8E2D8] pb-4">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#142F23] animate-pulse" />
          <span className="text-[#142F23] font-semibold tracking-wide">SKILLUENCE SOLUTIONS</span>
        </div>
        <div className="hidden sm:block text-[10px] tracking-widest text-[#7C847E]">
          CAREER ADVISORY & RECRUITMENT DESK
        </div>
        <div className="text-[10px] tracking-widest text-[#7C847E]">
          EST. 2026
        </div>
      </div>

      {/* Center Stage: Emblem, Editorial Serif Counter & Refined Progress */}
      <div className="max-w-md w-full mx-auto text-center space-y-6">
        
        {/* Brand Emblem */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.45 }}
          className="flex justify-center"
        >
          <div className="w-14 h-14 rounded-full bg-white border border-[#E8E2D8] shadow-sm flex items-center justify-center p-2.5">
            <img
              src="/images/apple-touch-icon.png"
              alt="Skilluence Emblem"
              width="36"
              height="36"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* Oversized Editorial Counter */}
        <div className="font-serif text-6xl sm:text-7xl font-normal text-[#142F23] tracking-tight leading-none">
          {progress}%
        </div>

        {/* Dynamic Status Text */}
        <div className="h-5 flex items-center justify-center">
          <motion.span
            key={statusText}
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] font-sans tracking-widest uppercase text-[#546059] font-medium"
          >
            {statusText}
          </motion.span>
        </div>

        {/* Hairline Progress Bar */}
        <div className="w-full h-1 bg-[#EBE5DB] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#142F23]"
            style={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

      </div>

      {/* Bottom Architectural Details */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-[#6B756E] uppercase tracking-wider border-t border-[#E8E2D8] pt-4">
        <span>INDEPENDENT CAREER CONSULTANCY</span>
        <span className="hidden sm:inline">AUTHENTIC PREPARATION • TRANSPARENT PRICING</span>
        <span className="text-[#142F23] font-medium">USA & INDIA</span>
      </div>
    </motion.div>
  );
}
