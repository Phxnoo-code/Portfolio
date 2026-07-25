import React, { forwardRef, useId } from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

/**
 * Reusable Textarea Primitive
 * Accessible multi-line input field with error messaging, label binding, and focus styling.
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      helperText,
      className,
      id: customId,
      disabled,
      required,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const textareaId = customId || generatedId;
    const errorId = `${textareaId}-error`;
    const helperId = `${textareaId}-helper`;

    return (
      <div className="w-full space-y-1.5 font-sans">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-text-primary select-none"
          >
            {label} {required && <span className="text-status-error">*</span>}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          className={cn(
            'w-full p-4 text-sm bg-surface text-text-primary placeholder:text-text-secondary/50 border border-border rounded-lg transition-colors focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed resize-y min-h-[100px]',
            error && 'border-status-error focus:border-status-error focus:ring-status-error',
            className
          )}
          {...props}
        />

        {error && (
          <p id={errorId} className="text-xs text-status-error font-medium animate-fade-in">
            {error}
          </p>
        )}

        {!error && helperText && (
          <p id={helperId} className="text-xs text-text-secondary">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
