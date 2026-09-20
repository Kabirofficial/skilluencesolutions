import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  Target, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  Quote,
  Eye,
  Award
} from 'lucide-react';
import { sahilJesaniStory } from '../data/siteData';

export default function WhoAreWePage() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  // 3D Parallax Transforms
  const heroRotateX = useTransform(smoothProgress, [0, 0.25], [0, 18]);
  const heroScale = useTransform(smoothProgress, [0, 0.25], [1, 0.92]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.25], [1, 0.35]);

  const sahilCardRotateY = useTransform(smoothProgress, [0.15, 0.45], [-12, 0]);
  const sahilCardScale = useTransform(smoothProgress, [0.15, 0.45], [0.88, 1]);
  const sahilCardTranslateZ = useTransform(smoothProgress, [0.15, 0.45], [-50, 20]);

  const frustrationRotate = useTransform(smoothProgress, [0.4, 0.65], [-10, 0]);
  const happinessRotate = useTransform(smoothProgress, [0.4, 0.65], [10, 0]);
  const bridgeScale = useTransform(smoothProgress, [0.4, 0.65], [0.92, 1]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#25283D] text-[#FAF8F2] pt-24 pb-20 overflow-x-hidden [perspective:1200px]">
      
      {/* 1. 3D HERO BANNER WITH SCROLL TILT */}
      <motion.section 
        style={{ rotateX: heroRotateX, scale: heroScale, opacity: heroOpacity }}
        className="relative py-12 sm:py-20 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-transform will-change-transform"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D96C4A]/15 border border-[#D96C4A]/40 text-[#D96C4A] text-xs font-bold uppercase tracking-widest mb-6 shadow-lg shadow-[#D96C4A]/10">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Soul Behind The Brand</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tight text-[#FAF8F2] mb-6 leading-tight">
          Who Are We?
        </h1>

        <p className="text-sm sm:text-lg md:text-xl text-[#F3EFE6] max-w-2xl mx-auto leading-relaxed px-2">
          We are not a cold algorithm or a faceless agency. We are a human collective of recruiters and advocates united by one mission: <strong className="text-[#D96C4A]">building a bridge from frustration to happiness.</strong>
        </p>

        {/* 3D Scroll Down Hint */}
        <div className="mt-8 flex flex-col items-center justify-center gap-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#A8B09A]">
            Scroll down for 3D Story
          </span>
          <div className="w-5 h-8 rounded-full border-2 border-[#D96C4A] flex items-start justify-center p-1">
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-[#D96C4A]"
            />
          </div>
        </div>
      </motion.section>

      {/* 2. THE MAN WITH A DREAM: SAHIL JESANI (3D FLOATING PARALLAX STAGE) */}
      <section className="py-12 sm:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            style={{ 
              rotateY: sahilCardRotateY, 
              scale: sahilCardScale,
              z: sahilCardTranslateZ
            }}
            className="p-6 sm:p-12 lg:p-16 rounded-3xl bg-[#1C1E2E] border border-[#68705A]/50 shadow-2xl relative overflow-hidden transition-transform duration-300"
          >
            {/* Background 3D Ambient Lighting */}
            <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-br from-[#D96C4A]/15 to-transparent rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
              
              {/* Founder Image in 3D Card Frame */}
              <div className="lg:col-span-5">
                <motion.div 
                  whileHover={{ scale: 1.02, rotateZ: 0.5 }}
                  className="relative rounded-3xl overflow-hidden border-2 border-[#D96C4A] shadow-2xl shadow-[#D96C4A]/20 group"
                >
                  <img 
                    src="/images/sahil-jesani.jpg" 
                    alt="Sahil Jesani - Founder of Skilluence Solutions"
                    className="w-full h-80 sm:h-[440px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1E2E] via-[#1C1E2E]/20 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-xs font-mono font-bold text-[#D96C4A] uppercase tracking-widest block mb-1">
                      Founder & Chief Dreamer
                    </span>
                    <h3 className="text-2xl font-black text-[#FAF8F2]">
                      Sahil Jesani
                    </h3>
                    <p className="text-xs text-[#F3EFE6] mt-1">
                      The Architect of the Career Bridge
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Founder Backstory in 3D Layered Cards */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D96C4A]/15 text-[#D96C4A] text-xs font-mono font-bold uppercase tracking-wider">
                  The Man With A Dream
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#FAF8F2] tracking-tight leading-tight">
                  "I refused to accept that career heartbreak was the only option."
                </h2>

                <div className="p-6 rounded-2xl bg-[#25283D] border border-[#68705A]/60 text-[#FAF8F2] italic font-serif leading-relaxed text-sm sm:text-base shadow-inner">
                  <Quote className="w-7 h-7 text-[#D96C4A] mb-3" />
                  "{sahilJesaniStory.quote}"
                </div>

                <div className="space-y-4 text-xs sm:text-sm md:text-base text-[#F3EFE6] leading-relaxed font-normal">
                  {sahilJesaniStory.narrative.map((paragraph, pIdx) => (
                    <p key={pIdx}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* 3D Milestone Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#68705A]/40">
                  {sahilJesaniStory.milestones.map((m, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ translateY: -3 }}
                      className="p-3.5 rounded-2xl bg-[#25283D] border border-[#68705A]/60 text-center shadow-md"
                    >
                      <div className="text-xs sm:text-sm font-black text-[#D96C4A]">{m.val}</div>
                      <div className="text-[9px] sm:text-[10px] text-[#A8B09A] mt-1 font-medium">{m.label}</div>
                    </motion.div>
                  ))}
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. 3D SCROLL BRIDGE COMPARISON: FRUSTRATION VS HAPPINESS */}
      <section className="py-16 sm:py-24 bg-[#1C1E2E] border-t border-b border-[#68705A]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D96C4A]">
              Dynamic 3D Transformation
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#FAF8F2] mt-2 mb-3">
              What Crossing The Bridge Looks Like
            </h2>
            <p className="text-xs sm:text-sm text-[#F3EFE6]">
              As you scroll down, watch how the chaos of the old job hunt aligns into structured happiness.
            </p>
          </div>

          <motion.div 
            style={{ scale: bridgeScale }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* The State of Frustration (3D Left Tilt) */}
            <motion.div 
              style={{ rotateY: frustrationRotate }}
              className="p-6 sm:p-8 rounded-3xl bg-[#25283D] border border-red-500/30 shadow-2xl transition-transform"
            >
              <div className="flex items-center gap-2.5 text-red-400 text-xs font-mono font-bold uppercase tracking-widest mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400 animate-ping"></span>
                <span>The State of Frustration (Before Skilluence)</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#FAF8F2] mb-4">
                What Candidates Endure Alone:
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-[#F3EFE6]">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Sending 300+ resumes blindly into online portals and receiving zero human responses.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Predatory placement agencies demanding huge upfront fees with no refund assurance.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Struggling through interview rounds with no mock practice, feedback, or coaching.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Anxiety, impostor syndrome, and burning out in isolation.</span>
                </li>
              </ul>
            </motion.div>

            {/* The State of Happiness (3D Right Tilt into Alignment) */}
            <motion.div 
              style={{ rotateY: happinessRotate }}
              className="p-6 sm:p-8 rounded-3xl bg-[#25283D] border border-[#D96C4A] shadow-2xl shadow-[#D96C4A]/15 transition-transform"
            >
              <div className="flex items-center gap-2.5 text-[#D96C4A] text-xs font-mono font-bold uppercase tracking-widest mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D96C4A] animate-pulse"></span>
                <span>The State of Happiness (With Skilluence)</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#FAF8F2] mb-4">
                The Bridge You Walk Across:
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-[#FAF8F2]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D96C4A] shrink-0 mt-0.5" />
                  <span><strong>Active recruiter scheduling:</strong> Direct submissions to verified hiring managers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D96C4A] shrink-0 mt-0.5" />
                  <span><strong>SLA Refund Assurance:</strong> Clear terms that protect you, not exploitative contracts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D96C4A] shrink-0 mt-0.5" />
                  <span><strong>Mock interview mastery:</strong> Realistic STAR coaching until you walk in brimming with poise.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D96C4A] shrink-0 mt-0.5" />
                  <span><strong>Full-time career stability:</strong> Fulfilling compensation with reputable organizations.</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* 4. OUR CORE GUIDING VALUES (3D Interactive Cards) */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D96C4A]">
              Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#FAF8F2] mt-2 mb-3">
              The Values Sahil Jesani Built Us On
            </h2>
            <p className="text-xs sm:text-sm text-[#F3EFE6]">
              Every recruiter, coordinator, and coach on our team is held to these non-negotiable standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              whileHover={{ y: -6, rotateX: 4 }}
              className="p-6 rounded-3xl bg-[#1C1E2E] border border-[#68705A]/50 hover:border-[#D96C4A] transition-all shadow-xl"
            >
              <Heart className="w-8 h-8 text-[#D96C4A] mb-4" />
              <h4 className="text-base font-bold text-[#FAF8F2] mb-2">Radical Empathy</h4>
              <p className="text-xs text-[#F3EFE6] leading-relaxed">
                We remember the human being behind every resume. We treat your career journey with dignity and deep personal care.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -6, rotateX: 4 }}
              className="p-6 rounded-3xl bg-[#1C1E2E] border border-[#68705A]/50 hover:border-[#D96C4A] transition-all shadow-xl"
            >
              <Target className="w-8 h-8 text-[#A8B09A] mb-4" />
              <h4 className="text-base font-bold text-[#FAF8F2] mb-2">Relentless Advocacy</h4>
              <p className="text-xs text-[#F3EFE6] leading-relaxed">
                Our recruiters do not sit back and wait. We actively pitch your profile, chase interviews, and negotiate on your behalf.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -6, rotateX: 4 }}
              className="p-6 rounded-3xl bg-[#1C1E2E] border border-[#68705A]/50 hover:border-[#D96C4A] transition-all shadow-xl"
            >
              <ShieldCheck className="w-8 h-8 text-[#D96C4A] mb-4" />
              <h4 className="text-base font-bold text-[#FAF8F2] mb-2">SLA Accountability</h4>
              <p className="text-xs text-[#F3EFE6] leading-relaxed">
                We believe in mutual accountability. If we fail to deliver against our agreed SLA terms, our refund policy stands behind you.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -6, rotateX: 4 }}
              className="p-6 rounded-3xl bg-[#1C1E2E] border border-[#68705A]/50 hover:border-[#D96C4A] transition-all shadow-xl"
            >
              <Compass className="w-8 h-8 text-[#A8B09A] mb-4" />
              <h4 className="text-base font-bold text-[#FAF8F2] mb-2">Long-Term Impact</h4>
              <p className="text-xs text-[#F3EFE6] leading-relaxed">
                We focus strictly on stable full-time placements that unlock lifelong fulfillment and wealth generation.
              </p>
            </motion.div>
          </div>

          {/* Invitation Box */}
          <div className="mt-12 sm:mt-16 p-6 sm:p-12 rounded-3xl bg-[#1C1E2E] border border-[#68705A]/50 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#FAF8F2] mb-2 text-center sm:text-left">
                Have a question for Sahil Jesani?
              </h3>
              <p className="text-xs sm:text-sm text-[#F3EFE6] text-center sm:text-left">
                Sahil and our leadership team regularly consult directly with candidates and employers.
              </p>
            </div>
            <Link
              to="/contact"
              className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full bg-[#D96C4A] hover:bg-[#A95245] text-[#FAF8F2] font-black text-xs shadow-lg shadow-[#D96C4A]/25 hover:scale-105 transition-transform shrink-0"
            >
              Get In Touch With Sahil
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
