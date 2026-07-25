import { SkillGroup } from '@/types/skill';

export const skillsData: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: [
      { id: 'react', name: 'React 18+', category: 'Frontend', level: 'Expert' },
      { id: 'typescript', name: 'TypeScript', category: 'Frontend', level: 'Expert' },
      { id: 'nextjs', name: 'Next.js', category: 'Frontend', level: 'Advanced' },
      { id: 'tailwindcss', name: 'Tailwind CSS', category: 'Frontend', level: 'Expert' },
      { id: 'framer-motion', name: 'Framer Motion', category: 'Frontend', level: 'Advanced' },
      { id: 'vite', name: 'Vite', category: 'Frontend', level: 'Expert' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { id: 'nodejs', name: 'Node.js', category: 'Backend', level: 'Advanced' },
      { id: 'express', name: 'Express.js', category: 'Backend', level: 'Advanced' },
      { id: 'python', name: 'Python', category: 'Backend', level: 'Advanced' },
      { id: 'fastapi', name: 'FastAPI', category: 'Backend', level: 'Intermediate' },
      { id: 'rest-api', name: 'REST APIs', category: 'Backend', level: 'Expert' },
    ],
  },
  {
    category: 'AI & Automation',
    skills: [
      { id: 'openai-api', name: 'OpenAI API Integration', category: 'AI & Automation', level: 'Advanced' },
      { id: 'line-bot', name: 'LINE Messaging API', category: 'AI & Automation', level: 'Expert' },
      { id: 'llm-workflows', name: 'LLM Prompt Engineering', category: 'AI & Automation', level: 'Advanced' },
      { id: 'webhooks', name: 'Automation & Webhooks', category: 'AI & Automation', level: 'Expert' },
    ],
  },
  {
    category: 'Database',
    skills: [
      { id: 'postgresql', name: 'PostgreSQL', category: 'Database', level: 'Advanced' },
      { id: 'mongodb', name: 'MongoDB', category: 'Database', level: 'Intermediate' },
      { id: 'prisma', name: 'Prisma ORM', category: 'Database', level: 'Advanced' },
      { id: 'sql-design', name: 'SQL Schema Design', category: 'Database', level: 'Advanced' },
    ],
  },
  {
    category: 'Tools & DevOps',
    skills: [
      { id: 'git', name: 'Git & GitHub', category: 'Tools & DevOps', level: 'Expert' },
      { id: 'docker', name: 'Docker', category: 'Tools & DevOps', level: 'Intermediate' },
      { id: 'eslint-prettier', name: 'ESLint & Prettier', category: 'Tools & DevOps', level: 'Expert' },
      { id: 'npm-vite', name: 'Build Tools & Bundlers', category: 'Tools & DevOps', level: 'Advanced' },
    ],
  },
];
