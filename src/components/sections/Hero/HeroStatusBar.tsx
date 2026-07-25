import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  FileCode2,
  Palette,
  Sparkles,
  Server,
  Database,
  Terminal,
  Box,
  GitBranch,
  Layout,
  Bot,
} from 'lucide-react';

export interface HeroStatusBarProps {
  isIntroComplete?: boolean;
}

interface TechItem {
  name: string;
  icon: React.ElementType;
}

const TECH_STACK: TechItem[] = [
  { name: 'React', icon: Code2 },
  { name: 'TypeScript', icon: FileCode2 },
  { name: 'Tailwind CSS', icon: Palette },
  { name: 'Framer Motion', icon: Sparkles },
  { name: 'PHP', icon: Server },
  { name: 'MySQL', icon: Database },
  { name: 'Node.js', icon: Terminal },
  { name: 'Docker', icon: Box },
  { name: 'Git', icon: GitBranch },
  { name: 'Figma', icon: Layout },
  { name: 'AI Workflow', icon: Bot },
];

const EASE_EXPRESSIVE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * HeroStatusBar Component - Animated Tech Stack Marquee
 * Replaces the entire legacy status info bar with a seamless infinite horizontal marquee.
 * Preserves original border-t, pt-6, component hierarchy, and intro animations.
 */
export const HeroStatusBar: React.FC<HeroStatusBarProps> = ({ isIntroComplete = true }) => {
  // Duplicate array for 100% seamless continuous infinite loop
  const marqueeItems = [...TECH_STACK, ...TECH_STACK];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={isIntroComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.6, delay: 0.6, ease: EASE_EXPRESSIVE }}
      className="w-full pt-6 border-t border-white/[0.06] relative z-20 overflow-hidden select-none"
    >
      {/* Edge Gradient Mask for Soft Infinite Marquee Blending */}
      <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 25,
            ease: 'linear',
            repeat: Infinity,
          }}
          className="flex items-center gap-8 sm:gap-12 w-max"
        >
          {marqueeItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.name}-${index}`}
                className="flex items-center gap-2 text-[13px] font-mono text-text-secondary hover:text-text-primary transition-all duration-200 cursor-pointer group shrink-0"
              >
                <Icon size={14} className="text-text-muted group-hover:text-text-primary transition-colors shrink-0 grayscale" />
                <span className="tracking-wide">{item.name}</span>
                <span className="ml-4 text-border/60 text-[10px] select-none">•</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

HeroStatusBar.displayName = 'HeroStatusBar';
