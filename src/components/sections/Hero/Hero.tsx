import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../../layout/Section';
import { Container } from '../../ui/Container';
import { HeroContent } from './HeroContent';
import { HeroPortrait } from './HeroPortrait';
import { HeroStatusBar } from './HeroStatusBar';
import { ScrollIndicator } from './ScrollIndicator';

export interface HeroProps {
  /** Indicates whether the intro overlay sequence has finished */
  isIntroComplete?: boolean;
}

const EASE_CINEMATIC: [number, number, number, number] = [0.25, 1, 0.35, 1];

// SVG noise data URI (baseFrequency 0.8, filter opacity 0.03) for ultra-fine dark luxury grain texture
const NOISE_TEXTURE_DATA_URI = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E`;

/**
 * Modular System Hero Section Component
 * Reverted to Two-Side Ambient Radial Glow Background Architecture:
 * 1. Left Side Glow (550px, upper-left shifted inward, #7C5CFF, blur 150px)
 * 2. Right Side Glow (650px, right behind HeroPortrait, #7C5CFF, blur 160px)
 * 3. Ultra-Fine Noise Texture Layer (z-0) - Non-intrusive static grain overlay (opacity 0.03)
 * 4. Hero Content Layer (z-10) - HeroContent, HeroPortrait & HeroStatusBar Marquee
 */
export const Hero: React.FC<HeroProps> = ({ isIntroComplete = true }) => {
  return (
    <Section
      id="hero"
      padding="none"
      background="default"
      withContainer={false}
      className="relative z-10 min-h-screen flex flex-col justify-center items-center pt-20 pb-8 overflow-hidden"
    >
      {/* Atmospheric Volumetric Stack: Multi-layer weak linear falloffs (1.5%-2.5% opacity each) with ZERO identifiable gradient shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        {/* Layer A: Smooth Diagonal Studio Floor Tonal Shift */}
        <div className="absolute inset-0 bg-background dark:bg-[linear-gradient(135deg,rgba(15,17,21,1)_0%,rgba(18,22,32,0.4)_50%,rgba(15,17,21,1)_100%)]" />
        {/* Layer B: Ultra-faint 2.5% Top Atmospheric Ceiling Gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(143,126,255,0.025)_0%,transparent_70%)]" />
        {/* Layer C: Ultra-faint 1.5% Purple Lateral Side Volume */}
        <div className="absolute inset-0 bg-[linear-gradient(to_left,rgba(124,92,255,0.015)_0%,transparent_60%)]" />
      </div>

      {/* 2. Ultra-Fine Noise Texture Overlay Layer (z-0) */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-30 select-none bg-repeat"
        style={{ backgroundImage: `url("${NOISE_TEXTURE_DATA_URI}")` }}
      />

      {/* 3. Hero Content Layer (z-10) */}
      <motion.div
        initial={{
          filter: 'blur(24px)',
          opacity: 0.2,
          scale: 1.02,
        }}
        animate={
          isIntroComplete
            ? {
              filter: 'blur(0px)',
              opacity: 1,
              scale: 1.0,
            }
            : {
              filter: 'blur(24px)',
              opacity: 0.2,
              scale: 1.02,
            }
        }
        transition={{
          duration: 0.78,
          ease: EASE_CINEMATIC,
        }}
        className="relative z-10 w-full flex-1 flex flex-col justify-center items-center gap-8"
      >
        {/* Main Content Grid Area */}
        <div className="w-full flex items-center justify-center">
          <Container size="xl" className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
              <HeroContent isIntroComplete={isIntroComplete} />
              <HeroPortrait isIntroComplete={isIntroComplete} />
            </div>
          </Container>
        </div>

        {/* Animated Tech Stack Marquee Ticker */}
        <div className="w-full shrink-0 mt-8">
          <Container size="xl">
            <HeroStatusBar isIntroComplete={isIntroComplete} />
          </Container>
        </div>
      </motion.div>

      {/* Viewport-Pinned Fixed Bottom Scroll Indicator */}
      <ScrollIndicator isIntroComplete={isIntroComplete} />
    </Section>
  );
};

Hero.displayName = 'Hero';
