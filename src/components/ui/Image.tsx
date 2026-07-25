import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Skeleton } from './Loading';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string; // Mandatory for accessibility
  fallbackSrc?: string;
  containerClassName?: string;
}

/**
 * Reusable Image Primitive Component
 * Encapsulates lazy loading, skeleton loading state, and fallback graphics on error.
 */
export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  fallbackSrc,
  className,
  containerClassName,
  loading = 'lazy',
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={cn('relative overflow-hidden bg-surface/50', containerClassName)}>
      {isLoading && (
        <Skeleton className="absolute inset-0 w-full h-full z-10" />
      )}

      {hasError ? (
        fallbackSrc ? (
          <img
            src={fallbackSrc}
            alt={alt}
            className={cn('w-full h-full object-cover', className)}
            {...props}
          />
        ) : (
          <div className="w-full h-full min-h-[160px] flex flex-col items-center justify-center bg-surface-hover text-text-secondary p-4 text-center space-y-2">
            <ImageOff size={32} className="text-text-secondary/50" />
            <span className="text-xs font-mono">{alt || 'Image unavailable'}</span>
          </div>
        )
      ) : (
        <img
          src={src}
          alt={alt}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            'w-full h-full object-cover transition-opacity duration-300',
            isLoading ? 'opacity-0' : 'opacity-100',
            className
          )}
          {...props}
        />
      )}
    </div>
  );
};

Image.displayName = 'Image';
