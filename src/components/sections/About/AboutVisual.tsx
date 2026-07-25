import React from 'react';
import { motion } from 'framer-motion';

const EASE_CINEMATIC: [number, number, number, number] = [0.25, 1, 0.35, 1];

/**
 * AboutVisual Subcomponent - Editorial Personal Identity Panel
 * "This is who I am"
 * Features designer editorial profile card layout, subtle ambient light, and clean metadata layers.
 */
export const AboutVisual: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.75, ease: EASE_CINEMATIC }}
      className="relative w-full"
    >
      {/* Soft Ambient Studio Light Bloom (Purple #7C5CFF & Soft Cyan #38BDF8) */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#7C5CFF]/15 blur-3xl pointer-events-none -z-10 rounded-full select-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#38BDF8]/10 blur-3xl pointer-events-none -z-10 rounded-full select-none" />

      {/* Designer Editorial Identity Glass Surface Container */}
      <div className="w-full bg-white/[0.025] backdrop-blur-xl border border-white/[0.08] rounded-[32px] p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between min-h-[440px] lg:min-h-[500px] group hover:border-[#7C5CFF]/40 transition-all duration-500 shadow-2xl">
        {/* Top Header Label & Index */}
        <div className="flex items-start justify-between w-full">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-primary font-semibold block">
              01 / PROFILE
            </span>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-text-muted font-medium block">
              IT STUDENT & DIGITAL BUILDER
            </span>
          </div>
          {/* Senior Year Index */}
          <span className="text-6xl sm:text-7xl font-display font-extrabold text-white/[0.07] group-hover:text-primary/20 transition-colors duration-500 select-none">
            04
          </span>
        </div>

        {/* Center Name Typography */}
        <div className="space-y-2 py-8">
          <h2 className="text-6xl sm:text-7xl xl:text-8xl font-display font-extrabold tracking-[-0.04em] text-text-primary leading-none select-none">
            PHANOO
          </h2>
          <p className="text-base sm:text-xl font-mono text-text-secondary tracking-wide font-medium">
            Information Technology
          </p>
          <p className="text-xs sm:text-sm font-mono text-primary/90 uppercase tracking-[0.18em] font-semibold">
            Developer • IT Student
          </p>
        </div>

        {/* Bottom Metadata Badges */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-text-muted">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            BASED IN THAILAND
          </span>
          <span className="flex items-center gap-2 text-status-success font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-status-success animate-pulse" />
            AVAILABLE FOR INTERNSHIP
          </span>
        </div>
      </div>
    </motion.div>
  );
};

AboutVisual.displayName = 'AboutVisual';
