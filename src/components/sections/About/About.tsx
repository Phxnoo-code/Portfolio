import React from 'react';
import { Section } from '../../layout/Section';
import { Container } from '../../ui/Container';
import { AboutContent } from './AboutContent';
import { AboutVisual } from './AboutVisual';

/**
 * Modular Modular About Section Component
 * Desktop: Two-column grid (Left: text/content, Right: visual/cards)
 * Mobile: Stacked vertically with balanced spacing
 * Dark Luxury Theme with Framer Motion reveal animations.
 */
export const About: React.FC = () => {
  return (
    <Section id="about" padding="lg" background="surface" withContainer={false}>
      <Container size="xl" className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          <div className="lg:col-span-7">
            <AboutContent />
          </div>
          <div className="lg:col-span-5">
            <AboutVisual />
          </div>
        </div>
      </Container>
    </Section>
  );
};

About.displayName = 'About';
