import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Bot, Layers } from 'lucide-react';

export interface CapabilityCard {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const CAPABILITY_CARDS: CapabilityCard[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Building modern, responsive, and scalable web applications.',
    icon: Globe,
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    description: 'Creating intelligent workflows and automation solutions using modern AI technologies.',
    icon: Bot,
  },
  {
    id: 'system-integration',
    title: 'System Integration',
    description: 'Connecting APIs, databases, and external services into complete solutions.',
    icon: Layers,
  },
];

const EASE_EXPRESSIVE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * AboutCards Component - 3 Capability Cards Grid
 * Glassmorphic cards (rgba 0.03 bg, rgba 0.08 border, 20px blur, 24px rounded radius)
 * Features gray icon/text defaults and smooth #7C5CFF hover glow transition.
 */
export const AboutCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
      {CAPABILITY_CARDS.map((card, index) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.55,
              delay: index * 0.12,
              ease: EASE_EXPRESSIVE,
            }}
            className="group"
          >
            <div className="h-full p-6 sm:p-7 rounded-[24px] bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] group-hover:border-[#7C5CFF]/60 group-hover:shadow-[0_0_30px_rgba(124,92,255,0.2)] transition-all duration-300 flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-text-muted group-hover:text-primary group-hover:border-[#7C5CFF]/40 transition-colors duration-300">
                  <Icon size={24} />
                </div>
                <h4 className="text-lg sm:text-xl font-display font-bold text-text-primary group-hover:text-primary transition-colors duration-300">
                  {card.title}
                </h4>
              </div>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                {card.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

AboutCards.displayName = 'AboutCards';
