import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { Section } from '../../layout/Section';
import { Container } from '../../ui/Container';
import { EXPERIENCES_DATA } from './experiencesData';
import { ExperienceEditorialItem } from './ExperienceEditorialItem';
import { ExperienceLightboxModal, LightboxItem } from './ExperienceLightboxModal';

const EASE_SMOOTH: [number, number, number, number] = [0.16, 1, 0.3, 1];

const NOISE_TEXTURE_DATA_URI = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E`;

export const BeyondProjects: React.FC = () => {
  const { t } = useLanguage();
  const [lightboxItems, setLightboxItems] = useState<LightboxItem[]>([]);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const handleOpenLightbox = (items: LightboxItem[], initialIndex: number) => {
    setLightboxItems(items);
    setActiveLightboxIndex(initialIndex);
  };

  const handleCloseLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handleNavigateLightbox = (newIndex: number) => {
    setActiveLightboxIndex(newIndex);
  };

  return (
    <Section
      id="beyond-projects"
      padding="none"
      background="default"
      withContainer={false}
      className="relative py-16 sm:py-24 lg:py-32 border-t border-border-subtle bg-background w-full min-w-0 overflow-hidden"
    >
      {/* Ambient Backlight Continuation matching Portfolio Design System */}
      <div className="hidden dark:block absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,17,21,1)_0%,rgba(18,22,32,0.3)_50%,rgba(15,17,21,1)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(124,92,255,0.02)_50%,transparent_100%)]" />
      </div>

      {/* Noise Grain Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-20 select-none bg-repeat"
        style={{ backgroundImage: `url("${NOISE_TEXTURE_DATA_URI}")` }}
      />

      <Container size="xl" className="relative z-10">
        <div className="flex flex-col space-y-12 sm:space-y-14 w-full">

          {/* Section Main Editorial Header - Compact Section Intro */}
          <div className="flex flex-col space-y-3 max-w-3xl text-left">
            {/* 1. Section Label */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: EASE_SMOOTH }}
              className="text-xs font-mono uppercase tracking-[0.2em] text-primary font-semibold"
            >
              {t.experiences.eyebrow}
            </motion.p>

            {/* 2. Section Title */}
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: EASE_SMOOTH, delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-text-primary dark:text-white uppercase leading-none"
            >
              {t.experiences.title}
            </motion.h2>

            {/* 3. Short Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: EASE_SMOOTH, delay: 0.1 }}
              className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-xl font-sans"
            >
              {t.experiences.subtitle}
            </motion.p>
          </div>

          {/* Continuous Editorial Feature Stack */}
          <div className="flex flex-col space-y-20 sm:space-y-28 lg:space-y-32 w-full">
            {EXPERIENCES_DATA.map((item, index) => (
              <React.Fragment key={item.id}>
                {index > 0 && (
                  <div className="w-full border-t border-border-subtle pt-12 sm:pt-16" />
                )}
                <ExperienceEditorialItem
                  experience={item}
                  onOpenLightbox={handleOpenLightbox}
                />
              </React.Fragment>
            ))}
          </div>

        </div>
      </Container>

      {/* Fullscreen Interactive Lightbox Modal */}
      <ExperienceLightboxModal
        items={lightboxItems}
        currentIndex={activeLightboxIndex}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigateLightbox}
      />
    </Section>
  );
};

BeyondProjects.displayName = 'BeyondProjects';
export default BeyondProjects;
