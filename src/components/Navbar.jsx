import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Compass, HeartHandshake } from 'lucide-react';
import { siteConfig, navLinks } from '../data/siteData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#25283D]/92 backdrop-blur-xl border-b border-[#68705A]/70 shadow-xl shadow-black/25 py-3.5'
          : 'bg-gradient-to-b from-[#25283D]/98 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group focus:outline-none rounded-xl p-1"
          >
            <img 
              src="/images/logo.png" 
              alt="Skilluence Solutions Logo" 
              className="h-9 sm:h-10 w-auto object-contain rounded-lg group-hover:scale-105 transition-transform duration-200"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="flex flex-col">
              <span className="font-black text-base sm:text-lg tracking-tight text-[#FAF8F2] flex items-center gap-1.5">
                SKILLUENCE
                <span className="text-[#D96C4A]">SOLUTIONS</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-[#A8B09A] flex items-center gap-1 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D96C4A] animate-pulse"></span>
                A bridge from frustration to happiness
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#1C1E2E]/85 p-1.5 rounded-full border border-[#68705A]/70 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 text-xs font-bold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-[#D96C4A] text-[#25283D] shadow-md shadow-[#D96C4A]/25'
                      : 'text-[#F3EFE6] hover:text-[#FAF8F2] hover:bg-[#68705A]/35'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D96C4A] hover:bg-[#A95245] text-[#25283D] font-black text-xs shadow-md shadow-[#D96C4A]/20 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
            >
              <HeartHandshake className="w-4 h-4 text-[#25283D]" />
              <span>Cross The Bridge</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#F3EFE6] hover:text-[#FAF8F2] hover:bg-[#68705A]/40 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[70px] z-40 bg-[#25283D]/98 border-b border-[#68705A] backdrop-blur-2xl px-6 py-8 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col space-y-4">
              <div className="text-[11px] font-bold text-[#A8B09A] uppercase tracking-widest px-2 font-mono">
                Navigation
              </div>
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-3 text-sm font-bold rounded-xl transition-all ${
                        isActive 
                          ? 'bg-[#D96C4A] text-[#25283D]' 
                          : 'text-[#F3EFE6] hover:text-[#FAF8F2] hover:bg-[#68705A]/35'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-[#68705A]">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#D96C4A] text-[#25283D] font-black text-sm shadow-lg shadow-[#D96C4A]/25 active:scale-[0.98] transition-transform"
                >
                  <HeartHandshake className="w-4 h-4 text-[#25283D]" />
                  <span>Start Your Career Transition</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
