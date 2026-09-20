import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Users, 
  Clock, 
  FileCheck, 
  Send, 
  CheckCircle2, 
  Sparkles,
  Briefcase
} from 'lucide-react';
import { employerServices } from '../data/siteData';

export default function EmployersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [employerForm, setEmployerForm] = useState({
    companyName: '',
    contactName: '',
    workEmail: '',
    phone: '',
    hiringNeeds: '',
    rolesCount: '1-3 Roles',
    timeframe: 'Immediately'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const getServiceIcon = (id) => {
    switch (id) {
      case 'industry': return <Briefcase className="w-6 h-6 text-[#D96C4A]" />;
      case 'screened': return <Users className="w-6 h-6 text-[#A8B09A]" />;
      case 'cycles': return <Clock className="w-6 h-6 text-[#D96C4A]" />;
      case 'workforce': return <Building2 className="w-6 h-6 text-[#A8B09A]" />;
      case 'compliance': return <FileCheck className="w-6 h-6 text-[#D96C4A]" />;
      default: return <Sparkles className="w-6 h-6 text-[#D96C4A]" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#25283D] text-[#FAF8F2] pt-28 pb-20">
      
      {/* 1. Header Banner */}
      <section className="py-16 overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D96C4A]/15 border border-[#D96C4A]/40 text-[#D96C4A] text-xs font-bold uppercase tracking-widest mb-6">
            <Building2 className="w-3.5 h-3.5" />
            <span>Strategic Talent Acquisition Partner</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#FAF8F2] mb-6 max-w-4xl mx-auto leading-tight">
            Stop sifting through 1,000 resumes.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF8F2] via-[#D96C4A] to-[#A8B09A] block">
              Meet interview-ready, verified talent.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#F3EFE6] max-w-2xl mx-auto leading-relaxed">
            Skilluence Solutions connects top-tier companies with pre-screened professionals. We handle technical vetting, background checks, and payroll compliance so you hire with speed and confidence.
          </p>
        </div>
      </section>

      {/* 2. EMPLOYER SERVICES GRID */}
      <section className="py-16 bg-[#1C1E2E] border-t border-b border-[#68705A]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D96C4A]">
              Enterprise Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#FAF8F2] mt-3 mb-4">
              Designed For High-Growth Companies
            </h2>
            <p className="text-sm sm:text-base text-[#F3EFE6]">
              How our recruitment infrastructure accelerates your hiring pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {employerServices.map((serv, idx) => (
              <div
                key={serv.id}
                className="p-8 rounded-3xl bg-[#25283D] border border-[#68705A]/50 hover:border-[#D96C4A] transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#1C1E2E] border border-[#68705A]/60 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#D96C4A] transition-transform">
                    {getServiceIcon(serv.id)}
                  </div>
                  
                  <span className="text-xs font-mono text-[#D96C4A] font-bold block mb-1">
                    SOLUTION 0{idx + 1}
                  </span>

                  <h3 className="text-xl font-bold text-[#FAF8F2] mb-3">
                    {serv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#F3EFE6] leading-relaxed mb-6">
                    {serv.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#68705A]/40 flex items-center justify-between text-xs font-mono text-[#D96C4A] font-semibold">
                  <span>{serv.metrics}</span>
                  <CheckCircle2 className="w-4 h-4 text-[#D96C4A]" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. EMPLOYER REQUISITION FORM */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-[#1C1E2E] border border-[#68705A]/50 shadow-2xl">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D96C4A]">
                Talent Request
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FAF8F2] mt-2 mb-2">
                Request Pre-Screened Candidates
              </h3>
              <p className="text-xs sm:text-sm text-[#F3EFE6]">
                Share your open mandates. Our recruitment directors will match you with vetted candidates within our SLA window.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#D96C4A]/20 text-[#D96C4A] border border-[#D96C4A]/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#FAF8F2]">
                    Talent Requisition Received
                  </h4>
                  <p className="text-sm text-[#F3EFE6] max-w-md mx-auto">
                    Thank you, {employerForm.contactName || 'Partner'}! Our enterprise hiring team will review your mandate for {employerForm.companyName || 'your company'} and schedule a talent sync shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#25283D] hover:bg-[#68705A] text-xs text-[#FAF8F2] font-semibold"
                  >
                    Submit Another Mandate
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#F3EFE6] mb-1.5">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={employerForm.companyName}
                        onChange={(e) => setEmployerForm({ ...employerForm, companyName: e.target.value })}
                        placeholder="Acme Corp / Tech Startup"
                        className="w-full px-4 py-3 rounded-xl bg-[#25283D] border border-[#68705A]/60 text-sm text-[#FAF8F2] placeholder-[#A8B09A]/60 focus:outline-none focus:ring-2 focus:ring-[#D96C4A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#F3EFE6] mb-1.5">
                        Your Name & Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={employerForm.contactName}
                        onChange={(e) => setEmployerForm({ ...employerForm, contactName: e.target.value })}
                        placeholder="Sarah Jenkins, VP of Engineering"
                        className="w-full px-4 py-3 rounded-xl bg-[#25283D] border border-[#68705A]/60 text-sm text-[#FAF8F2] placeholder-[#A8B09A]/60 focus:outline-none focus:ring-2 focus:ring-[#D96C4A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#F3EFE6] mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={employerForm.workEmail}
                        onChange={(e) => setEmployerForm({ ...employerForm, workEmail: e.target.value })}
                        placeholder="sarah@acme.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#25283D] border border-[#68705A]/60 text-sm text-[#FAF8F2] placeholder-[#A8B09A]/60 focus:outline-none focus:ring-2 focus:ring-[#D96C4A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#F3EFE6] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={employerForm.phone}
                        onChange={(e) => setEmployerForm({ ...employerForm, phone: e.target.value })}
                        placeholder="+1 (555) 019-2834"
                        className="w-full px-4 py-3 rounded-xl bg-[#25283D] border border-[#68705A]/60 text-sm text-[#FAF8F2] placeholder-[#A8B09A]/60 focus:outline-none focus:ring-2 focus:ring-[#D96C4A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#F3EFE6] mb-1.5">
                        Number of Roles
                      </label>
                      <select
                        value={employerForm.rolesCount}
                        onChange={(e) => setEmployerForm({ ...employerForm, rolesCount: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#25283D] border border-[#68705A]/60 text-sm text-[#FAF8F2] focus:outline-none focus:ring-2 focus:ring-[#D96C4A]"
                      >
                        <option value="1-3 Roles">1 - 3 Roles</option>
                        <option value="4-10 Roles">4 - 10 Roles</option>
                        <option value="10+ Roles">10+ Roles / Rapid Scaling</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#F3EFE6] mb-1.5">
                        Hiring Timeframe
                      </label>
                      <select
                        value={employerForm.timeframe}
                        onChange={(e) => setEmployerForm({ ...employerForm, timeframe: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#25283D] border border-[#68705A]/60 text-sm text-[#FAF8F2] focus:outline-none focus:ring-2 focus:ring-[#D96C4A]"
                      >
                        <option value="Immediately">Immediately (Within 2 Weeks)</option>
                        <option value="Next 30 Days">Next 30 Days</option>
                        <option value="Ongoing Pipeline">Ongoing Quarterly Pipeline</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#F3EFE6] mb-1.5">
                      Target Role Requirements & Tech Stack *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={employerForm.hiringNeeds}
                      onChange={(e) => setEmployerForm({ ...employerForm, hiringNeeds: e.target.value })}
                      placeholder="e.g. 2 Full-Stack Engineers (React, Node, AWS), 1 Product Analyst. Fast turnaround required."
                      className="w-full px-4 py-3 rounded-xl bg-[#25283D] border border-[#68705A]/60 text-sm text-[#FAF8F2] placeholder-[#A8B09A]/60 focus:outline-none focus:ring-2 focus:ring-[#D96C4A]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-[#D96C4A] hover:bg-[#A95245] text-[#FAF8F2] font-black text-sm shadow-lg shadow-[#D96C4A]/25 hover:scale-[1.01] transition-transform disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Submitting Mandate...' : 'Submit Employer Mandate'}</span>
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

    </div>
  );
}
