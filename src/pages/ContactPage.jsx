import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';
import { siteConfig } from '../data/siteData';

export default function ContactPage() {
  return (
    <div className="w-full bg-[#FAF7F2] text-[#1F2421] pt-28 sm:pt-36">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-b border-[#E8E2D8]">
        <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#556059] mb-6 font-medium">
          <Link to="/" className="hover:text-[#142F23] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#142F23] font-semibold">Contact</span>
        </div>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#E8E2D8] bg-[#FBF9F5] text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#142F23] mb-6">
            <span className="w-1.5 h-1.5 bg-[#C36B4E]" />
            <span>Advisory Intake Desk</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-normal tracking-tight text-[#142F23] leading-[1.12]">
            Get In Touch. <br />
            <span className="italic font-serif text-[#C36B4E]">
              Direct access to our management team.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#556059] mt-6 max-w-2xl leading-relaxed font-light">
            Have a question about profile optimization, interview drills, or enterprise talent matching? Fill out the confidential intake form below or email us directly at <span className="font-sans text-[#142F23] font-medium underline decoration-[#C36B4E]">{siteConfig.contact.email}</span>.
          </p>
        </div>
      </section>

      {/* Main Interactive Contact & Intake Component (Integrated with Formspree) */}
      <ContactSection />
    </div>
  );
}
