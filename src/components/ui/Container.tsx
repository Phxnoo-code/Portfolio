import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
  as?: React.ElementType;
}

const sizeStyles: Record<ContainerSize, string> = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-[1440px]',
  xl: 'max-w-[1536px]',
  full: 'max-w-full',
};

/**
 * Reusable Container Primitive - Global Layout Container System
 * Establishes wide, spacious horizontal boundaries (max 1440px for lg, 1536px for xl) and comfortable responsive side padding across viewports.
 */
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = 'lg', as: Component = 'div', children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12',
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = 'Container';
