export default function HomeMacroStats() {
  const stats = [
    {
      value: '$118,500',
      label: 'Median Starting Base Offer',
      detail: 'Documented across recent international candidate cohorts in primary US technology corridors.',
    },
    {
      value: '42 Days',
      label: 'Average Cycle to First Round',
      detail: 'From intake calibration and narrative overhaul to the initial enterprise technical evaluation.',
    },
    {
      value: '94%',
      label: 'ATS Screen Clearance Rate',
      detail: 'Direct recruiter screen pass-through rate across enterprise corporate candidate portals.',
    },
    {
      value: '12+ Metros',
      label: 'US Innovation Hubs Represented',
      detail: 'Including Silicon Valley, Seattle, New York, Austin, Chicago, Boston, and Dallas.',
    },
  ];

  return (
    <section className="w-full bg-[#FBF9F5] border-b border-[#E8E2D8] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[#E8E2D8]">
          <div className="max-w-2xl space-y-3">
            <div className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#C36B4E] font-semibold">
              <span>Section II • Empirical Benchmarks</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#142F23] tracking-tight leading-tight">
              Documented Placement Trajectories Across the US Market.
            </h2>
          </div>
          <div className="text-xs font-sans uppercase tracking-[0.14em] text-[#546B5F] font-medium max-w-xs">
            Independent Verification • Transparent Candidate Performance Ledger
          </div>
        </div>

        {/* 4-Column Editorial Ledger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E8E2D8] border-b border-[#E8E2D8]">
          {stats.map((item, index) => (
            <div 
              key={index}
              className="py-10 sm:py-12 sm:px-8 lg:px-10 first:sm:pl-0 last:sm:pr-0 flex flex-col justify-between space-y-8"
            >
              <div className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#546B5F] font-semibold">
                Metric [ 0{index + 1} ]
              </div>

              <div>
                <div className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-normal text-[#142F23] tracking-tight leading-none">
                  {item.value}
                </div>
                <div className="text-xs font-semibold uppercase tracking-[0.12em] font-sans text-[#1F2421] mt-4">
                  {item.label}
                </div>
                <p className="text-xs text-[#5E6963] mt-3 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
