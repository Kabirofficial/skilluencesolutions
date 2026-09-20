import { motion } from 'framer-motion';
import { ShieldCheck, HeartHandshake, FileCheck, Compass } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function PhilosophySection() {
  const pillars = [
    {
      title: "No Employment Guarantees",
      description: "We never claim '100% placement' or manufacture artificial hiring statistics. We respect your intelligence: final hiring decisions are always made by independent employers, but our preparation ensures you walk into every hiring stage at your absolute highest capability.",
      icon: <ShieldCheck className="w-5 h-5 text-sp-ink" />
    },
    {
      title: "Human Mentorship Over Bots",
      description: "Automated resume scanners and AI text generators have made the job market noisier, not better. We provide genuine, nuanced human evaluation: real feedback from professionals who understand the nuances of talent screening.",
      icon: <HeartHandshake className="w-5 h-5 text-sp-ink" />
    },
    {
      title: "Actionable Document Standards",
      description: "We don't merely point out what's wrong with your CV—we actively rebuild it alongside you, teaching you the mechanics of quantified accomplishments, technical positioning, and clean typography.",
      icon: <FileCheck className="w-5 h-5 text-sp-ink" />
    },
    {
      title: "Long-Term Strategic Agency",
      description: "Our goal is not just helping you land your next opportunity, but equipping you with lifelong career habits: disciplined application workflows, strategic networking, and interview composure that serve your entire career.",
      icon: <Compass className="w-5 h-5 text-sp-ink" />
    }
  ];

  return (
    <section
      id="about"
      className="relative min-h-[100svh] w-full bg-sp-white text-sp-ink py-20 sm:py-28 lg:py-32 flex flex-col justify-center border-b border-sp-lightGray overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-offWhite border border-sp-lightGray text-[11px] font-mono uppercase tracking-widest text-sp-charcoal mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
            <span>AUTHENTIC ETHOS / 09</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-sp-ink leading-tight">
            {siteConfig.philosophyTitle}
          </h2>
          <p className="text-base sm:text-lg text-sp-midGray mt-4 max-w-2xl font-normal">
            {siteConfig.philosophySubtitle}
          </p>
        </div>

        {/* Core Manifesto Card */}
        <div className="mb-14 p-8 sm:p-12 rounded-card bg-sp-offWhite border border-sp-lightGray">
          <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-sp-ink italic leading-relaxed max-w-4xl font-normal">
            "{siteConfig.philosophyStatement}"
          </p>
          <div className="mt-6 pt-6 border-t border-sp-lightGray flex items-center justify-between text-xs font-mono text-sp-midGray">
            <span className="font-bold text-sp-ink uppercase">SKILLUENCE SOLUTIONS MANIFESTO</span>
            <span>TRANSPARENT ADVISORY</span>
          </div>
        </div>

        {/* 4 Foundational Commitments */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-card bg-sp-white border border-sp-lightGray hover:border-sp-ink transition-all flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="w-10 h-10 rounded-btn border border-sp-lightGray bg-sp-offWhite flex items-center justify-center mb-5">
                  {pillar.icon}
                </div>

                <h3 className="text-lg font-bold text-sp-ink mb-3">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-sp-midGray leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-sp-lightGray text-[10px] font-mono text-sp-midGray uppercase">
                COMMITMENT 0{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
