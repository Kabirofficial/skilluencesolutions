import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  FileText, 
  Send, 
  Award, 
  Compass, 
  TrendingUp, 
  Sparkles,
  BarChart3,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function CareerDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Background Ambient Glow */}
      <div 
        className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-violet-600/20 rounded-3xl blur-2xl -z-10 opacity-70 animate-pulse-glow"
        aria-hidden="true"
      />

      {/* Main Command Center Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-2xl bg-slate-900/90 border border-slate-700/60 p-5 sm:p-7 shadow-2xl backdrop-blur-xl text-white"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between pb-5 border-b border-slate-800/90">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
              <Compass className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                  Career Command Center
                </span>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[9px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Personalized Career Strategy Workspace
              </p>
            </div>
          </div>

          <span className="text-[10px] font-medium text-slate-500 bg-slate-800/80 px-2 py-1 rounded-md border border-slate-700/50">
            Illustrative Dashboard
          </span>
        </div>

        {/* Dashboard Grid Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5">
          {/* 1. Profile Completeness Card */}
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/70 transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                Profile Strength
              </span>
              <span className="text-xs font-bold text-blue-400">92%</span>
            </div>
            
            <div className="w-full h-2 bg-slate-700/60 rounded-full overflow-hidden mb-2">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "92%" }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
              />
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>Capstone & Skills Logged</span>
              <span className="text-emerald-400 flex items-center gap-0.5 font-medium">
                <CheckCircle2 className="w-3 h-3" /> Ready
              </span>
            </div>
          </div>

          {/* 2. Resume ATS Readiness Card */}
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/70 transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-violet-400" />
                Resume Status
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                ATS READY
              </span>
            </div>
            <div className="text-lg font-bold text-white tracking-tight flex items-baseline gap-1.5">
              94 <span className="text-xs font-normal text-slate-400">/ 100 Parse Score</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Impact-driven bullet points formatted
            </p>
          </div>

          {/* 3. Active Applications Pipeline */}
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/70 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                <Send className="w-3.5 h-3.5 text-cyan-400" />
                Target Pipeline
              </span>
              <span className="text-xs font-semibold text-slate-300">18 Active</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 mt-2 text-center">
              <div className="bg-slate-900/60 p-1.5 rounded-lg border border-slate-800">
                <div className="text-xs font-bold text-white">12</div>
                <div className="text-[9px] text-slate-400">Sent</div>
              </div>
              <div className="bg-slate-900/60 p-1.5 rounded-lg border border-slate-800">
                <div className="text-xs font-bold text-amber-400">4</div>
                <div className="text-[9px] text-slate-400">In Review</div>
              </div>
              <div className="bg-slate-900/60 p-1.5 rounded-lg border border-slate-800">
                <div className="text-xs font-bold text-emerald-400">2</div>
                <div className="text-[9px] text-slate-400">Interview</div>
              </div>
            </div>
          </div>

          {/* 4. Interview Readiness Card */}
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/70 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                Interview Readiness
              </span>
              <span className="text-xs font-bold text-amber-400">76%</span>
            </div>
            <div className="w-full h-2 bg-slate-700/60 rounded-full overflow-hidden mb-2">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "76%" }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="h-full bg-gradient-to-r from-amber-500 to-indigo-500 rounded-full"
              />
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>STAR Stories Prepared</span>
              <span className="text-slate-300 font-medium">4 / 5 Complete</span>
            </div>
          </div>
        </div>

        {/* Bottom Strategy Status Strip */}
        <div className="p-3 rounded-xl bg-gradient-to-r from-blue-950/40 via-indigo-950/40 to-slate-900/60 border border-blue-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md bg-blue-600/20 text-blue-400 flex items-center justify-center">
              <Zap className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-slate-200">
                Current Strategy:
              </span>
              <span className="text-[11px] text-blue-400 font-medium ml-1.5">
                Targeted Outreach & Portfolio Alignment
              </span>
            </div>
          </div>
          <span className="text-[10px] text-slate-400 font-mono">
            UPDATED WEEKLY
          </span>
        </div>
      </motion.div>

      {/* Floating Decorative Mini Card 1 (Top Right) */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="hidden sm:flex absolute -top-5 -right-5 items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-xl backdrop-blur-md z-10"
      >
        <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
          <CheckCircle2 className="w-3.5 h-3.5" />
        </div>
        <div>
          <div className="text-[10px] font-bold text-white">ATS Optimized</div>
          <div className="text-[9px] text-slate-400">94% Compatibility</div>
        </div>
      </motion.div>

      {/* Floating Decorative Mini Card 2 (Bottom Left) */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="hidden sm:flex absolute -bottom-5 -left-5 items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-xl backdrop-blur-md z-10"
      >
        <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
          <Sparkles className="w-3.5 h-3.5" />
        </div>
        <div>
          <div className="text-[10px] font-bold text-white">1-on-1 Prep</div>
          <div className="text-[9px] text-slate-400">STAR Methodology Active</div>
        </div>
      </motion.div>

      {/* Floating Decorative Mini Card 3 (Bottom Right) */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="hidden md:flex absolute bottom-8 -right-8 items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-xl backdrop-blur-md z-10"
      >
        <div className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
        <span className="text-[10px] font-medium text-slate-300">
          Continuous Refinement
        </span>
      </motion.div>
    </div>
  );
}
