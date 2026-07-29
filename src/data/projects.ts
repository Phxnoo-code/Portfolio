import { Project } from '@/types/project';

export const projectsData: Project[] = [
  {
    id: 'ai-hr-line-bot',
    title: 'AI HR LINE Bot',
    description:
      'AI-powered conversational HR assistant on LINE that automates employee policy Q&A and message workflow routing using OpenAI and event-driven webhooks.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    category: 'AI & Automation',
    status: 'Completed',
    technologies: ['LINE Messaging API', 'Node.js', 'TypeScript', 'OpenAI API', 'Python', 'Webhooks'],
    githubUrl: 'https://github.com/example/ai-hr-line-bot',
    demoUrl: 'https://example.com/demo/hr-bot',
    featured: true,
  },

  {
    id: 'barber-booking-system',
    title: 'Barber Booking System',
    description:
      'Developed a digital booking solution for barbershop businesses, improving appointment management and creating a smoother customer scheduling experience.',
    image: '/images/projects/barber.png',
    category: 'Web App',
    status: 'Completed',
    technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'Booking Plugin'],
    githubUrl: 'https://github.com/phanoo/barber-booking',
    demoUrl: 'https://example.com/demo/barber-booking',
    featured: true,
  },
  {
    id: 'resume-ai-screening',
    title: 'Resume AI Screening Concept',
    description:
      'Automated candidate evaluation pipeline that parses PDF resumes, scores technical alignment against job descriptions, and provides structured candidate feedback.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
    category: 'AI & Automation',
    status: 'In Progress',
    technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'LLM Pipeline', 'Tailwind CSS'],
    githubUrl: 'https://github.com/example/resume-ai-screening',
    demoUrl: 'https://example.com/demo/resume-screening',
    featured: true,
  },
];
