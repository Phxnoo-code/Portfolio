import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
// import { MouseGlow } from '../motion/MouseGlow';

export interface PageLayoutProps {
  children: React.ReactNode;
  activeSectionId?: string;
  isIntroComplete?: boolean;
}

/**
 * Reusable PageLayout Component
 * Root layout scaffold wrapping header Navbar, main canvas area, MouseGlow, and Footer.
 */
export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  activeSectionId = 'about',
  isIntroComplete = true,
}) => {
  return (
    <div className="min-h-screen bg-background text-text-primary flex flex-col justify-between antialiased selection:bg-primary/30 selection:text-primary relative">
      {/* Mouse glow enabled only after IntroOverlay finishes */}
      {/* <MouseGlow active={isIntroComplete} /> */}

      <Navbar
        activeSectionId={activeSectionId}
        isIntroComplete={isIntroComplete}
      />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
};

PageLayout.displayName = 'PageLayout';
