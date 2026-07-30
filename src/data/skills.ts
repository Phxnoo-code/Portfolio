export interface ToolkitSkillItem {
  id: string;
  name: string;
  tag?: string;
  iconKey: string;
}

export interface ToolkitCategory {
  id: string;
  tabName: string;
  skills: ToolkitSkillItem[];
}

export const toolkitCategoriesData: ToolkitCategory[] = [
  {
    id: 'frontend',
    tabName: 'Frontend',
    skills: [
      { id: 'html5', name: 'HTML5', tag: 'MAIN STACK', iconKey: 'html5' },
      { id: 'css3', name: 'CSS3', tag: 'MAIN STACK', iconKey: 'css3' },
      { id: 'javascript', name: 'JavaScript', tag: 'MAIN STACK', iconKey: 'javascript' },
      { id: 'typescript', name: 'TypeScript', tag: 'MAIN STACK', iconKey: 'typescript' },
      { id: 'react', name: 'React', tag: 'MAIN STACK', iconKey: 'react' },
      { id: 'tailwind', name: 'Tailwind CSS', tag: 'FREQUENTLY USED', iconKey: 'tailwind' },
      { id: 'bootstrap', name: 'Bootstrap', tag: 'FREQUENTLY USED', iconKey: 'bootstrap' },
      { id: 'chakra-ui', name: 'Chakra UI', tag: 'FREQUENTLY USED', iconKey: 'chakra-ui' },
      { id: 'vite', name: 'Vite', tag: 'FREQUENTLY USED', iconKey: 'vite' },
      { id: 'framer', name: 'Framer Motion', tag: 'CREATIVE', iconKey: 'framer' },
    ],
  },
  {
    id: 'backend',
    tabName: 'Backend',
    skills: [
      { id: 'php', name: 'PHP', tag: 'MAIN STACK', iconKey: 'php' },
      { id: 'python', name: 'Python', tag: 'MAIN STACK', iconKey: 'python' },
      { id: 'sql', name: 'SQL', tag: 'MAIN STACK', iconKey: 'sql' },
      { id: 'mysql', name: 'MySQL', tag: 'MAIN STACK', iconKey: 'mysql' },
      { id: 'postgresql', name: 'PostgreSQL', tag: 'FREQUENTLY USED', iconKey: 'postgresql' },
      { id: 'nodejs', name: 'Node.js', tag: 'FREQUENTLY USED', iconKey: 'nodejs' },
    ],
  },
  {
    id: 'automation-ai',
    tabName: 'Automation & AI',
    skills: [
      { id: 'openai-api', name: 'OpenAI API', tag: 'MAIN STACK', iconKey: 'openai' },
      { id: 'gemini-api', name: 'Gemini API', tag: 'MAIN STACK', iconKey: 'gemini' },
      { id: 'prompt-engineering', name: 'Prompt Eng.', tag: 'MAIN STACK', iconKey: 'prompt' },
      { id: 'line-messaging-api', name: 'LINE Messaging API', tag: 'MAIN STACK', iconKey: 'line' },
      { id: 'workflow-automation', name: 'Workflow Automation', tag: 'FREQUENTLY USED', iconKey: 'workflow' },
      { id: 'n8n', name: 'n8n', tag: 'FREQUENTLY USED', iconKey: 'n8n' },
      { id: 'api-integration', name: 'API Integration', tag: 'FREQUENTLY USED', iconKey: 'api' },
      { id: 'supabase', name: 'Supabase', tag: 'FREQUENTLY USED', iconKey: 'supabase' },
      { id: 'google-drive-api', name: 'Google Drive API', tag: 'FREQUENTLY USED', iconKey: 'google-drive' },
    ],
  },
  {
    id: 'ui-ux',
    tabName: 'UI / UX',
    skills: [
      { id: 'figma', name: 'Figma', tag: 'MAIN STACK', iconKey: 'figma' },
      { id: 'design-systems', name: 'Design Systems', tag: 'MAIN STACK', iconKey: 'design-systems' },
      { id: 'wireframe', name: 'Wireframing', tag: 'MAIN STACK', iconKey: 'wireframe' },
      { id: 'responsive-design', name: 'Responsive Design', tag: 'FREQUENTLY USED', iconKey: 'responsive-design' },
      { id: 'component-design', name: 'Component-based Design', tag: 'FREQUENTLY USED', iconKey: 'component-design' },
      { id: 'prototype', name: 'Prototyping', tag: 'FREQUENTLY USED', iconKey: 'prototype' },
    ],
  },
  {
    id: 'tools',
    tabName: 'Tools',
    skills: [
      { id: 'git', name: 'Git', tag: 'MAIN STACK', iconKey: 'git' },
      { id: 'github', name: 'GitHub', tag: 'MAIN STACK', iconKey: 'github' },
      { id: 'docker', name: 'Docker', tag: 'MAIN STACK', iconKey: 'docker' },
      { id: 'docker-compose', name: 'Docker Compose', tag: 'FREQUENTLY USED', iconKey: 'docker' },
      { id: 'nginx', name: 'Nginx', tag: 'FREQUENTLY USED', iconKey: 'nginx' },
      { id: 'apache', name: 'Apache', tag: 'FREQUENTLY USED', iconKey: 'apache' },
      { id: 'vscode', name: 'VS Code', tag: 'FREQUENTLY USED', iconKey: 'vscode' },
      { id: 'webstorm', name: 'WebStorm', tag: 'FREQUENTLY USED', iconKey: 'webstorm' },
      { id: 'canva', name: 'Canva', tag: 'CREATIVE', iconKey: 'canva' },
    ],
  },
];

export const skillsData = toolkitCategoriesData;
