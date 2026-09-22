import Hero from '../components/Hero';
import CandidateMarquee from '../components/CandidateMarquee';
import HomeMacroStats from '../components/HomeMacroStats';
import CareerReadinessVisual from '../components/CareerReadinessVisual';
import HomeGatewayGrid from '../components/HomeGatewayGrid';
import HomeEditorialSpotlight from '../components/HomeEditorialSpotlight';
import HomeManifesto from '../components/HomeManifesto';
import FinalCTA from '../components/FinalCTA';

export default function HomePage() {
  return (
    <div className="w-full bg-[#FAF7F2] text-[#1F2421] overflow-x-hidden">
      {/* 1. CINEMATIC EDITORIAL HERO */}
      <Hero />

      {/* 2. VERIFIED ENTERPRISE ALUMNI LOGO MARQUEE */}
      <CandidateMarquee />

      {/* 3. EXECUTIVE OUTCOME TELEMETRY & MACRO METRICS */}
      <HomeMacroStats />

      {/* 4. INTERACTIVE DIAGNOSTIC READINESS BENCHMARK TOOL */}
      <CareerReadinessVisual />

      {/* 5. ECOSYSTEM GATEWAY NAVIGATOR (DIRECT ENTRY TO DEDICATED PAGES) */}
      <HomeGatewayGrid />

      {/* 6. EDITORIAL CASE STUDY SPOTLIGHT (FEATURED VERIFIED CANDIDATE BRIEF) */}
      <HomeEditorialSpotlight />

      {/* 7. THE SKILLUENCE ADVISORY CHARTER (3 FOUNDATIONAL PRINCIPLES) */}
      <HomeManifesto />

      {/* 8. EXECUTIVE CLOSING CTA */}
      <FinalCTA />
    </div>
  );
}
