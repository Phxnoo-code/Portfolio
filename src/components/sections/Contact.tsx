import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, AlertCircle, Mail, Github, MapPin, Send, Loader2 } from 'lucide-react';
import { profileData } from '@/data/profile';
import { sendContactMessage } from '@/services/contactService';
import { Section } from '../layout/Section';
import { Container } from '../ui/Container';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EASE_SMOOTH: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const Contact: React.FC = () => {
  const { email } = profileData;

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await sendContactMessage({
        name: formData.name,
        email: formData.email,
        subject: 'Contact Form Inquiry',
        message: formData.message,
      });
      if (response.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      }
    } catch (err: any) {
      setServerError(err.message || 'Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section
      id="contact"
      padding="none"
      background="default"
      withContainer={false}
      className="relative py-20 sm:py-28 lg:py-36 border-t border-white/[0.04] bg-background w-full min-w-0"
    >

      <Container size="xl" className="relative z-10">
        <div className="flex flex-col space-y-12 sm:space-y-16 lg:space-y-20 w-full">

          {/* 1. EDITORIAL HEADER AREA */}
          <div className="flex flex-col space-y-4 max-w-3xl text-left">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: EASE_SMOOTH }}
              className="text-xs font-mono uppercase tracking-[0.2em] text-primary font-semibold"
            >
              — CONTACT —
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: EASE_SMOOTH, delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-tight"
            >
              Let's build something meaningful together.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: EASE_SMOOTH, delay: 0.1 }}
              className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-xl font-sans"
            >
              Open for frontend development, web application engineering, automation projects, and co-op / internship opportunities.
            </motion.p>
          </div>

          {/* 2. TWO-COLUMN MAIN EDITORIAL CONTENT LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 w-full pt-4 items-start text-left">

            {/* LEFT COLUMN: CONTACT INFORMATION & AVAILABILITY (5/12) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: EASE_SMOOTH }}
              className="lg:col-span-5 flex flex-col space-y-10"
            >
              {/* Contact Info Header */}
              <div className="space-y-6">
                <span className="text-xs font-mono uppercase tracking-widest text-primary">
                  CONTACT INFORMATION
                </span>

                <div className="space-y-5 font-sans">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 border border-border bg-surface flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <Mail size={16} />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-text-secondary block">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${email}`}
                        className="text-sm sm:text-base font-mono font-medium text-text-primary hover:text-primary transition-colors duration-300 flex items-center gap-1.5 group"
                      >
                        <span>{email}</span>
                        <ArrowUpRight size={14} className="text-text-muted group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </a>
                    </div>
                  </div>

                  {/* GitHub */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 border border-border bg-surface flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <Github size={16} />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-text-secondary block">
                        GitHub Profile
                      </span>
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base font-mono font-medium text-text-primary hover:text-primary transition-colors duration-300 flex items-center gap-1.5 group"
                      >
                        <span>github.com</span>
                        <ArrowUpRight size={14} className="text-text-muted group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 border border-white/10 bg-white/[0.02] flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <MapPin size={16} />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 block">
                        Location
                      </span>
                      <span className="text-sm sm:text-base font-sans font-medium text-white">
                        Thailand
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability Status Block */}
              <div className="pt-6 border-t border-white/[0.08] space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-primary block">
                  AVAILABLE FOR
                </span>

                <ul className="space-y-2 text-xs font-mono text-white/70">
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Frontend Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Web Application Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Automation & AI Integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Internship Opportunities</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: GET IN TOUCH FORM (7/12) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE_SMOOTH }}
              className="lg:col-span-7 flex flex-col space-y-6"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-primary">
                GET IN TOUCH
              </span>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4, ease: EASE_SMOOTH }}
                    className="p-8 border border-white/10 bg-white/[0.02] space-y-6 text-left"
                  >
                    <div className="flex items-center gap-3 text-emerald-400 font-mono text-sm">
                      <CheckCircle2 size={20} />
                      <span className="font-semibold uppercase tracking-wider">Message Received</span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-2xl font-display font-bold text-white uppercase">
                        Thank You For Reaching Out
                      </h4>
                      <p className="text-sm text-text-secondary leading-relaxed font-sans">
                        Your message has been sent successfully. I will review your inquiry and get back to you shortly.
                      </p>
                    </div>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-2.5 border border-white/10 hover:border-[#7C5CFF] hover:bg-[#7C5CFF]/10 text-xs font-mono text-white transition-all duration-300 flex items-center gap-2 cursor-pointer"
                    >
                      <span>Send Another Message</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-8 text-left"
                  >
                    {serverError && (
                      <div className="p-4 border border-rose-500/30 bg-rose-500/10 text-rose-400 text-xs font-mono flex items-center gap-2.5">
                        <AlertCircle size={16} className="shrink-0" />
                        <span>{serverError}</span>
                      </div>
                    )}

                    {/* Field 1: Name */}
                    <div className="relative space-y-1">
                      <label htmlFor="contact-name" className="text-xs font-mono text-text-secondary uppercase tracking-wider block">
                        Your Name <span className="text-[#7C5CFF]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        className="w-full bg-transparent border-b border-border py-3 text-sm font-sans text-text-primary placeholder:text-text-muted outline-none transition-colors duration-300"
                      />
                      {/* Animated Purple Focus Line */}
                      <motion.div
                        initial={false}
                        animate={{ scaleX: focusedField === 'name' ? 1 : 0 }}
                        transition={{ duration: 0.3, ease: EASE_SMOOTH }}
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#7C5CFF] origin-left pointer-events-none"
                      />
                      {errors.name && (
                        <p className="text-xs font-mono text-rose-400 pt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Field 2: Email */}
                    <div className="relative space-y-1">
                      <label htmlFor="contact-email" className="text-xs font-mono text-text-secondary uppercase tracking-wider block">
                        Your Email <span className="text-[#7C5CFF]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        className="w-full bg-transparent border-b border-border py-3 text-sm font-sans text-text-primary placeholder:text-text-muted outline-none transition-colors duration-300"
                      />
                      <motion.div
                        initial={false}
                        animate={{ scaleX: focusedField === 'email' ? 1 : 0 }}
                        transition={{ duration: 0.3, ease: EASE_SMOOTH }}
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#7C5CFF] origin-left pointer-events-none"
                      />
                      {errors.email && (
                        <p className="text-xs font-mono text-rose-400 pt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Field 3: Message */}
                    <div className="relative space-y-1">
                      <label htmlFor="contact-message" className="text-xs font-mono text-text-secondary uppercase tracking-wider block">
                        Your Message <span className="text-[#7C5CFF]">*</span>
                      </label>
                      <input
                        id="contact-message"
                        type="text"
                        placeholder="Tell me about your project, inquiry, or opportunity..."
                        value={formData.message}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: undefined });
                        }}
                        className="w-full bg-transparent border-b border-border py-3 text-sm font-sans text-text-primary placeholder:text-text-muted outline-none transition-colors duration-300"
                      />
                      <motion.div
                        initial={false}
                        animate={{ scaleX: focusedField === 'message' ? 1 : 0 }}
                        transition={{ duration: 0.3, ease: EASE_SMOOTH }}
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#7C5CFF] origin-left pointer-events-none"
                      />
                      {errors.message && (
                        <p className="text-xs font-mono text-rose-400 pt-1">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative px-7 py-3.5 border border-[#7C5CFF]/50 bg-[#7C5CFF]/10 hover:bg-[#7C5CFF]/20 hover:border-[#7C5CFF] text-xs font-mono text-white uppercase tracking-wider transition-all duration-300 flex items-center gap-2.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_25px_rgba(124,92,255,0.15)] hover:shadow-[0_0_35px_rgba(124,92,255,0.3)]"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={15} className="animate-spin text-[#7C5CFF]" />
                            <span>Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send size={14} className="text-[#7C5CFF] group-hover:translate-x-1 transition-transform duration-300" />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

          </div>

        </div>
      </Container>
    </Section>
  );
};

Contact.displayName = 'Contact';
export default Contact;
