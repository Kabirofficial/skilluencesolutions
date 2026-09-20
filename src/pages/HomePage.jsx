import Hero from '../components/Hero';
import ProblemStory from '../components/ProblemStory';
import SolutionStory from '../components/SolutionStory';
import ServicesStory from '../components/ServicesStory';
import ProcessStory from '../components/ProcessStory';
import CareerJourney from '../components/CareerJourney';
import WhySkilluence from '../components/WhySkilluence';
import AudienceStory from '../components/AudienceStory';
import PhilosophySection from '../components/PhilosophySection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import FinalCTA from '../components/FinalCTA';

export default function HomePage() {
  return (
    <div className="w-full bg-sp-white text-sp-ink overflow-x-hidden">
      {/* 1. CINEMATIC EDITORIAL HERO (WHITE) */}
      <Hero />

      {/* 2. SEQUENTIAL PROBLEM SECTION (OFF-WHITE) */}
      <ProblemStory />

      {/* 3. METHODOLOGY & CONNECTING LINE (DARK: #2B2B2B) */}
      <SolutionStory />

      {/* 4. MODULAR SERVICES EDITORIAL PANELS (WHITE) */}
      <ServicesStory />

      {/* 5. STICKY PROCESS STORYTELLING (OFF-WHITE) */}
      <ProcessStory />

      {/* 6. SIGNATURE CAREER JOURNEY 2.5D/3D (DARK: #2B2B2B) */}
      <CareerJourney />

      {/* 7. WHY SKILLUENCE FOUR PILLARS (WHITE) */}
      <WhySkilluence />

      {/* 8. WHO WE HELP PERSONA PANELS (OFF-WHITE) */}
      <AudienceStory />

      {/* 9. SERVICE PHILOSOPHY & MANIFESTO (WHITE) */}
      <PhilosophySection />

      {/* 10. CLARITY & FAQ ACCORDION (OFF-WHITE) */}
      <FAQSection />

      {/* 11. DIRECT INTAKE CONTACT (WHITE) */}
      <ContactSection />

      {/* 12. FINAL EDITORIAL CTA (DARK: #2B2B2B) */}
      <FinalCTA />
    </div>
  );
}
