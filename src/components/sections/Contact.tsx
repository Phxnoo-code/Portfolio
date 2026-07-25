import React, { useState } from 'react';
import { Mail, Send, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import { profileData } from '@/data/profile';
import { sendContactMessage } from '@/services/contactService';
import { Section } from '../layout/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Button } from '../ui/Button';

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

/**
 * Enhanced Contact Section Component
 * Uses containerSize="xl" for consistent horizontal alignment matching Hero.
 */
export const Contact: React.FC = () => {
  const { email, location, availability } = profileData;

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

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

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
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
      const response = await sendContactMessage(formData);
      if (response.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      }
    } catch (err: any) {
      setServerError(err.message || 'Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" padding="lg" background="surface" containerSize="xl">
      <SectionTitle
        badge="Get In Touch"
        title="Let's Build Something"
        titleGradient="Extraordinary"
        subtitle="Open for senior engineering roles, frontend architecture consulting, and tech collaborations."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Details Card */}
        <div className="lg:col-span-5 space-y-6">
          <Card variant="bordered" className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-display font-semibold text-text-primary">Contact Information</h3>
              <p className="text-sm text-text-secondary leading-relaxed font-sans">
                Feel free to reach out directly via email or send a message through the contact form.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-surface-hover text-text-primary border border-border/50 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono text-text-muted">Email Address</p>
                  <a
                    href={`mailto:${email}`}
                    className="text-sm font-medium text-text-primary hover:text-primary transition-colors"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-surface-hover text-text-primary border border-border/50 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono text-text-muted">Location</p>
                  <p className="text-sm font-medium text-text-primary">{location}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border/50">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-status-success/10 border border-status-success/20 text-status-success text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-status-success animate-pulse" />
                <span>{availability}</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Interactive Form Card */}
        <Card variant="glass" className="lg:col-span-7">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-status-success/10 text-status-success flex items-center justify-center mx-auto">
                <CheckCircle2 size={28} />
              </div>
              <h4 className="text-xl font-display font-bold text-text-primary">Message Sent Successfully!</h4>
              <p className="text-sm text-text-secondary max-w-sm mx-auto">
                Thank you for reaching out. Your message has been received and I will reply shortly.
              </p>
              <Button variant="outline" size="sm" onClick={() => setIsSubmitted(false)}>
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {serverError && (
                <div className="p-3 rounded-lg bg-status-error/10 border border-status-error/20 text-status-error text-xs flex items-center gap-2">
                  <AlertCircle size={16} className="shrink-0" />
                  <span>{serverError}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Your Name"
                  placeholder="John Doe"
                  required
                  error={errors.name}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <Input
                  label="Your Email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  error={errors.email}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <Input
                label="Subject"
                placeholder="Project Inquiry / Opportunity"
                required
                error={errors.subject}
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />

              <Textarea
                label="Message"
                placeholder="Tell me about your project or inquiry..."
                required
                rows={5}
                error={errors.message}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />

              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                isLoading={isSubmitting}
                rightIcon={<Send size={18} />}
              >
                Send Message
              </Button>
            </form>
          )}
        </Card>
      </div>
    </Section>
  );
};

Contact.displayName = 'Contact';
