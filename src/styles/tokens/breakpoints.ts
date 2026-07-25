/**
 * Design System - Responsive Breakpoint Tokens
 */

export const breakpointTokens = {
  xs: '475px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export type BreakpointTokens = typeof breakpointTokens;
