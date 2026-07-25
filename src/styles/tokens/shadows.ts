/**
 * Design System - Shadow & Elevation Tokens
 */

export const shadowTokens = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.2)',
  'glow-primary': '0 0 30px -5px rgba(124, 92, 255, 0.35)',
  'glass': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.08), 0 10px 30px -10px rgba(0, 0, 0, 0.6)',
} as const;

export type ShadowTokens = typeof shadowTokens;
