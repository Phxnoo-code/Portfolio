/**
 * Design System - Motion & Animation Tokens
 * 
 * Shared parameters for Framer Motion physics and CSS keyframe durations.
 */

export const animationTokens = {
  durations: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },

  easings: {
    smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    fluid: 'cubic-bezier(0.4, 0, 0.2, 1)',
    linear: 'linear',
  },

  framerSpring: {
    default: { type: 'spring', stiffness: 300, damping: 30 },
    gentle: { type: 'spring', stiffness: 120, damping: 20 },
    bouncy: { type: 'spring', stiffness: 400, damping: 25 },
  },
} as const;

export type AnimationTokens = typeof animationTokens;
