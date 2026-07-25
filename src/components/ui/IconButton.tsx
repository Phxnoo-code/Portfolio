import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ButtonVariant, ButtonSize } from './Button';

export interface IconButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  icon: LucideIcon;
  'aria-label': string; // Mandatory for accessibility
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-text-primary hover:bg-primary-hover shadow-md hover:shadow-glow-primary',
  secondary:
    'bg-secondary text-background hover:opacity-90 shadow-md hover:shadow-glow-secondary',
  outline:
    'border border-border bg-transparent text-text-primary hover:border-primary hover:text-primary hover:bg-primary/5',
  ghost:
    'bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-hover',
  glass:
    'glass-panel text-text-primary hover:border-primary/50 hover:bg-surface/80',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-9 w-9 text-base rounded-md',
  md: 'h-11 w-11 text-lg rounded-lg',
  lg: 'h-13 w-13 text-xl rounded-xl',
};

const iconSizes: Record<ButtonSize, number> = {
  sm: 16,
  md: 20,
  lg: 24,
};

/**
 * Reusable IconButton Primitive
 * Enforces mandatory aria-label for accessibility screen readers.
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon: Icon,
      'aria-label': ariaLabel,
      className,
      variant = 'ghost',
      size = 'md',
      isLoading = false,
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
        aria-label={ariaLabel}
        disabled={disabled || isLoading}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.92 }}
        className={cn(
          'inline-flex items-center justify-center transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
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
        ) : (
          <Icon size={iconSizes[size]} className="shrink-0" />
        )}
      </motion.button>
    );
  }
);

IconButton.displayName = 'IconButton';
