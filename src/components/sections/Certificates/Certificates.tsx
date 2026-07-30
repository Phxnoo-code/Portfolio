import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { featuredCertificates, additionalCertificates } from '@/data/certificates';
import { Section } from '../../layout/Section';
import { Container } from '../../ui/Container';

const EASE_SMOOTH: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const Certificates: React.FC = () => {
  const [activeCertImage, setActiveCertImage] = useState<string | null>(null);

  // Combine all certificates dynamically into a single collection
  const allCertificates = [...featuredCertificates, ...additionalCertificates];

  // Manage body scroll locks and keyboard events for the modal
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
    <Section id="certificates" padding="lg" background="default" withContainer={false} className="relative py-20 sm:py-28 lg:py-36 border-t border-white/[0.04]">
      <Container size="xl">
        <div className="flex flex-col space-y-12 sm:space-y-16 w-full">
          
          {/* Section Header */}
          <div className="space-y-3 max-w-2xl text-left">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: EASE_SMOOTH }}
              className="text-xs font-mono uppercase tracking-[0.2em] text-primary font-semibold"
            >
              — CERTIFICATES —
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: EASE_SMOOTH, delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-text-primary uppercase leading-tight"
            >
              Verified Credentials
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: EASE_SMOOTH, delay: 0.1 }}
              className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-xl animate-gpu"
            >
              A collection of certifications and learning achievements that support my technical growth.
            </motion.p>
          </div>

          {/* Unified Certificate Collection Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] w-full">
            {allCertificates.map((item, index) => {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: EASE_SMOOTH }}
                  className="group cursor-pointer animate-gpu"
                  onClick={() => setActiveCertImage(item.image)}
                >
                  {/* Clean Dark Surface Card */}
                  <div className="flex flex-col h-full rounded-none border border-white/[0.04] bg-neutral-950 p-4 sm:p-5 transition-all duration-300 group-hover:border-white/[0.1] group-hover:-translate-y-1.5 space-y-4">
                    
                    {/* Certificate Image Frame */}
                    <div className="relative aspect-[16/10] w-full rounded-none overflow-hidden bg-neutral-900 border border-white/[0.02]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] ${item.imagePosition || 'object-center'}`}
                        loading="lazy"
                      />
                    </div>

                    {/* Metadata Content */}
                    <div className="flex-1 flex flex-col justify-between space-y-4 pt-1">
                      <div className="space-y-1">
                        <h3 className="text-base sm:text-lg font-display font-semibold tracking-tight text-white leading-snug group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-sm font-sans text-white/50">
                          {item.issuer}
                        </p>
                      </div>

                      {/* Unified Single-line Metadata */}
                      <div className="flex items-center gap-2 text-xs font-mono text-white/30">
                        <span>{item.category || 'Certification'}</span>
                        <span>•</span>
                        <span>{item.date}</span>
                      </div>

                      {/* View Link Arrow */}
                      {item.image && (
                        <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between">
                          <span className="text-xs font-mono tracking-wider text-white/50 group-hover:text-primary transition-colors duration-300 flex items-center gap-1.5">
                            View Credential
                            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 text-white/40 group-hover:text-primary" />
                          </span>
                        </div>
                      )}
                    </div>

                  </div>
                </motion.div>
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

Certificates.displayName = 'Certificates';
