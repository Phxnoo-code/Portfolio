import { Project } from '@/types/project';

export const projectsData: Project[] = [
  {
    id: 'ai-hr-line-bot',
    title: 'AI HR LINE Bot',
    description:
      'Intelligent HR assistant integrated with LINE Messaging API. Automates employee policy Q&A, leave balance inquiries, and automated HR workflow routing using AI.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    category: 'AI & Automation',
    status: 'Completed',
    technologies: ['LINE Messaging API', 'Node.js', 'TypeScript', 'OpenAI API', 'Python', 'Webhooks'],
    githubUrl: 'https://github.com/example/ai-hr-line-bot',
    demoUrl: 'https://example.com/demo/hr-bot',
    featured: true,
  },
  {
    id: 'it-equipment-borrowing',
    title: 'IT Equipment Borrowing System',
    description:
      'Fullstack enterprise web application for IT asset tracking, hardware reservation, approval workflows, and SQL database management for organizational devices.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
    category: 'Web App',
    status: 'Completed',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Express'],
    githubUrl: 'https://github.com/example/it-equipment-system',
    demoUrl: 'https://example.com/demo/equipment',
    featured: true,
  },
  {
    id: 'barber-booking-system',
    title: 'Barber Booking System',
    description:
      'Modern customer appointment platform featuring real-time queue management, service selection, barber calendar synchronization, and mobile-first UX.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
    category: 'Web App',
    status: 'Completed',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Prisma', 'Stripe'],
    githubUrl: 'https://github.com/example/barber-booking',
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
