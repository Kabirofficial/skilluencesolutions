import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useReducedMotion from '../hooks/useReducedMotion';

export default function Preloader({ onComplete }) {
  const prefersReducedMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING PLATFORM...");

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
      "INITIALIZING PLATFORM...",
      "CALIBRATING ATS RESUME ENGINES...",
      "SYNCING RECRUITER DIRECTORY...",
      "PREPARING CAREER ROADMAP...",
      "SYSTEM READY"
    ];

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 8) + 6;
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        setStatusText("SYSTEM READY");
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
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: prefersReducedMotion ? 0.05 : 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[9999] bg-sp-white text-sp-ink flex flex-col justify-between p-6 sm:p-10 md:p-14 select-none"
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={progress}
      aria-label="Loading Skilluence Solutions"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between font-mono text-[10px] sm:text-xs text-sp-midGray uppercase tracking-widest border-b border-sp-lightGray pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-sp-ink animate-pulse" />
          <span className="text-sp-ink font-bold">SKILLUENCE SOLUTIONS</span>
        </div>
        <div className="hidden sm:block">
          CAREER PLATFORM INITIALIZATION
        </div>
        <div>
          REV 2.4.0
        </div>
      </div>

      {/* Center Stage: Logo, Large Counter & Hairline Progress */}
      <div className="max-w-md w-full mx-auto text-center space-y-6">
        
        {/* Brand Logo Pulse */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="p-3.5 rounded-card bg-sp-offWhite border border-sp-lightGray shadow-sm inline-block">
            <img
              src="/images/logo.png"
              alt="Skilluence Logo"
              width="160"
              height="48"
              className="h-10 sm:h-12 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </motion.div>

        {/* Oversized Progress Counter */}
        <div className="font-mono text-6xl sm:text-7xl font-black text-sp-ink tracking-tighter leading-none">
          {progress < 10 ? `00${progress}` : progress < 100 ? `0${progress}` : progress}%
        </div>

        {/* Dynamic Status Text */}
        <div className="h-5 flex items-center justify-center">
          <motion.span
            key={statusText}
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] font-mono tracking-widest uppercase text-sp-charcoal font-semibold"
          >
            {statusText}
          </motion.span>
        </div>

        {/* Hairline Progress Bar */}
        <div className="w-full h-1 bg-sp-offWhite border border-sp-lightGray rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-sp-ink"
            style={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

      </div>

      {/* Bottom Architectural Details */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[10px] text-sp-midGray uppercase tracking-wider border-t border-sp-lightGray pt-4">
        <span>VERIFIED TALENT ARCHITECTURE</span>
        <span className="hidden sm:inline">NO SHORTCUTS • NO GUARANTEE GIMMICKS • AUTHENTIC PREPARATION</span>
        <span className="text-sp-ink font-bold">EST. 2026</span>
      </div>
    </motion.div>
  );
}
