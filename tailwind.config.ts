import type { Config } from 'tailwindcss';
import { 
  typographyTokens, 
  radiusTokens, 
  shadowTokens, 
  spacingTokens, 
  breakpointTokens, 
  zIndexTokens 
} from './src/styles/tokens';

const config: Config = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: breakpointTokens,
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--color-primary) / <alpha-value>)',
          hover: 'hsl(var(--color-primary-hover) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--color-secondary) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'hsl(var(--color-accent) / <alpha-value>)',
        },
        background: 'hsl(var(--color-bg) / <alpha-value>)',
        surface: {
          DEFAULT: 'hsl(var(--color-surface) / <alpha-value>)',
          hover: 'hsl(var(--color-surface-hover) / <alpha-value>)',
        },
        border: {
          DEFAULT: 'hsl(var(--color-border) / <alpha-value>)',
          hover: 'hsl(var(--color-border-hover) / <alpha-value>)',
        },
        text: {
          primary: 'hsl(var(--color-text-primary) / <alpha-value>)',
          secondary: 'hsl(var(--color-text-secondary) / <alpha-value>)',
        },
        status: {
          success: 'hsl(var(--color-success) / <alpha-value>)',
          warning: 'hsl(var(--color-warning) / <alpha-value>)',
          error: 'hsl(var(--color-error) / <alpha-value>)',
        },
      },
      fontFamily: typographyTokens.fontFamilies,
      fontSize: typographyTokens.fontSize,
      fontWeight: typographyTokens.fontWeight,
      letterSpacing: typographyTokens.letterSpacing,
      borderRadius: radiusTokens,
      boxShadow: shadowTokens,
      spacing: spacingTokens,
      zIndex: zIndexTokens,
      animation: {
        'fade-in': 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.05)' },
        },
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
