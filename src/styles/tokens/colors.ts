/**
 * Design System - Color Tokens
 *
 * Softened Minimal Palette with desaturated lavender indigo accent and calm charcoal slate surfaces.
 */

export const colorTokens = {
  light: {
    primary: {
      hsl: '221 83% 53%',
      hex: '#2563EB',
      hover: '221 83% 48%',
    },
    secondary: {
      hsl: '220 12% 42%',
      hex: '#475569',
    },
    muted: {
      hsl: '220 10% 60%',
      hex: '#94A3B8',
    },
    background: {
      hsl: '220 20% 97%',
      hex: '#F8FAFC',
    },
    surface: {
      hsl: '0 0% 100%',
      hex: '#FFFFFF',
      hover: '220 14% 95%',
      subtle: '220 16% 96%',
    },
    border: {
      hsl: '220 13% 90%',
      subtle: '220 13% 94%',
      hover: '221 83% 53%',
    },
    text: {
      primary: '220 24% 10%',  // #0F172A
      secondary: '220 12% 42%',// #475569
      muted: '220 10% 60%',    // #94A3B8
    },
    status: {
      success: '150 60% 38%',
      warning: '38 92% 44%',
      error: '0 72% 51%',
    },
  },
  dark: {
    primary: {
      hsl: '253 100% 68%',
      hex: '#7C5CFF',
      hover: '253 100% 74%',
    },
    secondary: {
      hsl: '220 10% 68%',
      hex: '#A0A7B5',
    },
    muted: {
      hsl: '220 8% 46%',
      hex: '#6B7280',
    },
    background: {
      hsl: '220 14% 6%',
      hex: '#0F1115',
    },
    surface: {
      hsl: '220 14% 9.5%',
      hex: '#171A21',
      hover: '220 14% 13%',
      subtle: '220 14% 8%',
    },
    border: {
      hsl: '220 12% 14%',
      subtle: '220 12% 10%',
      raw: 'rgba(255, 255, 255, 0.06)',
      hover: '245 70% 72%',
    },
    text: {
      primary: '220 20% 93%', // #EAECEF
      secondary: '220 10% 68%', // #A0A7B5
      muted: '220 8% 48%', // #6B7280
    },
    status: {
      success: '150 48% 48%', // #34D399
      warning: '38 75% 52%', // #F59E0B
      error: '0 70% 62%', // #EF4444
    },
  },
} as const;

export type ColorTokens = typeof colorTokens;
