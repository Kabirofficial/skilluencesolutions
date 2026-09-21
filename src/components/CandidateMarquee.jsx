import { Building2 } from 'lucide-react';
import { marqueeCompanies } from '../data/siteData';

export default function CandidateMarquee() {
  return (
    <section className="py-14 bg-sp-offWhite border-b border-sp-lightGray overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-white border border-sp-lightGray text-[10px] font-mono uppercase tracking-widest text-sp-charcoal mb-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
          <span>PLACEMENT ECOSYSTEM</span>
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-sp-ink uppercase">
          Candidates Placed Across Global Enterprises
        </h2>
        <p className="text-xs sm:text-sm text-sp-midGray mt-1.5 max-w-xl mx-auto font-normal">
          From high-growth innovators to Fortune 500 tech leaders, our candidates secure verified roles across premier organizations.
        </p>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="relative w-full overflow-hidden marquee-mask">
        <div className="flex w-max animate-marquee select-none">
          
          {/* Track 1 */}
          <div className="flex shrink-0 items-center gap-6 pr-6">
            {marqueeCompanies.map((company, index) => (
              <div
                key={`track1-${company.name}-${index}`}
                className="flex items-center gap-3.5 px-5 py-3 rounded-card bg-sp-white border border-sp-lightGray hover:border-sp-ink transition-all shadow-sm shrink-0 min-w-[210px]"
              >
                {company.logo ? (
                  <img
                    src={company.logo}
                    alt={company.name}
                    width="80"
                    height="24"
                    loading="lazy"
                    className="h-6 w-auto max-w-[85px] object-contain opacity-80 hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-7 h-7 rounded-btn bg-sp-offWhite border border-sp-lightGray flex items-center justify-center text-sp-ink shrink-0">
                    <Building2 className="w-3.5 h-3.5" />
                  </div>
                )}
                <div className="text-left">
                  <div className="text-xs font-black text-sp-ink tracking-wide uppercase font-mono">
                    {company.name}
                  </div>
                  <div className="text-[10px] text-sp-midGray font-mono whitespace-nowrap">
                    {company.domain}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Track 2 (Duplicate for seamless infinite loop) */}
          <div className="flex shrink-0 items-center gap-6 pr-6" aria-hidden="true">
            {marqueeCompanies.map((company, index) => (
              <div
                key={`track2-${company.name}-${index}`}
                className="flex items-center gap-3.5 px-5 py-3 rounded-card bg-sp-white border border-sp-lightGray hover:border-sp-ink transition-all shadow-sm shrink-0 min-w-[210px]"
              >
                {company.logo ? (
                  <img
                    src={company.logo}
                    alt={company.name}
                    width="80"
                    height="24"
                    loading="lazy"
                    className="h-6 w-auto max-w-[85px] object-contain opacity-80 hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-7 h-7 rounded-btn bg-sp-offWhite border border-sp-lightGray flex items-center justify-center text-sp-ink shrink-0">
                    <Building2 className="w-3.5 h-3.5" />
                  </div>
                )}
                <div className="text-left">
                  <div className="text-xs font-black text-sp-ink tracking-wide uppercase font-mono">
                    {company.name}
                  </div>
                  <div className="text-[10px] text-sp-midGray font-mono whitespace-nowrap">
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
