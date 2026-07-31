import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface LightboxItem {
  url: string;
  caption?: string;
  tag?: string;
  title?: string;
}

interface ExperienceLightboxModalProps {
  items: LightboxItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate?: (newIndex: number) => void;
}

const EASE_SMOOTH: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const ExperienceLightboxModal: React.FC<ExperienceLightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < items.length;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && onNavigate && currentIndex > 0) {
        onNavigate(currentIndex - 1);
      } else if (e.key === 'ArrowRight' && onNavigate && currentIndex < items.length - 1) {
        onNavigate(currentIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  if (typeof window === 'undefined') return null;

  const currentItem = isOpen ? items[currentIndex] : null;

  return createPortal(
    <AnimatePresence>
      {isOpen && currentItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-overlay-backdrop/90 backdrop-blur-md p-4 sm:p-6 select-none"
          onClick={onClose}
        >
          {/* Soft purple ambient glow matching Credentials section */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/05 rounded-none blur-[100px] pointer-events-none animate-pulse" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/50 hover:text-white transition-colors p-2.5 rounded-none bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.1] active:scale-95 z-10"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Prev Navigation Arrow Button */}
          {onNavigate && items.length > 1 && currentIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(currentIndex - 1);
              }}
              className="absolute left-4 sm:left-8 z-30 p-2.5 rounded-none bg-surface-subtle border border-border-subtle hover:bg-surface-hover text-text-muted hover:text-text-primary transition-colors active:scale-95"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {/* Image Frame Container matching Credentials section */}
          <motion.div
            key={currentItem.url}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: EASE_SMOOTH }}
            className="relative max-w-[95vw] max-h-[80vh] md:max-w-[75vw] rounded-none overflow-hidden border border-border shadow-2xl bg-surface flex items-center justify-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentItem.url}
              alt={currentItem.caption || currentItem.title || 'Preview'}
              className="w-full h-auto max-h-[80vh] object-contain rounded-none select-none"
              draggable={false}
            />
          </motion.div>

          {/* Next Navigation Arrow Button */}
          {onNavigate && items.length > 1 && currentIndex < items.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(currentIndex + 1);
              }}
              className="absolute right-4 sm:right-8 z-30 p-2.5 rounded-none bg-surface-subtle border border-border-subtle hover:bg-surface-hover text-text-muted hover:text-text-primary transition-colors active:scale-95"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
