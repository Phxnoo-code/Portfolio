/**
 * Design System - Typography Tokens
 * 
 * Manrope Global Typography System
 * Configures Manrope as the single, consistent font family for sans, display, and UI controls.
 */

export const typographyTokens = {
  fontFamilies: {
    sans: 'var(--font-sans)',
    display: 'var(--font-display)',
    mono: 'var(--font-mono)',
  },

  fontSize: {
    'display-hero': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.04em', fontWeight: '800' }],
    'h1': ['clamp(2rem, 3.5vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.03em', fontWeight: '700' }],
    'h2': ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.25', letterSpacing: '-0.025em', fontWeight: '700' }],
    'h3': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.35', letterSpacing: '-0.015em', fontWeight: '600' }],
    'body-lg': ['1.125rem', { lineHeight: '1.75', letterSpacing: 'normal', fontWeight: '400' }],
    'body-md': ['1rem', { lineHeight: '1.75', letterSpacing: 'normal', fontWeight: '400' }],
    'body-sm': ['0.9375rem', { lineHeight: '1.75', letterSpacing: '0.01em', fontWeight: '400' }],
    'caption': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.05em', fontWeight: '500' }],
  },

  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },

  letterSpacing: {
    tighter: '-0.04em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

export type TypographyTokens = typeof typographyTokens;
