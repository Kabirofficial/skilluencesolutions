import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowUp, Mail, Phone, MapPin, Heart, ShieldCheck } from 'lucide-react';
import { siteConfig, navLinks, sahilJesaniStory } from '../data/siteData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#1C1E2E] text-[#FAF8F2] border-t border-[#68705A]/60 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle Terracotta & Moss Editorial Glow */}
      <div 
        className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-gradient-to-t from-[#D96C4A]/10 via-[#68705A]/10 to-transparent blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Founder Quote Banner */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-[#25283D] border border-[#68705A]/80 backdrop-blur-md shadow-2xl flex flex-col md:flex-row items-center gap-6">
          <img 
            src="/images/sahil-jesani.jpg" 
            alt="Sahil Jesani" 
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-[#D96C4A] shadow-xl shrink-0" 
          />
          <div className="space-y-2 text-center md:text-left">
            <p className="text-sm sm:text-base text-[#FAF8F2] italic leading-relaxed font-serif">
              "{sahilJesaniStory.quote}"
            </p>
            <div className="text-xs font-bold text-[#D96C4A]">
              — {sahilJesaniStory.founderName}, <span className="text-[#A8B09A] font-normal">{sahilJesaniStory.subtitle}</span>
            </div>
          </div>
        </div>

        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#68705A]/60">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/images/logo.png" 
                alt="Skilluence Solutions Logo" 
                className="h-8 w-auto object-contain rounded-lg"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <span className="font-black text-xl tracking-tight text-[#FAF8F2]">
                SKILLUENCE <span className="text-[#D96C4A]">SOLUTIONS</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#F3EFE6] max-w-sm leading-relaxed font-semibold">
              A bridge from frustration to happiness.
            </p>

            <p className="text-xs text-[#A8B09A] max-w-sm leading-relaxed">
              We pair talented job seekers with verified employers through personalized matching, faster interview scheduling, mock training, and SLA refund assurance.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#D96C4A] bg-[#D96C4A]/10 border border-[#D96C4A]/30 px-3 py-1.5 rounded-xl w-fit font-mono font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Full Time Roles Only • SLA Protected</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#A8B09A] mb-4">
              Explore Pages
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs font-semibold">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-[#F3EFE6] hover:text-[#D96C4A] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Direct Channels */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#A8B09A] mb-4">
              Connect Directly
            </h4>
            
            <div className="space-y-2.5 text-xs text-[#FAF8F2]">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D96C4A] shrink-0" />
                <span className="font-mono text-[#F3EFE6]">{siteConfig.contactPlaceholders.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D96C4A] shrink-0" />
                <span className="font-mono text-[#F3EFE6]">{siteConfig.contactPlaceholders.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#D96C4A] shrink-0" />
                <span className="text-[#F3EFE6]">{siteConfig.contactPlaceholders.location}</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25283D] border border-[#68705A] hover:border-[#D96C4A] text-xs text-[#F3EFE6] hover:text-[#FAF8F2] transition-all group"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 text-[#D96C4A] transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 space-y-4">
          <div className="p-4 rounded-2xl bg-[#25283D]/70 border border-[#68705A]/60 text-[11px] text-[#A8B09A] leading-relaxed">
            <span className="font-bold text-[#D96C4A] mr-1">Mutual SLA Assurance:</span>
            {siteConfig.disclaimer}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#A8B09A] gap-4 font-mono">
            <div>{siteConfig.copyright}</div>
            <div className="flex items-center gap-2">
              <span>Crafted with</span>
              <Heart className="w-3.5 h-3.5 text-[#D96C4A] fill-[#D96C4A]" />
              <span>for career dreamers</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
