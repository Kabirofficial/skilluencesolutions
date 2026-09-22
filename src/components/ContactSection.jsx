import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, MapPin, Clock, ArrowRight, CheckCircle2, RotateCcw, AlertCircle, Loader2 } from 'lucide-react';
import { siteConfig } from '../data/siteData';

const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_ID || "mljdbwwa";

function ContactFormInner({ onResetSuccess }) {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

  if (state.succeeded) {
    return (
      <div className="py-14 text-center space-y-5">
        <div className="w-14 h-14 rounded-sm bg-[#F4EFEA] border border-[#E8E2D8] mx-auto flex items-center justify-center text-[#142F23]">
          <CheckCircle2 className="w-7 h-7 text-[#142F23]" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#142F23] tracking-tight">
          Thank You. Your Profile Dossier Has Been Received.
        </h3>
        <p className="text-sm text-[#5E6963] max-w-md mx-auto leading-relaxed font-normal">
          Our senior advisory desk has received your submission and will review your technical and educational background. An advisor will contact you within one business day.
        </p>
        <div className="pt-4">
          <button
            type="button"
            onClick={onResetSuccess}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-[#E8E2D8] bg-[#FBF9F5] hover:border-[#142F23] text-xs font-sans uppercase tracking-[0.14em] font-semibold text-[#142F23] transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#C36B4E]" />
            <span>Submit Another Consultation Request</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Global Formspree Error if any */}
      {state.errors && state.errors.length > 0 && (
        <div className="p-4 rounded-sm bg-[#C36B4E]/10 border border-[#C36B4E]/30 text-[#C36B4E] text-xs font-medium flex items-start gap-3">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <div>
            <ValidationError errors={state.errors} />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label 
            htmlFor="fullname"
            className="block text-xs font-sans uppercase tracking-[0.12em] font-semibold text-[#1F2421] mb-2"
          >
            Full Name *
          </label>
          <input
            id="fullname"
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="e.g. Alex Mercer"
            className="w-full px-4 py-3 rounded-sm bg-[#FBF9F5] border border-[#E8E2D8] text-sm text-[#1F2421] placeholder-[#5E6963]/50 focus:outline-none focus:border-[#142F23] transition-colors"
          />
          <ValidationError 
            prefix="Full Name" 
            field="name"
            errors={state.errors}
            className="text-xs text-[#C36B4E] font-medium mt-1 block"
          />
        </div>

        {/* Email */}
        <div>
          <label 
            htmlFor="email"
            className="block text-xs font-sans uppercase tracking-[0.12em] font-semibold text-[#1F2421] mb-2"
          >
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="e.g. alex@example.com"
            className="w-full px-4 py-3 rounded-sm bg-[#FBF9F5] border border-[#E8E2D8] text-sm text-[#1F2421] placeholder-[#5E6963]/50 focus:outline-none focus:border-[#142F23] transition-colors"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="text-xs text-[#C36B4E] font-medium mt-1 block"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Phone */}
        <div>
          <label 
            htmlFor="phone"
            className="block text-xs font-sans uppercase tracking-[0.12em] font-semibold text-[#1F2421] mb-2"
          >
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            placeholder="e.g. +1 (555) 019-2834"
            className="w-full px-4 py-3 rounded-sm bg-[#FBF9F5] border border-[#E8E2D8] text-sm text-[#1F2421] placeholder-[#5E6963]/50 focus:outline-none focus:border-[#142F23] transition-colors"
          />
          <ValidationError 
            prefix="Phone" 
            field="phone"
            errors={state.errors}
            className="text-xs text-[#C36B4E] font-medium mt-1 block"
          />
        </div>

        {/* Current Status */}
        <div>
          <label 
            htmlFor="status"
            className="block text-xs font-sans uppercase tracking-[0.12em] font-semibold text-[#1F2421] mb-2"
          >
            Current Status *
          </label>
          <select
            id="status"
            name="status"
            className="w-full px-4 py-3 rounded-sm bg-[#FBF9F5] border border-[#E8E2D8] text-sm text-[#1F2421] focus:outline-none focus:border-[#142F23] transition-colors"
          >
            <option value="Student">Current Student</option>
            <option value="OPT / CPT Student">OPT / CPT International Student</option>
            <option value="Fresh Graduate">Fresh Graduate</option>
            <option value="Career Starter">Career Starter (1-3 yrs)</option>
            <option value="Job Seeker">Active Job Seeker (H1B / Full-Time)</option>
            <option value="Employer / Hiring Manager">Employer / Hiring Manager Seeking Talent</option>
          </select>
          <ValidationError 
            prefix="Status" 
            field="status"
            errors={state.errors}
            className="text-xs text-[#C36B4E] font-medium mt-1 block"
          />
        </div>
      </div>

      {/* Target Role */}
      <div>
        <label 
          htmlFor="targetRole"
          className="block text-xs font-sans uppercase tracking-[0.12em] font-semibold text-[#1F2421] mb-2"
        >
          Target Role / Domain *
        </label>
        <input
          id="targetRole"
          type="text"
          name="targetRole"
          required
          autoComplete="organization-title"
          placeholder="e.g. Associate Software Engineer, Data Scientist, etc."
          className="w-full px-4 py-3 rounded-sm bg-[#FBF9F5] border border-[#E8E2D8] text-sm text-[#1F2421] placeholder-[#5E6963]/50 focus:outline-none focus:border-[#142F23] transition-colors"
        />
        <ValidationError 
          prefix="Target Role" 
          field="targetRole"
          errors={state.errors}
          className="text-xs text-[#C36B4E] font-medium mt-1 block"
        />
      </div>

      {/* Message */}
      <div>
        <label 
          htmlFor="message"
          className="block text-xs font-sans uppercase tracking-[0.12em] font-semibold text-[#1F2421] mb-2"
        >
          Brief Message or Specific Advisory Needed (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Share your timeline, visa status, or specific challenges with your current search..."
          className="w-full px-4 py-3 rounded-sm bg-[#FBF9F5] border border-[#E8E2D8] text-sm text-[#1F2421] placeholder-[#5E6963]/50 focus:outline-none focus:border-[#142F23] transition-colors resize-none"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="text-xs text-[#C36B4E] font-medium mt-1 block"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm bg-[#142F23] hover:bg-[#1B3E2F] text-[#FBF9F5] font-sans uppercase tracking-[0.14em] font-semibold text-xs transition-colors duration-200 disabled:opacity-50 cursor-pointer"
        >
          {state.submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-[#C36B4E]" />
              <span>Transmitting to Advisory Desk...</span>
            </>
          ) : (
            <>
              <span>Request Advisory Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#C36B4E]" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

export default function ContactSection() {
  const [formKey, setFormKey] = useState(0);

  return (
    <section
      id="contact"
      className="relative w-full bg-[#FBF9F5] text-[#1F2421] py-24 sm:py-32 border-b border-[#E8E2D8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#C36B4E] font-semibold">
            <span>Confidential Advisory Intake</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#142F23] leading-[1.1]">
            Begin Your Consultation.
          </h2>
          <p className="text-base sm:text-lg text-[#5E6963] mt-3 max-w-xl font-normal leading-relaxed">
            Tell us about your educational background and target career objectives. Our senior advisory desk will review your profile to recommend the appropriate guidance engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Formspree Intake Suite */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-sm bg-[#FFFFFF] border border-[#E8E2D8] shadow-[0_4px_24px_rgba(20,47,35,0.03)]">
              <ContactFormInner 
                key={formKey} 
                onResetSuccess={() => setFormKey(prev => prev + 1)} 
              />
            </div>
          </div>

          {/* Right Column: Advisory Desk Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 sm:p-10 rounded-sm bg-[#FFFFFF] border border-[#E8E2D8] space-y-6">
              <h3 className="text-xl font-serif font-normal text-[#142F23] pb-4 border-b border-[#E8E2D8]">
                Advisory Desk Channels
              </h3>

              <div className="space-y-5 text-sm text-[#1F2421]">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-sm bg-[#F4EFEA] flex items-center justify-center text-[#142F23] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-[#C36B4E]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-[0.16em] text-[#546B5F] block font-semibold">
                      Direct Advisory Desk
                    </span>
                    <a href={`mailto:${siteConfig.contact.email}`} className="font-sans text-sm text-[#142F23] hover:underline underline-offset-4 font-medium">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-sm bg-[#F4EFEA] flex items-center justify-center text-[#142F23] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#C36B4E]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-[0.16em] text-[#546B5F] block font-semibold">
                      Consultation Hours
                    </span>
                    <span className="text-sm text-[#1F2421]">{siteConfig.contact.workingHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-sm bg-[#F4EFEA] flex items-center justify-center text-[#142F23] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#C36B4E]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-[0.16em] text-[#546B5F] block font-semibold">
                      Practice Operations
                    </span>
                    <span className="text-sm text-[#1F2421]">{siteConfig.contact.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ethical Representation Statement */}
            <div className="p-6 rounded-sm bg-[#F4EFEA] border border-[#E8E2D8] text-xs text-[#5E6963] leading-relaxed font-normal">
              <span className="font-serif font-bold text-[#142F23] block mb-1 text-sm">
                Charter of Ethical Representation
              </span>
              {siteConfig.disclaimer}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
