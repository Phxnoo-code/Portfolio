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
      className="lg:col-span-5 relative flex justify-center lg:justify-end items-center"
    >
      <div className="relative w-full max-w-[540px] lg:max-w-[600px] xl:max-w-[640px] aspect-[4/5] flex items-end justify-center pointer-events-none select-none -translate-y-6">
        <div className="absolute inset-0 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Editorial Integrated Portrait Image */}
        <img
          src={avatar || '/images/hero/profile.png'}
          alt={name}
          className="w-full h-full object-cover object-top relative z-10 [mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)]"
        />
      </div>
    </motion.div>
  );
};

HeroPortrait.displayName = 'HeroPortrait';
