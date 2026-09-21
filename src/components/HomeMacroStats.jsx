import { TrendingUp, Clock, ShieldCheck, MapPin } from 'lucide-react';

export default function HomeMacroStats() {
  const stats = [
    {
      icon: TrendingUp,
      value: '$118,500',
      label: 'Median Starting Base Offer',
      detail: 'Across 2024-2025 candidate cohorts in US tech markets',
    },
    {
      icon: Clock,
      value: '42 Days',
      label: 'Average Cycle to 1st Round',
      detail: 'From initial intake audit to first corporate interview screen',
    },
    {
      icon: ShieldCheck,
      value: '94%',
      label: 'ATS Parser Benchmark Score',
      detail: 'Screen pass-through rate on Workday, Greenhouse & Lever',
    },
    {
      icon: MapPin,
      value: '12+ Metros',
      label: 'US Tech Corridors Covered',
      detail: 'San Jose, NYC, Seattle, Austin, Dallas, Chicago & more',
    },
  ];

  return (
    <section className="w-full bg-sp-white border-y border-sp-lightGray py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Micro */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-sp-lightGray">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-sp-midGray mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
              <span>MACRO BENCHMARKS & TELEMETRY</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-sp-ink tracking-tight">
              Data-Backed Advisory Outcomes in the US Tech Market.
            </h3>
          </div>
          <div className="text-xs font-mono text-sp-midGray text-left sm:text-right">
            Independent Advisory • Real Commercial Metrics
          </div>
        </div>

        {/* 4-Stat Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="p-6 rounded-card bg-sp-offWhite border border-sp-lightGray hover:border-sp-ink/30 transition-all duration-300 group shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-sp-midGray">
                    METRIC 0{index + 1}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-sp-white border border-sp-lightGray flex items-center justify-center text-sp-ink group-hover:bg-sp-ink group-hover:text-sp-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-3xl sm:text-4xl font-black text-sp-ink tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider font-mono text-sp-charcoal mt-1">
                  {item.label}
                </div>
                <p className="text-xs text-sp-midGray mt-2 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
