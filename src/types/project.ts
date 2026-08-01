export type ProjectCategory = 'All' | 'Web App' | 'AI & Automation' | 'Mobile & Bot' | 'System & Backend';
export type ProjectStatus = 'Completed' | 'In Progress';

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  category: Exclude<ProjectCategory, 'All'>;
  status: ProjectStatus;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export interface ProjectCaseStudy {
  id: string;
  number: string;
  category: string;
  title: string;
  roles: string[];
  shortDescription: string;
  technologies: string[];
  image: string;
  overview: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  demoUrl?: string;
  githubUrl?: string;
  isImageRight: boolean;
}

