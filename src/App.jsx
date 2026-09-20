import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

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
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Custom 404 Catch-All Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Editorial Footer */}
        <Footer />
      </div>
    </Router>
  );
}
