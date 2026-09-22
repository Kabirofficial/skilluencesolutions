import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Layers, ShieldCheck, Award } from 'lucide-react';

export default function HomeGatewayGrid() {
  const pathways = [
    {
      to: '/process',
      roman: 'I',
      badge: 'Methodology',
      title: 'The 6-Stage Career Architecture',
      subtitle: 'From Academic Degree to Signed US Enterprise Offer',
      desc: 'Explore our disciplined operational methodology featuring 6 verifiable milestones, ATS readiness audits, behavioral STAR calibrations, and salary negotiation strategies.',
      meta: '6 Milestones • Dedicated Senior Counsel',
      cta: 'Explore the Methodology',
      icon: Compass,
    },
    {
      to: '/services',
      roman: 'II',
      badge: 'Capabilities',
      title: 'Modular Advisory Capabilities',
      subtitle: 'Calibrated for High-Yield Interview Conversion',
      desc: 'Targeted services tailored to the US job market: comprehensive resume reconstruction, LinkedIn positioning, live technical mock drills, and executive offer leverage.',
      meta: 'High-Yield Traction • Bespoke Strategy',
      cta: 'View Advisory Suite',
      icon: Layers,
    },
    {
      to: '/testimonials',
      roman: 'III',
      badge: 'Case Records',
      title: 'Verified Candidate Profiles',
      subtitle: 'Real International STEM Graduates Across US Hubs',
      desc: 'Discover documented case briefs from candidates placed at Amazon AWS, Nvidia, Microsoft, Intel, and top fintech firms across Seattle, San Jose, NYC, Austin, and Dallas.',
      meta: '12 Detailed Profiles • Verified Placements',
      cta: 'Read Candidate Briefs',
      icon: Award,
    },
    {
      to: '/pricing',
      roman: 'IV',
      badge: 'Fiduciary Model',
      title: 'Transparent Advisory Tiers',
      subtitle: 'Zero Percentage Skimming. Absolute Alignment.',
      desc: 'We operate strictly as candidate advocates with clear upfront pricing tiers. No predatory ISA cuts, no commission conflicts, and no placement lock-ins.',
      meta: 'Fixed Upfront Tiers • No Hidden Fees',
      cta: 'Compare Advisory Plans',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="w-full bg-[#F4EFEA] py-24 sm:py-32 border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#C36B4E] font-semibold">
            <span>Section IV • Core Practice Areas</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal tracking-tight text-[#142F23] leading-[1.12]">
            Explore the Advisory Practice.{' '}
            <span className="block mt-1 font-serif italic text-[#C36B4E]">
              Structured pillars calibrated for decisive appointments.
            </span>
          </h2>
          <p className="text-base text-[#5E6963] leading-relaxed max-w-2xl font-normal pt-2">
            Skilluence Solutions delivers focused, end-to-end guidance. Select an area below to inspect our detailed methodologies, service offerings, and candidate achievements.
          </p>
        </div>

        {/* 4-Card Editorial Pathways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pathways.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                to={item.to}
                className="group relative flex flex-col justify-between p-8 sm:p-12 rounded-sm bg-[#FFFFFF] border border-[#E8E2D8] hover:border-[#142F23]/60 transition-all duration-300 shadow-[0_4px_16px_rgba(20,47,35,0.02)] hover:shadow-[0_12px_32px_rgba(20,47,35,0.06)]"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E8E2D8]">
                    <span className="text-[11px] font-sans uppercase tracking-[0.16em] text-[#C36B4E] font-semibold">
                      Chapter {item.roman} • {item.badge}
                    </span>
                    <div className="w-8 h-8 rounded-sm bg-[#F4EFEA] flex items-center justify-center text-[#142F23] group-hover:bg-[#142F23] group-hover:text-[#FBF9F5] transition-colors duration-200">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-serif font-normal text-[#142F23] tracking-tight group-hover:text-[#C36B4E] transition-colors">
                    {item.title}
                  </h3>
                  <div className="font-serif italic text-sm text-[#546B5F] mt-1.5">
                    {item.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#5E6963] leading-relaxed mt-4 font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Card Footer */}
                <div className="pt-8 mt-8 border-t border-[#E8E2D8] flex items-center justify-between">
                  <span className="text-xs font-sans text-[#546B5F]">
                    {item.meta}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-[0.14em] font-semibold text-[#142F23] group-hover:text-[#C36B4E] group-hover:translate-x-1 transition-all">
                    <span>{item.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C36B4E]" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
