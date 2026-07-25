import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin, Github } from 'lucide-react';
import { profileData } from '@/data/profile';
import { resumeData } from '@/data/resume';
import { Button } from '../../ui/Button';

export interface HeroContentProps {
  isIntroComplete?: boolean;
}

const EASE_EXPRESSIVE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_CINEMATIC: [number, number, number, number] = [0.25, 1, 0.35, 1];

export const HeroContent: React.FC<HeroContentProps> = ({ isIntroComplete = true }) => {
  const { title, description, availability, location } = profileData;

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumeData.downloadUrl;
    link.download = resumeData.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getItemMotion = (stepIndex: number) => ({
    initial: { opacity: 0, y: 14, filter: 'blur(4px)' },
    animate: isIntroComplete
      ? { opacity: 1, y: 0, filter: 'blur(0px)' }
      : { opacity: 0, y: 14, filter: 'blur(4px)' },
    transition: {
      duration: 0.6,
      delay: isIntroComplete ? (stepIndex - 1) * 0.08 : 0,
      ease: EASE_EXPRESSIVE,
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isIntroComplete ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.75, ease: EASE_CINEMATIC }}
      className="lg:col-span-7 flex flex-col justify-center space-y-6 lg:space-y-7 max-w-3xl relative"
    >
      {/* Soft Ambient Purple Spotlight Light Bloom behind headline & CTA area (#7C5CFF, 15% opacity, blur-[90px]) */}
      <div className="absolute top-12 left-4 sm:left-12 w-[420px] sm:w-[500px] h-[200px] sm:h-[240px] rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(124,92,255,0.15)_0%,rgba(124,92,255,0.04)_45%,transparent_75%)] blur-[90px] pointer-events-none -z-10 select-none" />

      {/* Minimal Status Indicator */}
      <motion.div {...getItemMotion(2)}>
        <div className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-mono font-medium text-status-success">
          <span className="w-1.5 h-1.5 rounded-full bg-status-success animate-pulse shrink-0" />
          <span>{availability}</span>
        </div>
      </motion.div>

      {/* Role & Subheading */}
      <motion.div {...getItemMotion(3)} className="overflow-hidden">
        <p className="text-[13px] sm:text-[14px] font-mono uppercase tracking-[0.18em] text-primary font-medium">
          — {title} —
        </p>
      </motion.div>

      {/* Main Headline */}
      <motion.div {...getItemMotion(4)} className="space-y-1.5 sm:space-y-2 relative">
        <div className="absolute inset-0 bg-primary/[0.015] blur-3xl pointer-events-none -z-10" />
        <h1 className="text-4xl sm:text-6xl xl:text-[72px] font-display font-extrabold tracking-[-0.035em] text-text-primary leading-[1.02]">
          Building
        </h1>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-[68px] font-display font-extrabold tracking-[-0.035em] text-primary leading-[1.05] whitespace-nowrap pb-1">
          Meaningful Technology
        </h1>
      </motion.div>

      {/* Lead Description - Refined paragraph width and comfortable line-height for optimal reading rhythm */}
      <motion.p
        {...getItemMotion(5)}
        className="text-base sm:text-[17px] lg:text-[18px] font-normal text-text-secondary leading-[1.65] max-w-xl font-sans pt-2 sm:pt-3"
      >
        {description}
      </motion.p>

      {/* Action Controls - Effortless Negative Space Rhythm */}
      <motion.div {...getItemMotion(6)} className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-2 sm:pt-3">
        <Button
          variant="primary"
          size="md"
          className="text-[16px] font-semibold"
          rightIcon={<ArrowRight size={18} />}
          onClick={() => (window.location.href = '#projects')}
        >
          Explore Projects
        </Button>

        <Button
          variant="outline"
          size="md"
          className="text-[16px] font-medium"
          onClick={() => (window.location.href = '#contact')}
        >
          Contact Me
        </Button>

        <Button
          variant="ghost"
          size="md"
          className="text-[16px] font-medium"
          leftIcon={<Download size={18} />}
          onClick={handleDownloadResume}
        >
          Download Resume
        </Button>
      </motion.div>

      {/* Lightweight Inline Metadata Row Below CTA Buttons */}
      <motion.div {...getItemMotion(7)} className="pt-4 border-t border-border/20 opacity-60">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[13px] font-mono text-text-muted">
          <span className="flex items-center gap-1.5 text-white/40 text-[14px]">
            <MapPin size={14} className="text-primary" />
            <span>Based in {location || 'Thailand'}</span>
          </span>

          <a
            href="https://github.com/Phxnoo-code"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/40 hover:text-text-secondary transition-colors text-[13px]"
          >
            <Github size={14} />
            <span>GitHub</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

HeroContent.displayName = 'HeroContent';
