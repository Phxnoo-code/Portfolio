import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export interface ScrollIndicatorProps {
  isIntroComplete?: boolean;
}

const EASE_EXPRESSIVE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * ScrollIndicator Subcomponent
 * Viewport-pinned fixed indicator at bottom: 28px.
 * Features stacked vertical layout (text + centered chevron icon) for 100% optical and mathematical centering symmetry.
 * Smoothly fades out when user scrolls down past the initial Hero fold.
 */
export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  isIntroComplete = true,
}) => {
  const [showScrollPrompt, setShowScrollPrompt] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollPrompt(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showScrollPrompt && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={isIntroComplete ? { opacity: 0.75, y: 0 } : { opacity: 0, y: 6 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.4, ease: EASE_EXPRESSIVE }}
          className="fixed bottom-[28px] inset-x-0 mx-auto w-fit z-30 flex flex-col items-center justify-center gap-1.5 text-[10px] font-mono text-text-secondary hover:text-text-primary transition-colors tracking-[0.2em] uppercase pointer-events-auto select-none"
        >
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown size={14} className="text-primary animate-bounce shrink-0" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

ScrollIndicator.displayName = 'ScrollIndicator';
