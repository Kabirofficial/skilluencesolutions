import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import WhoAreWePage from './pages/WhoAreWePage';
import CandidatesPage from './pages/CandidatesPage';
import EmployersPage from './pages/EmployersPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#25283D] text-[#FAF8F2] flex flex-col font-sans selection:bg-[#D96C4A] selection:text-[#FAF8F2] antialiased overflow-x-hidden">
        {/* Navigation */}
        <Navbar />

        {/* Multi-Page Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/who-are-we" element={<WhoAreWePage />} />
            <Route path="/candidates" element={<CandidatesPage />} />
            <Route path="/employers" element={<EmployersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}
