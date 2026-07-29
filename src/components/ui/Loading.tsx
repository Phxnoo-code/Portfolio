import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  className?: string;
}

/**
 * Reusable Loading Spinner Component
 */
export const Loading: React.FC<LoadingProps> = ({
  size = 'md',
  label = 'Loading...',
  className,
}) => {
  const isFullScreen = size === 'lg';

  if (!isFullScreen) {
    return (
      <div className={cn('flex flex-col items-center justify-center p-6 space-y-3', className)}>
        <div className="w-5 h-[1px] bg-white/15 relative overflow-hidden rounded-full">
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 bg-[#7C5CFF]"
          />
        </div>
        {label && <p className="text-[10px] font-mono tracking-wider text-text-secondary">{label}</p>}
      </div>
    );
  }

  // Full-screen Premium Experience for size="lg"
  return (
    <div className={cn('fixed inset-0 z-[9999] bg-[#030303] text-white flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden p-6', className)}>
      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#7C5CFF]/04 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Centered Premium Loading Block */}
      <motion.div
        initial={{ opacity: 0, y: 12, filter: 'blur(5px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center space-y-6 w-full max-w-[280px] sm:max-w-[340px] z-10"
      >
        {/* Brand name */}
        <div className="flex flex-col items-center space-y-1.5 text-center">
          <span className="font-display text-base sm:text-lg tracking-[0.3em] text-white/90 font-light uppercase block leading-none">
            PHANOO
          </span>
          <span className="font-display text-[8px] sm:text-[9px] tracking-[0.25em] text-white/30 uppercase block leading-none">
            DESIGN  •  CODE  •  AUTOMATION
          </span>
        </div>

        {/* Loading text */}
        {label && (
          <h3 className="font-display text-[10px] sm:text-xs text-white/50 tracking-[0.2em] uppercase font-medium leading-relaxed text-center">
            {label}
          </h3>
        )}

        {/* Minimal Progress Bar (Indeterminate Shimmer Line) */}
        <div className="w-full h-[1px] bg-white/[0.08] relative overflow-hidden rounded-full mt-1">
          <motion.div
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-0 left-0 w-1/3 h-full bg-[#7C5CFF] shadow-[0_0_6px_rgba(124,92,255,0.4)]"
          />
        </div>

        {/* Status text */}
        <span className="font-display text-[9px] tracking-[0.22em] text-white/30 uppercase mt-0.5">
          PREPARING DIGITAL EXPERIENCE
        </span>
      </motion.div>
    </div>
  );
};

Loading.displayName = 'Loading';

/**
 * Reusable Skeleton Placeholder Component
 */
export const Skeleton: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn('animate-shimmer bg-gradient-to-r from-surface via-surface-hover to-surface bg-[length:200%_100%] rounded-md', className)}
      {...props}
    />
  );
};

Skeleton.displayName = 'Skeleton';
