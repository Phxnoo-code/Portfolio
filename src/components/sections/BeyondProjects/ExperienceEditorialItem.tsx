import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, Calendar, Maximize2 } from 'lucide-react';
import { ExperienceItem } from './types';
import { ExperienceBentoGallery } from './ExperienceBentoGallery';

interface ExperienceEditorialItemProps {
  experience: ExperienceItem;
  onOpenLightbox: (items: Array<{ url: string; caption?: string; tag?: string; title?: string }>, initialIndex: number) => void;
}

const EASE_SMOOTH: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const ExperienceEditorialItem: React.FC<ExperienceEditorialItemProps> = ({
  experience,
  onOpenLightbox,
}) => {
  // Collect all images (hero + gallery + cert) for seamless lightbox cycling
  const allImages = [
    {
      url: experience.heroImage.url,
      caption: experience.heroImage.caption,
      tag: 'HERO COVER',
      title: experience.title,
    },
    ...experience.gallery.map((g) => ({
      url: g.url,
      caption: g.caption,
      tag: g.tag,
      title: experience.title,
    })),
    ...(experience.certificate
      ? [
          {
            url: experience.certificate.image,
            caption: `${experience.certificate.title} — Issued by ${experience.certificate.issuer}`,
            tag: 'OFFICIAL CERTIFICATE',
            title: experience.certificate.title,
          },
        ]
      : []),
  ];

  const handleHeroClick = () => {
    onOpenLightbox(allImages, 0);
  };

  const handleGalleryImageClick = (galleryIndex: number) => {
    // galleryIndex is 0..2 in gallery array, offset by 1 for hero image
    onOpenLightbox(allImages, galleryIndex + 1);
  };

  const handleCertificateClick = () => {
    if (!experience.certificate) return;
    const certIndex = allImages.findIndex((img) => img.url === experience.certificate?.image);
    onOpenLightbox(allImages, certIndex >= 0 ? certIndex : 0);
  };

  return (
    <article className="relative w-full flex flex-col space-y-12 sm:space-y-16 lg:space-y-20 text-left">

      {/* 1. EDITORIAL HEADER & METADATA STRIP */}
      <div className="flex flex-col space-y-6 w-full">
        {/* Index Tag & Year Pill */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs sm:text-sm text-[#7C5CFF] font-semibold tracking-widest uppercase">
              ARCHIVE {experience.year}
            </span>
            <span className="text-white/20">|</span>
            <span className="font-mono text-[10px] sm:text-xs text-white/60 tracking-wider uppercase border border-white/10 bg-white/[0.03] px-2.5 py-0.5">
              {experience.category}
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-white/40">
            <Calendar size={13} className="text-[#7C5CFF]/70" />
            <span>{experience.year}</span>
          </div>
        </div>

        {/* Display Title & Subtitle Tagline */}
        <div className="space-y-3 max-w-4xl">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: EASE_SMOOTH }}
            className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-white tracking-tight uppercase leading-snug"
          >
            {experience.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.05, ease: EASE_SMOOTH }}
            className="text-base sm:text-lg text-text-secondary font-sans leading-relaxed max-w-3xl"
          >
            {experience.tagline}
          </motion.p>
        </div>

        {/* Quick Roles & Award Bar */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs font-mono">
          <div className="text-white/80">
            <span>{experience.role}</span>
          </div>
          <div className="text-white/80">
            <span>{experience.team}</span>
          </div>
          {experience.achievement && (
            <div className="text-[#7C5CFF] font-semibold">
              <span>{experience.achievement.badge}</span>
            </div>
          )}
        </div>
      </div>

      {/* 2. CINEMATIC HERO COVER IMAGE */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: EASE_SMOOTH }}
        className="w-full relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-neutral-950 border border-white/10 group cursor-pointer"
        onClick={handleHeroClick}
      >
        <img
          src={experience.heroImage.url}
          alt={experience.heroImage.caption}
          className="w-full h-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />
        {/* Subtle Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

        {/* Floating Zoom Indicator */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-1.5 border border-white/20 bg-black/60 backdrop-blur-xs text-xs font-mono text-white/80 group-hover:text-white group-hover:border-[#7C5CFF]/60 transition-all duration-300">
          <span>EXPAND COVER</span>
          <Maximize2 size={13} />
        </div>
      </motion.div>

      {/* 3. EDITORIAL OVERVIEW & CONTRIBUTION (2 COLUMNS) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full pt-4">
        {/* Left Column: Narrative Story & Technical Contribution (7/12) */}
        <div className="lg:col-span-7 flex flex-col space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-primary">
              01 // EXECUTIVE OVERVIEW
            </span>
            <h4 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
              The Journey & Challenge
            </h4>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
              {experience.story}
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <span className="text-xs font-mono uppercase tracking-widest text-primary">
              02 // KEY CONTRIBUTION & ARCHITECTURE
            </span>
            <h4 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
              My Role & Execution
            </h4>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
              {experience.contribution}
            </p>
          </div>
        </div>

        {/* Right Column: Roles, Skills & Award Badge (5/12) */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          {/* Role Card */}
          <div className="p-6 border border-white/[0.08] bg-surface/60 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
              Role & Responsibility
            </span>
            <p className="text-base font-display font-bold text-white">
              {experience.role}
            </p>
            <p className="text-xs font-mono text-white/60">
              {experience.team}
            </p>
          </div>

          {/* Skills Tag Cloud */}
          <div className="p-6 border border-white/[0.08] bg-surface/60 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
              Skills & Technologies Used
            </span>
            <div className="flex flex-wrap gap-2 pt-1">
              {experience.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-mono text-white/80 border border-white/10 bg-white/[0.03] px-2.5 py-1 hover:border-primary/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Achievement Highlight */}
          {experience.achievement && (
            <div className="p-6 border border-white/[0.08] bg-surface/60 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                {experience.achievement.badge}
              </span>
              <h5 className="text-base font-display font-bold text-white pt-0.5">
                {experience.achievement.title}
              </h5>
              <p className="text-xs text-text-secondary leading-relaxed font-sans">
                {experience.achievement.description}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 4. ASYMMETRIC BENTO GALLERY COLLAGE */}
      <div className="w-full space-y-4 pt-6">
        <div className="pb-2 border-b border-white/[0.06]">
          <span className="text-xs font-mono uppercase tracking-widest text-primary">
            03 // VISUAL NARRATIVE & GALLERY
          </span>
        </div>

        <ExperienceBentoGallery
          gallery={experience.gallery}
          experienceIndex={experience.index}
          onImageClick={handleGalleryImageClick}
        />
      </div>

      {/* 5. HIGHLIGHTS & DELIVERABLES (3 COLUMNS) */}
      <div className="w-full space-y-6 pt-4">
        <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
          <span className="text-xs font-mono uppercase tracking-widest text-primary">
            04 // KEY CONTRIBUTIONS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch">
          {experience.highlights.map((item) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: EASE_SMOOTH }}
              className="p-6 border border-white/[0.08] bg-surface/40 hover:border-white/20 transition-all duration-300 flex flex-col h-full space-y-3 text-left"
            >
              <span className="font-mono text-xl text-primary font-extrabold">
                {item.number}
              </span>
              <div className="space-y-1.5 flex-1 flex flex-col">
                <h5 className="text-base sm:text-lg font-display font-semibold text-white leading-snug">
                  {item.title}
                </h5>
                <p className="text-xs text-text-secondary leading-relaxed font-sans pt-1">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 6. CERTIFICATE & CREDENTIALS BAR */}
      <div className="w-full -mt-16 sm:-mt-24 lg:-mt-28">
        <div className="p-6 lg:p-8 border border-white/10 bg-white/[0.02] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-none border border-white/10 bg-white/[0.04] flex items-center justify-center text-primary shrink-0">
              <Award size={24} />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                {experience.certificate ? 'Certificate' : 'EVENT DOCUMENTATION'}
              </span>
              <h5 className="text-base font-display font-bold text-white">
                {experience.certificate ? experience.certificate.title : 'Bangkok University Technology Showcase'}
              </h5>
              <p className="text-xs text-white/60 font-mono">
                {experience.certificate
                  ? `Issued by ${experience.certificate.issuer} • ${experience.certificate.date}`
                  : `School of Information Technology and Innovation • Bangkok University • ${experience.year}`}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {experience.certificate && (
              <button
                onClick={handleCertificateClick}
                className="px-4 py-2.5 border border-primary/50 bg-primary/10 hover:bg-primary/20 text-xs font-mono text-white transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <Award size={14} className="text-primary" />
                <span>View Certificate</span>
              </button>
            )}

            {experience.externalLink && (
              <a
                href={experience.externalLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 border border-white/10 hover:border-white/30 bg-white/[0.02] hover:bg-white/[0.08] text-xs font-mono text-white transition-all duration-300 flex items-center gap-2"
              >
                <span>{experience.externalLink.label}</span>
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
      </div>

    </article>
  );
};
