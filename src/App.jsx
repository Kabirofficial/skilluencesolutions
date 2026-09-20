import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-sp-white text-sp-ink flex flex-col font-sans selection:bg-sp-ink selection:text-sp-white antialiased overflow-x-hidden">
        {/* Editorial Monochrome Navigation */}
        <Navbar />

        {/* Master Editorial Narrative */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Direct fallback routes so existing bookmarks or links safely resolve to home narrative */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Editorial Footer */}
        <Footer />
      </div>
    </Router>
  );
}
