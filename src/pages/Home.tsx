import React, { useState, lazy, Suspense } from 'react';
import { PageLayout } from '@/components/layout';
import { SEO } from '@/components/common/SEO';
import { Loading } from '@/components/ui/Loading';
import { IntroOverlay } from '@/components/motion/IntroOverlay';
import { useTheme, useActiveSection } from '@/hooks';
import { SECTION_LIST } from '@/constants/routes';

// Dynamic lazy imports for portfolio sections
const Hero = lazy(() => import('@/components/sections/Hero').then((m) => ({ default: m.Hero })));
const About = lazy(() => import('@/components/sections/About').then((m) => ({ default: m.About })));
const WhatIBuild = lazy(() => import('@/components/sections/WhatIBuild').then((m) => ({ default: m.WhatIBuild })));
const SelectedWork = lazy(() => import('@/components/sections/SelectedWork').then((m) => ({ default: m.SelectedWork })));
const Skills = lazy(() => import('@/components/sections/Skills').then((m) => ({ default: m.Skills })));
const Certificates = lazy(() => import('@/components/sections/Certificates').then((m) => ({ default: m.Certificates })));
const BeyondProjects = lazy(() => import('@/components/sections/BeyondProjects/BeyondProjects').then((m) => ({ default: m.BeyondProjects })));
const Contact = lazy(() => import('@/components/sections/Contact').then((m) => ({ default: m.Contact })));

/**
 * Home Page Component
 * Performance-optimized page view using React.lazy code-splitting, Suspense fallbacks, and luxury IntroOverlay preloader.
 */
export const Home: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const activeSection = useActiveSection([...SECTION_LIST], 'hero');

  const [isIntroComplete, setIsIntroComplete] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    try {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const hasSeen = sessionStorage.getItem('portfolio_intro_seen');
      return prefersReducedMotion || !!hasSeen;
    } catch {
      return true;
    }
  });

  return (
    <>
      <IntroOverlay onComplete={() => setIsIntroComplete(true)} />
      <PageLayout
        activeSectionId={activeSection}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
        isIntroComplete={isIntroComplete}
      >
        <SEO />
        <Suspense fallback={<Loading size="lg" label="Loading portfolio sections..." />}>
          <Hero isIntroComplete={isIntroComplete} />
          <About />
          <WhatIBuild />
          <SelectedWork />
          <Skills />
          <Certificates />
          <BeyondProjects />
          <Contact />
        </Suspense>
      </PageLayout>
    </>
  );
};

export default Home;
