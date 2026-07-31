import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import { GalleryImage } from './types';

interface ExperienceBentoGalleryProps {
  gallery: GalleryImage[];
  experienceIndex: string;
  onImageClick: (imageIndex: number) => void;
}

const EASE_SMOOTH: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const ExperienceBentoGallery: React.FC<ExperienceBentoGalleryProps> = ({
  gallery,
  experienceIndex,
  onImageClick,
}) => {
  if (!gallery || gallery.length === 0) return null;

  // Layout 1: Hackathon (1 Large Left + 2 Stacked Right)
  if (experienceIndex === '01') {
    const mainImg = gallery[0];
    const subImg1 = gallery[1];
    const subImg2 = gallery[2];

    return (
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 pt-4">
        {/* Main Left Feature Photo - 7 Columns */}
        {mainImg && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: EASE_SMOOTH }}
            className="lg:col-span-7 group relative aspect-[4/3] lg:aspect-[16/11] overflow-hidden bg-surface-subtle border border-border hover:border-primary/40 transition-colors duration-500 cursor-pointer shadow-sm"
            onClick={() => onImageClick(0)}
          >
            <img
              src={mainImg.url}
              alt={mainImg.caption}
              className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.04]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Floating Zoom Indicator Button */}
            <button
              onClick={() => onImageClick(0)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-none bg-black/60 backdrop-blur-md border border-white/20 text-white/70 group-hover:text-white group-hover:border-primary/60 transition-all duration-300 active:scale-95"
              aria-label="Enlarge image"
            >
              <Maximize2 size={15} />
            </button>
          </motion.div>
        )}

        {/* Stacked Right Sub Photos - 5 Columns */}
        <div className="lg:col-span-5 flex flex-col gap-4 lg:gap-6 justify-between">
          {subImg1 && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE_SMOOTH }}
              className="group relative aspect-[16/10] overflow-hidden bg-surface-subtle border border-border hover:border-primary/40 transition-colors duration-500 cursor-pointer shadow-sm"
              onClick={() => onImageClick(1)}
            >
              <img
                src={subImg1.url}
                alt={subImg1.caption}
                className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="absolute top-3 right-3 z-10 w-7 h-7 border border-border bg-overlay-backdrop/60 flex items-center justify-center text-text-muted group-hover:text-text-primary transition-all duration-300">
                <Maximize2 size={12} />
              </div>
            </motion.div>
          )}

          {subImg2 && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE_SMOOTH }}
              className="group relative aspect-[16/10] overflow-hidden bg-surface-subtle border border-border hover:border-primary/40 transition-colors duration-500 cursor-pointer shadow-sm"
              onClick={() => onImageClick(2)}
            >
              <img
                src={subImg2.url}
                alt={subImg2.caption}
                className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="absolute top-3 right-3 z-10 w-7 h-7 border border-border bg-overlay-backdrop/60 flex items-center justify-center text-text-muted group-hover:text-text-primary transition-all duration-300">
                <Maximize2 size={12} />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    );
  }

  // Layout 2: Showcase (Asymmetric 5:7 top row + Full width bottom banner)
  const img1 = gallery[0];
  const img2 = gallery[1];
  const img3 = gallery[2];

  return (
    <div className="w-full flex flex-col gap-4 lg:gap-6 pt-4">
      {/* Top Row: Asymmetric 5:7 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
        {img1 && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: EASE_SMOOTH }}
            className="lg:col-span-5 group relative aspect-[4/3] lg:aspect-[16/11] overflow-hidden bg-surface-subtle border border-border hover:border-primary/40 transition-colors duration-500 cursor-pointer shadow-sm"
            onClick={() => onImageClick(0)}
          >
            <img
              src={img1.url}
              alt={img1.caption}
              className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.04]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="absolute top-4 right-4 z-10 w-8 h-8 border border-border bg-overlay-backdrop/60 flex items-center justify-center text-text-muted group-hover:text-text-primary transition-all duration-300">
              <Maximize2 size={14} />
            </div>
          </motion.div>
        )}

        {img2 && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE_SMOOTH }}
            className="lg:col-span-7 group relative aspect-[4/3] lg:aspect-[16/11] overflow-hidden bg-surface-subtle border border-border hover:border-primary/40 transition-colors duration-500 cursor-pointer shadow-sm"
            onClick={() => onImageClick(1)}
          >
            <img
              src={img2.url}
              alt={img2.caption}
              className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.04]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="absolute top-4 right-4 z-10 w-8 h-8 border border-border bg-overlay-backdrop/60 flex items-center justify-center text-text-muted group-hover:text-text-primary transition-all duration-300">
              <Maximize2 size={14} />
            </div>
          </motion.div>
        )}
      </div>

      {/* Bottom Full-Bleed Panoramic Banner */}
      {img3 && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE_SMOOTH }}
          className="w-full group relative aspect-[16/8] sm:aspect-[21/9] overflow-hidden bg-surface-subtle border border-border hover:border-primary/40 transition-colors duration-500 cursor-pointer shadow-sm"
          onClick={() => onImageClick(2)}
        >
          <img
            src={img3.url}
            alt={img3.caption}
            className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.03]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          <div className="absolute top-4 right-4 z-10 w-8 h-8 border border-border bg-overlay-backdrop/60 flex items-center justify-center text-text-muted group-hover:text-text-primary transition-all duration-300">
            <Maximize2 size={14} />
          </div>
        </motion.div>
      )}
    </div>
  );
};
