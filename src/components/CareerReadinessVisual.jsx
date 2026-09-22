import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileCheck2, 
  Target, 
  BarChart3, 
  ArrowUpRight, 
  Check 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CareerReadinessVisual() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'ats',
      label: 'Profile Architecture',
      roman: 'I',
      icon: FileCheck2,
      badge: 'Pillar I • Candidate Documentation',
      title: 'Algorithmic Optimization & Executive Storytelling',
      description: 'Standard academic resumes get dropped by automated applicant tracking filters. We reconstruct candidate documentation into high-conversion ATS structures with verified commercial impact metrics and leadership presence.',
      metrics: [
        { label: 'Parse Integrity', value: '100%', detail: 'Clean ATS hierarchy' },
        { label: 'Domain Relevance', value: '96.4%', detail: 'Role-specific calibration' },
        { label: 'Callback Yield', value: '4.8x', detail: 'Versus portal baseline' },
      ],
      deliverables: [
        'Multi-column algorithmic narrative translation',
        'STAR-aligned project impact & revenue metrics',
        'Targeted executive summary for US talent leaders',
        'LinkedIn search indexation and brand elevation'
      ],
      image: '/images/career_strategy_workspace.jpg',
      imageCaption: 'Documentation Analysis & Narrative Calibration Desk'
    },
    {
      id: 'interview',
      label: 'Executive Simulations',
      roman: 'II',
      icon: Target,
      badge: 'Pillar II • Technical & Behavioral Defense',
      title: 'Decisive Composure Under Technical & Executive Scrutiny',
      description: 'Mastering the narrative mechanics of behavioral and technical interviews. Candidates undergo structured simulation drills to defend complex capstone architectures and commercial tradeoffs with authority and composure.',
      metrics: [
        { label: 'Narrative Poise', value: '98%', detail: 'STAR storytelling clarity' },
        { label: 'Technical Rigor', value: '94%', detail: 'Commercial translation' },
        { label: 'Candidate Poise', value: '99%', detail: 'Post-simulation confidence' },
      ],
      deliverables: [
        'Rigorous behavioral scenario drills with senior mentors',
        'Technical architecture defense and system design defense',
        'Salary negotiation and multi-offer leverage advisory',
        'Hiring executive psychological framing and alignment'
      ],
      image: '/images/interview_mentorship_session.jpg',
      imageCaption: '1-on-1 Simulation with Senior Silicon Valley Mentors'
    },
    {
      id: 'network',
      label: 'Institutional Access',
      roman: 'III',
      icon: BarChart3,
      badge: 'Pillar III • Direct Talent Introduction',
      title: 'Direct Talent Introduction Across US Innovation Hubs',
      description: 'Moving beyond anonymous public portal queues. We strategically position candidate dossiers across our active recruiter channels spanning Silicon Valley, New York, Seattle, Austin, and Boston.',
      metrics: [
        { label: 'Executive Network', value: '1,000+', detail: 'Verified US hiring managers' },
        { label: 'Median Placement', value: '48 Days', detail: 'From active positioning' },
        { label: 'Sponsorship Focus', value: 'OPT / H-1B', detail: 'Targeted employer matching' },
      ],
      deliverables: [
        'Direct hiring channel recommendations & introductions',
        'Proactive candidate branding to specialized recruiters',
        'Pre-vetted interview pipeline coordination',
        'Continuous weekly progress accountability & guidance'
      ],
      image: '/images/us_tech_ecosystem.jpg',
      imageCaption: 'Direct Corporate Network Across Premier US Innovation Metros'
    }
  ];

  const current = tabs[activeTab];

  return (
    <section className="relative py-24 sm:py-32 bg-[#FBF9F5] text-[#1F2421] border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 gap-8">
          <div className="max-w-2xl space-y-3">
            <div className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#C36B4E] font-semibold">
              <span>Section III • Advisory Standards & Methodology</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#142F23] leading-[1.1]">
              Dignity in Preparation.{' '}
              <span className="block mt-1 font-serif italic text-[#C36B4E]">
                Prestige in Execution.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#5E6963] mt-4 font-normal leading-relaxed">
              A bespoke three-pillar advisory protocol designed to elevate candidate positioning from ordinary applicant queues to the executive decision table.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-[#142F23] hover:bg-[#1B3E2F] text-[#FBF9F5] text-xs font-sans uppercase tracking-[0.14em] font-semibold transition-colors shrink-0"
          >
            <span>Explore All Modules</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#C36B4E]" />
          </Link>
        </div>

        {/* Tab Controls: Architectural Tabs with Thin Borders */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-[#E8E2D8] bg-[#F4EFEA] mb-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E8E2D8]">
          {tabs.map((tab, idx) => {
            const Icon = tab.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`p-6 sm:p-8 text-left transition-all duration-200 flex flex-col justify-between cursor-pointer relative ${
                  isActive
                    ? 'bg-[#FFFFFF] text-[#142F23]'
                    : 'bg-[#F4EFEA] text-[#5E6963] hover:bg-[#FFFFFF]/60 hover:text-[#142F23]'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#C36B4E]" />
                )}

                <div className="flex items-center justify-between mb-4">
                  <div className={`w-8 h-8 rounded-sm flex items-center justify-center ${
                    isActive ? 'bg-[#142F23] text-[#FBF9F5]' : 'bg-[#E8E2D8] text-[#142F23]'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-serif italic text-[#C36B4E] font-bold">
                    Pillar {tab.roman}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-serif font-normal text-[#142F23] tracking-tight">
                    {tab.label}
                  </h3>
                  <div className="text-[11px] font-sans uppercase tracking-[0.12em] text-[#546B5F] mt-1">
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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="border border-[#E8E2D8] bg-[#FFFFFF] p-8 sm:p-12 lg:p-14 shadow-[0_4px_24px_rgba(20,47,35,0.03)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Metrics & Deliverables */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <div className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#C36B4E] font-semibold mb-2">
                    {current.badge}
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-[#142F23] tracking-tight leading-snug">
                    {current.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#5E6963] mt-4 leading-relaxed font-normal">
                    {current.description}
                  </p>
                </div>

                {/* 3 Metric Plaque Blocks */}
                <div className="grid grid-cols-3 gap-4 pt-2">
                  {current.metrics.map((m, i) => (
                    <div key={i} className="p-4 rounded-sm bg-[#FBF9F5] border border-[#E8E2D8]">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-serif font-normal text-[#142F23]">
                        {m.value}
                      </div>
                      <div className="text-[10px] font-sans uppercase tracking-[0.14em] font-semibold text-[#C36B4E] mt-1.5">
                        {m.label}
                      </div>
                      <div className="text-[11px] text-[#5E6963] mt-0.5 font-normal">
                        {m.detail}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Concrete Deliverables Checklist */}
                <div className="pt-6 border-t border-[#E8E2D8] space-y-3">
                  <div className="text-xs font-sans uppercase tracking-[0.16em] font-semibold text-[#142F23]">
                    Institutional Deliverables Included
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {current.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1F2421] font-normal">
                        <Check className="w-4 h-4 text-[#142F23] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Photo with Editorial Folio Plaque */}
              <div className="lg:col-span-5 relative">
                <div className="border border-[#E8E2D8] bg-[#FFFFFF] p-2 rounded-sm shadow-sm">
                  <img
                    src={current.image}
                    alt={current.title}
                    width="700"
                    height="450"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[300px] sm:h-[380px] object-cover"
                  />
                  <div className="p-4 border-t border-[#E8E2D8] bg-[#FBF9F5]">
                    <div className="flex items-center justify-between text-[10px] font-sans uppercase tracking-[0.16em] text-[#C36B4E] font-semibold">
                      <span>Advisory Standard</span>
                      <span className="text-[#546B5F]">Plate 0{activeTab + 1}</span>
                    </div>
                    <p className="text-xs text-[#1F2421] mt-1 font-medium">
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
