import Hero from '../components/Hero';
import CandidateMarquee from '../components/CandidateMarquee';
import ProblemStory from '../components/ProblemStory';
import SolutionStory from '../components/SolutionStory';
import ServicesStory from '../components/ServicesStory';
import ProcessStory from '../components/ProcessStory';
import CareerJourney from '../components/CareerJourney';
import PricingSection from '../components/PricingSection';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import WhySkilluence from '../components/WhySkilluence';
import AudienceStory from '../components/AudienceStory';
import EmployerSolutions from '../components/EmployerSolutions';
import PhilosophySection from '../components/PhilosophySection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import FinalCTA from '../components/FinalCTA';

export default function HomePage() {
  return (
    <div className="w-full bg-sp-white text-sp-ink overflow-x-hidden">
      {/* 1. CINEMATIC EDITORIAL HERO (WHITE) */}
      <Hero />

      {/* 2. CANDIDATES PLACED IN MARQUEE (PAYPAL, INTEL, NVIDIA, AMAZON, MICROSOFT, ETC.) */}
      <CandidateMarquee />

      {/* 3. SEQUENTIAL PROBLEM SECTION (OFF-WHITE) */}
      <ProblemStory />

      {/* 4. METHODOLOGY & CONNECTING LINE (DARK: #2B2B2B) */}
      <SolutionStory />

      {/* 5. MODULAR SERVICES EDITORIAL PANELS (WHITE) */}
      <ServicesStory />

      {/* 6. STICKY PROCESS STORYTELLING (OFF-WHITE) */}
      <ProcessStory />

      {/* 7. SIGNATURE CAREER JOURNEY 2.5D/3D (DARK: #2B2B2B) */}
      <CareerJourney />

      {/* 8. MARKETING PLAN & PLACEMENT PRICING (WHITE) */}
      <PricingSection />

      {/* 9. TESTIMONIALS CAROUSEL (INDIAN NAMES & 1,000+ RECRUITERS STAT) (OFF-WHITE) */}
      <TestimonialsCarousel />

      {/* 10. WHAT MAKES SKILLUENCE DIFFERENT & CANDIDATE ADVANTAGE (WHITE) */}
      <WhySkilluence />

      {/* 11. WHO WE HELP PERSONA PANELS (OFF-WHITE) */}
      <AudienceStory />

      {/* 12. FOR EMPLOYERS & ENTERPRISE STAFFING (WHITE) */}
      <EmployerSolutions />

      {/* 13. SERVICE PHILOSOPHY & MANIFESTO (OFF-WHITE) */}
      <PhilosophySection />

      {/* 14. CLARITY & FAQ ACCORDION WITH CATEGORIES (WHITE) */}
      <FAQSection />

      {/* 15. DIRECT INTAKE CONTACT (OFF-WHITE) */}
      <ContactSection />

      {/* 16. FINAL EDITORIAL CTA (DARK: #2B2B2B) */}
      <FinalCTA />
    </div>
  );
}
