import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  UserCheck, 
  Sparkles, 
  Award, 
  FileText, 
  Send, 
  Layers, 
  Compass, 
  TrendingUp, 
  Crosshair, 
  MessageSquareCheck, 
  ArrowRight 
} from 'lucide-react';
import { audienceData } from '../data/siteData';

const romanNumerals = ['I', 'II', 'III', 'IV'];

function PersonaVectorFlow({ personaNumber }) {
  const chains = {
    "01": {
      nodes: [
        { label: "Graduation", icon: GraduationCap },
        { label: "Profile", icon: UserCheck },
        { label: "Placement", icon: Sparkles }
      ]
    },
    "02": {
      nodes: [
        { label: "Degree", icon: Award },
        { label: "Portfolio", icon: FileText },
        { label: "Advocacy", icon: Send }
      ]
    },
    "03": {
      nodes: [
        { label: "Skills", icon: Layers },
        { label: "Positioning", icon: Compass },
        { label: "Elevation", icon: TrendingUp }
      ]
    },
    "04": {
      nodes: [
        { label: "Strategy", icon: Crosshair },
        { label: "Interviews", icon: MessageSquareCheck },
        { label: "Offers", icon: Award }
      ]
    }
  };

  const chain = chains[personaNumber] || chains["01"];

  return (
    <div className="py-3 px-3.5 bg-[#FAF7F2] border border-[#E8E2D8] my-4">
      <div className="flex items-center justify-between">
        {chain.nodes.map((node, i) => {
          const NodeIcon = node.icon;
          return (
            <div key={node.label} className="flex items-center gap-2">
              <div className="flex flex-col items-center">
                <div className="w-7 h-7 border border-[#E8E2D8] bg-white flex items-center justify-center text-[#142F23]">
                  <NodeIcon className="w-3.5 h-3.5 text-[#142F23]" />
                </div>
                <span className="text-[9px] text-[#556059] uppercase tracking-wider mt-1.5 font-medium">
                  {node.label}
                </span>
              </div>
              {i < chain.nodes.length - 1 && (
                <div className="flex items-center pb-3">
                  <ArrowRight className="w-3 h-3 text-[#C36B4E]" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function AudienceStory() {
  return (
    <section
      id="audience"
      className="relative min-h-[85svh] w-full bg-[#FAF7F2] text-[#1F2421] py-24 sm:py-32 flex flex-col justify-center border-b border-[#E8E2D8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#E8E2D8] bg-[#FBF9F5] text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#142F23] mb-6">
            <span className="w-1.5 h-1.5 bg-[#C36B4E]" />
            <span>Candidate Inflection Points</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#142F23] leading-[1.12]">
            Distinguished Candidates <br />
            <span className="italic font-serif text-[#C36B4E]">We Counsel & Propel.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#556059] mt-5 max-w-xl font-light leading-relaxed">
            Whether currently enrolled, recently graduated, or navigating an early career crossroads, our bespoke advisory adapts to your exact professional juncture.
          </p>
        </div>

        {/* Persona Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audienceData.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-7 md:p-8 bg-white border border-[#E8E2D8] hover:border-[#142F23] transition-colors duration-300 flex flex-col justify-between group shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
            >
              <div>
                {/* Top Number */}
                <div className="flex items-center justify-between border-b border-[#E8E2D8] pb-3.5 mb-5">
                  <span className="font-serif text-2xl font-light text-[#142F23]">
                    {romanNumerals[idx] || idx + 1}
                  </span>
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-semibold text-[#C36B4E]">
                    Advisory Cohort
                  </span>
                </div>

                {/* Persona Title */}
                <h3 className="text-xl font-serif font-normal text-[#142F23] tracking-tight mb-1">
                  {item.persona}
                </h3>

                <p className="text-[11px] font-sans font-medium text-[#142F23] uppercase tracking-wider mb-2">
                  {item.context}
                </p>

                {/* Micro Flow Sequence */}
                <PersonaVectorFlow personaNumber={item.number} />

                <p className="text-sm font-serif italic text-[#142F23] mb-3 leading-snug">
                  "{item.headline}"
                </p>

                <p className="text-xs sm:text-sm text-[#556059] leading-relaxed mb-6 font-light">
                  {item.description}
                </p>
              </div>

              {/* Relevant Services */}
              <div className="pt-4 border-t border-[#E8E2D8]">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C36B4E] block mb-2.5 font-semibold">
                  Recommended Practice
                </span>
                <div className="space-y-2">
                  {item.relevantServices.map((serviceName, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs font-sans text-[#1F2421]">
                      <span className="w-1 h-1 bg-[#142F23]" />
                      <span className="font-medium">{serviceName}</span>
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
