import { motion } from 'framer-motion';
import { ShieldCheck, HeartHandshake, FileCheck, Compass } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function PhilosophySection() {
  const pillars = [
    {
      title: "No Employment Guarantees",
      description: "We never claim '100% placement' or manufacture artificial hiring statistics. We respect your intelligence: final hiring decisions are always made by independent employers, but our preparation ensures you walk into every hiring stage at your absolute highest capability.",
      icon: <ShieldCheck className="w-5 h-5 text-[#142F23]" />
    },
    {
      title: "Human Mentorship Over Bots",
      description: "Automated resume scanners and AI text generators have made the job market noisier, not better. We provide genuine, nuanced human evaluation: real feedback from professionals who understand the nuances of talent screening.",
      icon: <HeartHandshake className="w-5 h-5 text-[#142F23]" />
    },
    {
      title: "Actionable Document Standards",
      description: "We don't merely point out what's wrong with your CV—we actively rebuild it alongside you, teaching you the mechanics of quantified accomplishments, technical positioning, and clean typography.",
      icon: <FileCheck className="w-5 h-5 text-[#142F23]" />
    },
    {
      title: "Long-Term Strategic Agency",
      description: "Our goal is not just helping you land your next opportunity, but equipping you with lifelong career habits: disciplined application workflows, strategic networking, and interview composure that serve your entire career.",
      icon: <Compass className="w-5 h-5 text-[#142F23]" />
    }
  ];

  return (
    <section
      id="about"
      className="relative min-h-[85svh] w-full bg-[#FAF7F2] text-[#1F2421] py-20 sm:py-28 lg:py-32 flex flex-col justify-center border-b border-[#E8E2D8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#E8E2D8] bg-[#FBF9F5] text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#142F23] mb-6">
            <span className="w-1.5 h-1.5 bg-[#C36B4E]" />
            <span>Authentic Ethos & Practice</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#142F23] leading-[1.12]">
            Built around <span className="italic font-serif text-[#C36B4E]">real career challenges.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#556059] mt-5 max-w-2xl font-light leading-relaxed">
            {siteConfig.philosophySubtitle}
          </p>
        </div>

        {/* Core Manifesto Card */}
        <div className="mb-14 p-6 sm:p-10 lg:p-14 bg-white border border-[#E8E2D8] shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#142F23] italic leading-relaxed max-w-4xl font-normal">
            "{siteConfig.philosophyStatement}"
          </p>
          <div className="mt-8 pt-6 border-t border-[#E8E2D8] flex items-center justify-between text-xs font-sans text-[#556059]">
            <span className="font-semibold text-[#142F23] tracking-wider uppercase text-[11px]">Skilluence Solutions Manifesto</span>
            <span className="tracking-widest uppercase text-[10px] text-[#C36B4E] font-medium">Transparent Advisory</span>
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
              className="p-7 md:p-8 bg-white border border-[#E8E2D8] hover:border-[#142F23] transition-colors duration-300 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
            >
              <div>
                <div className="w-10 h-10 border border-[#E8E2D8] bg-[#FAF7F2] flex items-center justify-center mb-6">
                  {pillar.icon}
                </div>

                <h3 className="text-lg font-serif font-normal text-[#142F23] mb-3">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#556059] leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E8E2D8] text-[10px] font-sans tracking-[0.2em] text-[#C36B4E] font-semibold uppercase">
                Commitment 0{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
