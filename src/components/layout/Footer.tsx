import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Mail, Globe } from 'lucide-react';
import { navigationData } from '@/data/navigation';
import { Container } from '../ui/Container';
import { IconButton } from '../ui/IconButton';
import { Badge } from '../ui/Badge';

const iconMap: Record<string, any> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
};

/**
 * Reusable Footer Layout Component
 * Multi-column footer displaying brand summary, categorized navigation sections, social links, and scroll-to-top control.
 */
export const Footer: React.FC = () => {
  const { brand, socialLinks, footerSections } = navigationData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-surface/80 border-t border-border/80 text-text-primary pt-16 pb-12 relative overflow-hidden">
      <Container size="lg" className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Info Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-display font-bold text-base">
                {brand.name.charAt(0)}
              </div>
              <span className="font-display font-bold text-lg text-text-primary">
                {brand.logoText}
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed max-w-sm font-sans">
              Designing and building scalable, production-ready web platforms with modern frontend architecture.
            </p>
            <div className="pt-2">
              <Badge variant="soft" color="success" withDot>
                Available for New Projects
              </Badge>
            </div>
          </div>

          {/* Footer Link Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-2 gap-8">
            {footerSections.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-text-primary font-semibold">
                  {section.title}
                </h4>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        target={link.isExternal ? '_blank' : undefined}
                        rel={link.isExternal ? 'noopener noreferrer' : undefined}
                        className="text-text-secondary hover:text-primary transition-colors inline-flex items-center gap-1"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links & Copyright Bottom Bar */}
        <div className="pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-secondary font-mono">
            &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            {socialLinks.map((social) => {
              const IconComponent = iconMap[social.iconName] || Globe;
              return (
                <IconButton
                  key={social.id}
                  icon={IconComponent}
                  aria-label={social.platform}
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open(social.url, '_blank')}
                />
              );
            })}

            <div className="ml-2 pl-2 border-l border-border/60">
              <IconButton
                icon={ArrowUp}
                aria-label="Scroll to top"
                variant="outline"
                size="sm"
                onClick={scrollToTop}
              />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

Footer.displayName = 'Footer';
