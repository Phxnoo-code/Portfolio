import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { createPortal } from 'react-dom';
import Strands from './Strands';

export interface IntroOverlayProps {
  /** Callback fired when intro animation completes */
  onComplete?: () => void;
  /** Force animation replay regardless of sessionStorage */
  forcePlay?: boolean;
}

const SESSION_STORAGE_KEY = 'portfolio_intro_seen';

// Handcrafted motion curves for luxury transition response
const EASE_EXPRESSIVE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_CINEMATIC: [number, number, number, number] = [0.25, 1, 0.35, 1];

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

  const [progress, setProgress] = useState<number>(0);
  const [phase, setPhase] = useState<'enter' | 'reveal-overlay' | 'complete'>('enter');
  const [mounted, setMounted] = useState<boolean>(false);

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

  // Loading progress animation
  useEffect(() => {
    setMounted(true);
    if (prefersReducedMotion || !isActive) {
      finishIntro();
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const originalTouchAction = document.body.style.touchAction;
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';

    let animationFrameId: number;
    const duration = 3800; // 3.8 seconds total duration for a cinematic feel
    const startTimestamp = performance.now();

    const animateProgress = (now: number) => {
      const elapsed = now - startTimestamp;
      const progressPercent = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(progressPercent);

      if (elapsed < duration) {
        animationFrameId = requestAnimationFrame(animateProgress);
      } else {
        // Progress reaches 100%, trigger transition reveal
        setPhase('reveal-overlay');
        setTimeout(() => {
          finishIntro();
        }, 900); // 900ms exit fade and scale transition
      }
    };

    animationFrameId = requestAnimationFrame(animateProgress);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.body.style.overflow = originalOverflow || '';
      document.body.style.touchAction = originalTouchAction || '';
    };
  }, [isActive, prefersReducedMotion, finishIntro]);

  if (!isActive || !mounted) return null;

  return createPortal(
    <AnimatePresence mode="wait">
      {phase !== 'complete' && (
        <motion.div
          key="intro-overlay-canvas"
          initial={{ opacity: 1, scale: 1 }}
          animate={
            phase === 'reveal-overlay'
              ? { opacity: 0, scale: 1.04, filter: 'blur(15px)' }
              : { opacity: 1, scale: 1, filter: 'blur(0px)' }
          }
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(15px)' }}
          transition={{
            duration: 0.85,
            ease: EASE_CINEMATIC,
          }}
          className="fixed inset-0 z-[9999] bg-[#030303] text-white flex flex-col items-center justify-center pointer-events-auto select-none overflow-hidden"
          style={{ willChange: 'opacity, transform, filter' }}
        >
          {/* Subtle Procedural Film Grain */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* WebGL Strands background animation - Optimized Single Pass Core + Glow */}
          <Strands
            colors={["#7C5CFF", "#8B5CF6", "#6D28D9", "#60A5FA", "#D4AF37"]}
            count={5}
            speed={0.2}
            amplitude={0.8}
            waviness={0.8}
            thickness={0.35}
            glow={2.0}
            opacity={0.38}
            intensity={0.4}
            saturation={1.05}
            scale={1.6}
            taper={1.1}
            spread={1.0}
            glass={false}
          />

          {/* Clean Thin Digital Grid Layer */}
          <div
            className="absolute inset-0 opacity-[0.015] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />

          {/* Ambient Lighting Gradients (Moving Purple Halo Core - Dominant) */}
          <motion.div
            animate={{
              x: [0, 80, -80, 0],
              y: [0, -50, 50, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[#7C5CFF]/03 rounded-full blur-[200px] pointer-events-none opacity-15"
          />

          {/* Drifting Ambient Light Particles (Soft Blue - Supporting) */}
          <motion.div
            animate={{
              x: [0, 110, -70, 0],
              y: [0, -80, 80, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/4 left-[18%] w-[400px] h-[400px] bg-[#60A5FA]/015 rounded-full blur-[140px] pointer-events-none opacity-10"
          />

          {/* Drifting Ambient Light Particles (Champagne Gold Accent - Subtle) */}
          <motion.div
            animate={{
              x: [0, -110, 70, 0],
              y: [0, 80, -80, 0],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-1/4 right-[18%] w-[450px] h-[450px] bg-[#D4AF37]/006 rounded-full blur-[150px] pointer-events-none opacity-8"
          />

          {/* Soft Radial Ambient Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.01)_0%,_transparent_75%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_35%,_rgba(0,0,0,0.95)_100%)] pointer-events-none" />

          {/* Centered Creative Content Presentation */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-[800px] w-full [perspective:1000px] transform translate-y-[9vh]">
            {/* 1. Large Headline (WELCOME TO MY PORTFOLIO) */}
            <div className="flex flex-col items-center space-y-1 sm:space-y-2">
              {['WELCOME', 'TO MY', 'PORTFOLIO'].map((text, idx) => (
                <div key={idx} className="overflow-hidden py-0.5 sm:py-1">
                  <motion.h1
                    initial={{ opacity: 0, y: 40, filter: 'blur(12px)', letterSpacing: '-0.02em', rotateX: 8 }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)', letterSpacing: '0.04em', rotateX: 0 }}
                    transition={{
                      duration: 0.95,
                      delay: 0.2 + idx * 0.12,
                      ease: EASE_EXPRESSIVE
                    }}
                    className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter leading-[0.9] text-white uppercase drop-shadow-md"
                  >
                    {text}
                  </motion.h1>
                </div>
              ))}
            </div>

            {/* 2. Smaller Identity Text (A DIGITAL JOURNEY BY PHANOO) */}
            <div className="mt-9 space-y-1.5 flex flex-col items-center">
              <div className="overflow-hidden py-0.5">
                <motion.p
                  initial={{ opacity: 0, y: 15, filter: 'blur(5px)' }}
                  animate={{ opacity: 0.85, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.8,
                    delay: 0.7,
                    ease: EASE_EXPRESSIVE
                  }}
                  className="font-display text-sm sm:text-base md:text-lg uppercase tracking-[0.3em] text-white font-semibold"
                >
                  A DIGITAL JOURNEY
                </motion.p>
              </div>
              <div className="overflow-hidden py-0.5">
                <motion.span
                  initial={{ opacity: 0, letterSpacing: '0.15em' }}
                  animate={{ opacity: 0.9, letterSpacing: '0.35em' }}
                  transition={{
                    duration: 0.8,
                    delay: 0.85,
                    ease: EASE_EXPRESSIVE
                  }}
                  className="font-mono text-xs sm:text-sm uppercase tracking-[0.35em] text-[#7C5CFF] font-semibold block"
                >
                  BY PHANOO
                </motion.span>
              </div>
            </div>

            {/* 3. Premium Progress Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.1,
                ease: EASE_EXPRESSIVE
              }}
              className="mt-16 sm:mt-20 w-full max-w-[340px] sm:max-w-[420px] flex flex-col items-center space-y-4"
            >
              {/* Progress label */}
              <span className="font-mono text-[9px] tracking-[0.3em] text-white/30 uppercase block">
                LOADING EXPERIENCE
              </span>

              {/* Progress line */}
              <div className="w-full h-[2px] bg-white/10 relative overflow-hidden rounded-full">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-[#7C5CFF] shadow-[0_0_12px_#7C5CFF] rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Monospace Percentage */}
              <span className="font-mono text-xl sm:text-2xl text-white/80 font-bold tracking-wider">
                {progress}%
              </span>
            </motion.div>
          </div>

          {/* Bottom Edge Illumination Line */}
          <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none opacity-20" />
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

IntroOverlay.displayName = 'IntroOverlay';
