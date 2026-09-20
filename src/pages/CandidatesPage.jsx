import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Building
} from 'lucide-react';
import { 
  candidatePillars, 
  candidateSteps 
} from '../data/siteData';

export default function CandidatesPage() {
  return (
    <div className="min-h-screen bg-[#25283D] text-[#FAF8F2] pt-28 pb-20">
      
      {/* 1. Hero Section with Happiness Photo */}
      <section className="relative py-12 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D96C4A]/15 border border-[#D96C4A]/40 text-[#D96C4A] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Dedicated Recruiter Advocacy For Candidates</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#FAF8F2] leading-[1.08]">
                Your bridge from job hunt frustration to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF8F2] via-[#D96C4A] to-[#A8B09A]">
                  career happiness.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#F3EFE6] leading-relaxed max-w-xl">
                You’ve worked hard for your credentials. You shouldn't have to suffer through 400 ignored applications. We pair you with an active recruiter who pitches you directly to verified employers, preps you with deep mock sessions, and backs it all with our SLA Refund Assurance.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#D96C4A] hover:bg-[#A95245] text-[#FAF8F2] font-black text-sm shadow-xl shadow-[#D96C4A]/25 hover:scale-105 transition-transform text-center"
                >
                  Start Your Candidate Journey
                </Link>
                <a
                  href="#pillars"
                  className="w-full sm:w-auto px-6 py-4 rounded-full bg-[#1C1E2E] border border-[#68705A]/50 text-[#F3EFE6] hover:text-[#FAF8F2] text-xs font-semibold text-center hover:bg-[#68705A]/30 transition-colors"
                >
                  Explore Support Pillars
                </a>
              </div>

              <div className="pt-4 flex items-center gap-6 text-xs text-[#F3EFE6]">
                <span className="flex items-center gap-1.5 text-[#D96C4A] font-bold">
                  <CheckCircle2 className="w-4 h-4" /> Full-Time Roles Only
                </span>
                <span className="flex items-center gap-1.5 text-[#F3EFE6] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#D96C4A]" /> SLA Refund Protection
                </span>
              </div>
            </div>

            {/* Candidate Happiness Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#D96C4A]/40 shadow-2xl">
                <img 
                  src="/images/candidate-happiness.jpg" 
                  alt="Candidate experiencing career happiness" 
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1E2E]/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="p-4 rounded-2xl bg-[#25283D]/90 border border-[#68705A]/80 backdrop-blur-md">
                    <span className="text-xs font-bold text-[#D96C4A] block mb-0.5">
                      The Destination: Fulfilling Employment
                    </span>
                    <span className="text-xs text-[#FAF8F2]">
                      "Walking into interviews prepared, confident, and with an advocate who negotiated my full-time compensation."
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CORE CANDIDATE SUPPORT PILLARS */}
      <section id="pillars" className="py-20 bg-[#1C1E2E] border-t border-b border-[#68705A]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D96C4A]">
              The 5 Pillars
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#FAF8F2] mt-3 mb-4">
              Everything You Need to Secure Your Dream Role
            </h2>
            <p className="text-sm sm:text-base text-[#F3EFE6]">
              Direct, active intervention at every phase of your job search.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <div className="p-8 rounded-3xl bg-[#25283D] border border-[#68705A]/50 hover:border-[#D96C4A] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#D96C4A]/15 text-[#D96C4A] flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#D96C4A] font-bold block mb-1">PILLAR 01</span>
              <h3 className="text-xl font-bold text-[#FAF8F2] mb-3">Personalized Job Matching</h3>
              <p className="text-xs sm:text-sm text-[#F3EFE6] leading-relaxed">
                We connect you with roles that build long-term careers, not just quick jobs. We analyze your tech stack, personality, and career ambitions to match you with ideal teams.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 rounded-3xl bg-[#25283D] border border-[#68705A]/50 hover:border-[#D96C4A] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#68705A]/40 text-[#FAF8F2] flex items-center justify-center mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#D96C4A] font-bold block mb-1">PILLAR 02</span>
              <h3 className="text-xl font-bold text-[#FAF8F2] mb-3">Faster Interview Scheduling</h3>
              <p className="text-xs sm:text-sm text-[#F3EFE6] leading-relaxed">
                Our recruiters actively secure interviews so you're not stuck waiting. We have direct lines into hiring managers, bypassing online applicant tracking logjams.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 rounded-3xl bg-[#25283D] border border-[#68705A]/50 hover:border-[#D96C4A] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#D96C4A]/15 text-[#D96C4A] flex items-center justify-center mb-6">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#D96C4A] font-bold block mb-1">PILLAR 03</span>
              <h3 className="text-xl font-bold text-[#FAF8F2] mb-3">End-to-End Placement Support</h3>
              <p className="text-xs sm:text-sm text-[#F3EFE6] leading-relaxed">
                From resume building to offer negotiation, we guide every step. You have an advocate reviewing contracts, coaching you on counter-offers, and protecting your interests.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-8 rounded-3xl bg-[#25283D] border border-[#68705A]/50 hover:border-[#D96C4A] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#68705A]/40 text-[#FAF8F2] flex items-center justify-center mb-6">
                <Building className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#D96C4A] font-bold block mb-1">PILLAR 04</span>
              <h3 className="text-xl font-bold text-[#FAF8F2] mb-3">Access to Verified Employers</h3>
              <p className="text-xs sm:text-sm text-[#F3EFE6] leading-relaxed">
                Work with trusted companies across multiple industries nationwide. We only place candidates with established, financially solvent organizations offering stable full-time compensation.
              </p>
            </div>

            {/* Pillar 5 */}
            <div className="p-8 rounded-3xl bg-[#25283D] border border-[#68705A]/50 hover:border-[#D96C4A] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#D96C4A]/15 text-[#D96C4A] flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#D96C4A] font-bold block mb-1">PILLAR 05</span>
              <h3 className="text-xl font-bold text-[#FAF8F2] mb-3">Confidence Before Interviews</h3>
              <p className="text-xs sm:text-sm text-[#F3EFE6] leading-relaxed">
                Mock interviews and preparation sessions help you walk in ready. We drill the STAR method, technical challenges, and culture questions until answering feels like second nature.
              </p>
            </div>

            {/* SLA Protection Card */}
            <div className="p-8 rounded-3xl bg-[#25283D] border border-[#D96C4A]/50 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#D96C4A]/20 text-[#D96C4A] flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-[#D96C4A] font-bold block mb-1">THE SAFETY NET</span>
                <h3 className="text-xl font-bold text-[#FAF8F2] mb-3">Refund Assurance & SLA</h3>
                <p className="text-xs sm:text-sm text-[#F3EFE6] leading-relaxed">
                  If expectations aren't met under our agreed service terms, our SLA includes refund protection. We have skin in the game.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-[#68705A]/60 text-xs font-bold text-[#D96C4A]">
                Mutual Accountability Guaranteed
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. THE 5-STEP CANDIDATE JOURNEY */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D96C4A]">
              Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#FAF8F2] mt-3 mb-4">
              Your 5-Step Path Across The Bridge
            </h2>
            <p className="text-sm sm:text-base text-[#F3EFE6]">
              How our recruiters work with you from Day 1 to your first day on the job.
            </p>
          </div>

          <div className="space-y-4">
            {candidateSteps.map((st, idx) => (
              <div
                key={st.step}
                className="p-6 rounded-2xl bg-[#1C1E2E] border border-[#68705A]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#D96C4A] transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-xl bg-[#25283D] text-[#D96C4A] font-mono font-bold text-lg flex items-center justify-center shrink-0 border border-[#68705A]/60">
                    {st.step}
                  </span>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#FAF8F2]">{st.title}</h4>
                    <p className="text-xs sm:text-sm text-[#F3EFE6] mt-1">{st.desc}</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#A8B09A] uppercase tracking-widest shrink-0">
                  Step 0{idx + 1}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#D96C4A] hover:bg-[#A95245] text-[#FAF8F2] font-black text-sm shadow-xl shadow-[#D96C4A]/25 hover:scale-105 transition-transform"
            >
              <span>Submit Your Profile For Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
