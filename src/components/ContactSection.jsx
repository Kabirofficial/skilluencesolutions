import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  AlertCircle,
  RotateCcw
} from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function ContactSection({ prefilledService }) {
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

  // If a prefilled service was selected from a service modal
  useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({
        ...prev,
        message: prev.message 
          ? `${prev.message} (Interested in: ${prefilledService})` 
          : `I am interested in learning more about the ${prefilledService} service.`
      }));
    }
  }, [prefilledService]);

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
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please provide a valid contact number';
    }

    if (!formData.currentStatus) {
      newErrors.currentStatus = 'Please select your current status';
    }

    if (!formData.targetRole.trim()) {
      newErrors.targetRole = 'Please indicate your target role or field';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate frontend submission transition
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
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
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Radial Lights */}
      <div 
        className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Consultation & Assessment
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Let's talk about your next step.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Tell us where you are in your career journey and what you're working toward. We'll explore how our personalized guidance can support your trajectory.
          </p>
        </div>

        {/* Two Column Layout: Form + Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form or Success Card */}
          <div className="lg:col-span-7 bg-slate-800/80 rounded-3xl p-8 sm:p-10 border border-slate-700/80 shadow-2xl backdrop-blur-xl">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-8 text-center space-y-5"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Thanks! Your enquiry has been received.
                    </h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                      Please check your email/phone for further communication.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-700 text-xs text-slate-400 max-w-md mx-auto text-left space-y-1">
                    <div className="font-semibold text-slate-300">Submitted summary:</div>
                    <div><span className="text-slate-400">Name:</span> {formData.fullName}</div>
                    <div><span className="text-slate-400">Target Role:</span> {formData.targetRole}</div>
                    <div><span className="text-slate-400">Status:</span> {formData.currentStatus}</div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-semibold transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Submit Another Enquiry</span>
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-slate-700/80">
                    <h3 className="text-lg font-bold text-white">
                      Career Assessment Enquiry
                    </h3>
                    <span className="text-[11px] text-slate-400">
                      Confidential & Frontend Verified
                    </span>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Alex Johnson"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                        errors.fullName ? 'border-red-500' : 'border-slate-700 focus:border-blue-500'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                          errors.email ? 'border-red-500' : 'border-slate-700 focus:border-blue-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 00000"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                          errors.phone ? 'border-red-500' : 'border-slate-700 focus:border-blue-500'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Current Status & Target Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="currentStatus" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Current Status *
                      </label>
                      <select
                        id="currentStatus"
                        value={formData.currentStatus}
                        onChange={(e) => setFormData({ ...formData, currentStatus: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      >
                        <option value="Student">College Student</option>
                        <option value="Fresh Graduate">Fresh Graduate</option>
                        <option value="Career Starter">Career Starter (0–2 yrs)</option>
                        <option value="Job Seeker">Active Job Seeker</option>
                        <option value="Working Professional">Working Professional</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="targetRole" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Target Role / Domain *
                      </label>
                      <input
                        id="targetRole"
                        type="text"
                        value={formData.targetRole}
                        onChange={(e) => setFormData({ ...formData, targetRole: e.target.value })}
                        placeholder="e.g. Frontend Dev / Business Analyst"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                          errors.targetRole ? 'border-red-500' : 'border-slate-700 focus:border-blue-500'
                        }`}
                      />
                      {errors.targetRole && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.targetRole}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Message / Current Hurdles (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you would like support with (e.g. resume review, mock interviews, application tracking)..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 active:scale-[0.99] disabled:opacity-60 transition-all"
                    >
                      {isSubmitting ? (
                        <span>Processing enquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Enquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-slate-800/60 border border-slate-700/70">
              <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>Contact Channels</span>
              </h4>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-700/70 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                      Email Inquiries
                    </span>
                    <span className="text-slate-200 font-mono text-xs">
                      {siteConfig.contactPlaceholders.email}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-700/70 flex items-center justify-center text-indigo-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                      Direct Line
                    </span>
                    <span className="text-slate-200 font-mono text-xs">
                      {siteConfig.contactPlaceholders.phone}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-700/70 flex items-center justify-center text-violet-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                      Location & Mode
                    </span>
                    <span className="text-slate-200 text-xs">
                      {siteConfig.contactPlaceholders.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-700/70 flex items-center justify-center text-cyan-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                      Consultation Hours
                    </span>
                    <span className="text-slate-200 text-xs">
                      {siteConfig.contactPlaceholders.workingHours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Consultation Guarantee Disclaimer */}
            <div className="p-6 rounded-3xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400 leading-relaxed">
              <span className="font-semibold text-slate-300 block mb-1">
                Transparency Assurance:
              </span>
              We treat all candidate discussions with strict confidentiality. Our assessments prioritize honest evaluation of your current assets and practical avenues for improvement.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
