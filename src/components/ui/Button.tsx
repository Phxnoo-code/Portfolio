import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

/**
 * Modern Minimal Premium Button Variant Tokens
 * High-contrast light/dark system without heavy shadows, neon gradients, or glows.
 */
const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-text-primary text-background hover:opacity-90 border border-transparent font-semibold transition-all duration-200',
  secondary:
    'bg-surface/80 border border-border text-text-primary hover:bg-surface-hover hover:border-border/80 font-medium transition-all duration-200',
  outline:
    'bg-transparent border border-border text-text-primary hover:border-text-secondary/60 hover:bg-surface/40 font-medium transition-all duration-200',
  ghost:
    'bg-transparent border border-transparent text-text-secondary hover:text-text-primary hover:bg-surface/40 font-medium transition-all duration-200',
  glass:
    'bg-surface/40 backdrop-blur-md border border-border/80 text-text-primary hover:bg-surface/70 hover:border-border font-medium transition-all duration-200',
};

/**
 * Button Size Tokens
 * Refined border radius tokens (rounded-md / rounded-lg) for a sleek, modern, minimal aesthetic.
 */
const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-xs gap-1.5 rounded-md',
  md: 'h-11 px-5 text-sm gap-2 rounded-lg',
  lg: 'h-12 px-6.5 text-[15px] gap-2.5 rounded-lg',
};

/**
 * Reusable Button Primitive
 * Standardized interactive control with handcrafted Framer Motion spring feedback, variant styles, and loading state.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        whileHover={disabled || isLoading ? undefined : { y: -1, scale: 1.01 }}
        whileTap={disabled || isLoading ? undefined : { scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className={cn(
          'inline-flex items-center justify-center font-sans tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer',
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {isLoading ? (
          <span className="inline-flex items-center gap-2">
            <svg
              className="animate-spin h-4 w-4 text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Loading...</span>
          </span>
        ) : (
          <>
            {leftIcon && <span className="shrink-0">{leftIcon}</span>}
            {children && <span>{children}</span>}
            {rightIcon && <span className="shrink-0">{rightIcon}</span>}
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
