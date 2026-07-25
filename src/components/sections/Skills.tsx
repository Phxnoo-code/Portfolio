import React from 'react';
import { skillsData } from '@/data/skills';
import { Section } from '../layout/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

/**
 * Skills Section Component
 * Uses containerSize="xl" for consistent horizontal alignment matching Hero.
 */
export const Skills: React.FC = () => {
  return (
    <Section id="skills" padding="lg" background="default" containerSize="xl">
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
    </Section>
  );
};

Skills.displayName = 'Skills';
