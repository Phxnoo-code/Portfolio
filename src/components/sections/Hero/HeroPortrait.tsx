import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '@/data/profile';

export interface HeroPortraitProps {
  isIntroComplete?: boolean;
}

const EASE_CINEMATIC: [number, number, number, number] = [0.25, 1, 0.35, 1];

/**
 * HeroPortrait Component - Editorial Integrated Portrait
 * Natural portrait visual size (max-w 600px, aspect 4/5) with seamless background blending.
 */
export const HeroPortrait: React.FC<HeroPortraitProps> = ({ isIntroComplete = true }) => {
  const { name, avatar } = profileData;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={isIntroComplete ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.85, ease: EASE_CINEMATIC }}
      className="
      lg:col-span-5 
      relative 
      flex 
      justify-center 
      lg:justify-end 
      items-center 
      lg:-translate-x-20
      -translate-y-16 
      lg:-translate-y-28
      "
    >
      <div className="relative w-full max-w-[760px] lg:max-w-[900px] xl:max-w-[980px] aspect-[4/5] flex items-end justify-center pointer-events-none select-none -translate-y-12 lg:-translate-y-20">
        {/* Ultra-faint linear atmospheric density field (3% opacity, zero visible gradient boundaries) */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(56,189,248,0.03)_0%,rgba(124,92,255,0.015)_50%,transparent_100%)] blur-3xl pointer-events-none" />

        {/* Editorial Integrated Portrait Image with Multi-Stop Bottom Dissolve & Edge Light Blend */}
        <img
          src={avatar || '/images/hero/profile.png'}
          alt={name}
          className="
          w-full 
          h-full 
          object-cover 
          object-top 
          relative 
          z-10
          scale-105
          lg:scale-110
          [mask-image:linear-gradient(to_bottom,black_45%,rgba(0,0,0,0.85)_72%,transparent_100%)]
          contrast-[1.02]
          saturate-[1.02]
          "
        />
      </div>
    </motion.div>
  );
};

HeroPortrait.displayName = 'HeroPortrait';
