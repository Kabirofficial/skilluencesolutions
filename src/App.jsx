import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageMeta from './components/PageMeta';
import Preloader from './components/Preloader';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProcessPage from './pages/ProcessPage';
import PricingPage from './pages/PricingPage';
import TestimonialsPage from './pages/TestimonialsPage';
import EmployersPage from './pages/EmployersPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18, ease: "easeInOut" }}
        className="w-full flex-grow flex flex-col"
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/roadmap" element={<ProcessPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/employers" element={<EmployersPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Custom 404 Catch-All Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(() => {
    try {
      return sessionStorage.getItem('skilluence_has_preloaded') !== 'true';
    } catch {
      return true;
    }
  });

  const handlePreloadComplete = () => {
    try {
      sessionStorage.setItem('skilluence_has_preloaded', 'true');
    } catch {
      // safe fallback
    }
    setIsLoading(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <PageMeta />
      
      {/* Editorial Platform Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="platform-preloader" onComplete={handlePreloadComplete} />
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-sp-white text-sp-ink flex flex-col font-sans selection:bg-sp-ink selection:text-sp-white antialiased overflow-x-hidden">
        {/* Editorial Monochrome Navigation */}
        <Navbar />

        {/* Master Editorial Narrative */}
        <main className="flex-grow flex flex-col">
          <AnimatedRoutes />
        </main>

        {/* Global Editorial Footer */}
        <Footer />
      </div>
    </Router>
  );
}
