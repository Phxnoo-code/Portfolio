import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Sparkles } from 'lucide-react';
import { Card } from '../../ui/Card';

export interface IdentityCardItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const IDENTITY_CARDS: IdentityCardItem[] = [
  {
    id: 'developer',
    title: 'Developer',
    description: 'Crafting clean, scalable frontend architectures and modern web applications with precision.',
    icon: Code2,
  },
  {
    id: 'problem-solver',
    title: 'Problem Solver',
    description: 'Solving complex technical challenges through systematic thinking and AI workflow automation.',
    icon: Cpu,
  },
  {
    id: 'continuous-learner',
    title: 'Continuous Learner',
    description: 'Constantly exploring new tools, modern frameworks, and emerging technology stacks.',
    icon: Sparkles,
  },
];

const EASE_EXPRESSIVE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const AboutCards: React.FC = () => {
  return (
    <div className="space-y-4">
      {IDENTITY_CARDS.map((card, index) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.5,
              delay: index * 0.12,
              ease: EASE_EXPRESSIVE,
            }}
          >
            <Card variant="interactive" className="p-5 flex items-start gap-4 border-border/50 group">
              <div className="p-3 rounded-lg bg-surface-hover text-primary border border-border/60 group-hover:border-primary/40 transition-colors shrink-0">
                <Icon size={22} />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-display font-semibold text-text-primary group-hover:text-primary transition-colors">
                  {card.title}
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed font-sans">
                  {card.description}
                </p>
              </div>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
};

AboutCards.displayName = 'AboutCards';
