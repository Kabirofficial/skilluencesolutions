import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileCheck2, 
  Target, 
  BarChart3, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Award,
  Zap,
  Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CareerReadinessVisual() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'ats',
      label: 'ATS Profile Architecture',
      icon: FileCheck2,
      badge: '98% READINESS SCORE',
      title: 'Algorithmic Optimization & Keyword Heatmapping',
      description: 'Standard academic resumes get dropped by automated applicant filters. We reconstruct candidate documentation into high-conversion ATS structures with verified commercial metrics.',
      metrics: [
        { label: 'Parse Rate', value: '100%', detail: 'Clean ATS hierarchy' },
        { label: 'Keyword Match', value: '96.4%', detail: 'Role-specific alignment' },
        { label: 'Interview Callbacks', value: '4.8x', detail: 'Versus portal averages' },
      ],
      deliverables: [
        'Multi-column algorithmic translation',
        'STAR-aligned project impact metrics',
        'Targeted executive summary for US recruiters',
        'LinkedIn search indexation tuning'
      ],
      image: '/images/career_strategy_workspace.jpg',
      imageCaption: 'Diagnostic Document Analysis & Candidate Positioning Desk'
    },
    {
      id: 'interview',
      label: 'STAR Simulation Drills',
      icon: Target,
      badge: '1-ON-1 COACHING',
      title: 'Decisive Composure Under Technical & Behavioral Scrutiny',
      description: 'Mastering the narrative mechanics of behavioral and technical interviews. Candidates undergo structured simulation drills to explain complex capstone projects with poise.',
      metrics: [
        { label: 'Clarity Score', value: '98%', detail: 'STAR storytelling precision' },
        { label: 'Technical Depth', value: '94%', detail: 'Commercial translation' },
        { label: 'Confidence Index', value: '99%', detail: 'Post-mock assessment' },
      ],
      deliverables: [
        'Rigorous behavioral scenario drills',
        'Technical architecture defense sessions',
        'Salary negotiation and offer leverage strategy',
        'Hiring manager psychological framing'
      ],
      image: '/images/interview_mentorship_session.jpg',
      imageCaption: '1-on-1 Executive Simulation with Senior Industry Mentors'
    },
    {
      id: 'network',
      label: 'Enterprise Pipeline',
      icon: BarChart3,
      badge: '1,000+ RECRUITER NETWORK',
      title: 'Direct Talent Access Across US Innovation Hubs',
      description: 'Moving beyond public portal queues. We strategically promote candidate profiles across our active recruiter channels spanning Silicon Valley, New York, Seattle, and Austin.',
      metrics: [
        { label: 'Active Network', value: '1,000+', detail: 'Verified US hiring managers' },
        { label: 'Median Time to Offer', value: '48 Days', detail: 'From active positioning' },
        { label: 'Sponsorship Roles', value: 'OPT/H-1B', detail: 'Targeted employer matching' },
      ],
      deliverables: [
        'Direct hiring channel recommendations',
        'Proactive candidate branding to recruiters',
        'Pre-vetted interview pipeline coordination',
        'Continuous weekly progress accountability'
      ],
      image: '/images/us_tech_ecosystem.jpg',
      imageCaption: 'Direct Corporate Network Across US Tech Metros'
    }
  ];

  const current = tabs[activeTab];

  return (
    <section className="relative py-20 sm:py-28 lg:py-32 bg-sp-white text-sp-ink border-b border-sp-lightGray overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-offWhite border border-sp-lightGray text-[11px] font-mono uppercase tracking-widest text-sp-charcoal mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-sp-ink animate-pulse" />
              <span>CANDIDATE INTELLIGENCE & VISUAL BENCHMARK</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-sp-ink leading-tight">
              Visualizing Real<br />
              <span className="font-times italic font-normal text-sp-charcoal">
                Career Transformation.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-sp-midGray mt-3 font-normal leading-relaxed">
              Explore how our rigorous framework takes candidates from cold portal submissions to structured, high-conversion interviews.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-btn border border-sp-lightGray hover:border-sp-ink bg-sp-offWhite hover:bg-sp-white text-xs font-mono font-bold uppercase tracking-wider text-sp-ink transition-all shrink-0"
          >
            <span>Explore All Modules</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Tab Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {tabs.map((tab, idx) => {
            const Icon = tab.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`p-4 sm:p-5 rounded-card text-left transition-all duration-200 border flex flex-col justify-between ${
                  isActive
                    ? 'bg-sp-ink text-sp-white border-sp-ink shadow-xl ring-1 ring-sp-ink/10'
                    : 'bg-sp-offWhite text-sp-charcoal border-sp-lightGray hover:border-sp-gray hover:bg-sp-white'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-8 h-8 rounded-btn flex items-center justify-center ${
                    isActive ? 'bg-sp-charcoal text-sp-white' : 'bg-sp-white text-sp-ink border border-sp-lightGray'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`text-[10px] font-mono tracking-wider uppercase font-bold px-2 py-0.5 rounded ${
                    isActive ? 'bg-sp-charcoal text-sp-lightGray' : 'bg-sp-white border border-sp-lightGray text-sp-midGray'
                  }`}>
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-black tracking-tight uppercase">
                    {tab.label}
                  </h3>
                  <div className={`text-[11px] font-mono mt-1 ${isActive ? 'text-sp-lightGray' : 'text-sp-midGray'}`}>
                    {tab.badge}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Interactive Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-card bg-sp-offWhite border border-sp-lightGray p-6 sm:p-8 lg:p-10 shadow-lg overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Metrics & Deliverables */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-white border border-sp-lightGray text-[10px] font-mono uppercase tracking-widest text-sp-charcoal mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-sp-ink" />
                    <span>{current.badge}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-sp-ink tracking-tight">
                    {current.title}
                  </h3>
                  <p className="text-sm sm:text-base text-sp-midGray mt-2 leading-relaxed font-normal">
                    {current.description}
                  </p>
                </div>

                {/* 3 Metric Badges */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {current.metrics.map((m, i) => (
                    <div key={i} className="p-3.5 rounded-card bg-sp-white border border-sp-lightGray">
                      <div className="text-xl sm:text-2xl font-black font-mono text-sp-ink">
                        {m.value}
                      </div>
                      <div className="text-xs font-bold text-sp-charcoal uppercase tracking-wider mt-0.5">
                        {m.label}
                      </div>
                      <div className="text-[10px] font-mono text-sp-midGray mt-0.5">
                        {m.detail}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Concrete Deliverables Checklist */}
                <div className="pt-3 border-t border-sp-lightGray space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider font-bold text-sp-charcoal">
                    Standard Deliverables:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {current.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-sp-charcoal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sp-ink shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: High-Resolution Visual Photo with Floating Overlay Badge */}
              <div className="lg:col-span-5 relative group">
                <div className="relative rounded-card overflow-hidden border border-sp-lightGray shadow-xl bg-sp-ink">
                  <img
                    src={current.image}
                    alt={current.title}
                    width="700"
                    height="420"
                    className="w-full h-[280px] sm:h-[340px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sp-ink/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Image Bottom Overlay Banner */}
                  <div className="absolute bottom-3 inset-x-3 p-3 rounded-card bg-sp-white/95 backdrop-blur-md border border-sp-lightGray text-left shadow-lg">
                    <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider font-bold text-sp-ink">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-sp-ink animate-pulse" />
                        <span>VERIFIED STANDARDS</span>
                      </span>
                      <span className="text-sp-midGray">SKILLUENCE BENCHMARK</span>
                    </div>
                    <p className="text-xs text-sp-charcoal mt-1 font-medium line-clamp-1">
                      {current.imageCaption}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
