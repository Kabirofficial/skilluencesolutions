import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navLinks } from '../data/siteData';

// Curated desktop navigation links
const desktopNavLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Process", href: "/process" },
  { name: "Pricing", href: "/pricing" },
  { name: "Employers", href: "/employers" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8E2D8] shadow-xs'
          : 'bg-[#FAF7F2] border-b border-[#E8E2D8]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Masthead: High-res Emblem + Editorial Serif Title */}
          <Link 
            to="/" 
            className="flex items-center gap-3.5 group select-none shrink-0"
            aria-label="Skilluence Solutions Home"
          >
            <div className="h-10 w-10 rounded-sm border border-[#E8E2D8] bg-white p-1 flex items-center justify-center shadow-xs">
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
            
            <div className="flex flex-col justify-center">
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif font-normal text-xl sm:text-[22px] tracking-tight text-[#142F23] leading-none">
                  Skilluence
                </span>
                <span className="font-serif italic font-normal text-xl sm:text-[22px] tracking-tight text-[#C36B4E] leading-none">
                  Solutions
                </span>
              </div>
              <span className="text-[9px] font-sans font-medium uppercase tracking-[0.22em] text-[#556059] mt-1 hidden sm:block">
                Career Advisory & Talent Practice
              </span>
            </div>
          </Link>

          {/* Curated Editorial Navigation Links */}
          <nav 
            className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-xs font-sans uppercase tracking-[0.11em] xl:tracking-[0.13em]"
            aria-label="Main Navigation"
          >
            {desktopNavLinks.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative py-2 transition-colors duration-200 ${
                    isActive
                      ? 'text-[#142F23] font-semibold'
                      : 'text-[#556059] hover:text-[#142F23]'
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C36B4E]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#142F23] hover:bg-[#1C3F30] text-[#FAF7F2] text-xs font-sans uppercase tracking-[0.14em] font-medium transition-all duration-200 shadow-xs group"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C36B4E] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 border border-[#E8E2D8] bg-white text-[#142F23] hover:border-[#142F23] transition-colors focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#FAF7F2] border-b border-[#E8E2D8] lg:hidden overflow-hidden shadow-xl"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D8]">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#556059] font-medium">
                  Advisory Directory Index
                </span>
                <span className="text-[10px] font-serif italic text-[#C36B4E]">
                  Skilluence Solutions
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {navLinks.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-xs font-sans uppercase tracking-[0.12em] py-3 px-3.5 border transition-all ${
                        isActive
                          ? 'border-[#142F23] bg-white text-[#142F23] font-semibold shadow-xs'
                          : 'border-[#E8E2D8] bg-[#FAF7F2] text-[#556059] hover:text-[#142F23] hover:border-[#142F23] hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.name}</span>
                        {isActive && <span className="w-1.5 h-1.5 bg-[#C36B4E]" />}
                      </div>
                    </Link>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-[#E8E2D8]">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#142F23] text-[#FAF7F2] text-xs font-sans uppercase tracking-[0.14em] font-medium transition-colors"
                >
                  <span>Inquire With Advisory Desk</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C36B4E]" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
