import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem, SocialLink } from '@/types/navigation';
import { Button } from '../ui/Button';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  socials: SocialLink[];
  ctaLabel: string;
  ctaHref: string;
  activeId?: string;
}

/**
 * Reusable MobileMenu Layout Component
 * Animated drop-down navigation overlay for touch viewports using Framer Motion.
 */
export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  items,
  ctaLabel,
  ctaHref,
  activeId,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 top-[73px] z-40 bg-surface/95 backdrop-blur-xl border-b border-border shadow-2xl md:hidden overflow-hidden"
        >
          <div className="container py-6 px-4 space-y-6">
            <nav className="flex flex-col space-y-2">
              {items.map((item) => {
                const isActive =
                  activeId === item.id ||
                  (item.id === 'home' && (activeId === 'hero' || !activeId)) ||
                  (item.id === 'hero' && activeId === 'home');

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={onClose}
                    className={`px-4 py-3 font-['Inter',sans-serif] text-[15px] sm:text-[16px] rounded-lg transition-colors flex items-center justify-between ${
                      isActive
                        ? 'text-primary font-bold'
                        : 'text-text-secondary hover:text-text-primary hover:bg-surface-hover font-normal'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    )}
                  </a>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-border/60">
              <Button
                variant="primary"
                fullWidth
                onClick={() => {
                  onClose();
                  window.location.href = ctaHref;
                }}
              >
                {ctaLabel}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

MobileMenu.displayName = 'MobileMenu';
