import React from 'react';
import { motion } from 'framer-motion';

export interface StatItem {
  id: string;
  value: string;
  label: string;
}

const STATS_DATA: StatItem[] = [
  { id: 'projects', value: '10+', label: 'Projects' },
  { id: 'tech', value: '15+', label: 'Technologies' },
  { id: 'ai', value: '3+', label: 'AI Integrations' },
  { id: 'responsive', value: '100%', label: 'Responsive Design' },
];

const EASE_EXPRESSIVE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * AboutStats Subcomponent
 * Displays the minimal statistics row below capability cards.
 * Features large numbers, minimal layout, and smooth staggered entry.
 */
export const AboutStats: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: 0.45,
        ease: EASE_EXPRESSIVE,
      }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-8 sm:pt-10 border-t border-border-subtle w-full"
    >
      {STATS_DATA.map((stat) => (
        <div key={stat.id} className="flex flex-col space-y-1">
          <span className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-text-primary tracking-[-0.03em]">
            {stat.value}
          </span>
          <span className="text-xs sm:text-sm font-mono text-text-muted uppercase tracking-wider font-medium">
            {stat.label}
          </span>
        </div>
      ))}
    </motion.div>
  );
};

AboutStats.displayName = 'AboutStats';
