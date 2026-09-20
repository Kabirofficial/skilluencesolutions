import { useState, useRef } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { FileText, User, Send, CheckCircle2, ArrowUpRight, Compass } from 'lucide-react';
import useReducedMotion from '../hooks/useReducedMotion';

export default function CareerScene() {
  const containerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const prefersReducedMotion = useReducedMotion();

  // Mouse coordinate springs for physical 3D tilt
  const mouseX = useSpring(0, { stiffness: 120, damping: 18 });
  const mouseY = useSpring(0, { stiffness: 120, damping: 18 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [14, -14]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-18, 18]);

  const handlePointerMove = (e) => {
    if (prefersReducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handlePointerLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHoveredIndex(null);
  };

  const cards = [
    {
      id: 'profile',
      number: '01',
      title: 'Profile Architecture',
      tag: 'IDENTITY',
      icon: <User className="w-3.5 h-3.5 text-sp-charcoal" />,
      detail: 'Personal narrative • Core positioning • Capstone mapping',
      zOffset: 45,
      yOffset: -75,
      xOffset: -25,
      tilt: -2,
    },
    {
      id: 'resume',
      number: '02',
      title: 'Executive ATS Resume',
      tag: 'DOCUMENT',
      icon: <FileText className="w-3.5 h-3.5 text-sp-charcoal" />,
      detail: 'Quantified impact bullets • 100% ATS readability • Clean hierarchy',
      zOffset: 95,
      yOffset: -10,
      xOffset: 15,
      tilt: 1.5,
      isPrimary: true,
    },
    {
      id: 'applications',
      number: '03',
      title: 'Targeted Applications',
      tag: 'OUTREACH',
      icon: <Send className="w-3.5 h-3.5 text-sp-charcoal" />,
      detail: 'High-fit company tiering • Precision cover notes • Pipeline tracking',
      zOffset: 140,
      yOffset: 60,
      xOffset: -15,
      tilt: -1.5,
    },
    {
      id: 'interview',
      number: '04',
      title: 'Interview Composure',
      tag: 'READINESS',
      icon: <CheckCircle2 className="w-3.5 h-3.5 text-sp-charcoal" />,
      detail: 'STAR framework • 1-on-1 simulations • Offer negotiation',
      zOffset: 185,
      yOffset: 130,
      xOffset: 20,
      tilt: 2,
    }
  ];

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative w-full h-[440px] sm:h-[500px] lg:h-[560px] flex items-center justify-center perspective-container select-none touch-none"
      aria-label="Interactive 3D Career Progression Object"
    >
      {/* Monochromatic Career Path (SVG Ribbon Curve) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 180,90 C 220,170 380,210 340,320 C 300,430 430,480 390,540"
          stroke="#B3B3B3"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <circle cx="180" cy="90" r="3.5" fill="#2B2B2B" />
        <circle cx="340" cy="320" r="3.5" fill="#2B2B2B" />
        <circle cx="390" cy="540" r="3.5" fill="#2B2B2B" />
      </svg>

      {/* 3D Transform Pivot Layer */}
      <motion.div
        style={{
          rotateX: prefersReducedMotion ? 0 : rotateX,
          rotateY: prefersReducedMotion ? 0 : rotateY,
        }}
        className="relative w-full max-w-[340px] sm:max-w-[400px] h-full flex items-center justify-center preserve-3d"
      >
        {cards.map((card, idx) => {
          const isHovered = hoveredIndex === idx;
          return (
            <motion.div
              key={card.id}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{
                z: card.zOffset + (isHovered ? 25 : 0),
                y: card.yOffset + (isHovered ? -8 : 0),
                x: card.xOffset,
                rotateZ: card.tilt,
                scale: isHovered ? 1.03 : 1,
              }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className={`absolute w-[290px] sm:w-[350px] p-5 sm:p-6 rounded-card border transition-colors duration-200 cursor-pointer ${
                card.isPrimary
                  ? 'bg-sp-white border-sp-ink shadow-2xl z-30 ring-1 ring-sp-ink/10'
                  : 'bg-sp-offWhite border-sp-lightGray shadow-xl'
              } ${isHovered ? 'border-sp-ink shadow-2xl' : ''}`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-sp-lightGray pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded border border-sp-lightGray flex items-center justify-center bg-sp-white">
                    {card.icon}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-sp-charcoal">
                    {card.number} • {card.tag}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-sp-midGray">
                  <span>STAGE 0{idx + 1}</span>
                  <ArrowUpRight className="w-3 h-3 text-sp-charcoal" />
                </div>
              </div>

              {/* Card Title & Content */}
              <h3 className="text-sm sm:text-base font-extrabold text-sp-ink tracking-tight mb-1.5">
                {card.title}
              </h3>
              <p className="text-xs text-sp-midGray leading-relaxed mb-3">
                {card.detail}
              </p>

              {/* Structured Checklist Preview */}
              <div className="pt-2 border-t border-sp-lightGray/60 flex items-center justify-between text-[10px] font-mono text-sp-charcoal">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
                  Structured Progression
                </span>
                <span className="text-sp-midGray uppercase">Active Path</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Ambient Micro-Interaction Caption */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-white/90 border border-sp-lightGray shadow-sm text-[10px] font-mono uppercase tracking-widest text-sp-midGray pointer-events-none backdrop-blur-sm">
        <Compass className="w-3 h-3 text-sp-ink" />
        <span>3D Career Progression • Interactive Tilt</span>
      </div>
    </div>
  );
}
