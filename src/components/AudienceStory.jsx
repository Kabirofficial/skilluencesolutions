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

// Tiny editorial monochrome vector diagrams for each persona
function PersonaVectorFlow({ personaNumber }) {
  const chains = {
    "01": {
      nodes: [
        { label: "Graduation", icon: GraduationCap },
        { label: "Profile", icon: UserCheck },
        { label: "Opportunity", icon: Sparkles }
      ]
    },
    "02": {
      nodes: [
        { label: "Degree", icon: Award },
        { label: "Resume", icon: FileText },
        { label: "Applications", icon: Send }
      ]
    },
    "03": {
      nodes: [
        { label: "Skills", icon: Layers },
        { label: "Positioning", icon: Compass },
        { label: "Growth", icon: TrendingUp }
      ]
    },
    "04": {
      nodes: [
        { label: "Strategy", icon: Crosshair },
        { label: "Applications", icon: Send },
        { label: "Interviews", icon: MessageSquareCheck }
      ]
    }
  };

  const chain = chains[personaNumber] || chains["01"];

  return (
    <div className="py-2.5 px-3 rounded-btn bg-sp-offWhite border border-sp-lightGray/80 my-3 font-mono">
      <div className="flex items-center justify-between">
        {chain.nodes.map((node, i) => {
          const NodeIcon = node.icon;
          return (
            <div key={node.label} className="flex items-center gap-1.5">
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded border border-sp-lightGray bg-sp-white flex items-center justify-center text-sp-charcoal">
                  <NodeIcon className="w-3 h-3 text-sp-ink" />
                </div>
                <span className="text-[8px] text-sp-midGray uppercase tracking-tight mt-1 font-bold">
                  {node.label}
                </span>
              </div>
              {i < chain.nodes.length - 1 && (
                <div className="flex items-center text-sp-lightGray pb-3">
                  <ArrowRight className="w-3 h-3 text-sp-gray" />
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
      className="relative min-h-[100svh] w-full bg-sp-offWhite text-sp-ink py-20 sm:py-28 lg:py-32 flex flex-col justify-center border-b border-sp-lightGray overflow-hidden"
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
              className="p-6 sm:p-7 rounded-card bg-sp-white border border-sp-lightGray hover:border-sp-ink transition-all duration-300 flex flex-col justify-between shadow-sm group"
            >
              <div>
                {/* Top Number */}
                <div className="flex items-center justify-between border-b border-sp-lightGray pb-3 mb-4">
                  <span className="font-mono text-2xl sm:text-3xl font-black text-sp-charcoal group-hover:text-sp-ink transition-colors">
                    {item.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-sp-midGray">
                    PERSONA
                  </span>
                </div>

                {/* Persona Title */}
                <h3 className="text-lg sm:text-xl font-black text-sp-ink tracking-tight uppercase mb-1">
                  {item.persona}
                </h3>

                <p className="text-[11px] font-semibold text-sp-midGray uppercase font-mono mb-2">
                  {item.context}
                </p>

                {/* Editorial Micro-Illustration Sequence */}
                <PersonaVectorFlow personaNumber={item.number} />

                <p className="text-xs sm:text-sm font-bold text-sp-charcoal mb-2 leading-snug">
                  "{item.headline}"
                </p>

                <p className="text-xs text-sp-midGray leading-relaxed mb-4 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Relevant Services */}
              <div className="pt-3 border-t border-sp-lightGray">
                <span className="text-[10px] font-mono uppercase tracking-wider text-sp-midGray block mb-1.5 font-bold">
                  RECOMMENDED SERVICES
                </span>
                <div className="space-y-1">
                  {item.relevantServices.map((serviceName, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-1.5 text-xs font-mono text-sp-charcoal">
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
