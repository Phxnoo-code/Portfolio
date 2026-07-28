import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, ExternalLink, Github } from 'lucide-react';
import { Section } from '../../layout/Section';
import { Container } from '../../ui/Container';

const EASE_SMOOTH: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Shared ultra-fine noise texture matching Hero, About, What I Build & Skills sections
const NOISE_TEXTURE_DATA_URI = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E`;

export interface ProjectCaseStudy {
  id: string;
  number: string;
  category: string;
  title: string;
  roles: string[];
  shortDescription: string;
  technologies: string[];
  image: string;
  overview: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  demoUrl?: string;
  githubUrl?: string;
  isImageRight: boolean;
}

export const SELECTED_PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'portfolio-website',
    number: '01',
    category: 'Digital Product',
    title: 'Portfolio Website',
    roles: ['Product Design', 'Frontend Development', 'Motion Design'],
    shortDescription:
      'A personal digital product showcase built with high editorial precision, responsive typography, and fluid micro-interactions.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    image: '/images/projects/portfolio.png',
    overview:
      'Designed and engineered as a personal digital identity platform. The goal was to replace traditional resume templates with a minimalist, Apple-inspired editorial reading experience that highlights capability, precision, and craft.',
    problem:
      'Standard developer portfolios often feel overcrowded with generic SaaS cards, excessive glow effects, and loud animations that distract from the work itself.',
    solution:
      'Constructed an editorial bento architecture with strict typographic hierarchy, subtle volumetric dark lighting, and fluid glass overlays for deep project storytelling.',
    keyFeatures: [
      'Editorial vertical information architecture with 1:1 visual ratio',
      'Asymmetrical bento capability grid with floating glass editorial overlays',
      'Sticky Apple Wallet style stacked project case study presentation',
      'Ultra-fine noise grain textures and atmospheric lighting continuation',
    ],
    demoUrl: 'https://phanoo-portfolio.vercel.app',
    githubUrl: 'https://github.com/phanoo/portfolio',
    isImageRight: true,
  },
  {
    id: 'line-hr-assistant',
    number: '02',
    category: 'AI Automation',
    title: 'LINE HR Assistant',
    roles: ['System Integration', 'Workflow Automation', 'AI Integration'],
    shortDescription:
      'An intelligent HR assistant bot integrated into LINE Messenger that automates employee leave management, policy Q&A, and HR workflow notifications.',
    technologies: ['Node.js', 'Python', 'LINE Messaging API', 'OpenAI API', 'Webhooks'],
    image: '/images/projects/chat_bot.png',
    overview:
      'Built to streamline internal human resource inquiries within organizations using LINE, Thailand’s primary messaging interface. The bot serves as an instant self-service portal for employees.',
    problem:
      'HR personnel spent significant manual hours answering repetitive leave balance questions, policy inquiries, and processing routine employee request forms.',
    solution:
      'Integrated OpenAI’s structured prompt pipeline with the LINE Messaging API and backend webhooks, enabling automated natural language policy querying and leave verification.',
    keyFeatures: [
      'Automated conversational AI Q&A for internal company policies',
      'Instant leave balance verification & automated request submission',
      'Event-driven webhook routing for HR manager approval notifications',
      'Structured prompt engineering for deterministic, policy-accurate responses',
    ],
    demoUrl: 'https://example.com/line-hr-assistant',
    githubUrl: 'https://github.com/phanoo/line-hr-assistant',
    isImageRight: false,
  },
  {
    id: 'barber-booking-system',
    number: '03',
    category: 'Business Website',
    title: 'Barber Booking System',
    roles: ['Web Development', 'System Integration', 'WordPress Customization'],
    shortDescription:
      'Developed a digital booking solution for barbershop businesses, improving appointment management and creating a smoother customer scheduling experience.',
    technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'Booking Plugin'],
    image: '/images/projects/barber.png',
    overview:
      'Developed a digital booking solution for barbershop businesses, improving appointment management and creating a smoother customer scheduling experience.',
    problem:
      'Many small barbershops still manage appointments manually, which can lead to scheduling conflicts, unclear availability, and inefficient customer management.',
    solution:
      'Implemented a WordPress-based booking system with customized workflows, enabling customers to select services, schedule appointments, and allowing staff to manage bookings more efficiently.',
    keyFeatures: [
      'Online appointment booking system for customers',
      'Service selection and booking information management',
      'Appointment scheduling and calendar management',
      'Responsive experience optimized for mobile users',
    ],
    demoUrl: 'https://example.com/barber-booking',
    githubUrl: 'https://github.com/phanoo/barber-booking',
    isImageRight: true,
  },

];

/**
 * SelectedWork Component
 * Refined Apple Wallet stacked scroll layout with 45% Content / 55% macOS Browser Preview ratio,
 * subtle metadata hierarchy, and compact Floating Glass Editorial Case Study overlay.
 */
export const SelectedWork: React.FC = () => {
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string | null>(null);

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
    ? SELECTED_PROJECTS.find((p) => p.id === activeCaseStudyId)
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
              className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-primary font-semibold"
            >
              — SELECTED WORK —
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.06, ease: EASE_SMOOTH }}
              className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-text-primary tracking-[-0.03em] leading-[1.12] break-words"
            >
              Real products built through design, engineering, and automation
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.12, ease: EASE_SMOOTH }}
              className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal pt-1"
            >
              A curated selection of projects that demonstrate how I solve problems through thoughtful design, modern development, and intelligent automation.
            </motion.p>
          </div>

          {/* VERTICAL STACKED PROJECT CARDS (Apple Wallet Stacked Scroll Effect) */}
          <div className="w-full min-w-0 relative space-y-12 sm:space-y-16 pb-12">
            {SELECTED_PROJECTS.map((project, idx) => {
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
                  <div className="relative w-full rounded-2xl sm:rounded-3xl bg-[radial-gradient(ellipse_at_top_left,rgba(124,92,255,0.05)_0%,rgba(16,18,25,0.99)_60%,rgba(10,11,15,1)_100%)] border border-white/[0.12] shadow-[0_25px_60px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.08)] p-7 sm:p-10 lg:p-12 group transition-all duration-500 overflow-hidden">
                    {/* Subtle Top-Left Ambient Light Glow */}
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#7C5CFF]/06 blur-3xl pointer-events-none select-none rounded-full" />

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
                          <span className="text-white/20 font-mono text-xs">•</span>
                          <span className="text-xs sm:text-sm font-mono text-text-muted/70 uppercase tracking-[0.2em] font-medium">
                            {project.category}
                          </span>
                        </div>

                        {/* Title & Short Description (2-3 lines) */}
                        <div className="space-y-3">
                          <h3 className="text-3xl sm:text-4xl lg:text-4xl font-display font-extrabold text-text-primary tracking-[-0.02em] leading-tight group-hover:text-primary transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
                            {project.shortDescription}
                          </p>
                        </div>

                        {/* Quiet Supporting Role & Technologies */}
                        <div className="space-y-4 pt-1">
                          <div className="space-y-1">
                            <span className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted/60 font-semibold block">
                              ROLE
                            </span>
                            <p className="text-sm sm:text-base font-sans text-text-primary/90 font-medium">
                              {project.roles.join('  •  ')}
                            </p>
                          </div>

                          <div className="space-y-1">
                            <span className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted/60 font-semibold block">
                              TECHNOLOGY
                            </span>
                            <p className="text-xs sm:text-sm font-mono text-text-muted/80 leading-relaxed">
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
                            <span>View Case Study</span>
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
                          className="relative w-full rounded-xl sm:rounded-2xl border border-white/[0.14] bg-[#0B0C10] shadow-2xl shadow-black/90 overflow-hidden cursor-pointer group/img transition-all duration-500 hover:border-[#7C5CFF]/50 hover:shadow-[0_0_35px_rgba(124,92,255,0.15)]"
                        >
                          {/* macOS Traffic-Light Browser Chrome Header */}
                          <div className="bg-[#141620] border-b border-white/[0.08] px-3.5 py-2.5 flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80 inline-block" />
                              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80 inline-block" />
                              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80 inline-block" />
                            </div>
                            <div className="bg-black/40 border border-white/[0.06] rounded-md px-3 py-0.5 text-[10px] font-mono text-text-muted/60 max-w-[200px] truncate text-center select-none">
                              {project.title.toLowerCase().replace(/\s+/g, '')}.app
                            </div>
                            <div className="w-8" />
                          </div>

                          {/* Real Project Screenshot Screen Container */}
                          <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/80">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover object-top group-hover/img:scale-[1.025] transition-transform duration-700 ease-out"
                              loading="lazy"
                            />
                            {/* Ambient gradient vignette overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover/img:opacity-20 transition-opacity duration-500" />

                            {/* Subtle View Case Study overlay badge on hover */}
                            <div className="absolute bottom-4 right-4 bg-black/85 backdrop-blur-md border border-white/[0.14] px-3.5 py-1.5 rounded-none text-[11px] font-mono text-primary font-semibold flex items-center gap-1.5 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 shadow-lg">
                              <span>View Case Study</span>
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
      <AnimatePresence>
        {activeCaseStudyId && currentCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop Blur & Dimmed Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE_SMOOTH }}
              onClick={() => setActiveCaseStudyId(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            />

            {/* Compact Floating Glass Editorial Panel (max-w-[780px], single-viewport desktop fit) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.35, ease: EASE_SMOOTH }}
              className="relative w-full max-w-[780px] max-h-[84vh] overflow-y-auto rounded-none bg-[#0B0C10]/98 border border-white/[0.14] shadow-2xl shadow-black/95 p-6 sm:p-10 space-y-7 z-10 scrollbar-thin scrollbar-thumb-white/10"
            >
              {/* Close Button Trigger */}
              <button
                onClick={() => setActiveCaseStudyId(null)}
                aria-label="Close case study"
                className="absolute top-5 right-5 text-text-muted hover:text-text-primary transition-colors duration-200 cursor-pointer p-1"
              >
                <X size={18} />
              </button>

              {/* 1. Header: Index, Category & Large Title */}
              <div className="space-y-2 pr-8 border-b border-white/[0.08] pb-5">
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
                  OVERVIEW
                </h4>
                <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
                  {currentCaseStudy.overview}
                </p>
              </div>

              {/* 3. PROBLEM */}
              <div className="space-y-2 pt-4 border-t border-white/[0.08]">
                <h4 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-text-muted font-semibold">
                  PROBLEM
                </h4>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                  {currentCaseStudy.problem}
                </p>
              </div>

              {/* 4. SOLUTION */}
              <div className="space-y-2 pt-4 border-t border-white/[0.08]">
                <h4 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-text-muted font-semibold">
                  SOLUTION
                </h4>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                  {currentCaseStudy.solution}
                </p>
              </div>

              {/* 5. MY ROLE */}
              <div className="space-y-2 pt-4 border-t border-white/[0.08]">
                <h4 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-text-muted font-semibold">
                  MY ROLE
                </h4>
                <p className="text-sm sm:text-base text-text-primary font-sans font-medium">
                  {currentCaseStudy.roles.join('  •  ')}
                </p>
              </div>

              {/* 6. KEY FEATURES */}
              <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                <h4 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-text-muted font-semibold">
                  KEY FEATURES
                </h4>
                <div className="space-y-2">
                  {currentCaseStudy.keyFeatures.map((feature, idx) => (
                    <p key={idx} className="text-sm sm:text-base text-text-primary font-sans leading-relaxed flex items-start gap-2.5">
                      <span className="text-primary font-mono text-sm pt-0.5">•</span>
                      <span>{feature}</span>
                    </p>
                  ))}
                </div>
              </div>

              {/* 7. TECHNOLOGY */}
              <div className="space-y-2 pt-4 border-t border-white/[0.08]">
                <h4 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-text-muted font-semibold">
                  TECHNOLOGY
                </h4>
                <p className="text-xs sm:text-sm font-mono text-text-secondary leading-relaxed">
                  {currentCaseStudy.technologies.join('  •  ')}
                </p>
              </div>

              {/* 8. GALLERY PREVIEW (macOS Browser Frame) */}
              <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                <h4 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-text-muted font-semibold">
                  GALLERY
                </h4>
                <div className="w-full rounded-xl border border-white/[0.12] overflow-hidden bg-[#0B0C10] shadow-xl">
                  <div className="bg-[#141620] border-b border-white/[0.08] px-3.5 py-2 flex items-center gap-1.5">
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

              {/* 9. LINKS */}
              <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                <h4 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-text-muted font-semibold">
                  LINKS
                </h4>
                <div className="flex flex-wrap items-center gap-5 text-sm font-mono">
                  {currentCaseStudy.demoUrl && (
                    <a
                      href={currentCaseStudy.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-semibold flex items-center gap-1.5"
                    >
                      <span>Live Case Study</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                  {currentCaseStudy.githubUrl && (
                    <a
                      href={currentCaseStudy.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1.5"
                    >
                      <Github size={15} />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
};

SelectedWork.displayName = 'SelectedWork';
