import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Layers, ShieldCheck, Award } from 'lucide-react';

export default function HomeGatewayGrid() {
  const pathways = [
    {
      to: '/process',
      badge: '01 / ROADMAP',
      title: 'The 6-Stage Career Architecture',
      subtitle: 'From Academic Degree to Signed US Enterprise Offer',
      desc: 'Explore our disciplined operational methodology featuring 6 verifiable milestones, ATS readiness audits, behavioral STAR calibrations, and salary negotiation strategies.',
      meta: '6 Milestones • 1-on-1 Guidance',
      cta: 'Explore Full Roadmap',
      icon: Compass,
    },
    {
      to: '/services',
      badge: '02 / SERVICES',
      title: 'Modular Advisory Capabilities',
      subtitle: 'Engineered for High-Yield Interview Traction',
      desc: 'Targeted services tailored to the US job market: comprehensive resume reconstruction, LinkedIn positioning, live technical mock drills, and executive offer leverage.',
      meta: 'ATS 94%+ • Direct Strategy',
      cta: 'View Advisory Suite',
      icon: Layers,
    },
    {
      to: '/testimonials',
      badge: '03 / OUTCOMES',
      title: 'Verified Candidate Journeys',
      subtitle: 'Real Indian STEM Graduates Across US Hubs',
      desc: 'Discover documented case briefs from candidates placed at Amazon AWS, Nvidia, Microsoft, Intel, and top fintech firms across Seattle, San Jose, NYC, Austin, and Dallas.',
      meta: '12 Profiles • Verified Placements',
      cta: 'Read Candidate Stories',
      icon: Award,
    },
    {
      to: '/pricing',
      badge: '04 / VALUE',
      title: 'Transparent Advisory Plans',
      subtitle: 'Zero Percentage Skimming. Fiduciary Clarity.',
      desc: 'We operate strictly as candidate advocates with clear upfront pricing tiers. No predatory ISA cuts, no commission conflicts, and no placement lock-ins.',
      meta: 'Fixed Tiers • Zero Surprises',
      cta: 'Compare Advisory Plans',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="w-full bg-sp-offWhite py-20 sm:py-28 border-b border-sp-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-white border border-sp-lightGray text-[11px] font-mono uppercase tracking-widest text-sp-charcoal mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
            <span>PLATFORM ECOSYSTEM & PATHWAYS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-sp-ink leading-[1.12]">
            Navigate our specialized<br />
            <span className="font-times italic font-normal text-sp-charcoal">
              advisory pillars and resources.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-sp-midGray mt-4 leading-relaxed max-w-2xl">
            Skilluence Solutions is organized into focused operational domains. Select a pathway below to explore our detailed workflows, service tiers, and alumni case studies.
          </p>
        </div>

        {/* 4-Card Pathways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pathways.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                to={item.to}
                className="group relative flex flex-col justify-between p-8 rounded-card bg-sp-white border border-sp-lightGray hover:border-sp-ink transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 overflow-hidden"
              >
                {/* Background Accent Gradient on Hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-sp-offWhite rounded-bl-full pointer-events-none -mr-8 -mt-8 transition-transform group-hover:scale-125" />

                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center px-2.5 py-1 rounded bg-sp-offWhite border border-sp-lightGray text-[10px] font-mono uppercase tracking-wider text-sp-charcoal font-bold">
                      {item.badge}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-sp-offWhite border border-sp-lightGray flex items-center justify-center text-sp-ink group-hover:bg-sp-ink group-hover:text-sp-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-black text-sp-ink tracking-tight group-hover:text-sp-charcoal transition-colors">
                    {item.title}
                  </h3>
                  <div className="font-times italic text-sm text-sp-charcoal mt-1">
                    {item.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-sp-midGray leading-relaxed mt-4">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Meta & CTA */}
                <div className="pt-8 mt-6 border-t border-sp-lightGray/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-sp-midGray hidden sm:inline">
                    {item.meta}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-sp-ink group-hover:translate-x-1 transition-transform">
                    <span>{item.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Enterprise Talent Bar Callout */}
        <div className="mt-8 p-6 sm:p-8 rounded-card bg-sp-ink text-sp-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-[10px] font-mono uppercase tracking-widest text-sp-lightGray">
              FOR US CORPORATE RECRUITERS & HIRING MANAGERS
            </div>
            <div className="text-lg sm:text-xl font-black tracking-tight text-sp-white">
              Looking for pre-vetted technical talent in Cloud, AI, and Software Systems?
            </div>
            <p className="text-xs text-sp-midGray max-w-xl">
              Skilluence connects enterprise hiring teams with rigorously evaluated candidates who bring verified commercial project competency.
            </p>
          </div>
          <Link
            to="/employers"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-btn bg-sp-white text-sp-ink hover:bg-sp-offWhite font-bold text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap shadow-sm active:scale-[0.98]"
          >
            <span>Enterprise Talent Desk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
