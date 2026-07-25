/**
 * Design System - Color Tokens
 *
 * Softened Minimal Palette with desaturated lavender indigo accent and calm charcoal slate surfaces.
 */

export const colorTokens = {
  dark: {
    primary: {
      hsl: '245 70% 72%',
      hex: '#8F7EFF',
      hover: '245 75% 78%',
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
    },
    border: {
      hsl: '220 12% 14%',
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
