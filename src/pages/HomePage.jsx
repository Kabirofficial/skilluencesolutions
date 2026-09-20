import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Target, 
  Building2, 
  ArrowUpRight 
} from 'lucide-react';
import ThreeBridgeCanvas from '../components/ThreeBridgeCanvas';
import CompanyMarquee from '../components/CompanyMarquee';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import ServicesSection from '../components/ServicesSection';
import ProcessTimeline from '../components/ProcessTimeline';
import SuccessStoriesCarousel from '../components/SuccessStoriesCarousel';
import { 
  differentiators, 
  employerServices, 
  sahilJesaniStory 
} from '../data/siteData';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#25283D] text-[#FAF8F2] overflow-x-hidden">
      
      {/* 1. HERO SECTION (SEQUENTIAL ENTRANCE: LOGO -> HEADLINE -> CTA -> 3D BRIDGE) */}
      <section className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="/images/career-bridge.jpg" 
            alt="Career Bridge Visual" 
            className="w-full h-full object-cover object-center opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#25283D] via-[#25283D]/88 to-[#25283D]/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          
          {/* 1. LOGO ENTRANCE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex flex-col items-center justify-center mb-6"
          >
            <div className="flex items-center gap-3 bg-[#1C1E2E]/92 px-5 py-2.5 rounded-2xl border border-[#68705A] shadow-xl shadow-black/25">
              <img 
                src="/images/logo.png" 
                alt="Skilluence Solutions Logo" 
                className="h-9 sm:h-11 w-auto object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <span className="font-black text-sm sm:text-base tracking-wider text-[#FAF8F2]">
                SKILLUENCE <span className="text-[#D96C4A]">SOLUTIONS</span>
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#D96C4A] uppercase tracking-widest mt-2 font-bold">
              ✦ A bridge from frustration to happiness ✦
            </span>
          </motion.div>

          {/* 2. HEADLINE ENTRANCE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[74px] font-black tracking-tight text-[#FAF8F2] leading-[1.08] max-w-5xl mx-auto mb-5"
          >
            Your Degree Got You Here.{' '}
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FAF8F2] via-[#D96C4A] to-[#A95245]">
              Let's Build Your Dream Career.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-lg md:text-xl text-[#F3EFE6] max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10 font-normal px-2"
          >
            Stop submitting into the void of automated rejections. We connect ambitious job seekers with verified full-time employers through active recruiter scheduling, mock interview drills, and SLA refund assurance.
          </motion.p>

          {/* 3. CTA ENTRANCE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-10 w-full sm:w-auto"
          >
            <Link
              to="/candidates"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-full bg-[#D96C4A] hover:bg-[#A95245] text-[#25283D] font-black text-xs sm:text-sm shadow-xl shadow-[#D96C4A]/25 hover:scale-[1.03] active:scale-[0.98] transition-all"
            >
              <span>Explore Candidate Placement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/employers"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-full bg-[#68705A]/45 border border-[#68705A] hover:border-[#D96C4A] text-[#FAF8F2] font-bold text-xs sm:text-sm hover:bg-[#68705A] transition-all"
            >
              <Building2 className="w-4 h-4 text-[#D96C4A]" />
              <span>Hire Pre-Screened Talent</span>
            </Link>

            <Link
              to="/who-are-we"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-[#F3EFE6] hover:text-[#FAF8F2] text-xs font-semibold hover:bg-[#68705A]/30 transition-all font-mono"
            >
              <span>Meet Sahil Jesani</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D96C4A]" />
            </Link>
          </motion.div>

          {/* 4. 3D BRIDGE CANVAS ENTRANCE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="relative w-full max-w-4xl mx-auto h-64 sm:h-80 md:h-88 rounded-3xl bg-[#1C1E2E]/85 border border-[#68705A]/70 shadow-2xl p-2"
          >
            <ThreeBridgeCanvas className="w-full h-full rounded-2xl" />
          </motion.div>

          {/* Core Trust Strip */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-y-2.5 gap-x-6 sm:gap-x-8 text-[11px] sm:text-xs font-semibold text-[#F3EFE6] font-mono">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#D96C4A]" />
              <span>Full Time Roles Only</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#A8B09A]" />
              <span>SLA Refund Assurance</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Target className="w-4 h-4 text-[#D96C4A]" />
              <span>Zero Portal Spamming</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#A8B09A]" />
              <span>Faster Interview Turnarounds</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. CANDIDATES PLACED IN MARQUEE */}
      <CompanyMarquee />

      {/* 3. PROBLEM SECTION (01 -> 02 -> 03 UPWARD ENTRANCE) */}
      <ProblemSection />

      {/* 4. SOLUTION SECTION (BUILD -> POSITION -> APPLY -> PREPARE CONNECTED BY ORANGE LINE) */}
      <SolutionSection />

      {/* 5. SERVICES BENTO (WITH 3D FLOATING RESUME & 3D LINKEDIN PROFILE CARD) */}
      <ServicesSection />

      {/* 6. HOW IT WORKS (WITH TRAVELING GLOWING #D96C4A LINE) */}
      <ProcessTimeline />

      {/* 7. CANDIDATE TRANSFORMATION CAROUSEL */}
      <section className="py-16 sm:py-24 bg-[#1C1E2E] relative overflow-hidden border-b border-[#68705A]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D96C4A] bg-[#D96C4A]/10 px-3 py-1 rounded-full border border-[#D96C4A]/25">
              Candidate Transformation Carousel
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#FAF8F2] mt-3 sm:mt-4 mb-3 sm:mb-4">
              Real People. Real Placements. Real Happiness.
            </h2>
            <p className="text-xs sm:text-base text-[#F3EFE6]">
              Explore candidate testimonials and how our active recruiter advocacy transformed their career trajectory.
            </p>
          </div>

          <SuccessStoriesCarousel />
        </div>
      </section>

      {/* 8. WHAT MAKES SKILLUENCE DIFFERENT */}
      <section className="py-16 sm:py-24 bg-[#25283D] relative overflow-hidden border-b border-[#68705A]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D96C4A] bg-[#D96C4A]/10 px-3 py-1 rounded-full border border-[#D96C4A]/25">
              Why We Stand Apart
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#FAF8F2] mt-3 sm:mt-4 mb-3 sm:mb-4">
              What Makes Skilluence Solutions Different
            </h2>
            <p className="text-xs sm:text-base text-[#F3EFE6] leading-relaxed">
              We eliminated the predatory, chaotic practices of traditional staffing agencies:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((diff, idx) => (
              <div 
                key={diff.id}
                className="p-6 sm:p-8 rounded-3xl bg-[#1C1E2E] border border-[#68705A]/70 hover:border-[#D96C4A] transition-all duration-300 flex flex-col justify-between shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-[#68705A]">
                      {diff.number}
                    </span>
                    <span className="text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full bg-[#25283D] text-[#D96C4A] border border-[#68705A] font-mono">
                      {diff.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#FAF8F2] mb-3">
                    {diff.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#F3EFE6] leading-relaxed">
                    {diff.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#68705A]/50 text-[10px] sm:text-[11px] text-[#A8B09A] font-mono">
                  SLA VERIFIED COMMITMENT
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FOUNDER SPOTLIGHT: SAHIL JESANI */}
      <section className="py-16 sm:py-24 bg-[#1C1E2E] relative border-b border-[#68705A]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-12 lg:p-16 rounded-3xl bg-[#25283D] border border-[#68705A] shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#D96C4A]/40 shadow-2xl">
                  <img 
                    src="/images/sahil-jesani.jpg" 
                    alt="Sahil Jesani - The Man With A Dream" 
                    className="w-full h-72 sm:h-[380px] lg:h-[400px] object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#25283D] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[11px] font-mono font-bold text-[#D96C4A] uppercase tracking-widest block">
                      Founder & Chief Dreamer
                    </span>
                    <span className="text-lg sm:text-xl font-black text-[#FAF8F2]">
                      Sahil Jesani
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#D96C4A] bg-[#D96C4A]/15 px-3 py-1 rounded-full border border-[#D96C4A]/30">
                  {sahilJesaniStory.subtitle}
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FAF8F2] tracking-tight leading-tight">
                  "I made a promise to build a real human bridge."
                </h2>

                <p className="text-xs sm:text-base text-[#F3EFE6] leading-relaxed">
                  {sahilJesaniStory.narrative[0]}
                </p>

                <p className="text-xs sm:text-base text-[#F3EFE6] leading-relaxed">
                  {sahilJesaniStory.narrative[2]}
                </p>

                <div className="pt-2">
                  <Link
                    to="/who-are-we"
                    className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#D96C4A] hover:bg-[#A95245] text-[#25283D] font-black text-xs shadow-lg shadow-[#D96C4A]/25 hover:scale-105 transition-transform"
                  >
                    <span>Read The Full Story: Who Are We</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 10. FOR EMPLOYERS TEASER SECTION */}
      <section className="py-16 sm:py-24 bg-[#25283D] relative border-b border-[#68705A]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#F3EFE6] bg-[#68705A]/45 px-3 py-1 rounded-full border border-[#68705A]">
                Enterprise & Startup Hiring
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#FAF8F2] mt-3 sm:mt-4 mb-3">
                For Employers: Hire Pre-Screened Talent
              </h2>
              <p className="text-xs sm:text-base text-[#F3EFE6]">
                Meet interview-ready, verified professionals without the delays of conventional headhunting agencies.
              </p>
            </div>

            <Link
              to="/employers"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1C1E2E] border border-[#68705A] hover:border-[#D96C4A] text-[#FAF8F2] text-xs font-bold transition-all shrink-0 w-fit"
            >
              <span>Explore Employer Solutions</span>
              <ArrowRight className="w-4 h-4 text-[#D96C4A]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {employerServices.slice(0, 3).map((serv) => (
              <div 
                key={serv.id}
                className="p-6 sm:p-8 rounded-3xl bg-[#1C1E2E] border border-[#68705A]/70 hover:border-[#D96C4A] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#D96C4A]/15 text-[#D96C4A] flex items-center justify-center mb-4">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#FAF8F2] mb-2">{serv.title}</h3>
                  <p className="text-xs text-[#F3EFE6] leading-relaxed mb-4">{serv.description}</p>
                </div>
                <div className="pt-4 border-t border-[#68705A]/50 text-[11px] font-mono text-[#D96C4A] font-semibold">
                  {serv.metrics}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FINAL INVITATION CTA */}
      <section className="py-16 sm:py-24 bg-[#1C1E2E] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D96C4A]">
            A New Chapter Awaits
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#FAF8F2] mt-3 sm:mt-4 mb-4 sm:mb-6 leading-tight">
            Ready to cross the bridge from frustration to happiness?
          </h2>
          <p className="text-xs sm:text-base text-[#F3EFE6] max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
            Whether you are a job seeker seeking active recruiter advocacy or an employer looking to hire verified talent, we are here for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full bg-[#D96C4A] hover:bg-[#A95245] text-[#25283D] font-black text-xs sm:text-sm shadow-xl shadow-[#D96C4A]/25 hover:scale-105 transition-transform"
            >
              Get Started with Skilluence
            </Link>
            <Link
              to="/who-are-we"
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full bg-[#25283D] border border-[#68705A] text-[#FAF8F2] hover:text-[#D96C4A] text-xs sm:text-sm font-semibold hover:bg-[#68705A] transition-all"
            >
              Read Sahil Jesani's Vision
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
