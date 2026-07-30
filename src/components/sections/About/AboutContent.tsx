import React from 'react';
import { motion } from 'framer-motion';

export interface InfoItem {
  number: string;
  label: string;
  value: string;
  subValue?: string;
}

const PERSONAL_INFO: InfoItem[] = [
  {
    number: '01',
    label: 'Age',
    value: '21 Years Old',
  },
  {
    number: '02',
    label: 'Education',
    value: 'Information Technology',
    subValue: 'Bangkok University',
  },
  {
    number: '03',
    label: 'Location',
    value: 'Thailand',
  },
  {
    number: '04',
    label: 'Focus',
    value: 'Digital products & AI automation',
  },
];

const EASE_SMOOTH: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * AboutContent - Personal Identity Editorial Narrative
 * Clean typography hierarchy with prominent "Currently exploring:" title label.
 */
export const AboutContent: React.FC = () => {
  return (
    <div className="w-full min-w-0 space-y-8 text-text-secondary font-sans flex flex-col justify-between h-full">
      {/* 1. Identity Name & Short Intro */}
      <div className="w-full min-w-0 space-y-3">
        <div className="space-y-1">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: EASE_SMOOTH }}
            className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-text-primary tracking-[-0.02em] uppercase break-words"
          >
            PHANOO NGAMCHALIAW
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.05, ease: EASE_SMOOTH }}
            className="text-xs sm:text-sm font-mono text-white/60 uppercase tracking-[0.18em] font-semibold"
          >
            IT Student & Digital Product Builder
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE_SMOOTH }}
          className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal w-full max-w-2xl break-words pt-1"
        >
          I build digital experiences by connecting design, technology, and automation.
        </motion.p>
      </div>

      {/* 2. Balanced 2x2 Personal Information Grid */}
      <div className="w-full min-w-0 pt-6 border-t border-white/[0.08]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 w-full min-w-0">
          {PERSONAL_INFO.map((info, idx) => (
            <motion.div
              key={info.number}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.16 + idx * 0.06, ease: EASE_SMOOTH }}
              className="space-y-1 text-left w-full min-w-0"
            >
              {/* Index (Accent Mono) + Label (Uppercase Secondary Mono) */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-primary font-semibold">
                  {info.number}
                </span>
                <span className="text-[11px] font-mono text-text-secondary uppercase tracking-[0.18em] font-medium">
                  {info.label}
                </span>
              </div>

              {/* Value (Larger Primary White Text) */}
              <p className="text-base sm:text-lg font-display font-bold text-text-primary leading-snug">
                {info.value}
              </p>

              {/* Optional SubValue */}
              {info.subValue && (
                <p className="text-xs sm:text-sm text-text-muted font-sans leading-snug pt-0.5">
                  {info.subValue}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. PART 3 — Prominent "Currently exploring:" Label with Soft List Items */}
      <div className="w-full min-w-0 pt-6 border-t border-white/[0.06] space-y-5 sm:space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.35, ease: EASE_SMOOTH }}
          className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono"
        >
          <span className="text-primary font-semibold tracking-wide uppercase">Currently exploring:</span>
          <span className="text-text-muted font-normal">Product Design</span>
          <span className="text-white/20">•</span>
          <span className="text-text-muted font-normal">Digital Development</span>
          <span className="text-white/20">•</span>
          <span className="text-text-muted font-normal">AI Automation</span>
        </motion.div>
      </div>
    </div>
  );
};

AboutContent.displayName = 'AboutContent';
