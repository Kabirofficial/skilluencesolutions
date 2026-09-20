import { useState, useRef } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { FileText, User, Send, CheckCircle2, Award, ArrowUpRight, Compass } from 'lucide-react';
import useReducedMotion from '../hooks/useReducedMotion';

export default function CareerScene() {
  const containerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const prefersReducedMotion = useReducedMotion();

  // Mouse coordinate springs for physical 3D tilt
  const mouseX = useSpring(0, { stiffness: 120, damping: 18 });
  const mouseY = useSpring(0, { stiffness: 120, damping: 18 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-16, 16]);

  const handlePointerMove = (e) => {
    if (e.pointerType === 'touch') return;
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

  // The 5-stage progression: PROFILE -> RESUME -> APPLICATION -> INTERVIEW -> CAREER
  const cards = [
    {
      id: 'profile',
      number: '01',
      title: 'Profile Architecture',
      tag: 'PROFILE',
      icon: <User className="w-3.5 h-3.5 text-sp-charcoal" />,
      detail: 'Personal narrative • Core positioning • Capstone mapping',
      zOffset: 30,
      yOffset: -95,
      xOffset: -20,
      tilt: -2,
    },
    {
      id: 'resume',
      number: '02',
      title: 'Executive ATS Resume',
      tag: 'RESUME',
      icon: <FileText className="w-3.5 h-3.5 text-sp-charcoal" />,
      detail: 'Quantified impact bullets • 100% ATS readability • Clean hierarchy',
      zOffset: 75,
      yOffset: -40,
      xOffset: 12,
      tilt: 1.5,
      isPrimary: true,
    },
    {
      id: 'application',
      number: '03',
      title: 'Targeted Applications',
      tag: 'APPLICATION',
      icon: <Send className="w-3.5 h-3.5 text-sp-charcoal" />,
      detail: 'High-fit company tiering • Precision cover notes • Pipeline discipline',
      zOffset: 120,
      yOffset: 20,
      xOffset: -12,
      tilt: -1.5,
    },
    {
      id: 'interview',
      number: '04',
      title: 'Interview Composure',
      tag: 'INTERVIEW',
      icon: <CheckCircle2 className="w-3.5 h-3.5 text-sp-charcoal" />,
      detail: 'STAR framework drills • 1-on-1 simulations • Composure under pressure',
      zOffset: 160,
      yOffset: 80,
      xOffset: 16,
      tilt: 1.5,
    },
    {
      id: 'career',
      number: '05',
      title: 'Career Readiness',
      tag: 'CAREER',
      icon: <Award className="w-3.5 h-3.5 text-sp-ink" />,
      detail: 'Verified readiness • Long-term trajectory • Competitive positioning',
      zOffset: 200,
      yOffset: 140,
      xOffset: -10,
      tilt: -1,
      isOutcome: true,
    }
  ];

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative w-full h-[460px] sm:h-[520px] lg:h-[580px] flex items-center justify-center perspective-container select-none touch-pan-y"
      aria-label="Interactive 3D Career Progression Object"
    >
      {/* Monochromatic Career Path (Delicate SVG Ribbon Curve) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30 z-0"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 180,70 C 220,150 380,190 340,300 C 300,410 430,460 380,550"
          stroke="#B3B3B3"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <circle cx="180" cy="70" r="3.5" fill="#2B2B2B" />
        <circle cx="340" cy="300" r="3.5" fill="#2B2B2B" />
        <circle cx="380" cy="550" r="3.5" fill="#2B2B2B" />
      </svg>

      {/* 3D Transform Pivot Layer */}
      <motion.div
        style={{
          rotateX: prefersReducedMotion ? 0 : rotateX,
          rotateY: prefersReducedMotion ? 0 : rotateY,
        }}
        className="relative w-full max-w-[320px] sm:max-w-[400px] h-full flex items-center justify-center preserve-3d"
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
                y: card.yOffset + (isHovered ? -6 : 0),
                x: card.xOffset,
                rotateZ: card.tilt,
                scale: isHovered ? 1.03 : 1,
              }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className={`absolute w-[260px] sm:w-[340px] max-w-[calc(100vw-40px)] p-4 sm:p-5 rounded-card border transition-colors duration-200 cursor-pointer ${
                card.isOutcome
                  ? 'bg-sp-white border-sp-ink shadow-2xl z-40 ring-1 ring-sp-ink/10'
                  : card.isPrimary
                    ? 'bg-sp-white border-sp-ink shadow-xl z-30 ring-1 ring-sp-ink/10'
                    : 'bg-sp-offWhite border-sp-lightGray shadow-lg'
              } ${isHovered ? 'border-sp-ink shadow-2xl' : ''}`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-sp-lightGray pb-2 mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded border border-sp-lightGray flex items-center justify-center bg-sp-white">
                    {card.icon}
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase font-bold text-sp-charcoal">
                    {card.number} • {card.tag}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono text-sp-midGray">
                  <span>STAGE 0{idx + 1}</span>
                  <ArrowUpRight className="w-3 h-3 text-sp-charcoal" />
                </div>
              </div>

              {/* Card Title & Content */}
              <h3 className="text-xs sm:text-sm font-extrabold text-sp-ink tracking-tight mb-1">
                {card.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-sp-midGray leading-snug mb-2.5">
                {card.detail}
              </p>

              {/* Status Indicator */}
              <div className="pt-1.5 border-t border-sp-lightGray/60 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-sp-charcoal">
                <span className="flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${card.isOutcome ? 'bg-sp-ink' : 'bg-sp-midGray'}`} />
                  {card.isOutcome ? 'Verified Outcome' : 'Active Milestone'}
                </span>
                <span className="text-sp-midGray uppercase">Step {idx + 1} of 5</span>
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
