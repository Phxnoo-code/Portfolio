import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

/**
 * ThemeToggle Component
 * Toggles between Dark Theme and Light Theme using useTheme hook.
 * Renders Sun icon in Dark Mode and Moon icon in Light Mode.
 */
export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', showLabel = false }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDarkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      title={isDarkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      className={`inline-flex items-center justify-center gap-2 p-2 bg-transparent text-text-primary hover:bg-surface-hover transition-colors duration-200 cursor-pointer rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${className}`}
    >
      {isDarkMode ? (
        <Sun size={18} className="text-text-secondary hover:text-text-primary transition-colors shrink-0" />
      ) : (
        <Moon size={18} className="text-text-secondary hover:text-text-primary transition-colors shrink-0" />
      )}
      {showLabel && (
        <span className="font-mono text-xs font-medium">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </span>
      )}
    </button>
  );
};

ThemeToggle.displayName = 'ThemeToggle';
