import React from 'react';
import { motion } from 'framer-motion';

export interface EditorialCapability {
  index: string;
  title: string;
  description: string;
}

const CAPABILITIES: EditorialCapability[] = [
  {
    index: '01',
    title: 'Product Design',
    description: 'Creating meaningful digital experiences through intuitive interfaces and user-focused design.',
  },
  {
    index: '02',
    title: 'Web Development',
    description: 'Turning ideas and designs into functional digital products and web solutions.',
  },
  {
    index: '03',
    title: 'AI Automation',
    description: 'Building smarter workflows with connected AI-powered solutions.',
  },
];

const EASE_EXPRESSIVE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * AboutContent Subcomponent - Editorial Narrative, Capabilities & Metadata
 * "This is how I create"
 */
export const AboutContent: React.FC = () => {
  const getItemMotion = (delayIndex: number) => ({
    initial: { opacity: 0, y: 16, filter: 'blur(4px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    viewport: { once: true, margin: '-50px' },
    transition: {
      duration: 0.6,
      delay: delayIndex * 0.09,
      ease: EASE_EXPRESSIVE,
    },
  });

  return (
    <div className="space-y-8 text-text-secondary font-sans">
      {/* Title & Personal Story Narrative */}
      <div className="space-y-4">
        <motion.h3
          {...getItemMotion(1)}
          className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-text-primary tracking-[-0.03em]"
        >
          Hi, I'm Phanoo.
        </motion.h3>

        <motion.p {...getItemMotion(2)} className="text-base sm:text-lg leading-[1.75]">
          I'm an Information Technology student who enjoys building digital experiences through modern technologies.
        </motion.p>

        <motion.p {...getItemMotion(3)} className="text-base sm:text-lg leading-[1.75]">
          My interest goes beyond writing code. I enjoy combining design, development, and automation to create practical solutions.
        </motion.p>

        <motion.p {...getItemMotion(4)} className="text-base sm:text-lg leading-[1.75]">
          I work across frontend development, APIs, databases, and AI-powered workflows to build products that are useful, efficient, and user-focused.
        </motion.p>
      </div>

      {/* Editorial Numbered Capability List */}
      <motion.div {...getItemMotion(5)} className="pt-2 space-y-3">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted font-semibold block pb-1">
          WHAT I BUILD
        </span>

        <div className="space-y-0">
          {CAPABILITIES.map((item) => (
            <div
              key={item.index}
              className="py-4 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 group hover:border-[#7C5CFF]/40 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="font-mono text-xs sm:text-sm text-primary font-bold tracking-wider">
                  {item.index}
                </span>
                <h4 className="text-base sm:text-lg font-display font-bold text-text-primary group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-text-muted font-sans pl-7 sm:pl-0 sm:text-right max-w-sm sm:max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Minimal Personal Metadata Footer Row */}
      <motion.div
        {...getItemMotion(6)}
        className="pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono select-none"
      >
        <div className="space-y-0.5">
          <span className="text-text-muted tracking-wider uppercase block text-[11px]">BASED IN</span>
          <span className="text-text-primary font-medium text-xs sm:text-sm">Thailand</span>
        </div>
        <div className="space-y-0.5">
          <span className="text-text-muted tracking-wider uppercase block text-[11px]">FOCUS</span>
          <span className="text-text-primary font-medium text-xs sm:text-sm">Design / Web / AI</span>
        </div>
        <div className="space-y-0.5">
          <span className="text-text-muted tracking-wider uppercase block text-[11px]">AVAILABLE</span>
          <span className="text-primary font-medium text-xs sm:text-sm">Internship Opportunities</span>
        </div>
      </motion.div>
    </div>
  );
};

AboutContent.displayName = 'AboutContent';
