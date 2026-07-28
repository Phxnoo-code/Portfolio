export type SkillCategory = 'Frontend' | 'Backend' | 'AI & Automation' | 'Database' | 'Tools & DevOps';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  iconName?: string;
}

export interface SkillGroup {
  category: SkillCategory;
  skills: Skill[];
}

export interface SkillSubGroup {
  title: string;
  technologies: string[];
}

export interface SkillCategoryItem {
  number: string;
  id: string;
  title: string;
  description: string;
  isKeyStrength?: boolean;
  technologies: string[];
  subGroups?: SkillSubGroup[];
}

