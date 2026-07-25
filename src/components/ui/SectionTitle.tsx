import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  badge?: string;
  title: string;
  titleGradient?: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

/**
 * Reusable SectionTitle Primitive - Global System Integration
 * Provides uniform section heading hierarchy with overline badge, title, and lead subtitle scaled to wider 1440px containers.
 */
export const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  title,
  titleGradient,
  subtitle,
  align = 'left',
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'space-y-3 mb-12 sm:mb-16',
        align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-4xl',
        className
      )}
      {...props}
    >
      {badge && (
        <div
          className={cn(
            'inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono tracking-wider uppercase font-medium',
            align === 'center' && 'mx-auto'
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-text-primary">
        {title}{' '}
        {titleGradient && <span className="text-gradient">{titleGradient}</span>}
      </h2>

      {subtitle && (
        <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-sans max-w-3xl font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};

SectionTitle.displayName = 'SectionTitle';
