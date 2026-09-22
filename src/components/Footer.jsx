import { Link } from 'react-router-dom';
import { ArrowUp, Mail, MapPin, Clock } from 'lucide-react';
import { siteConfig, navLinks } from '../data/siteData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full bg-[#142F23] text-[#FBF9F5] pt-24 pb-16 border-t border-[#142F23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#FBF9F5]/15">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-5">
            <Link to="/" className="inline-flex items-center gap-3.5 group select-none">
              <div className="h-10 w-10 rounded-sm border border-white/20 bg-white p-1 flex items-center justify-center shadow-xs shrink-0">
                <img
                  src="/images/apple-touch-icon.png"
                  alt="Skilluence Solutions Emblem"
                  width="40"
                  height="40"
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif font-normal text-xl tracking-tight text-[#FBF9F5] leading-none">
                    Skilluence
                  </span>
                  <span className="font-serif italic font-normal text-xl tracking-tight text-[#C36B4E] leading-none">
                    Solutions
                  </span>
                </div>
                <span className="text-[9px] font-sans font-medium uppercase tracking-[0.2em] text-[#C36B4E] mt-1">
                  Career Advisory & Representation
                </span>
              </div>
            </Link>

            <p className="font-serif text-base text-[#FBF9F5]/90 italic max-w-sm leading-relaxed">
              "{siteConfig.tagline}"
            </p>

            <p className="text-xs text-[#FBF9F5]/70 max-w-md leading-relaxed font-normal">
              An independent career representation and advisory practice guiding international graduates, technical specialists, and early-career talent into high-conversion US industry appointments.
            </p>
          </div>

          {/* Directory Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-sans font-semibold uppercase tracking-[0.16em] text-[#C36B4E] mb-5">
              Practice Directory
            </h4>
            <div className="flex flex-col space-y-3 text-xs font-sans tracking-[0.05em]">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-[#FBF9F5]/80 hover:text-[#FBF9F5] hover:translate-x-0.5 transition-all inline-flex items-center gap-1.5"
                >
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Direct Channels & Advisory Operations */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="text-xs font-sans font-semibold uppercase tracking-[0.16em] text-[#C36B4E] mb-5">
              Advisory Desk Channels
            </h4>
            
            <div className="space-y-3.5 text-xs text-[#FBF9F5]/80">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C36B4E] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-[0.15em] text-[#546B5F] block font-medium">
                    General Inquiries
                  </span>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-[#FBF9F5] hover:underline underline-offset-4">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C36B4E] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-[0.15em] text-[#546B5F] block font-medium">
                    Practice Operations
                  </span>
                  <span>{siteConfig.contact.location}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C36B4E] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-[0.15em] text-[#546B5F] block font-medium">
                    Consultation Hours
                  </span>
                  <span>{siteConfig.contact.workingHours}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-[#FBF9F5]/20 hover:border-[#FBF9F5]/40 text-xs font-sans uppercase tracking-[0.14em] text-[#FBF9F5]/80 hover:text-[#FBF9F5] transition-all cursor-pointer"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Disclaimer & Transparency Statement */}
        <div className="pt-10 space-y-6">
          <div className="p-5 rounded-sm bg-[#0E2118] border border-[#FBF9F5]/10 text-xs text-[#FBF9F5]/70 leading-relaxed font-sans">
            <span className="font-serif font-bold text-[#C36B4E] mr-1.5 uppercase tracking-wider text-[11px]">
              Notice of Independent Practice:
            </span>
            {siteConfig.disclaimer}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#FBF9F5]/60 gap-4 font-sans">
            <div>{siteConfig.copyright}</div>
            <div className="text-[11px] tracking-[0.08em] uppercase text-[#FBF9F5]/50">
              Verified Career Advisory • Nationwide Support
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
