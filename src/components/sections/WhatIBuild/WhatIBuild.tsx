import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Monitor, Server, Workflow, Bot, ArrowRight, X } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Section } from '../../layout/Section';
import { Container } from '../../ui/Container';

const EASE_SMOOTH: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Shared ultra-fine noise texture matching Hero, About, and Skills sections
const NOISE_TEXTURE_DATA_URI = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E`;

export interface DetailContent {
  id: string;
  indexNumber: string;
  title: string;
  philosophy: string;
  focusItems: string[];
  processSteps: { number: string; title: string; desc: string }[];
  technologies: string[];
  relatedProjects: string[];
}

export const WhatIBuild: React.FC = () => {
  const { t } = useLanguage();
  const [activeDetailId, setActiveDetailId] = useState<string | null>(null);

  const capabilityDetails: Record<string, DetailContent> = {
    'digital-products-systems': {
      id: 'digital-products-systems',
      indexNumber: '00',
      title: t.whatIBuild.details['digital-products-systems'].title,
      philosophy: t.whatIBuild.details['digital-products-systems'].philosophy,
      focusItems: t.whatIBuild.details['digital-products-systems'].focusItems,
      processSteps: t.whatIBuild.details['digital-products-systems'].processSteps.map((step, idx) => ({
        number: `0${idx + 1}`,
        title: step.title,
        desc: step.desc,
      })),
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'APIs', 'Databases', 'Docker'],
      relatedProjects: ['Portfolio Website', 'Barber Booking System'],
    },
    'interface-engineering': {
      id: 'interface-engineering',
      indexNumber: '01',
      title: t.whatIBuild.details['interface-engineering'].title,
      philosophy: t.whatIBuild.details['interface-engineering'].philosophy,
      focusItems: t.whatIBuild.details['interface-engineering'].focusItems,
      processSteps: t.whatIBuild.details['interface-engineering'].processSteps.map((step, idx) => ({
        number: `0${idx + 1}`,
        title: step.title,
        desc: step.desc,
      })),
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      relatedProjects: ['Portfolio Website', 'Design System'],
    },
    'system-integration': {
      id: 'system-integration',
      indexNumber: '02',
      title: t.whatIBuild.details['system-integration'].title,
      philosophy: t.whatIBuild.details['system-integration'].philosophy,
      focusItems: t.whatIBuild.details['system-integration'].focusItems,
      processSteps: t.whatIBuild.details['system-integration'].processSteps.map((step, idx) => ({
        number: `0${idx + 1}`,
        title: step.title,
        desc: step.desc,
      })),
      technologies: ['REST APIs', 'PHP', 'MySQL', 'PostgreSQL', 'Docker', 'Webhooks'],
      relatedProjects: ['LINE HR Bot', 'Barber Booking System'],
    },
    'automation-workflows': {
      id: 'automation-workflows',
      indexNumber: '03',
      title: t.whatIBuild.details['automation-workflows'].title,
      philosophy: t.whatIBuild.details['automation-workflows'].philosophy,
      focusItems: t.whatIBuild.details['automation-workflows'].focusItems,
      processSteps: t.whatIBuild.details['automation-workflows'].processSteps.map((step, idx) => ({
        number: `0${idx + 1}`,
        title: step.title,
        desc: step.desc,
      })),
      technologies: ['n8n', 'Webhooks', 'APIs', 'Python', 'Docker', 'Automation Systems'],
      relatedProjects: ['LINE HR Bot', 'AI Workflow Integration'],
    },
    'ai-integration': {
      id: 'ai-integration',
      indexNumber: '04',
      title: t.whatIBuild.details['ai-integration'].title,
      philosophy: t.whatIBuild.details['ai-integration'].philosophy,
      focusItems: t.whatIBuild.details['ai-integration'].focusItems,
      processSteps: t.whatIBuild.details['ai-integration'].processSteps.map((step, idx) => ({
        number: `0${idx + 1}`,
        title: step.title,
        desc: step.desc,
      })),
      technologies: ['OpenAI API', 'Gemini API', 'Claude API', 'Python', 'TypeScript', 'APIs'],
      relatedProjects: ['LINE HR Bot', 'AI Workflow Integration'],
    },
  };

  const rightBlocks = [
    {
      id: 'interface-engineering',
      numberLabel: '01',
      title: t.whatIBuild.details['interface-engineering'].title,
      description: t.whatIBuild.details['interface-engineering'].description,
      icon: Monitor,
      tag: t.whatIBuild.viewDetails,
    },
    {
      id: 'system-integration',
      numberLabel: '02',
      title: t.whatIBuild.details['system-integration'].title,
      description: t.whatIBuild.details['system-integration'].description,
      icon: Server,
      tag: t.whatIBuild.viewDetails,
    },
    {
      id: 'automation-workflows',
      numberLabel: '03',
      title: t.whatIBuild.details['automation-workflows'].title,
      description: t.whatIBuild.details['automation-workflows'].description,
      icon: Workflow,
      tag: t.whatIBuild.viewDetails,
    },
    {
      id: 'ai-integration',
      numberLabel: '04',
      title: t.whatIBuild.details['ai-integration'].title,
      description: t.whatIBuild.details['ai-integration'].description,
      icon: Bot,
      tag: t.whatIBuild.viewDetails,
    },
  ];

  // Close detail panel on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveDetailId(null);
    };
    if (activeDetailId) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeDetailId]);

  const currentDetail = activeDetailId ? capabilityDetails[activeDetailId] : null;

  return (
    <Section
      id="what-i-build"
      padding="none"
      background="default"
      withContainer={false}
      className="relative z-10 overflow-hidden py-16 sm:py-24 bg-background w-full min-w-0"
    >
      {/* 1. Atmospheric Volumetric Continuation (Matching About & Hero Depth) */}
      <div className="hidden dark:block absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,17,21,1)_0%,rgba(18,22,32,0.3)_50%,rgba(15,17,21,1)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(143,126,255,0.015)_50%,transparent_100%)]" />
      </div>

      {/* 2. Shared Ultra-Fine Noise Grain Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-20 select-none bg-repeat"
        style={{ backgroundImage: `url("${NOISE_TEXTURE_DATA_URI}")` }}
      />

      <Container size="xl" className="w-full min-w-0 relative z-10">
        <div className="flex flex-col space-y-10 sm:space-y-12 w-full min-w-0">
          
          {/* Section Header */}
          <div className="space-y-2 max-w-3xl w-full min-w-0">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: EASE_SMOOTH }}
              className="text-xs font-mono uppercase tracking-[0.2em] text-primary font-semibold"
            >
              {t.whatIBuild.eyebrow}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.06, ease: EASE_SMOOTH }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-text-primary tracking-tight leading-tight break-words uppercase"
            >
              {t.whatIBuild.title}
            </motion.h2>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch w-full min-w-0">
            
            {/* LEFT: Core System Feature Block (00 Index) (45% Width / lg:col-span-5) */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: EASE_SMOOTH }}
              onClick={() => setActiveDetailId('digital-products-systems')}
              className="lg:col-span-5 w-full min-w-0 group flex cursor-pointer"
            >
              <div className="relative w-full pt-3 sm:pt-4 px-8 sm:px-10 pb-8 sm:pb-10 rounded-none bg-surface dark:bg-[radial-gradient(ellipse_at_top_left,rgba(124,92,255,0.06)_0%,rgba(16,18,25,0.98)_60%,rgba(10,11,15,1)_100%)] border border-border shadow-md dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_12px_32px_rgba(0,0,0,0.5)] group-hover:border-border-hover transition-all duration-500 flex flex-col justify-between space-y-10 sm:space-y-12 min-h-[380px] sm:min-h-[420px] overflow-hidden">
                {/* Ultra-faint Mood Atmosphere Ring */}
                <div className="absolute -top-16 -left-16 w-56 h-56 bg-primary/10 blur-3xl pointer-events-none select-none rounded-full" />

                {/* Top Row: Left Code Icon & Right Index Number "00" */}
                <div className="flex items-center justify-between w-full relative z-10">
                  <div className="w-12 h-12 rounded-none bg-surface-subtle border border-border flex items-center justify-center text-primary group-hover:border-border-hover group-hover:bg-primary/15 transition-all duration-300 shadow-sm">
                    <Code2 size={26} strokeWidth={1.75} />
                  </div>
                  <span className="text-xs font-mono text-primary font-semibold">
                    00
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="space-y-6 relative z-10">
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-text-primary tracking-tight leading-snug group-hover:text-primary transition-colors duration-300">
                      {t.whatIBuild.details['digital-products-systems'].title}
                    </h3>
                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
                      {t.whatIBuild.details['digital-products-systems'].philosophy}
                    </p>
                  </div>

                  {/* Footer Action Trigger */}
                  <div className="pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-mono">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-text-muted">
                      {t.whatIBuild.details['digital-products-systems'].keywords.map((kw, kwIdx) => (
                        <React.Fragment key={kw}>
                          <span className="text-text-primary font-medium">{kw}</span>
                          {kwIdx < t.whatIBuild.details['digital-products-systems'].keywords.length - 1 && (
                            <span className="text-primary/70">•</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-primary font-semibold shrink-0 pl-2">
                      <span>{t.whatIBuild.viewDetails}</span>
                      <ArrowRight size={12} className="group-hover:translate-x-1.5 transition-transform duration-300 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: 4 Supporting Capability Cards (01, 02, 03, 04) (55% Width / lg:col-span-7) */}
            <div className="lg:col-span-7 w-full min-w-0 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {rightBlocks.map((block, idx) => {
                const IconComponent = block.icon;
                return (
                  <motion.div
                    key={block.id}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: 0.1 + idx * 0.06, ease: EASE_SMOOTH }}
                    onClick={() => setActiveDetailId(block.id)}
                    className="w-full min-w-0 group flex cursor-pointer"
                  >
                    <div className="w-full p-6 sm:p-7 rounded-none bg-surface dark:bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.03)_0%,rgba(17,19,26,0.98)_65%,rgba(12,13,18,1)_100%)] border border-border shadow-sm dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_8px_24px_rgba(0,0,0,0.4)] group-hover:border-border-hover transition-all duration-300 flex flex-col justify-between space-y-6">
                      {/* Top Header: Icon & Number Label */}
                      <div className="flex items-center justify-between w-full">
                        <div className="w-10 h-10 rounded-none bg-surface-subtle border border-border-subtle flex items-center justify-center text-primary group-hover:border-border-hover group-hover:bg-primary/12 transition-colors duration-300 shadow-sm">
                          <IconComponent size={20} strokeWidth={1.75} />
                        </div>
                        <span className="text-xs font-mono text-primary font-semibold">
                          {block.numberLabel}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-2">
                        <h4 className="text-base sm:text-lg font-display font-semibold tracking-wide text-text-primary group-hover:text-primary transition-colors duration-300">
                          {block.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-text-muted font-sans leading-relaxed">
                          {block.description}
                        </p>
                      </div>

                      {/* Footer Action Link */}
                      <div className="pt-2 flex items-center gap-1.5 text-xs font-mono text-primary font-semibold">
                        <span>{block.tag}</span>
                        <ArrowRight size={12} className="group-hover:translate-x-1.5 transition-transform duration-300 text-primary" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </Container>

      {/* Compact Editorial Floating Glass Overlay */}
      <AnimatePresence>
        {activeDetailId && currentDetail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop Blur & Dimmed Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE_SMOOTH }}
              onClick={() => setActiveDetailId(null)}
              className="absolute inset-0 bg-overlay-backdrop/75 backdrop-blur-xl"
            />

            {/* Compact Floating Glass Editorial Panel (max-w-[760px]) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.35, ease: EASE_SMOOTH }}
              className="relative w-full max-w-[760px] max-h-[82vh] overflow-y-auto rounded-none bg-surface/96 border border-border shadow-2xl p-6 sm:p-8 space-y-6 sm:space-y-7 z-10 scrollbar-thin"
            >
              {/* Close Button Trigger */}
              <button
                onClick={() => setActiveDetailId(null)}
                aria-label="Close details"
                className="absolute top-5 right-5 text-text-muted hover:text-text-primary transition-colors duration-200 cursor-pointer p-1"
              >
                <X size={18} />
              </button>

              {/* 1. Index & Large Display Title */}
              <div className="space-y-1.5 pr-8">
                <span className="text-xs font-mono text-primary font-semibold tracking-widest block">
                  {currentDetail.indexNumber}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-text-primary tracking-[-0.03em] leading-tight">
                  {currentDetail.title}
                </h3>
              </div>

              {/* 2. Editorial Philosophy Lead Paragraph */}
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
                {currentDetail.philosophy}
              </p>

              {/* 3. WHAT I FOCUS ON (Pure Typography Bullet Lines) */}
              <div className="space-y-3 pt-4 border-t border-border-subtle">
                <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-text-muted font-semibold">
                  {t.whatIBuild.modal.whatIFocusOn}
                </h4>
                <div className="space-y-2">
                  {currentDetail.focusItems.map((item, idx) => (
                    <p key={idx} className="text-xs sm:text-sm text-text-primary font-sans leading-relaxed flex items-start gap-2.5">
                      <span className="text-primary font-mono text-xs pt-0.5">•</span>
                      <span>{item}</span>
                    </p>
                  ))}
                </div>
              </div>

              {/* 4. PROCESS (Clean Numbered Sequence) */}
              <div className="space-y-3 pt-4 border-t border-border-subtle">
                <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-text-muted font-semibold">
                  {t.whatIBuild.modal.process}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {currentDetail.processSteps.map((step) => (
                    <div key={step.number} className="space-y-0.5">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-mono text-primary font-semibold">{step.number} —</span>
                        <h5 className="text-xs sm:text-sm font-display font-bold text-text-primary">{step.title}</h5>
                      </div>
                      <p className="text-[11px] sm:text-xs text-text-secondary leading-relaxed font-sans pl-6">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. TECHNOLOGIES (Pure Inline Dot Stream) */}
              <div className="space-y-2 pt-4 border-t border-border-subtle">
                <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-text-muted font-semibold">
                  {t.whatIBuild.modal.technologies}
                </h4>
                <p className="text-xs font-mono text-text-secondary leading-relaxed">
                  {currentDetail.technologies.join('  •  ')}
                </p>
              </div>

              {/* 6. RELATED PROJECTS (Clean Minimal Text Links) */}
              <div className="space-y-2 pt-4 border-t border-border-subtle">
                <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-text-muted font-semibold">
                  {t.whatIBuild.modal.relatedProjects}
                </h4>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs font-mono">
                  {currentDetail.relatedProjects.map((proj) => (
                    <a
                      key={proj}
                      href="#projects"
                      onClick={() => setActiveDetailId(null)}
                      className="text-text-primary hover:text-primary transition-colors flex items-center gap-1 group"
                    >
                      <span>{proj}</span>
                      <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </a>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
};

WhatIBuild.displayName = 'WhatIBuild';
