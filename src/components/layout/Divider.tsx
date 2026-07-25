import React from 'react';
import { cn } from '@/lib/utils';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'solid' | 'gradient' | 'dashed';
  glow?: boolean;
  label?: string;
}

/**
 * Reusable Divider Layout Component
 * Decorative separator with optional ambient gradient lines and centered label chips.
 */
export const Divider: React.FC<DividerProps> = ({
  variant = 'gradient',
  glow = false,
  label,
  className,
  ...props
}) => {
  return (
    <div
      className={cn('relative w-full my-12 sm:my-16 flex items-center justify-center', className)}
      {...props}
    >
      <div
        className={cn(
          'w-full h-px',
          variant === 'solid' && 'bg-border',
          variant === 'gradient' &&
            'bg-gradient-to-r from-transparent via-border to-transparent',
          variant === 'dashed' && 'border-b border-dashed border-border bg-transparent',
          glow && 'via-primary/50 shadow-glow-primary'
        )}
      />

      {label && (
        <span className="absolute bg-background px-4 text-xs font-mono text-text-secondary uppercase tracking-widest border border-border/60 rounded-full py-0.5">
          {label}
        </span>
      )}
    </div>
  );
};

Divider.displayName = 'Divider';
