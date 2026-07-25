import React from 'react';
import { Inbox } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

/**
 * Reusable EmptyState Component
 * Renders fallback graphics when filtering results or data arrays yield zero items.
 */
export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No items found',
  description = 'Try adjusting your search query or filter selection.',
  icon = <Inbox size={32} className="text-text-secondary" />,
  action,
  className,
}) => {
  return (
    <div
      className={cn(
        'w-full py-12 px-6 rounded-xl border border-dashed border-border bg-surface/30 flex flex-col items-center justify-center text-center space-y-3',
        className
      )}
    >
      <div className="p-3 rounded-full bg-surface border border-border">{icon}</div>
      <h4 className="text-base font-display font-semibold text-text-primary">{title}</h4>
      <p className="text-sm text-text-secondary max-w-sm">{description}</p>
      {action && <div className="pt-2">{action}</div>}
    </div>
  );
};

EmptyState.displayName = 'EmptyState';
