export interface ToolkitSkillItem {
  id: string;
  name: string;
  tag: 'MAIN STACK' | 'FREQUENTLY USED' | 'CORE ENGINE' | 'PRIMARY' | 'CREATIVE';
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
      { id: 'vite', name: 'Vite', tag: 'FREQUENTLY USED', iconKey: 'vite' },
      { id: 'nextjs', name: 'Next.js', tag: 'FREQUENTLY USED', iconKey: 'nextjs' },
      { id: 'tailwind', name: 'Tailwind CSS', tag: 'FREQUENTLY USED', iconKey: 'tailwind' },
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
    id: 'automation',
    tabName: 'Automation',
    skills: [
      { id: 'api', name: 'API Integration', tag: 'MAIN STACK', iconKey: 'api' },
      { id: 'workflow', name: 'Workflow Engine', tag: 'MAIN STACK', iconKey: 'workflow' },
      { id: 'linebot', name: 'LINE Bot API', tag: 'MAIN STACK', iconKey: 'linebot' },
      { id: 'webhooks', name: 'Webhooks', tag: 'FREQUENTLY USED', iconKey: 'webhooks' },
      { id: 'n8n', name: 'n8n Pipelines', tag: 'FREQUENTLY USED', iconKey: 'n8n' },
    ],
  },
  {
    id: 'ai',
    tabName: 'AI Integration',
    skills: [
      { id: 'llm', name: 'LLM APIs', tag: 'MAIN STACK', iconKey: 'llm' },
      { id: 'prompt', name: 'Prompt Eng.', tag: 'MAIN STACK', iconKey: 'prompt' },
      { id: 'chatbot', name: 'AI Chatbot', tag: 'MAIN STACK', iconKey: 'chatbot' },
      { id: 'rag', name: 'RAG Systems', tag: 'FREQUENTLY USED', iconKey: 'rag' },
      { id: 'agents', name: 'AI Agents', tag: 'CREATIVE', iconKey: 'agents' },
    ],
  },
  {
    id: 'ui-ux',
    tabName: 'UI / UX',
    skills: [
      { id: 'figma', name: 'Figma', tag: 'MAIN STACK', iconKey: 'figma' },
      { id: 'design-systems', name: 'Design Systems', tag: 'MAIN STACK', iconKey: 'design-systems' },
      { id: 'wireframe', name: 'Wireframing', tag: 'MAIN STACK', iconKey: 'wireframe' },
      { id: 'prototype', name: 'Prototyping', tag: 'FREQUENTLY USED', iconKey: 'prototype' },
    ],
  },
  {
    id: 'tools',
    tabName: 'Tools',
    skills: [
      { id: 'git', name: 'Git', tag: 'MAIN STACK', iconKey: 'git' },
      { id: 'docker', name: 'Docker', tag: 'MAIN STACK', iconKey: 'docker' },
      { id: 'linux', name: 'Linux', tag: 'MAIN STACK', iconKey: 'linux' },
      { id: 'vscode', name: 'VS Code', tag: 'MAIN STACK', iconKey: 'vscode' },
      { id: 'npm', name: 'npm', tag: 'FREQUENTLY USED', iconKey: 'npm' },
    ],
  },
];

export const skillsData = toolkitCategoriesData;
