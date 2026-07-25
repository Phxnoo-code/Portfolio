import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '@/data/profile';

const EASE_EXPRESSIVE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * AboutContent Subcomponent
 * Displays the left column heading, subheading, and bio paragraph placeholders.
 */
export const AboutContent: React.FC = () => {
  const { description } = profileData;

  const getItemMotion = (delayIndex: number) => ({
    initial: { opacity: 0, y: 16, filter: 'blur(4px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    viewport: { once: true, margin: '-50px' },
    transition: {
      duration: 0.6,
      delay: delayIndex * 0.1,
      ease: EASE_EXPRESSIVE,
    },
  });

  return (
    <div className="space-y-6 max-w-2xl">
      {/* Badge / Tagline */}
      <motion.div {...getItemMotion(1)}>
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary font-semibold">
          About Me
        </p>
      </motion.div>

      {/* Main Subheading */}
      <motion.div {...getItemMotion(2)}>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-text-primary tracking-[-0.02em] leading-[1.12]">
          Building digital experiences through technology and design.
        </h2>
      </motion.div>

      {/* Body Description / Bio */}
      <motion.div {...getItemMotion(3)}>
        <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-sans">
          {description ||
            'I create modern web applications and digital experiences that combine reliable functionality with thoughtful visual design. My focus is web development, supported by UI design, AI workflow automation, and creative problem solving.'}
        </p>
      </motion.div>
    </div>
  );
};

AboutContent.displayName = 'AboutContent';
