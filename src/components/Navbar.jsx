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

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Journey", href: "#journey" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-sp-white/95 backdrop-blur-md border-b border-sp-lightGray py-3 shadow-sm'
          : 'bg-sp-white/80 backdrop-blur-sm border-b border-sp-lightGray/60 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-btn bg-sp-ink flex items-center justify-center text-sp-white font-mono font-black text-sm group-hover:bg-sp-charcoal transition-colors">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-black text-base tracking-tight text-sp-ink leading-tight">
                {siteConfig.brandName}
              </span>
              <span className="text-[9px] font-mono tracking-wider uppercase text-sp-midGray">
                Editorial Career Advisory
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-mono font-bold tracking-wider uppercase">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sp-charcoal hover:text-sp-ink transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-btn bg-sp-ink hover:bg-sp-charcoal text-sp-white font-bold text-xs tracking-wide transition-all shadow-sm active:scale-[0.98]"
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
              className="p-2 rounded-btn border border-sp-lightGray text-sp-charcoal hover:text-sp-ink bg-sp-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[62px] z-40 bg-sp-white border-b border-sp-lightGray px-6 py-6 shadow-xl lg:hidden"
          >
            <div className="flex flex-col space-y-4">
              <div className="text-[10px] font-mono uppercase tracking-widest text-sp-midGray font-bold">
                Directory
              </div>
              <div className="flex flex-col space-y-2.5">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-bold text-sp-ink hover:text-sp-midGray py-1 transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-sp-lightGray">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-btn bg-sp-ink text-sp-white font-bold text-xs tracking-wide"
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
