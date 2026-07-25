import React from 'react';
import { cn } from '@/lib/utils';

export interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  className?: string;
}

const sizeStyles = {
  sm: 'h-4 w-4 border-2',
  md: 'h-8 w-8 border-3',
  lg: 'h-12 w-12 border-4',
};

/**
 * Reusable Loading Spinner Component
 */
export const Loading: React.FC<LoadingProps> = ({
  size = 'md',
  label = 'Loading...',
  className,
}) => {
  return (
    <div className={cn('flex flex-col items-center justify-center p-6 space-y-3', className)}>
      <div
        className={cn(
          'animate-spin rounded-full border-primary border-t-transparent',
          sizeStyles[size]
        )}
      />
      {label && <p className="text-xs font-mono text-text-secondary">{label}</p>}
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
