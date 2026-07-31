import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layout, Server, Workflow, User, Cpu } from 'lucide-react';

const EASE_SMOOTH: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * EcosystemVisual Component
 * Organic, cinematic Apple Vision Pro / Linear-inspired digital ecosystem showcase.
 * Replaces rigid infographics with an asymmetrical floating glass spatial composition,
 * anchored by a central radiant "YOU" core.
 *
 * Message: "I design, build, integrate, and automate digital products."
 */
export const EcosystemVisual: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-surface/80 dark:bg-[linear-gradient(180deg,#05060A_0%,#090B12_50%,#05060A_100%)] border border-border shadow-xl dark:shadow-[0_32px_96px_rgba(0,0,0,0.85)] p-6 sm:p-10 lg:p-14 select-none">
      
      {/* 1. Volumetric Deep Ambient Radiance (#7C5CFF) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(124,92,255,0.25)_0%,rgba(124,92,255,0.07)_45%,transparent_75%)] blur-[120px] pointer-events-none animate-pulse" />

      {/* 2. Micro Particle Orbs & Spatial Mesh Field */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#7C5CFF_1px,transparent_1px)] [background-size:32px_32px]"
        style={{
          maskImage: 'radial-gradient(circle at 50% 50%, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 40%, transparent 80%)',
        }}
      />

      {/* Subtle Floating Ambient Light Particles */}
      <div className="absolute top-1/4 left-1/5 w-1.5 h-1.5 rounded-full bg-[#7C5CFF]/60 blur-[1px] animate-ping" />
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-[#A78BFA]/50 blur-[2px] animate-pulse" />

      {/* 3. Top Spatial Header Bar */}
      <div className="flex items-center justify-between relative z-20 mb-4 sm:mb-8">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE_SMOOTH }}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-widest text-primary bg-primary/10 border border-primary/25 uppercase font-medium backdrop-blur-md"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span>PERSONAL OS // DIGITAL ECOSYSTEM</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE_SMOOTH }}
          className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-text-muted uppercase tracking-widest"
        >
          <Cpu className="w-3.5 h-3.5 text-primary" />
          <span>PRODUCT BUILDER ARCHITECTURE</span>
        </motion.div>
      </div>

      {/* 4. ORGANIC ASYMMETRICAL SPATIAL CANVAS */}
      <div className="relative w-full max-w-4xl mx-auto min-h-[440px] sm:min-h-[520px] lg:min-h-[580px] flex items-center justify-center py-6">
        
        {/* Subtle Curved Energy Waves in Background (Organic, non-diagram) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible opacity-40">
          <defs>
            <linearGradient id="waveGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7C5CFF" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#C4B5FD" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#7C5CFF" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path d="M 150 120 Q 400 280 650 140" fill="none" stroke="url(#waveGlow)" strokeWidth="1.5" strokeDasharray="6 8" />
          <path d="M 180 400 Q 420 220 720 380" fill="none" stroke="url(#waveGlow)" strokeWidth="1.5" strokeDasharray="4 6" />
          <circle cx="50%" cy="50%" r="32%" fill="none" stroke="rgba(124,92,255,0.12)" strokeWidth="1" strokeDasharray="10 16" />
        </svg>

        {/* ============================================================ */}
        {/* --- CENTRAL VISUAL ANCHOR ("YOU" RADIANT CORE) --- */}
        {/* ============================================================ */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE_SMOOTH }}
            className="pointer-events-auto relative"
          >
            {/* Concentric Halo Ring */}
            <div className="absolute -inset-6 sm:-inset-8 rounded-full border border-primary/30 animate-[spin_50s_linear_infinite] pointer-events-none" />

            {/* Core Radiant Glass Lens */}
            <div className="group relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full bg-surface/90 backdrop-blur-3xl border-2 border-primary/60 shadow-[0_0_100px_rgba(124,92,255,0.3)] transition-all duration-500 hover:scale-[1.03] hover:border-primary">
              
              {/* Soft Radial Ambient Glow Inside Core */}
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,92,255,0.25)_0%,transparent_70%)] pointer-events-none" />

              {/* Core Icon Badge (Slightly Above Center) */}
              <div className="absolute top-5 sm:top-7 left-1/2 -translate-x-1/2 p-2.5 sm:p-3 rounded-2xl bg-primary/20 text-primary border border-primary/40 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <User className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              {/* DEAD-CENTER TYPOGRAPHY: "YOU" */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-[0.25em] text-text-primary dark:text-primary drop-shadow-sm leading-none">
                  YOU
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] font-bold text-text-secondary dark:text-primary uppercase tracking-[0.25em] mt-2 px-3">
                  Digital Product Builder
                </span>
              </div>

              {/* Micro Status Tag */}
              <div className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-primary/15 border border-primary/30 text-[9px] sm:text-[10px] font-mono text-text-secondary uppercase tracking-widest whitespace-nowrap">
                Core Engine
              </div>
            </div>
          </motion.div>
        </div>

        {/* ============================================================ */}
        {/* --- ASYMMETRICAL FLOATING GLASS OBJECT 1: AI SYSTEMS --- */}
        {/* (Top-Left Floating Glass Pill) */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: -20, x: -10 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: EASE_SMOOTH }}
          className="absolute top-[8%] left-[2%] sm:left-[6%] lg:left-[8%] z-20"
        >
          <div className="group flex items-center gap-3 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-glass-bg/80 backdrop-blur-2xl border border-border shadow-md hover:border-primary/60 hover:bg-primary/10 transition-all duration-300">
            <div className="p-1.5 rounded-full bg-primary/20 text-primary border border-primary/30 group-hover:scale-110 transition-transform">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-display font-semibold text-xs sm:text-sm text-text-primary tracking-wide">
                AI Systems
              </span>
              <span className="font-mono text-[10px] text-text-muted hidden sm:inline">
                LLMs & Agents
              </span>
            </div>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* --- ASYMMETRICAL FLOATING GLASS OBJECT 2: AUTOMATION --- */}
        {/* (Top-Right Floating Glass Capsule with Live Accent Dot) */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: -15, x: 15 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25, ease: EASE_SMOOTH }}
          className="absolute top-[12%] right-[2%] sm:right-[6%] lg:right-[8%] z-20"
        >
          <div className="group flex items-center gap-3 px-5 py-3 sm:px-6 sm:py-3.5 rounded-2xl bg-primary/10 backdrop-blur-2xl border border-primary/40 shadow-md hover:border-primary hover:bg-primary/20 transition-all duration-300">
            <div className="p-2 rounded-xl bg-primary/25 text-primary border border-primary/40 group-hover:scale-110 transition-transform">
              <Workflow className="w-4.5 h-4.5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-xs sm:text-sm text-text-primary tracking-wide">
                  Automation
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              </div>
              <span className="font-mono text-[10px] text-text-muted">
                Workflows & Integrations
              </span>
            </div>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* --- ASYMMETRICAL FLOATING GLASS OBJECT 3: FRONTEND --- */}
        {/* (Bottom-Left Floating Spatial Bar) */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 15, x: -15 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35, ease: EASE_SMOOTH }}
          className="absolute bottom-[10%] left-[1%] sm:left-[4%] lg:left-[6%] z-20"
        >
          <div className="group flex items-center gap-3 px-5 py-3 sm:px-6 sm:py-3.5 rounded-2xl bg-glass-bg/80 backdrop-blur-2xl border border-border shadow-md hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">
            <div className="p-2 rounded-xl bg-primary/20 text-primary border border-primary/30 group-hover:scale-110 transition-transform">
              <Layout className="w-4.5 h-4.5" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-semibold text-xs sm:text-sm text-text-primary tracking-wide">
                Interface Engineering
              </span>
              <span className="font-mono text-[10px] text-text-muted">
                React • TypeScript • Next
              </span>
            </div>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* --- ASYMMETRICAL FLOATING GLASS OBJECT 4: BACKEND --- */}
        {/* (Bottom-Right Floating Spatial Chip) */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 20, x: 10 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45, ease: EASE_SMOOTH }}
          className="absolute bottom-[14%] right-[1%] sm:right-[5%] lg:right-[7%] z-20"
        >
          <div className="group flex items-center gap-3 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-glass-bg/80 backdrop-blur-2xl border border-border shadow-md hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">
            <div className="p-1.5 rounded-full bg-primary/20 text-primary border border-primary/30 group-hover:scale-110 transition-transform">
              <Server className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-display font-semibold text-xs sm:text-sm text-text-primary tracking-wide">
                System Architecture
              </span>
              <span className="font-mono text-[10px] text-text-muted hidden sm:inline">
                Node • Python
              </span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* ============================================================ */}
      {/* 5. CINEMATIC FOOTER STATEMENT (Awwwards Editorial Style) */}
      {/* ============================================================ */}
      <div className="relative z-20 border-t border-border pt-6 sm:pt-8 mt-2 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: EASE_SMOOTH }}
          className="text-lg sm:text-xl lg:text-2xl font-display font-semibold text-text-primary tracking-tight"
        >
          "I design, build, integrate, and automate digital products."
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.55, ease: EASE_SMOOTH }}
          className="font-mono text-[11px] sm:text-xs text-text-muted uppercase tracking-[0.25em] mt-2"
        >
          PERSONAL DIGITAL OPERATING SYSTEM • SPATIAL CAPABILITY ARCHITECTURE
        </motion.p>
      </div>

    </div>
  );
};

EcosystemVisual.displayName = 'EcosystemVisual';
