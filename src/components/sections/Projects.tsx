import React, { useState, useMemo } from 'react';
import { ExternalLink, Github, Sparkles, FolderGit2 } from 'lucide-react';
import { projectsData } from '@/data/projects';
import { ProjectCategory } from '@/types/project';
import { Section } from '../layout/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { EmptyState } from '../ui/EmptyState';
import { Image } from '../ui/Image';

const categories: ProjectCategory[] = ['All', 'AI & Automation', 'Web App'];

/**
 * Enhanced Projects Section Component
 * Uses containerSize="xl" for consistent horizontal alignment matching Hero.
 */
export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projectsData;
    return projectsData.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <Section id="projects" padding="lg" background="surface" containerSize="xl">
      <SectionTitle
        badge="Featured Portfolio"
        title="Engineering Projects &"
        titleGradient="AI Workflows"
        subtitle="A selection of production systems, AI messaging assistants, and fullstack web platforms."
      />

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer select-none ${
                isActive
                  ? 'bg-primary text-white shadow-md shadow-primary/20 font-semibold'
                  : 'bg-surface/80 text-text-secondary hover:text-text-primary hover:bg-surface-hover border border-border/60'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Projects Grid or Empty State */}
      {filteredProjects.length === 0 ? (
        <EmptyState
          title="No projects match this category"
          description="Try switching category filters to see available projects."
          icon={<FolderGit2 size={32} className="text-text-secondary" />}
          action={
            <Button variant="outline" size="sm" onClick={() => setSelectedCategory('All')}>
              View All Projects
            </Button>
          }
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} variant="interactive" className="flex flex-col justify-between h-full">
              <div className="space-y-4">
                {/* Project Image Preview / Fallback */}
                <div className="relative aspect-video rounded-lg overflow-hidden border border-border/60">
                  <Image
                    src={project.image || ''}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />

                  {/* Status & Category Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5">
                    <Badge variant="glass" color="neutral" size="sm">
                      {project.category}
                    </Badge>
                    <Badge
                      variant="soft"
                      color={project.status === 'Completed' ? 'success' : 'warning'}
                      size="sm"
                      withDot
                    >
                      {project.status}
                    </Badge>
                  </div>

                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <Badge variant="glass" color="primary" size="sm" leftIcon={<Sparkles size={12} />}>
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Project Title & Description */}
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                {/* Monochromatic Tech Chips */}
                <CardContent>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="soft" color="neutral" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </div>

              {/* Action Links */}
              <CardFooter className="flex items-center gap-3 pt-4">
                {project.demoUrl && (
                  <Button
                    variant="primary"
                    size="sm"
                    rightIcon={<ExternalLink size={14} />}
                    onClick={() => window.open(project.demoUrl, '_blank')}
                  >
                    Live Demo
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    leftIcon={<Github size={14} />}
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    Source Code
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </Section>
  );
};

Projects.displayName = 'Projects';
