import { ArrowUp, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Journey", href: "#journey" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Why Us", href: "#why" },
    { name: "Audience", href: "#audience" },
    { name: "Employers", href: "#employers" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-sp-ink text-sp-white border-t border-sp-charcoal pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-sp-charcoal">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Skilluence Solutions Logo"
                width="160"
                height="36"
                className="h-8 sm:h-9 w-auto object-contain brightness-125 contrast-125"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="font-black text-lg tracking-tight text-sp-white">
                {siteConfig.brandName}
              </span>
            </div>

            <p className="text-sm text-sp-lightGray max-w-sm leading-relaxed font-semibold">
              "{siteConfig.tagline}"
            </p>

            <p className="text-xs text-sp-gray max-w-sm leading-relaxed font-normal">
              Independent career-support service helping students, graduates, and career starters develop competitive profiles, strategic search habits, and interview readiness.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-sp-lightGray mb-4">
              Directory
            </h4>
            <div className="flex flex-col space-y-2 text-xs font-mono">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sp-gray hover:text-sp-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Direct Channels */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-sp-lightGray mb-4">
              Advisory Channels
            </h4>
            
            <div className="space-y-3 text-xs text-sp-gray">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sp-lightGray shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="font-mono hover:text-sp-white">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sp-lightGray shrink-0" />
                <span className="font-mono">{siteConfig.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-sp-lightGray shrink-0" />
                <span>{siteConfig.contact.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-sp-lightGray shrink-0" />
                <span>{siteConfig.contact.workingHours}</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-btn border border-sp-midGray/50 hover:border-sp-white text-xs font-mono text-sp-lightGray transition-all"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 space-y-4">
          <div className="p-4 rounded-btn bg-sp-charcoal/60 border border-sp-midGray/30 text-[11px] text-sp-gray leading-relaxed">
            <span className="font-bold text-sp-white mr-1 uppercase font-mono">Notice:</span>
            {siteConfig.disclaimer}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-sp-gray gap-4 font-mono">
            <div>{siteConfig.copyright}</div>
            <div className="flex items-center gap-4">
              {siteConfig.socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-sp-white transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
