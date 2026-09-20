import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { audienceData } from '../data/siteData';

export default function AudienceStory() {
  return (
    <section
      id="audience"
      className="relative min-h-[100svh] w-full bg-sp-offWhite text-sp-ink py-20 sm:py-28 lg:py-32 flex flex-col justify-center border-b border-sp-lightGray overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-white border border-sp-lightGray text-[11px] font-mono uppercase tracking-widest text-sp-charcoal mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
            <span>AUDIENCE PERSONAS / 08</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-sp-ink leading-tight">
            Who We Help.
          </h2>
          <p className="text-base sm:text-lg text-sp-midGray mt-4 max-w-xl font-normal">
            Whether currently enrolled, recently graduated, or navigating an early career crossroads, our support adapts to your exact inflection point.
          </p>
        </div>

        {/* Horizontal Editorial Persona Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audienceData.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="p-6 sm:p-8 rounded-card bg-sp-white border border-sp-lightGray hover:border-sp-ink transition-all duration-300 flex flex-col justify-between shadow-sm group"
            >
              <div>
                {/* Top Number */}
                <div className="flex items-center justify-between border-b border-sp-lightGray pb-4 mb-6">
                  <span className="font-mono text-3xl sm:text-4xl font-black text-sp-charcoal group-hover:text-sp-ink transition-colors">
                    {item.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-sp-midGray">
                    PERSONA
                  </span>
                </div>

                {/* Persona Title */}
                <h3 className="text-xl sm:text-2xl font-black text-sp-ink tracking-tight uppercase mb-2">
                  {item.persona}
                </h3>

                <p className="text-xs font-semibold text-sp-midGray uppercase font-mono mb-4">
                  {item.context}
                </p>

                <p className="text-sm font-bold text-sp-charcoal mb-3 leading-snug">
                  "{item.headline}"
                </p>

                <p className="text-xs sm:text-sm text-sp-midGray leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Relevant Services */}
              <div className="pt-4 border-t border-sp-lightGray">
                <span className="text-[10px] font-mono uppercase tracking-wider text-sp-midGray block mb-2 font-bold">
                  RECOMMENDED SERVICES
                </span>
                <div className="space-y-1.5">
                  {item.relevantServices.map((serviceName, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs font-mono text-sp-charcoal">
                      <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
                      <span>{serviceName}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
