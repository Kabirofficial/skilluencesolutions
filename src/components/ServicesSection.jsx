import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  UserCheck, 
  Send, 
  MessageSquareCode, 
  Compass, 
  Target, 
  Sparkles,
  ArrowUpRight,
  CheckCircle
} from 'lucide-react';
import { LinkedInIcon } from './Icons';
import { servicesData } from '../data/siteData';
import ServiceModal from './ServiceModal';
import FloatingResumeCard from './FloatingResumeCard';
import LinkedInProfileCard from './LinkedInProfileCard';

export default function ServicesSection({ onSelectService }) {
  const [selectedService, setSelectedService] = useState(null);

  const getIcon = (id) => {
    switch (id) {
      case 'resume-cv': return <FileText className="w-6 h-6" />;
      case 'linkedin-opt': return <LinkedInIcon className="w-6 h-6" />;
      case 'profile-building': return <UserCheck className="w-6 h-6" />;
      case 'application-support': return <Send className="w-6 h-6" />;
      case 'interview-prep': return <MessageSquareCode className="w-6 h-6" />;
      case 'career-guidance': return <Compass className="w-6 h-6" />;
      case 'job-search-strategy': return <Target className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-24 bg-[#1C1E2E] relative overflow-hidden border-b border-[#68705A]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D96C4A]/15 text-[#D96C4A] text-xs font-bold uppercase tracking-wider mb-4 border border-[#D96C4A]/30 font-mono">
            Modular Career Support
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#FAF8F2] tracking-tight leading-tight mb-3">
            Everything you need to move forward.
          </h2>
          <p className="text-xs sm:text-base text-[#F3EFE6] leading-relaxed">
            Practical support for the parts of the job search that actually make a difference — backed by 3D profile tools and recruiter advocacy.
          </p>
        </div>

        {/* Asymmetrical Bento Grid with Horizontal Scroll Shifts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Card 1: 3D Floating Resume (Feature Card, Col-Span 7) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 rounded-3xl bg-[#25283D] border border-[#68705A] p-6 sm:p-8 flex flex-col justify-between hover:border-[#D96C4A] shadow-2xl transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-[#1C1E2E] text-[#D96C4A] border border-[#68705A]">
                  01 • CORE RESUME SUITE
                </span>
                <span className="text-xs text-[#A8B09A] font-mono flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#D96C4A]" />
                  Interactive 3D Preview
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#FAF8F2] mb-2">
                Resume & CV Support
              </h3>
              <p className="text-xs sm:text-sm text-[#F3EFE6] leading-relaxed mb-6">
                Transform raw coursework and projects into tailored, ATS-compliant resumes that highlight demonstrable achievements.
              </p>

              {/* 3D Floating Resume Component */}
              <div className="my-4">
                <FloatingResumeCard />
              </div>
            </div>

            <div className="pt-4 border-t border-[#68705A]/50 flex items-center justify-between">
              <span className="text-xs text-[#A8B09A] font-mono">Hover to scan ATS lines</span>
              <button
                type="button"
                onClick={() => setSelectedService(servicesData[0])}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D96C4A] hover:text-[#A95245] transition-colors"
              >
                <span>View Full Syllabus</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Card 2: 3D LinkedIn Profile Card (Col-Span 5) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 rounded-3xl bg-[#25283D] border border-[#68705A] p-6 sm:p-8 flex flex-col justify-between hover:border-[#D96C4A] shadow-2xl transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-[#1C1E2E] text-[#A8B09A] border border-[#68705A]">
                  02 • DIGITAL FOOTPRINT
                </span>
                <span className="text-xs text-[#D96C4A] font-mono font-bold">
                  Recruiter Discovery
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#FAF8F2] mb-2">
                LinkedIn Profile Optimization
              </h3>
              <p className="text-xs sm:text-sm text-[#F3EFE6] leading-relaxed mb-6">
                Elevate your professional digital presence with an engaging headline, targeted summary, skills endorsements, and discovery SEO.
              </p>

              {/* 3D LinkedIn Profile Card Component */}
              <div className="my-2">
                <LinkedInProfileCard />
              </div>
            </div>

            <div className="pt-4 border-t border-[#68705A]/50 flex items-center justify-between">
              <span className="text-xs text-[#A8B09A] font-mono">Rotate: -8° → 0°</span>
              <button
                type="button"
                onClick={() => setSelectedService(servicesData[1])}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D96C4A] hover:text-[#A95245] transition-colors"
              >
                <span>Details</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Complementary Services (Cards 03 to 08 with horizontal stagger) */}
          {servicesData.slice(2).map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: (idx % 2 === 0 ? -25 : 25) }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setSelectedService(service)}
              className="lg:col-span-4 rounded-3xl bg-[#25283D] border border-[#68705A] p-6 flex flex-col justify-between hover:border-[#D96C4A] transition-all cursor-pointer group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-[#1C1E2E] text-[#A8B09A]">
                    {service.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#1C1E2E] text-[#D96C4A] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#D96C4A] group-hover:text-[#25283D] transition-all">
                    {getIcon(service.id)}
                  </div>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-[#FAF8F2] mb-2 group-hover:text-[#D96C4A] transition-colors">
                  {service.title}
                </h4>

                <p className="text-xs text-[#F3EFE6] leading-relaxed mb-4">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#68705A]/50 flex items-center justify-between text-xs text-[#A8B09A]">
                <span>Practical Module</span>
                <span className="text-[#D96C4A] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Learn more <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}

        </div>

      </div>

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={Boolean(selectedService)}
        onClose={() => setSelectedService(null)}
        onSelectService={(title) => {
          if (onSelectService) onSelectService(title);
        }}
      />
    </section>
  );
}
