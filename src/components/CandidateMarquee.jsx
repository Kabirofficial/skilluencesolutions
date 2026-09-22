import { Building2 } from 'lucide-react';
import { marqueeCompanies } from '../data/siteData';

export default function CandidateMarquee() {
  return (
    <section className="py-16 bg-[#F4EFEA] border-b border-[#E8E2D8] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div className="inline-flex items-center gap-2 text-[11px] font-sans uppercase tracking-[0.2em] text-[#C36B4E] font-semibold mb-2">
          <span>Enterprise Placement Record</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal tracking-tight text-[#142F23]">
          Candidates Placed Across Premier Global Institutions
        </h2>
        <p className="text-sm text-[#5E6963] mt-2 max-w-xl mx-auto font-normal leading-relaxed">
          From Silicon Valley pioneers to Fortune 500 leaders, our candidates secure verified appointments across respected technology and finance organizations.
        </p>
      </div>

      {/* Editorial Horizontal Partner Strip */}
      <div className="relative w-full overflow-hidden marquee-mask">
        <div className="flex w-max animate-marquee select-none">
          
          {/* Track 1 */}
          <div className="flex shrink-0 items-center gap-6 pr-6">
            {marqueeCompanies.map((company, index) => (
              <div
                key={`track1-${company.name}-${index}`}
                className="flex items-center gap-4 px-6 py-4 rounded-sm bg-[#FFFFFF] border border-[#E8E2D8] hover:border-[#142F23]/40 transition-colors shadow-[0_2px_8px_rgba(20,47,35,0.02)] shrink-0 min-w-[230px]"
              >
                {company.logo ? (
                  <img
                    src={company.logo}
                    alt={company.name}
                    width="80"
                    height="24"
                    loading="lazy"
                    decoding="async"
                    className="h-6 w-auto max-w-[85px] object-contain opacity-85 hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-8 h-8 rounded-sm bg-[#F4EFEA] border border-[#E8E2D8] flex items-center justify-center text-[#142F23] shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                )}
                <div className="text-left">
                  <div className="text-xs font-semibold text-[#142F23] tracking-[0.08em] uppercase font-sans">
                    {company.name}
                  </div>
                  <div className="text-[11px] text-[#5E6963] font-sans whitespace-nowrap">
                    {company.domain}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Track 2 */}
          <div className="flex shrink-0 items-center gap-6 pr-6" aria-hidden="true">
            {marqueeCompanies.map((company, index) => (
              <div
                key={`track2-${company.name}-${index}`}
                className="flex items-center gap-4 px-6 py-4 rounded-sm bg-[#FFFFFF] border border-[#E8E2D8] hover:border-[#142F23]/40 transition-colors shadow-[0_2px_8px_rgba(20,47,35,0.02)] shrink-0 min-w-[230px]"
              >
                {company.logo ? (
                  <img
                    src={company.logo}
                    alt={company.name}
                    width="80"
                    height="24"
                    loading="lazy"
                    decoding="async"
                    className="h-6 w-auto max-w-[85px] object-contain opacity-85 hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-8 h-8 rounded-sm bg-[#F4EFEA] border border-[#E8E2D8] flex items-center justify-center text-[#142F23] shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                )}
                <div className="text-left">
                  <div className="text-xs font-semibold text-[#142F23] tracking-[0.08em] uppercase font-sans">
                    {company.name}
                  </div>
                  <div className="text-[11px] text-[#5E6963] font-sans whitespace-nowrap">
                    {company.domain}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
