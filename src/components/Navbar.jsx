import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Journey", href: "#journey" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Why Us", href: "#why" },
    { name: "Employers", href: "#employers" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 flex flex-col items-center px-3 sm:px-6 pointer-events-none">
      <div
        className={`w-full max-w-6xl rounded-container sm:rounded-full border transition-all duration-300 pointer-events-auto flex items-center justify-between ${
          isScrolled
            ? 'bg-sp-white/95 backdrop-blur-xl border-sp-lightGray shadow-xl shadow-sp-ink/[0.06] py-2 px-4 sm:px-6'
            : 'bg-sp-white/85 backdrop-blur-md border-sp-lightGray/80 shadow-md shadow-sp-ink/[0.03] py-2.5 sm:py-3 px-4 sm:px-6'
        }`}
      >
        {/* Brand Logo with 4-stage entrance & 3D hover depth animation */}
        <motion.a
          href="#hero"
          initial={{ opacity: 0, y: 8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          whileHover={{
            scale: 1.02,
            rotateX: -2,
            rotateY: 3,
          }}
          style={{
            transformStyle: "preserve-3d",
            perspective: "600px",
          }}
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none select-none shrink-0"
          aria-label="Skilluence Solutions - Return to Top"
        >
          <img
            src="/images/logo.png"
            alt="Skilluence Solutions Logo"
            className="h-7 sm:h-8 w-auto object-contain transition-transform duration-200"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="flex flex-col">
            <span className="font-black text-xs sm:text-sm tracking-tight text-sp-ink leading-tight uppercase font-mono">
              {siteConfig.brandName}
            </span>
            <span className="text-[9px] font-mono tracking-wider uppercase text-sp-midGray hidden sm:block">
              Editorial Career Advisory
            </span>
          </div>
        </motion.a>

        {/* Desktop Navigation Links */}
        <nav 
          className="hidden lg:flex items-center space-x-1 sm:space-x-1.5 text-xs font-mono font-bold tracking-wider uppercase"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sp-charcoal hover:text-sp-ink hover:bg-sp-offWhite transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-sp-ink rounded-full px-2.5 py-1.5"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right Action CTA */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-sp-ink hover:bg-sp-charcoal text-sp-white font-bold text-xs tracking-wide transition-all shadow-sm active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-sp-ink"
          >
            <span>Get Started</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 sm:p-2 rounded-full border border-sp-lightGray text-sp-charcoal hover:text-sp-ink bg-sp-offWhite focus:outline-none focus-visible:ring-2 focus-visible:ring-sp-ink"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Floating Island Mobile Dropdown Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 w-full max-w-sm sm:max-w-md rounded-card bg-sp-white/98 backdrop-blur-2xl border border-sp-lightGray p-5 shadow-2xl pointer-events-auto lg:hidden overflow-hidden"
          >
            <div className="flex flex-col space-y-4">
              <div className="text-[10px] font-mono uppercase tracking-widest text-sp-midGray font-bold pb-2 border-b border-sp-lightGray flex items-center justify-between">
                <span>NAVIGATION DIRECTORY</span>
                <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
              </div>

              <div className="grid grid-cols-2 gap-2 max-h-[50vh] overflow-y-auto pr-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-mono font-bold text-sp-charcoal hover:text-sp-ink hover:bg-sp-offWhite px-3 py-2 rounded-btn transition-colors border border-sp-lightGray/40"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="pt-2 border-t border-sp-lightGray">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-sp-ink text-sp-white font-bold text-xs tracking-wide shadow-sm active:scale-[0.98] transition-all"
                >
                  <span>Start Your Career Journey</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
