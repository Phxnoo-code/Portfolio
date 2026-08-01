import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Bot, Layers } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const EASE_EXPRESSIVE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * AboutCards Component - 3 Capability Cards Grid
 */
export const AboutCards: React.FC = () => {
  const { t } = useLanguage();

  const cards = [
    {
      id: 'web-development',
      title: t.about.cards.webDevelopment.title,
      description: t.about.cards.webDevelopment.description,
      icon: Globe,
    },
    {
      id: 'ai-automation',
      title: t.about.cards.aiAutomation.title,
      description: t.about.cards.aiAutomation.description,
      icon: Bot,
    },
    {
      id: 'system-integration',
      title: t.about.cards.systemIntegration.title,
      description: t.about.cards.systemIntegration.description,
      icon: Layers,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
      {cards.map((card, index) => {
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
            <div className="h-full p-6 sm:p-7 rounded-[24px] bg-glass-bg/60 backdrop-blur-xl border border-border group-hover:border-border-hover group-hover:shadow-[0_0_30px_rgba(124,92,255,0.2)] transition-all duration-300 flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-surface-subtle border border-border-subtle flex items-center justify-center text-text-muted group-hover:text-primary group-hover:border-border-hover transition-colors duration-300">
                  <Icon size={24} />
                </div>
                <h4 className="text-lg sm:text-xl font-display font-bold text-text-primary group-hover:text-primary transition-colors duration-300">
                  {card.title}
                </h4>
              </div>
              <p className="text-body-sm sm:text-body-md text-text-secondary leading-relaxed font-sans">
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
