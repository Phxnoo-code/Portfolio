import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Container, ContainerSize } from '../ui/Container';

export type SectionPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';
export type SectionBackground = 'default' | 'surface' | 'glass' | 'accent-glow';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  padding?: SectionPadding;
  background?: SectionBackground;
  containerSize?: ContainerSize;
  withContainer?: boolean;
}

const paddingStyles: Record<SectionPadding, string> = {
  none: 'py-0',
  sm: 'py-12 sm:py-16',
  md: 'py-16 sm:py-24',
  lg: 'py-24 sm:py-32',
  xl: 'py-32 sm:py-40',
};

const backgroundStyles: Record<SectionBackground, string> = {
  default: 'bg-background',
  surface: 'bg-surface/50 border-y border-border/40',
  glass: 'glass-panel border-y border-border/50',
  'accent-glow': 'bg-background relative overflow-hidden',
};

/**
 * Reusable Section Layout Component
 * Enforces vertical padding rhythm, container boundaries, and background styling across portfolio sections.
 */
export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      id,
      padding = 'md',
      background = 'default',
      containerSize = 'lg',
      withContainer = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const content = withContainer ? (
      <Container size={containerSize}>{children}</Container>
    ) : (
      children
    );

    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          'w-full relative scroll-mt-20',
          paddingStyles[padding],
          backgroundStyles[background],
          className
        )}
        {...props}
      >
        {background === 'accent-glow' && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />
        )}
        {content}
      </section>
    );
  }
);

Section.displayName = 'Section';
