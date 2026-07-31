import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';

export interface LanguageToggleProps {
  className?: string;
  showLabel?: boolean;
}

/**
 * LanguageToggle Component
 * Toggles between EN (English) and TH (Thai) languages using useLanguage hook.
 */
export const LanguageToggle: React.FC<LanguageToggleProps> = ({ className = '', showLabel = false }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={language === 'en' ? 'Switch to Thai' : 'Switch to English'}
      title={language === 'en' ? 'Switch to Thai' : 'Switch to English'}
      className={`inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 bg-transparent text-text-primary hover:bg-surface-hover transition-colors duration-200 cursor-pointer rounded-lg font-mono text-xs font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${className}`}
    >
      <span className={language === 'en' ? 'text-primary font-bold' : 'text-text-muted'}>
        EN
      </span>
      <span className="text-border-subtle select-none">/</span>
      <span className={language === 'th' ? 'text-primary font-bold' : 'text-text-muted'}>
        TH
      </span>
      {showLabel && (
        <span className="ml-1 text-text-secondary font-medium">
          ({language.toUpperCase()})
        </span>
      )}
    </button>
  );
};

LanguageToggle.displayName = 'LanguageToggle';
