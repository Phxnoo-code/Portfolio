import React from 'react';
import { skillsData } from '@/data/skills';
import { Section } from '../layout/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Container } from '../ui/Container';

// Shared ultra-fine noise texture matching About and Hero section
const NOISE_TEXTURE_DATA_URI = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E`;

/**
 * Skills Section Component
 * Uses background matching About & Hero sections for atmospheric continuity.
 */
export const Skills: React.FC = () => {
  return (
    <Section
      id="skills"
      padding="none"
      background="default"
      withContainer={false}
      className="relative z-10 overflow-hidden py-24 sm:py-32 bg-background w-full min-w-0"
    >
      {/* 1. Atmospheric Volumetric Continuation (Matching About & Hero Depth) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,17,21,1)_0%,rgba(18,22,32,0.3)_50%,rgba(15,17,21,1)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(143,126,255,0.015)_50%,transparent_100%)]" />
      </div>

      {/* 2. Shared Ultra-Fine Noise Grain Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-20 select-none bg-repeat"
        style={{ backgroundImage: `url("${NOISE_TEXTURE_DATA_URI}")` }}
      />

      <Container size="xl" className="w-full min-w-0 relative z-10">
        <SectionTitle
          badge="Technical Expertise"
          title="Skills & Technology"
          titleGradient="Stack"
          subtitle="Categorized proficiency across modern frontend engineering, backend services, AI workflows, and databases."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group, idx) => (
            <Card key={idx} variant="bordered" className="space-y-4">
              <div className="flex items-center justify-between border-b border-border/50 pb-3">
                <h3 className="text-base font-display font-semibold text-text-primary">
                  {group.category}
                </h3>
                <Badge variant="soft" color="neutral" size="sm">
                  {group.skills.length} Technologies
                </Badge>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {group.skills.map((skill) => (
                  <Badge
                    key={skill.id}
                    variant="glass"
                    color="neutral"
                    size="md"
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

Skills.displayName = 'Skills';
