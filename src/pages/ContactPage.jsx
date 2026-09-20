import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  UserCheck, 
  RotateCcw,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { siteConfig, faqItems } from '../data/siteData';

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState('candidate'); // 'candidate' | 'employer'
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    currentStatus: 'Student',
    targetRoleOrCompany: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      currentStatus: 'Student',
      targetRoleOrCompany: '',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-[#25283D] text-[#FAF8F2] pt-28 pb-20">
      
      {/* 1. Header Banner */}
      <section className="py-12 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D96C4A]/15 border border-[#D96C4A]/40 text-[#D96C4A] text-xs font-bold uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Cross The Bridge</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#FAF8F2] mb-4">
          Let's talk about your next step.
        </h1>

        <p className="text-base sm:text-lg text-[#F3EFE6] leading-relaxed max-w-xl mx-auto">
          Whether you're a candidate tired of automated silence or an employer seeking verified talent, our team and founder Sahil Jesani are ready to help.
        </p>

        {/* Track Toggle in Palette */}
        <div className="mt-10 inline-flex p-1.5 rounded-full bg-[#1C1E2E] border border-[#68705A]/60">
          <button
            type="button"
            onClick={() => { setActiveTab('candidate'); setSubmitted(false); }}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeTab === 'candidate'
                ? 'bg-[#D96C4A] text-[#FAF8F2] shadow-md'
                : 'text-[#F3EFE6] hover:text-[#FAF8F2]'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>I Am A Candidate</span>
          </button>

          <button
            type="button"
            onClick={() => { setActiveTab('employer'); setSubmitted(false); }}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeTab === 'employer'
                ? 'bg-[#D96C4A] text-[#FAF8F2] shadow-md'
                : 'text-[#F3EFE6] hover:text-[#FAF8F2]'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>I Am An Employer</span>
          </button>
        </div>
      </section>

      {/* 2. Main Content Grid: Form + Info Cards */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-7 bg-[#1C1E2E] rounded-3xl p-8 sm:p-12 border border-[#68705A]/50 shadow-2xl backdrop-blur-xl">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#D96C4A]/20 text-[#D96C4A] border border-[#D96C4A]/40 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#FAF8F2]">
                      Enquiry Received!
                    </h3>
                    <p className="text-sm text-[#F3EFE6] max-w-md mx-auto leading-relaxed">
                      Thank you, {formData.name}! Your {activeTab === 'candidate' ? 'career assessment profile' : 'employer talent requisition'} has been forwarded to Sahil Jesani and our senior recruitment desk. Please check your email or phone for our response.
                    </p>
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#25283D] hover:bg-[#68705A] text-xs font-bold text-[#F3EFE6] transition-colors"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Submit Another Message</span>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="border-b border-[#68705A]/40 pb-4 mb-2">
                      <h3 className="text-xl font-bold text-[#FAF8F2]">
                        {activeTab === 'candidate' 
                          ? 'Candidate Profile Assessment' 
                          : 'Employer Talent Requisition'}
                      </h3>
                      <p className="text-xs text-[#F3EFE6] mt-0.5">
                        {activeTab === 'candidate'
                          ? 'Tell us where you are and where you want to go.'
                          : 'Tell us about your open roles and requirements.'}
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#F3EFE6] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jordan Miller"
                        className="w-full px-4 py-3 rounded-xl bg-[#25283D] border border-[#68705A]/60 text-sm text-[#FAF8F2] placeholder-[#A8B09A]/60 focus:outline-none focus:ring-2 focus:ring-[#D96C4A]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#F3EFE6] mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jordan@example.com"
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
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 019-2834"
                          className="w-full px-4 py-3 rounded-xl bg-[#25283D] border border-[#68705A]/60 text-sm text-[#FAF8F2] placeholder-[#A8B09A]/60 focus:outline-none focus:ring-2 focus:ring-[#D96C4A]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#F3EFE6] mb-1.5">
                          {activeTab === 'candidate' ? 'Current Status *' : 'Organization Size *'}
                        </label>
                        {activeTab === 'candidate' ? (
                          <select
                            value={formData.currentStatus}
                            onChange={(e) => setFormData({ ...formData, currentStatus: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-[#25283D] border border-[#68705A]/60 text-sm text-[#FAF8F2] focus:outline-none focus:ring-2 focus:ring-[#D96C4A]"
                          >
                            <option value="Student">College Student</option>
                            <option value="Fresh Graduate">Fresh Graduate</option>
                            <option value="Career Starter">Career Starter (0–2 yrs)</option>
                            <option value="Job Seeker">Active Job Seeker</option>
                            <option value="Working Professional">Working Professional</option>
                          </select>
                        ) : (
                          <select
                            value={formData.currentStatus}
                            onChange={(e) => setFormData({ ...formData, currentStatus: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-[#25283D] border border-[#68705A]/60 text-sm text-[#FAF8F2] focus:outline-none focus:ring-2 focus:ring-[#D96C4A]"
                          >
                            <option value="1-50">Startup (1–50 employees)</option>
                            <option value="51-200">Growth (51–200 employees)</option>
                            <option value="201-1000">Mid-Market (201–1,000)</option>
                            <option value="1000+">Enterprise (1,000+)</option>
                          </select>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#F3EFE6] mb-1.5">
                          {activeTab === 'candidate' ? 'Target Role / Specialty *' : 'Company Name *'}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.targetRoleOrCompany}
                          onChange={(e) => setFormData({ ...formData, targetRoleOrCompany: e.target.value })}
                          placeholder={activeTab === 'candidate' ? 'e.g. Software Engineer / Data Analyst' : 'e.g. Acme Technologies'}
                          className="w-full px-4 py-3 rounded-xl bg-[#25283D] border border-[#68705A]/60 text-sm text-[#FAF8F2] placeholder-[#A8B09A]/60 focus:outline-none focus:ring-2 focus:ring-[#D96C4A]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#F3EFE6] mb-1.5">
                        Tell Us About Your Goals / Current Frustrations
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={activeTab === 'candidate' 
                          ? 'What has been holding your job search back? (e.g. lack of interview calls, weak resume, salary negotiation)...'
                          : 'What are your key talent bottlenecks and preferred hiring start dates?'}
                        className="w-full px-4 py-3 rounded-xl bg-[#25283D] border border-[#68705A]/60 text-sm text-[#FAF8F2] placeholder-[#A8B09A]/60 focus:outline-none focus:ring-2 focus:ring-[#D96C4A]"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-xl bg-[#D96C4A] hover:bg-[#A95245] text-[#FAF8F2] font-black text-sm shadow-xl shadow-[#D96C4A]/25 hover:scale-[1.01] transition-transform disabled:opacity-60 flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>
                          {isSubmitting 
                            ? 'Transmitting Enquiry...' 
                            : activeTab === 'candidate' ? 'Send Candidate Assessment Request' : 'Send Employer Inquiry'}
                        </span>
                      </button>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>

            {/* Direct Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="p-8 rounded-3xl bg-[#1C1E2E] border border-[#68705A]/50">
                <h4 className="text-base font-bold text-[#FAF8F2] mb-6 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#D96C4A]" />
                  <span>Direct Communication Channels</span>
                </h4>

                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#D96C4A]/15 text-[#D96C4A] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-mono text-[#A8B09A] block font-semibold">
                        Founder & Advisory Desk
                      </span>
                      <span className="text-[#FAF8F2] font-mono text-xs sm:text-sm">
                        {siteConfig.contactPlaceholders.email}
                      </span>
                      <span className="text-[11px] text-[#F3EFE6]/70 block mt-0.5">
                        Reviewed directly by Sahil Jesani & Directors
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#68705A]/40 text-[#FAF8F2] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-mono text-[#A8B09A] block font-semibold">
                        Inquiry Hotline
                      </span>
                      <span className="text-[#FAF8F2] font-mono text-xs sm:text-sm">
                        {siteConfig.contactPlaceholders.phone}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#D96C4A]/15 text-[#D96C4A] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-mono text-[#A8B09A] block font-semibold">
                        Global Operational Reach
                      </span>
                      <span className="text-[#F3EFE6] text-xs sm:text-sm">
                        {siteConfig.contactPlaceholders.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#68705A]/40 text-[#FAF8F2] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-mono text-[#A8B09A] block font-semibold">
                        Recruitment Hours
                      </span>
                      <span className="text-[#F3EFE6] text-xs sm:text-sm">
                        {siteConfig.contactPlaceholders.workingHours}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* SLA Reassurance Card */}
              <div className="p-6 rounded-3xl bg-[#1C1E2E]/80 border border-[#68705A]/50 text-xs text-[#F3EFE6] leading-relaxed">
                <span className="text-[#D96C4A] font-bold block mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> Mutual Accountability
                </span>
                We never sell your data or spam you with automated robot messages. Every enquiry is treated with human dignity, confidentiality, and active care.
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. FAQ Section */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D96C4A]">
            Transparency First
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#FAF8F2] mt-2">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-3">
          {faqItems.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl bg-[#1C1E2E] border border-[#68705A]/50 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left text-sm sm:text-base font-bold text-[#FAF8F2]"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180 text-[#D96C4A]' : 'text-[#A8B09A]'}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-xs sm:text-sm text-[#F3EFE6] leading-relaxed border-t border-[#68705A]/40 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
