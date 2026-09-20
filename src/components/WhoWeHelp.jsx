import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Rocket, UserCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { audiencesData } from '../data/siteData';

export default function WhoWeHelp({ onSelectAudience }) {
  const audienceIcons = [
    <GraduationCap key="1" className="w-6 h-6 text-blue-600" />,
    <Rocket key="2" className="w-6 h-6 text-indigo-600" />,
    <Briefcase key="3" className="w-6 h-6 text-violet-600" />,
    <UserCheck key="4" className="w-6 h-6 text-cyan-600" />
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-100">
            Target Candidates
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
            Who we help.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether you are still in college, recently finished your degree, or seeking to revitalize your job applications, our guidance is tailored to your exact career juncture.
          </p>
        </div>

        {/* 4 Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiencesData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl bg-slate-50 border border-slate-200/80 p-7 flex flex-col justify-between hover:bg-white hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                {/* Top Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-200/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {audienceIcons[idx]}
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-1 rounded-md bg-blue-100/70 text-blue-800">
                    {item.badge}
                  </span>
                </div>

                {/* Persona Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.persona}
                </h3>

                {/* Challenge Section */}
                <div className="mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Primary Challenge:
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.challenge}
                  </p>
                </div>

                {/* How Skilluence Helps */}
                <div className="mb-6 pt-4 border-t border-slate-200/60">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block mb-1">
                    How We Help:
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {item.howSkilluenceHelps}
                  </p>
                </div>

                {/* Key Points */}
                <div className="space-y-1.5 pt-2">
                  {item.keyPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-[11px] text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-200/70">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors"
                >
                  <span>Explore this path</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
