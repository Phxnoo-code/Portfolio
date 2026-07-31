import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { Section } from '../../layout/Section';
import { Container } from '../../ui/Container';
import { AboutContent } from './AboutContent';
import { AboutVisual } from './AboutVisual';

const EASE_SMOOTH: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Shared ultra-fine noise texture matching Hero section
const NOISE_TEXTURE_DATA_URI = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E`;

/**
 * About Section Component - Personal Identity Editorial
 * Refined vertical section padding with expansive bottom breathing room before the Projects transition.
 */
export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section
      id="about"
      padding="none"
      background="default"
      withContainer={false}
      className="relative z-10 overflow-hidden pt-20 pb-28 sm:pt-28 sm:pb-36 lg:pb-44 bg-background w-full min-w-0"
    >
      {/* 1. Atmospheric Volumetric Continuation (Matching Hero Studio Floor & Depth) */}
      <div className="hidden dark:block absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,17,21,1)_0%,rgba(18,22,32,0.3)_50%,rgba(15,17,21,1)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(143,126,255,0.015)_50%,transparent_100%)]" />
      </div>

      {/* 2. Shared Ultra-Fine Noise Grain Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-20 select-none bg-repeat"
        style={{ backgroundImage: `url("${NOISE_TEXTURE_DATA_URI}")` }}
      />

      <Container size="xl" className="w-full min-w-0 relative z-10">
        <div className="flex flex-col space-y-12 sm:space-y-14 w-full min-w-0">
          
          {/* PART 1 — Identity Introduction Header */}
          <div className="space-y-2 max-w-3xl w-full min-w-0">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: EASE_SMOOTH }}
              className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-primary font-semibold"
            >
              {t.about.eyebrow}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.06, ease: EASE_SMOOTH }}
              className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-text-primary tracking-[-0.03em] leading-[1.12] break-words"
            >
              My story
            </motion.h2>
          </div>

          {/* PART 2 — Portrait + Personal Information */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start w-full min-w-0 pt-4 sm:pt-6">
            {/* LEFT: Portrait Image */}
            <div className="lg:col-span-4 w-full min-w-0">
              <AboutVisual />
            </div>

            {/* RIGHT: Identity Content & Personal Information Block (Shifted Down Further) */}
            <div className="lg:col-span-8 w-full min-w-0 lg:pl-4 xl:pl-8 pt-5 sm:pt-8 lg:pt-14">
              <AboutContent />
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
};

About.displayName = 'About';
