/**
 * Design System - Border Radius Tokens
 */

export const radiusTokens = {
  none: '0px',
  xs: '0.25rem',   // 4px - Tooltips, code tags
  sm: '0.375rem',  // 6px - Badges, category chips
  md: '0.5rem',    // 8px - Form controls, inputs, dropdowns
  lg: '0.75rem',   // 12px - Buttons, project cards
  xl: '1rem',      // 16px - Modals, section containers
  '2xl': '1.5rem', // 24px - Hero cards, floating glass panels
  full: '9999px',  // Pills, user avatars, status dots
} as const;

export type RadiusTokens = typeof radiusTokens;
