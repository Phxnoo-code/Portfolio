import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { Section } from '../../layout/Section';
import { Container } from '../../ui/Container';

const EASE_SMOOTH: [number, number, number, number] = [0.16, 1, 0.3, 1];

const NOISE_TEXTURE_DATA_URI = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E`;

interface ExperienceItem {
  id: string;
  index: string;
  title: string;
  achievement?: string;
  description: string;
  role: string;
  year: string;
  image: string;
  hasCertificate: boolean;
  certImage?: string;
}

const experiencesData: ExperienceItem[] = [
  {
    id: 'exp-1',
    index: '01',
    title: 'AI Hackathon',
    achievement: '3rd Place Award',
    description: 'Participated in an AI-focused hackathon, developing and presenting an AI solution through collaboration, problem-solving, and technology integration.',
    role: 'Developer • Team Member',
    year: '2026',
    image: '/images/certificates/ai-hackathon.jpg',
    hasCertificate: true,
    certImage: '/images/certificates/ai-hackathon.jpg',
  },
  {
    id: 'exp-2',
    index: '02',
    title: 'Technology Showcase Booth',
    description: 'Presented a technology project through a university showcase, demonstrating the product concept and communicating the solution to visitors.',
    role: 'Developer • Presenter',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    hasCertificate: false,
  }
];

export const BeyondProjects: React.FC = () => {
  const [activeCertImage, setActiveCertImage] = useState<string | null>(null);

  // Manage body scroll locks and keyboard events for the preview modal
  useEffect(() => {
    if (!activeCertImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveCertImage(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeCertImage]);

  return (
    <Section id="beyond-projects" padding="none" background="default" withContainer={false} className="relative py-20 sm:py-28 lg:py-36 border-t border-white/[0.04] bg-background w-full min-w-0 overflow-hidden">
      {/* 1. Volumetric Backlight Continuation matching Skills section */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,17,21,1)_0%,rgba(18,22,32,0.3)_50%,rgba(15,17,21,1)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(143,126,255,0.015)_50%,transparent_100%)]" />
      </div>

      {/* 2. Noise Grain Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-20 select-none bg-repeat"
        style={{ backgroundImage: `url("${NOISE_TEXTURE_DATA_URI}")` }}
      />

      <Container size="xl" className="relative z-10">
        <div className="flex flex-col space-y-16 sm:space-y-24 w-full">

          {/* Section Header */}
          <div className="space-y-3 max-w-2xl text-left">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: EASE_SMOOTH }}
              className="text-xs font-mono uppercase tracking-[0.2em] text-primary font-semibold"
            >
              — Experiences —
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: EASE_SMOOTH, delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-text-primary uppercase leading-tight"
            >
              Beyond Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: EASE_SMOOTH, delay: 0.1 }}
              className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-xl"
            >
              Experiences beyond development, including showcases, competitions, and collaborative technology events.
            </motion.p>
          </div>

          {/* Staggered Editorial Stories Layout */}
          <div className="flex flex-col space-y-20 sm:space-y-32 w-full">
            {experiencesData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center w-full ${isEven ? '' : 'lg:flex-row-reverse'
                    }`}
                >
                  {/* Large Image Frame - 60% Width on Large Screens */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, ease: EASE_SMOOTH }}
                    className="w-full lg:w-[58%] aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-neutral-900 border border-white/[0.04] group cursor-pointer relative"
                    onClick={() => item.hasCertificate && item.certImage && setActiveCertImage(item.certImage)}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    {/* Minimal dark overlay vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  </motion.div>

                  {/* Typography & Editorial Copy - 40% Width */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, delay: 0.1, ease: EASE_SMOOTH }}
                    className="w-full lg:w-[42%] flex flex-col space-y-6 text-left"
                  >
                    {/* Index & Year Metadata Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                      <span className="font-mono text-sm text-[#7C5CFF]/80 font-medium tracking-widest">{item.index}</span>
                      <span className="font-mono text-xs text-white/40">{item.year}</span>
                    </div>

                    {/* Headline and Description */}
                    <div className="space-y-3">
                      {item.achievement && (
                        <span className="inline-block text-[10px] font-mono tracking-widest text-[#7C5CFF] uppercase border border-[#7C5CFF]/20 bg-[#7C5CFF]/5 px-2.5 py-1">
                          🏆 {item.achievement}
                        </span>
                      )}
                      <h3 className="text-2xl sm:text-3xl font-display font-extrabold uppercase text-white tracking-tight leading-none pt-1">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans pt-1">
                        {item.description}
                      </p>
                    </div>

                    {/* Roles Row */}
                    <div className="py-4 border-t border-b border-white/[0.06] flex items-center justify-between">
                      <div className="flex flex-col space-y-0.5">
                        <span className="text-[9px] uppercase font-mono tracking-widest text-white/30">Role / Position</span>
                        <span className="text-xs text-white/70 font-mono tracking-wider">{item.role}</span>
                      </div>
                    </div>

                    {/* Inline Link Buttons */}
                    <div className="flex flex-wrap gap-4 pt-2">
                      <button
                        onClick={() => alert("Gallery functionality is coming soon!")}
                        className="px-4 py-2.5 border border-white/10 hover:border-[#7C5CFF] hover:bg-[#7C5CFF]/10 text-xs font-mono text-white transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Gallery</span>
                        <ArrowUpRight size={12} />
                      </button>
                      {item.hasCertificate && (
                        <button
                          onClick={() => item.certImage && setActiveCertImage(item.certImage)}
                          className="px-4 py-2.5 border border-white/10 hover:border-[#7C5CFF] hover:bg-[#7C5CFF]/10 text-xs font-mono text-white transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
                        >
                          <span>Certificate</span>
                          <ArrowUpRight size={12} />
                        </button>
                      )}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>
      </Container>

      {/* Fullscreen Certificate Image Modal (React Portal) */}
      {createPortal(
        <AnimatePresence>
          {activeCertImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
              onClick={() => setActiveCertImage(null)}
            >
              {/* Soft purple ambient glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#7C5CFF]/03 rounded-none blur-[100px] pointer-events-none animate-pulse" />

              {/* Close Button */}
              <button
                onClick={() => setActiveCertImage(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/50 hover:text-white transition-colors p-2.5 rounded-none bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.1] active:scale-95"
                aria-label="Close preview"
              >
                <X size={18} />
              </button>

              {/* Image Frame Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: EASE_SMOOTH }}
                className="relative max-w-[95vw] max-h-[80vh] md:max-w-[75vw] rounded-none overflow-hidden border border-white/[0.08] shadow-[0_0_35px_rgba(124,92,255,0.06)] bg-neutral-950 flex items-center justify-center cursor-default"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={activeCertImage}
                  alt="Certificate Preview"
                  className="w-full h-auto max-h-[80vh] object-contain rounded-none select-none"
                  draggable={false}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </Section>
  );
};

BeyondProjects.displayName = 'BeyondProjects';
