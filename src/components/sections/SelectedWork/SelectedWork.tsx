import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { ArrowRight, X } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { projectsData } from '@/data/projects';
import { ProjectCaseStudy } from '@/types/project';
import { Section } from '../../layout/Section';
import { Container } from '../../ui/Container';

const EASE_SMOOTH: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Shared ultra-fine noise texture matching Hero, About, What I Build & Skills sections
const NOISE_TEXTURE_DATA_URI = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E`;

export type { ProjectCaseStudy };

export const SelectedWork: React.FC = () => {
  const { t } = useLanguage();
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  const selectedProjects: ProjectCaseStudy[] = projectsData.map((project) => {
    const localeItem = t.projects.items[project.id as keyof typeof t.projects.items];
    if (!localeItem) return project;
    return {
      ...project,
      category: localeItem.category || project.category,
      title: localeItem.title || project.title,
      roles: localeItem.roles || project.roles,
      shortDescription: localeItem.description || project.shortDescription,
      overview: localeItem.overview || project.overview,
      problem: localeItem.problem || project.problem,
      solution: localeItem.solution || project.solution,
      keyFeatures: localeItem.keyFeatures || project.keyFeatures,
    };
  });

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveCaseStudyId(null);
    };
    if (activeCaseStudyId) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeCaseStudyId]);

  const currentCaseStudy = activeCaseStudyId
    ? selectedProjects.find((p) => p.id === activeCaseStudyId)
    : null;

  return (
    <Section
      id="projects"
      padding="none"
      background="default"
      withContainer={false}
      className="relative z-10 overflow-hidden py-20 sm:py-28 lg:py-36 bg-background w-full min-w-0"
    >

      {/* 1. Shared Ultra-Fine Noise Grain Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-20 select-none bg-repeat"
        style={{ backgroundImage: `url("${NOISE_TEXTURE_DATA_URI}")` }}
      />

      <Container size="xl" className="w-full min-w-0 relative z-10">
        <div className="flex flex-col space-y-12 sm:space-y-16 w-full min-w-0">
          
          {/* SECTION HEADER */}
          <div className="space-y-3 max-w-3xl w-full min-w-0">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: EASE_SMOOTH }}
              className="text-xs font-mono uppercase tracking-[0.2em] text-primary font-semibold"
            >
              {t.projects.eyebrow}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.06, ease: EASE_SMOOTH }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-text-primary tracking-tight leading-tight break-words uppercase"
            >
              {t.projects.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.12, ease: EASE_SMOOTH }}
              className="text-body-sm sm:text-body-md text-text-secondary leading-relaxed font-normal pt-1"
            >
              {t.projects.subtitle}
            </motion.p>
          </div>

          {/* VERTICAL STACKED PROJECT CARDS (Apple Wallet Stacked Scroll Effect) */}
          <div className="w-full min-w-0 relative space-y-12 sm:space-y-16 pb-12">
            {selectedProjects.map((project, idx) => {
              // Sticky top offset increases slightly per card for Apple Wallet stack preview
              const stickyTopClass =
                idx === 0
                  ? 'sticky top-20 sm:top-24 lg:top-28'
                  : idx === 1
                  ? 'sticky top-24 sm:top-28 lg:top-32'
                  : idx === 2
                  ? 'sticky top-28 sm:top-32 lg:top-36'
                  : 'sticky top-32 sm:top-36 lg:top-40';

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: 0.08, ease: EASE_SMOOTH }}
                  className={`w-full min-w-0 ${stickyTopClass} z-[${10 + idx}]`}
                >
                  {/* Large Premium Surface with Generous Spacing & Subtle Bevel */}
                  <div className="relative w-full rounded-2xl sm:rounded-3xl bg-surface dark:bg-[radial-gradient(ellipse_at_top_left,rgba(124,92,255,0.05)_0%,rgba(16,18,25,0.99)_60%,rgba(10,11,15,1)_100%)] border border-border shadow-md dark:shadow-[0_25px_60px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.08)] p-7 sm:p-10 lg:p-12 group transition-all duration-500 overflow-hidden">
                    {/* Subtle Top-Left Ambient Light Glow */}
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/06 blur-3xl pointer-events-none select-none rounded-full" />

                    {/* 45% Content / 55% Project Preview Grid Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10 w-full min-w-0">
                      
                      {/* TEXT CONTENT COLUMN (45% Width / lg:col-span-5) */}
                      <div
                        className={`space-y-6 sm:space-y-7 w-full min-w-0 ${
                          project.isImageRight
                            ? 'lg:col-span-5 lg:order-1'
                            : 'lg:col-span-5 lg:order-2'
                        }`}
                      >
                        {/* Refined Top Metadata (Clean & Quiet, No Heavy Line) */}
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-mono text-primary font-bold tracking-wider">
                            {project.number}
                          </span>
                          <span className="text-text-muted dark:text-white/20 font-mono text-xs">•</span>
                          <span className="text-xs sm:text-sm font-mono text-text-muted dark:text-text-muted/70 uppercase tracking-[0.2em] font-medium">
                            {project.category}
                          </span>
                        </div>

                        {/* Title & Short Description (2-3 lines) */}
                        <div className="space-y-3">
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-text-primary tracking-tight leading-tight group-hover:text-primary transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-body-sm sm:text-body-md text-text-secondary leading-relaxed font-normal">
                            {project.shortDescription}
                          </p>
                        </div>

                        {/* Quiet Supporting Role & Technologies */}
                        <div className="space-y-4 pt-1">
                          <div className="space-y-1">
                            <span className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted dark:text-text-muted/60 font-semibold block">
                              {t.projects.modal?.role || 'ROLE'}
                            </span>
                            <p className="text-sm sm:text-base font-sans text-text-primary dark:text-text-primary/90 font-medium">
                              {project.roles.join('  •  ')}
                            </p>
                          </div>

                          <div className="space-y-1">
                            <span className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted dark:text-text-muted/60 font-semibold block">
                              {t.projects.modal?.technology || 'TECHNOLOGY'}
                            </span>
                            <p className="text-xs sm:text-sm font-mono text-text-muted dark:text-text-muted/80 leading-relaxed">
                              {project.technologies.join('  •  ')}
                            </p>
                          </div>
                        </div>

                        {/* Refined CTA Trigger with Smooth Arrow Shift */}
                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={() => setActiveCaseStudyId(project.id)}
                            className="inline-flex items-center gap-2 text-sm sm:text-base font-mono text-primary font-semibold group/btn cursor-pointer py-1 text-left"
                          >
                            <span>{t.projects.viewProject}</span>
                            <ArrowRight
                              size={16}
                              className="group-hover/btn:translate-x-1.5 transition-transform duration-300 ease-out text-primary"
                            />
                          </button>
                        </div>
                      </div>

                      {/* HERO PROJECT PREVIEW COLUMN (55% Width / lg:col-span-7 / Realistic macOS Browser Frame) */}
                      <div
                        className={`w-full min-w-0 ${
                          project.isImageRight
                            ? 'lg:col-span-7 lg:order-2'
                            : 'lg:col-span-7 lg:order-1'
                        }`}
                      >
                        <div
                          onClick={() => setActiveCaseStudyId(project.id)}
                          className="relative w-full rounded-xl sm:rounded-2xl border border-border bg-surface shadow-xl overflow-hidden cursor-pointer group/img transition-all duration-500 hover:border-border-hover"
                        >
                          {/* macOS Traffic-Light Browser Chrome Header */}
                          <div className="bg-surface-subtle border-b border-border-subtle px-3.5 py-2.5 flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80 inline-block" />
                              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80 inline-block" />
                              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80 inline-block" />
                            </div>
                            <div className="bg-surface border border-border-subtle rounded-md px-3 py-0.5 text-[10px] font-mono text-text-muted max-w-[200px] truncate text-center select-none">
                              {project.title.toLowerCase().replace(/\s+/g, '')}.app
                            </div>
                            <div className="w-8" />
                          </div>

                          {/* Real Project Screenshot Screen Container */}
                          <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-subtle">
                            <img
                              src={project.image}
                              alt={project.title}
                              width={1200}
                              height={750}
                              decoding="async"
                              className="w-full h-full object-cover object-top group-hover/img:scale-[1.025] transition-transform duration-700 ease-out"
                              loading="lazy"
                            />
                            {/* Ambient gradient vignette overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-50 group-hover/img:opacity-20 transition-opacity duration-500" />

                            {/* Subtle View Case Study overlay badge on hover */}
                            <div className="absolute bottom-4 right-4 bg-overlay-backdrop/85 backdrop-blur-md border border-border px-3.5 py-1.5 rounded-none text-[11px] font-mono text-primary font-semibold flex items-center gap-1.5 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 shadow-lg">
                              <span>{t.projects.viewProject}</span>
                              <ArrowRight size={12} />
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </Container>

      {/* FLOATING GLASS EDITORIAL OVERLAY (Case Study Modal) */}
      {mounted && createPortal(
        <AnimatePresence>
          {activeCaseStudyId && currentCaseStudy && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
              {/* Backdrop Blur & Dimmed Layer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE_SMOOTH }}
                onClick={() => setActiveCaseStudyId(null)}
                className="fixed inset-0 bg-overlay-backdrop/80 backdrop-blur-md"
              />

              {/* Compact Floating Editorial Panel (max-w-[780px], single-viewport desktop fit) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 15 }}
                transition={{ duration: 0.35, ease: EASE_SMOOTH }}
                className="relative w-full max-w-[780px] max-h-[84vh] overflow-y-auto rounded-2xl bg-surface border border-border shadow-2xl p-6 sm:p-10 space-y-7 z-10 scrollbar-thin"
              >
                {/* Close Button Trigger */}
                <button
                  onClick={() => setActiveCaseStudyId(null)}
                  aria-label={t.projects.modal?.close || 'Close'}
                  className="absolute top-5 right-5 text-text-muted hover:text-text-primary bg-surface-subtle border border-border-subtle hover:bg-surface-hover transition-colors duration-200 cursor-pointer p-2 rounded-lg shadow-sm"
                >
                  <X size={18} />
                </button>

                {/* 1. Header: Index, Category & Large Title */}
                <div className="space-y-2 pr-8 border-b border-border-subtle pb-5">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-mono">
                    <span className="text-primary font-semibold">{currentCaseStudy.number} —</span>
                    <span className="text-text-muted uppercase tracking-[0.2em]">{currentCaseStudy.category}</span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-text-primary tracking-[-0.03em] leading-tight">
                    {currentCaseStudy.title}
                  </h3>
                </div>

                {/* 2. OVERVIEW */}
                <div className="space-y-2">
                  <h4 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-text-muted font-semibold">
                    {t.projects.modal?.overview || 'OVERVIEW'}
                  </h4>
                  <p className="text-body-sm sm:text-body-md text-text-secondary leading-relaxed font-normal">
                    {currentCaseStudy.overview}
                  </p>
                </div>

                {/* 3. PROBLEM */}
                <div className="space-y-2 pt-4 border-t border-border-subtle">
                  <h4 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-text-muted font-semibold">
                    {t.projects.modal?.problem || 'PROBLEM'}
                  </h4>
                  <p className="text-body-sm sm:text-body-md text-text-secondary leading-relaxed font-sans">
                    {currentCaseStudy.problem}
                  </p>
                </div>

                {/* 4. SOLUTION */}
                <div className="space-y-2 pt-4 border-t border-border-subtle">
                  <h4 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-text-muted font-semibold">
                    {t.projects.modal?.solution || 'SOLUTION'}
                  </h4>
                  <p className="text-body-sm sm:text-body-md text-text-secondary leading-relaxed font-sans">
                    {currentCaseStudy.solution}
                  </p>
                </div>

                {/* 5. MY ROLE */}
                <div className="space-y-2 pt-4 border-t border-border-subtle">
                  <h4 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-text-muted font-semibold">
                    {t.projects.modal?.myRole || 'MY ROLE'}
                  </h4>
                  <p className="text-body-sm sm:text-body-md text-text-primary font-sans font-medium">
                    {currentCaseStudy.roles.join('  •  ')}
                  </p>
                </div>

                {/* 6. KEY FEATURES */}
                <div className="space-y-3 pt-4 border-t border-border-subtle">
                  <h4 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-text-muted font-semibold">
                    {t.projects.modal?.keyFeatures || 'KEY FEATURES'}
                  </h4>
                  <div className="space-y-2">
                    {currentCaseStudy.keyFeatures.map((feature, idx) => (
                      <p key={idx} className="text-body-sm sm:text-body-md text-text-primary font-sans leading-relaxed flex items-start gap-2.5">
                        <span className="text-primary font-mono text-sm pt-0.5">•</span>
                        <span>{feature}</span>
                      </p>
                    ))}
                  </div>
                </div>

                {/* 7. TECHNOLOGY */}
                <div className="space-y-2.5 pt-4 border-t border-border-subtle">
                  <h4 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-text-muted font-semibold">
                    {t.projects.modal?.technology || 'TECHNOLOGY'}
                  </h4>
                  <div className="flex flex-wrap items-center gap-2">
                    {currentCaseStudy.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-surface-subtle border border-border-subtle text-text-secondary hover:bg-surface-hover transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 8. GALLERY PREVIEW (macOS Browser Frame) */}
                <div className="space-y-3 pt-4 border-t border-border-subtle">
                  <h4 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-text-muted font-semibold">
                    {t.projects.modal?.gallery || 'GALLERY'}
                  </h4>
                  <div className="w-full rounded-xl border border-border overflow-hidden bg-surface shadow-md">
                    <div className="bg-surface-subtle border-b border-border-subtle px-3.5 py-2 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80 inline-block" />
                    </div>
                    <img
                      src={currentCaseStudy.image}
                      alt={`${currentCaseStudy.title} Preview`}
                      className="w-full h-auto max-h-[360px] object-cover object-top"
                    />
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </Section>
  );
};

SelectedWork.displayName = 'SelectedWork';
