import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navigationData } from '@/data/navigation';
import { IconButton } from '../ui/IconButton';
import { Container } from '../ui/Container';
import { MobileMenu } from './MobileMenu';

import { ThemeToggle } from '../ui/ThemeToggle';
import { LanguageToggle } from '../ui/LanguageToggle';
import { useLanguage } from '@/hooks/useLanguage';

export interface NavbarProps {
  activeSectionId?: string;
  isIntroComplete?: boolean;
}

const EASE_EXPRESSIVE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Typography-Focused Minimal Navbar Component
 * Features pure text-based navigation:
 * - Active menu item relies strictly on subtle text-primary theme token color change
 * - Inactive menu items use secondary text color token (text-text-secondary)
 * - Navigation links styled explicitly with Inter 15px/16px font
 * - Right CTA Contact Me button with prominent font size
 */
export const Navbar: React.FC<NavbarProps> = ({
  activeSectionId = 'hero',
  isIntroComplete: _isIntroComplete = true,
}) => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { brand, navItems, socialLinks, ctaButton } = navigationData;

  return (
    <motion.header
      initial={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{
        duration: 0.58,
        ease: EASE_EXPRESSIVE,
      }}
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/85 backdrop-blur-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <Container size="lg" className="flex items-center justify-between">
        {/* Brand Logo (Text + Subtitle /DEV in Muted Gray) */}
        <a
          href="#"
          className="group flex flex-col justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1 select-none"
        >
          <span className="font-display font-extrabold text-[17px] tracking-tight text-text-primary group-hover:text-primary transition-colors leading-none">
            {brand.logoText}
          </span>
          <span className="font-mono text-[12px] font-medium tracking-[0.2em] text-text-secondary group-hover:text-text-primary transition-colors mt-1">
            /DEV
          </span>
        </a>

        {/* Minimal Typography Navigation (Inter 15px/16px Font Scale) */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-3">
          {navItems.filter((item) => item.id !== 'contact').map((item) => {
            const isActive =
              activeSectionId === item.id ||
              (item.id === 'home' && (activeSectionId === 'hero' || !activeSectionId)) ||
              (item.id === 'hero' && activeSectionId === 'home');

            const label = t.nav[item.id as keyof typeof t.nav] || item.label;

            return (
              <a
                key={item.id}
                href={item.href}
                className={`px-3 py-1.5 font-['Inter',sans-serif] text-[15px] lg:text-[16px] transition-colors duration-200 select-none ${
                  isActive
                    ? 'text-primary font-bold'
                    : 'text-text-secondary hover:text-text-primary font-normal'
                }`}
              >
                {label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls & Right Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <ThemeToggle />
          <LanguageToggle />

          <a
            href="#contact"
            className={`hidden sm:inline-flex items-center justify-center px-3.5 py-1.5 rounded-lg border border-border bg-surface hover:bg-surface-hover hover:border-border-hover transition-all duration-200 font-['Inter',sans-serif] text-[14px] lg:text-[15px] select-none ${
              activeSectionId === 'contact'
                ? 'text-primary border-primary font-bold'
                : 'text-text-secondary hover:text-text-primary font-medium'
            }`}
          >
            {t.nav.contact}
          </a>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <IconButton
              icon={isMobileMenuOpen ? X : Menu}
              aria-label="Toggle Mobile Menu"
              variant="ghost"
              size="md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={navItems}
        socials={socialLinks}
        ctaLabel={ctaButton.label}
        ctaHref={ctaButton.href}
        activeId={activeSectionId}
      />
    </motion.header>
  );
};

Navbar.displayName = 'Navbar';
