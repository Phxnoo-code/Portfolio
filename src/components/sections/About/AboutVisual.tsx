import React from 'react';
import { motion } from 'framer-motion';
import { AboutCards } from './AboutCards';

const EASE_CINEMATIC: [number, number, number, number] = [0.25, 1, 0.35, 1];

/**
 * AboutVisual Subcomponent
 * Displays the right column visual card area containing identity cards.
 */
export const AboutVisual: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: EASE_CINEMATIC }}
      className="relative w-full"
    >
      {/* Subtle Soft Background Glow Layer for Right-side Visual Depth */}
      <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl pointer-events-none -z-10" />

      {/* Identity Cards */}
      <AboutCards />
    </motion.div>
  );
};

AboutVisual.displayName = 'AboutVisual';
