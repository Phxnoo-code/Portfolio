import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export type CardVariant = 'flat' | 'bordered' | 'glass' | 'interactive';

export interface CardProps extends HTMLMotionProps<'div'> {
  variant?: CardVariant;
  hoverGlow?: boolean;
}

const variantStyles: Record<CardVariant, string> = {
  flat: 'bg-surface text-text-primary border border-transparent',
  bordered: 'bg-surface text-text-primary border border-border',
  glass: 'glass-panel text-text-primary',
  interactive:
    'bg-surface text-text-primary border border-border hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-1 cursor-pointer',
};

/**
 * Reusable Card Primitive
 * Modular structural container supporting subcomponents (CardHeader, CardTitle, CardContent, CardFooter).
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'bordered', hoverGlow = false, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          'rounded-xl p-6 relative overflow-hidden',
          variantStyles[variant],
          hoverGlow && 'hover:shadow-glow-primary hover:border-primary/40',
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = 'Card';

export const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 mb-4', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

export const CardTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-xl font-display font-semibold tracking-tight text-text-primary', className)}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

export const CardDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-sm text-text-secondary leading-relaxed', className)} {...props} />
  )
);
CardDescription.displayName = 'CardDescription';

export const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('pt-0 leading-relaxed', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

export const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center pt-4 mt-auto border-t border-border/50', className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';
