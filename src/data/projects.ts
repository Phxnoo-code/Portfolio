import { ProjectCaseStudy } from '@/types/project';

/**
 * Single Source of Truth for Project Data
 * Contains all project metadata, URLs (GitHub & Demo), assets, and fallback text strings.
 */
export const projectsData: ProjectCaseStudy[] = [
  {
    id: 'portfolio-website',
    number: '01',
    category: 'Digital Product',
    title: 'Portfolio Website',
    roles: ['Product Design', 'Frontend Development', 'Motion Design'],
    shortDescription:
      'A personal portfolio website designed and developed to showcase projects, skills, and experiences through modern UI and interactive motion.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    image: '/images/projects/portfolio.webp',
    overview:
      'Designed and developed my personal portfolio website to showcase my projects, skills, and experience through a modern and interactive digital experience. The website focuses on clean layouts, clear content structure, and smooth animations to create an engaging user experience.',
    problem:
      'Many developer portfolios focus mainly on listing skills and projects but often lack a clear personal identity and meaningful presentation. I wanted to create a portfolio that communicates not only what I can build, but also how I think about design and user experience.',
    solution:
      'Created a custom portfolio experience using a dark minimalist design system, responsive layouts, and interactive animations. The website combines modern UI patterns, reusable components, and motion design to present projects in a more engaging and structured way.',
    keyFeatures: [
      'Responsive Portfolio Experience: Designed a responsive interface that adapts across different screen sizes.',
      'Modern UI Design System: Built reusable components and consistent design patterns for the entire website.',
      'Interactive Motion Design: Implemented smooth animations and transitions using Framer Motion.',
      'Project Case Study Presentation: Created structured project sections to showcase process, technologies, and outcomes.',
      'Modern Frontend Architecture: Built with React, TypeScript, and Vite using reusable components and maintainable structure.',
    ],
    demoUrl: 'https://phanoo-portfolio.vercel.app',
    githubUrl: 'https://github.com/Phxnoo-code/Portfolio',
    isImageRight: true,
  },
  {
    id: 'line-hr-assistant',
    number: '02',
    category: 'AI Automation',
    title: 'LINE HR Assistant',
    roles: ['System Integration', 'Workflow Automation', 'AI Integration'],
    shortDescription:
      'AI-powered HR assistant built on LINE that helps employees get answers to common HR questions while reducing repetitive HR support tasks through generative AI.',
    technologies: ['LINE Messaging API', 'n8n', 'Google Gemini API', 'Webhooks'],
    image: '/images/projects/chat_bot.webp',
    overview:
      'An AI-powered HR assistant built on LINE that helps employees get answers to common HR questions. The system uses LINE Messaging API, webhooks, and n8n to automate the workflow, while Google Gemini generates responses based on user inquiries.',
    problem:
      'Employees often need to ask HR the same questions about company policies, onboarding information, and workplace guidelines. Handling these repetitive questions manually takes time and prevents HR teams from focusing on more important tasks.',
    solution:
      'Built an automated workflow where employee messages from LINE trigger a webhook connected to n8n. The workflow processes the request, sends the user inquiry to Google Gemini for response generation, and delivers the answer back through LINE.',
    keyFeatures: [
      'AI-powered HR Q&A: Provides automated answers for common HR questions and workplace information.',
      'LINE Messaging Integration: Allows employees to communicate with the HR assistant directly through LINE.',
      'Workflow Automation with n8n: Connects LINE, webhooks, and Gemini into an automated message processing workflow.',
      'Gemini AI Integration: Uses Google Gemini to generate natural language responses based on user questions.',
      'Webhook Event Processing: Receives LINE message events and triggers automated workflows.',
    ],
    githubUrl: 'https://github.com/Phxnoo-code/line-hr-assistant',
    isImageRight: false,
  },
  {
    id: 'barber-booking-system',
    number: '03',
    category: 'Business Website',
    title: 'Barber Booking System',
    roles: ['Web Development', 'System Integration', 'WordPress Customization'],
    shortDescription:
      'Developed a digital booking solution for barbershop businesses, improving appointment management and creating a smoother customer scheduling experience.',
    technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'Booking Plugin'],
    image: '/images/projects/barber.webp',
    overview:
      'Developed a digital booking solution for barbershop businesses, improving appointment management and creating a smoother customer scheduling experience.',
    problem:
      'Many small barbershops still manage appointments manually, which can lead to scheduling conflicts, unclear availability, and inefficient customer management.',
    solution:
      'Implemented a WordPress-based booking system with customized workflows, enabling customers to select services, schedule appointments, and allowing staff to manage bookings more efficiently.',
    keyFeatures: [
      'Online appointment booking system for customers',
      'Service selection and booking information management',
      'Appointment scheduling and calendar management',
      'Responsive experience optimized for mobile users',
    ],
    demoUrl: 'https://example.com/barber-booking',
    githubUrl: 'https://github.com/Phxnoo-code/barber-booking',
    isImageRight: true,
  },
];
