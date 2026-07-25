import React from 'react';
import { cn } from '@/lib/utils';

export type BadgeVariant = 'solid' | 'soft' | 'outline' | 'glass';
export type BadgeColor = 'primary' | 'neutral' | 'success' | 'warning' | 'error';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  color?: BadgeColor;
  size?: BadgeSize;
  withDot?: boolean;
  leftIcon?: React.ReactNode;
}

const colorStyles: Record<BadgeColor, Record<BadgeVariant, string>> = {
  primary: {
    solid: 'bg-primary text-white font-semibold',
    soft: 'bg-primary/10 text-primary border border-primary/25',
    outline: 'border border-primary text-primary bg-transparent',
    glass: 'glass-panel text-primary border-primary/30',
  },
  neutral: {
    solid: 'bg-surface-hover text-text-primary border border-border',
    soft: 'bg-surface/80 text-text-secondary border border-border/60',
    outline: 'border border-border text-text-secondary bg-transparent',
    glass: 'glass-panel text-text-secondary border-border/40',
  },
  success: {
    solid: 'bg-status-success text-black font-semibold',
    soft: 'bg-status-success/10 text-status-success border border-status-success/25',
    outline: 'border border-status-success text-status-success bg-transparent',
    glass: 'glass-panel text-status-success border-status-success/30',
  },
  warning: {
    solid: 'bg-status-warning text-black font-semibold',
    soft: 'bg-status-warning/10 text-status-warning border border-status-warning/25',
    outline: 'border border-status-warning text-status-warning bg-transparent',
    glass: 'glass-panel text-status-warning border-status-warning/30',
  },
  error: {
    solid: 'bg-status-error text-white font-semibold',
    soft: 'bg-status-error/10 text-status-error border border-status-error/25',
    outline: 'border border-status-error text-status-error bg-transparent',
    glass: 'glass-panel text-status-error border-status-error/30',
  },
};

const dotColorStyles: Record<BadgeColor, string> = {
  primary: 'bg-primary',
  neutral: 'bg-text-secondary',
  success: 'bg-status-success',
  warning: 'bg-status-warning',
  error: 'bg-status-error',
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-xs font-mono rounded-sm gap-1.5',
  md: 'px-3 py-1 text-xs font-mono rounded-md gap-2',
};

/**
 * Reusable Badge Primitive
 * Compact visual indicator adhering strictly to Color Semantics.
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = 'soft',
  color = 'neutral',
  size = 'md',
  withDot = false,
  leftIcon,
  ...props
}) => {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium tracking-wide leading-none transition-colors select-none',
        colorStyles[color][variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {withDot && (
        <span
          className={cn('w-1.5 h-1.5 rounded-full shrink-0 animate-pulse', dotColorStyles[color])}
        />
      )}
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <span>{children}</span>
    </span>
  );
};

Badge.displayName = 'Badge';
