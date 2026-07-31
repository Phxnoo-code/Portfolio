import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Container } from '../ui/Container';

const EASE_SMOOTH: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-surface border-t border-border text-text-primary pt-16 pb-12 relative overflow-hidden select-none">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: EASE_SMOOTH }}
          className="flex flex-col space-y-12 sm:space-y-16 w-full"
        >
          {/* 1. MAIN FOOTER AREA (HORIZONTAL ON DESKTOP, STACKED ON MOBILE) */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 lg:gap-12 w-full text-left">
            
            {/* LEFT SIDE: SIGNATURE NAME, ROLE & DESCRIPTION */}
            <div className="flex flex-col space-y-3 max-w-md">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted dark:text-white/60 font-semibold">
                {t.footer.role}
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-text-primary dark:text-white tracking-tight uppercase leading-none">
                {t.footer.name}
              </h3>

              <p className="text-xs sm:text-sm text-text-secondary dark:text-white/60 font-sans leading-relaxed pt-1">
                {t.footer.description}
              </p>
            </div>

            {/* RIGHT SIDE: MINIMAL TEXT SOCIAL LINKS */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 font-mono text-xs sm:text-sm">
              <a
                href="https://github.com/Phxnoo-code"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-text-secondary dark:text-white/70 hover:text-primary transition-colors duration-300 flex items-center gap-1.5"
              >
                <span>{t.footer.github}</span>
                <ArrowUpRight size={14} className="text-text-muted dark:text-white/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </a>

              <a
                href="mailto:phanoo.ngam@bumail.net"
                className="group text-text-secondary dark:text-white/70 hover:text-primary transition-colors duration-300 flex items-center gap-1.5"
              >
                <span>{t.footer.email}</span>
                <ArrowUpRight size={14} className="text-text-muted dark:text-white/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </a>
            </div>
          </div>

          {/* 2. BOTTOM FOOTER BAR WITH THIN DIVIDER LINE */}
          <div className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
            {/* Left Copyright */}
            <p className="text-text-muted dark:text-white/40">
              {t.footer.copyright}
            </p>

            {/* Center / Right Availability & Scroll-to-top */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-text-secondary dark:text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-status-success animate-pulse" />
                <span>{t.footer.availableInternship}</span>
              </div>

              {/* Scroll to Top */}
              <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="p-2 border border-border hover:border-primary bg-surface-subtle hover:bg-primary/10 text-text-muted dark:text-white/60 hover:text-text-primary dark:hover:text-white transition-all duration-300 cursor-pointer"
              >
                <ArrowUp size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
};

Footer.displayName = 'Footer';
export default Footer;
