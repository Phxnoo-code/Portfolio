import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../../layout/Section';
import { Container } from '../../ui/Container';
import { AboutContent } from './AboutContent';
import { AboutVisual } from './AboutVisual';

const EASE_EXPRESSIVE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * About Section Component - "The Person Behind The Code"
 * Dark luxury minimalist editorial portfolio layout aligning with Hero section design language.
 */
export const About: React.FC = () => {
  return (
    <Section
      id="about"
      padding="xl"
      background="default"
      withContainer={false}
      className="relative z-10 overflow-hidden py-24 sm:py-32"
    >
      {/* Background Studio Ambient Lighting System (Purple #7C5CFF + Soft Cyan #38BDF8) */}
      <div className="absolute top-1/4 left-0 sm:left-12 w-[520px] h-[360px] bg-[radial-gradient(ellipse_at_center,rgba(124,92,255,0.12)_0%,rgba(124,92,255,0.03)_50%,transparent_75%)] blur-[110px] pointer-events-none -z-10 select-none" />
      <div className="absolute bottom-1/4 right-0 sm:right-12 w-[440px] h-[320px] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08)_0%,rgba(56,189,248,0.02)_45%,transparent_70%)] blur-[90px] pointer-events-none -z-10 select-none" />

      <Container size="xl" className="w-full relative z-10">
        <div className="flex flex-col space-y-16 sm:space-y-20 w-full">
          
          {/* 1. Editorial Section Header */}
          <div className="relative max-w-3xl space-y-3">
            {/* Subtle Purple Ambient Header Glow */}
            <div className="absolute -top-6 left-12 w-[340px] h-[140px] bg-[#7C5CFF]/15 blur-[80px] pointer-events-none -z-10 rounded-full select-none" />

            <motion.p
              initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: EASE_EXPRESSIVE }}
              className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-primary font-semibold"
            >
              ABOUT ME
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.08, ease: EASE_EXPRESSIVE }}
              className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-text-primary tracking-[-0.03em] leading-[1.08]"
            >
              Building Digital Experiences Through Code & Automation.
            </motion.h2>
          </div>

          {/* 2. Main Editorial Two-Column About Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
            {/* LEFT SIDE: Editorial Personal Identity Panel */}
            <div className="lg:col-span-5 w-full">
              <AboutVisual />
            </div>

            {/* RIGHT SIDE: Personal Introduction Narrative & Capabilities */}
            <div className="lg:col-span-7 w-full">
              <AboutContent />
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
};

About.displayName = 'About';
