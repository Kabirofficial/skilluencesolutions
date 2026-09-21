import { Link } from 'react-router-dom';
import { FileText, Send, MessageSquare, Award, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function HomeServicesPreview() {
  const previewServices = [
    {
      id: 'resume',
      number: '01',
      title: 'ATS Document Architecture',
      subtitle: 'Resume & LinkedIn Reconstruction',
      desc: 'Transforming academic coursework and technical capstones into quantified commercial deliverables with 100% ATS readability.',
      icon: FileText,
      tag: '100% PARSE RATE',
      link: '/services'
    },
    {
      id: 'pipeline',
      number: '02',
      title: 'Targeted Outreach Strategy',
      subtitle: 'Recruiter Discovery & Positioning',
      desc: 'Moving beyond public portal blind submissions with high-conversion outreach directly to active US hiring managers.',
      icon: Send,
      tag: 'DIRECT ACCESS',
      link: '/services'
    },
    {
      id: 'interview',
      number: '03',
      title: 'STAR Interview Simulations',
      subtitle: '1-on-1 Behavioral & Technical Drills',
      desc: 'Mastering the psychological framing of multi-round interviews. Practice articulating complex projects with calm executive composure.',
      icon: MessageSquare,
      tag: '1-ON-1 SESSIONS',
      link: '/services'
    },
    {
      id: 'offer',
      number: '04',
      title: 'Offer & Compensation Strategy',
      subtitle: 'Sponsorship & Negotiation Support',
      desc: 'Navigating US employment offers, STEM OPT compliance, and compensation leverage without burning bridges.',
      icon: Award,
      tag: 'PLACEMENT SUPPORT',
      link: '/services'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-sp-white text-sp-ink border-b border-sp-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-offWhite border border-sp-lightGray text-[11px] font-mono uppercase tracking-widest text-sp-charcoal mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
              <span>CORE CAPABILITIES</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-sp-ink leading-tight">
              Strategic Services.<br />
              <span className="font-times italic font-normal text-sp-charcoal">
                Engineered for conversion.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-sp-midGray mt-3 font-normal leading-relaxed">
              Every phase of our service is designed to remove ambiguity from the modern US hiring process.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-btn bg-sp-ink text-sp-white hover:bg-sp-charcoal text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-sm shrink-0"
          >
            <span>Explore All 8 Modules</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4-Card Strategic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="p-6 sm:p-7 rounded-card bg-sp-offWhite border border-sp-lightGray hover:border-sp-ink hover:bg-sp-white transition-all duration-300 flex flex-col justify-between shadow-sm group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-sp-lightGray/80 pb-3">
                    <div className="w-9 h-9 rounded-btn bg-sp-white border border-sp-lightGray flex items-center justify-center text-sp-ink group-hover:bg-sp-ink group-hover:text-sp-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-sp-midGray">
                      {service.number}
                    </span>
                  </div>

                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-sp-charcoal font-semibold mb-1">
                      {service.tag}
                    </div>
                    <h3 className="text-lg font-black tracking-tight text-sp-ink uppercase group-hover:underline decoration-sp-ink decoration-1 underline-offset-4">
                      {service.title}
                    </h3>
                    <p className="text-xs text-sp-midGray mt-2 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-sp-lightGray/60 flex items-center justify-between">
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-sp-ink group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>View Module</span>
                    <ArrowRight className="w-3.5 h-3.5 text-sp-charcoal" />
                  </Link>
                  <CheckCircle2 className="w-4 h-4 text-sp-lightGray group-hover:text-sp-ink transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
