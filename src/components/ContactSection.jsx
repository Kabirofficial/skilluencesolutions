import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentStatus: 'Student',
    targetRole: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.trim().length < 7) {
      newErrors.phone = 'Please provide a valid contact number';
    }

    if (!formData.targetRole.trim()) {
      newErrors.targetRole = 'Please specify your target role or industry';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      currentStatus: 'Student',
      targetRole: '',
      message: ''
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="relative min-h-[100svh] w-full bg-sp-white text-sp-ink py-20 sm:py-28 lg:py-32 flex flex-col justify-center border-b border-sp-lightGray overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-offWhite border border-sp-lightGray text-[11px] font-mono uppercase tracking-widest text-sp-charcoal mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sp-ink" />
            <span>DIRECT INTAKE / 11</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-sp-ink leading-tight">
            Start the Conversation.
          </h2>
          <p className="text-base sm:text-lg text-sp-midGray mt-4 max-w-xl font-normal">
            Tell us about your current status and target role. We review your profile to recommend the most practical service module.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Form with Validation & Success State */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-card bg-sp-offWhite border border-sp-lightGray shadow-sm">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-sp-white border border-sp-ink mx-auto flex items-center justify-center text-sp-ink">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black text-sp-ink uppercase tracking-tight">
                    Thanks! Your enquiry has been received.
                  </h3>
                  <p className="text-sm text-sp-midGray max-w-md mx-auto leading-relaxed">
                    Our career advisory desk will review your details against our service modules and reach out via your provided email.
                  </p>
                  <div className="pt-6">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-btn border border-sp-lightGray bg-sp-white hover:bg-sp-offWhite text-xs font-mono font-bold text-sp-ink transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Submit Another Enquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-sp-charcoal mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Alex Mercer"
                        className={`w-full px-4 py-3 rounded-btn bg-sp-white border text-sm text-sp-ink placeholder-sp-gray focus:outline-none focus:border-sp-ink transition-colors ${
                          errors.fullName ? 'border-sp-ink ring-1 ring-sp-ink' : 'border-sp-lightGray'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] font-mono text-sp-charcoal mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-sp-charcoal mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@example.com"
                        className={`w-full px-4 py-3 rounded-btn bg-sp-white border text-sm text-sp-ink placeholder-sp-gray focus:outline-none focus:border-sp-ink transition-colors ${
                          errors.email ? 'border-sp-ink ring-1 ring-sp-ink' : 'border-sp-lightGray'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] font-mono text-sp-charcoal mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-sp-charcoal mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +1 (555) 019-2834"
                        className={`w-full px-4 py-3 rounded-btn bg-sp-white border text-sm text-sp-ink placeholder-sp-gray focus:outline-none focus:border-sp-ink transition-colors ${
                          errors.phone ? 'border-sp-ink ring-1 ring-sp-ink' : 'border-sp-lightGray'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] font-mono text-sp-charcoal mt-1">{errors.phone}</p>
                      )}
                    </div>

                    {/* Current Status */}
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-sp-charcoal mb-2">
                        Current Status *
                      </label>
                      <select
                        value={formData.currentStatus}
                        onChange={(e) => setFormData({ ...formData, currentStatus: e.target.value })}
                        className="w-full px-4 py-3 rounded-btn bg-sp-white border border-sp-lightGray text-sm text-sp-ink focus:outline-none focus:border-sp-ink transition-colors"
                      >
                        <option value="Student">Current Student</option>
                        <option value="Fresh Graduate">Fresh Graduate</option>
                        <option value="Career Starter">Career Starter (1-3 yrs)</option>
                        <option value="Job Seeker">Active Job Seeker</option>
                      </select>
                    </div>
                  </div>

                  {/* Target Role */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-sp-charcoal mb-2">
                      Target Role / Domain *
                    </label>
                    <input
                      type="text"
                      value={formData.targetRole}
                      onChange={(e) => setFormData({ ...formData, targetRole: e.target.value })}
                      placeholder="e.g. Associate Software Engineer, Business Analyst, etc."
                      className={`w-full px-4 py-3 rounded-btn bg-sp-white border text-sm text-sp-ink placeholder-sp-gray focus:outline-none focus:border-sp-ink transition-colors ${
                        errors.targetRole ? 'border-sp-ink ring-1 ring-sp-ink' : 'border-sp-lightGray'
                      }`}
                    />
                    {errors.targetRole && (
                      <p className="text-[11px] font-mono text-sp-charcoal mt-1">{errors.targetRole}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-sp-charcoal mb-2">
                      Brief Message or Specific Service Needed (Optional)
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share any specific challenges with your resume, LinkedIn, or upcoming interview..."
                      className="w-full px-4 py-3 rounded-btn bg-sp-white border border-sp-lightGray text-sm text-sp-ink placeholder-sp-gray focus:outline-none focus:border-sp-ink transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-btn bg-sp-ink hover:bg-sp-charcoal text-sp-white font-bold text-sm transition-all shadow-sm active:scale-[0.98] disabled:opacity-50"
                    >
                      <span>{isSubmitting ? 'Transmitting Enquiry...' : 'Submit Profile for Advisory Review'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

          {/* Right Column: Authentic Contact Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-card bg-sp-white border border-sp-lightGray space-y-6">
              <h3 className="text-xl font-black text-sp-ink uppercase tracking-tight pb-3 border-b border-sp-lightGray">
                Advisory Desk Channels
              </h3>

              <div className="space-y-4 text-sm text-sp-charcoal">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-sp-ink mt-1 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-sp-midGray block font-bold">
                      PRIMARY EMAIL
                    </span>
                    <a href={`mailto:${siteConfig.contact.email}`} className="font-mono text-sp-ink hover:underline">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-sp-ink mt-1 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-sp-midGray block font-bold">
                      CAREERS DESK
                    </span>
                    <a href={`mailto:${siteConfig.contact.deskEmail}`} className="font-mono text-sp-ink hover:underline">
                      {siteConfig.contact.deskEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-sp-ink mt-1 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-sp-midGray block font-bold">
                      TELEPHONE
                    </span>
                    <span className="font-mono text-sp-ink">{siteConfig.contact.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-sp-ink mt-1 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-sp-midGray block font-bold">
                      OPERATING HOURS
                    </span>
                    <span className="text-sp-charcoal">{siteConfig.contact.workingHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-sp-ink mt-1 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-sp-midGray block font-bold">
                      OPERATIONS
                    </span>
                    <span className="text-sp-charcoal">{siteConfig.contact.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Honest Service Disclaimer */}
            <div className="p-6 rounded-card bg-sp-offWhite border border-sp-lightGray text-xs text-sp-midGray leading-relaxed font-normal">
              <span className="font-bold text-sp-ink block mb-1 font-mono uppercase">
                Notice of Independent Advisory:
              </span>
              {siteConfig.disclaimer}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
