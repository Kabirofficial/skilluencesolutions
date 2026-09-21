import { Link } from 'react-router-dom';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import { siteConfig } from '../data/siteData';

export default function ContactPage() {
  return (
    <div className="w-full bg-sp-white text-sp-ink pt-28 sm:pt-36">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 border-b border-sp-lightGray">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sp-midGray mb-4">
          <Link to="/" className="hover:text-sp-ink transition-colors">Home</Link>
          <span>/</span>
          <span className="text-sp-ink font-bold">Contact</span>
        </div>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-offWhite border border-sp-lightGray text-[11px] font-mono uppercase tracking-widest text-sp-charcoal mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
            <span>ADVISORY INTAKE DESK</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-sp-ink leading-[1.08]">
            Get In Touch.<br />
            <span className="font-times italic font-normal text-sp-charcoal">
              Direct access to our management team.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-sp-midGray mt-4 max-w-2xl leading-relaxed">
            Have a question about profile optimization, interview drills, or enterprise talent matching? Fill out the confidential intake form below or email us directly at <span className="font-mono text-sp-ink font-bold">{siteConfig.contact.email}</span>.
          </p>
        </div>
      </section>

      {/* Main Interactive Contact & Intake Component */}
      <ContactSection />
    </div>
  );
}
