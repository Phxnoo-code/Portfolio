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
export const HeroPortrait: React.FC<HeroPortraitProps> = ({ isIntroComplete: _isIntroComplete = true }) => {
  const { name, avatar } = profileData;

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
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
        {/* Dual-Color Ambient Studio Glow System (#7C5CFF Dominant Purple + #38BDF8 Soft Cyan Offset) */}
        {/* 1. Dominant Large Soft Purple Glow Bloom (#7C5CFF, blur-[100px]) */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[460px] sm:w-[560px] h-[320px] sm:h-[400px] rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(124,92,255,0.16)_0%,rgba(124,92,255,0.04)_50%,transparent_75%)] blur-[100px] pointer-events-none select-none" />

        {/* 2. Secondary Offset Soft Cyan Glow Bloom (#38BDF8, blur-[80px]) */}
        <div className="absolute top-4 right-4 sm:right-10 w-[260px] sm:w-[320px] h-[180px] sm:h-[240px] rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.11)_0%,rgba(56,189,248,0.03)_45%,transparent_70%)] blur-[80px] pointer-events-none select-none" />

        {/* Editorial Integrated Portrait Image with Multi-Stop Bottom Dissolve & Edge Light Blend */}
        <img
          src={avatar || '/images/hero/profile.webp'}
          alt={name}
          width={800}
          height={1000}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="
          absolute
          inset-0
          w-full 
          h-full 
          object-cover 
          object-top 
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
