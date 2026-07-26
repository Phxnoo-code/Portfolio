import React from 'react';
import { motion } from 'framer-motion';

const EASE_SMOOTH: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * AboutVisual - Premium Editorial Portrait Container
 * Uses a pure CSS alpha mask-image to create a soft, seamless bottom fade into true transparency
 * without any hard border or artificial black gradient overlay.
 */
export const AboutVisual: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: EASE_SMOOTH }}
      className="relative w-full min-w-0 max-w-full"
    >

      <div
        className="
  absolute
  inset-0
  -z-10
  bg-[radial-gradient(circle_at_47%_35%,rgba(124,92,255,0.18),transparent_17%)]
"
      />

      <div className="relative w-full min-w-0 aspect-[4/5] sm:aspect-[3/4] max-h-[480px] lg:max-h-[520px] overflow-hidden">
        {/* Subject Portrait Image with Soft Seamless Bottom Alpha Mask Fade */}
        <img
          src="/images/about/aboutphoto.png"
          alt="Phanoo Ngamchaliaw Portrait"
          className="w-full h-full object-cover object-top -mt-16 sm:-mt-28 scale-[1.20] origin-top"
          style={{
            maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
          }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/editorial_portrait.png';
          }}
        />
      </div>
    </motion.div>
  );
};

AboutVisual.displayName = 'AboutVisual';
