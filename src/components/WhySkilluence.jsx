import { motion } from 'framer-motion';
import { CheckCircle2, ArrowDown, Sparkles, Shield, Compass, Target } from 'lucide-react';
import { whyFeatures, pipelineStages } from '../data/siteData';

export default function WhySkilluence() {
  return (
    <section id="why-skilluence" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tag */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-indigo-100">
            Why Skilluence
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Career support built around you.
          </h2>
        </div>

        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Bold Statement & Brand Philosophy */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-lg">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
                "You don't need more generic advice.{' '}
                <span className="text-blue-600 block mt-1">
                  You need a strategy built around your goals."
                </span>
              </h3>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Many students complete their education with the qualifications they need, yet still struggle to secure the right opportunity. The challenge isn't always a lack of ability — sometimes it's knowing how to present your skills, where to look, how to apply, and how to prepare.
                </p>
                <p>
                  Skilluence Solutions was created to make professional career support more accessible. Instead of relying on large upfront costs or empty placement promises, we focus on reasonable, transparent, and practical support designed around each individual's career goals.
                </p>
              </div>

              {/* Mini Metric Tag */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Student-First Model</span>
                <span>Practical & Personalized</span>
              </div>
            </div>

            {/* Feature Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyFeatures.map((feat, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-slate-200/70 shadow-sm flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 mb-0.5">{feat.title}</h4>
                    <p className="text-[11px] text-slate-500 leading-snug">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Progressive Career Pipeline */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl relative">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 font-semibold block">
                    THE TRANSFORMATION FUNNEL
                  </span>
                  <h4 className="text-lg font-bold text-white mt-1">
                    Structured Pipeline Progression
                  </h4>
                </div>
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                  <Target className="w-4 h-4 text-blue-400" />
                </div>
              </div>

              {/* Vertical Pipeline Steps */}
              <div className="space-y-3 relative">
                {pipelineStages.map((stage, idx) => (
                  <div key={stage.label} className="relative">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/70 hover:border-blue-500/50 hover:bg-slate-800 transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="text-xs font-mono font-bold w-6 h-6 rounded-md bg-slate-700 flex items-center justify-center text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          0{idx + 1}
                        </span>
                        <div>
                          <span className="text-sm font-bold text-white tracking-wide block">
                            {stage.label}
                          </span>
                          <span className="text-xs text-slate-400">
                            {stage.desc}
                          </span>
                        </div>
                      </div>

                      <span className="text-[10px] uppercase tracking-wider font-mono text-blue-400 opacity-80 group-hover:opacity-100">
                        Phase 0{idx + 1}
                      </span>
                    </motion.div>

                    {/* Arrow down between items */}
                    {idx < pipelineStages.length - 1 && (
                      <div className="flex justify-center my-1 text-slate-600">
                        <ArrowDown className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 text-[11px] text-slate-400 text-center">
                Empowering candidates with clarity and strategy at every touchpoint.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
