import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function FinalCTA() {
  return (
    <section
      className="relative min-h-[80svh] lg:min-h-[90svh] w-full bg-sp-ink text-sp-white py-24 sm:py-32 flex flex-col justify-center text-center border-b border-sp-charcoal overflow-hidden"
    >
      {/* Subtle Background Architectural Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #FFFFFF 1px, transparent 1px),
            linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Subtle Oversized Abstract Career-Path Line Visual */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-25 z-0"
        viewBox="0 0 1200 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Abstract Career Vector Curve 1 */}
        <path
          d="M -100,500 C 200,480 350,150 600,280 C 850,410 1000,120 1300,100"
          stroke="#4A4A4A"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
        {/* Abstract Career Vector Curve 2 */}
        <path
          d="M -50,550 C 250,520 400,220 600,340 C 800,460 950,180 1350,160"
          stroke="#6B6B6B"
          strokeWidth="1.5"
          opacity="0.6"
        />
        {/* Career Milestone Nodes */}
        <circle cx="280" cy="360" r="5" fill="#3A3A3A" stroke="#8A8A8A" strokeWidth="1" />
        <circle cx="600" cy="280" r="7" fill="#2B2B2B" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.8" />
        <circle cx="920" cy="250" r="5" fill="#3A3A3A" stroke="#8A8A8A" strokeWidth="1" />
        
        {/* Subtle Watermark Geometric Compass Emblem */}
        <g transform="translate(600, 300)" opacity="0.08">
          <circle cx="0" cy="0" r="180" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="4 8" />
          <circle cx="0" cy="0" r="120" stroke="#FFFFFF" strokeWidth="1" />
          <line x1="-200" y1="0" x2="200" y2="0" stroke="#FFFFFF" strokeWidth="1" />
          <line x1="0" y1="-200" x2="0" y2="200" stroke="#FFFFFF" strokeWidth="1" />
        </g>
      </svg>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-8">
        
        {/* Micro Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-charcoal border border-sp-midGray/40 text-[11px] font-mono uppercase tracking-widest text-sp-lightGray">
          <span className="w-1.5 h-1.5 rounded-full bg-sp-white" />
          <span>CAREER ADVANCEMENT / 12</span>
        </div>

        {/* Master CTA Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-sp-white leading-[1.08]">
          Your next opportunity<br />
          <span className="font-times italic font-normal text-sp-lightGray">
            starts with a stronger strategy.
          </span>
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-sp-gray max-w-xl mx-auto leading-relaxed font-normal">
          Stop submitting blind applications into automated rejection filters. Let's overhaul your profile, sharpen your narrative, and prepare you for decisive rounds.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-btn bg-sp-white hover:bg-sp-offWhite text-sp-ink font-bold text-sm transition-all shadow-sm active:scale-[0.98]"
          >
            <span>{siteConfig.heroCTA}</span>
            <ArrowRight className="w-4 h-4 text-sp-ink" />
          </Link>

          <Link
            to="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-btn bg-sp-charcoal hover:bg-sp-midGray/40 border border-sp-midGray/40 text-sp-white font-semibold text-sm transition-all active:scale-[0.98]"
          >
            <span>{siteConfig.heroSecondaryCTA}</span>
          </Link>
        </div>

        <div className="pt-8 text-xs font-mono text-sp-midGray">
          Affordable, individual mentorship • Independent advisory
        </div>

      </div>
    </section>
  );
}
