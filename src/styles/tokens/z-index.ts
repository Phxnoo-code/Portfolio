/**
 * Design System - Z-Index Layer Hierarchy Tokens
 * 
 * Prevents z-index stacking bugs across complex UI overlays.
 */

export const zIndexTokens = {
  deep: -1,
  base: 0,
  card: 1,
  dropdown: 10,
  sticky: 20,
  header: 40,
  backdrop: 50,
  modal: 60,
  popover: 70,
  tooltip: 80,
  toast: 90,
} as const;

export type ZIndexTokens = typeof zIndexTokens;
