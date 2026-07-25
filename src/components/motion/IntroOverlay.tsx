import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export interface IntroOverlayProps {
  /** Callback fired when intro animation completes */
  onComplete?: () => void;
  /** Force animation replay regardless of sessionStorage */
  forcePlay?: boolean;
}

const SESSION_STORAGE_KEY = 'portfolio_intro_seen';

// Handcrafted motion curves for Awwwards-grade luxury response
const EASE_EXPRESSIVE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_CINEMATIC: [number, number, number, number] = [0.25, 1, 0.35, 1];

/**
 * IntroOverlay Component
 *
 * An ultra-luxury preloader overlay designed to Awwwards Site-of-the-Day standards.
 * Features 3D masked typography entry, subtle procedural grain, ambient vignette,
 * and a silky curtain clip-path reveal.
 */
export const IntroOverlay: React.FC<IntroOverlayProps> = ({
  onComplete,
  forcePlay = false,
}) => {
  const prefersReducedMotion = useReducedMotion();

  const [isActive, setIsActive] = useState<boolean>(() => {
    if (forcePlay) return true;
    if (typeof window === 'undefined') return false;
    try {
      return !sessionStorage.getItem(SESSION_STORAGE_KEY);
    } catch {
      return false;
    }
  });

  const [phase, setPhase] = useState<'enter' | 'dissolve-text' | 'reveal-overlay' | 'complete'>('enter');

  const finishIntro = useCallback(() => {
    setIsActive(false);
    setPhase('complete');
    if (typeof window !== 'undefined' && !forcePlay) {
      try {
        sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
      } catch {
        // Storage fallback
      }
    }
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
    onComplete?.();
  }, [forcePlay, onComplete]);

  useEffect(() => {
    if (prefersReducedMotion || !isActive) {
      finishIntro();
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const originalTouchAction = document.body.style.touchAction;
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';

    // Handcrafted Timeline Rhythm (~2.45s):
    // 0ms: "WELCOME" line mask opens with 3D lift
    // 140ms: "TO MY" line mask opens
    // 280ms: "PORTFOLIO" line mask opens
    // 1480ms: Text elegant dissolve (simultaneous scale 1.14, opacity 0, blur 18px, tracking +6px)
    // 1860ms: Curtain clip-path reveal (top-to-bottom inset)
    // 2450ms: Unmount & finish

    const dissolveTimer = setTimeout(() => {
      setPhase('dissolve-text');
    }, 1480);

    const revealTimer = setTimeout(() => {
      setPhase('reveal-overlay');
    }, 1860);

    const completeTimer = setTimeout(() => {
      finishIntro();
    }, 2450);

    return () => {
      clearTimeout(dissolveTimer);
      clearTimeout(revealTimer);
      clearTimeout(completeTimer);
      document.body.style.overflow = originalOverflow || '';
      document.body.style.touchAction = originalTouchAction || '';
    };
  }, [isActive, prefersReducedMotion, finishIntro]);

  if (!isActive) return null;

  const lines = [
    { text: 'WELCOME', id: 'welcome', delay: 0 },
    { text: 'TO MY', id: 'to-my', delay: 0.14 },
    { text: 'PORTFOLIO', id: 'portfolio', delay: 0.28 },
  ];

  return (
    <AnimatePresence mode="wait">
      {phase !== 'complete' && (
        <motion.div
          key="intro-overlay-canvas"
          initial={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
          animate={
            phase === 'reveal-overlay'
              ? { clipPath: 'inset(0% 0% 100% 0%)', opacity: 0.95 }
              : { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }
          }
          exit={{ clipPath: 'inset(0% 0% 100% 0%)', opacity: 0 }}
          transition={{
            duration: 0.62,
            ease: EASE_CINEMATIC,
          }}
          className="fixed inset-0 z-[9999] bg-[#050505] text-white flex flex-col items-center justify-center pointer-events-auto select-none overflow-hidden"
          style={{ willChange: 'clip-path, opacity' }}
        >
          {/* Subtle Procedural Film Grain */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Soft Radial Gradient & Ambient Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_0%,_transparent_65%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_35%,_rgba(0,0,0,0.85)_100%)] pointer-events-none" />

          {/* Soft Ambient Light Halo Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-primary/10 rounded-full blur-[170px] pointer-events-none opacity-20" />

          {/* Micro Ambient Studio Timeline Line at top */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: phase === 'dissolve-text' ? 0 : 0.15 }}
            transition={{ duration: 1.4, ease: EASE_CINEMATIC }}
            className="absolute top-0 inset-x-0 h-[1px] bg-white origin-left pointer-events-none"
          />

          {/* Centered Typography Container with 3D Perspective */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 [perspective:1000px]">
            <div className="flex flex-col items-center space-y-0.5 sm:space-y-1">
              {lines.map((line) => (
                <div key={line.id} className="overflow-hidden py-0.5 sm:py-1">
                  <motion.h1
                    initial={{
                      opacity: 0,
                      y: 24,
                      rotateX: 8,
                      filter: 'blur(10px)',
                    }}
                    animate={
                      phase === 'dissolve-text'
                        ? {
                          opacity: 0,
                          scale: 1.14,
                          filter: 'blur(18px)',
                          letterSpacing: '0.15em',
                          rotateX: -4,
                        }
                        : {
                          opacity: 1,
                          y: 0,
                          rotateX: 0,
                          filter: 'blur(0px)',
                          scale: 1,
                          letterSpacing: '-0.03em',
                        }
                    }
                    transition={{
                      duration: phase === 'dissolve-text' ? 0.4 : 0.58,
                      delay: phase === 'dissolve-text' ? 0 : line.delay,
                      ease: EASE_EXPRESSIVE,
                    }}
                    className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-extrabold tracking-tighter leading-[0.92] text-white uppercase drop-shadow-md"
                  >
                    {line.text}
                  </motion.h1>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Edge Illumination Line */}
          <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none opacity-30" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

IntroOverlay.displayName = 'IntroOverlay';
